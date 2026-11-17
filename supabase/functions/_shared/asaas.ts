import { createClient, SupabaseClient } from "npm:@supabase/supabase-js@2";

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, asaas-access-token, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

export function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

/** Sandbox unless production is explicitly enabled by two separate settings. */
export function asaasEnv(): "sandbox" | "production" {
  const env = Deno.env.get("ASAAS_ENV");
  const allow = Deno.env.get("ASAAS_ALLOW_PRODUCTION");
  return env === "production" && allow === "true" ? "production" : "sandbox";
}

export function asaasBaseUrl() {
  return asaasEnv() === "production" ? "https://api.asaas.com/v3" : "https://api-sandbox.asaas.com/v3";
}

export class AsaasError extends Error {
  constructor(public status: number, public details: unknown) {
    super(`Asaas request failed (${status})`);
  }
}

export async function asaas<T = any>(path: string, init: { method?: string; body?: unknown } = {}): Promise<T> {
  const key = Deno.env.get("ASAAS_API_KEY");
  if (!key) throw new Error("ASAAS_API_KEY not configured");
  const res = await fetch(`${asaasBaseUrl()}${path}`, {
    method: init.method ?? "GET",
    headers: { "Content-Type": "application/json", access_token: key, "User-Agent": "DesignoAI-Social-Automation" },
    body: init.body ? JSON.stringify(init.body) : undefined,
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : {};
  if (!res.ok) throw new AsaasError(res.status, data?.errors ?? data);
  return data as T;
}

export function admin(): SupabaseClient {
  return createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
    auth: { persistSession: false },
  });
}

export async function requireUser(req: Request) {
  const auth = req.headers.get("Authorization") ?? "";
  const token = auth.replace(/^Bearer\s+/i, "");
  if (!token) return null;
  const client = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    auth: { persistSession: false },
  });
  const { data, error } = await client.auth.getUser(token);
  if (error || !data.user) return null;
  return data.user;
}

export async function isAdmin(db: SupabaseClient, userId: string) {
  const { data } = await db.from("user_roles").select("id").eq("user_id", userId).eq("role", "admin").maybeSingle();
  return !!data;
}

export async function audit(
  db: SupabaseClient,
  entry: {
    company_id?: string | null;
    actor_id?: string | null;
    actor_type: "system" | "admin" | "customer" | "gateway";
    action: string;
    entity: string;
    entity_id?: string | null;
    before?: unknown;
    after?: unknown;
  },
) {
  await db.from("billing_audit_log").insert(entry);
}

export const toCents = (v: number | string | null | undefined) => (v == null ? null : Math.round(Number(v) * 100));

export function addMonth(date: string) {
  const d = new Date(`${date}T00:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + 1);
  return d.toISOString();
}
