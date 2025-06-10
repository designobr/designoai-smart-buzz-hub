
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessageCircle, Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Vi um artigo interessante no blog do DesignoAI e gostaria de saber mais sobre os serviços.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511947968158?text=${encodedMessage}`, '_blank');
  };

  const blogPosts = [
    {
      id: 1,
      title: "Como a IA está Revolucionando o Marketing Digital em 2024",
      excerpt: "Descubra as principais tendências e como implementar inteligência artificial em sua estratégia de marketing para maximizar resultados.",
      author: "Equipe DesignoAI",
      date: "15 de Janeiro, 2024",
      category: "Inteligência Artificial",
      readTime: "8 min de leitura"
    },
    {
      id: 2,
      title: "5 Estratégias de Email Marketing que Convertem Mais",
      excerpt: "Aprenda técnicas comprovadas para aumentar suas taxas de abertura, cliques e conversões em campanhas de email marketing.",
      author: "Equipe DesignoAI",
      date: "10 de Janeiro, 2024",
      category: "Email Marketing",
      readTime: "6 min de leitura"
    },
    {
      id: 3,
      title: "SEO com IA: O Futuro da Otimização para Mecanismos de Busca",
      excerpt: "Como usar inteligência artificial para melhorar seu SEO e aparecer nas primeiras posições do Google de forma mais eficiente.",
      author: "Equipe DesignoAI",
      date: "5 de Janeiro, 2024",
      category: "SEO",
      readTime: "10 min de leitura"
    },
    {
      id: 4,
      title: "Redes Sociais: Como Criar Conteúdo que Engaja",
      excerpt: "Estratégias práticas para aumentar o engajamento nas redes sociais e construir uma comunidade fiel ao redor da sua marca.",
      author: "Equipe DesignoAI",
      date: "28 de Dezembro, 2023",
      category: "Redes Sociais",
      readTime: "7 min de leitura"
    },
    {
      id: 5,
      title: "Análise de Dados: Transformando Números em Estratégias",
      excerpt: "Como interpretar métricas de marketing digital e usar dados para tomar decisões mais assertivas em seus negócios.",
      author: "Equipe DesignoAI",
      date: "20 de Dezembro, 2023",
      category: "Analytics",
      readTime: "9 min de leitura"
    },
    {
      id: 6,
      title: "Design Automatizado: Criando Visuais Profissionais com IA",
      excerpt: "Descubra como a IA pode ajudar a criar designs profissionais em minutos, mesmo sem conhecimento técnico em design.",
      author: "Equipe DesignoAI",
      date: "15 de Dezembro, 2023",
      category: "Design",
      readTime: "5 min de leitura"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-designoai-blue-light to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-designoai-blue-dark mb-6">
                Blog DesignoAI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Insights, tendências e estratégias sobre marketing digital, inteligência artificial e crescimento de negócios. Aprenda com nossos especialistas.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <span className="bg-designoai-blue text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Artigo em Destaque
              </span>
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-designoai-blue to-designoai-blue-dark p-8 text-white flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">IA & Marketing</h3>
                      <p className="text-white/90">O futuro é agora</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl mb-4">{blogPosts[0].title}</CardTitle>
                      <CardDescription className="text-base mb-4">{blogPosts[0].excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{blogPosts[0].author}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{blogPosts[0].date}</span>
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                      <Button>
                        Ler Artigo Completo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Últimos Artigos
              </h2>
              <p className="text-xl text-gray-600">
                Mantenha-se atualizado com as últimas tendências e estratégias
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <span className="bg-designoai-blue-light text-designoai-blue px-2 py-1 rounded text-sm">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                    <CardDescription className="text-sm">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <User className="w-3 h-3 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Ler Mais
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-6">
                Não Perca Nenhum Artigo
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Receba nossos melhores conteúdos diretamente no seu email. Sem spam, apenas insights valiosos.
              </p>
              <div className="bg-designoai-blue-light rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">
                  📧 Newsletter Semanal
                </h3>
                <p className="text-gray-600 mb-6">
                  Tendências, dicas práticas e casos de sucesso toda semana na sua caixa de entrada.
                </p>
                <Button size="lg" onClick={handleWhatsAppClick}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Assinar Newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-designoai-blue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Quer Implementar Essas Estratégias?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Nossa equipe pode ajudar você a colocar em prática tudo que você aprendeu aqui.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-designoai-blue hover:bg-gray-100" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
