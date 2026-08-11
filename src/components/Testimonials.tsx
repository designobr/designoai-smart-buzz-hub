import Reveal from '@/components/Reveal';
import { useI18n } from '@/i18n/I18nProvider';

type Testimonial = { content: string; author: string; role: string };

const Testimonials = () => {
  const { t, tList } = useI18n();
  const testimonials = tList<Testimonial>('home.testimonials.items');

  return (
    <section className="section border-t border-border">
      <div className="container-editorial">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{t('home.testimonials.eyebrow')}</p>
            <h2 className="display-2 mt-6 text-foreground">{t('home.testimonials.title')}</h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} delay={i * 0.06}>
              <figure className="card-surface card-surface-hover flex h-full flex-col p-10">
                <blockquote className="flex-1 text-lg tracking-[-0.02em] text-foreground">
                  “{item.content}”
                </blockquote>
                <figcaption className="mt-10 border-t border-border pt-6">
                  <p className="text-sm font-semibold text-foreground">{item.author}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
