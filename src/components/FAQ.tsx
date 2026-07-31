import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '@/components/Reveal';

const faqs = [
  {
    q: 'Como funciona o início de um projeto?',
    a: 'Começamos com uma conversa de diagnóstico, seguida de uma proposta com escopo, cronograma e investimento. Aprovada a proposta, a produção inicia em até cinco dias úteis.',
  },
  {
    q: 'Existe contrato de fidelidade?',
    a: 'Não. Trabalhamos com ciclos mensais renováveis. Você permanece porque os resultados justificam, não porque um contrato obriga.',
  },
  {
    q: 'Quem cuida do meu projeto no dia a dia?',
    a: 'Cada cliente tem um responsável de conta e uma equipe fixa de criação. Você fala sempre com quem executa.',
  },
  {
    q: 'Vocês atendem empresas de qualquer segmento?',
    a: 'Atendemos negócios de serviços, varejo, saúde, educação, tecnologia e indústria. Se não fizer sentido para o seu caso, dizemos isso na primeira conversa.',
  },
  {
    q: 'Como o desempenho é acompanhado?',
    a: 'Você recebe relatórios periódicos com indicadores de alcance, engajamento e conversão, além de recomendações para o ciclo seguinte.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section border-t border-border">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="display-2 mt-6 text-foreground">Tudo transparente, desde o início.</h2>
          </Reveal>

          <div className="lg:col-span-8">
            <dl className="border-t border-border">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={item.q} delay={i * 0.04}>
                    <div className="border-b border-border">
                      <dt>
                        <button
                          type="button"
                          onClick={() => setOpen(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className="flex w-full items-start justify-between gap-8 py-8 text-left"
                        >
                          <span className="text-lg font-semibold tracking-[-0.02em] text-foreground">
                            {item.q}
                          </span>
                          {isOpen ? (
                            <Minus className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={2} />
                          ) : (
                            <Plus className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={2} />
                          )}
                        </button>
                      </dt>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.dd
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-2xl pb-8 text-base text-muted-foreground">{item.a}</p>
                          </motion.dd>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
