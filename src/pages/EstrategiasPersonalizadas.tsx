import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { serviceSchema } from '@/lib/seo-schemas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Target, Lightbulb } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const icons = [Brain, Target, Lightbulb];

const EstrategiasPersonalizadas = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = tList<{ title: string; description: string }>('subpages.estrategiasPersonalizadas.features')
    .map((f, i) => ({ ...f, icon: icons[i] ?? Brain }));

  return (
    <SubpageLayout
      title={t('subpages.estrategiasPersonalizadas.title')}
      subtitle={t('subpages.estrategiasPersonalizadas.subtitle')}
      badge={t('subpages.estrategiasPersonalizadas.badge')}
      seoPath="/estrategias-personalizadas"
      seoDescription={t('subpages.estrategiasPersonalizadas.seo.description')}
      jsonLd={serviceSchema(t('subpages.estrategiasPersonalizadas.jsonLdTitle'), t('subpages.estrategiasPersonalizadas.jsonLdDescription'), '/estrategias-personalizadas')}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground text-center mb-10">{t('subpages.estrategiasPersonalizadas.sectionTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="card-surface border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors"><f.icon className="w-7 h-7 text-primary" /></div>
                    <CardTitle className="text-lg text-foreground">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center"><p className="text-muted-foreground">{f.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default EstrategiasPersonalizadas;
