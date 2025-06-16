
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Target, TrendingUp, Users, BarChart3, MessageCircle } from 'lucide-react';

const SocialMedia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Sparkles,
      title: "Criação de Conteúdo Visual",
      description: "IA gera posts personalizados para cada plataforma",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Cronograma otimizado baseado em dados comportamentais",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Análise de Tendências",
      description: "Identificação automática de hashtags e temas virais",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Gestão Automatizada",
      description: "Publicação simultânea em múltiplas plataformas",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Métricas de performance em tempo real",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Resposta Automatizada",
      description: "Chatbot inteligente para interações com seguidores",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const benefits = [
    "Aumento de 300% no engajamento orgânico",
    "Economia de 15 horas semanais de trabalho manual",
    "Crescimento de 250% no número de seguidores",
    "ROI 5x superior em campanhas pagas",
    "Consistência de 98% na identidade visual da marca"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb w-96 h-96 top-20 left-10" style={{ animationDelay: '1s' }}></div>
          <div className="floating-orb w-64 h-64 bottom-10 right-10" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 mesh-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
              📱 Gestão de Redes Sociais
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Social Media
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Transforme sua presença digital com inteligência artificial que cria conteúdo envolvente e gerencia suas redes sociais automaticamente.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb w-48 h-48 top-20 right-20" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Recursos Principais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group glass-card border border-white/20 hover:glass-strong transition-all duration-500 hover:-translate-y-3">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 bg-gradient-to-r ${feature.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                    <feature.icon className="w-8 h-8 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb w-80 h-80 bottom-20 left-20" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Como Funciona
          </h2>
          
          <Card className="glass-strong border border-white/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-white/80">
                <p className="text-xl leading-relaxed mb-6">
                  Nossa inteligência artificial analisa o perfil da sua empresa, seu público-alvo e as tendências do mercado para criar conteúdo relevante e envolvente.
                </p>
                
                <p className="leading-relaxed mb-6">
                  O sistema aprende continuamente com as interações e ajusta a estratégia para maximizar o alcance e engajamento. Utilizamos algoritmos avançados para determinar os melhores horários de postagem, hashtags mais eficazes e tipos de conteúdo que geram maior interesse do seu público específico.
                </p>
                
                <div className="glass-card p-6 rounded-xl border border-white/20 mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Processo Automatizado:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 animate-glow">1</span>
                      <span>Análise do perfil da marca e público-alvo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 animate-glow">2</span>
                      <span>Criação automática de conteúdo personalizado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 animate-glow">3</span>
                      <span>Agendamento inteligente baseado em dados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 animate-glow">4</span>
                      <span>Monitoramento e otimização contínua</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Resultados Comprovados
          </h2>
          
          <Card className="glass-strong border border-white/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Benefícios Mensuráveis</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-1 mr-3 mt-1 animate-glow">
                          <div className="bg-white rounded-full w-2 h-2"></div>
                        </div>
                        <span className="text-white/80 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-8 rounded-2xl border border-white/20 text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 shadow-lg animate-glow">
                    <h4 className="text-3xl font-bold text-white mb-2">98%</h4>
                    <p className="text-white/90">Taxa de satisfação dos clientes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SocialMedia;
