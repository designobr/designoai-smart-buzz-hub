
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, ArrowRight, Smartphone, Camera, Brain, Star, MessageCircle, Zap, BarChart3, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SEOHead from '@/components/SEOHead';
import PremiumHero from '@/components/PremiumHero';
import { useI18n } from '@/i18n/I18nProvider';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

interface ServiceItem {
  title: string;
  description?: string;
  features: string[];
}

interface ExtraServiceItem {
  name: string;
  price: string;
}

const Services = () => {
  const { t, tList, path } = useI18n();

  useEffect(() => {window.scrollTo(0, 0);}, []);

  const digitalIcons = [
    <Globe className="w-5 h-5" />,
    <BarChart3 className="w-5 h-5" />,
    <Smartphone className="w-5 h-5" />,
    <Sparkles className="w-5 h-5" />,
  ];

  const digitalServices = tList<ServiceItem>('servicesPage.digital.services');
  const physicalServices = tList<ServiceItem>('servicesPage.physical.services');
  const aiServices = tList<ServiceItem>('servicesPage.ai.services');
  const additionalServices = tList<ExtraServiceItem>('servicesPage.extras.services');
  const guarantees = tList<string>('servicesPage.ctaBlock.guarantees');

  const handleConsultationClick = () => {
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(t('servicesPage.wa.consultation'))}`, '_blank');
  };

  const handleStartClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSpecialistClick = () => {
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(t('servicesPage.wa.specialist'))}`, '_blank');
  };

  const ServiceCard = ({ icon, title, description, features, index }: {icon?: React.ReactNode;title: string;description?: string;features: string[];index: number;}) =>
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
 className="card-surface rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-4">
        {icon &&
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
      }
        <h3 className="text-lg font-heading font-semibold text-foreground">{title}</h3>
      </div>
      {description && <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{description}</p>}
      <ul className="space-y-2.5">
        {features.map((feature, i) =>
      <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            {feature}
          </li>
      )}
      </ul>
    </motion.div>;

  const TabHeader = ({ icon, title, subtitle }: {icon: React.ReactNode;title: string;subtitle: string;}) =>
  <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t('servicesPage.seo.title')}
        description={t('servicesPage.seo.description')}
        path="/servicos"
      />
      <Navbar />

      <PremiumHero
        badge={t('servicesPage.hero.badge')}
        title={t('servicesPage.hero.title')}
        titleGradient={t('servicesPage.hero.titleGradient')}
        subtitle={t('servicesPage.hero.subtitle')}
        ctaLabel={t('servicesPage.hero.cta')}
        ctaHref={`https://wa.me/5511947968158?text=${encodeURIComponent(t('servicesPage.wa.consultation'))}`}
      />

      {/* Tabs Content */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="digital" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12 h-12">
              <TabsTrigger value="digital" className="text-xs sm:text-sm">
                <Smartphone className="w-4 h-4 mr-1.5 hidden sm:inline-block" />
                {t('servicesPage.tabs.digital')}
              </TabsTrigger>
              <TabsTrigger value="physical" className="text-xs sm:text-sm">
                <Camera className="w-4 h-4 mr-1.5 hidden sm:inline-block" />
                {t('servicesPage.tabs.physical')}
              </TabsTrigger>
              <TabsTrigger value="ai" className="text-xs sm:text-sm">
                <Brain className="w-4 h-4 mr-1.5 hidden sm:inline-block" />
                {t('servicesPage.tabs.ai')}
              </TabsTrigger>
              <TabsTrigger value="extras" className="text-xs sm:text-sm">
                <Star className="w-4 h-4 mr-1.5 hidden sm:inline-block" />
                {t('servicesPage.tabs.extras')}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="digital">
              <TabHeader icon={<Smartphone className="w-6 h-6" />} title={t('servicesPage.digital.heading')} subtitle={t('servicesPage.digital.subtitle')} />
              <div className="grid md:grid-cols-2 gap-5 mb-16">
                {digitalServices.map((s, i) =>
                <ServiceCard key={i} index={i} icon={digitalIcons[i]} title={s.title} description={s.description} features={s.features} />
                )}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
 className="card-surface rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                    <span className="text-foreground">{t('servicesPage.ctaBlock.titleLine1')}</span>
                    <span className="text-foreground">{t('servicesPage.ctaBlock.titleLine2')}</span>
                    <br />
                    <span className="text-foreground">{t('servicesPage.ctaBlock.titleLine3')}</span>
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                    {t('servicesPage.ctaBlock.description')}
                    <span className="block mt-2 text-foreground font-medium">
                      {t('servicesPage.ctaBlock.highlight')}
                    </span>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group" onClick={handleStartClick}>
                      {t('servicesPage.ctaBlock.startButton')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-border hover:bg-surface-elevated text-destructive-foreground" onClick={handleSpecialistClick}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {t('servicesPage.ctaBlock.specialistButton')}
                    </Button>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {guarantees.map((text, i) =>
                    <div key={i} className="flex items-center justify-center text-sm text-muted-foreground gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {text}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="physical">
              <TabHeader icon={<Camera className="w-6 h-6" />} title={t('servicesPage.physical.heading')} subtitle={t('servicesPage.physical.subtitle')} />
              <div className="grid md:grid-cols-2 gap-5">
                {physicalServices.map((s, i) =>
                <ServiceCard key={i} index={i} title={s.title} features={s.features} />
                )}
              </div>
            </TabsContent>

            <TabsContent value="ai">
              <TabHeader icon={<Brain className="w-6 h-6" />} title={t('servicesPage.ai.heading')} subtitle={t('servicesPage.ai.subtitle')} />
              <div className="grid md:grid-cols-2 gap-5">
                {aiServices.map((s, i) =>
                <ServiceCard key={i} index={i} title={s.title} features={s.features} />
                )}
              </div>
            </TabsContent>

            <TabsContent value="extras">
              <TabHeader icon={<Star className="w-6 h-6" />} title={t('servicesPage.extras.heading')} subtitle={t('servicesPage.extras.subtitle')} />
              <div className="grid sm:grid-cols-2 gap-4">
                {additionalServices.map((s, i) =>
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
 className="card-surface rounded-xl p-5 flex items-center justify-between hover:border-primary/20 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-foreground">{s.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary whitespace-nowrap ml-4">{s.price}</span>
                  </motion.div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
 className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">{t('servicesPage.bottomCta.titleLine1')}</span>
              <span className="text-foreground">{t('servicesPage.bottomCta.titleLine2')}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('servicesPage.bottomCta.subtitle')}
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group" onClick={handleConsultationClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              {t('servicesPage.bottomCta.button')}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);
};

export default Services;
