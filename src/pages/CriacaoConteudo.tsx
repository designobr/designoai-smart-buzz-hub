import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pen, Target, BarChart3, Sparkles, Globe, Image, FileText, Camera, Video, CheckCircle } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const featureIcons = [Pen, Image, Target, Globe, BarChart3, Sparkles];
const typeIcons = [FileText, Pen, Camera, Video];

const CriacaoConteudo = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = tList<{ title: string; description: string }>('subpages.criacaoConteudo.features')
    .map((f, i) => ({ ...f, icon: featureIcons[i] ?? Pen }));
  const contentTypes = tList<{ title: string; description: string }>('subpages.criacaoConteudo.contentTypes')
    .map((c, i) => ({ ...c, icon: typeIcons[i] ?? FileText }));
  const benefits = tList<string>('subpages.criacaoConteudo.benefits');

  return (
    <SubpageLayout
      title={t('subpages.criacaoConteudo.title')}
      subtitle={t('subpages.criacaoConteudo.subtitle')}
      badge={t('subpages.criacaoConteudo.badge')}
      seoPath="/criacao-conteudo"
      seoDescription={t('subpages.criacaoConteudo.seo.description')}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.criacaoConteudo.featuresTitle')}</h2>
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
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.criacaoConteudo.contentTypesTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {contentTypes.map((ct, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="card-surface border-border/50 hover:border-primary/30 transition-all group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"><ct.icon className="w-7 h-7 text-primary" /></div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{ct.title}</h3>
                      <p className="text-muted-foreground">{ct.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.criacaoConteudo.benefitsTitle')}</h2>
          <Card className="card-surface border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{b}</span></li>
                  ))}
                </ul>
                <div className="card-surface rounded-2xl p-8 text-center">
                  <h4 className="text-4xl font-heading font-bold text-foreground mb-2">{t('subpages.criacaoConteudo.benefitsStatNumber')}</h4>
                  <p className="text-muted-foreground">{t('subpages.criacaoConteudo.benefitsStatLabel')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default CriacaoConteudo;
