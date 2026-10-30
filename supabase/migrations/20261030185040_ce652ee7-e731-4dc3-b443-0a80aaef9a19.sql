
REVOKE ALL ON public.billing_payments, public.billing_webhook_events, public.subscription_changes, public.billing_audit_log FROM anon;
REVOKE INSERT, UPDATE, DELETE, TRUNCATE ON public.billing_payments, public.billing_webhook_events, public.subscription_changes, public.billing_audit_log FROM authenticated;
REVOKE EXECUTE ON FUNCTION public.company_has_active_access(uuid) FROM public, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.company_has_active_access(uuid) TO service_role;
REVOKE EXECUTE ON FUNCTION public.audit_plan_changes() FROM public, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.respond_subscription_change(uuid, boolean) FROM public, anon;
