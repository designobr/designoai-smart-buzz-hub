import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Brain, MessageSquare, CalendarCheck, XCircle, CheckCircle, ShieldCheck, Target, DollarSign, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { useI18n } from '@/i18n/I18nProvider';

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const processIcons = [Brain, MessageSquare, CalendarCheck];
const benefitIcons = [DollarSign, ShieldCheck, Target];
const chatDelays = [0.3, 0.8, 1.4, 2.0];

const AiSdr = () => {
  const { t, tList } = useI18n();

  const openWhatsApp = () =>
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(t('aiSdr.hero.whatsappMessage'))}`, '_blank');

  const steps = tList<{ title: string; text: string }>('aiSdr.process.steps')
    .map((s, i) => ({ ...s, icon: processIcons[i] ?? Brain, step: `0${i + 1}` }));
  const benefits = tList<{ title: string; text: string }>('aiSdr.benefits.items')
    .map((b, i) => ({ ...b, icon: benefitIcons[i] ?? DollarSign }));
  const chat = tList<{ msg: string; fromBot: boolean }>('aiSdr.demo.chat')
    .map((c, i) => ({ ...c, delay: chatDelays[i] ?? 0.3 }));

  return (
    <>
      <SEOHead
        title={t('aiSdr.seo.title')}
        description={t('aiSdr.seo.description')}
        path="/ai-sdr"
      />
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <FloatingParticle delay={0} x="10%" y="20%" size={6} />
          <FloatingParticle delay={1} x="85%" y="25%" size={4} />
          <FloatingParticle delay={2} x="15%" y="75%" size={5} />
          <FloatingParticle delay={0.5} x="75%" y="65%" size={3} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp()}>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium text-primary mb-8 card-surface bg-card my-[8px]">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('aiSdr.hero.badge')}
              </div>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6">
              <span className="text-foreground">{t('aiSdr.hero.title1')}</span>
              <span className="text-foreground">{t('aiSdr.hero.title2')}</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              {t('aiSdr.hero.subtitle')}
            </motion.p>

            <motion.div {...fadeUp(0.3)}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-6 rounded-xl group transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
                onClick={openWhatsApp}
              >
                {t('aiSdr.hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-secondary" />
          <div className="h-32 bg-secondary" />
        </div>
      </section>

      {/* PROBLEMA vs SOLUÇÃO */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              <span className="text-foreground">{t('aiSdr.problem.title1')}</span>
              <span className="text-foreground">{t('aiSdr.problem.title2')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div {...fadeUp(0.1)} className="card-surface rounded-2xl p-8 border-l-4 border-l-destructive relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-destructive/10">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">{t('aiSdr.problem.oldWay.title')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t('aiSdr.problem.oldWay.text')}</p>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="card-surface rounded-2xl p-8 border-l-4 border-l-primary relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-primary/10">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">{t('aiSdr.problem.newWay.title')}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{t('aiSdr.problem.newWay.text')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 card-surface rounded-full text-sm font-medium text-primary mb-6">
              {t('aiSdr.process.badge')}
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              <span className="text-foreground">{t('aiSdr.process.title1')}</span>
              <span className="text-foreground">{t('aiSdr.process.title2')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.15)} className="card-surface rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group text-center">
                  <div className="text-5xl font-heading font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                    {item.step}
                  </div>
                  <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 card-surface rounded-full text-sm font-medium text-primary mb-8">
              <Zap className="w-4 h-4 mr-2" />
              {t('aiSdr.authority.badge')}
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              <span className="text-foreground">{t('aiSdr.authority.title1')}</span>
              <span className="text-foreground">{t('aiSdr.authority.title2')}</span>
              <span className="text-foreground">{t('aiSdr.authority.title3')}</span>
            </h2>
            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('aiSdr.authority.textHtml') }}
            />
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              <span className="text-foreground">{t('aiSdr.benefits.title1')}</span>
              <span className="text-foreground">{t('aiSdr.benefits.title2')}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} {...fadeUp(i * 0.15)} className="card-surface rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTE AGORA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp()} className="text-center md:text-left">
              <div className="inline-flex items-center px-4 py-2 card-surface rounded-full text-sm font-medium text-primary mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('aiSdr.demo.badge')}
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">{t('aiSdr.demo.title1')}</span>
                <span className="text-foreground">{t('aiSdr.demo.title2')}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                {t('aiSdr.demo.description')}
              </p>
              <a
                href={`https://wa.me/5511978594803?text=${encodeURIComponent(t('aiSdr.demo.waMessage'))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-6 rounded-2xl text-lg font-bold text-primary-foreground bg-primary transition-all duration-300 hover:-translate-y-1 group"
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t('aiSdr.demo.waButtonText')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="flex justify-center relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-[280px] h-[500px] rounded-[3rem] border-2 border-border/50 bg-card/80 overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-10" />
                <div className="h-12 bg-secondary flex items-end px-4 pb-1">
                  <span className="text-muted-foreground text-xs font-medium">{t('aiSdr.demo.botName')}</span>
                </div>
                <div className="p-3 space-y-3 bg-secondary flex-1 h-[calc(100%-3rem)]">
                  {chat.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: item.delay }}
                      className={`max-w-[85%] px-3 py-2 rounded-xl text-xs leading-relaxed bg-background text-muted-foreground ${
                        item.fromBot ? 'rounded-tl-sm mr-auto' : 'rounded-tr-sm ml-auto'
                      }`}
                    >
                      {item.msg}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp()} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">{t('aiSdr.ctaFinal.title1')}</span>
              <span className="text-foreground">{t('aiSdr.ctaFinal.title2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              {t('aiSdr.ctaFinal.description')}
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-5 sm:px-8 py-5 sm:py-7 rounded-xl group transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
              onClick={openWhatsApp}
            >
              {t('aiSdr.ctaFinal.button')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AiSdr;
