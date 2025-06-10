
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SEOInteligente = () => {
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
              SEO Inteligente
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Nossa solução de SEO Inteligente utiliza algoritmos avançados de inteligência artificial para otimizar automaticamente seu site nos mecanismos de busca, garantindo melhor posicionamento e maior visibilidade online.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Como Funciona</h2>
              
              <p className="mb-4">
                Nosso sistema de SEO Inteligente analisa continuamente seu site e o mercado para implementar otimizações automatizadas:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Análise automática de palavras-chave relevantes</li>
                <li>Otimização de meta tags e descrições</li>
                <li>Melhoria da estrutura de URLs</li>
                <li>Otimização de velocidade de carregamento</li>
                <li>Criação de conteúdo otimizado para SEO</li>
                <li>Monitoramento de posicionamento em tempo real</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Recursos Avançados</h2>
              
              <p className="mb-4">
                Nossa plataforma oferece recursos completos para dominar os resultados de busca:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Pesquisa inteligente de palavras-chave com baixa concorrência</li>
                <li>Análise da concorrência e identificação de oportunidades</li>
                <li>Otimização técnica automatizada</li>
                <li>Link building estratégico</li>
                <li>SEO local para empresas regionais</li>
                <li>Relatórios detalhados de performance</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Resultados Mensuráveis</h2>
              
              <p className="mb-4">
                Nossos clientes experimentam melhorias significativas em suas métricas de SEO:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Aumento médio de 200% no tráfego orgânico</li>
                <li>Melhoria do posicionamento para palavras-chave estratégicas</li>
                <li>Redução da taxa de rejeição</li>
                <li>Aumento do tempo de permanência no site</li>
                <li>Maior taxa de conversão orgânica</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">SEO Técnico</h2>
              
              <p className="mb-4">
                Cuidamos de todos os aspectos técnicos que influenciam o posicionamento do seu site:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Otimização da velocidade de carregamento</li>
                <li>Implementação de dados estruturados</li>
                <li>Melhoria da experiência mobile</li>
                <li>Correção de erros de crawling</li>
                <li>Otimização da arquitetura do site</li>
                <li>Implementação de HTTPS e segurança</li>
              </ul>
              
              <p className="text-lg">
                Com nosso SEO Inteligente, sua empresa alcança as primeiras posições nos resultados de busca, aumentando significativamente a visibilidade online e atraindo mais clientes qualificados de forma orgânica e sustentável.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SEOInteligente;
