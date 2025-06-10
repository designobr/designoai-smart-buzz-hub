
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.10'
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface PaymentRequest {
  orderId: string
  paymentMethod: 'pix' | 'credit_card' | 'boleto'
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

    // Create payment session based on method
    let sessionData: any = {
      customer: customerId,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/checkout`,
      metadata: {
        orderId: orderId,
        paymentMethod: paymentMethod
      }
    }

    if (paymentMethod === 'pix') {
      // For PIX, we'll simulate it with a regular payment
      // In Brazil, you might want to integrate with a local payment processor for real PIX
      sessionData.line_items = [{
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Serviços DesignoAI',
            description: 'Pagamento via PIX'
          },
          unit_amount: Math.round(amount * 100) // Convert to centavos
        },
        quantity: 1
      }]
    } else if (paymentMethod === 'credit_card') {
      sessionData.line_items = [{
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Serviços DesignoAI',
            description: 'Pagamento via Cartão de Crédito'
          },
          unit_amount: Math.round(amount * 100)
        },
        quantity: 1
      }]
      sessionData.payment_method_types = ['card']
    } else if (paymentMethod === 'boleto') {
      // Boleto is not directly supported by Stripe
      // You would need to integrate with a Brazilian payment processor
      // For now, we'll create a regular payment session
      sessionData.line_items = [{
        price_data: {
          currency: 'brl',
          product_data: {
            name: 'Serviços DesignoAI',
            description: 'Pagamento via Boleto'
          },
          unit_amount: Math.round(amount * 100)
        },
        quantity: 1
      }]
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

    if (paymentMethod === 'pix') {
      // For PIX, return the checkout URL but with PIX-specific messaging
      return new Response(JSON.stringify({
        success: true,
        paymentMethod: 'pix',
        checkoutUrl: session.url,
        stripeSessionId: session.id,
        message: 'Redirecionando para pagamento PIX via Stripe'
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    } else if (paymentMethod === 'credit_card') {
      return new Response(JSON.stringify({
        success: true,
        paymentMethod: 'credit_card',
        checkoutUrl: session.url,
        stripeSessionId: session.id
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    } else if (paymentMethod === 'boleto') {
      return new Response(JSON.stringify({
        success: true,
        paymentMethod: 'boleto',
        checkoutUrl: session.url,
        stripeSessionId: session.id,
        message: 'Processando como pagamento via cartão (Boleto não suportado pelo Stripe)'
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

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
