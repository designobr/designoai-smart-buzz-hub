
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, BarChart3, TrendingUp, Target, Database, Zap } from 'lucide-react';

const AnalyseDados = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const capabilities = [
    {
      icon: Brain,
      title: "Análise Comportamental",
      description: "Compreensão profunda do comportamento dos clientes em tempo real"
    },
    {
      icon: TrendingUp,
      title: "Identificação de Padrões",
      description: "Descoberta automática de tendências e oportunidades de mercado"
    },
    {
      icon: Target,
      title: "Segmentação Automática",
      description: "Criação inteligente de grupos de audiência baseada em dados"
    },
    {
      icon: BarChart3,
      title: "Previsão de Demanda",
      description: "Antecipação de sazonalidade e comportamentos futuros"
    },
    {
      icon: Database,
      title: "Análise de Sentimento",
      description: "Monitoramento da percepção da marca em redes sociais"
    },
    {
      icon: Zap,
      title: "Otimização de ROI",
      description: "Maximização do retorno por canal de marketing"
    }
  ];

  const predictiveFeatures = [
    "Previsão de churn de clientes",
    "Identificação de clientes com maior potencial",
    "Previsão de receita e crescimento",
    "Análise de lifetime value",
    "Otimização de preços baseada em demanda",
    "Previsão de performance de campanhas"
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
              Análise de Dados
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transforme dados em insights acionáveis com inteligência artificial que revela oportunidades ocultas em seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Capacidades Analíticas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <CardTitle className="text-xl text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">
                    {capability.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboards Section */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Dashboards Inteligentes
          </h2>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  Nossos dashboards apresentam informações complexas de forma visual e intuitiva, permitindo que você acompanhe KPIs importantes e identifique oportunidades de melhoria rapidamente.
                </p>
                
                <p className="leading-relaxed mb-8">
                  A IA automaticamente destaca anomalias, tendências emergentes e recomenda ações específicas baseadas nos dados analisados, transformando insights em estratégias concretas.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-designoai-blue-light/50 to-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">Visualizações Avançadas:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Gráficos interativos em tempo real</li>
                      <li>• Mapas de calor comportamentais</li>
                      <li>• Funis de conversão detalhados</li>
                      <li>• Análise de jornada do cliente</li>
                      <li>• Comparativos temporais</li>
                      <li>• Alertas automáticos de anomalias</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-designoai-blue-light/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">Insights Automáticos:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Detecção de padrões ocultos</li>
                      <li>• Recomendações estratégicas</li>
                      <li>• Identificação de oportunidades</li>
                      <li>• Alertas de performance</li>
                      <li>• Sugestões de otimização</li>
                      <li>• Análise preditiva automática</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Predictive Analysis */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Análise Preditiva
          </h2>
          
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Utilizamos modelos preditivos avançados para antecipar comportamentos e tendências:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {predictiveFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-2 mr-4">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-designoai-blue/10 to-purple-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-designoai-blue-dark mb-4 text-center">Integração de Dados</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nossa plataforma se integra com múltiplas fontes de dados, incluindo sistemas de CRM, plataformas de e-commerce, redes sociais, ferramentas de email marketing e sistemas internos da empresa.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A IA processa e correlaciona informações de diferentes fontes para criar uma visão 360° do seu negócio, identificando conexões e insights que não seriam óbvios através de análises isoladas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-designoai-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                Relatórios Automatizados
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Geramos relatórios personalizados automaticamente, com insights relevantes para diferentes níveis da organização. Os relatórios incluem análises de performance, recomendações estratégicas e projeções futuras.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-designoai-blue/10 to-purple-100 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-designoai-blue mb-2">360°</h3>
                  <p className="text-gray-600">Visão completa do negócio</p>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-designoai-blue/10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-designoai-blue mb-2">24/7</h3>
                  <p className="text-gray-600">Monitoramento contínuo</p>
                </div>
                <div className="bg-gradient-to-br from-designoai-blue/10 to-purple-100 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-designoai-blue mb-2">AI</h3>
                  <p className="text-gray-600">Insights automatizados</p>
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

export default AnalyseDados;
