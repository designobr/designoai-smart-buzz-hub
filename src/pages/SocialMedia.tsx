
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
      description: "IA gera posts personalizados para cada plataforma"
    },
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Cronograma otimizado baseado em dados comportamentais"
    },
    {
      icon: TrendingUp,
      title: "Análise de Tendências",
      description: "Identificação automática de hashtags e temas virais"
    },
    {
      icon: Users,
      title: "Gestão Automatizada",
      description: "Publicação simultânea em múltiplas plataformas"
    },
    {
      icon: BarChart3,
      title: "Relatórios Detalhados",
      description: "Métricas de performance em tempo real"
    },
    {
      icon: MessageCircle,
      title: "Resposta Automatizada",
      description: "Chatbot inteligente para interações com seguidores"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-designoai-blue-light/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-designoai-blue/5 via-transparent to-designoai-blue/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-designoai-blue/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent leading-tight">
              Social Media
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transforme sua presença digital com inteligência artificial que cria conteúdo envolvente e gerencia suas redes sociais automaticamente.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Recursos Principais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <CardTitle className="text-xl text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Como Funciona
          </h2>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  Nossa inteligência artificial analisa o perfil da sua empresa, seu público-alvo e as tendências do mercado para criar conteúdo relevante e envolvente.
                </p>
                
                <p className="leading-relaxed mb-6">
                  O sistema aprende continuamente com as interações e ajusta a estratégia para maximizar o alcance e engajamento. Utilizamos algoritmos avançados para determinar os melhores horários de postagem, hashtags mais eficazes e tipos de conteúdo que geram maior interesse do seu público específico.
                </p>
                
                <div className="bg-gradient-to-r from-designoai-blue-light/50 to-purple-50 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">Processo Automatizado:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                      <span>Análise do perfil da marca e público-alvo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                      <span>Criação automática de conteúdo personalizado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                      <span>Agendamento inteligente baseado em dados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Resultados Comprovados
          </h2>
          
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-designoai-blue-dark mb-6">Benefícios Mensuráveis</h3>
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-1 mr-3 mt-1">
                          <div className="bg-white rounded-full w-2 h-2"></div>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-designoai-blue/10 to-purple-100 rounded-2xl p-8 text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-3xl font-bold text-designoai-blue mb-2">98%</h4>
                    <p className="text-gray-600">Taxa de satisfação dos clientes</p>
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
