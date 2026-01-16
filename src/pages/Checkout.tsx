import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, CreditCard, Shield } from 'lucide-react';

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
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  // Input validation helpers
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Sanitize input as user types
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enhanced validation
    const errors: string[] = [];
    
    if (!formData.name || formData.name.length < 2) {
      errors.push("Nome deve ter pelo menos 2 caracteres");
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
      errors.push("E-mail inválido");
    }
    
    if (!formData.phone || !validatePhone(formData.phone)) {
      errors.push("Telefone inválido");
    }
    
    if (errors.length > 0) {
      toast({
        title: "Dados inválidos",
        description: errors.join(". "),
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    try {
      // Process payment with Stripe
      const { data: paymentResponse, error: paymentError } = await supabase.functions.invoke('process-payment', {
        body: {
          paymentMethod: 'credit_card',
          amount: orderData.total,
          customerData: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone
          },
          packageData: {
            name: orderData.package.name,
            price: orderData.package.price,
            duration: orderData.duration,
            addons: orderData.addons
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

    } catch (error: unknown) {
      console.error('Error processing payment:', error);
      
      // Don't expose sensitive error details to user
      const errorMessage = error instanceof Error ? error.message : '';
      const userFriendlyMessage = errorMessage.includes('network') 
        ? "Erro de conexão. Verifique sua internet e tente novamente."
        : "Ocorreu um erro ao processar seu pedido. Tente novamente.";
      
      toast({
        title: "Erro ao processar pagamento",
        description: userFriendlyMessage,
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

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
              Complete seus dados para pagar com cartão de crédito via Stripe
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
                  Pagamento seguro via Stripe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 border-2 border-designoai-blue bg-designoai-blue-light rounded-lg">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full border-2 border-designoai-blue bg-designoai-blue mr-3 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <CreditCard className="w-5 h-5 mr-3 text-gray-600" />
                    <div>
                      <h3 className="font-medium text-gray-800">Cartão de Crédito</h3>
                      <p className="text-sm text-gray-600">Pagamento seguro via Stripe</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    💳 Aceitamos Visa, Mastercard, American Express e outros cartões principais
                  </p>
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
                `Pagar com Cartão - R$ ${orderData.total.toLocaleString()}`
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
