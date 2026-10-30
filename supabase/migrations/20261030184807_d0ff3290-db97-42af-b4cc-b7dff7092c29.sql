
ALTER TABLE public.plans ADD COLUMN IF NOT EXISTS price_cents integer NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS currency text NOT NULL DEFAULT 'BRL';

ALTER TABLE public.companies ADD COLUMN IF NOT EXISTS billing_document text,
  ADD COLUMN IF NOT EXISTS asaas_customer_id text;
CREATE UNIQUE INDEX IF NOT EXISTS companies_asaas_customer_uidx ON public.companies(asaas_customer_id) WHERE asaas_customer_id IS NOT NULL;

ALTER TABLE public.subscriptions
  ADD COLUMN IF NOT EXISTS price_cents integer,
  ADD COLUMN IF NOT EXISTS currency text NOT NULL DEFAULT 'BRL',
  ADD COLUMN IF NOT EXISTS contracted_limits jsonb NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS billing_type text,
  ADD COLUMN IF NOT EXISTS next_due_date date,
  ADD COLUMN IF NOT EXISTS last_payment_at timestamptz,
  ADD COLUMN IF NOT EXISTS canceled_at timestamptz,
  ADD COLUMN IF NOT EXISTS environment text NOT NULL DEFAULT 'sandbox';
CREATE UNIQUE INDEX IF NOT EXISTS subscriptions_provider_sub_uidx ON public.subscriptions(provider, provider_subscription_id) WHERE provider_subscription_id IS NOT NULL;

-- Payments
CREATE TABLE public.billing_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  subscription_id uuid REFERENCES public.subscriptions(id) ON DELETE SET NULL,
  asaas_payment_id text NOT NULL UNIQUE,
  asaas_subscription_id text,
  value_cents integer NOT NULL,
  net_value_cents integer,
  billing_type text,
  status text NOT NULL,
  due_date date,
  paid_at timestamptz,
  refunded_at timestamptz,
  invoice_url text,
  bank_slip_url text,
  credits_granted integer NOT NULL DEFAULT 0,
  validation_error text,
  environment text NOT NULL DEFAULT 'sandbox',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.billing_payments TO authenticated;
GRANT ALL ON public.billing_payments TO service_role;
ALTER TABLE public.billing_payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company payments read" ON public.billing_payments FOR SELECT TO authenticated USING (public.owns_company(company_id));
CREATE TRIGGER billing_payments_updated BEFORE UPDATE ON public.billing_payments FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE INDEX billing_payments_company_idx ON public.billing_payments(company_id, due_date DESC);

-- Webhook events
CREATE TABLE public.billing_webhook_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider text NOT NULL DEFAULT 'asaas',
  event_id text NOT NULL,
  event_type text NOT NULL,
  payload jsonb NOT NULL,
  status text NOT NULL DEFAULT 'received',
  error text,
  processed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(provider, event_id)
);
GRANT SELECT ON public.billing_webhook_events TO authenticated;
GRANT ALL ON public.billing_webhook_events TO service_role;
ALTER TABLE public.billing_webhook_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins read webhook events" ON public.billing_webhook_events FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));

-- Contract changes
CREATE TABLE public.subscription_changes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  subscription_id uuid NOT NULL REFERENCES public.subscriptions(id) ON DELETE CASCADE,
  company_id uuid NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  old_price_cents integer,
  new_price_cents integer,
  old_limits jsonb,
  new_limits jsonb,
  reason text NOT NULL,
  status text NOT NULL DEFAULT 'proposed',
  requested_by uuid NOT NULL,
  notified_at timestamptz,
  effective_date date NOT NULL,
  customer_response_at timestamptz,
  customer_response_by uuid,
  authorized_by uuid,
  authorized_at timestamptz,
  applied_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.subscription_changes TO authenticated;
GRANT ALL ON public.subscription_changes TO service_role;
ALTER TABLE public.subscription_changes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company or admin read changes" ON public.subscription_changes FOR SELECT TO authenticated USING (public.owns_company(company_id));
CREATE TRIGGER subscription_changes_updated BEFORE UPDATE ON public.subscription_changes FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Audit log (append only)
CREATE TABLE public.billing_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid,
  actor_id uuid,
  actor_type text NOT NULL DEFAULT 'system',
  action text NOT NULL,
  entity text NOT NULL,
  entity_id text,
  before jsonb,
  after jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.billing_audit_log TO authenticated;
