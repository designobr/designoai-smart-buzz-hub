import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, FileText, LayoutDashboard, RefreshCw, TrendingUp, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';
import editorialTeam from '@/assets/editorial-team.jpg';
import editorialBrand from '@/assets/editorial-brand.jpg';

const blockOne = [
  { icon: Cpu, title: 'Operação organizada', description: 'Processos claros substituem retrabalho e improviso.' },
  { icon: Users, title: 'Personalização em escala', description: 'Mensagens ajustadas a cada segmento do seu público.' },
  { icon: TrendingUp, title: 'Leitura antecipada', description: 'Tendências identificadas antes de virarem custo.' },
];

const blockTwo = [
  { icon: LayoutDashboard, title: 'Painel único', description: 'Todos os indicadores reunidos em um só lugar.' },
  { icon: FileText, title: 'Relatórios objetivos', description: 'Resumos semanais com decisões recomendadas.' },
  { icon: RefreshCw, title: 'Melhoria contínua', description: 'Ciclos curtos de teste, revisão e ajuste.' },
];

const ItemList = ({ items }: { items: typeof blockOne }) => (
  <ul className="mt-10 space-y-8">
    {items.map((item) => (
      <li key={item.title} className="flex gap-5 border-t border-border pt-8 first:border-t-0 first:pt-0">
        <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={2} />
        <div>
          <h4 className="text-base font-semibold tracking-[-0.02em] text-foreground">{item.title}</h4>
          <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        </div>
      </li>
    ))}
  </ul>
);

const Features = () => (
  <section id="features" className="section border-t border-border">
    <div className="container-editorial">
      <Reveal>
        <div className="max-w-3xl">
          <p className="eyebrow">Por que a DesignoAI</p>
          <h2 className="display-2 mt-6 text-foreground">
            Trabalho de estúdio, com a disciplina de uma operação.
          </h2>
        </div>
      </Reveal>

      <div className="mt-20 grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-7">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={editorialTeam}
              alt="Equipe revisando layouts impressos sobre uma mesa branca"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[320px] w-full object-cover md:h-[460px]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-5">
          <h3 className="text-2xl font-bold tracking-[-0.03em] text-foreground md:text-3xl">
            Tempo bem investido em cada campanha.
          </h3>
          <ItemList items={blockOne} />
          <Link to="/recursos" className="mt-10 inline-block">
            <ActionButton variant="secondary">
              Conhecer os recursos
              <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
            </ActionButton>
          </Link>
        </Reveal>
      </div>

      <div className="mt-24 grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5 lg:order-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <img
              src={editorialBrand}
              alt="Celular e livreto de identidade visual sobre superfície clara"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[320px] w-full object-cover md:h-[460px]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-7 lg:order-1">
          <h3 className="text-2xl font-bold tracking-[-0.03em] text-foreground md:text-3xl">
            Resultados mensuráveis e consistentes.
          </h3>
          <div className="max-w-xl">
            <ItemList items={blockTwo} />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Features;
