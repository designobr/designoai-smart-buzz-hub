REVOKE ALL ON public.user_roles, public.profiles, public.plans, public.companies, public.subscriptions, public.social_accounts, public.editorial_items, public.contents, public.automation_jobs, public.credit_ledger, public.activity_log FROM anon;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.owns_company(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
GRANT EXECUTE ON FUNCTION public.owns_company(uuid) TO authenticated;