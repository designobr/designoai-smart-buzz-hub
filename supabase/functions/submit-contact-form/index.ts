import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(identifier: string, maxRequests = 5, windowMs = 3600000): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(identifier, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();

    // Rate limit
    const clientIp = req.headers.get("x-forwarded-for") || "unknown";
    const identifier = body.email || clientIp;

    if (!checkRateLimit(identifier, 5, 3600000)) {
      return new Response(
        JSON.stringify({ error: "Muitas tentativas. Tente novamente mais tarde." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate
    if (
      !body.name || typeof body.name !== "string" || body.name.trim().length === 0 || body.name.length > 200 ||
      !body.email || typeof body.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) ||
      !body.phone || typeof body.phone !== "string" || body.phone.length > 30
    ) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios não preenchidos ou inválidos" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (body.company && (typeof body.company !== "string" || body.company.length > 200)) {
      return new Response(
        JSON.stringify({ error: "Nome da empresa inválido" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (body.message && (typeof body.message !== "string" || body.message.length > 5000)) {
      return new Response(
        JSON.stringify({ error: "Mensagem muito longa" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { error } = await supabaseClient
      .from("contact_requests")
      .insert([{
        name: body.name.trim(),
        email: body.email.trim(),
        phone: body.phone.trim(),
        company: body.company?.trim() || null,
        budget: body.budget?.trim() || null,
        message: body.message?.trim() || null,
      }]);

    if (error) {
      console.error("Erro ao salvar contato:", error.code);
      return new Response(
        JSON.stringify({ error: "Erro ao salvar solicitação" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Solicitação enviada com sucesso!" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Erro na função submit-contact-form:", error.message);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
