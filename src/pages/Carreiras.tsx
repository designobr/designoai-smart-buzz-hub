
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Carreiras = () => {
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
              Carreiras
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Junte-se à DesignoAI e faça parte de uma equipe inovadora que está revolucionando o marketing digital através da inteligência artificial. Aqui, você terá a oportunidade de crescer profissionalmente enquanto impacta positivamente milhares de empresas.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Por que trabalhar na DesignoAI?</h2>
              
              <p className="mb-4">
                Na DesignoAI, oferecemos muito mais do que apenas um emprego. Proporcionamos uma experiência profissional transformadora em um ambiente que valoriza a criatividade, inovação e desenvolvimento pessoal.
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Ambiente de trabalho colaborativo e inspirador</li>
                <li>Oportunidades de aprendizado contínuo em tecnologias de ponta</li>
                <li>Cultura de inovação e experimentação</li>
                <li>Flexibilidade de horários e trabalho remoto</li>
                <li>Planos de carreira personalizados</li>
                <li>Participação em projetos de impacto nacional</li>
                <li>Equipe jovem e multidisciplinar</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Benefícios</h2>
              
              <p className="mb-4">
                Oferecemos um pacote completo de benefícios pensado no bem-estar e desenvolvimento dos nossos colaboradores:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Salário competitivo com revisões periódicas</li>
                <li>Participação nos lucros e resultados</li>
                <li>Plano de saúde e odontológico</li>
                <li>Vale refeição e alimentação</li>
                <li>Auxílio home office</li>
                <li>Orçamento para cursos e certificações</li>
                <li>Licença parental estendida</li>
                <li>Day off no aniversário</li>
                <li>Acesso a plataformas de aprendizado online</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Áreas de Atuação</h2>
              
              <p className="mb-4">
                Estamos sempre em busca de talentos nas seguintes áreas:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Tecnologia:</strong> Desenvolvedores, Cientistas de Dados, Engenheiros de IA</li>
                <li><strong>Marketing:</strong> Especialistas em Marketing Digital, Growth Hackers, Analistas de Performance</li>
                <li><strong>Design:</strong> Designers UX/UI, Motion Designers, Designers Gráficos</li>
                <li><strong>Vendas:</strong> Consultores Comerciais, Account Managers, SDRs</li>
                <li><strong>Atendimento:</strong> Customer Success, Suporte Técnico, Analistas de Relacionamento</li>
                <li><strong>Gestão:</strong> Product Managers, Project Managers, Liderança Técnica</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Processo Seletivo</h2>
              
              <p className="mb-4">
                Nosso processo seletivo é estruturado para conhecer melhor cada candidato e avaliar não apenas competências técnicas, mas também fit cultural:
              </p>
              
              <ol className="list-decimal pl-6 mb-6 space-y-2">
                <li>Análise de currículo e portfólio</li>
                <li>Entrevista inicial com RH</li>
                <li>Teste técnico ou case prático</li>
                <li>Entrevista com o gestor da área</li>
                <li>Conversa com o time</li>
                <li>Feedback e proposta</li>
              </ol>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Desenvolvimento Profissional</h2>
              
              <p className="mb-4">
                Investimos no crescimento dos nossos colaboradores através de programas estruturados de desenvolvimento:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Mentoria individualizada</li>
                <li>Programa de trainee para recém-formados</li>
                <li>Trilhas de aprendizado personalizadas</li>
                <li>Participação em eventos e conferências</li>
                <li>Projetos desafiadores e inovadores</li>
                <li>Mobilidade interna entre áreas</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Como se candidatar</h2>
              
              <p className="mb-4">
                Interessado em fazer parte da nossa equipe? Acompanhe nossas vagas através dos principais portais de emprego ou entre em contato diretamente conosco através do email: carreiras@designoai.com.br
              </p>
              
              <p className="text-lg">
                Na DesignoAI, cada pessoa faz a diferença. Venha construir o futuro do marketing digital conosco e desenvolver sua carreira em uma das startups mais promissoras do setor de tecnologia.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Carreiras;
