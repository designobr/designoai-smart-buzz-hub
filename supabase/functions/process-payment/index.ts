
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.10'
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Input validation helpers
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

function validateAmount(amount: number): boolean {
  return amount > 0 && amount <= 1000000; // Max 1M for safety
}

function validatePaymentRequest(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.orderId || typeof data.orderId !== 'string') {
    errors.push('Order ID is required');
  }
  
  if (!data.amount || !validateAmount(data.amount)) {
    errors.push('Invalid amount');
  }
  
  if (!data.customerData) {
    errors.push('Customer data is required');
  } else {
    if (!data.customerData.name || data.customerData.name.length < 2) {
      errors.push('Valid name is required');
    }
    
    if (!data.customerData.email || !validateEmail(data.customerData.email)) {
      errors.push('Valid email is required');
    }
    
    if (!data.customerData.phone || !validatePhone(data.customerData.phone)) {
      errors.push('Valid phone is required');
    }
  }
  
  return { isValid: errors.length === 0, errors };
}

interface PaymentRequest {
  orderId: string
  paymentMethod: 'credit_card'
  amount: number
  customerData: {
    name: string
    email: string
    phone: string
    document?: string
  }
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const requestData = await req.json()
    
    // Validate input data
    const validation = validatePaymentRequest(requestData)
    if (!validation.isValid) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Dados inválidos',
        details: validation.errors
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const { orderId, paymentMethod, amount, customerData }: PaymentRequest = requestData
    
    // Sanitize customer data
    const sanitizedCustomerData = {
      name: sanitizeInput(customerData.name),
      email: sanitizeInput(customerData.email).toLowerCase(),
      phone: sanitizeInput(customerData.phone)
    }
    
    console.log('Processing payment with Stripe:', { orderId, paymentMethod, amount: '***' })

    // Validate payment method
    if (paymentMethod !== 'credit_card') {
      return new Response(JSON.stringify({
        success: false,
        error: 'Método de pagamento não suportado'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Get Stripe secret key
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')
    if (!stripeKey) {
      throw new Error('Stripe secret key not configured')
    }

    // Initialize Stripe
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    })

    // Check if customer exists (use sanitized data)
    const customers = await stripe.customers.list({
      email: sanitizedCustomerData.email,
      limit: 1
    })

    let customerId
    if (customers.data.length > 0) {
      customerId = customers.data[0].id
    } else {
      // Create new customer (use sanitized data)
      const customer = await stripe.customers.create({
        email: sanitizedCustomerData.email,
        name: sanitizedCustomerData.name,
        phone: sanitizedCustomerData.phone,
      })
      customerId = customer.id
    }

    console.log('Stripe customer:', { customerId })

    // Create payment session for credit card
    const sessionData = {
      customer: customerId,
      mode: 'payment' as const,
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Serviços DesignoAI',
            description: 'Pagamento via Cartão de Crédito'
          },
          unit_amount: Math.round(amount * 100) // Convert to centavos
        },
        quantity: 1
      }],
      success_url: `${req.headers.get('origin')}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      metadata: {
        orderId: orderId,
        paymentMethod: paymentMethod
      }
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create(sessionData)
    
    console.log('Stripe session created:', { sessionId: session.id, url: session.url })

    // Update order with Stripe session ID
    await supabase
      .from('orders')
      .update({
        stripe_session_id: session.id,
        payment_status: 'pending'
      })
      .eq('id', orderId)

    return new Response(JSON.stringify({
      success: true,
      paymentMethod: 'credit_card',
      checkoutUrl: session.url,
      stripeSessionId: session.id
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Stripe payment processing error:', error)
    
    // Don't expose internal error details to client
    let errorMessage = 'Erro interno do servidor';
    if (error.message?.includes('Stripe')) {
      errorMessage = 'Erro no processamento do pagamento';
    } else if (error.message?.includes('network')) {
      errorMessage = 'Erro de conexão';
    }
    
    return new Response(JSON.stringify({
      success: false,
      error: errorMessage
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
