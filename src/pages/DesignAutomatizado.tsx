import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { serviceSchema } from '@/lib/seo-schemas';
import { Button } from '@/components/ui/button';
import LocaleLink from '@/components/LocaleLink';
import { ArrowRight, PenTool, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';

const icons = [PenTool, Palette, Zap];

const DesignAutomatizado = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = tList<{ title: string; description: string }>('subpages.designAutomatizado.features')
    .map((f, i) => ({ ...f, icon: icons[i] ?? PenTool }));

  return (
    <SubpageLayout
      title={t('subpages.designAutomatizado.title')}
      subtitle={t('subpages.designAutomatizado.subtitle')}
      badge={t('subpages.designAutomatizado.badge')}
      seoPath="/design-automatizado"
      seoDescription={t('subpages.designAutomatizado.seo.description')}
      jsonLd={serviceSchema(t('subpages.designAutomatizado.jsonLdTitle'), t('subpages.designAutomatizado.jsonLdDescription'), '/design-automatizado')}
    >
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground text-center mb-10">{t('subpages.designAutomatizado.sectionTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-surface rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <LocaleLink page="home" hash="#contact">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                {t('subpages.designAutomatizado.ctaLabel')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </LocaleLink>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default DesignAutomatizado;
