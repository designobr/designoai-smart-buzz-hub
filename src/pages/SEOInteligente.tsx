
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Target, TrendingUp, BarChart3, Zap, Globe, Link, Shield, Clock, Users, Award, CheckCircle } from 'lucide-react';

const SEOInteligente = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Search,
      title: "Pesquisa Inteligente de Palavras-chave",
      description: "IA identifica keywords com baixa concorrência e alto potencial"
    },
    {
      icon: Target,
      title: "Otimização Automática",
      description: "Meta tags, URLs e estrutura otimizadas automaticamente"
    },
    {
      icon: TrendingUp,
      title: "Análise da Concorrência",
      description: "Identificação de oportunidades baseada nos competidores"
    },
    {
      icon: Zap,
      title: "Velocidade Otimizada",
      description: "Melhoria automática da performance do site"
    },
    {
      icon: Link,
      title: "Link Building Estratégico",
      description: "Construção inteligente de autoridade do domínio"
    },
    {
      icon: BarChart3,
      title: "Relatórios em Tempo Real",
      description: "Monitoramento contínuo de posicionamento e tráfego"
    }
  ];

  const technicalFeatures = [
    {
      icon: Shield,
      title: "Implementação de HTTPS",
      description: "Segurança e confiabilidade para melhor ranking"
    },
    {
      icon: Globe,
      title: "Dados Estruturados",
      description: "Schema markup para rich snippets"
    },
    {
      icon: Clock,
      title: "Core Web Vitals",
      description: "Otimização de métricas de experiência do usuário"
    },
    {
      icon: Users,
      title: "SEO Local",
      description: "Posicionamento para buscas regionais"
    }
  ];

  const results = [
    "Aumento médio de 200% no tráfego orgânico",
    "Melhoria do posicionamento para keywords estratégicas",
    "Redução de 50% na taxa de rejeição",
    "Aumento de 180% no tempo de permanência",
    "Crescimento de 300% na taxa de conversão orgânica",
    "ROI 5x superior em comparação com métodos tradicionais"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-designoai-blue-light/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-designoai-blue/5 via-transparent to-purple-400/10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-designoai-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent leading-tight">
              SEO Inteligente
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Domine os resultados de busca com inteligência artificial que otimiza automaticamente seu site, garantindo melhor posicionamento e maior visibilidade online.
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
                  Nosso sistema de SEO Inteligente analisa continuamente seu site e o mercado para implementar otimizações automatizadas que posicionam seu negócio no topo dos resultados de busca.
                </p>
                
                <p className="leading-relaxed mb-8">
                  Utilizamos algoritmos avançados de machine learning para identificar oportunidades, otimizar conteúdo e monitorar performance, garantindo que sua estratégia de SEO esteja sempre um passo à frente da concorrência.
                </p>
                
                <div className="bg-gradient-to-r from-designoai-blue-light/50 to-purple-50 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">Processo Automatizado:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                      <span>Análise completa do site e identificação de oportunidades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                      <span>Pesquisa inteligente de palavras-chave estratégicas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                      <span>Implementação automática de otimizações técnicas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-designoai-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                      <span>Monitoramento contínuo e ajustes em tempo real</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical SEO */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            SEO Técnico Avançado
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {technicalFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-designoai-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-designoai-blue-dark mb-3 group-hover:text-designoai-blue transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-designoai-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Resultados Mensuráveis
          </h2>
          
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-designoai-blue-dark mb-6">Impacto Comprovado</h3>
                  <ul className="space-y-4">
                    {results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-1 mr-3 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-designoai-blue/10 to-purple-100 rounded-2xl p-6 text-center">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <h4 className="text-2xl font-bold text-designoai-blue mb-1">200%</h4>
                      <p className="text-gray-600 text-sm">Aumento no tráfego orgânico</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-designoai-blue/10 rounded-2xl p-6 text-center">
                    <div className="bg-white rounded-xl p-4 shadow-lg">
                      <h4 className="text-2xl font-bold text-designoai-blue mb-1">Top 3</h4>
                      <p className="text-gray-600 text-sm">Posicionamento médio</p>
                    </div>
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

export default SEOInteligente;
