
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EmailMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-designoai-blue-dark mb-8 text-center">
              Email Marketing
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Nossa plataforma de Email Marketing com inteligência artificial revoluciona a forma como você se comunica com seus clientes, criando campanhas personalizadas e altamente eficazes.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Recursos Principais</h2>
              
              <p className="mb-4">
                Nossa solução de Email Marketing utiliza IA para otimizar cada aspecto das suas campanhas:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Personalização automática de conteúdo para cada destinatário</li>
                <li>Segmentação inteligente de listas baseada em comportamento</li>
                <li>Otimização de horários de envio com machine learning</li>
                <li>Templates responsivos e visualmente atraentes</li>
                <li>Testes A/B automatizados para linhas de assunto e conteúdo</li>
                <li>Análise preditiva de taxa de abertura e cliques</li>
                <li>Automação de fluxos de nutrição de leads</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Personalização Avançada</h2>
              
              <p className="mb-4">
                Nossa IA analisa o histórico de interações de cada cliente para criar mensagens altamente personalizadas. O sistema considera fatores como preferências de produto, comportamento de compra, localização geográfica e estágio no funil de vendas.
              </p>
              
              <p className="mb-4">
                Cada email é dinamicamente adaptado para maximizar a relevância e aumentar as taxas de conversão, garantindo que sua mensagem chegue no momento certo com o conteúdo certo.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Automação Inteligente</h2>
              
              <p className="mb-4">
                Configuramos fluxos automatizados que respondem ao comportamento do usuário em tempo real:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Emails de boas-vindas personalizados</li>
                <li>Campanhas de carrinho abandonado</li>
                <li>Sequências de nutrição de leads</li>
                <li>Campanhas de reativação de clientes inativos</li>
                <li>Follow-ups pós-compra automatizados</li>
                <li>Campanhas de aniversário e datas especiais</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Métricas e Otimização</h2>
              
              <p className="mb-4">
                Nossa plataforma fornece insights detalhados sobre o performance das suas campanhas, incluindo análises preditivas que ajudam a otimizar futuras estratégias. Monitoramos métricas como taxa de abertura, cliques, conversões e ROI em tempo real.
              </p>
              
              <p className="text-lg">
                Com nossa solução de Email Marketing, você mantém um relacionamento próximo e personalizado com seus clientes, aumentando a fidelização e impulsionando as vendas através de comunicação inteligente e automatizada.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EmailMarketing;
