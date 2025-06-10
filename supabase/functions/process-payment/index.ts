
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.10'

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
    
    console.log('Processing payment:', { orderId, paymentMethod, amount })

    // Get PagBank token
    const pagbankToken = Deno.env.get('PAGBANK_TOKEN')
    if (!pagbankToken) {
      throw new Error('PagBank token not configured')
    }

    // Create payment payload based on method
    let paymentPayload: any = {
      reference_id: orderId,
      customer: {
        name: customerData.name,
        email: customerData.email,
        phone: customerData.phone.replace(/\D/g, '')
      },
      items: [{
        reference_id: `order_${orderId}`,
        name: "Serviços DesignoAI",
        quantity: 1,
        unit_amount: Math.round(amount * 100) // Convert to cents
      }],
      notification_urls: [
        `${Deno.env.get('SUPABASE_URL')}/functions/v1/payment-webhook`
      ]
    }

    let paymentResponse: any

    if (paymentMethod === 'pix') {
      paymentPayload.charges = [{
        reference_id: orderId,
        description: "Pagamento DesignoAI via PIX",
        amount: {
          value: Math.round(amount * 100),
          currency: "BRL"
        },
        payment_method: {
          type: "PIX",
          pix: {
            expires_in: 3600 // 1 hour
          }
        }
      }]

      // Create PIX payment
      const response = await fetch('https://api.pagseguro.com/orders', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${pagbankToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentPayload)
      })

      paymentResponse = await response.json()
      console.log('PagBank PIX response:', paymentResponse)

      if (!response.ok) {
        throw new Error(`PagBank API error: ${JSON.stringify(paymentResponse)}`)
      }

      // Update order with PagBank IDs
      await supabase
        .from('orders')
        .update({
          pagbank_order_id: paymentResponse.id,
          payment_status: 'pending'
        })
        .eq('id', orderId)

      return new Response(JSON.stringify({
        success: true,
        paymentMethod: 'pix',
        pagbankOrderId: paymentResponse.id,
        qrCode: paymentResponse.qr_codes?.[0]?.text,
        qrCodeImage: paymentResponse.qr_codes?.[0]?.links?.[0]?.href,
        expiresAt: paymentResponse.charges?.[0]?.payment_method?.pix?.expires_at
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })

    } else if (paymentMethod === 'credit_card') {
      // For credit card, we'll create a checkout session
      paymentPayload.charges = [{
        reference_id: orderId,
        description: "Pagamento DesignoAI via Cartão",
        amount: {
          value: Math.round(amount * 100),
          currency: "BRL"
        },
        payment_method: {
          type: "CREDIT_CARD"
        }
      }]

      const response = await fetch('https://api.pagseguro.com/checkouts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${pagbankToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...paymentPayload,
          redirect_url: `${Deno.env.get('SUPABASE_URL')}/functions/v1/payment-webhook`,
          return_url: `https://kunkpdhaajvytllufwyq.supabase.co/payment-success`
        })
      })

      paymentResponse = await response.json()
      console.log('PagBank Credit Card response:', paymentResponse)

      if (!response.ok) {
        throw new Error(`PagBank API error: ${JSON.stringify(paymentResponse)}`)
      }

      // Update order with PagBank IDs
      await supabase
        .from('orders')
        .update({
          pagbank_order_id: paymentResponse.id,
          payment_status: 'pending'
        })
        .eq('id', orderId)

      return new Response(JSON.stringify({
        success: true,
        paymentMethod: 'credit_card',
        checkoutUrl: paymentResponse.links?.find((link: any) => link.rel === 'REDIRECT')?.href,
        pagbankOrderId: paymentResponse.id
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })

    } else if (paymentMethod === 'boleto') {
      paymentPayload.charges = [{
        reference_id: orderId,
        description: "Pagamento DesignoAI via Boleto",
        amount: {
          value: Math.round(amount * 100),
          currency: "BRL"
        },
        payment_method: {
          type: "BOLETO",
          boleto: {
            due_date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] // 3 days
          }
        }
      }]

      const response = await fetch('https://api.pagseguro.com/orders', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${pagbankToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paymentPayload)
      })

      paymentResponse = await response.json()
      console.log('PagBank Boleto response:', paymentResponse)

      if (!response.ok) {
        throw new Error(`PagBank API error: ${JSON.stringify(paymentResponse)}`)
      }

      // Update order with PagBank IDs
      await supabase
        .from('orders')
        .update({
          pagbank_order_id: paymentResponse.id,
          payment_status: 'pending'
        })
        .eq('id', orderId)

      return new Response(JSON.stringify({
        success: true,
        paymentMethod: 'boleto',
        boletoUrl: paymentResponse.charges?.[0]?.links?.find((link: any) => link.rel === 'BOLETO')?.href,
        boletoBarcode: paymentResponse.charges?.[0]?.payment_method?.boleto?.barcode,
        dueDate: paymentResponse.charges?.[0]?.payment_method?.boleto?.due_date,
        pagbankOrderId: paymentResponse.id
      }), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }

  } catch (error) {
    console.error('Payment processing error:', error)
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    })
  }
})
