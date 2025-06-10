
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CriacaoConteudo = () => {
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
              Criação de Conteúdo
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Nossa solução de Criação de Conteúdo utiliza inteligência artificial para gerar textos, imagens e gráficos de alta qualidade para suas campanhas de marketing digital.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Recursos Principais</h2>
              
              <p className="mb-4">
                Nossa plataforma de criação de conteúdo oferece ferramentas avançadas para produzir materiais profissionais:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Geração automática de textos otimizados para SEO</li>
                <li>Criação de imagens e gráficos personalizados</li>
                <li>Templates responsivos para diferentes formatos</li>
                <li>Adaptação de conteúdo para múltiplas plataformas</li>
                <li>Análise de performance e otimização contínua</li>
                <li>Biblioteca de recursos visuais exclusivos</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Tipos de Conteúdo</h2>
              
              <p className="mb-4">
                Criamos diferentes tipos de conteúdo para atender todas as suas necessidades de marketing:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Posts para redes sociais</li>
                <li>Artigos para blog</li>
                <li>E-mails marketing</li>
                <li>Landing pages</li>
                <li>Banners e anúncios</li>
                <li>Vídeos promocionais</li>
                <li>Infográficos informativos</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Personalização Inteligente</h2>
              
              <p className="mb-4">
                Nossa IA aprende com o perfil da sua marca e audiência para criar conteúdo cada vez mais personalizado e eficaz. O sistema analisa o engajamento e ajusta automaticamente o tom, estilo e formato para maximizar os resultados.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Benefícios</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Economia de tempo na produção de conteúdo</li>
                <li>Consistência na comunicação da marca</li>
                <li>Aumento do engajamento e conversões</li>
                <li>Escalabilidade para grandes volumes</li>
                <li>Redução de custos com produção</li>
                <li>Otimização automática baseada em performance</li>
              </ul>
              
              <p className="text-lg">
                Com nossa solução de Criação de Conteúdo, sua empresa mantém uma comunicação profissional e envolvente em todos os canais digitais, aumentando a visibilidade da marca e gerando mais oportunidades de negócio.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CriacaoConteudo;
