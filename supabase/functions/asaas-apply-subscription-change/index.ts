import { z } from "npm:zod@3";
import { admin, asaas, AsaasError, audit, corsHeaders, isAdmin, json, requireUser } from "../_shared/asaas.ts";

const Limits = z.record(z.unknown()).optional();
const Body = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("propose"),
    subscription_id: z.string().uuid(),
    new_price_cents: z.number().int().positive().optional(),
    new_limits: Limits,
    reason: z.string().min(5).max(500),
    effective_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  }),
  z.object({ action: z.literal("notify"), change_id: z.string().uuid() }),
  z.object({ action: z.literal("authorize"), change_id: z.string().uuid() }),
  z.object({ action: z.literal("apply"), change_id: z.string().uuid() }),
  z.object({ action: z.literal("cancel"), change_id: z.string().uuid() }),
]);

const MIN_NOTICE_DAYS = 30;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);
  const user = await requireUser(req);
  if (!user) return json({ error: "unauthorized" }, 401);
  const db = admin();
  if (!(await isAdmin(db, user.id))) return json({ error: "forbidden" }, 403);

  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400);
  const body = parsed.data;
  const log = (company_id: string, action: string, entity_id: string, before?: unknown, after?: unknown) =>
    audit(db, { company_id, actor_id: user.id, actor_type: "admin", action, entity: "subscription_change", entity_id, before, after });

  if (body.action === "propose") {
    const { data: sub } = await db.from("subscriptions").select("*").eq("id", body.subscription_id).maybeSingle();
    if (!sub) return json({ error: "subscription not found" }, 404);
    if (!body.new_price_cents && !body.new_limits) return json({ error: "nothing to change" }, 400);
    const { data, error } = await db.from("subscription_changes").insert({
      subscription_id: sub.id, company_id: sub.company_id,
      old_price_cents: sub.price_cents, new_price_cents: body.new_price_cents ?? sub.price_cents,
      old_limits: sub.contracted_limits, new_limits: body.new_limits ? { ...sub.contracted_limits, ...body.new_limits } : sub.contracted_limits,
      reason: body.reason, effective_date: body.effective_date, requested_by: user.id, status: "proposed",
    }).select().single();
    if (error) return json({ error: error.message }, 400);
    await log(sub.company_id, "change_proposed", data.id, null, data);
    return json({ change: data });
  }

  const { data: change } = await db.from("subscription_changes").select("*").eq("id", body.change_id).maybeSingle();
  if (!change) return json({ error: "change not found" }, 404);
  const set = async (patch: Record<string, unknown>, action: string) => {
    const { data } = await db.from("subscription_changes").update(patch).eq("id", change.id).select().single();
    await log(change.company_id, action, change.id, { status: change.status }, patch);
    return json({ change: data });
  };

  if (body.action === "cancel") {
    if (change.status === "applied") return json({ error: "already applied" }, 409);
    return set({ status: "canceled" }, "change_canceled");
  }
  if (body.action === "notify") {
    if (change.status !== "proposed") return json({ error: "only proposed changes can be notified" }, 409);
    const minDate = new Date(Date.now() + MIN_NOTICE_DAYS * 86400000).toISOString().slice(0, 10);
    if (change.effective_date < minDate) return json({ error: `A vigência precisa ter pelo menos ${MIN_NOTICE_DAYS} dias de aviso.` }, 400);
    return set({ status: "notified", notified_at: new Date().toISOString() }, "change_notified");
  }
  if (body.action === "authorize") {
    if (change.status !== "accepted") return json({ error: "O cliente ainda não concordou com a alteração." }, 409);
    return set({ status: "authorized", authorized_by: user.id, authorized_at: new Date().toISOString() }, "change_authorized");
  }

  // apply
  if (change.status !== "authorized" || !change.customer_response_at) return json({ error: "Alteração precisa estar aceita pelo cliente e autorizada." }, 409);
  if (change.effective_date > new Date().toISOString().slice(0, 10)) return json({ error: "A data de vigência ainda não chegou." }, 409);
  const { data: sub } = await db.from("subscriptions").select("*").eq("id", change.subscription_id).single();
  try {
    if (change.new_price_cents !== sub.price_cents) {
      // updatePendingPayments=false: already generated charges keep the old value.
      await asaas(`/subscriptions/${sub.provider_subscription_id}`, { method: "POST", body: { value: change.new_price_cents / 100, updatePendingPayments: false } });
    }
  } catch (e) {
    console.error("apply change", e instanceof AsaasError ? e.details : e);
    return json({ error: "Asaas recusou a alteração." }, 502);
  }
  await db.from("subscriptions").update({ price_cents: change.new_price_cents, contracted_limits: change.new_limits }).eq("id", sub.id);
  await audit(db, { company_id: sub.company_id, actor_id: user.id, actor_type: "admin", action: "contract_changed", entity: "subscription", entity_id: sub.id,
    before: { price_cents: sub.price_cents, contracted_limits: sub.contracted_limits }, after: { price_cents: change.new_price_cents, contracted_limits: change.new_limits, change_id: change.id } });
  return set({ status: "applied", applied_at: new Date().toISOString() }, "change_applied");
});
