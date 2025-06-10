
-- Criar tabela para armazenar pedidos
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  customer_company TEXT,
  package_id TEXT NOT NULL,
  package_name TEXT NOT NULL,
  package_price DECIMAL(10,2) NOT NULL,
  selected_addons JSONB DEFAULT '[]'::jsonb,
  addons_total DECIMAL(10,2) DEFAULT 0,
  duration_months INTEGER NOT NULL DEFAULT 1,
  discount_percentage DECIMAL(5,2) DEFAULT 0,
  subtotal DECIMAL(10,2) NOT NULL,
  discount_amount DECIMAL(10,2) DEFAULT 0,
  total_amount DECIMAL(10,2) NOT NULL,
  payment_method TEXT,
  payment_status TEXT DEFAULT 'pending',
  pagbank_order_id TEXT,
  pagbank_payment_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar RLS para proteger os dados dos pedidos
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção de novos pedidos (público para checkout)
CREATE POLICY "Allow public to create orders" 
  ON public.orders 
  FOR INSERT 
  WITH CHECK (true);

-- Política para permitir visualização apenas pelo admin (você pode ajustar conforme necessário)
CREATE POLICY "Allow admin to view all orders" 
  ON public.orders 
  FOR SELECT 
  USING (true);

-- Política para permitir atualização do status de pagamento
CREATE POLICY "Allow payment status updates" 
  ON public.orders 
  FOR UPDATE 
  USING (true);
