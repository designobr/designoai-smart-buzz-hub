
import { useEffect } from 'react';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Database, Lock, UserCheck, Settings } from 'lucide-react';

const PoliticaPrivacidade = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const sections = [
    { icon: Eye, title: "1. Informações que Coletamos", content: (
      <div className="space-y-4">
        <p>Coletamos informações que você nos fornece diretamente e automaticamente quando usa nossos serviços:</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div><h4 className="font-semibold text-foreground mb-2">Informações Fornecidas:</h4><ul className="list-disc pl-6 space-y-1 text-muted-foreground"><li>Nome e informações de contato</li><li>Informações de conta e perfil</li><li>Conteúdo que você cria</li><li>Comunicações conosco</li></ul></div>
          <div><h4 className="font-semibold text-foreground mb-2">Informações Automáticas:</h4><ul className="list-disc pl-6 space-y-1 text-muted-foreground"><li>Dados de uso da plataforma</li><li>Informações do dispositivo</li><li>Endereço IP e localização</li><li>Cookies e tecnologias similares</li></ul></div>
        </div>
      </div>
    )},
    { icon: Settings, title: "2. Como Usamos suas Informações", content: (
      <div className="space-y-4">
        <p>Utilizamos suas informações para:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground"><li>Fornecer e melhorar nossos serviços</li><li>Personalizar sua experiência na plataforma</li><li>Processar transações e pagamentos</li><li>Enviar comunicações importantes</li><li>Analisar o uso da plataforma</li><li>Cumprir obrigações legais</li></ul>
      </div>
    )},
    { icon: UserCheck, title: "3. Compartilhamento de Informações", content: (
      <div className="space-y-4">
        <p>Não vendemos suas informações pessoais. Podemos compartilhar apenas:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground"><li>Com seu consentimento explícito</li><li>Com prestadores de serviços</li><li>Para cumprir obrigações legais</li><li>Para proteger nossos direitos e segurança</li></ul>
      </div>
    )},
    { icon: Lock, title: "4. Segurança dos Dados", content: (
      <div className="space-y-4">
        <p>Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações.</p>
        <div className="grid md:grid-cols-2 gap-6">
          <div><h4 className="font-semibold text-foreground mb-2">Segurança Técnica:</h4><ul className="list-disc pl-6 space-y-1 text-muted-foreground"><li>Criptografia de dados</li><li>Firewalls e detecção</li><li>Acesso restrito</li><li>Monitoramento contínuo</li></ul></div>
          <div><h4 className="font-semibold text-foreground mb-2">Segurança Organizacional:</h4><ul className="list-disc pl-6 space-y-1 text-muted-foreground"><li>Treinamento de funcionários</li><li>Políticas de acesso</li><li>Auditorias regulares</li><li>Contratos de confidencialidade</li></ul></div>
        </div>
      </div>
    )},
    { icon: Database, title: "5. Seus Direitos", content: (
      <div className="space-y-4">
        <p>Você tem os seguintes direitos:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Acesso:</strong> Solicitar cópias de suas informações</li>
          <li><strong className="text-foreground">Retificação:</strong> Corrigir informações incorretas</li>
          <li><strong className="text-foreground">Exclusão:</strong> Solicitar a exclusão de suas informações</li>
          <li><strong className="text-foreground">Portabilidade:</strong> Receber seus dados em formato estruturado</li>
          <li><strong className="text-foreground">Oposição:</strong> Opor-se ao processamento</li>
        </ul>
      </div>
    )},
  ];

  return (
    <SubpageLayout title="Política de Privacidade" subtitle="Sua privacidade é importante para nós. Saiba como coletamos, usamos e protegemos suas informações." badge="🔒 Privacidade" seoPath="/politica-privacidade">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-6">
          <p className="text-center text-muted-foreground text-sm mb-8">Última atualização: 10 de junho de 2025</p>
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
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Entre em Contato</h3>
              <p className="text-muted-foreground mb-4">Para exercer seus direitos ou esclarecer dúvidas:</p>
              <p className="text-primary font-semibold">contato@designoai.com.br</p>
              <p className="text-primary font-semibold">WhatsApp: +55 11 94796-8158</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default PoliticaPrivacidade;
