
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Database, Lock, UserCheck, Settings } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const PoliticaPrivacidade = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const infoProvidedItems = tList<string>('legal.politicaPrivacidade.sections.info.provided.items');
  const infoAutomaticItems = tList<string>('legal.politicaPrivacidade.sections.info.automatic.items');
  const usageItems = tList<string>('legal.politicaPrivacidade.sections.usage.items');
  const sharingItems = tList<string>('legal.politicaPrivacidade.sections.sharing.items');
  const securityTechItems = tList<string>('legal.politicaPrivacidade.sections.security.technical.items');
  const securityOrgItems = tList<string>('legal.politicaPrivacidade.sections.security.organizational.items');
  const rightsItems = tList<{ label: string; desc: string }>('legal.politicaPrivacidade.sections.rights.items');

  const sections = [
    { icon: Eye, title: t('legal.politicaPrivacidade.sections.info.title'), content: (
      <div className="space-y-4">
        <p>{t('legal.politicaPrivacidade.sections.info.intro')}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div><h4 className="font-semibold text-foreground mb-2">{t('legal.politicaPrivacidade.sections.info.provided.title')}</h4><ul className="list-disc pl-6 space-y-1 text-muted-foreground">{infoProvidedItems.map((item, i) => <li key={i}>{item}</li>)}</ul></div>
          <div><h4 className="font-semibold text-foreground mb-2">{t('legal.politicaPrivacidade.sections.info.automatic.title')}</h4><ul className="list-disc pl-6 space-y-1 text-muted-foreground">{infoAutomaticItems.map((item, i) => <li key={i}>{item}</li>)}</ul></div>
        </div>
      </div>
    )},
    { icon: Settings, title: t('legal.politicaPrivacidade.sections.usage.title'), content: (
      <div className="space-y-4">
        <p>{t('legal.politicaPrivacidade.sections.usage.intro')}</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">{usageItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    )},
    { icon: UserCheck, title: t('legal.politicaPrivacidade.sections.sharing.title'), content: (
      <div className="space-y-4">
        <p>{t('legal.politicaPrivacidade.sections.sharing.intro')}</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">{sharingItems.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>
    )},
    { icon: Lock, title: t('legal.politicaPrivacidade.sections.security.title'), content: (
      <div className="space-y-4">
        <p>{t('legal.politicaPrivacidade.sections.security.intro')}</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div><h4 className="font-semibold text-foreground mb-2">{t('legal.politicaPrivacidade.sections.security.technical.title')}</h4><ul className="list-disc pl-6 space-y-1 text-muted-foreground">{securityTechItems.map((item, i) => <li key={i}>{item}</li>)}</ul></div>
          <div><h4 className="font-semibold text-foreground mb-2">{t('legal.politicaPrivacidade.sections.security.organizational.title')}</h4><ul className="list-disc pl-6 space-y-1 text-muted-foreground">{securityOrgItems.map((item, i) => <li key={i}>{item}</li>)}</ul></div>
        </div>
      </div>
    )},
    { icon: Database, title: t('legal.politicaPrivacidade.sections.rights.title'), content: (
      <div className="space-y-4">
        <p>{t('legal.politicaPrivacidade.sections.rights.intro')}</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          {rightsItems.map((item, i) => (
            <li key={i}><strong className="text-foreground">{item.label}</strong> {item.desc}</li>
          ))}
        </ul>
      </div>
    )},
  ];

  return (
    <SubpageLayout
      title={t('legal.politicaPrivacidade.title')}
      subtitle={t('legal.politicaPrivacidade.subtitle')}
      badge={t('legal.politicaPrivacidade.badge')}
      seoDescription={t('legal.politicaPrivacidade.seo.description')}
      seoPath="/politica-privacidade"
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
          <p className="text-center text-muted-foreground text-sm mb-8">{t('legal.politicaPrivacidade.lastUpdated')}</p>
          {sections.map((s, i) => (
            <Card key={i} className="card-surface border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><s.icon className="text-primary w-6 h-6" /><span className="text-foreground">{s.title}</span></CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{s.content}</CardContent>
            </Card>
          ))}
          <Card className="card-surface border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">{t('legal.politicaPrivacidade.contact.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('legal.politicaPrivacidade.contact.text')}</p>
              <p className="text-primary font-semibold">{t('legal.politicaPrivacidade.contact.email')}</p>
              <p className="text-primary font-semibold">{t('legal.politicaPrivacidade.contact.whatsapp')}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default PoliticaPrivacidade;
