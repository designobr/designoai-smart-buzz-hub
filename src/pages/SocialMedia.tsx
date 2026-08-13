import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Target, TrendingUp, Users, BarChart3, MessageCircle, CheckCircle } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const icons = [Sparkles, Target, TrendingUp, Users, BarChart3, MessageCircle];

const SocialMedia = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = tList<{ title: string; description: string }>('subpages.socialMedia.features')
    .map((f, i) => ({ ...f, icon: icons[i] ?? Sparkles }));
  const benefits = tList<string>('subpages.socialMedia.benefits');

  return (
    <SubpageLayout
      title={t('subpages.socialMedia.title')}
      subtitle={t('subpages.socialMedia.subtitle')}
      badge={t('subpages.socialMedia.badge')}
      seoPath="/social-media"
      seoDescription={t('subpages.socialMedia.seo.description')}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.socialMedia.featuresTitle')}</h2>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.socialMedia.resultsTitle')}</h2>
          <Card className="card-surface border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{b}</span></li>
                  ))}
                </ul>
                <div className="card-surface rounded-2xl p-8 text-center">
                  <h4 className="text-4xl font-heading font-bold text-foreground mb-2">{t('subpages.socialMedia.statNumber')}</h4>
                  <p className="text-muted-foreground">{t('subpages.socialMedia.statLabel')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default SocialMedia;
