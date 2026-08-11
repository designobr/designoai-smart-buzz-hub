
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, AlertTriangle, Users } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

interface TermSection {
  title: string;
  content?: string;
  list?: string[];
}

const icons = [Users, Shield, FileText, AlertTriangle, FileText];

const TermosUso = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sections = tList<TermSection>('legal.termosUso.sections').map((s, i) => ({ ...s, icon: icons[i] }));

  return (
    <SubpageLayout
      title={t('legal.termosUso.title')}
      subtitle={t('legal.termosUso.subtitle')}
      badge={t('legal.termosUso.badge')}
      seoDescription={t('legal.termosUso.seo.description')}
      seoPath="/termos-uso"
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
          <p className="text-center text-muted-foreground text-sm mb-8">{t('legal.termosUso.lastUpdated')}</p>
          {sections.map((s, i) => (
            <Card key={i} className="card-surface border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><s.icon className="text-primary w-6 h-6" /><span className="text-foreground">{s.title}</span></CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                {s.content && <p>{s.content}</p>}
                {s.list && <ul className="list-disc pl-6 space-y-2">{s.list.map((item, li) => <li key={li}>{item}</li>)}</ul>}
              </CardContent>
            </Card>
          ))}
          <Card className="card-surface border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">{t('legal.termosUso.contact.title')}</h3>
              <p className="text-muted-foreground mb-2">{t('legal.termosUso.contact.text')}</p>
              <p className="text-primary font-semibold">{t('legal.termosUso.contact.email')}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default TermosUso;
