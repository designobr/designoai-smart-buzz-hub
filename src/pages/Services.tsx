import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, Sparkles, ArrowRight, Camera, Smartphone, BarChart3, Brain, Globe, Users } from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const additionalServices = [
    { name: "Impressão de 100 cartões de visita", price: "R$ 80 a R$ 120", icon: "🎴" },
    { name: "Catálogo digital interativo", price: "R$ 300", icon: "📱" },
    { name: "Vídeos Reels (extra)", price: "R$ 80 a R$ 150 cada", icon: "🎬" },
    { name: "Landing Page para campanha específica", price: "R$ 400", icon: "🌐" },
    { name: "Consultoria estratégica mensal", price: "R$ 250", icon: "💡" },
    { name: "Criação de e-mail profissional", price: "R$ 100 (setup)", icon: "📧" },
    { name: "Google Meu Negócio otimizado", price: "R$ 200", icon: "🗺️" }
  ];

  const handleConsultationClick = () => {
    window.open('https://wa.me/5511947968158?text=Olá! Gostaria de agendar uma consultoria gratuita sobre o Plano Fusion.', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-designoai-blue-light via-white to-slate-50 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-designoai-blue/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-designoai-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-designoai-blue-light to-purple-50 rounded-full text-designoai-blue font-medium mb-8 shadow-lg border border-designoai-blue/20">
              <Star className="w-4 h-4 mr-2 animate-pulse" />
              💼 Plano Fusion
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-designoai-blue to-indigo-600 bg-clip-text text-transparent block">
                Plano Fusion
              </span>
              <span className="bg-gradient-to-r from-designoai-blue via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                Completo
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              Atendemos empresas pequenas e médias que atuam no físico, mas ainda não possuem presença digital estratégica
            </p>
            
            <div className="flex items-center justify-center mb-10">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-designoai-blue/20 via-purple-500/10 to-indigo-500/20 rounded-full blur-xl"></div>
                <div className="relative bg-white rounded-full px-8 py-4 shadow-xl border border-slate-200">
                  <div className="flex items-center">
                    <Star className="w-8 h-8 text-designoai-blue mr-3" />
                    <span className="text-4xl font-bold bg-gradient-to-r from-designoai-blue to-indigo-600 bg-clip-text text-transparent">
                      R$ 4.000/mês
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-gradient-to-r from-designoai-blue to-indigo-600 hover:from-indigo-600 hover:to-designoai-blue text-white shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1 px-8 py-4"
              onClick={handleConsultationClick}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              Agende sua Consultoria Gratuita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Main Content */}
      <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-designoai-blue/5 to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-designoai-blue/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Tabs defaultValue="digital" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/80 backdrop-blur-sm shadow-lg border border-slate-200/50 rounded-2xl p-2">
              <TabsTrigger value="digital" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-designoai-blue data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300">📱 Digital</TabsTrigger>
              <TabsTrigger value="physical" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-designoai-blue data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300">🧾 Físico</TabsTrigger>
              <TabsTrigger value="ai" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-designoai-blue data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300">🤖 IA</TabsTrigger>
              <TabsTrigger value="extras" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-designoai-blue data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300">➕ Extras</TabsTrigger>
            </TabsList>

            <TabsContent value="digital">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"></div>
                  <div className="relative z-10">
                    <CardTitle className="text-3xl font-bold flex items-center">
                      <Smartphone className="w-8 h-8 mr-3" />
                      Serviços Digitais
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-lg">Presença digital completa e profissional</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 p-8">
                  
                  <div className="group p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-blue-600 transition-colors">Gestão de Redes Sociais</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />12 posts/mês (imagem + legenda + hashtag)</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Stories diários programados</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Calendário de conteúdo com planejamento estratégico</li>
                    </ul>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-purple-600 transition-colors">Design & Copy</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Criação da identidade visual completa</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Templates editáveis no Canva</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Legendas otimizadas + textos para anúncios</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Sugestão de bio e textos institucionais</li>
                    </ul>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-green-600 transition-colors">Tráfego Pago</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Campanhas no Instagram e Facebook</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Foco em conversão ou visibilidade</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Relatório mensal automático via IA</li>
                    </ul>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-orange-600 transition-colors">Site One Page</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Site institucional responsivo</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Quem somos, serviços, contato</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Formulário de contato e botão WhatsApp</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="physical">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"></div>
                  <div className="relative z-10">
                    <CardTitle className="text-3xl font-bold flex items-center">
                      <Camera className="w-8 h-8 mr-3" />
                      Materiais Físicos
                    </CardTitle>
                    <CardDescription className="text-green-100 text-lg">Integração perfeita entre físico e digital</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-green-600 transition-colors">Cartões de Visita</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Cartão de Visita Digital com QR Code</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Cartão de Visita Físico (opcional)</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Design alinhado com identidade visual</li>
                    </ul>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-teal-600 transition-colors">Produção Audiovisual</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />1 Sessão de Fotos Presencial (mês)</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />1 Gravação de Vídeo Institucional (mês)</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Material profissional para redes sociais</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"></div>
                  <div className="relative z-10">
                    <CardTitle className="text-3xl font-bold flex items-center">
                      <Brain className="w-8 h-8 mr-3" />
                      Inteligência Artificial
                    </CardTitle>
                    <CardDescription className="text-purple-100 text-lg">Tecnologia avançada para otimizar seus resultados</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="group p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-purple-600 transition-colors">Relatórios Inteligentes</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Relatórios mensais de desempenho automáticos</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Análise de métricas e insights</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Sugestões de otimização baseadas em dados</li>
                    </ul>
                  </div>
                  <div className="group p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 group-hover:text-pink-600 transition-colors">Assistente Virtual</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Assistente por WhatsApp com IA</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Suporte humano quando necessário</li>
                      <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />Diagnóstico de marketing automático</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="extras">
              <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5"></div>
                  <div className="relative z-10">
                    <CardTitle className="text-3xl font-bold flex items-center">
                      <Star className="w-8 h-8 mr-3" />
                      Serviços Adicionais
                    </CardTitle>
                    <CardDescription className="text-orange-100 text-lg">Expanda seu pacote com serviços personalizados</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {additionalServices.map((service, index) => (
                      <div key={index} className="group flex items-center justify-between p-6 border border-slate-200 rounded-2xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="flex items-center">
                          <span className="text-2xl mr-4">{service.icon}</span>
                          <span className="font-medium text-slate-700 group-hover:text-slate-800">{service.name}</span>
                        </div>
                        <span className="text-designoai-blue font-semibold group-hover:text-orange-600 transition-colors">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-designoai-blue via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Enhanced background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10">
            <Star className="w-16 h-16 text-white animate-pulse-slow" />
          </div>
          <div className="absolute top-20 right-20">
            <Sparkles className="w-12 h-12 text-white animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
          </div>
          <div className="absolute bottom-10 left-20">
            <div className="w-8 h-8 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="block">Pronto para transformar</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                seu negócio?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Entre em contato conosco e descubra como podemos impulsionar sua empresa
            </p>
            <Button 
              size="lg" 
              className="relative overflow-hidden bg-white text-designoai-blue hover:bg-gray-50 text-lg font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1"
              onClick={handleConsultationClick}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              Fale Conosco no WhatsApp
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
