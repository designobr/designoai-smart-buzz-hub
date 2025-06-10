
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.10'

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
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get webhook data from PagBank
    const webhookData = await req.json()
    console.log('Received webhook from PagBank:', webhookData)

    // Extract relevant information
    const { charges, reference_id } = webhookData
    
    if (!charges || charges.length === 0) {
      console.log('No charges found in webhook data')
      return new Response('OK', { status: 200, headers: corsHeaders })
    }

    const charge = charges[0]
    const paymentStatus = charge.status
    const pagbankPaymentId = charge.id

    console.log('Processing payment status update:', {
      reference_id,
      paymentStatus,
      pagbankPaymentId
    })

    // Map PagBank status to our internal status
    let internalStatus = 'pending'
    switch (paymentStatus) {
      case 'PAID':
        internalStatus = 'completed'
        break
      case 'DECLINED':
      case 'CANCELED':
        internalStatus = 'failed'
        break
      case 'WAITING':
      case 'IN_ANALYSIS':
        internalStatus = 'pending'
        break
      default:
        internalStatus = 'pending'
    }

    // Update order status in database
    const { data: order, error } = await supabase
      .from('orders')
      .update({
        payment_status: internalStatus,
        pagbank_payment_id: pagbankPaymentId,
        updated_at: new Date().toISOString()
      })
      .eq('id', reference_id)
      .select()
      .single()

    if (error) {
      console.error('Error updating order:', error)
      return new Response(JSON.stringify({ error: 'Database update failed' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

    console.log('Order updated successfully:', order)

    // If payment is completed, you could trigger additional actions here
    // like sending confirmation emails, updating inventory, etc.
    if (internalStatus === 'completed') {
      console.log(`Payment completed for order ${reference_id}`)
      // TODO: Send confirmation email
      // TODO: Trigger order fulfillment process
    }

    return new Response('OK', {
      status: 200,
      headers: corsHeaders
    })

  } catch (error) {
    console.error('Webhook processing error:', error)
    return new Response(JSON.stringify({
      error: 'Webhook processing failed',
      details: error.message
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
