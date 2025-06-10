
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
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
              Blog
            </h1>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Bem-vindo ao blog da DesignoAI, seu portal de conhecimento sobre inteligência artificial aplicada ao marketing digital. Aqui compartilhamos insights, tendências, estudos de caso e dicas práticas para maximizar seus resultados digitais.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">O que você encontra aqui</h2>
              
              <p className="mb-4">
                Nosso blog é atualizado regularmente com conteúdo relevante e prático para profissionais de marketing, empreendedores e gestores que desejam se manter atualizados sobre as últimas inovações em IA aplicada aos negócios.
              </p>
              
              <h3 className="text-xl font-semibold text-designoai-blue-dark mt-6 mb-3">Categorias de Conteúdo</h3>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Inteligência Artificial:</strong> Novidades, tendências e aplicações práticas de IA no marketing</li>
                <li><strong>Marketing Digital:</strong> Estratégias, ferramentas e best practices para o mundo digital</li>
                <li><strong>Cases de Sucesso:</strong> Histórias reais de transformação digital dos nossos clientes</li>
                <li><strong>Tutoriais:</strong> Guias práticos para otimizar suas campanhas e processos</li>
                <li><strong>Análises de Mercado:</strong> Insights sobre tendências e comportamento do consumidor</li>
                <li><strong>Inovação:</strong> Tecnologias emergentes e seu impacto nos negócios</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Artigos em Destaque</h2>
              
              <p className="mb-4">
                Alguns dos nossos artigos mais populares incluem:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>"Como a IA está revolucionando o e-commerce brasileiro"</li>
                <li>"10 estratégias de automação que aumentam vendas em 300%"</li>
                <li>"O futuro do atendimento ao cliente com chatbots inteligentes"</li>
                <li>"ROI em marketing digital: métricas que realmente importam"</li>
                <li>"Personalização em massa: como a IA cria experiências únicas"</li>
                <li>"Tendências de marketing digital para 2024"</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Recursos Exclusivos</h2>
              
              <p className="mb-4">
                Além dos artigos regulares, oferecemos conteúdos exclusivos para nossa comunidade:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>E-books gratuitos sobre marketing com IA</li>
                <li>Webinars mensais with especialistas</li>
                <li>Templates e checklists para download</li>
                <li>Calculadoras de ROI e ferramentas práticas</li>
                <li>Relatórios setoriais exclusivos</li>
                <li>Podcasts com líderes da indústria</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Newsletter</h2>
              
              <p className="mb-4">
                Inscreva-se em nossa newsletter semanal para receber os melhores conteúdos diretamente em seu email. Compartilhamos resumos dos artigos mais importantes, novidades do setor e dicas exclusivas dos nossos especialistas.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Contribua Conosco</h2>
              
              <p className="mb-4">
                Você é um especialista em marketing digital ou IA? Tem uma história interessante para compartilhar? Estamos sempre abertos a parcerias de conteúdo e guest posts de qualidade.
              </p>
              
              <p className="mb-4">
                Entre em contato conosco através do email: blog@designoai.com.br para enviar sua proposta de conteúdo.
              </p>
              
              <h2 className="text-2xl font-semibold text-designoai-blue-dark mt-8 mb-4">Siga nossas redes sociais</h2>
              
              <p className="mb-4">
                Para não perder nenhuma novidade, siga-nos em nossas redes sociais onde compartilhamos conteúdos exclusivos, bastidores da empresa e insights rápidos sobre o mercado.
              </p>
              
              <p className="text-lg">
                O blog da DesignoAI é seu companheiro na jornada de transformação digital. Aqui você encontra o conhecimento necessário para levar sua empresa ao próximo nível com inteligência artificial e marketing digital estratégico.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
