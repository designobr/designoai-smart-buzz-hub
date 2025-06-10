
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Briefcase, Users, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Carreiras = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre as oportunidades de carreira no DesignoAI.';
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
                Carreiras no DesignoAI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Junte-se ao futuro do marketing digital. Trabalhe com inteligência artificial, faça parte de uma equipe inovadora e ajude a transformar negócios ao redor do mundo.
              </p>
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com RH
              </Button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Por que Trabalhar Conosco?
              </h2>
              <p className="text-xl text-gray-600">
                Mais do que um emprego, uma oportunidade de fazer parte da revolução da IA
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <TrendingUp className="w-8 h-8 text-designoai-blue mx-auto mb-4" />
                  <CardTitle>Crescimento Acelerado</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Trabalhe com as tecnologias mais avançadas e desenvolva suas habilidades rapidamente.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="w-8 h-8 text-designoai-blue mx-auto mb-4" />
                  <CardTitle>Equipe Incrível</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Colabore com os melhores profissionais do mercado em um ambiente de inovação.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Briefcase className="w-8 h-8 text-designoai-blue mx-auto mb-4" />
                  <CardTitle>Projetos Desafiadores</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Trabalhe em projetos que realmente fazem a diferença para empresas e pessoas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Heart className="w-8 h-8 text-designoai-blue mx-auto mb-4" />
                  <CardTitle>Benefícios Únicos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Pacote de benefícios competitivo e foco no bem-estar da equipe.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Nossos Benefícios
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-designoai-blue-dark mb-3">💰 Salário Competitivo</h3>
                <p className="text-gray-600">Remuneração acima da média do mercado com revisões regulares</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-designoai-blue-dark mb-3">🏠 Trabalho Remoto</h3>
                <p className="text-gray-600">Flexibilidade total para trabalhar de onde quiser</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-designoai-blue-dark mb-3">📚 Educação Continuada</h3>
                <p className="text-gray-600">Cursos, certificações e conferências por nossa conta</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-designoai-blue-dark mb-3">⏰ Horário Flexível</h3>
                <p className="text-gray-600">Gerencie seu tempo e mantenha equilíbrio vida-trabalho</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-designoai-blue-dark mb-3">🏥 Plano de Saúde</h3>
                <p className="text-gray-600">Cobertura médica e odontológica completa</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-designoai-blue-dark mb-3">🎯 Participação nos Lucros</h3>
                <p className="text-gray-600">Compartilhamos nosso sucesso com toda a equipe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Vagas Abertas
              </h2>
              <p className="text-xl text-gray-600">
                Estamos sempre em busca de talentos excepcionais
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Desenvolvedor de IA - Machine Learning</CardTitle>
                      <CardDescription>Remoto • Tempo Integral • Senior</CardDescription>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Nova</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Procuramos um especialista em ML para desenvolver e otimizar nossos algoritmos de IA para marketing digital.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">Python</span>
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">TensorFlow</span>
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">PyTorch</span>
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">AWS</span>
                  </div>
                  <Button onClick={handleWhatsAppClick}>Candidatar-se</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Designer UX/UI</CardTitle>
                      <CardDescription>Remoto • Tempo Integral • Pleno</CardDescription>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Urgente</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Buscamos um designer criativo para criar interfaces incríveis para nossas ferramentas de IA.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">Figma</span>
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">Adobe Creative</span>
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">Prototyping</span>
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">Design Systems</span>
                  </div>
                  <Button onClick={handleWhatsAppClick}>Candidatar-se</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Especialista em Marketing Digital</CardTitle>
                  <CardDescription>Remoto • Tempo Integral • Senior</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Procuramos um estrategista para liderar campanhas e otimizar resultados usando nossas ferramentas de IA.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">Google Ads</span>
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">Facebook Ads</span>
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">Analytics</span>
                    <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">SEO</span>
                  </div>
                  <Button onClick={handleWhatsAppClick}>Candidatar-se</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-designoai-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Não Encontrou a Vaga Ideal?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Envie seu currículo mesmo assim! Estamos sempre em busca de talentos excepcionais.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-designoai-blue hover:bg-gray-100" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar Currículo
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Carreiras;
