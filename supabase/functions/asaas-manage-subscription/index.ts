import { z } from "npm:zod@3";
import { admin, asaas, AsaasError, audit, corsHeaders, json, requireUser } from "../_shared/asaas.ts";

const Body = z.discriminatedUnion("action", [
  z.object({ action: z.literal("cancel") }),
  z.object({ action: z.literal("change_billing_type"), billing_type: z.enum(["CREDIT_CARD", "PIX", "BOLETO"]) }),
  z.object({ action: z.literal("pending_invoice") }),
]);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);
  const user = await requireUser(req);
  if (!user) return json({ error: "unauthorized" }, 401);
  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400);

  const db = admin();
  const { data: company } = await db.from("companies").select("id").eq("owner_id", user.id).order("created_at").limit(1).maybeSingle();
  if (!company) return json({ error: "no company" }, 404);
  const { data: sub } = await db.from("subscriptions").select("*").eq("company_id", company.id).eq("provider", "asaas")
    .in("status", ["pending", "active", "past_due", "suspended"]).order("created_at", { ascending: false }).limit(1).maybeSingle();
  if (!sub) return json({ error: "Nenhuma assinatura em andamento." }, 404);

  try {
    const body = parsed.data;
    if (body.action === "cancel") {
      await asaas(`/subscriptions/${sub.provider_subscription_id}`, { method: "DELETE" });
      await audit(db, { company_id: company.id, actor_id: user.id, actor_type: "customer", action: "cancel_requested", entity: "subscription", entity_id: sub.id, after: { access_until: sub.current_period_end } });
      return json({ ok: true, message: "Cancelamento solicitado. O acesso continua até o fim do período pago." });
    }
    if (body.action === "change_billing_type") {
      await asaas(`/subscriptions/${sub.provider_subscription_id}`, { method: "POST", body: { billingType: body.billing_type, updatePendingPayments: true } });
      await audit(db, { company_id: company.id, actor_id: user.id, actor_type: "customer", action: "billing_type_change_requested", entity: "subscription", entity_id: sub.id, before: { billing_type: sub.billing_type }, after: { billing_type: body.billing_type } });
      return json({ ok: true });
    }
    const payments = await asaas(`/subscriptions/${sub.provider_subscription_id}/payments?status=PENDING`);
    const overdue = await asaas(`/subscriptions/${sub.provider_subscription_id}/payments?status=OVERDUE`);
    const next = overdue?.data?.[0] ?? payments?.data?.[0];
    return json({ invoice_url: next?.invoiceUrl ?? null });
  } catch (e) {
    console.error("manage", e instanceof AsaasError ? e.details : e);
    return json({ error: "Não foi possível concluir no Asaas." }, 502);
  }
});
