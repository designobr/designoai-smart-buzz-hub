// Página pública dos planos do DesignoAI Social Automation. Só apresenta valores e limites: a contratação é por "Fale conosco" (WhatsApp).
// Não há ligação com cobrança nem com a lista de planos do motor (os planos seguem privados até a liberação).
import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SubpageLayout from '@/components/SubpageLayout';
import { useI18n } from '@/i18n/I18nProvider';

const WHATSAPP = 'https://wa.me/5511947968158'; // o mesmo número do restante do site

interface Plan { name: string; price: string; highlight: boolean; features: string[] }

const PlanosSocial = () => {
  const { t, tList } = useI18n();
  const plans = tList<Plan>('planosSocial.plans');
  const included = tList<string>('planosSocial.included');
  const abrir = (texto: string) => window.open(`${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener,noreferrer');

  return (
    <SubpageLayout
      title={t('planosSocial.seo.title')}
      subtitle={t('planosSocial.hero.subtitle')}
      seoPath="/planos-social-automation"
      seoDescription={t('planosSocial.seo.description')}
      badge={t('planosSocial.hero.badge')}
    >
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`card-surface flex h-full flex-col p-8 md:p-10 ${plan.highlight ? 'border-foreground/20' : ''}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-2xl font-bold tracking-[-0.03em] text-foreground">{plan.name}</h2>
                  {plan.highlight && (
                    <span className="rounded-full border border-border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t('planosSocial.highlightLabel')}
                    </span>
                  )}
                </div>
                <p className="mt-6 text-4xl font-bold tracking-tight text-foreground">
                  {plan.price}<span className="ml-1 text-base font-medium text-muted-foreground">{t('planosSocial.period')}</span>
                </p>
                <ul className="mt-8 flex-1 space-y-4 border-t border-border pt-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" strokeWidth={2} />{f}
                    </li>
                  ))}
                </ul>
                <Button className="mt-10 w-full rounded-full" variant={plan.highlight ? 'default' : 'outline'} onClick={() => abrir(t('planosSocial.waMessage', { plan: plan.name }))}>
                  <MessageCircle className="mr-2 h-4 w-4" />{t('planosSocial.cta')}
                </Button>
              </motion.article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">{t('planosSocial.soon')}</p>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{t('planosSocial.includedTitle')}</h2>
            <ul className="mt-6 space-y-3">
              {included.map((x) => (
                <li key={x} className="flex gap-3 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" strokeWidth={2} />{x}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">{t('planosSocial.noteTitle')}</h2>
            <p className="mt-6 text-sm text-muted-foreground">{t('planosSocial.note')}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{t('planosSocial.final.title')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">{t('planosSocial.final.text')}</p>
          <Button className="mt-8 rounded-full" onClick={() => abrir(t('planosSocial.final.waMessage'))}>
            <MessageCircle className="mr-2 h-4 w-4" />{t('planosSocial.cta')}
          </Button>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default PlanosSocial;
