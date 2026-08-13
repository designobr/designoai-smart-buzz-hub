import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, Target, BarChart3, Clock, Zap } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const icons = [Mail, Users, Clock, Target, BarChart3, Zap];

const EmailMarketing = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = tList<{ title: string; description: string }>('subpages.emailMarketing.features')
    .map((f, i) => ({ ...f, icon: icons[i] ?? Mail }));
  const automationTypes = tList<string>('subpages.emailMarketing.automationTypes');

  return (
    <SubpageLayout
      title={t('subpages.emailMarketing.title')}
      subtitle={t('subpages.emailMarketing.subtitle')}
      badge={t('subpages.emailMarketing.badge')}
      seoPath="/email-marketing"
      seoDescription={t('subpages.emailMarketing.seo.description')}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.emailMarketing.featuresTitle')}</h2>
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
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.emailMarketing.automationTitle')}</h2>
          <Card className="card-surface border-border/50">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground text-center mb-8">{t('subpages.emailMarketing.automationDescription')}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {automationTypes.map((a, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{a}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default EmailMarketing;
