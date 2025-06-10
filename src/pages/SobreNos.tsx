
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SobreNos = () => {
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
              Sobre Nós
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                A DesignoAI nasceu da visão de democratizar o poder da inteligência artificial para empresas de todos os tamanhos, transformando a forma como o marketing digital é pensado e executado.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossa História</h2>
              
              <p className="mb-4">
                Fundada em 2023, a DesignoAI surgiu da necessidade crescente das empresas em se manterem competitivas no mundo digital. Nossos fundadores, especialistas em tecnologia e marketing, identificaram uma lacuna no mercado: soluções de IA acessíveis e eficazes para pequenas e médias empresas.
              </p>
              
              <p className="mb-4">
                Começamos como uma pequena startup com uma grande ambição: tornar a inteligência artificial uma ferramenta prática e poderosa para qualquer empresa que deseje crescer no ambiente digital.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossa Missão</h2>
              
              <p className="mb-4">
                Democratizar o acesso às tecnologias de inteligência artificial, oferecendo soluções de marketing digital inovadoras, eficazes e acessíveis que impulsionam o crescimento sustentável dos nossos clientes.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossa Visão</h2>
              
              <p className="mb-4">
                Ser a principal referência em soluções de marketing digital com IA no Brasil, reconhecida pela inovação, qualidade e impacto positivo nos resultados dos nossos clientes.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossos Valores</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Inovação:</strong> Buscamos constantemente novas tecnologias e metodologias para oferecer as melhores soluções</li>
                <li><strong>Transparência:</strong> Mantemos comunicação clara e honesta com nossos clientes sobre resultados e processos</li>
                <li><strong>Excelência:</strong> Comprometimento com a qualidade em todos os aspectos do nosso trabalho</li>
                <li><strong>Acessibilidade:</strong> Tornamos tecnologias avançadas acessíveis para empresas de todos os portes</li>
                <li><strong>Parceria:</strong> Vemos nossos clientes como parceiros de longo prazo no crescimento mútuo</li>
                <li><strong>Sustentabilidade:</strong> Promovemos crescimento responsável e práticas sustentáveis</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossa Equipe</h2>
              
              <p className="mb-4">
                Contamos com uma equipe multidisciplinar de especialistas em inteligência artificial, marketing digital, design, desenvolvimento e atendimento ao cliente. Cada membro da nossa equipe é apaixonado por tecnologia e comprometido com o sucesso dos nossos clientes.
              </p>
              
              <p className="mb-4">
                Nossos profissionais possuem formação em renomadas instituições e experiência em empresas líderes de tecnologia, trazendo conhecimento de ponta para desenvolver soluções que realmente fazem a diferença.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nosso Compromisso</h2>
              
              <p className="mb-4">
                Estamos comprometidos em entregar resultados mensuráveis e sustentáveis para nossos clientes. Cada projeto é tratado com dedicação e atenção aos detalhes, garantindo que as soluções implementadas gerem impacto real no crescimento dos negócios.
              </p>
              
              <p className="text-lg">
                Na DesignoAI, acreditamos que a tecnologia deve servir às pessoas e aos negócios de forma inteligente e humana. Continuamos evoluindo para oferecer sempre as melhores soluções em marketing digital com inteligência artificial.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreNos;
