-- Add RLS policies for orders table to protect customer PII
-- Since orders are created through edge functions with service role,
-- we block direct client access while allowing service role operations

-- Policy 1: Block all direct SELECT access (data only accessible via service role/edge functions)
-- This protects customer PII from unauthorized access
CREATE POLICY "No direct public access to orders"
ON public.orders
FOR SELECT
USING (false);

-- Policy 2: Block all direct INSERT access (orders created only via edge functions with service role)
CREATE POLICY "No direct public insert to orders"
ON public.orders
FOR INSERT
WITH CHECK (false);

-- Policy 3: Block all direct UPDATE access (payment status only updated via webhooks with service role)
CREATE POLICY "No direct public update to orders"
ON public.orders
FOR UPDATE
USING (false)
WITH CHECK (false);

-- Policy 4: Block all direct DELETE access (orders should never be deleted)
CREATE POLICY "No direct public delete to orders"
ON public.orders
FOR DELETE
USING (false);