
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Share2, TrendingUp, Users, Calendar, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SocialMedia = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre a gestão de redes sociais com IA do DesignoAI.';
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
              <Link to="/servicos" className="inline-flex items-center text-designoai-blue hover:text-designoai-blue-dark mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para Serviços
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-designoai-blue-dark mb-6">
                Gestão de Redes Sociais com IA
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transforme sua presença digital com conteúdo inteligente, engagement automatizado e crescimento orgânico acelerado pela inteligência artificial.
              </p>
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Recursos Principais
              </h2>
              <p className="text-xl text-gray-600">
                Nossa IA gerencia suas redes sociais de forma inteligente e estratégica
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Share2 className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Postagens Automatizadas</CardTitle>
                  <CardDescription>
                    Cronograma inteligente de postagens otimizado para máximo engajamento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Horários ideais identificados por IA</li>
                    <li>• Frequência otimizada por plataforma</li>
                    <li>• Distribuição automática de conteúdo</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Análise de Tendências</CardTitle>
                  <CardDescription>
                    IA identifica tendências emergentes para manter seu conteúdo relevante
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Monitoramento de hashtags virais</li>
                    <li>• Análise de competidores</li>
                    <li>• Sugestões de conteúdo trending</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Engagement Inteligente</CardTitle>
                  <CardDescription>
                    Resposta automatizada e interação estratégica com sua audiência
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Respostas automáticas personalizadas</li>
                    <li>• Moderação inteligente de comentários</li>
                    <li>• Identificação de leads qualificados</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Calendar className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Planejamento Estratégico</CardTitle>
                  <CardDescription>
                    Calendário editorial inteligente alinhado aos seus objetivos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Calendário de conteúdo automatizado</li>
                    <li>• Campanhas sazonais inteligentes</li>
                    <li>• Integração com datas comemorativas</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Métricas Avançadas</CardTitle>
                  <CardDescription>
                    Relatórios detalhados com insights acionáveis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• ROI por tipo de conteúdo</li>
                    <li>• Análise de audiência por IA</li>
                    <li>• Recomendações de otimização</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Atendimento 24/7</CardTitle>
                  <CardDescription>
                    Chatbot inteligente para atendimento contínuo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Respostas instantâneas</li>
                    <li>• Qualificação automática de leads</li>
                    <li>• Integração com WhatsApp Business</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-designoai-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Revolucionar suas Redes Sociais?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Deixe nossa IA cuidar das suas redes sociais enquanto você foca no que mais importa: seu negócio.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-designoai-blue hover:bg-gray-100" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SocialMedia;
