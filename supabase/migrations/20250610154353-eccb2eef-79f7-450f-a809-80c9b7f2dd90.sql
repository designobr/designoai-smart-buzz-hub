
-- Remover a política atual que pode estar causando conflito
DROP POLICY IF EXISTS "Anyone can submit job applications" ON public.job_applications;

-- Criar uma nova política mais específica que funciona com edge functions
CREATE POLICY "Allow public job application submissions" 
  ON public.job_applications 
  FOR INSERT 
  WITH CHECK (true);

-- Garantir que a tabela permite inserções públicas via edge function
-- Vamos também adicionar uma política que permite à edge function operar
CREATE POLICY "Allow service role to insert applications" 
  ON public.job_applications 
  FOR INSERT 
  TO service_role
  WITH CHECK (true);
