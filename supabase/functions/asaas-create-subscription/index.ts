import { z } from "npm:zod@3";
import { admin, asaas, AsaasError, asaasEnv, audit, corsHeaders, json, requireUser } from "../_shared/asaas.ts";

const Body = z.object({
  plan_slug: z.string().min(1).max(50),
  billing_type: z.enum(["CREDIT_CARD", "PIX", "BOLETO"]),
  cpf_cnpj: z.string().regex(/^\d{11}$|^\d{14}$/, "CPF ou CNPJ inválido"),
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "method not allowed" }, 405);

  const user = await requireUser(req);
  if (!user) return json({ error: "unauthorized" }, 401);

  const parsed = Body.safeParse(await req.json().catch(() => ({})));
  if (!parsed.success) return json({ error: parsed.error.flatten().fieldErrors }, 400);
  const { plan_slug, billing_type, cpf_cnpj } = parsed.data;

  const db = admin();
  const { data: company } = await db.from("companies").select("*").eq("owner_id", user.id).order("created_at").limit(1).maybeSingle();
  if (!company) return json({ error: "Cadastre sua empresa antes de assinar." }, 400);

  const { data: plan } = await db.from("plans").select("*").eq("slug", plan_slug).eq("is_active", true).maybeSingle();
  if (!plan || plan.price_cents <= 0) return json({ error: "Plano indisponível." }, 400);

  const { data: open } = await db
    .from("subscriptions")
    .select("id,status,current_period_end")
    .eq("company_id", company.id)
    .in("status", ["pending", "active", "past_due", "suspended"]);
  if (open && open.length) return json({ error: "Já existe uma assinatura em andamento para esta empresa." }, 409);

  try {
    let customerId = company.asaas_customer_id as string | null;
    if (!customerId) {
      const customer = await asaas("/customers", {
        method: "POST",
        body: { name: company.name, cpfCnpj: cpf_cnpj, email: user.email, externalReference: company.id, notificationDisabled: false },
      });
      customerId = customer.id;
      await db.from("companies").update({ asaas_customer_id: customerId, billing_document: cpf_cnpj }).eq("id", company.id);
    }

    const contracted_limits = {
      plan_slug: plan.slug,
      plan_name: plan.name,
      monthly_videos: plan.monthly_videos,
      monthly_carousels: plan.monthly_carousels,
      monthly_static: plan.monthly_static,
      allowed_networks: plan.allowed_networks,
      posts_per_week: plan.posts_per_week,
      generation_limit: plan.generation_limit,
      monthly_credits: plan.monthly_credits,
      features: plan.features,
    };

    const today = new Date().toISOString().slice(0, 10);
    const sub = await asaas("/subscriptions", {
      method: "POST",
      body: {
        customer: customerId,
        billingType: billing_type,
        value: plan.price_cents / 100,
        nextDueDate: today,
        cycle: "MONTHLY",
        description: `DesignoAI Social Automation - Plano ${plan.name}`,
        externalReference: company.id,
      },
    });

    const { data: local, error } = await db
      .from("subscriptions")
      .insert({
        company_id: company.id,
        plan_id: plan.id,
        status: "pending",
        provider: "asaas",
        provider_subscription_id: sub.id,
        price_cents: plan.price_cents,
        currency: plan.currency,
        contracted_limits,
        billing_type,
        next_due_date: sub.nextDueDate,
        environment: asaasEnv(),
      })
      .select()
      .single();
    if (error) throw error;

    await audit(db, {
      company_id: company.id, actor_id: user.id, actor_type: "customer", action: "subscription_created",
      entity: "subscription", entity_id: local.id, after: { plan: plan.slug, price_cents: plan.price_cents, billing_type, asaas_subscription_id: sub.id },
    });

    const payments = await asaas(`/subscriptions/${sub.id}/payments`);
    const first = payments?.data?.[0];
    return json({ subscription_id: local.id, invoice_url: first?.invoiceUrl ?? null, environment: asaasEnv() });
  } catch (e) {
    console.error("create-subscription", e instanceof AsaasError ? e.details : e);
    const msg = e instanceof AsaasError ? (e.details as any)?.[0]?.description ?? "Erro no Asaas" : "Erro ao criar assinatura";
    return json({ error: msg }, 502);
  }
});
