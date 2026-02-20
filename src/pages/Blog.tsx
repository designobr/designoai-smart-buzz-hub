
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { BookOpen, TrendingUp, Users, Video, Download, Podcast } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const categories = [
    { icon: BookOpen, title: "Inteligência Artificial", description: "Novidades e aplicações de IA no marketing" },
    { icon: TrendingUp, title: "Marketing Digital", description: "Estratégias e best practices" },
    { icon: Users, title: "Cases de Sucesso", description: "Histórias reais de transformação" },
  ];

  const articles = [
    "Como a IA está revolucionando o e-commerce brasileiro",
    "10 estratégias de automação que aumentam vendas em 300%",
    "O futuro do atendimento com chatbots inteligentes",
    "ROI em marketing digital: métricas que importam",
    "Personalização em massa com IA",
    "Tendências de marketing digital para 2025",
  ];

  const resources = [
    { icon: Download, title: "E-books Gratuitos", description: "Guias completos sobre marketing com IA" },
    { icon: Video, title: "Webinars Mensais", description: "Sessões ao vivo com especialistas" },
    { icon: Podcast, title: "Podcasts", description: "Conversas com líderes do mercado" },
  ];

  return (
    <SubpageLayout title="Blog" subtitle="Seu portal de conhecimento sobre IA aplicada ao marketing digital." badge="📝 Conteúdo" seoPath="/blog" seoDescription="Blog DesignoAI: dicas, tutoriais e insights sobre marketing digital com IA, gestão de redes sociais, SEO e design automatizado.">
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-10">Categorias</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-10">Artigos em <span className="text-gradient">Destaque</span></h2>
          <div className="glass rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {articles.map((a, i) => (
                <div key={i} className="flex items-start p-3 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
                  <BookOpen className="w-4 h-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-10">Recursos <span className="text-gradient">Exclusivos</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <r.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default Blog;
