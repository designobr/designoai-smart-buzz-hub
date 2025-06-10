
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, TrendingUp, Users, Video, Download, Podcast } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      icon: BookOpen,
      title: "Inteligência Artificial",
      description: "Novidades, tendências e aplicações práticas de IA no marketing"
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description: "Estratégias, ferramentas e best practices para o mundo digital"
    },
    {
      icon: Users,
      title: "Cases de Sucesso",
      description: "Histórias reais de transformação digital dos nossos clientes"
    }
  ];

  const featuredArticles = [
    "Como a IA está revolucionando o e-commerce brasileiro",
    "10 estratégias de automação que aumentam vendas em 300%",
    "O futuro do atendimento ao cliente com chatbots inteligentes",
    "ROI em marketing digital: métricas que realmente importam",
    "Personalização em massa: como a IA cria experiências únicas",
    "Tendências de marketing digital para 2024"
  ];

  const exclusiveResources = [
    {
      icon: Download,
      title: "E-books Gratuitos",
      description: "Guias completos sobre marketing com IA"
    },
    {
      icon: Video,
      title: "Webinars Mensais",
      description: "Sessões ao vivo com especialistas da indústria"
    },
    {
      icon: Podcast,
      title: "Podcasts Exclusivos",
      description: "Conversas com líderes do mercado digital"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-designoai-blue-light/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-designoai-blue/5 via-transparent to-purple-400/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-designoai-blue/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent leading-tight">
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Seu portal de conhecimento sobre inteligência artificial aplicada ao marketing digital.
            </p>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Categorias de Conteúdo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <CardTitle className="text-xl text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Artigos em Destaque
          </h2>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                Alguns dos nossos artigos mais populares incluem:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article, index) => (
                  <div key={index} className="flex items-start p-4 bg-gradient-to-r from-designoai-blue-light/30 to-purple-50 rounded-xl hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-gray-700 font-medium leading-relaxed">{article}</h3>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Exclusive Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Recursos Exclusivos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {exclusiveResources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-designoai-blue-light/20 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <CardTitle className="text-xl text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Community */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-designoai-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-designoai-blue-dark mb-4">Newsletter Semanal</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Inscreva-se em nossa newsletter semanal para receber os melhores conteúdos diretamente em seu email. Compartilhamos resumos dos artigos mais importantes, novidades do setor e dicas exclusivas dos nossos especialistas.
                </p>
                <div className="bg-gradient-to-r from-designoai-blue-light/50 to-purple-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 text-center">
                    Junte-se a mais de 10.000 profissionais
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-designoai-blue-dark mb-4">Contribua Conosco</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Você é um especialista em marketing digital ou IA? Tem uma história interessante para compartilhar? Estamos sempre abertos a parcerias de conteúdo e guest posts de qualidade.
                </p>
                <div className="bg-gradient-to-r from-designoai-blue/10 to-purple-100 rounded-xl p-4">
                  <p className="text-sm text-gray-600 text-center">
                    Entre em contato: blog@designoai.com.br
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                Siga Nossas Redes Sociais
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Para não perder nenhuma novidade, siga-nos em nossas redes sociais onde compartilhamos conteúdos exclusivos, bastidores da empresa e insights rápidos sobre o mercado.
              </p>
              
              <div className="bg-gradient-to-r from-designoai-blue/10 to-purple-100 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  O blog da DesignoAI é seu companheiro na jornada de transformação digital. Aqui você encontra o conhecimento necessário para levar sua empresa ao próximo nível com inteligência artificial e marketing digital estratégico.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
