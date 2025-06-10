
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SocialMedia = () => {
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
              Social Media
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Nossa solução de Social Media utiliza inteligência artificial para criar uma presença digital consistente e envolvente para sua marca nas principais plataformas de redes sociais.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">O que oferecemos</h2>
              
              <p className="mb-4">
                Nosso serviço de Social Media com IA abrange todas as etapas necessárias para uma presença digital de sucesso:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Criação de conteúdo visual personalizado com IA</li>
                <li>Planejamento estratégico de posts e stories</li>
                <li>Análise de tendências e otimização de engajamento</li>
                <li>Gestão automatizada de múltiplas plataformas</li>
                <li>Relatórios detalhados de performance</li>
                <li>Resposta automatizada a comentários e mensagens</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Como funciona</h2>
              
              <p className="mb-4">
                Nossa inteligência artificial analisa o perfil da sua empresa, seu público-alvo e as tendências do mercado para criar conteúdo relevante e envolvente. O sistema aprende continuamente com as interações e ajusta a estratégia para maximizar o alcance e engajamento.
              </p>
              
              <p className="mb-4">
                Utilizamos algoritmos avançados para determinar os melhores horários de postagem, hashtags mais eficazes e tipos de conteúdo que geram maior interesse do seu público específico.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Benefícios</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Aumento significativo do engajamento orgânico</li>
                <li>Economia de tempo com automação inteligente</li>
                <li>Consistência na comunicação da marca</li>
                <li>Análise preditiva de tendências</li>
                <li>ROI mensurável e otimizado</li>
                <li>Presença profissional em todas as plataformas</li>
              </ul>
              
              <p className="text-lg">
                Com nossa solução de Social Media, sua empresa mantém uma presença digital ativa e profissional, construindo relacionamentos duradouros com seus clientes e expandindo seu alcance no mercado digital.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SocialMedia;
