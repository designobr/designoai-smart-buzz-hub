
import { Star, Zap, BarChart3, PenTool, Share2, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSparkEffect } from '@/hooks/useSparkEffect';

const servicesData = [
  {
    icon: Star,
    title: "Criação de Conteúdo",
    description: "Textos, imagens e gráficos gerados por IA para suas campanhas de marketing digital.",
    link: "/criacao-conteudo",
    metric: "+180% engajamento",
  },
  {
    icon: BarChart3,
    title: "Análise de Dados",
    description: "Insights precisos e em tempo real sobre o desempenho de suas estratégias de marketing.",
    link: "/analise-dados",
    metric: "3x mais insights",
  },
  {
    icon: PenTool,
    title: "Design Automatizado",
    description: "Criação de designs profissionais para suas publicações em redes sociais.",
    link: "/design-automatizado",
    metric: "85% mais rápido",
  },
  {
    icon: Share2,
    title: "Gestão de Redes Sociais",
    description: "Automação inteligente para postagens, engajamento e monitoramento de suas redes.",
    link: "/gestao-redes-sociais",
    metric: "+230% alcance",
  },
  {
    icon: Zap,
    title: "SEO Inteligente",
    description: "Otimização automática para melhorar seu posicionamento nos mecanismos de busca.",
    link: "/seo-inteligente",
    metric: "Top 3 Google",
  },
  {
    icon: Brain,
    title: "Estratégias Personalizadas",
    description: "Recomendações baseadas em IA para maximizar seus resultados de marketing.",
    link: "/estrategias-personalizadas",
    metric: "98% precisão",
  }
];

const Services = () => {
  const spark = useSparkEffect({ count: 8, spread: 50 });

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
              Nossos Serviços
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              <span className="text-foreground">Serviços </span>
              <span className="text-gradient">Inteligentes</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluções alimentadas por IA que transformam sua presença digital
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isFirst = index === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={isFirst ? 'md:col-span-2 lg:col-span-2' : ''}
              >
                <Link to={service.link} className="block group h-full">
                  <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/[0.06] hover:border-primary/20 hover:-translate-y-1 hover:glow-sm relative overflow-hidden">
                    {/* Order number */}
                    <span className="absolute top-4 right-4 text-5xl font-heading font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-[hsl(270,70%,60%)]/20 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-[hsl(270,70%,60%)]/30 transition-all duration-300">
                      <Icon
                        className="w-6 h-6 text-primary"
                        onClick={(e) => { e.preventDefault(); spark(e as any, `svc-${index}`); }}
                      />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Hover metric */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-semibold text-primary bg-primary/5 rounded-full px-3 py-1 inline-block">
                      {service.metric}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <button className="inline-flex items-center px-6 py-3 glass rounded-full text-sm font-medium text-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 group">
              Ver todos os recursos
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
