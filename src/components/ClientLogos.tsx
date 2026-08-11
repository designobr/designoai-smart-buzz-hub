import Reveal from '@/components/Reveal';
import { useI18n } from '@/i18n/I18nProvider';

const ClientLogos = () => {
  const { t, tList } = useI18n();
  const segments = tList<string>('home.clientLogos.segments');

  return (
    <section className="pt-24 md:pt-[112px]">
      <div className="container-editorial">
        <Reveal>
          <p className="eyebrow">{t('home.clientLogos.eyebrow')}</p>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <div className="mt-8 overflow-hidden border-y border-border py-6">
          <div className="marquee-track">
            {[...segments, ...segments].map((segment, i) => (
              <span
                key={`${segment}-${i}`}
                className="mx-6 whitespace-nowrap text-sm text-muted-foreground"
              >
                {segment}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ClientLogos;
