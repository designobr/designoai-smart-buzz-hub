
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Target, Eye, Heart, Users, Lightbulb, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';

const SobreNos = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const valueIcons = [Lightbulb, Heart, Target, Eye, Users, Globe];
  const values = tList<{ title: string; description: string }>('company.sobreNos.values').map((v, i) => ({ ...v, icon: valueIcons[i] }));
  const stats = tList<{ number: string; label: string }>('company.sobreNos.stats');

  return (
    <SubpageLayout
      title={t('company.sobreNos.seo.title')}
      subtitle={t('company.sobreNos.subtitle')}
      seoPath="/sobre-nos"
      seoDescription={t('company.sobreNos.seo.description')}
    >
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="card-surface rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-6">{t('company.sobreNos.history.title')}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t('company.sobreNos.history.p1')}
            </p>
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-6">
              <p className="text-muted-foreground leading-relaxed mb-3">
                {t('company.sobreNos.history.p2')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('company.sobreNos.history.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
 className="card-surface rounded-2xl p-6 text-center"
              >
                <div className="text-2xl font-heading font-bold text-foreground">{stat.number}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-surface rounded-2xl p-6 text-center">
              <Target className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{t('company.sobreNos.mission.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t('company.sobreNos.mission.description')}</p>
            </div>
            <div className="card-surface rounded-2xl p-6 text-center">
              <Eye className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{t('company.sobreNos.vision.title')}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t('company.sobreNos.vision.description')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl font-heading font-bold text-center text-foreground mb-10">{t('company.sobreNos.valuesTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
 className="card-surface rounded-2xl p-6 text-center group hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default SobreNos;
