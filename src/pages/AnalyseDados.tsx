
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AnalyseDados = () => {
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
              Análise de Dados
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Nossa plataforma de Análise de Dados com inteligência artificial transforma informações brutas em insights acionáveis, permitindo que você tome decisões estratégicas baseadas em dados concretos.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Capacidades Analíticas</h2>
              
              <p className="mb-4">
                Nossa solução de análise utiliza algoritmos avançados de machine learning para processar e interpretar grandes volumes de dados:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Análise comportamental de clientes em tempo real</li>
                <li>Identificação de padrões e tendências de mercado</li>
                <li>Segmentação automática de audiência</li>
                <li>Previsão de demanda e sazonalidade</li>
                <li>Análise de sentimento em redes sociais</li>
                <li>Otimização de funil de vendas</li>
                <li>ROI detalhado por canal de marketing</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Dashboards Inteligentes</h2>
              
              <p className="mb-4">
                Nossos dashboards apresentam informações complexas de forma visual e intuitiva, permitindo que você acompanhe KPIs importantes e identifique oportunidades de melhoria rapidamente.
              </p>
              
              <p className="mb-4">
                A IA automaticamente destaca anomalias, tendências emergentes e recomenda ações específicas baseadas nos dados analisados, transformando insights em estratégias concretas.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Análise Preditiva</h2>
              
              <p className="mb-4">
                Utilizamos modelos preditivos avançados para antecipar comportamentos e tendências:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Previsão de churn de clientes</li>
                <li>Identificação de clientes com maior potencial de compra</li>
                <li>Previsão de receita e crescimento</li>
                <li>Análise de lifetime value dos clientes</li>
                <li>Otimização de preços baseada em demanda</li>
                <li>Previsão de performance de campanhas</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Integração de Dados</h2>
              
              <p className="mb-4">
                Nossa plataforma se integra com múltiplas fontes de dados, incluindo sistemas de CRM, plataformas de e-commerce, redes sociais, ferramentas de email marketing e sistemas internos da empresa.
              </p>
              
              <p className="mb-4">
                A IA processa e correlaciona informações de diferentes fontes para criar uma visão 360° do seu negócio, identificando conexões e insights que não seriam óbvios através de análises isoladas.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Relatórios Automatizados</h2>
              
              <p className="mb-4">
                Geramos relatórios personalizados automaticamente, com insights relevantes para diferentes níveis da organização. Os relatórios incluem análises de performance, recomendações estratégicas e projeções futuras.
              </p>
              
              <p className="text-lg">
                Com nossa solução de Análise de Dados, você transforma informações em vantagem competitiva, tomando decisões mais precisas e estratégicas para impulsionar o crescimento sustentável do seu negócio.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AnalyseDados;
