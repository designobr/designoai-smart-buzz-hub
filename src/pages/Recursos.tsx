import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Recursos = () => {
  const features = [{
    title: "Geração de Conteúdo com IA",
    description: "Crie posts, artigos, legendas e materiais visuais automaticamente, adaptados ao seu nicho e público-alvo.",
    icon: "✨"
  }, {
    title: "Análise de Concorrência",
    description: "Monitore e analise as estratégias dos seus concorrentes para se manter sempre à frente no mercado.",
    icon: "🔍"
  }, {
    title: "Agendamento Automático",
    description: "Programe suas publicações nos melhores horários para maximizar o engajamento e alcance.",
    icon: "⏰"
  }, {
    title: "Dashboard Analytics",
    description: "Acompanhe métricas importantes em tempo real com relatórios detalhados e insights acionáveis.",
    icon: "📊"
  }, {
    title: "Otimização de SEO",
    description: "Melhore automaticamente o SEO do seu conteúdo para aumentar a visibilidade online.",
    icon: "🎯"
  }, {
    title: "Integração Multi-plataforma",
    description: "Conecte todas as suas redes sociais e canais de marketing em uma única plataforma.",
    icon: "🔗"
  }, {
    title: "Personalização Avançada",
    description: "Adapte o tom, estilo e formato do conteúdo para diferentes segmentos do seu público.",
    icon: "🎨"
  }, {
    title: "Suporte 24/7",
    description: "Nossa equipe está sempre disponível para ajudar você a maximizar seus resultados.",
    icon: "💬"
  }];
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-designoai-blue-light to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-designoai-blue-dark mb-6">
              Recursos Poderosos para seu Marketing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Descubra todas as funcionalidades que fazem do DesignoAI a ferramenta mais completa para transformar seu marketing digital
            </p>
            <Link to="/#contact">
              <Button size="lg" className="bg-designoai-blue hover:bg-designoai-blue/90">
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-designoai-blue text-gray-700 md:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para experimentar todos esses recursos?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Comece hoje mesmo e veja como nossa IA pode transformar seu marketing digital
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/#contact">
                <Button size="lg" className="bg-white text-designoai-blue hover:bg-gray-100">
                  Começar Agora
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('https://wa.me/5511947968158?text=Olá! Gostaria de saber mais sobre os recursos do DesignoAI.', '_blank')}>
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Recursos;