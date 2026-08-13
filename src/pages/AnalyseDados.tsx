import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, BarChart3, TrendingUp, Target, Database, Zap } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const icons = [Brain, TrendingUp, Target, BarChart3, Database, Zap];

const AnalyseDados = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const capabilities = tList<{ title: string; description: string }>('subpages.analiseDados.capabilities')
    .map((c, i) => ({ ...c, icon: icons[i] ?? Brain }));
  const predictiveFeatures = tList<string>('subpages.analiseDados.predictiveFeatures');
  const stats = tList<{ num: string; label: string }>('subpages.analiseDados.stats');

  return (
    <SubpageLayout
      title={t('subpages.analiseDados.title')}
      subtitle={t('subpages.analiseDados.subtitle')}
      badge={t('subpages.analiseDados.badge')}
      seoPath="/analise-dados"
      seoDescription={t('subpages.analiseDados.seo.description')}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.analiseDados.capabilitiesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="card-surface border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors"><c.icon className="w-7 h-7 text-primary" /></div>
                    <CardTitle className="text-lg text-foreground">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center"><p className="text-muted-foreground">{c.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.analiseDados.predictiveTitle')}</h2>
          <Card className="card-surface border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {predictiveFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <Brain className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="card-surface rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-1">{s.num}</h3>
                    <p className="text-muted-foreground text-sm">{s.label}</p>
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

export default AnalyseDados;
