import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import { useI18n } from '@/i18n/I18nProvider';

type FaqItem = { q: string; a: string };

const FAQ = () => {
  const { t, tList } = useI18n();
  const faqs = tList<FaqItem>('home.faq.items');
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section border-t border-border">
      <div className="container-editorial">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">{t('home.faq.eyebrow')}</p>
            <h2 className="display-2 mt-6 text-foreground">{t('home.faq.title')}</h2>
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
