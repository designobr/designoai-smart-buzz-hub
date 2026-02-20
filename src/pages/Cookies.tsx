
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, Settings, Eye, Shield, BarChart3, Target } from 'lucide-react';

const Cookies = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const cookieTypes = [
    { icon: Shield, title: "Cookies Essenciais", description: "Necessários para o funcionamento básico do site. Incluem autenticação, segurança e navegação." },
    { icon: BarChart3, title: "Cookies de Análise", description: "Nos ajudam a entender como os visitantes interagem com o site, coletando informações anônimas." },
    { icon: Eye, title: "Cookies Funcionais", description: "Permitem que o site lembre suas preferências e configurações para uma experiência personalizada." },
    { icon: Target, title: "Cookies de Marketing", description: "Usados para exibir anúncios relevantes e medir a eficácia de campanhas publicitárias." },
  ];

  return (
    <SubpageLayout title="Política de Cookies" subtitle="Entenda como utilizamos cookies e tecnologias similares para melhorar sua experiência." badge="🍪 Cookies" seoPath="/cookies">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
          <p className="text-center text-muted-foreground text-sm mb-8">Última atualização: 10 de junho de 2025</p>

          <Card className="glass border-border/50">
            <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><Cookie className="text-primary w-6 h-6" /><span className="text-foreground">O que são Cookies?</span></CardTitle></CardHeader>
            <CardContent className="text-muted-foreground space-y-4">
              <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles nos ajudam a melhorar sua experiência.</p>
              <p>Os cookies podem ser "persistentes" ou "de sessão". Cookies persistentes permanecem até expirarem. Cookies de sessão são excluídos ao fechar o navegador.</p>
            </CardContent>
          </Card>

          <Card className="glass border-border/50">
            <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><Settings className="text-primary w-6 h-6" /><span className="text-foreground">Tipos de Cookies</span></CardTitle></CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {cookieTypes.map((t, i) => (
                  <div key={i} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <div className="flex items-center gap-2 mb-2"><t.icon className="text-primary w-5 h-5" /><h4 className="font-semibold text-foreground">{t.title}</h4></div>
                    <p className="text-muted-foreground text-sm">{t.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border/50">
            <CardHeader><CardTitle className="flex items-center gap-3 text-xl"><Settings className="text-primary w-6 h-6" /><span className="text-foreground">Cookies Específicos</span></CardTitle></CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold text-foreground">Nome</th>
                    <th className="text-left p-3 font-semibold text-foreground">Propósito</th>
                    <th className="text-left p-3 font-semibold text-foreground">Duração</th>
                    <th className="text-left p-3 font-semibold text-foreground">Tipo</th>
                  </tr></thead>
                  <tbody className="text-sm text-muted-foreground">
                    <tr className="border-b border-border/50"><td className="p-3 font-mono">session_id</td><td className="p-3">Autenticação</td><td className="p-3">Sessão</td><td className="p-3">Essencial</td></tr>
                    <tr className="border-b border-border/50"><td className="p-3 font-mono">user_preferences</td><td className="p-3">Configurações</td><td className="p-3">1 ano</td><td className="p-3">Funcional</td></tr>
                    <tr className="border-b border-border/50"><td className="p-3 font-mono">_ga</td><td className="p-3">Google Analytics</td><td className="p-3">2 anos</td><td className="p-3">Análise</td></tr>
                    <tr className="border-b border-border/50"><td className="p-3 font-mono">marketing_consent</td><td className="p-3">Consentimento</td><td className="p-3">1 ano</td><td className="p-3">Marketing</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-heading font-bold text-gradient mb-4">Contato</h3>
              <p className="text-muted-foreground mb-4">Se tiver dúvidas sobre nossa Política de Cookies:</p>
              <p className="text-primary font-semibold">contato@designoai.com.br</p>
              <p className="text-primary font-semibold">WhatsApp: +55 11 94796-8158</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default Cookies;
