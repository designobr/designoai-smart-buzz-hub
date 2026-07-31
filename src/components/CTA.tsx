import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';

const CTA = () => {
  const goToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const talkToSpecialist = () =>
    window.open(
      'https://wa.me/5511947968158?text=' +
        encodeURIComponent('Olá! Gostaria de falar com um especialista da DesignoAI.'),
      '_blank'
    );

  return (
    <section className="section border-t border-border">
      <div className="container-editorial">
        <Reveal>
          <div className="card-surface px-8 py-16 text-center md:px-20 md:py-24">
            <p className="eyebrow">Próximo passo</p>
            <h2 className="display-2 mx-auto mt-6 max-w-3xl text-foreground">
              Pronto para elevar o padrão da sua marca?
            </h2>
            <p className="lead mx-auto mt-6 max-w-xl">
              Mais de 500 empresas já reorganizaram sua presença digital com a DesignoAI.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <ActionButton onClick={goToContact}>
                Solicitar proposta
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
              </ActionButton>
              <ActionButton variant="secondary" onClick={talkToSpecialist}>
                Falar com especialista
              </ActionButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
