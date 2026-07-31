import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Analisamos mercado, concorrência e o estado atual da sua marca.',
  },
  {
    number: '02',
    title: 'Estratégia',
    description: 'Definimos posicionamento, prioridades e metas mensuráveis.',
  },
  {
    number: '03',
    title: 'Produção',
    description: 'Criamos conteúdo, design e materiais dentro de um sistema único.',
  },
  {
    number: '04',
    title: 'Distribuição',
    description: 'Publicamos, acompanhamos e refinamos com base em dados.',
  },
];

const HowItWorks = () => {
  const goToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="section border-t border-border">
      <div className="container-editorial">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">Processo</p>
              <h2 className="display-2 mt-6 text-foreground">Quatro etapas, sem etapas invisíveis.</h2>
            </div>
            <p className="text-base text-muted-foreground lg:col-span-5">
              Você acompanha cada fase com escopo, prazo e responsável definidos desde o início.
            </p>
          </div>
        </Reveal>

        <ol className="mt-16 border-t border-border">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.06}>
              <li className="group grid gap-6 border-b border-border py-10 md:grid-cols-12 md:items-baseline md:py-12">
                <span className="text-sm font-semibold text-muted-foreground md:col-span-2">{step.number}</span>
                <h3 className="text-2xl font-bold tracking-[-0.03em] text-foreground md:col-span-4">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground md:col-span-6">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <ActionButton onClick={goToContact}>Iniciar um projeto</ActionButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;
