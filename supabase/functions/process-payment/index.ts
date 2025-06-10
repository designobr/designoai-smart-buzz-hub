
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.10'
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

    const { orderId, paymentMethod, amount, customerData }: PaymentRequest = await req.json()
    
    console.log('Processing payment with Stripe:', { orderId, paymentMethod, amount })

    // Validate payment method
    if (paymentMethod !== 'credit_card') {
      throw new Error('Apenas cartão de crédito é suportado via Stripe')
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

    // Check if customer exists
    const customers = await stripe.customers.list({
      email: customerData.email,
      limit: 1
    })

    let customerId
    if (customers.data.length > 0) {
      customerId = customers.data[0].id
    } else {
      // Create new customer
      const customer = await stripe.customers.create({
        email: customerData.email,
        name: customerData.name,
        phone: customerData.phone,
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
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
