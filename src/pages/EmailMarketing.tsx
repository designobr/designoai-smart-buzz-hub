
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, Target, BarChart3, Clock, Zap } from 'lucide-react';

const EmailMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Mail,
      title: "Personalização Automática",
      description: "Cada email é adaptado para o destinatário específico"
    },
    {
      icon: Users,
      title: "Segmentação Inteligente",
      description: "Listas organizadas por comportamento e preferências"
    },
    {
      icon: Clock,
      title: "Horários Otimizados",
      description: "Machine learning define o melhor momento para envio"
    },
    {
      icon: Target,
      title: "Templates Responsivos",
      description: "Designs que se adaptam a qualquer dispositivo"
    },
    {
      icon: BarChart3,
      title: "Testes A/B Automatizados",
      description: "Otimização contínua de subject lines e conteúdo"
    },
    {
      icon: Zap,
      title: "Automação de Fluxos",
      description: "Campanhas acionadas por eventos e comportamentos"
    }
  ];

  const automationTypes = [
    "Emails de boas-vindas personalizados",
    "Campanhas de carrinho abandonado",
    "Sequências de nutrição de leads",
    "Campanhas de reativação de clientes",
    "Follow-ups pós-compra automatizados",
    "Campanhas de aniversário e datas especiais"
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
              Email Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Revolucione sua comunicação com campanhas de email marketing inteligentes e personalizadas que convertem visitantes em clientes fiéis.
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

      {/* Personalization Section */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Personalização Avançada
          </h2>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  Nossa IA analisa o histórico de interações de cada cliente para criar mensagens altamente personalizadas. O sistema considera fatores como preferências de produto, comportamento de compra, localização geográfica e estágio no funil de vendas.
                </p>
                
                <p className="leading-relaxed mb-8">
                  Cada email é dinamicamente adaptado para maximizar a relevância e aumentar as taxas de conversão, garantindo que sua mensagem chegue no momento certo com o conteúdo certo.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-gradient-to-br from-designoai-blue-light/50 to-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">Fatores de Personalização:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Histórico de compras</li>
                      <li>• Comportamento no site</li>
                      <li>• Preferências declaradas</li>
                      <li>• Localização geográfica</li>
                      <li>• Estágio no funil de vendas</li>
                      <li>• Dispositivo utilizado</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-designoai-blue-light/50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">Otimização Contínua:</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Taxa de abertura em tempo real</li>
                      <li>• Análise de cliques e conversões</li>
                      <li>• Teste de horários de envio</li>
                      <li>• Otimização de subject lines</li>
                      <li>• Frequência ideal de contato</li>
                      <li>• Conteúdo mais engajador</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Automation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Automação Inteligente
          </h2>
          
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Configuramos fluxos automatizados que respondem ao comportamento do usuário em tempo real:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {automationTypes.map((type, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-2 mr-4">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{type}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-designoai-blue/10 to-purple-100 rounded-2xl p-8 mt-8 text-center">
                <h3 className="text-2xl font-bold text-designoai-blue-dark mb-4">Métricas e Otimização</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nossa plataforma fornece insights detalhados sobre o performance das suas campanhas, incluindo análises preditivas que ajudam a otimizar futuras estratégias. Monitoramos métricas como taxa de abertura, cliques, conversões e ROI em tempo real.
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

export default EmailMarketing;
