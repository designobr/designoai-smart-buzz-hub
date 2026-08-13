REVOKE ALL ON TABLE public.contact_requests FROM anon, authenticated;
REVOKE ALL ON TABLE public.orders FROM anon, authenticated;
GRANT ALL ON TABLE public.contact_requests TO service_role;
GRANT ALL ON TABLE public.orders TO service_role;