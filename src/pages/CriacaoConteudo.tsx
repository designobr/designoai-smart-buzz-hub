
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pen, Target, Zap, Users, BarChart3, Sparkles, Globe, Camera, FileText, Video, Image, TrendingUp } from 'lucide-react';

const CriacaoConteudo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Pen,
      title: "Geração Automática de Textos",
      description: "IA cria textos otimizados para SEO e engajamento"
    },
    {
      icon: Image,
      title: "Criação de Imagens",
      description: "Gráficos e imagens personalizados para sua marca"
    },
    {
      icon: Target,
      title: "Templates Responsivos",
      description: "Designs que se adaptam a qualquer dispositivo"
    },
    {
      icon: Globe,
      title: "Adaptação Multi-plataforma",
      description: "Conteúdo otimizado para diferentes redes sociais"
    },
    {
      icon: BarChart3,
      title: "Análise de Performance",
      description: "Otimização contínua baseada em dados"
    },
    {
      icon: Sparkles,
      title: "Biblioteca de Recursos",
      description: "Acesso a recursos visuais exclusivos"
    }
  ];

  const contentTypes = [
    {
      icon: FileText,
      title: "Posts para Redes Sociais",
      description: "Conteúdo envolvente para Instagram, Facebook, LinkedIn"
    },
    {
      icon: Pen,
      title: "Artigos para Blog",
      description: "Textos otimizados para SEO e engajamento"
    },
    {
      icon: Camera,
      title: "Banners e Anúncios",
      description: "Designs impactantes para campanhas publicitárias"
    },
    {
      icon: Video,
      title: "Vídeos Promocionais",
      description: "Conteúdo audiovisual para maior alcance"
    }
  ];

  const benefits = [
    "Economia de 80% do tempo na produção de conteúdo",
    "Consistência de 95% na comunicação da marca",
    "Aumento de 300% no engajamento orgânico",
    "Escalabilidade para grandes volumes de conteúdo",
    "Redução de 70% nos custos com produção",
    "Otimização automática baseada em performance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-designoai-blue-light/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-designoai-blue/5 via-transparent to-purple-400/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-designoai-blue/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent leading-tight">
              Criação de Conteúdo
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transforme sua comunicação com inteligência artificial que gera textos, imagens e gráficos de alta qualidade para suas campanhas de marketing digital.
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

      {/* Content Types */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Tipos de Conteúdo
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {contentTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <type.icon className="w-8 h-8 text-designoai-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-designoai-blue-dark mb-3 group-hover:text-designoai-blue transition-colors">
                        {type.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personalization Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Personalização Inteligente
          </h2>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  Nossa IA aprende com o perfil da sua marca e audiência para criar conteúdo cada vez mais personalizado e eficaz. O sistema analisa o engajamento e ajusta automaticamente o tom, estilo e formato para maximizar os resultados.
                </p>
                
                <div className="bg-gradient-to-r from-designoai-blue-light/50 to-purple-50 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">Processo de Personalização:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                      <span>Análise do perfil da marca e público-alvo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                      <span>Identificação do tom de voz e estilo visual</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                      <span>Criação automática de conteúdo personalizado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                      <span>Otimização contínua baseada em performance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-designoai-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Benefícios Mensuráveis
          </h2>
          
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-designoai-blue-dark mb-6">Resultados Comprovados</h3>
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
                    <h4 className="text-3xl font-bold text-designoai-blue mb-2">95%</h4>
                    <p className="text-gray-600">Consistência na comunicação</p>
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

export default CriacaoConteudo;
