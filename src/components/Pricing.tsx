
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, ArrowRight, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const startFeatures = ["12 artes premium personalizadas", "Suporte de Inteligência Artificial na criação visual", "Sugestão de temas com base em tendências e perfil do cliente", "Processo de aprovação com até 2 rodadas de revisão por arte", "Canal de atendimento via WhatsApp (horário comercial)"];
  const plusFeatures = ["18 artes premium personalizadas", "Suporte de Inteligência Artificial no processo criativo", "Sugestão de temas com base em tendências", "Processo de aprovação com até 2 rodadas de revisão por arte", "Canal de atendimento via WhatsApp (horário comercial)"];
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
    <section id="pricing" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-64 h-64 top-20 left-10" style={{ animationDelay: '0s' }}></div>
        <div className="floating-orb w-48 h-48 bottom-20 right-20" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 mesh-gradient"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Nossos Planos
          </h2>
          <p className="text-xl text-white/80">
            Escolha o plano ideal para sua empresa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Pacote Start */}
          <Card className="relative overflow-hidden glass-card border border-white/20 hover:glass-strong transition-all duration-500 group">
            <CardHeader className="text-center pb-6 pt-6">
              <CardTitle className="text-2xl font-bold text-white">Start</CardTitle>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">R$ 1.200</span>
                <span className="text-white/60 ml-2">/mês</span>
              </div>
              <CardDescription className="text-base text-white/70">
                Ideal para pequenos negócios que querem presença visual nas redes com inteligência artificial
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pb-6">
              <ul className="space-y-3 mb-6">
                {startFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border border-white/20 glass" 
                onClick={handleContractClick}
              >
                Contratar Start
              </Button>
            </CardContent>
          </Card>

          {/* Plano Plus (Isca) */}
          <Card className="relative overflow-hidden glass-card border-2 border-yellow-400/50 hover:glass-strong transition-all duration-500 group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
            
            <CardHeader className="text-center pb-6 pt-6">
              <CardTitle className="text-2xl font-bold text-white">Plus</CardTitle>
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">R$ 2.600</span>
                <span className="text-white/60 ml-2">/mês</span>
              </div>
              <CardDescription className="text-base text-white/70">Plano intermediário com mais artes</CardDescription>
            </CardHeader>
            
            <CardContent className="pb-6">
              <ul className="space-y-3 mb-6">
                {plusFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 glass" 
                onClick={handleContractClick}
              >
                Contratar Plus
              </Button>
            </CardContent>
          </Card>

          {/* Plano Fusion */}
          <Card className="relative overflow-hidden glass-strong border-2 border-purple-400/50 transform scale-105 group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-medium">
              MELHOR CUSTO-BENEFÍCIO
            </div>
            
            <CardHeader className="text-center pb-6 pt-8">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-8 h-8 text-purple-400 mr-2" />
                <CardTitle className="text-3xl font-bold text-white">Fusion</CardTitle>
              </div>
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">R$ 4.000</span>
                <span className="text-white/60 ml-2">/mês</span>
              </div>
              <CardDescription className="text-lg text-white/80">
                Marketing físico + digital + IA em uma solução única
              </CardDescription>
            </CardHeader>

            <CardContent className="grid gap-6 pb-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  📱 Digital
                </h3>
                <ul className="space-y-2">
                  {digitalFeatures.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-white/80">{feature}</span>
                    </li>
                  ))}
                  <li className="text-xs text-white/50">+ 3 recursos adicionais</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  🧾 Físico
                </h3>
                <ul className="space-y-2">
                  {physicalFeatures.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-white/80">{feature}</span>
                    </li>
                  ))}
                  <li className="text-xs text-white/50">+ 2 recursos adicionais</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  🤖 IA
                </h3>
                <ul className="space-y-2">
                  {aiFeatures.slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-white/80">{feature}</span>
                    </li>
                  ))}
                  <li className="text-xs text-white/50">+ 1 recurso adicional</li>
                </ul>
              </div>
            </CardContent>

            <div className="glass-card p-4 border-t border-white/10">
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-white font-semibold mb-3">
                  🔗 Solução Completa: Atendimento humanizado + IA
                </p>
                <div className="flex space-x-3">
                  <Button 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white glass border border-white/20" 
                    onClick={handleContractClick}
                  >
                    Contratar Fusion
                  </Button>
                  <Link to="/services">
                    <Button 
                      variant="outline" 
                      className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 glass"
                    >
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
          <p className="text-white/70 mb-4">
            Quer personalizar seu pacote? Temos adicionais disponíveis!
          </p>
          <Button 
            variant="ghost" 
            className="text-blue-400 hover:text-blue-300 hover:bg-white/10 glass" 
            onClick={handleCalculatorClick}
          >
            Ver Calculadora de Preços →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
