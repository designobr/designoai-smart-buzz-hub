import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface JobApplicationRequest {
  name: string;
  email: string;
  phone?: string;
  position: string;
  experience: string;
  portfolio?: string;
  motivation: string;
}

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(identifier: string, maxRequests = 3, windowMs = 3600000): boolean {
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
    const applicationData: JobApplicationRequest = await req.json();

    // Rate limit by email or IP
    const clientIp = req.headers.get("x-forwarded-for") || "unknown";
    const identifier = applicationData.email || clientIp;

    if (!checkRateLimit(identifier, 3, 3600000)) {
      return new Response(
        JSON.stringify({ error: "Muitas tentativas. Tente novamente mais tarde." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate required fields
    if (
      !applicationData.name || typeof applicationData.name !== "string" || applicationData.name.trim().length === 0 || applicationData.name.length > 200 ||
      !applicationData.email || typeof applicationData.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applicationData.email) ||
      !applicationData.position || typeof applicationData.position !== "string" || applicationData.position.length > 200 ||
      !applicationData.experience || typeof applicationData.experience !== "string" || applicationData.experience.length > 100 ||
      !applicationData.motivation || typeof applicationData.motivation !== "string" || applicationData.motivation.length > 5000
    ) {
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios não preenchidos ou inválidos" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate optional fields
    if (applicationData.phone && (typeof applicationData.phone !== "string" || applicationData.phone.length > 30)) {
      return new Response(
        JSON.stringify({ error: "Telefone inválido" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    if (applicationData.portfolio && (typeof applicationData.portfolio !== "string" || applicationData.portfolio.length > 500)) {
      return new Response(
        JSON.stringify({ error: "Portfolio inválido" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data, error } = await supabaseClient
      .from("job_applications")
      .insert([{
        name: applicationData.name.trim(),
        email: applicationData.email.trim(),
        phone: applicationData.phone?.trim() || null,
        position: applicationData.position.trim(),
        experience: applicationData.experience.trim(),
        portfolio: applicationData.portfolio?.trim() || null,
        motivation: applicationData.motivation.trim(),
      }])
      .select()
      .single();

    if (error) {
      console.error("Erro ao salvar candidatura:", error.code);
      return new Response(
        JSON.stringify({ error: "Erro ao salvar candidatura" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Candidatura enviada com sucesso!",
        id: data.id,
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Erro na função submit-job-application:", error.message);
    return new Response(
      JSON.stringify({ error: "Erro interno do servidor" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
