
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Users, ShoppingBag, Stethoscope, Utensils, Briefcase, Dumbbell, Target } from 'lucide-react';

const CasosSucesso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      icon: ShoppingBag,
      title: "E-commerce de Moda",
      subtitle: "Aumento de 320% no Engajamento",
      description: "Uma loja online de moda feminina transformou seus resultados com nossa solução de criação de conteúdo personalizado.",
      results: [
        "Engajamento aumentou 320% em 3 meses",
        "Conversões cresceram 85%",
        "ROI da campanha aumentou 150%",
        "Alcance orgânico expandiu 240%"
      ]
    },
    {
      icon: Stethoscope,
      title: "Clínica Médica",
      subtitle: "200% Mais Pacientes",
      description: "Clínica especializada superou desafios de presença digital com SEO inteligente e gestão automatizada.",
      results: [
        "Aumento de 200% em novos pacientes",
        "Visitas no site cresceram 180%",
        "Top 3 no Google para palavras-chave principais",
        "Redução de 60% no custo por lead"
      ]
    },
    {
      icon: Utensils,
      title: "Restaurante Gourmet",
      subtitle: "400% de Crescimento Online",
      description: "Durante a pandemia, um restaurante gourmet desenvolveu seu canal de delivery com campanhas automatizadas.",
      results: [
        "Vendas online aumentaram 400%",
        "Base de clientes cresceu 150%",
        "Taxa de retenção subiu 90%",
        "Satisfação do cliente: 98%"
      ]
    }
  ];

  const additionalCases = [
    {
      icon: Briefcase,
      title: "Consultoria Empresarial",
      subtitle: "Autoridade Digital",
      metrics: ["250% mais leads", "120% conversão", "80% ticket médio"]
    },
    {
      icon: Dumbbell,
      title: "Academia de Ginástica",
      subtitle: "Retenção Record",
      metrics: ["180% retenção", "160% novos membros", "140% receita"]
    }
  ];

  const impactStats = [
    { number: "500+", label: "Empresas Transformadas" },
    { number: "200%", label: "Aumento Médio em Conversões" },
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "3x", label: "ROI Médio do Investimento" }
  ];

  const methodology = [
    "Análise profunda do negócio e mercado",
    "Implementação de IA personalizada para cada setor",
    "Monitoramento e otimização contínua",
    "Treinamento da equipe do cliente",
    "Suporte especializado durante toda a jornada"
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
              Casos de Sucesso
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Descubra como empresas de diferentes setores transformaram seus resultados com as soluções da DesignoAI.
            </p>
          </div>
        </div>
      </section>

      {/* Main Cases */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-16">
            {cases.map((case_item, index) => (
              <Card key={index} className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-3xl transition-shadow duration-300">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl mr-4">
                          <case_item.icon className="w-8 h-8 text-designoai-blue" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-designoai-blue-dark">{case_item.title}</h3>
                          <p className="text-lg text-designoai-blue font-semibold">{case_item.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {case_item.description}
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-designoai-blue-light/30 to-purple-50 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-designoai-blue-dark mb-4">Resultados Alcançados:</h4>
                      <ul className="space-y-3">
                        {case_item.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start">
                            <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-1 mr-3 mt-1.5">
                              <TrendingUp className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Cases */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Mais Transformações
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {additionalCases.map((case_item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <case_item.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <CardTitle className="text-xl text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">
                    {case_item.title}
                  </CardTitle>
                  <p className="text-designoai-blue font-semibold">{case_item.subtitle}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    {case_item.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-gradient-to-r from-designoai-blue-light/30 to-purple-50 rounded-lg p-2">
                        <span className="text-gray-700 font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Nosso Impacto Consolidado
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-lg border-0 bg-gradient-to-br from-white to-designoai-blue-light/20 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-designoai-blue to-purple-600 bg-clip-text text-transparent mb-4">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-designoai-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Metodologia de Sucesso
          </h2>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
                Todos esses resultados são alcançados através da nossa metodologia proprietária que combina:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {methodology.slice(0, 3).map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-designoai-blue-light/30 to-purple-50 rounded-xl">
                      <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4">
                  {methodology.slice(3).map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-purple-50 to-designoai-blue-light/30 rounded-xl">
                      <div className="bg-gradient-to-r from-purple-500 to-designoai-blue rounded-full p-2 mr-4 flex-shrink-0">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-designoai-blue/10 to-purple-100 rounded-2xl p-8 mt-8 text-center">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Cada caso de sucesso representa não apenas números impressionantes, mas transformações reais que impactam o crescimento sustentável dos nossos clientes. Histórias de empresas que não apenas sobreviveram aos desafios do mercado digital, mas prosperaram e se tornaram líderes em seus segmentos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasosSucesso;
