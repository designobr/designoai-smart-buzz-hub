import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Button } from '@/components/ui/button';
import LocaleLink from '@/components/LocaleLink';
import { ArrowRight, Sparkles, Star, BarChart3, Zap, PenTool, Share2, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';
import type { PageKey } from '@/i18n/routes';

const icons = [Sparkles, BarChart3, Zap, BarChart3, Star, Share2, PenTool, MessageCircle];

const Recursos = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = tList<{ title: string; description: string; page: PageKey }>('subpages.recursos.features')
    .map((f, i) => ({ ...f, icon: icons[i] ?? Sparkles }));

  return (
    <SubpageLayout
      title={t('subpages.recursos.title')}
      subtitle={t('subpages.recursos.subtitle')}
      badge={t('subpages.recursos.badge')}
      seoPath="/recursos"
      seoDescription={t('subpages.recursos.seo.description')}
    >
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground text-center mb-10">{t('subpages.recursos.sectionTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <LocaleLink page={feature.page} hash={feature.page === 'home' ? '#contact' : ''} className="block group">
                    <div className="card-surface rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </LocaleLink>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <LocaleLink page="home" hash="#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                {t('subpages.recursos.ctaLabel')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </LocaleLink>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default Recursos;
