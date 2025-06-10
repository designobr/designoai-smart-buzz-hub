import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, CreditCard, QrCode, FileText, Shield, Check, Copy, ExternalLink } from 'lucide-react';

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
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState<any>(null);

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

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Código PIX copiado para a área de transferência.",
    });
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

      // Now process payment with PagBank
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

      console.log('Payment response:', paymentResponse);

      if (paymentResponse.success) {
        setPaymentResult(paymentResponse);
        
        if (paymentMethod === 'credit_card' && paymentResponse.checkoutUrl) {
          // Redirect to PagBank checkout for credit card
          window.location.href = paymentResponse.checkoutUrl;
          return;
        }

        toast({
          title: "Pagamento iniciado!",
          description: paymentMethod === 'pix' 
            ? "Use o QR Code ou código PIX para finalizar o pagamento."
            : paymentMethod === 'boleto'
            ? "Boleto gerado! Clique no link para visualizar e pagar."
            : "Redirecionando para o pagamento...",
        });
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
      id: 'pix',
      name: 'PIX',
      description: 'Pagamento instantâneo',
      icon: QrCode,
      discount: '5% de desconto adicional'
    },
    {
      id: 'credit_card',
      name: 'Cartão de Crédito',
      description: 'Parcelamento disponível',
      icon: CreditCard,
      discount: null
    },
    {
      id: 'boleto',
      name: 'Boleto Bancário',
      description: 'Vencimento em 3 dias úteis',
      icon: FileText,
      discount: null
    }
  ];

  // If payment result exists, show payment details
  if (paymentResult) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-designoai-blue-dark mb-2">
              {paymentMethod === 'pix' ? 'Pagamento via PIX' : 
               paymentMethod === 'boleto' ? 'Boleto Bancário Gerado' : 
               'Processando Pagamento'}
            </h1>
          </div>

          {paymentMethod === 'pix' && paymentResult.qrCode && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <QrCode className="w-5 h-5 mr-2" />
                  PIX - Pagamento Instantâneo
                </CardTitle>
                <CardDescription>
                  Escaneie o QR Code ou copie o código PIX
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                {paymentResult.qrCodeImage && (
                  <div className="flex justify-center">
                    <img 
                      src={paymentResult.qrCodeImage} 
                      alt="QR Code PIX" 
                      className="w-64 h-64 border rounded-lg"
                    />
                  </div>
                )}
                
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Código PIX:
                    </Label>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-sm bg-white p-2 rounded border font-mono break-all">
                        {paymentResult.qrCode}
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(paymentResult.qrCode)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p>💰 Valor: <strong>R$ {orderData.total.toLocaleString()}</strong></p>
                    {paymentResult.expiresAt && (
                      <p>⏰ Expira em: <strong>{new Date(paymentResult.expiresAt).toLocaleString()}</strong></p>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg text-left">
                  <h3 className="font-semibold text-blue-800 mb-2">Como pagar:</h3>
                  <ol className="text-sm text-blue-700 space-y-1">
                    <li>1. Abra o app do seu banco</li>
                    <li>2. Escaneie o QR Code ou copie o código PIX</li>
                    <li>3. Confirme o pagamento</li>
                    <li>4. Aguarde a confirmação automática</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          )}

          {paymentMethod === 'boleto' && paymentResult.boletoUrl && (
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Boleto Bancário
                </CardTitle>
                <CardDescription>
                  Seu boleto foi gerado com sucesso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Button
                    className="w-full"
                    onClick={() => window.open(paymentResult.boletoUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visualizar e Imprimir Boleto
                  </Button>
                </div>
                
                {paymentResult.boletoBarcode && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <Label className="text-sm font-medium text-gray-700 mb-2 block">
                      Código de Barras:
                    </Label>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-sm bg-white p-2 rounded border font-mono">
                        {paymentResult.boletoBarcode}
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(paymentResult.boletoBarcode)}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className="text-sm text-gray-600">
                  <p>💰 Valor: <strong>R$ {orderData.total.toLocaleString()}</strong></p>
                  {paymentResult.dueDate && (
                    <p>📅 Vencimento: <strong>{new Date(paymentResult.dueDate).toLocaleDateString()}</strong></p>
                  )}
                </div>

                <div className="bg-orange-50 p-4 rounded-lg text-left">
                  <h3 className="font-semibold text-orange-800 mb-2">Importante:</h3>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• O boleto tem vencimento em 3 dias úteis</li>
                    <li>• Pode ser pago em qualquer banco ou lotérica</li>
                    <li>• Também pode ser pago pelo internet banking</li>
                    <li>• Após o pagamento, a confirmação é automática em até 2 dias úteis</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6 text-center">
              <div className="space-y-3">
                <div className="flex items-center justify-center text-green-800">
                  <Check className="w-6 h-6 mr-2" />
                  <span className="font-medium">Pedido criado com sucesso!</span>
                </div>
                <p className="text-green-700">
                  Você receberá uma confirmação por email assim que o pagamento for processado.
                </p>
                <Button 
                  onClick={() => navigate('/')}
                  className="mt-4"
                >
                  Voltar ao Início
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Original checkout form
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
                  Seus dados estão protegidos e não serão compartilhados
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
                  Escolha como deseja pagar seu pedido
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

            <Card className="bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-center text-green-800">
                    <Check className="w-5 h-5 mr-2" />
                    <span className="font-medium">Pagamento 100% seguro</span>
                  </div>
                  <div className="flex items-center text-green-800">
                    <Check className="w-5 h-5 mr-2" />
                    <span className="font-medium">Satisfação garantida</span>
                  </div>
                  <div className="flex items-center text-green-800">
                    <Check className="w-5 h-5 mr-2" />
                    <span className="font-medium">Suporte premium incluído</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button 
              size="lg" 
              className="w-full" 
              onClick={handleSubmit}
              disabled={isProcessing}
            >
              {isProcessing ? (
                "Processando..."
              ) : (
                `Finalizar Compra - R$ ${orderData.total.toLocaleString()}`
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
