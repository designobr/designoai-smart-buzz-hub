import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { serviceSchema } from '@/lib/seo-schemas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Target, TrendingUp, BarChart3, Zap, Globe, Link, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const featureIcons = [Search, Target, TrendingUp, Zap, Link, BarChart3];
const technicalIcons = [Shield, Globe, Clock, Users];

const SEOInteligente = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = tList<{ title: string; description: string }>('subpages.seoInteligente.features')
    .map((f, i) => ({ ...f, icon: featureIcons[i] ?? Search }));
  const technicalFeatures = tList<{ title: string; description: string }>('subpages.seoInteligente.technicalFeatures')
    .map((f, i) => ({ ...f, icon: technicalIcons[i] ?? Shield }));
  const results = tList<string>('subpages.seoInteligente.results');
  const resultStats = tList<{ num: string; label: string }>('subpages.seoInteligente.resultStats');

  return (
    <SubpageLayout
      title={t('subpages.seoInteligente.title')}
      subtitle={t('subpages.seoInteligente.subtitle')}
      badge={t('subpages.seoInteligente.badge')}
      seoPath="/seo-inteligente"
      seoDescription={t('subpages.seoInteligente.seo.description')}
      jsonLd={serviceSchema(t('subpages.seoInteligente.jsonLdTitle'), t('subpages.seoInteligente.jsonLdDescription'), '/seo-inteligente')}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.seoInteligente.featuresTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
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

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.seoInteligente.technicalTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalFeatures.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="card-surface border-border/50 hover:border-primary/30 transition-all group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"><f.icon className="w-7 h-7 text-primary" /></div>
                    <div><h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3><p className="text-muted-foreground">{f.description}</p></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.seoInteligente.resultsTitle')}</h2>
          <Card className="card-surface border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-4">
                  {results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{r}</span></li>
                  ))}
                </ul>
                <div className="space-y-4">
                  {resultStats.map((s, i) => (
                    <div key={i} className="card-surface rounded-2xl p-6 text-center">
                      <h4 className="text-3xl font-heading font-bold text-foreground mb-1">{s.num}</h4>
                      <p className="text-muted-foreground text-sm">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default SEOInteligente;
