-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.audit_orders_changes()
RETURNS TRIGGER 
SET search_path = ''
AS $$
BEGIN
  IF TG_OP = 'UPDATE' THEN
    -- Log payment status changes
    IF OLD.payment_status != NEW.payment_status THEN
      INSERT INTO public.audit_log (table_name, operation, old_values, new_values, changed_by, changed_at)
      VALUES (
        'orders',
        'payment_status_change',
        jsonb_build_object('payment_status', OLD.payment_status),
        jsonb_build_object('payment_status', NEW.payment_status),
        auth.uid(),
        now()
      );
    END IF;
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;