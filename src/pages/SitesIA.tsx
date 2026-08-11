
import { motion } from 'framer-motion';
import { Zap, Gem, Target, Palette, Rocket, Settings, Check, MessageCircle, ArrowRight, Search, Shield, Globe, Mail, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SubpageLayout from '@/components/SubpageLayout';
import { useI18n } from '@/i18n/I18nProvider';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const advantageIcons = [Zap, Gem, Target, Palette, Rocket, Settings];
const deliverableIcons = [Globe, Mail, Shield, MessageCircle, Search, Smartphone];

interface Advantage { title: string; description: string; }
interface Step { number: string; title: string; description: string; }
interface Deliverable { text: string; }
interface DiffItem { label: string; sub: string; }

const SitesIA = () => {
  const { t, tList } = useI18n();

  const audiences = tList<string>('sitesIa.audience.items');
  const painPoints = tList<string>('sitesIa.audience.painPoints');
  const advantages = tList<Advantage>('sitesIa.advantages.items');
  const steps = tList<Step>('sitesIa.process.steps');
  const deliverables = tList<Deliverable>('sitesIa.deliverables.items');
  const diffItems = tList<DiffItem>('sitesIa.differentiator.items');

  const handleWhatsApp = () => {
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(t('sitesIa.ctaFinal.whatsappMessage'))}`, '_blank');
  };

  return (
    <SubpageLayout
      title={t('sitesIa.seo.title')}
      subtitle={t('sitesIa.hero.subtitle')}
      seoPath="/sites-ia"
      seoDescription={t('sitesIa.seo.description')}
      badge={t('sitesIa.hero.badge')}
    >
      {/* Why you need a site */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
 className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">{t('sitesIa.whyNeed.title1')}</span>
                <span className="text-foreground">{t('sitesIa.whyNeed.title2')}</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="card-surface rounded-2xl p-8 md:p-10 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('sitesIa.whyNeed.p1Html') }} />
              <p className="text-muted-foreground text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('sitesIa.whyNeed.p2Html') }} />
              <p className="text-muted-foreground text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('sitesIa.whyNeed.p3Html') }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-5xl mx-auto">
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 card-surface rounded-full text-sm font-medium text-primary mb-6">
                {t('sitesIa.audience.badge')}
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">{t('sitesIa.audience.title1')}</span>
                <span className="text-foreground">{t('sitesIa.audience.title2')}</span>
              </h2>
              <p className="text-muted-foreground text-lg" dangerouslySetInnerHTML={{ __html: t('sitesIa.audience.subtitleHtml') }} />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {audiences.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i * 0.5}
 className="card-surface rounded-xl p-4 flex items-start gap-3 group hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300"
                >
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Pain points */}
            <motion.div variants={fadeUp} custom={5} className="card-surface rounded-2xl p-8 md:p-10">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                {t('sitesIa.audience.painTitle')}
              </h3>
              <div className="space-y-3">
                {painPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg font-semibold text-primary">
                {t('sitesIa.audience.painFooter')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 card-surface rounded-full text-sm font-medium text-primary mb-6">
                {t('sitesIa.advantages.badge')}
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                <span className="text-foreground">{t('sitesIa.advantages.title1')}</span>
                <span className="text-foreground">{t('sitesIa.advantages.title2')}</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {advantages.map((adv, i) => {
                const Icon = advantageIcons[i];
                return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
 className="card-surface rounded-2xl p-6 group hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.description}</p>
                </motion.div>
              );})}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 card-surface rounded-full text-sm font-medium text-primary mb-6">
                {t('sitesIa.process.badge')}
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">{t('sitesIa.process.title1')}</span>
                <span className="text-foreground">{t('sitesIa.process.title2')}</span>
              </h2>
              <p className="text-muted-foreground text-lg">{t('sitesIa.process.subtitle')}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
 className="card-surface rounded-2xl p-6 group hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl font-heading font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 card-surface rounded-full text-sm font-medium text-primary mb-6">
                {t('sitesIa.deliverables.badge')}
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">{t('sitesIa.deliverables.title1')}</span>
                <span className="text-foreground">{t('sitesIa.deliverables.title2')}</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: t('sitesIa.deliverables.subtitleHtml') }} />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {deliverables.map((item, i) => {
                const Icon = deliverableIcons[i];
                return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
 className="card-surface rounded-2xl p-6 flex items-start gap-4 group hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">{item.text}</span>
                </motion.div>
              );})}
            </div>

            <motion.p variants={fadeUp} custom={6} className="text-center text-lg text-primary font-semibold mt-10">
              {t('sitesIa.deliverables.footer')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
 className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} custom={0} className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                <span className="text-foreground">{t('sitesIa.differentiator.title1')}</span>
                <span className="text-foreground">{t('sitesIa.differentiator.title2')}</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="card-surface rounded-2xl p-8 md:p-10 space-y-6 text-center">
              <p className="text-muted-foreground text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t('sitesIa.differentiator.p1Html') }} />
              <div className="grid md:grid-cols-3 gap-6 py-4">
                {diffItems.map((item, i) => (
                  <div key={i} className="card-surface rounded-xl p-5">
                    <p className="text-foreground font-semibold mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.sub}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-foreground font-medium" dangerouslySetInnerHTML={{ __html: t('sitesIa.differentiator.p2Html') }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-secondary" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
 className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">{t('sitesIa.ctaFinal.title1')}</span>
              <span className="text-foreground">{t('sitesIa.ctaFinal.title2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('sitesIa.ctaFinal.descriptionHtml') }} />

            <Button
              size="lg"
 className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 h-auto"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t('sitesIa.ctaFinal.button')}
            </Button>

            <p className="text-sm text-muted-foreground mt-6" dangerouslySetInnerHTML={{ __html: t('sitesIa.ctaFinal.noteHtml') }} />
          </motion.div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default SitesIA;
