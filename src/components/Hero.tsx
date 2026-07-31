import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ActionButton from '@/components/ActionButton';
import heroStudio from '@/assets/hero-studio.jpg';

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-[128px] md:pt-[168px]">
      <div className="container-editorial">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <p className="eyebrow">Estúdio de marketing e design</p>
            <h1 className="display-1 mt-6 text-foreground">
              Marcas construídas com clareza, método e inteligência.
            </h1>
            <p className="lead mt-7 max-w-xl">
              Estratégia, identidade visual e crescimento digital para empresas que querem parecer
              e operar no seu melhor nível.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ActionButton onClick={() => scrollTo('contact')}>
                Solicitar proposta
                <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
              </ActionButton>
              <ActionButton variant="secondary" onClick={() => scrollTo('services')}>
                Ver serviços
              </ActionButton>
            </div>

            <dl className="mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-border pt-8">
              {[
                { k: '500+', v: 'Projetos entregues' },
                { k: 'Especialistas', v: 'Design, tecnologia e IA aplicada a negócios' },
                { k: '4.9/5', v: 'Satisfação média' },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-2xl font-bold tracking-[-0.03em] text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-secondary">
              <img
                src={heroStudio}
                alt="Mesa de trabalho de um estúdio de design com luz natural"
                width={1280}
                height={1600}
                className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
