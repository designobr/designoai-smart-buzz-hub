import { ArrowUpRight, BarChart3, Brain, PenTool, Share2, Sparkles, Zap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import LocaleLink from '@/components/LocaleLink';
import { useI18n } from '@/i18n/I18nProvider';
import type { PageKey } from '@/i18n/routes';

const icons = [Sparkles, BarChart3, PenTool, Share2, Zap, Brain];

const Services = () => {
  const { t, tList } = useI18n();
  const services = tList<{ title: string; description: string; page: PageKey }>('home.services.items');

  return (
    <section id="services" className="section">
      <div className="container-editorial">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">{t('home.services.eyebrow')}</p>
              <h2 className="display-2 mt-6 text-foreground">{t('home.services.title')}</h2>
            </div>
            <p className="text-base text-muted-foreground lg:col-span-5">{t('home.services.description')}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i] || Sparkles;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <LocaleLink page={s.page} className="group block h-full">
                   <article className="card-surface card-surface-hover relative flex h-full cursor-pointer flex-col overflow-hidden p-10">
                     <div className="flex h-24 items-end overflow-hidden rounded-2xl border border-border bg-secondary p-5 transition-colors duration-300 group-hover:bg-foreground">
                       <Icon className="h-7 w-7 text-foreground transition-colors duration-300 group-hover:text-primary-foreground" strokeWidth={1.75} />
                       <span className="ml-auto text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
                         {String(i + 1).padStart(2, '0')}
                       </span>
                     </div>
                     <h3 className="mt-7 text-xl font-bold text-foreground">{s.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.description}</p>
                     <span className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-foreground">
                      {t('home.services.learnMore')}
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-[220ms] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2}
                      />
                    </span>
                  </article>
                </LocaleLink>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <LocaleLink page="services" className="link-underline text-sm font-semibold">
              {t('home.services.seeAll')}
            </LocaleLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
