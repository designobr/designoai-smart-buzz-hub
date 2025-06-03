
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const digitalFeatures = [
    "Gestão de Redes Sociais (12 posts/mês)",
    "Stories diários programados",
    "Design Gráfico completo",
    "Copywriting otimizado",
    "Tráfego Pago (Instagram/Facebook)",
    "Site One Page Responsivo"
  ];

  const physicalFeatures = [
    "Cartão de Visita Digital com QR Code",
    "1 Sessão de Fotos Presencial",
    "1 Vídeo Institucional",
    "Material físico sob demanda"
  ];

  const aiFeatures = [
    "Relatórios mensais de desempenho",
    "Assistente por WhatsApp com IA",
    "Diagnóstico de marketing automático"
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-4">
            Plano Fusion
          </h2>
          <p className="text-xl text-gray-600">
            Solução completa para empresas que querem unir presença física e digital
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden shadow-xl border-2 border-designoai-blue">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-designoai-blue to-designoai-blue-dark"></div>
            
            <CardHeader className="text-center pb-8 pt-8">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-designoai-blue mr-2" />
                <CardTitle className="text-3xl font-bold text-designoai-blue-dark">
                  Fusion
                </CardTitle>
              </div>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-designoai-blue">R$ 4.000</span>
                <span className="text-gray-600 ml-2">/mês</span>
              </div>
              <CardDescription className="text-lg">
                Marketing físico + digital + IA em uma solução única
              </CardDescription>
            </CardHeader>

            <CardContent className="grid md:grid-cols-3 gap-8 pb-8">
              <div>
                <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4 flex items-center">
                  📱 Digital
                </h3>
                <ul className="space-y-3">
                  {digitalFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4 flex items-center">
                  🧾 Físico
                </h3>
                <ul className="space-y-3">
                  {physicalFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4 flex items-center">
                  🤖 IA
                </h3>
                <ul className="space-y-3">
                  {aiFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <div className="bg-designoai-blue-light p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="mb-4 sm:mb-0">
                  <p className="text-designoai-blue-dark font-semibold mb-1">
                    🔗 Vantagens Exclusivas:
                  </p>
                  <p className="text-sm text-gray-700">
                    Atendimento humanizado + IA • Suporte contínuo • Pagamento em 2x sem juros
                  </p>
                </div>
                <div className="flex space-x-3">
                  <Button className="bg-designoai-blue hover:bg-designoai-blue-dark">
                    Contratar Agora
                  </Button>
                  <Button variant="outline" className="border-designoai-blue text-designoai-blue hover:bg-designoai-blue-light">
                    Ver Detalhes
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer personalizar seu pacote? Temos adicionais disponíveis!
          </p>
          <Button variant="ghost" className="text-designoai-blue hover:text-designoai-blue-dark">
            Ver Calculadora de Preços →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
