// Cliente do motor (Social Publisher). A autenticação e os dados da tela do cliente ficam no projeto Supabase de homologação
// do motor; a chave publicável é pública por desenho (a segurança está nas políticas RLS e na API).
import { createClient } from '@supabase/supabase-js';

export const MOTOR_SUPABASE_URL = 'https://nmcdubactqflufusvmdu.supabase.co';
export const MOTOR_SUPABASE_CHAVE = 'sb_publishable_RNOGLYIQ_d6RSPx6DLne9g_yoMD0ZIi';

export const motorSupabase = createClient(MOTOR_SUPABASE_URL, MOTOR_SUPABASE_CHAVE, {
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});
