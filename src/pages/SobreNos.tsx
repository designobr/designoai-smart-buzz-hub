
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Users, Target, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SobreNos = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre o DesignoAI e como vocês podem ajudar minha empresa.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511947968158?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-designoai-blue-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-designoai-blue-dark mb-6">
                Sobre o DesignoAI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Somos pioneiros em transformar negócios através da inteligência artificial aplicada ao marketing digital. Nossa missão é democratizar o acesso a soluções de marketing de alta qualidade.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                  Nossa Missão
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Democratizar o acesso a estratégias de marketing digital de alta performance através da inteligência artificial, permitindo que empresas de todos os tamanhos compitam em igualdade no mercado digital.
                </p>
                <p className="text-lg text-gray-600">
                  Acreditamos que toda empresa merece ter acesso às melhores ferramentas e estratégias de marketing, independentemente do seu orçamento ou tamanho.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Target className="w-8 h-8 text-designoai-blue mx-auto mb-2" />
                    <CardTitle className="text-lg">500+</CardTitle>
                    <CardDescription>Empresas atendidas</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Award className="w-8 h-8 text-designoai-blue mx-auto mb-2" />
                    <CardTitle className="text-lg">95%</CardTitle>
                    <CardDescription>Taxa de satisfação</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Users className="w-8 h-8 text-designoai-blue mx-auto mb-2" />
                    <CardTitle className="text-lg">2019</CardTitle>
                    <CardDescription>Ano de fundação</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Lightbulb className="w-8 h-8 text-designoai-blue mx-auto mb-2" />
                    <CardTitle className="text-lg">24/7</CardTitle>
                    <CardDescription>Suporte IA</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Nossos Valores
              </h2>
              <p className="text-xl text-gray-600">
                Os princípios que guiam cada decisão e ação do DesignoAI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Lightbulb className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Inovação Contínua</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Estamos sempre na vanguarda da tecnologia, implementando as mais recentes inovações em IA para beneficiar nossos clientes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Foco no Cliente</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Cada solução é pensada para resolver problemas reais dos nossos clientes, gerando resultados mensuráveis e duradouros.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Excelência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Buscamos a perfeição em cada detalhe, desde o atendimento até a entrega final dos projetos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Award className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Transparência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Mantemos nossos clientes informados sobre cada etapa do processo, com relatórios claros e comunicação aberta.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Acessibilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Tornamos soluções premium acessíveis para empresas de todos os portes através da automação inteligente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Lightbulb className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Sustentabilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Criamos soluções que geram crescimento sustentável e duradouro para nossos parceiros.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Nossa Equipe
              </h2>
              <p className="text-xl text-gray-600">
                Especialistas em IA, marketing digital e design unidos por uma visão comum
              </p>
            </div>

            <div className="bg-designoai-blue-light rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-designoai-blue-dark mb-4">
                Equipe Multidisciplinar
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Nossa equipe é formada por especialistas em inteligência artificial, designers criativos, 
                estrategistas de marketing e desenvolvedores, todos trabalhando em sinergia para entregar 
                resultados excepcionais.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-designoai-blue mb-2">15+</div>
                  <p className="text-gray-600">Especialistas em IA</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-designoai-blue mb-2">10+</div>
                  <p className="text-gray-600">Designers Criativos</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-designoai-blue mb-2">8+</div>
                  <p className="text-gray-600">Estrategistas de Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-designoai-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quer Fazer Parte da Nossa História?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos transformar seu negócio com inteligência artificial.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-designoai-blue hover:bg-gray-100" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar Conosco
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreNos;
