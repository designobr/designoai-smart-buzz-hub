
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Mail, Target, Users, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EmailMarketing = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de saber mais sobre o Email Marketing com IA do DesignoAI.';
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
                Email Marketing Inteligente
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Campanhas de email personalizadas e automatizadas com IA para maximizar conversões e nutrir relacionamentos duradouros com seus clientes.
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
                Recursos Avançados
              </h2>
              <p className="text-xl text-gray-600">
                Nossa IA otimiza cada aspecto do seu email marketing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Mail className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Personalização Dinâmica</CardTitle>
                  <CardDescription>
                    Conteúdo único para cada cliente baseado em comportamento e preferências
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Linhas de assunto personalizadas</li>
                    <li>• Recomendações de produtos por IA</li>
                    <li>• Conteúdo adaptado ao perfil do usuário</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Segmentação Inteligente</CardTitle>
                  <CardDescription>
                    IA identifica grupos de clientes e cria segmentos estratégicos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Segmentação comportamental automática</li>
                    <li>• Análise preditiva de engajamento</li>
                    <li>• Grupos dinâmicos em tempo real</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Automação Avançada</CardTitle>
                  <CardDescription>
                    Jornadas complexas que se adaptam ao comportamento do cliente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Fluxos de nutrição automáticos</li>
                    <li>• Triggers comportamentais inteligentes</li>
                    <li>• Recuperação de carrinho abandonado</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Otimização Contínua</CardTitle>
                  <CardDescription>
                    A/B testing automático e otimização de campanhas em tempo real
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Testes A/B automáticos</li>
                    <li>• Otimização de horário de envio</li>
                    <li>• Ajuste automático de frequência</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Análise Preditiva</CardTitle>
                  <CardDescription>
                    Prevê comportamentos e otimiza estratégias futuras
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Previsão de churn de clientes</li>
                    <li>• Identificação de oportunidades de upsell</li>
                    <li>• Score de engajamento preditivo</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="w-8 h-8 text-designoai-blue mb-4" />
                  <CardTitle>Integração Omnichannel</CardTitle>
                  <CardDescription>
                    Conecta email com outros canais para experiência unificada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Sincronização com redes sociais</li>
                    <li>• Integração com WhatsApp Business</li>
                    <li>• Dados unificados do cliente</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Resultados Comprovados
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">+45%</div>
                <p className="text-gray-600">Taxa de abertura média</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">+60%</div>
                <p className="text-gray-600">Taxa de clique</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-designoai-blue mb-2">+35%</div>
                <p className="text-gray-600">Conversões</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-designoai-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforme seu Email Marketing Hoje
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Deixe nossa IA criar campanhas personalizadas que realmente convertem.
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

export default EmailMarketing;
