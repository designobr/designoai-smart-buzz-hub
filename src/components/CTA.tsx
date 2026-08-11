import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';
import { useI18n } from '@/i18n/I18nProvider';

const CTA = () => {
  const { t } = useI18n();

  const goToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const talkToSpecialist = () =>
    window.open(
      'https://wa.me/5511947968158?text=' + encodeURIComponent(t('home.cta.waMessage')),
      '_blank'
    );

  return (
    <section className="section border-t border-border">
      <div className="container-editorial">
        <Reveal>
          <div className="card-surface px-8 py-16 text-center md:px-20 md:py-24">
            <p className="eyebrow">{t('home.cta.eyebrow')}</p>
            <h2 className="display-2 mx-auto mt-6 max-w-3xl text-foreground">{t('home.cta.title')}</h2>
            <p className="lead mx-auto mt-6 max-w-xl">{t('home.cta.description')}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ActionButton onClick={goToContact}>
                {t('home.cta.ctaPrimary')}
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
              </ActionButton>
              <ActionButton variant="secondary" onClick={talkToSpecialist}>
                {t('home.cta.ctaSecondary')}
              </ActionButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
