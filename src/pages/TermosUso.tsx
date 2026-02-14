
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, AlertTriangle, Users } from 'lucide-react';

const TermosUso = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sections = [
    { icon: Users, title: "1. Aceitação dos Termos", content: "Ao acessar e usar a plataforma DesignoAI, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços." },
    { icon: Shield, title: "2. Uso da Plataforma", list: ["Você deve ter pelo menos 18 anos para usar nossos serviços", "É responsável por manter a confidencialidade de sua conta", "Não deve usar a plataforma para atividades ilegais", "Deve fornecer informações precisas e atualizadas"] },
    { icon: FileText, title: "3. Propriedade Intelectual", content: "Todo o conteúdo da plataforma é propriedade da DesignoAI ou de seus licenciadores. Os conteúdos criados por você usando nossa plataforma permanecem de sua propriedade." },
    { icon: AlertTriangle, title: "4. Limitação de Responsabilidade", content: "A DesignoAI não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso de nossos serviços. Fornecemos nossos serviços \"como estão\"." },
    { icon: FileText, title: "5. Modificações dos Termos", content: "Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. É sua responsabilidade revisar periodicamente estes termos." },
  ];

  return (
    <SubpageLayout title="Termos de Uso" subtitle="Conheça os termos e condições que regem o uso da plataforma DesignoAI." badge="📋 Termos">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
          <p className="text-center text-muted-foreground text-sm mb-8">Última atualização: 10 de junho de 2025</p>
          {sections.map((s, i) => (
            <Card key={i} className="glass border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><s.icon className="text-primary w-6 h-6" /><span className="text-foreground">{s.title}</span></CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                {s.content && <p>{s.content}</p>}
                {s.list && <ul className="list-disc pl-6 space-y-2">{s.list.map((item, li) => <li key={li}>{item}</li>)}</ul>}
              </CardContent>
            </Card>
          ))}
          <Card className="glass border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-heading font-bold text-gradient mb-4">Contato</h3>
              <p className="text-muted-foreground mb-2">Se tiver dúvidas sobre estes Termos de Uso:</p>
              <p className="text-primary font-semibold">contato@designoai.com.br</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default TermosUso;
