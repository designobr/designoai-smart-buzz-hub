
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Use service role key for database operations
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const applicationData: JobApplicationRequest = await req.json();

    console.log("Dados recebidos:", applicationData);

    // Validar dados obrigatórios
    if (!applicationData.name || !applicationData.email || !applicationData.position || 
        !applicationData.experience || !applicationData.motivation) {
      console.log("Validação falhou - campos obrigatórios em falta");
      return new Response(
        JSON.stringify({ error: "Campos obrigatórios não preenchidos" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Tentando inserir candidatura no banco de dados...");

    // Inserir candidatura no banco de dados
    const { data, error } = await supabaseClient
      .from("job_applications")
      .insert([{
        name: applicationData.name,
        email: applicationData.email,
        phone: applicationData.phone || null,
        position: applicationData.position,
        experience: applicationData.experience,
        portfolio: applicationData.portfolio || null,
        motivation: applicationData.motivation,
      }])
      .select()
      .single();

    if (error) {
      console.error("Erro detalhado ao salvar candidatura:", error);
      return new Response(
        JSON.stringify({ 
          error: "Erro ao salvar candidatura",
          details: error.message,
          code: error.code 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("Candidatura salva com sucesso:", data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Candidatura enviada com sucesso!",
        id: data.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Erro geral na função submit-job-application:", error);
    return new Response(
      JSON.stringify({ 
        error: "Erro interno do servidor",
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
