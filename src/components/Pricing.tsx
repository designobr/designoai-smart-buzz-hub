import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';
import LocaleLink from '@/components/LocaleLink';
import { useI18n } from '@/i18n/I18nProvider';

type Plan = { name: string; summary: string; highlight?: boolean; features: string[] };

const Pricing = () => {
  const { t, tList } = useI18n();
  const plans = tList<Plan>('home.pricing.plans');

  const requestQuote = (planName: string) =>
    window.open(
      `https://wa.me/5511947968158?text=${encodeURIComponent(t('home.pricing.waQuote', { plan: planName }))}`,
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
              <p className="eyebrow">{t('home.pricing.eyebrow')}</p>
              <h2 className="display-2 mt-6 text-foreground">{t('home.pricing.title')}</h2>
            </div>
            <p className="text-base text-muted-foreground lg:col-span-5">{t('home.pricing.description')}</p>
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
                      {t('home.pricing.highlightLabel')}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{plan.summary}</p>
                <p className="mt-8 text-base font-semibold text-foreground">{t('home.pricing.priceLabel')}</p>

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
                    {t('home.pricing.ctaQuote')}
                  </ActionButton>
                  {plan.highlight && (
                    <LocaleLink page="services" className="block">
                      <ActionButton variant="quiet" className="w-full">
                        {t('home.pricing.ctaDetails')}
                      </ActionButton>
                    </LocaleLink>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <button type="button" onClick={goToCalculator} className="link-underline text-sm font-semibold">
              {t('home.pricing.ctaCalculator')}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Pricing;
