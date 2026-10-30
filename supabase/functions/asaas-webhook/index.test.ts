import { assertEquals } from "https://deno.land/std@0.224.0/assert/mod.ts";
import { processEvent } from "./process.ts";

// Minimal in-memory stand-in for the Supabase client, covering the calls process.ts makes.
function fakeDb(seed: Record<string, any[]>) {
  const tables: Record<string, any[]> = { billing_payments: [], credit_ledger: [], billing_audit_log: [], subscription_changes: [], ...seed };
  const uniq: Record<string, (r: any) => string> = { credit_ledger: (r) => `${r.reference_id}|${r.reason}` };
  let id = 0;
  function q(table: string) {
    const filters: ((r: any) => boolean)[] = [];
    let op: "select" | "insert" | "update" = "select";
    let payload: any;
    let err: any = null;
    const run = () => {
      const rows = tables[table] ??= [];
      if (op === "insert") {
        const r = { id: `id${++id}`, ...payload };
        const key = uniq[table];
        if (key && r.reference_id && rows.some((x) => key(x) === key(r))) { err = { code: "23505" }; return []; }
        rows.push(r);
        return [r];
      }
      const hit = rows.filter((r) => filters.every((f) => f(r)));
      if (op === "update") hit.forEach((r) => Object.assign(r, payload));
      return hit;
    };
    const api: any = {
      select: () => api,
      insert: (p: any) => { op = "insert"; payload = p; return api; },
      update: (p: any) => { op = "update"; payload = p; return api; },
      eq: (k: string, v: any) => { filters.push((r) => r[k] === v); return api; },
      in: (k: string, v: any[]) => { filters.push((r) => v.includes(r[k])); return api; },
      gte: (k: string, v: any) => { filters.push((r) => r[k] >= v); return api; },
      limit: () => api,
      order: () => api,
      maybeSingle: async () => { const r = run(); return { data: err ? null : r[0] ?? null, error: err }; },
      single: async () => { const r = run(); return { data: r[0] ?? null, error: err }; },
      then: (res: any) => { const r = run(); return Promise.resolve({ data: r, error: err }).then(res); },
    };
    return api;
  }
  return { db: { from: q }, tables };
}

function setup(paymentValue = 97) {
  const { db, tables } = fakeDb({
    companies: [{ id: "co1", asaas_customer_id: "cus_1" }],
    subscriptions: [{ id: "sub1", company_id: "co1", provider: "asaas", provider_subscription_id: "sub_a", status: "pending", price_cents: 9700, contracted_limits: { monthly_credits: 100 }, environment: "sandbox", current_period_end: null }],
  });
  const payment = { id: "pay_1", customer: "cus_1", subscription: "sub_a", value: paymentValue, netValue: paymentValue, billingType: "PIX", status: "RECEIVED", dueDate: "2026-11-01", paymentDate: "2026-11-01", dateCreated: "2026-10-30" };
  const asaas = async (path: string) => (path === "/payments/pay_1" ? payment : {});
  return { db, tables, asaas, payment };
}

const balance = (t: any) => t.credit_ledger.reduce((s: number, r: any) => s + r.amount, 0);

Deno.test("creating the subscription alone does not release access", () => {
  const { tables } = setup();
  assertEquals(tables.subscriptions[0].status, "pending");
});

Deno.test("confirmed payment activates subscription and grants plan credits once", async () => {
  const { db, tables, asaas } = setup();
  await processEvent(db, { event: "PAYMENT_RECEIVED", payment: { id: "pay_1" } }, asaas);
  await processEvent(db, { event: "PAYMENT_CONFIRMED", payment: { id: "pay_1" } }, asaas);
  assertEquals(tables.subscriptions[0].status, "active");
  assertEquals(balance(tables), 100);
  assertEquals(tables.subscriptions[0].current_period_end, "2026-12-01T00:00:00.000Z");
});

Deno.test("payment with a value different from the contracted price is rejected", async () => {
  const { db, tables, asaas } = setup(50);
  const r = await processEvent(db, { event: "PAYMENT_RECEIVED", payment: { id: "pay_1" } }, asaas);
  assertEquals(r.status, "rejected");
  assertEquals(tables.subscriptions[0].status, "pending");
  assertEquals(balance(tables), 0);
});

Deno.test("payment from another customer is rejected", async () => {
  const { db, tables, asaas, payment } = setup();
  payment.customer = "cus_other";
  const r = await processEvent(db, { event: "PAYMENT_RECEIVED", payment: { id: "pay_1" } }, asaas);
  assertEquals(r.status, "rejected");
  assertEquals(balance(tables), 0);
});

Deno.test("refund removes granted credits and suspends the subscription", async () => {
  const { db, tables, asaas, payment } = setup();
  await processEvent(db, { event: "PAYMENT_RECEIVED", payment: { id: "pay_1" } }, asaas);
  payment.status = "REFUNDED";
  await processEvent(db, { event: "PAYMENT_REFUNDED", payment: { id: "pay_1" } }, asaas);
  await processEvent(db, { event: "PAYMENT_REFUNDED", payment: { id: "pay_1" } }, asaas);
  assertEquals(balance(tables), 0);
  assertEquals(tables.subscriptions[0].status, "suspended");
});

Deno.test("cancellation keeps access until the paid period ends", async () => {
  const { db, tables, asaas } = setup();
  await processEvent(db, { event: "PAYMENT_RECEIVED", payment: { id: "pay_1" } }, asaas);
  await processEvent(db, { event: "SUBSCRIPTION_DELETED", subscription: { id: "sub_a" } }, asaas);
  const s = tables.subscriptions[0];
  assertEquals(s.status, "canceled");
  assertEquals(s.cancel_at_period_end, true);
  assertEquals(s.current_period_end, "2026-12-01T00:00:00.000Z");
});
