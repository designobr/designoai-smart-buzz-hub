import { admin, asaas, audit, corsHeaders, json } from "../_shared/asaas.ts";
import { processEvent } from "./process.ts";

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  const expected = Deno.env.get("ASAAS_WEBHOOK_TOKEN");
  const got = req.headers.get("asaas-access-token") ?? "";
  if (!expected || !safeEqual(got, expected)) return json({ error: "unauthorized" }, 401);

  const payload = await req.json().catch(() => null);
  if (!payload?.event) return json({ error: "invalid payload" }, 400);

  const db = admin();
  const eventId: string = payload.id ?? `${payload.event}:${payload.payment?.id ?? payload.subscription?.id}:${payload.dateCreated}`;

  const { data: inserted, error } = await db
    .from("billing_webhook_events")
    .insert({ provider: "asaas", event_id: eventId, event_type: payload.event, payload })
    .select("id")
    .maybeSingle();
  if (error) {
    if (error.code === "23505") return json({ ok: true, duplicate: true });
    console.error("webhook insert", error);
    return json({ error: "storage" }, 500);
  }

  try {
    const result = await processEvent(db, payload, asaas);
    await db.from("billing_webhook_events").update({ status: result.status, error: result.error ?? null, processed_at: new Date().toISOString() }).eq("id", inserted!.id);
    if (result.status === "rejected") {
      await audit(db, { actor_type: "gateway", action: "webhook_rejected", entity: "webhook_event", entity_id: eventId, after: { reason: result.error } });
    }
    return json({ ok: true });
  } catch (e) {
    console.error("webhook process", e);
    // Remove the record so Asaas' retry is processed again.
    await db.from("billing_webhook_events").delete().eq("id", inserted!.id);
    return json({ error: "processing failed" }, 500);
  }
});
