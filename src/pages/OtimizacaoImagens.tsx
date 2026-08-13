import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Zap, TrendingUp, Star, Target, CheckCircle, AlertTriangle, Smartphone } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const problemIcons = [AlertTriangle, Smartphone, Target];
const problemColors = ['text-destructive', 'text-destructive', 'text-primary'];
const benefitIcons = [TrendingUp, Star, Target, Zap];

const OtimizacaoImagens = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleWhatsAppClick = () => openWhatsApp(t('subpages.otimizacaoImagens.whatsappMessage'));
  const handleConsultorClick = () => openWhatsApp(t('subpages.otimizacaoImagens.consultorMessage'));

  const problems = tList<{ title: string; description: string }>('subpages.otimizacaoImagens.problems')
    .map((p, i) => ({ ...p, icon: problemIcons[i] ?? AlertTriangle, color: problemColors[i] ?? 'text-primary' }));
  const benefitsCards = tList<{ title: string; description: string }>('subpages.otimizacaoImagens.benefits')
    .map((b, i) => ({ ...b, icon: benefitIcons[i] ?? TrendingUp }));
  const solutionSteps = tList<string>('subpages.otimizacaoImagens.solutionSteps');
  const packageFeatures = tList<string>('subpages.otimizacaoImagens.packageFeatures');

  return (
    <SubpageLayout
      title={t('subpages.otimizacaoImagens.title')}
      subtitle={t('subpages.otimizacaoImagens.subtitle')}
      badge={t('subpages.otimizacaoImagens.badge')}
      seoPath="/otimizacao-imagens"
      seoDescription={t('subpages.otimizacaoImagens.seo.description')}
    >
      {/* Problems */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-4 text-foreground">{t('subpages.otimizacaoImagens.problemsTitle')}</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">{t('subpages.otimizacaoImagens.problemsSubtitle')}</p>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="card-surface border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-destructive/10 w-fit"><p.icon className={`w-7 h-7 ${p.color}`} /></div>
                    <CardTitle className="text-lg text-foreground">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center"><p className="text-muted-foreground text-sm">{p.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-destructive/10 border border-destructive/20">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-semibold text-sm">{t('subpages.otimizacaoImagens.problemsBanner')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="card-surface rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">{t('subpages.otimizacaoImagens.solutionTitle')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('subpages.otimizacaoImagens.solutionDescription')}</p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 border border-primary/30 mb-8">
              <span className="text-2xl font-bold text-primary">{t('subpages.otimizacaoImagens.solutionStatNumber')}</span>
              <span className="text-muted-foreground ml-3">{t('subpages.otimizacaoImagens.solutionStatLabel')}</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {solutionSteps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3"><span className="text-primary font-bold">{i + 1}</span></div>
                  <h3 className="font-semibold text-foreground">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('subpages.otimizacaoImagens.benefitsTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsCards.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="card-surface border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors"><b.icon className="w-7 h-7 text-primary" /></div>
                    <CardTitle className="text-lg text-foreground">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center"><p className="text-muted-foreground text-sm">{b.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-lg text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">{t('subpages.otimizacaoImagens.offerBadge')}</div>
          <Card className="card-surface border-primary/30 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold">{t('subpages.otimizacaoImagens.popularBadge')}</div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-foreground mb-2">{t('subpages.otimizacaoImagens.packageTitle')}</CardTitle>
              <div className="mb-2">
                <span className="text-4xl font-bold text-primary">{t('subpages.otimizacaoImagens.packagePrice')}</span>
                <span className="text-muted-foreground line-through ml-2">{t('subpages.otimizacaoImagens.packageOldPrice')}</span>
              </div>
              <p className="text-primary font-semibold text-sm">{t('subpages.otimizacaoImagens.packageSaving')}</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {packageFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{f}</span>
                </div>
              ))}
              <Button className="w-full mt-4" size="lg" onClick={handleConsultorClick}>
                <Camera className="mr-2 w-5 h-5" /> {t('subpages.otimizacaoImagens.packageCta')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            {t('subpages.otimizacaoImagens.ctaTitle')} <span className="text-foreground">{t('subpages.otimizacaoImagens.ctaTitleHighlight')}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">{t('subpages.otimizacaoImagens.ctaDescription')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleConsultorClick}><Camera className="mr-2" /> {t('subpages.otimizacaoImagens.ctaPrimary')}</Button>
            <Button size="lg" variant="outline" onClick={handleWhatsAppClick}>{t('subpages.otimizacaoImagens.ctaSecondary')}</Button>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default OtimizacaoImagens;
