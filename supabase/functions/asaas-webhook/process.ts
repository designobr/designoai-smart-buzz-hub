// Core webhook rules. Pure enough to be tested with a fake db and fake Asaas client.
import { addMonth, audit, toCents } from "../_shared/asaas.ts";

type Result = { status: "processed" | "ignored" | "rejected"; error?: string };
type AsaasFetch = (path: string) => Promise<any>;

const PAID = new Set(["CONFIRMED", "RECEIVED", "RECEIVED_IN_CASH"]);
const REVERSAL_EVENTS = new Set([
  "PAYMENT_REFUNDED",
  "PAYMENT_PARTIALLY_REFUNDED",
  "PAYMENT_CHARGEBACK_REQUESTED",
  "PAYMENT_CHARGEBACK_DISPUTE",
  "PAYMENT_AWAITING_CHARGEBACK_REVERSAL",
]);

export async function processEvent(db: any, payload: any, fetchAsaas: AsaasFetch): Promise<Result> {
  const event: string = payload.event;
  if (event.startsWith("PAYMENT_") && payload.payment?.id) return handlePayment(db, event, payload.payment.id, fetchAsaas);
  if (event.startsWith("SUBSCRIPTION_") && payload.subscription?.id) return handleSubscription(db, event, payload.subscription.id, fetchAsaas);
  return { status: "ignored" };
}

async function loadSub(db: any, asaasSubId: string) {
  const { data } = await db.from("subscriptions").select("*").eq("provider", "asaas").eq("provider_subscription_id", asaasSubId).maybeSingle();
  return data;
}

async function handlePayment(db: any, event: string, paymentId: string, fetchAsaas: AsaasFetch): Promise<Result> {
  // Never trust the webhook body: re-read the charge from Asaas.
  const p = await fetchAsaas(`/payments/${paymentId}`);
  if (!p?.id || p.id !== paymentId) return { status: "rejected", error: "payment not found at gateway" };
  if (!p.subscription) return { status: "ignored", error: "payment without subscription" };

  const sub = await loadSub(db, p.subscription);
  if (!sub) return { status: "rejected", error: "unknown subscription" };

  const { data: company } = await db.from("companies").select("id, asaas_customer_id").eq("id", sub.company_id).maybeSingle();
  if (!company || company.asaas_customer_id !== p.customer) return { status: "rejected", error: "customer mismatch" };

  const valueCents = toCents(p.value)!;
  const row = {
    company_id: sub.company_id,
    subscription_id: sub.id,
    asaas_payment_id: p.id,
    asaas_subscription_id: p.subscription,
    value_cents: valueCents,
    net_value_cents: toCents(p.netValue),
    billing_type: p.billingType,
    status: p.status,
    due_date: p.dueDate,
    paid_at: p.confirmedDate ?? p.paymentDate ?? p.clientPaymentDate ?? null,
    invoice_url: p.invoiceUrl ?? null,
    bank_slip_url: p.bankSlipUrl ?? null,
    environment: sub.environment,
  };
  const { data: existing } = await db.from("billing_payments").select("*").eq("asaas_payment_id", p.id).maybeSingle();
  const { data: saved, error } = existing
    ? await db.from("billing_payments").update(row).eq("id", existing.id).select().single()
    : await db.from("billing_payments").insert(row).select().single();
  if (error) throw error;

  if (!existing) {
    await audit(db, { company_id: sub.company_id, actor_type: "gateway", action: "payment_registered", entity: "payment", entity_id: saved.id, after: row });
  } else if (existing.status !== p.status) {
    await audit(db, { company_id: sub.company_id, actor_type: "gateway", action: "payment_status_changed", entity: "payment", entity_id: saved.id, before: { status: existing.status }, after: { status: p.status } });
  }

  // Confirmed payment: validate amount, then grant access and credits once.
  if ((event === "PAYMENT_CONFIRMED" || event === "PAYMENT_RECEIVED") && PAID.has(p.status)) {
    if (valueCents !== sub.price_cents) {
      await db.from("billing_payments").update({ validation_error: `value ${valueCents} != contracted ${sub.price_cents}` }).eq("id", saved.id);
      return { status: "rejected", error: "amount mismatch" };
    }
    const credits = Number(sub.contracted_limits?.monthly_credits ?? 0);
    if (credits > 0) {
      const { error: ce } = await db.from("credit_ledger").insert({ company_id: sub.company_id, amount: credits, reason: "subscription_payment", reference_id: saved.id });
      if (ce && ce.code !== "23505") throw ce;
      if (!ce) {
        await db.from("billing_payments").update({ credits_granted: credits }).eq("id", saved.id);
        await audit(db, { company_id: sub.company_id, actor_type: "gateway", action: "credits_granted", entity: "credit_ledger", entity_id: saved.id, after: { amount: credits } });
      }
    }
    const periodEnd = addMonth(p.dueDate);
    const keepCanceled = sub.status === "canceled";
    const patch: Record<string, unknown> = {
      current_period_start: `${p.dueDate}T00:00:00Z`,
      current_period_end: sub.current_period_end && sub.current_period_end > periodEnd ? sub.current_period_end : periodEnd,
      last_payment_at: row.paid_at ?? new Date().toISOString(),
    };
    if (!keepCanceled) patch.status = "active";
    await db.from("subscriptions").update(patch).eq("id", sub.id);
    await audit(db, { company_id: sub.company_id, actor_type: "gateway", action: "subscription_renewed", entity: "subscription", entity_id: sub.id, before: { status: sub.status, current_period_end: sub.current_period_end }, after: patch });
    return { status: "processed" };
  }

  if (event === "PAYMENT_OVERDUE" && sub.status === "active") {
    await db.from("subscriptions").update({ status: "past_due" }).eq("id", sub.id);
    await audit(db, { company_id: sub.company_id, actor_type: "gateway", action: "subscription_past_due", entity: "subscription", entity_id: sub.id, before: { status: sub.status }, after: { status: "past_due" } });
    return { status: "processed" };
  }

  if (REVERSAL_EVENTS.has(event)) {
    const granted = Number(saved.credits_granted ?? 0);
    if (granted > 0) {
      const { error: ce } = await db.from("credit_ledger").insert({ company_id: sub.company_id, amount: -granted, reason: "payment_reversal", reference_id: saved.id });
      if (ce && ce.code !== "23505") throw ce;
      if (!ce) await audit(db, { company_id: sub.company_id, actor_type: "gateway", action: "credits_reversed", entity: "credit_ledger", entity_id: saved.id, after: { amount: -granted, event } });
    }
    await db.from("billing_payments").update({ refunded_at: new Date().toISOString() }).eq("id", saved.id);
    if (sub.status !== "canceled") {
      await db.from("subscriptions").update({ status: "suspended" }).eq("id", sub.id);
      await audit(db, { company_id: sub.company_id, actor_type: "gateway", action: "subscription_suspended", entity: "subscription", entity_id: sub.id, before: { status: sub.status }, after: { status: "suspended", event } });
    }
    return { status: "processed" };
  }

  return { status: "processed" };
}

