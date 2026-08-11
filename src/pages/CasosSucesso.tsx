
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, ShoppingBag, Stethoscope, Utensils, Briefcase, Dumbbell } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const CasosSucesso = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const caseIcons = [ShoppingBag, Stethoscope, Utensils];
  const cases = tList<{ title: string; subtitle: string; description: string; results: string[] }>('company.casosSucesso.cases').map((c, i) => ({ ...c, icon: caseIcons[i] }));

  const additionalCaseIcons = [Briefcase, Dumbbell];
  const additionalCases = tList<{ title: string; subtitle: string; metrics: string[] }>('company.casosSucesso.additionalCases').map((c, i) => ({ ...c, icon: additionalCaseIcons[i] }));

  const impactStats = tList<{ number: string; label: string }>('company.casosSucesso.impactStats');

  return (
    <SubpageLayout
      title={t('company.casosSucesso.seo.title')}
      subtitle={t('company.casosSucesso.subtitle')}
      badge={t('company.casosSucesso.badge')}
      seoPath="/casos-sucesso"
      seoDescription={t('company.casosSucesso.seo.description')}
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
          {cases.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="card-surface border-border/50">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6 gap-4">
                        <div className="p-3 rounded-xl bg-primary/10"><c.icon className="w-7 h-7 text-primary" /></div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-foreground">{c.title}</h3>
                          <p className="text-primary font-semibold">{c.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{c.description}</p>
                    </div>
                    <div className="card-surface rounded-2xl p-6">
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4">{t('company.casosSucesso.resultsAchieved')}</h4>
                      <ul className="space-y-3">
                        {c.results.map((r, ri) => (
                          <li key={ri} className="flex items-start gap-3">
                            <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('company.casosSucesso.moreTransformationsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalCases.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="card-surface border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors"><c.icon className="w-7 h-7 text-primary" /></div>
                    <CardTitle className="text-lg text-foreground">{c.title}</CardTitle>
                    <p className="text-primary font-semibold">{c.subtitle}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    {c.metrics.map((m, mi) => (
                      <div key={mi} className="bg-primary/5 border border-primary/10 rounded-lg p-2"><span className="text-muted-foreground font-medium">{m}</span></div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-foreground">{t('company.casosSucesso.impactTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <Card className="card-surface border-border/50 text-center hover:border-primary/30 transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-4xl font-heading font-bold text-foreground mb-3">{s.number}</h3>
                    <p className="text-muted-foreground font-medium">{s.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default CasosSucesso;
