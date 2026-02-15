
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  budget TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Block all direct public access
CREATE POLICY "No direct public select on contact_requests"
ON public.contact_requests FOR SELECT
USING (false);

CREATE POLICY "No direct public insert on contact_requests"
ON public.contact_requests FOR INSERT
WITH CHECK (false);

CREATE POLICY "No direct public update on contact_requests"
ON public.contact_requests FOR UPDATE
USING (false) WITH CHECK (false);

CREATE POLICY "No direct public delete on contact_requests"
ON public.contact_requests FOR DELETE
USING (false);
