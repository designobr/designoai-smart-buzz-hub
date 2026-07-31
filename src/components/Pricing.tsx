import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';

const plans = [
  {
    name: 'Start',
    summary: 'Para negócios que precisam de presença visual consistente.',
    features: [
      '12 artes premium personalizadas',
      'Direção criativa assistida por IA',
      'Sugestão de temas por tendências',
      'Ciclo de revisão e aprovação',
      'Atendimento via WhatsApp',
    ],
  },
  {
    name: 'Plus',
    summary: 'Volume maior de produção e planejamento mais amplo.',
    features: [
      '18 artes premium personalizadas',
      'Direção criativa assistida por IA',
      'Sugestão de temas por tendências',
      'Ciclo de revisão e aprovação',
      'Atendimento via WhatsApp',
    ],
  },
  {
    name: 'Fusion',
    summary: 'Marketing digital, material físico e automação em um só plano.',
    highlight: true,
    features: [
      'Gestão de redes sociais (12 posts/mês)',
      'Stories diários programados',
      'Design gráfico e copywriting',
      'Tráfego pago e site responsivo',
      'Cartão de visita digital',
      'Sessão de fotos e vídeo',
      'Relatórios de desempenho',
      'Assistente de WhatsApp com IA',
    ],
  },
];

const Pricing = () => {
  const requestQuote = (planName: string) =>
    window.open(
      `https://wa.me/5511947968158?text=${encodeURIComponent(
        `Olá! Tenho interesse no plano ${planName} da DesignoAI. Gostaria de solicitar um orçamento.`
      )}`,
      '_blank'
    );

  const goToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="section border-t border-border">
      <div className="container-editorial">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">Planos</p>
              <h2 className="display-2 mt-6 text-foreground">Escopos claros, orçamento sob consulta.</h2>
            </div>
            <p className="text-base text-muted-foreground lg:col-span-5">
              Cada plano é ajustado ao seu momento. Sem taxas escondidas e sem contrato de longo prazo.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <article
                className={`card-surface card-surface-hover flex h-full flex-col p-10 ${
                  plan.highlight ? 'border-foreground/20' : ''
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-foreground">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="rounded-pill border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Completo
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{plan.summary}</p>
                <p className="mt-8 text-base font-semibold text-foreground">Orçamento sob consulta</p>

                <ul className="mt-8 flex-1 space-y-4 border-t border-border pt-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 space-y-3">
                  <ActionButton
                    className="w-full"
                    variant={plan.highlight ? 'primary' : 'secondary'}
                    onClick={() => requestQuote(plan.name)}
                  >
                    Solicitar orçamento
                  </ActionButton>
                  {plan.highlight && (
                    <Link to="/services" className="block">
                      <ActionButton variant="quiet" className="w-full">
                        Ver detalhes
                      </ActionButton>
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <button type="button" onClick={goToCalculator} className="link-underline text-sm font-semibold">
              Montar seu escopo no seletor de serviços
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