async function handleSubscription(db: any, event: string, asaasSubId: string, fetchAsaas: AsaasFetch): Promise<Result> {
  const sub = await loadSub(db, asaasSubId);
  if (!sub) return { status: "rejected", error: "unknown subscription" };

  if (event === "SUBSCRIPTION_DELETED" || event === "SUBSCRIPTION_INACTIVATED") {
    if (sub.status === "canceled") return { status: "ignored" };
    const patch = { status: "canceled", cancel_at_period_end: true, canceled_at: new Date().toISOString() };
    await db.from("subscriptions").update(patch).eq("id", sub.id);
    await audit(db, { company_id: sub.company_id, actor_type: "gateway", action: "subscription_canceled", entity: "subscription", entity_id: sub.id, before: { status: sub.status }, after: { ...patch, access_until: sub.current_period_end } });
    return { status: "processed" };
  }

  if (event === "SUBSCRIPTION_UPDATED") {
    const remote = await fetchAsaas(`/subscriptions/${asaasSubId}`);
    const patch = { billing_type: remote.billingType, next_due_date: remote.nextDueDate };
    await db.from("subscriptions").update(patch).eq("id", sub.id);
    const remoteCents = toCents(remote.value);
    if (remoteCents !== sub.price_cents) {
      // Price changed outside an authorized contract change: flag it, do not adopt it.
      await audit(db, { company_id: sub.company_id, actor_type: "gateway", action: "unexpected_price_change", entity: "subscription", entity_id: sub.id, before: { price_cents: sub.price_cents }, after: { price_cents: remoteCents } });
    }
    return { status: "processed" };
  }

  return { status: "ignored" };
}
