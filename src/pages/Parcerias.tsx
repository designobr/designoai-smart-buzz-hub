
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Parcerias = () => {
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
              Parcerias
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Na DesignoAI, acreditamos que parcerias estratégicas são fundamentais para oferecer soluções ainda mais completas e inovadoras aos nossos clientes. Construímos relacionamentos duradouros com empresas que compartilham nossa visão de transformação digital.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Tipos de Parcerias</h2>
              
              <p className="mb-4">
                Oferecemos diferentes modalidades de parceria para atender diversas necessidades e objetivos de negócio:
              </p>
              
              <h3 className="text-xl font-semibold text-designoai-blue-dark mt-6 mb-3">Parceiros de Tecnologia</h3>
              <p className="mb-4">
                Colaboramos com líderes em tecnologia para integrar as melhores ferramentas e plataformas em nossas soluções. Nossos parceiros tecnológicos incluem provedores de cloud, plataformas de IA, ferramentas de automação e sistemas de CRM.
              </p>
              
              <h3 className="text-xl font-semibold text-designoai-blue-dark mt-6 mb-3">Parceiros de Canal</h3>
              <p className="mb-4">
                Trabalhamos com agências de marketing, consultorias e integradores que expandem nosso alcance e oferecem nossas soluções a um público mais amplo. Fornecemos treinamento, suporte técnico e materiais de marketing para garantir o sucesso conjunto.
              </p>
              
              <h3 className="text-xl font-semibold text-designoai-blue-dark mt-6 mb-3">Parceiros Estratégicos</h3>
              <p className="mb-4">
                Estabelecemos alianças estratégicas com empresas complementares para criar soluções integradas que atendem necessidades específicas de mercado. Essas parcerias resultam em ofertas conjuntas de maior valor agregado.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Benefícios das Parcerias</h2>
              
              <p className="mb-4">
                Nossos parceiros desfrutam de uma série de benefícios exclusivos:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Acesso antecipado a novas funcionalidades e produtos</li>
                <li>Treinamento especializado em nossas tecnologias</li>
                <li>Suporte técnico dedicado e prioritário</li>
                <li>Materiais de marketing e vendas co-brandados</li>
                <li>Participação em eventos exclusivos e webinars</li>
                <li>Programa de certificação oficial</li>
                <li>Comissões atrativas e metas flexíveis</li>
                <li>Portal exclusivo para parceiros</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Programa de Certificação</h2>
              
              <p className="mb-4">
                Oferecemos um programa completo de certificação para garantir que nossos parceiros tenham o conhecimento necessário para implementar e vender nossas soluções com excelência:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Certificação técnica em implementação de IA</li>
                <li>Certificação comercial em vendas consultivas</li>
                <li>Certificação em marketing digital avançado</li>
                <li>Workshops práticos e hands-on</li>
                <li>Avaliações contínuas e atualizações</li>
                <li>Reconhecimento oficial e credenciais digitais</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Requisitos para Parceria</h2>
              
              <p className="mb-4">
                Para garantir parcerias de sucesso mútuo, estabelecemos alguns critérios básicos:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Experiência comprovada no mercado de marketing digital ou tecnologia</li>
                <li>Equipe técnica capacitada ou disposição para treinamento</li>
                <li>Compromisso com a qualidade no atendimento ao cliente</li>
                <li>Alinhamento com nossos valores e visão de mercado</li>
                <li>Capacidade de investimento em marketing conjunto</li>
                <li>Estrutura para suporte pós-venda</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Parcerias Internacionais</h2>
              
              <p className="mb-4">
                Estamos expandindo nossas operações para mercados internacionais e buscamos parceiros locais que possam representar a DesignoAI em diferentes países e regiões. Oferecemos suporte completo para adaptação cultural e regulamentações locais.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Programa de Startups</h2>
              
              <p className="mb-4">
                Temos um programa especial para startups e empresas em crescimento, oferecendo condições diferenciadas e suporte especializado para empresas que estão começando sua jornada digital.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Como se tornar um Parceiro</h2>
              
              <p className="mb-4">
                O processo para se tornar nosso parceiro é simples e direto:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Preencha o formulário de interesse em parcerias</li>
                <li>Participe de uma reunião de alinhamento</li>
                <li>Avaliação técnica e comercial</li>
                <li>Assinatura do acordo de parceria</li>
                <li>Onboarding e treinamento inicial</li>
                <li>Início das atividades conjuntas</li>
              </ol>
              
              <p className="text-lg">
                Entre em contato conosco através do email parcerias@designoai.com.br para iniciar uma conversa sobre como podemos crescer juntos e criar valor para nossos clientes mútuos.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Parcerias;
