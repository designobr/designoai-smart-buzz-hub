
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, Settings, Eye, Shield, BarChart3, Target } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

interface CookieType {
  title: string;
  description: string;
}

interface CookieRow {
  name: string;
  purpose: string;
  duration: string;
  type: string;
}

const typeIcons = [Shield, BarChart3, Eye, Target];

const Cookies = () => {
  const { t, tList } = useI18n();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const cookieTypes = tList<CookieType>('legal.cookies.types.items').map((item, i) => ({ ...item, icon: typeIcons[i] }));
  const rows = tList<CookieRow>('legal.cookies.specific.rows');

  return (
    <SubpageLayout
      title={t('legal.cookies.title')}
      subtitle={t('legal.cookies.subtitle')}
      badge={t('legal.cookies.badge')}
      seoDescription={t('legal.cookies.seo.description')}
      seoPath="/cookies"
    >
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
          <p className="text-center text-muted-foreground text-sm mb-8">{t('legal.cookies.lastUpdated')}</p>

          <Card className="card-surface border-border/50">
            <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><Cookie className="text-primary w-6 h-6" /><span className="text-foreground">{t('legal.cookies.whatIs.title')}</span></CardTitle></CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>{t('legal.cookies.whatIs.p1')}</p>
              <p>{t('legal.cookies.whatIs.p2')}</p>
            </CardContent>
          </Card>

          <Card className="card-surface border-border/50">
            <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><Settings className="text-primary w-6 h-6" /><span className="text-foreground">{t('legal.cookies.types.title')}</span></CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {cookieTypes.map((t2, i) => (
                  <div key={i} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-2 mb-2"><t2.icon className="text-primary w-5 h-5" /><h4 className="font-semibold text-foreground">{t2.title}</h4></div>
                    <p className="text-muted-foreground text-sm">{t2.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="card-surface border-border/50">
            <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><Settings className="text-primary w-6 h-6" /><span className="text-foreground">{t('legal.cookies.specific.title')}</span></CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold text-foreground">{t('legal.cookies.specific.headers.name')}</th>
                    <th className="text-left p-3 font-semibold text-foreground">{t('legal.cookies.specific.headers.purpose')}</th>
                    <th className="text-left p-3 font-semibold text-foreground">{t('legal.cookies.specific.headers.duration')}</th>
                    <th className="text-left p-3 font-semibold text-foreground">{t('legal.cookies.specific.headers.type')}</th>
                  </tr></thead>
                  <tbody className="text-sm text-muted-foreground">
                    {rows.map((row, i) => (
                      <tr key={i} className="border-b border-border/50">
                        <td className="p-3 font-mono">{row.name}</td>
                        <td className="p-3">{row.purpose}</td>
                        <td className="p-3">{row.duration}</td>
                        <td className="p-3">{row.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="card-surface border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">{t('legal.cookies.contact.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('legal.cookies.contact.text')}</p>
              <p className="text-primary font-semibold">{t('legal.cookies.contact.email')}</p>
              <p className="text-primary font-semibold">{t('legal.cookies.contact.whatsapp')}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default Cookies;
