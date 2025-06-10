
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, CreditCard, QrCode, FileText, Shield } from 'lucide-react';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const orderData = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    try {
      // First, create the order in database
      const { data: order, error } = await supabase
        .from('orders')
        .insert({
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          customer_company: formData.company,
          package_id: orderData.package.id,
          package_name: orderData.package.name,
          package_price: orderData.package.price,
          selected_addons: orderData.addons,
          addons_total: orderData.addons.reduce((sum: number, addon: any) => sum + addon.price, 0),
          duration_months: orderData.duration,
          discount_percentage: orderData.discount,
          subtotal: orderData.subtotal,
          discount_amount: orderData.discountAmount,
          total_amount: orderData.total,
          payment_method: paymentMethod,
          payment_status: 'pending'
        })
        .select()
        .single();

      if (error) {
        throw error;
      }

      console.log('Order created:', order);

      // Now process payment with Stripe
      const { data: paymentResponse, error: paymentError } = await supabase.functions.invoke('process-payment', {
        body: {
          orderId: order.id,
          paymentMethod: paymentMethod,
          amount: orderData.total,
          customerData: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone
          }
        }
      });

      if (paymentError) {
        throw paymentError;
      }

      console.log('Stripe payment response:', paymentResponse);

      if (paymentResponse.success && paymentResponse.checkoutUrl) {
        // Redirect to Stripe checkout
        window.location.href = paymentResponse.checkoutUrl;
      } else {
        throw new Error(paymentResponse.error || 'Erro no processamento do pagamento');
      }

    } catch (error) {
      console.error('Error processing payment:', error);
      toast({
        title: "Erro ao processar pagamento",
        description: error.message || "Ocorreu um erro ao processar seu pedido. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const paymentMethods = [
    {
      id: 'credit_card',
      name: 'Cartão de Crédito',
      description: 'Pagamento seguro via Stripe',
      icon: CreditCard,
      discount: null
    },
    {
      id: 'pix',
      name: 'PIX',
      description: 'Processado via Stripe',
      icon: QrCode,
      discount: '5% de desconto adicional'
    },
    {
      id: 'boleto',
      name: 'Boleto Bancário',
      description: 'Convertido para cartão via Stripe',
      icon: FileText,
      discount: null
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar à Calculadora
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-designoai-blue-dark mb-2">
              Finalizar Compra
            </h1>
            <p className="text-gray-600">
              Complete seus dados e escolha a forma de pagamento
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Dados do Cliente
                </CardTitle>
                <CardDescription>
                  Seus dados estão protegidos pelo Stripe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Empresa (opcional)</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forma de Pagamento</CardTitle>
                <CardDescription>
                  Processamento seguro via Stripe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {paymentMethods.map(method => {
                    const Icon = method.icon;
                    return (
                      <div
                        key={method.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? 'border-designoai-blue bg-designoai-blue-light'
                            : 'border-gray-200 hover:border-designoai-blue-light'
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                              paymentMethod === method.id
                                ? 'border-designoai-blue bg-designoai-blue'
                                : 'border-gray-300'
                            }`}>
                              {paymentMethod === method.id && (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              )}
                            </div>
                            <Icon className="w-5 h-5 mr-3 text-gray-600" />
                            <div>
                              <h3 className="font-medium text-gray-800">{method.name}</h3>
                              <p className="text-sm text-gray-600">{method.description}</p>
                              {method.discount && (
                                <p className="text-sm text-green-600 font-medium">{method.discount}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resumo do Pedido */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium text-gray-800">{orderData.package.name}</span>
                    <span className="text-lg font-bold text-designoai-blue">
                      R$ {orderData.package.price.toLocaleString()}/mês
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium text-gray-800">Duração</span>
                    <span className="text-lg text-gray-600">
                      {orderData.duration} {orderData.duration === 1 ? 'mês' : 'meses'}
                    </span>
                  </div>
                  
                  {orderData.addons.length > 0 && (
                    <div className="pb-4 border-b">
                      <h4 className="font-medium text-gray-800 mb-3">Serviços Adicionais:</h4>
                      <div className="space-y-2">
                        {orderData.addons.map((addon: any) => (
                          <div key={addon.id} className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{addon.name}</span>
                            <span className="font-medium text-designoai-blue">+R$ {addon.price}/mês</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-gray-800">Subtotal:</span>
                      <span className="text-xl font-bold text-gray-800">
                        R$ {orderData.subtotal.toLocaleString()}
                      </span>
                    </div>
                    
                    {orderData.discount > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-green-600">Desconto ({orderData.discount}%):</span>
                        <span className="text-xl font-bold text-green-600">
                          -R$ {orderData.discountAmount.toLocaleString()}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-xl font-bold text-gray-800">Total:</span>
                      <span className="text-3xl font-bold text-designoai-blue">
                        R$ {orderData.total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Powered by Stripe</h3>
              <p className="text-sm text-blue-700">
                Seus dados de pagamento são processados de forma segura pelo Stripe, 
                líder mundial em processamento de pagamentos online.
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full" 
              onClick={handleSubmit}
              disabled={isProcessing}
            >
              {isProcessing ? (
                "Processando..."
              ) : (
                `Pagar com Stripe - R$ ${orderData.total.toLocaleString()}`
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
