
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
                A DesignoAI nasceu da visão de democratizar o poder da inteligência artificial para empresas de todos os tamanhos. Fundada por especialistas em tecnologia e marketing digital, nossa missão é transformar a forma como as empresas se conectam com seus clientes.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossa História</h2>
              
              <p className="mb-4">
                Em 2023, percebemos que muitas empresas brasileiras enfrentavam dificuldades para competir no ambiente digital devido à falta de recursos tecnológicos avançados. Foi então que decidimos criar uma plataforma que combinasse inteligência artificial de ponta com simplicidade de uso.
              </p>
              
              <p className="mb-4">
                Hoje, a DesignoAI é reconhecida como uma das principais empresas de marketing digital com IA do Brasil, atendendo mais de 500 empresas e gerando resultados extraordinários para nossos clientes.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossa Missão</h2>
              
              <p className="mb-4">
                Democratizar o acesso à tecnologia de inteligência artificial para pequenas e médias empresas, permitindo que compitam em igualdade com grandes corporações no ambiente digital.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossa Visão</h2>
              
              <p className="mb-4">
                Ser a principal referência em soluções de marketing digital com inteligência artificial na América Latina até 2030, transformando a maneira como as empresas se comunicam com seus clientes.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossos Valores</h2>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Inovação:</strong> Estamos sempre na vanguarda da tecnologia</li>
                <li><strong>Simplicidade:</strong> Tornamos o complexo em simples e acessível</li>
                <li><strong>Resultados:</strong> Focamos em gerar impacto real para nossos clientes</li>
                <li><strong>Transparência:</strong> Mantemos comunicação clara e honesta</li>
                <li><strong>Excelência:</strong> Buscamos a perfeição em tudo que fazemos</li>
                <li><strong>Sustentabilidade:</strong> Crescemos de forma responsável e sustentável</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Nossa Equipe</h2>
              
              <p className="mb-4">
                Contamos com uma equipe multidisciplinar de mais de 50 profissionais especialistas em inteligência artificial, marketing digital, desenvolvimento de software, design e atendimento ao cliente. Nosso time é formado por talentos de diversas áreas que compartilham a paixão por inovação e resultados.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Tecnologia e Inovação</h2>
              
              <p className="mb-4">
                Investimos continuamente em pesquisa e desenvolvimento, mantendo parcerias com as principais universidades e centros de pesquisa do país. Nossa plataforma utiliza algoritmos proprietários de machine learning e processamento de linguagem natural.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Responsabilidade Social</h2>
              
              <p className="mb-4">
                Acreditamos no poder transformador da tecnologia e mantemos programas de responsabilidade social que incluem capacitação gratuita para empreendedores, apoio a startups sociais e iniciativas de inclusão digital em comunidades carentes.
              </p>
              
              <p className="text-lg">
                Na DesignoAI, não somos apenas uma empresa de tecnologia - somos parceiros na jornada de transformação digital dos nossos clientes, comprometidos em gerar resultados que fazem a diferença real nos negócios e na vida das pessoas.
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
