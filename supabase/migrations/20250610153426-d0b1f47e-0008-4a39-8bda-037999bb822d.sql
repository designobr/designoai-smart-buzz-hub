
-- Criar tabela para armazenar candidaturas
CREATE TABLE public.job_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT NOT NULL,
  experience TEXT NOT NULL,
  portfolio TEXT,
  motivation TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir que qualquer pessoa insira candidaturas
-- (formulário público, não requer autenticação)
CREATE POLICY "Anyone can submit job applications" 
  ON public.job_applications 
  FOR INSERT 
  WITH CHECK (true);

-- Criar política para que apenas administradores possam visualizar candidaturas
-- (por enquanto, deixamos sem política de SELECT para que seja restrito)
