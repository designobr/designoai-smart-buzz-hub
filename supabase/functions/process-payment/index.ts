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
  return typeof amount === 'number' && amount > 0 && amount <= 1000000; // Max 1M for safety
}

function validatePaymentRequest(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!data.amount || !validateAmount(data.amount)) {
    errors.push('Invalid amount');
  }
  
  if (!data.customerData) {
    errors.push('Customer data is required');
  } else {
    if (!data.customerData.name || typeof data.customerData.name !== 'string' || data.customerData.name.length < 2) {
      errors.push('Valid name is required');
    }
    
    if (!data.customerData.email || !validateEmail(data.customerData.email)) {
      errors.push('Valid email is required');
    }
    
    if (!data.customerData.phone || !validatePhone(data.customerData.phone)) {
      errors.push('Valid phone is required');
    }
  }

  if (!data.packageData || !data.packageData.name) {
    errors.push('Package data is required');
  }
  
  return { isValid: errors.length === 0, errors };
}

interface PaymentRequest {
  paymentMethod: 'credit_card'
  amount: number
  customerData: {
    name: string
    email: string
    phone: string
    company?: string
  }
  packageData: {
    name: string
    price: number
    duration: number
    addons: Array<{ id: string; name: string; price: number }>
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
      console.log('Validation errors:', validation.errors)
      return new Response(JSON.stringify({
        success: false,
        error: 'Dados inválidos'
      }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    const { paymentMethod, amount, customerData, packageData }: PaymentRequest = requestData
    
    // Sanitize customer data
    const sanitizedCustomerData = {
      name: sanitizeInput(customerData.name),
      email: sanitizeInput(customerData.email).toLowerCase(),
      phone: sanitizeInput(customerData.phone),
      company: customerData.company ? sanitizeInput(customerData.company) : null
    }
    
    console.log('Processing payment with Stripe:', { paymentMethod })

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
      console.error('Stripe secret key not configured')
      return new Response(JSON.stringify({
        success: false,
        error: 'Erro de configuração do servidor'
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    // Initialize Stripe
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    })

    // Create order in database first
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_name: sanitizedCustomerData.name,
        customer_email: sanitizedCustomerData.email,
        customer_phone: sanitizedCustomerData.phone,
        customer_company: sanitizedCustomerData.company,
        package_name: packageData.name,
        package_price: packageData.price,
        duration_months: packageData.duration,
        selected_addons: JSON.stringify(packageData.addons),
        addons_total: packageData.addons?.reduce((sum, addon) => sum + addon.price, 0) || 0,
        total_amount: amount,
        payment_method: paymentMethod,
        payment_status: 'pending'
      })
      .select()
      .single()

    if (orderError) {
      console.error('Error creating order:', orderError)
      return new Response(JSON.stringify({
        success: false,
        error: 'Erro ao criar pedido'
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    console.log('Order created:', { orderId: order.id })

    // Check if customer exists
    const customers = await stripe.customers.list({
      email: sanitizedCustomerData.email,
      limit: 1
    })

    let customerId
    if (customers.data.length > 0) {
      customerId = customers.data[0].id
    } else {
      // Create new customer
      const customer = await stripe.customers.create({
        email: sanitizedCustomerData.email,
        name: sanitizedCustomerData.name,
        phone: sanitizedCustomerData.phone,
      })
      customerId = customer.id
    }

    console.log('Stripe customer:', { customerId })

    // Create payment session for credit card
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'brl',
          product_data: {
            name: `${packageData.name} - Serviços DesignoAI`,
            description: `Duração: ${packageData.duration} ${packageData.duration === 1 ? 'mês' : 'meses'}`
          },
          unit_amount: Math.round(amount * 100) // Convert to centavos
        },
        quantity: 1
      }],
      success_url: `${req.headers.get('origin')}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      metadata: {
        orderId: order.id,
        paymentMethod: paymentMethod
      }
    })
    
    console.log('Stripe session created:', { sessionId: session.id })

    // Update order with Stripe session ID
    const { error: updateError } = await supabase
      .from('orders')
      .update({
        stripe_session_id: session.id
      })
      .eq('id', order.id)

    if (updateError) {
      console.error('Error updating order with session ID:', updateError)
      // Continue anyway - the order exists and payment can still proceed
    }

    return new Response(JSON.stringify({
      success: true,
      paymentMethod: 'credit_card',
      checkoutUrl: session.url,
      orderId: order.id
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.error('Stripe payment processing error:', error)
    
    // Don't expose internal error details to client
    return new Response(JSON.stringify({
      success: false,
      error: 'Erro ao processar pagamento'
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
