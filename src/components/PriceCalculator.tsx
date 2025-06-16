
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Plus, Minus, Sparkles } from 'lucide-react';

const PriceCalculator = () => {
  const [services, setServices] = useState({
    socialMediaPosts: 0,
    stories: 0,
    videoContent: 0,
    emailCampaigns: 0,
    landingPages: 0,
    seoOptimization: 0
  });

  const servicePrices = {
    socialMediaPosts: 50,
    stories: 25,
    videoContent: 200,
    emailCampaigns: 100,
    landingPages: 300,
    seoOptimization: 150
  };

  const serviceLabels = {
    socialMediaPosts: 'Posts para Redes Sociais',
    stories: 'Stories Personalizados',
    videoContent: 'Conteúdo em Vídeo',
    emailCampaigns: 'Campanhas de Email',
    landingPages: 'Landing Pages',
    seoOptimization: 'Otimização SEO'
  };

  const updateService = (service: keyof typeof services, increment: boolean) => {
    setServices(prev => ({
      ...prev,
      [service]: Math.max(0, prev[service] + (increment ? 1 : -1))
    }));
  };

  const calculateTotal = () => {
    return Object.entries(services).reduce((total, [service, quantity]) => {
      return total + (servicePrices[service as keyof typeof servicePrices] * quantity);
    }, 0);
  };

  const handleQuoteRequest = () => {
    const total = calculateTotal();
    const servicesSelected = Object.entries(services)
      .filter(([_, quantity]) => quantity > 0)
      .map(([service, quantity]) => `${serviceLabels[service as keyof typeof serviceLabels]}: ${quantity}`)
      .join(', ');
    
    const message = `Olá! Gostaria de um orçamento para os seguintes serviços: ${servicesSelected}. Total estimado: R$ ${total.toLocaleString('pt-BR')}.`;
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-96 h-96 top-20 right-10" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-64 h-64 bottom-20 left-20" style={{ animationDelay: '4s' }}></div>
        <div className="absolute inset-0 mesh-gradient"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
            <Calculator className="w-4 h-4 mr-2" />
            💰 Calculadora de Preços
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Calcule o Investimento para Seu Projeto
          </h2>
          <p className="text-xl text-white/70">
            Personalize seu pacote e veja o valor em tempo real
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-strong border border-white/20 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-white flex items-center justify-center">
                <Sparkles className="w-6 h-6 mr-2 text-blue-400" />
                Monte Seu Pacote Personalizado
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {Object.entries(serviceLabels).map(([service, label]) => (
                    <div key={service} className="glass-card p-6 rounded-xl border border-white/20 group hover:glass-strong transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{label}</h3>
                          <p className="text-sm text-white/60">R$ {servicePrices[service as keyof typeof servicePrices]}/unidade</p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Button
                            size="sm"
                            variant="outline"
                            className="glass border-white/30 text-white hover:bg-white/10 w-8 h-8 p-0"
                            onClick={() => updateService(service as keyof typeof services, false)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-bold text-white">
                            {services[service as keyof typeof services]}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="glass border-white/30 text-white hover:bg-white/10 w-8 h-8 p-0"
                            onClick={() => updateService(service as keyof typeof services, true)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          R$ {(servicePrices[service as keyof typeof servicePrices] * services[service as keyof typeof services]).toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <Card className="glass-strong border border-white/20">
                    <CardHeader className="text-center">
                      <CardTitle className="text-xl text-white">Resumo do Orçamento</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {Object.entries(services)
                        .filter(([_, quantity]) => quantity > 0)
                        .map(([service, quantity]) => (
                          <div key={service} className="flex justify-between items-center py-2 border-b border-white/10">
                            <span className="text-white/80">{serviceLabels[service as keyof typeof serviceLabels]} (x{quantity})</span>
                            <span className="font-semibold text-white">
                              R$ {(servicePrices[service as keyof typeof servicePrices] * quantity).toLocaleString('pt-BR')}
                            </span>
                          </div>
                        ))}
                      
                      <div className="pt-4 border-t border-white/20">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-white">Total:</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            R$ {calculateTotal().toLocaleString('pt-BR')}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="glass-card p-6 rounded-xl border border-white/20">
                    <h3 className="font-semibold text-white mb-3">💡 Incluso em todos os pacotes:</h3>
                    <ul className="space-y-2 text-sm text-white/70">
                      <li>• Suporte de IA na criação</li>
                      <li>• Relatórios de performance</li>
                      <li>• Otimização contínua</li>
                      <li>• Suporte via WhatsApp</li>
                    </ul>
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 glass border border-white/20 group transform hover:-translate-y-1"
                    onClick={handleQuoteRequest}
                    disabled={calculateTotal() === 0}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                    Solicitar Orçamento via WhatsApp
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
