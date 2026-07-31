import { Link } from 'react-router-dom';
import { ArrowUpRight, BarChart3, Brain, PenTool, Share2, Sparkles, Zap } from 'lucide-react';
import Reveal from '@/components/Reveal';

const services = [
  {
    icon: Sparkles,
    title: 'Criação de Conteúdo',
    description: 'Textos, imagens e peças gráficas produzidas com direção editorial consistente.',
    link: '/criacao-conteudo',
  },
  {
    icon: BarChart3,
    title: 'Análise de Dados',
    description: 'Leitura clara de desempenho, com indicadores que sustentam decisões.',
    link: '/analise-dados',
  },
  {
    icon: PenTool,
    title: 'Design Automatizado',
    description: 'Sistemas visuais escaláveis para publicações, campanhas e materiais.',
    link: '/design-automatizado',
  },
  {
    icon: Share2,
    title: 'Gestão de Redes Sociais',
    description: 'Planejamento, produção e publicação com ritmo e coerência de marca.',
    link: '/gestao-redes-sociais',
  },
  {
    icon: Zap,
    title: 'SEO Inteligente',
    description: 'Arquitetura, conteúdo e performance técnica para busca orgânica.',
    link: '/seo-inteligente',
  },
  {
    icon: Brain,
    title: 'Estratégias Personalizadas',
    description: 'Roteiros de crescimento desenhados a partir do seu contexto real.',
    link: '/estrategias-personalizadas',
  },
];

const Services = () => (
  <section id="services" className="section">
    <div className="container-editorial">
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Serviços</p>
            <h2 className="display-2 mt-6 text-foreground">
              Um conjunto completo, entregue com o mesmo padrão.
            </h2>
          </div>
          <p className="text-base text-muted-foreground lg:col-span-5">
            Cada frente de trabalho é conduzida por especialistas e integrada a um único plano de
            crescimento.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 0.06}>
              <Link to={s.link} className="group block h-full">
                <article className="card-surface card-surface-hover flex h-full flex-col p-10">
                  <Icon className="h-6 w-6 text-foreground" strokeWidth={2} />
                  <h3 className="mt-8 text-xl font-bold tracking-[-0.03em] text-foreground">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.description}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Saber mais
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-[220ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </span>
                </article>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-14">
          <Link to="/services" className="link-underline text-sm font-semibold">
            Ver todos os serviços
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Services;
