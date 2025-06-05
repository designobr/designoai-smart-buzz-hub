
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const startFeatures = [
    "12 artes premium personalizadas",
    "Suporte de Inteligência Artificial na criação visual",
    "Sugestão de temas com base em tendências e perfil do cliente",
    "Processo de aprovação com até 2 rodadas de revisão por arte",
    "Canal de atendimento via WhatsApp (horário comercial)"
  ];

  const plusFeatures = [
    "18 artes premium personalizadas",
    "Suporte de Inteligência Artificial no processo criativo",
    "Sugestão de temas com base em tendências",
    "Processo de aprovação com até 2 rodadas de revisão por arte",
    "Canal de atendimento via WhatsApp (horário comercial)"
  ];

  const digitalFeatures = ["Gestão de Redes Sociais (12 posts/mês)", "Stories diários programados", "Design Gráfico completo", "Copywriting otimizado", "Tráfego Pago (Instagram/Facebook)", "Site One Page Responsivo"];
  const physicalFeatures = ["Cartão de Visita Digital com QR Code", "1 Sessão de Fotos Presencial", "1 Vídeo Institucional", "Material físico sob demanda"];
  const aiFeatures = ["Relatórios mensais de desempenho", "Assistente por WhatsApp com IA", "Diagnóstico de marketing automático"];

  const handleContractClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleCalculatorClick = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-4">
            Nossos Planos
          </h2>
          <p className="text-xl text-gray-600">
            Escolha o plano ideal para sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Pacote Start */}
          <Card className="relative overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <CardHeader className="text-center pb-6 pt-6">
              <CardTitle className="text-2xl font-bold text-designoai-blue-dark">
                Pacote Start
              </CardTitle>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-designoai-blue">R$ 1.200</span>
                <span className="text-gray-600 ml-2">/mês</span>
              </div>
              <CardDescription className="text-base">
                Ideal para pequenos negócios que querem presença visual nas redes com inteligência artificial
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pb-6">
              <ul className="space-y-3 mb-6">
                {startFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full bg-designoai-blue hover:bg-designoai-blue-dark" 
                onClick={handleContractClick}
              >
                Contratar Start
              </Button>
            </CardContent>
          </Card>

          {/* Plano Plus (Isca) */}
          <Card className="relative overflow-hidden shadow-lg border-2 border-yellow-400 hover:shadow-xl transition-shadow">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
            
            <CardHeader className="text-center pb-6 pt-6">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-2" />
                <CardTitle className="text-2xl font-bold text-designoai-blue-dark">
                  Plano Plus
                </CardTitle>
              </div>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-designoai-blue">R$ 2.600</span>
                <span className="text-gray-600 ml-2">/mês</span>
              </div>
              <CardDescription className="text-base">
                Plano intermediário com mais artes, mas sem ganhos estratégicos reais
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pb-6">
              <ul className="space-y-3 mb-6">
                {plusFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline"
                className="w-full border-yellow-400 text-yellow-600 hover:bg-yellow-50" 
                onClick={handleContractClick}
              >
                Contratar Plus
              </Button>
            </CardContent>
          </Card>

          {/* Plano Fusion */}
          <Card className="relative overflow-hidden shadow-xl border-2 border-designoai-blue transform scale-105">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-designoai-blue to-designoai-blue-dark"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-designoai-blue to-designoai-blue-dark text-white px-4 py-1 rounded-full text-xs font-semibold">
              MELHOR CUSTO-BENEFÍCIO
            </div>
            
            <CardHeader className="text-center pb-6 pt-6">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-designoai-blue mr-2" />
                <CardTitle className="text-3xl font-bold text-designoai-blue-dark">
                  Fusion
                </CardTitle>
              </div>
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl font-bold text-designoai-blue">R$ 4.000</span>
                <span className="text-gray-600 ml-2">/mês</span>
              </div>
              <CardDescription className="text-lg">
                Marketing físico + digital + IA em uma solução única
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-6 pb-6">
              <div>
                <h3 className="text-lg font-semibold text-designoai-blue-dark mb-3 flex items-center">
                  📱 Digital
                </h3>
                <ul className="space-y-2">
                  {digitalFeatures.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </li>
                  ))}
                  <li className="text-xs text-gray-500">+ 3 recursos adicionais</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-designoai-blue-dark mb-3 flex items-center">
                  🧾 Físico
                </h3>
                <ul className="space-y-2">
                  {physicalFeatures.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </li>
                  ))}
                  <li className="text-xs text-gray-500">+ 2 recursos adicionais</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-designoai-blue-dark mb-3 flex items-center">
                  🤖 IA
                </h3>
                <ul className="space-y-2">
                  {aiFeatures.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </li>
                  ))}
                  <li className="text-xs text-gray-500">+ 1 recurso adicional</li>
                </ul>
              </div>
            </CardContent>

            <div className="bg-designoai-blue-light p-4">
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-designoai-blue-dark font-semibold mb-3">
                  🔗 Solução Completa: Atendimento humanizado + IA
                </p>
                <div className="flex space-x-3">
                  <Button className="bg-designoai-blue hover:bg-designoai-blue-dark" onClick={handleContractClick}>
                    Contratar Fusion
                  </Button>
                  <Link to="/services">
                    <Button variant="outline" className="border-designoai-blue text-designoai-blue hover:bg-designoai-blue-light">
                      Ver Detalhes
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Quer personalizar seu pacote? Temos adicionais disponíveis!
          </p>
          <Button variant="ghost" className="text-designoai-blue hover:text-designoai-blue-dark" onClick={handleCalculatorClick}>
            Ver Calculadora de Preços →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
