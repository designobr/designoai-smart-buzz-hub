CREATE TYPE public.app_role AS ENUM ('admin','user');

CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TABLE public.user_roles (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE, role public.app_role NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), UNIQUE(user_id, role));
GRANT SELECT ON public.user_roles TO authenticated; GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role) $$;
CREATE POLICY "Users view own roles" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));

CREATE TABLE public.profiles (id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE, full_name text, avatar_url text, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated; GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own profile read" ON public.profiles FOR SELECT TO authenticated USING (id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Own profile insert" ON public.profiles FOR INSERT TO authenticated WITH CHECK (id = auth.uid());
CREATE POLICY "Own profile update" ON public.profiles FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());
CREATE TRIGGER profiles_updated BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name) VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name') ON CONFLICT DO NOTHING;
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user') ON CONFLICT DO NOTHING;
  RETURN NEW;
END; $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TABLE public.plans (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, slug text NOT NULL UNIQUE, description text, monthly_videos int NOT NULL DEFAULT 0, monthly_carousels int NOT NULL DEFAULT 0, monthly_static int NOT NULL DEFAULT 0, allowed_networks text[] NOT NULL DEFAULT '{}', posts_per_week int NOT NULL DEFAULT 0, generation_limit int NOT NULL DEFAULT 0, monthly_credits int NOT NULL DEFAULT 0, features jsonb NOT NULL DEFAULT '[]'::jsonb, is_active boolean NOT NULL DEFAULT true, sort_order int NOT NULL DEFAULT 0, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE, DELETE ON public.plans TO authenticated; GRANT ALL ON public.plans TO service_role;
ALTER TABLE public.plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Active plans readable" ON public.plans FOR SELECT TO authenticated USING (is_active OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins manage plans" ON public.plans FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER plans_updated BEFORE UPDATE ON public.plans FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.companies (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), owner_id uuid NOT NULL, name text NOT NULL, website text, segment text, description text, target_audience text, products_services text, differentials text, social_links jsonb NOT NULL DEFAULT '{}'::jsonb, logo_url text, brand_colors text[] NOT NULL DEFAULT '{}', communication_preferences text, publishing_mode text NOT NULL DEFAULT 'assisted', status text NOT NULL DEFAULT 'active', site_analysis jsonb, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT, UPDATE, DELETE ON public.companies TO authenticated; GRANT ALL ON public.companies TO service_role;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner or admin read companies" ON public.companies FOR SELECT TO authenticated USING (owner_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Owner creates company" ON public.companies FOR INSERT TO authenticated WITH CHECK (owner_id = auth.uid());
CREATE POLICY "Owner or admin update company" ON public.companies FOR UPDATE TO authenticated USING (owner_id = auth.uid() OR public.has_role(auth.uid(),'admin')) WITH CHECK (owner_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Owner deletes company" ON public.companies FOR DELETE TO authenticated USING (owner_id = auth.uid());
CREATE TRIGGER companies_updated BEFORE UPDATE ON public.companies FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE OR REPLACE FUNCTION public.owns_company(_company uuid) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$ SELECT EXISTS (SELECT 1 FROM public.companies WHERE id = _company AND owner_id = auth.uid()) OR public.has_role(auth.uid(),'admin') $$;

CREATE TABLE public.subscriptions (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE, plan_id uuid REFERENCES public.plans(id), status text NOT NULL DEFAULT 'pending', provider text, provider_subscription_id text, current_period_start timestamptz, current_period_end timestamptz, cancel_at_period_end boolean NOT NULL DEFAULT false, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT ON public.subscriptions TO authenticated; GRANT ALL ON public.subscriptions TO service_role;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company subscriptions read" ON public.subscriptions FOR SELECT TO authenticated USING (public.owns_company(company_id));
CREATE TRIGGER subscriptions_updated BEFORE UPDATE ON public.subscriptions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.social_accounts (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE, platform text NOT NULL, external_account_id text, account_name text, status text NOT NULL DEFAULT 'disconnected', last_error text, connected_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now(), UNIQUE(company_id, platform));
GRANT SELECT ON public.social_accounts TO authenticated; GRANT ALL ON public.social_accounts TO service_role;
ALTER TABLE public.social_accounts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company social read" ON public.social_accounts FOR SELECT TO authenticated USING (public.owns_company(company_id));
CREATE TRIGGER social_updated BEFORE UPDATE ON public.social_accounts FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.editorial_items (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE, plan_month date NOT NULL, theme text NOT NULL, pillar text, objective text, format text NOT NULL, script text, caption text, cta text, hashtags text[] NOT NULL DEFAULT '{}', network text, scheduled_for timestamptz, status text NOT NULL DEFAULT 'draft', created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, UPDATE ON public.editorial_items TO authenticated; GRANT ALL ON public.editorial_items TO service_role;
ALTER TABLE public.editorial_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company editorial read" ON public.editorial_items FOR SELECT TO authenticated USING (public.owns_company(company_id));
CREATE POLICY "Company editorial update" ON public.editorial_items FOR UPDATE TO authenticated USING (public.owns_company(company_id)) WITH CHECK (public.owns_company(company_id));
CREATE TRIGGER editorial_updated BEFORE UPDATE ON public.editorial_items FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.contents (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE, editorial_item_id uuid REFERENCES public.editorial_items(id) ON DELETE SET NULL, format text NOT NULL, title text, preview_url text, file_url text, caption text, hashtags text[] NOT NULL DEFAULT '{}', due_at timestamptz, status text NOT NULL DEFAULT 'queued', version int NOT NULL DEFAULT 1, versions jsonb NOT NULL DEFAULT '[]'::jsonb, approved_at timestamptz, published_url text, published_at timestamptz, network text, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, UPDATE ON public.contents TO authenticated; GRANT ALL ON public.contents TO service_role;
ALTER TABLE public.contents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company contents read" ON public.contents FOR SELECT TO authenticated USING (public.owns_company(company_id));
CREATE POLICY "Company contents update" ON public.contents FOR UPDATE TO authenticated USING (public.owns_company(company_id)) WITH CHECK (public.owns_company(company_id));
CREATE TRIGGER contents_updated BEFORE UPDATE ON public.contents FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.automation_jobs (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE, job_type text NOT NULL, status text NOT NULL DEFAULT 'pending', payload jsonb NOT NULL DEFAULT '{}'::jsonb, result jsonb, error text, attempts int NOT NULL DEFAULT 0, run_after timestamptz NOT NULL DEFAULT now(), started_at timestamptz, finished_at timestamptz, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT ON public.automation_jobs TO authenticated; GRANT ALL ON public.automation_jobs TO service_role;
ALTER TABLE public.automation_jobs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company jobs read" ON public.automation_jobs FOR SELECT TO authenticated USING (public.owns_company(company_id));
CREATE INDEX automation_jobs_queue_idx ON public.automation_jobs(status, run_after);
CREATE TRIGGER jobs_updated BEFORE UPDATE ON public.automation_jobs FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.credit_ledger (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE, amount int NOT NULL, reason text NOT NULL, reference_id uuid, created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT ON public.credit_ledger TO authenticated; GRANT ALL ON public.credit_ledger TO service_role;
ALTER TABLE public.credit_ledger ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company credits read" ON public.credit_ledger FOR SELECT TO authenticated USING (public.owns_company(company_id));

CREATE TABLE public.activity_log (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), company_id uuid REFERENCES public.companies(id) ON DELETE CASCADE, user_id uuid, action text NOT NULL, details jsonb NOT NULL DEFAULT '{}'::jsonb, created_at timestamptz NOT NULL DEFAULT now());
GRANT SELECT, INSERT ON public.activity_log TO authenticated; GRANT ALL ON public.activity_log TO service_role;
ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company activity read" ON public.activity_log FOR SELECT TO authenticated USING (company_id IS NOT NULL AND public.owns_company(company_id));
CREATE POLICY "Company activity insert" ON public.activity_log FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid() AND company_id IS NOT NULL AND public.owns_company(company_id));