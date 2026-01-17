import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.10'
import Stripe from 'https://esm.sh/stripe@14.21.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get Stripe secret key and webhook secret
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY')
    const webhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')
    
    if (!stripeKey) {
      console.error('Stripe secret key not configured')
      return new Response('Server configuration error', { status: 500, headers: corsHeaders })
    }

    if (!webhookSecret) {
      console.error('Stripe webhook secret not configured')
      return new Response('Server configuration error', { status: 500, headers: corsHeaders })
    }

    // Get the raw body for signature verification
    const body = await req.text()
    const signature = req.headers.get('stripe-signature')

    if (!signature) {
      console.error('No Stripe signature found in request')
      return new Response('Missing signature', { status: 401, headers: corsHeaders })
    }

    // Initialize Stripe
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    })

    // Verify the webhook signature
    let event: Stripe.Event
    try {
      event = await stripe.webhooks.constructEventAsync(
        body,
        signature,
        webhookSecret
      )
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message)
      return new Response('Invalid signature', { status: 401, headers: corsHeaders })
    }

    console.log('Received verified Stripe webhook:', { type: event.type, id: event.id })

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const orderId = session.metadata?.orderId
        
        if (!orderId) {
          console.log('No orderId in session metadata')
          return new Response('OK', { status: 200, headers: corsHeaders })
        }

        console.log('Processing completed checkout session:', {
          sessionId: session.id,
          orderId,
          paymentStatus: session.payment_status
        })

        // Update order status to completed
        const { error } = await supabase
          .from('orders')
          .update({
            payment_status: session.payment_status === 'paid' ? 'completed' : 'pending',
            stripe_payment_intent_id: session.payment_intent as string,
            updated_at: new Date().toISOString()
          })
          .eq('id', orderId)

        if (error) {
          console.error('Error updating order:', error)
          // Still return 200 to acknowledge receipt, but log the error
        } else {
          console.log('Order updated successfully:', orderId)
        }
        break
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('Payment intent succeeded:', paymentIntent.id)
        // Additional handling if needed
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('Payment failed:', paymentIntent.id)
        
        // Try to find and update order by payment intent
        const { error } = await supabase
          .from('orders')
          .update({
            payment_status: 'failed',
            updated_at: new Date().toISOString()
          })
          .eq('stripe_payment_intent_id', paymentIntent.id)

        if (error) {
          console.error('Error updating failed order:', error)
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return new Response('OK', {
      status: 200,
      headers: corsHeaders
    })

  } catch (error) {
    console.error('Webhook processing error:', error)
    
    // Don't expose internal error details
    return new Response('Webhook processing failed', {
      status: 500,
      headers: corsHeaders
    })
  }
})
