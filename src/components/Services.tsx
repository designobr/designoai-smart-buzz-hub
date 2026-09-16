import { BarChart3, Brain, PenTool, Share2, Sparkles, Zap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import LocaleLink from '@/components/LocaleLink';
import ServiceEditorialCard from '@/components/ServiceEditorialCard';
import { useI18n } from '@/i18n/I18nProvider';
import type { PageKey } from '@/i18n/routes';
import editorialBrand from '@/assets/editorial-brand.jpg';
import editorialTeam from '@/assets/editorial-team.jpg';
import studioExample5 from '@/assets/studio/example-5.png';
import studioExample6 from '@/assets/studio/example-6.png';
import studioExample7 from '@/assets/studio/example-7.png';
import studioExample8 from '@/assets/studio/example-8.png';

const icons = [Sparkles, BarChart3, PenTool, Share2, Zap, Brain];
const serviceImages = [
  editorialBrand,
  editorialTeam,
  studioExample5,
  studioExample6,
  studioExample7,
  studioExample8,
];

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
            const image = serviceImages[i] || editorialBrand;
            return (
              <Reveal key={s.title} delay={i * 0.06}>
                <ServiceEditorialCard
                  page={s.page}
                  image={image}
                  icon={Icon}
                  number={String(i + 1).padStart(2, '0')}
                  title={s.title}
                  description={s.description}
                  actionLabel={t('home.services.learnMore')}
                />
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
