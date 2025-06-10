
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CasosSucesso = () => {
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
              Casos de Sucesso
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Descubra como empresas de diferentes setores transformaram seus resultados com as soluções de inteligência artificial da DesignoAI. Cada caso representa uma jornada única de crescimento e inovação digital.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">E-commerce de Moda - Aumento de 320% no Engajamento</h2>
              
              <p className="mb-4">
                Uma loja online de moda feminina enfrentava baixo engajamento nas redes sociais e conversões limitadas. Com nossa solução de criação de conteúdo personalizado e automação de campanhas, os resultados foram extraordinários:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Engajamento aumentou 320% em 3 meses</li>
                <li>Conversões cresceram 85%</li>
                <li>ROI da campanha aumentou 150%</li>
                <li>Alcance orgânico expandiu 240%</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Clínica Médica - 200% Mais Pacientes</h2>
              
              <p className="mb-4">
                Uma clínica médica especializada tinha dificuldade em atrair novos pacientes e baixa presença digital. Implementamos estratégias de SEO inteligente e gestão automatizada de redes sociais:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Aumento de 200% em novos pacientes</li>
                <li>Visitas no site cresceram 180%</li>
                <li>Posicionamento no Google: Top 3 para palavras-chave principais</li>
                <li>Redução de 60% no custo por lead</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Restaurante Gourmet - 400% de Crescimento Online</h2>
              
              <p className="mb-4">
                Durante a pandemia, um restaurante gourmet precisava urgentemente desenvolver seu canal de delivery. Nossas campanhas de email marketing automatizadas e presença digital robusta geraram resultados impressionantes:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Vendas online aumentaram 400%</li>
                <li>Base de clientes cresceu 150%</li>
                <li>Taxa de retenção subiu 90%</li>
                <li>Satisfação do cliente: 98%</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Consultoria Empresarial - Autoridade Digital</h2>
              
              <p className="mb-4">
                Uma consultoria empresarial queria estabelecer autoridade no mercado e gerar mais leads qualificados. Desenvolvemos uma estratégia completa de marketing de conteúdo com IA:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Geração de leads aumentou 250%</li>
                <li>Taxa de conversão de prospects melhorou 120%</li>
                <li>Posicionamento como referência no setor</li>
                <li>Ticket médio dos clientes cresceu 80%</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Academia de Ginástica - Retenção Record</h2>
              
              <p className="mb-4">
                Uma rede de academias enfrentava alta rotatividade de alunos e dificuldade para manter engajamento. Implementamos automação personalizada e campanhas de retenção:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Taxa de retenção aumentou 180%</li>
                <li>Novos membros cresceram 160%</li>
                <li>Engajamento nas aulas subiu 200%</li>
                <li>Receita mensal recorrente aumentou 140%</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nosso Impacto Consolidado</h2>
              
              <p className="mb-4">
                Ao longo dos nossos casos de sucesso, alguns padrões se destacam:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Mais de 500 empresas transformadas</li>
                <li>Aumento médio de 200% em conversões</li>
                <li>98% de taxa de satisfação dos clientes</li>
                <li>ROI médio de 3x no investimento</li>
                <li>Tempo médio para primeiros resultados: 2-3 meses</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Metodologia de Sucesso</h2>
              
              <p className="mb-4">
                Todos esses resultados são alcançados através da nossa metodologia proprietária que combina:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Análise profunda do negócio e mercado</li>
                <li>Implementação de IA personalizada para cada setor</li>
                <li>Monitoramento e otimização contínua</li>
                <li>Treinamento da equipe do cliente</li>
                <li>Suporte especializado durante toda a jornada</li>
              </ul>
              
              <p className="text-lg">
                Cada caso de sucesso representa não apenas números impressionantes, mas transformações reais que impactam o crescimento sustentável dos nossos clientes. Histórias de empresas que não apenas sobreviveram aos desafios do mercado digital, mas prosperaram e se tornaram líderes em seus segmentos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CasosSucesso;
