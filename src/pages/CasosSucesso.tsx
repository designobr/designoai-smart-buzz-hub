
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CasosSucesso = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Vi os casos de sucesso e gostaria de saber como o DesignoAI pode ajudar minha empresa.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511947968158?text=${encodedMessage}`, '_blank');
  };

  const successCases = [
    {
      id: 1,
      company: "E-commerce de Moda",
      sector: "Varejo Online",
      challenge: "Baixo engajamento nas redes sociais e conversões limitadas",
      solution: "Implementação de IA para criação de conteúdo personalizado e automação de campanhas",
      results: [
        { metric: "Engajamento", value: "+320%", icon: Users },
        { metric: "Conversões", value: "+85%", icon: Target },
        { metric: "ROI", value: "+150%", icon: DollarSign },
        { metric: "Alcance", value: "+240%", icon: TrendingUp }
      ],
      timeframe: "3 meses"
    },
    {
      id: 2,
      company: "Clínica Médica",
      sector: "Saúde",
      challenge: "Dificuldade em atrair novos pacientes e baixa presença digital",
      solution: "Estratégia de SEO inteligente e gestão automatizada de redes sociais",
      results: [
        { metric: "Novos Pacientes", value: "+200%", icon: Users },
        { metric: "Visitas no Site", value: "+180%", icon: TrendingUp },
        { metric: "Posição no Google", value: "Top 3", icon: Target },
        { metric: "Custo por Lead", value: "-60%", icon: DollarSign }
      ],
      timeframe: "4 meses"
    },
    {
      id: 3,
      company: "Restaurante Gourmet",
      sector: "Alimentação",
      challenge: "Queda nas vendas durante pandemia e necessidade de delivery",
      solution: "Campanhas de email marketing automatizadas e presença digital robusta",
      results: [
        { metric: "Vendas Online", value: "+400%", icon: DollarSign },
        { metric: "Base de Clientes", value: "+150%", icon: Users },
        { metric: "Taxa de Retenção", value: "+90%", icon: Target },
        { metric: "Satisfação", value: "98%", icon: TrendingUp }
      ],
      timeframe: "2 meses"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-designoai-blue-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-designoai-blue-dark mb-6">
                Casos de Sucesso
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Descubra como empresas de diferentes setores transformaram seus resultados com nossas soluções de IA. Histórias reais, resultados comprovados.
              </p>
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero Resultados Assim
              </Button>
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {successCases.map((case, index) => (
                <div key={case.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="mb-4">
                      <span className="bg-designoai-blue-light text-designoai-blue px-3 py-1 rounded-full text-sm font-medium">
                        {case.sector}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-designoai-blue-dark mb-4">
                      {case.company}
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">🎯 Desafio</h3>
                        <p className="text-gray-600">{case.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">💡 Solução</h3>
                        <p className="text-gray-600">{case.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">⏱️ Tempo para Resultados</h3>
                        <p className="text-designoai-blue font-semibold">{case.timeframe}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <Card className="bg-gradient-to-br from-designoai-blue to-designoai-blue-dark text-white">
                      <CardHeader>
                        <CardTitle className="text-white text-xl">Resultados Alcançados</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-6">
                          {case.results.map((result, resultIndex) => {
                            const IconComponent = result.icon;
                            return (
                              <div key={resultIndex} className="text-center">
                                <IconComponent className="w-8 h-8 mx-auto mb-2 text-white" />
                                <div className="text-2xl font-bold text-white mb-1">
                                  {result.value}
                                </div>
                                <div className="text-sm text-white/80">
                                  {result.metric}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overall Stats */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Nosso Impacto em Números
              </h2>
              <p className="text-xl text-gray-600">
                Resultados consolidados de todos os nossos clientes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">500+</div>
                <p className="text-gray-600">Empresas Transformadas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">+200%</div>
                <p className="text-gray-600">Aumento Médio em Conversões</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">98%</div>
                <p className="text-gray-600">Taxa de Satisfação</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">3x</div>
                <p className="text-gray-600">ROI Médio</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                O que Nossos Clientes Dizem
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-designoai-blue rounded-full flex items-center justify-center text-white font-bold">
                      M
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Maria Silva</h4>
                      <p className="text-sm text-gray-600">CEO, E-commerce de Moda</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "Em 3 meses, nosso engajamento triplicou e as vendas aumentaram 85%. A IA do DesignoAI revolucionou nossa estratégia digital."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-designoai-blue rounded-full flex items-center justify-center text-white font-bold">
                      J
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Dr. João Santos</h4>
                      <p className="text-sm text-gray-600">Diretor, Clínica Médica</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "Dobrei o número de pacientes em 4 meses. O SEO inteligente nos colocou no topo do Google. Investimento que vale cada centavo."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-designoai-blue rounded-full flex items-center justify-center text-white font-bold">
                      C
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Carlos Oliveira</h4>
                      <p className="text-sm text-gray-600">Proprietário, Restaurante Gourmet</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "Durante a pandemia, as vendas online cresceram 400%. O DesignoAI salvou meu negócio e ainda expandiu nossa base de clientes."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-designoai-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Ser Nosso Próximo Caso de Sucesso?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Transforme sua empresa com nossas soluções de IA. Resultados garantidos ou seu dinheiro de volta.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-designoai-blue hover:bg-gray-100" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Começar Minha Transformação
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasosSucesso;
