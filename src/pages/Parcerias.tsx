
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Handshake, Target, TrendingUp, Users, Award, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Parcerias = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre as oportunidades de parceria com o DesignoAI.';
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
                Parcerias DesignoAI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Junte-se ao nosso ecossistema de parceiros e cresça conosco. Oferecemos oportunidades únicas para agências, consultores e revendedores expandirem seus negócios com IA.
              </p>
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero Ser Parceiro
              </Button>
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Tipos de Parceria
              </h2>
              <p className="text-xl text-gray-600">
                Escolha o modelo que melhor se adapta ao seu negócio
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 border-designoai-blue-light hover:border-designoai-blue transition-colors">
                <CardHeader>
                  <Handshake className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Parceiro Revendedor</CardTitle>
                  <CardDescription>
                    Revenda nossas soluções com margem exclusiva
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• Comissões de até 40%</li>
                    <li>• Suporte técnico completo</li>
                    <li>• Material de vendas exclusivo</li>
                    <li>• Treinamento especializado</li>
                  </ul>
                  <Button className="w-full" onClick={handleWhatsAppClick}>Saber Mais</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-designoai-blue-light hover:border-designoai-blue transition-colors">
                <CardHeader>
                  <Users className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Agência Parceira</CardTitle>
                  <CardDescription>
                    Integre IA aos seus serviços existentes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• White label disponível</li>
                    <li>• API e integrações técnicas</li>
                    <li>• Suporte dedicado</li>
                    <li>• Margem diferenciada</li>
                  </ul>
                  <Button className="w-full" onClick={handleWhatsAppClick}>Saber Mais</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-designoai-blue-light hover:border-designoai-blue transition-colors">
                <CardHeader>
                  <Target className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Consultor Certificado</CardTitle>
                  <CardDescription>
                    Torne-se especialista em IA para marketing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600 mb-6">
                    <li>• Certificação oficial</li>
                    <li>• Leads qualificados</li>
                    <li>• Comissão recorrente</li>
                    <li>• Mentoria especializada</li>
                  </ul>
                  <Button className="w-full" onClick={handleWhatsAppClick}>Saber Mais</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Benefícios de Ser Nosso Parceiro
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-designoai-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-designoai-blue-dark mb-3">
                  Crescimento Garantido
                </h3>
                <p className="text-gray-600">
                  Mercado de IA em expansão de 40% ao ano. Entre agora e lidere seu segmento.
                </p>
              </div>

              <div className="text-center">
                <Award className="w-12 h-12 text-designoai-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-designoai-blue-dark mb-3">
                  Tecnologia Líder
                </h3>
                <p className="text-gray-600">
                  Acesso às mais avançadas tecnologias de IA aplicadas ao marketing digital.
                </p>
              </div>

              <div className="text-center">
                <Rocket className="w-12 h-12 text-designoai-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-designoai-blue-dark mb-3">
                  Suporte Completo
                </h3>
                <p className="text-gray-600">
                  Equipe dedicada, treinamentos constantes e material de apoio profissional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Numbers */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Nossos Parceiros em Números
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">150+</div>
                <p className="text-gray-600">Parceiros Ativos</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">R$ 2M+</div>
                <p className="text-gray-600">Faturamento dos Parceiros</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">35%</div>
                <p className="text-gray-600">Margem Média</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">98%</div>
                <p className="text-gray-600">Satisfação</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Como Funciona
              </h2>
              <p className="text-xl text-gray-600">
                Processo simples para se tornar nosso parceiro
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-designoai-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-designoai-blue-dark mb-2">Cadastro</h3>
                <p className="text-sm text-gray-600">
                  Preencha nosso formulário de interesse e conte sobre seu negócio
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-designoai-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-designoai-blue-dark mb-2">Avaliação</h3>
                <p className="text-sm text-gray-600">
                  Nossa equipe analisa seu perfil e agenda uma conversa
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-designoai-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-designoai-blue-dark mb-2">Treinamento</h3>
                <p className="text-sm text-gray-600">
                  Capacitação completa em nossas soluções e metodologias
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-designoai-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold text-designoai-blue-dark mb-2">Lançamento</h3>
                <p className="text-sm text-gray-600">
                  Início das vendas com suporte total da nossa equipe
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Depoimentos dos Parceiros
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-designoai-blue rounded-full flex items-center justify-center text-white font-bold">
                      R
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Roberto Costa</h4>
                      <p className="text-sm text-gray-600">Agência Digital Premium</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "Em 6 meses como parceiro, aumentei meu faturamento em 180%. A IA do DesignoAI revolucionou minha agência e me diferenciou da concorrência."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-designoai-blue rounded-full flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold">Ana Ferreira</h4>
                      <p className="text-sm text-gray-600">Consultora Independente</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">
                    "Como consultora certificada, tenho acesso a leads qualificados e tecnologia de ponta. Minha credibilidade no mercado cresceu exponencialmente."
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
              Pronto para Crescer Conosco?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se ao futuro do marketing digital. Torne-se nosso parceiro e transforme seu negócio com IA.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-designoai-blue hover:bg-gray-100" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Iniciar Parceria
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Parcerias;
