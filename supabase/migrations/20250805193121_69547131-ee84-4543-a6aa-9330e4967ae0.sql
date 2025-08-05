-- Fix RLS policies for orders table to ensure proper access control
-- Remove the overly permissive policies and implement secure ones

-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Allow admin to view all orders" ON public.orders;
DROP POLICY IF EXISTS "Allow payment status updates" ON public.orders;
DROP POLICY IF EXISTS "Allow public to create orders" ON public.orders;

-- Create secure policies for orders table
-- 1. Only allow users to view their own orders (based on customer_email)
CREATE POLICY "Users can view their own orders" 
ON public.orders 
FOR SELECT 
USING (auth.jwt() ->> 'email' = customer_email);

-- 2. Allow authenticated users to create orders only for themselves
CREATE POLICY "Users can create their own orders" 
ON public.orders 
FOR INSERT 
WITH CHECK (auth.jwt() ->> 'email' = customer_email);

-- 3. Only allow system (service role) to update payment status
CREATE POLICY "System can update payment status" 
ON public.orders 
FOR UPDATE 
USING (auth.role() = 'service_role');

-- 4. Create admin policy for viewing all orders (for admin dashboard)
-- This requires implementing proper admin role checking
CREATE POLICY "Admins can view all orders" 
ON public.orders 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.raw_user_meta_data ->> 'role' = 'admin'
  )
);

-- Add constraint to ensure customer_email is never null for security
ALTER TABLE public.orders 
ALTER COLUMN customer_email SET NOT NULL;

-- Add index for better performance on customer_email lookups
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON public.orders(customer_email);

-- Create audit trigger for orders to track changes
CREATE OR REPLACE FUNCTION public.audit_orders_changes()
RETURNS TRIGGER AS $$
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

-- Create audit log table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.audit_log (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  table_name TEXT NOT NULL,
  operation TEXT NOT NULL,
  old_values JSONB,
  new_values JSONB,
  changed_by UUID,
  changed_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS on audit log
ALTER TABLE public.audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Only admins can view audit logs" 
ON public.audit_log 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.raw_user_meta_data ->> 'role' = 'admin'
  )
);

-- Create the audit trigger
DROP TRIGGER IF EXISTS audit_orders_trigger ON public.orders;
CREATE TRIGGER audit_orders_trigger
  AFTER UPDATE ON public.orders
  FOR EACH ROW
  EXECUTE FUNCTION public.audit_orders_changes();