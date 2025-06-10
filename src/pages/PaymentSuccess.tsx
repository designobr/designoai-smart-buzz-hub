
import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Home, Mail } from 'lucide-react';

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const session_id = searchParams.get('session_id');
    if (session_id) {
      setSessionId(session_id);
      console.log('Payment completed with session ID:', session_id);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-green-800">
              Pagamento Realizado com Sucesso!
            </CardTitle>
            <CardDescription className="text-green-700">
              Seu pedido foi processado e você receberá uma confirmação por email
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            {sessionId && (
              <div className="bg-white p-4 rounded-lg border">
                <p className="text-sm text-gray-600 mb-2">ID da Sessão de Pagamento:</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono">
                  {sessionId}
                </code>
              </div>
            )}
            
            <div className="space-y-4">
              <div className="flex items-center justify-center text-green-800">
                <Mail className="w-5 h-5 mr-2" />
                <span>Confirmação enviada por email</span>
              </div>
              
              <p className="text-green-700">
                Nossa equipe entrará em contato em até 24 horas para dar início aos seus serviços de IA.
              </p>
            </div>

            <div className="space-y-3">
              <Button 
                onClick={() => navigate('/')}
                className="w-full"
              >
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
              
              <p className="text-sm text-gray-600">
                Precisa de ajuda? Entre em contato conosco pelo WhatsApp: 
                <a 
                  href="https://wa.me/5511947968158" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-designoai-blue hover:underline ml-1"
                >
                  (11) 94796-8158
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;
