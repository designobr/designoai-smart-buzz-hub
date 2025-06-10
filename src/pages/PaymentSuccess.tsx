
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, MessageCircle, Home } from 'lucide-react';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  const handleWhatsAppContact = () => {
    const message = `Olá! Acabei de realizar uma compra no site da DesignoAI. 
    
Dados do pedido:
- ID: ${orderData.orderId}
- Valor: R$ ${orderData.total.toLocaleString()}
- Forma de pagamento: ${orderData.paymentMethod === 'pix' ? 'PIX' : orderData.paymentMethod === 'credit_card' ? 'Cartão de Crédito' : 'Boleto'}

Gostaria de confirmar os próximos passos para iniciar os serviços.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511947968158?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-green-600 mb-2">
            Compra Realizada com Sucesso!
          </h1>
          <p className="text-gray-600">
            Seu pedido foi processado e em breve você receberá as informações por e-mail
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Detalhes do Pedido</CardTitle>
            <CardDescription>
              ID do Pedido: {orderData.orderId}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Valor Total:</span>
                <span className="text-2xl font-bold text-designoai-blue">
                  R$ {orderData.total.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Forma de Pagamento:</span>
                <span className="text-gray-600">
                  {orderData.paymentMethod === 'pix' ? 'PIX' : 
                   orderData.paymentMethod === 'credit_card' ? 'Cartão de Crédito' : 
                   'Boleto Bancário'}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Status:</span>
                <span className="text-green-600 font-medium">Processando</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-designoai-blue-light mb-8">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-designoai-blue-dark mb-4">
              Próximos Passos:
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
              <li>Você receberá um e-mail de confirmação com os detalhes do pedido</li>
              <li>Nossa equipe entrará em contato em até 24 horas</li>
              <li>Agendaremos uma reunião para conhecer melhor seu negócio</li>
              <li>Começaremos a produzir seu conteúdo personalizado</li>
            </ol>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Button 
            size="lg" 
            className="w-full" 
            onClick={handleWhatsAppContact}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Falar com Nossa Equipe no WhatsApp
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full"
            onClick={() => navigate('/')}
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar ao Site
          </Button>
        </div>

        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold text-yellow-800 mb-2">
                Importante!
              </h3>
              <p className="text-sm text-yellow-700">
                Se você escolheu PIX ou boleto, aguarde a confirmação do pagamento. 
                Para cartão de crédito, a confirmação é automática.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;