GRANT SELECT, INSERT ON public.billing_audit_log TO service_role;
ALTER TABLE public.billing_audit_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Admins read audit" ON public.billing_audit_log FOR SELECT TO authenticated USING (public.has_role(auth.uid(),'admin'));

-- Credit idempotency
CREATE UNIQUE INDEX IF NOT EXISTS credit_ledger_ref_reason_uidx ON public.credit_ledger(reference_id, reason) WHERE reference_id IS NOT NULL;

-- Access rule
CREATE OR REPLACE FUNCTION public.company_has_active_access(_company uuid)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.subscriptions s
    WHERE s.company_id = _company
      AND s.current_period_end IS NOT NULL
      AND s.current_period_end > now()
      AND (s.status = 'active' OR (s.status = 'canceled' AND s.cancel_at_period_end))
  ) AND COALESCE((SELECT SUM(amount) FROM public.credit_ledger WHERE company_id = _company), 0) >= 0
$$;

-- Audit plan edits
CREATE OR REPLACE FUNCTION public.audit_plan_changes() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.billing_audit_log(actor_id, actor_type, action, entity, entity_id, before, after)
  VALUES (auth.uid(), CASE WHEN auth.uid() IS NULL THEN 'system' ELSE 'admin' END,
          lower(TG_OP), 'plan', COALESCE(NEW.id, OLD.id)::text,
          CASE WHEN TG_OP <> 'INSERT' THEN to_jsonb(OLD) END,
          CASE WHEN TG_OP <> 'DELETE' THEN to_jsonb(NEW) END);
  RETURN COALESCE(NEW, OLD);
END $$;
CREATE TRIGGER plans_audit AFTER INSERT OR UPDATE OR DELETE ON public.plans FOR EACH ROW EXECUTE FUNCTION public.audit_plan_changes();

-- Customer response to contract change
CREATE OR REPLACE FUNCTION public.respond_subscription_change(_change uuid, _accept boolean)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE c public.subscription_changes;
BEGIN
  SELECT * INTO c FROM public.subscription_changes WHERE id = _change FOR UPDATE;
  IF c.id IS NULL THEN RAISE EXCEPTION 'not found'; END IF;
  IF NOT EXISTS (SELECT 1 FROM public.companies WHERE id = c.company_id AND owner_id = auth.uid()) THEN RAISE EXCEPTION 'forbidden'; END IF;
  IF c.status <> 'notified' THEN RAISE EXCEPTION 'invalid status'; END IF;
  UPDATE public.subscription_changes SET status = CASE WHEN _accept THEN 'accepted' ELSE 'rejected' END,
    customer_response_at = now(), customer_response_by = auth.uid() WHERE id = _change;
  INSERT INTO public.billing_audit_log(company_id, actor_id, actor_type, action, entity, entity_id, after)
  VALUES (c.company_id, auth.uid(), 'customer', CASE WHEN _accept THEN 'change_accepted' ELSE 'change_rejected' END, 'subscription_change', _change::text, jsonb_build_object('accept', _accept));
END $$;
REVOKE ALL ON FUNCTION public.respond_subscription_change(uuid, boolean) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.respond_subscription_change(uuid, boolean) TO authenticated;

INSERT INTO public.plans (name, slug, description, price_cents, currency, monthly_videos, monthly_carousels, monthly_static, allowed_networks, posts_per_week, generation_limit, monthly_credits, sort_order)
VALUES
 ('Start','start','Para começar com presença consistente', 9700,'BRL', 2, 4, 8, ARRAY['instagram','facebook'], 3, 30, 100, 1),
 ('Professional','professional','Para crescer com mais formatos e redes', 19700,'BRL', 4, 8, 12, ARRAY['instagram','facebook','linkedin','tiktok'], 5, 60, 250, 2),
 ('Premium','premium','Para operação completa em todas as redes', 39700,'BRL', 8, 12, 20, ARRAY['instagram','facebook','linkedin','tiktok','youtube'], 7, 120, 600, 3)
ON CONFLICT (slug) DO NOTHING;
