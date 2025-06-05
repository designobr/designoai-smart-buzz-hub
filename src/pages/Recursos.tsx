
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, CheckCircle, Zap, BarChart3, PenTool, Share2, Brain, MessageCircle } from 'lucide-react';

const Recursos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Geração de Conteúdo com IA",
      description: "Crie posts, artigos, legendas e materiais visuais automaticamente, adaptados ao seu nicho e público-alvo.",
      icon: <Sparkles className="w-8 h-8 text-white" />,
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "Análise de Concorrência",
      description: "Monitore e analise as estratégias dos seus concorrentes para se manter sempre à frente no mercado.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      title: "Agendamento Automático",
      description: "Programe suas publicações nos melhores horários para maximizar o engajamento e alcance.",
      icon: <Zap className="w-8 h-8 text-white" />,
      gradient: "from-green-500 via-green-600 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      title: "Dashboard Analytics",
      description: "Acompanhe métricas importantes em tempo real com relatórios detalhados e insights acionáveis.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      gradient: "from-orange-500 via-orange-600 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      title: "Otimização de SEO",
      description: "Melhore automaticamente o SEO do seu conteúdo para aumentar a visibilidade online.",
      icon: <Star className="w-8 h-8 text-white" />,
      gradient: "from-yellow-500 via-yellow-600 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      title: "Integração Multi-plataforma",
      description: "Conecte todas as suas redes sociais e canais de marketing em uma única plataforma.",
      icon: <Share2 className="w-8 h-8 text-white" />,
      gradient: "from-indigo-500 via-indigo-600 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      title: "Personalização Avançada",
      description: "Adapte o tom, estilo e formato do conteúdo para diferentes segmentos do seu público.",
      icon: <PenTool className="w-8 h-8 text-white" />,
      gradient: "from-pink-500 via-pink-600 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      title: "Suporte 24/7",
      description: "Nossa equipe está sempre disponível para ajudar você a maximizar seus resultados.",
      icon: <MessageCircle className="w-8 h-8 text-white" />,
      gradient: "from-teal-500 via-teal-600 to-cyan-500",
      bgGradient: "from-teal-50 to-cyan-50"
    }
  ];

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
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              🚀 Recursos Poderosos
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-designoai-blue to-indigo-600 bg-clip-text text-transparent block">
                Recursos Poderosos
              </span>
              <span className="bg-gradient-to-r from-designoai-blue via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                para seu Marketing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-4xl mx-auto">
              Descubra todas as funcionalidades que fazem do DesignoAI a ferramenta mais completa para transformar seu marketing digital
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/#contact">
                <Button size="lg" className="relative overflow-hidden bg-gradient-to-r from-designoai-blue to-indigo-600 hover:from-indigo-600 hover:to-designoai-blue text-white shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1 px-8 py-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-gray-50 relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-designoai-blue/5 to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-designoai-blue/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-designoai-blue via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Funcionalidades Avançadas
              </span>
            </h2>
            <p className="text-xl text-slate-600">
              Cada recurso foi desenvolvido para maximizar seus resultados de marketing digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-slate-200/50 relative overflow-hidden transition-all duration-700 hover:-translate-y-3"
              >
                {/* Enhanced gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Subtle border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 via-transparent to-slate-200/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="relative mb-6">
                    <div className={`p-4 bg-gradient-to-br ${feature.gradient} rounded-2xl w-fit group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                      {feature.icon}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                    </div>
                    {/* Floating particles */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-designoai-blue transition-colors duration-500 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Enhanced arrow indicator */}
                  <div className="mt-6 inline-flex items-center text-designoai-blue font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className="relative">
                      Saiba mais
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-designoai-blue to-purple-600 group-hover:w-full transition-all duration-300"></div>
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              <span className="block">Pronto para experimentar</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                todos esses recursos?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Comece hoje mesmo e veja como nossa IA pode transformar seu marketing digital
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/#contact">
                <Button size="lg" className="relative overflow-hidden bg-white text-designoai-blue hover:bg-gray-50 text-lg font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => window.open('https://wa.me/5511947968158?text=Olá! Gostaria de saber mais sobre os recursos do DesignoAI.', '_blank')} 
                className="relative overflow-hidden border-2 border-white/30 text-white hover:bg-white/10 text-lg font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-500 group transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recursos;
