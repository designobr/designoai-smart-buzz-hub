import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/i18n/I18nProvider';

interface ServiceVideoSectionProps {
  translationKey: string;
  src: string;
  compatibleSrc: string;
  poster: string;
  id: string;
}

const ServiceVideoSection = ({ translationKey, src, compatibleSrc, poster, id }: ServiceVideoSectionProps) => {
  const { t } = useI18n();

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-y border-border bg-secondary/40 py-16 md:py-20">
      <div className="container mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-medium text-muted-foreground">{t(`${translationKey}.badge`)}</p>
          <h2 id={`${id}-title`} className="mb-6 text-3xl font-heading font-semibold text-foreground md:text-4xl">{t(`${translationKey}.title`)}</h2>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{t(`${translationKey}.description`)}</p>
          <Button asChild size="lg" className="h-auto max-w-full whitespace-normal px-6 py-4 text-center">
            <a href={`https://wa.me/5511947968158?text=${encodeURIComponent(t(`${translationKey}.whatsappMessage`))}`} target="_blank" rel="noopener noreferrer">
              {t(`${translationKey}.cta`)}
              <ArrowUpRight className="ml-2 h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          </Button>
        </div>
        <figure className="mx-auto w-full max-w-[320px]">
          <video poster={poster} controls playsInline preload="metadata" aria-label={t(`${translationKey}.videoLabel`)} className="aspect-[9/16] w-full rounded-2xl border border-border bg-secondary object-contain">
            <source src={src} type='video/mp4; codecs="avc1.640028, mp4a.40.2"' />
            <source src={compatibleSrc} type="video/webm" />
            <a href={src}>{t(`${translationKey}.videoLabel`)}</a>
          </video>
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">{t(`${translationKey}.caption`)}</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ServiceVideoSection;