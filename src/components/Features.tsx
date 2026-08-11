import { ArrowRight, Cpu, FileText, LayoutDashboard, RefreshCw, TrendingUp, Users } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';
import LocaleLink from '@/components/LocaleLink';
import editorialTeam from '@/assets/editorial-team.jpg';
import editorialBrand from '@/assets/editorial-brand.jpg';
import { useI18n } from '@/i18n/I18nProvider';

const iconsOne = [Cpu, Users, TrendingUp];
const iconsTwo = [LayoutDashboard, FileText, RefreshCw];

type Item = { title: string; description: string };

const ItemList = ({ items, icons }: { items: Item[]; icons: typeof iconsOne }) => (
  <ul className="mt-10 space-y-8">
    {items.map((item, i) => {
      const Icon = icons[i] || icons[0];
      return (
        <li key={item.title} className="flex gap-5 border-t border-border pt-8 first:border-t-0 first:pt-0">
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-foreground" strokeWidth={2} />
          <div>
            <h4 className="text-base font-semibold tracking-[-0.02em] text-foreground">{item.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
        </li>
      );
    })}
  </ul>
);

const Features = () => {
  const { t, tList } = useI18n();
  const blockOne = tList<Item>('home.features.blockOne');
  const blockTwo = tList<Item>('home.features.blockTwo');

  return (
    <section id="features" className="section border-t border-border">
      <div className="container-editorial">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{t('home.features.eyebrow')}</p>
            <h2 className="display-2 mt-6 text-foreground">{t('home.features.title')}</h2>
          </div>
        </Reveal>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={editorialTeam}
                alt={t('home.features.imageAlt1')}
                loading="lazy"
                width={1408}
                height={1008}
                className="h-[320px] w-full object-cover md:h-[460px]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <h3 className="text-2xl font-bold tracking-[-0.03em] text-foreground md:text-3xl">
              {t('home.features.subtitle1')}
            </h3>
            <ItemList items={blockOne} icons={iconsOne} />
            <LocaleLink page="recursos" className="mt-10 inline-block">
              <ActionButton variant="secondary">
                {t('home.features.ctaResources')}
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
              </ActionButton>
            </LocaleLink>
          </Reveal>
        </div>

        <div className="mt-24 grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5 lg:order-2">
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={editorialBrand}
                alt={t('home.features.imageAlt2')}
                loading="lazy"
                width={1408}
                height={1008}
                className="h-[320px] w-full object-cover md:h-[460px]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-7 lg:order-1">
            <h3 className="text-2xl font-bold tracking-[-0.03em] text-foreground md:text-3xl">
              {t('home.features.subtitle2')}
            </h3>
            <div className="max-w-xl">
              <ItemList items={blockTwo} icons={iconsTwo} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Features;
