
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Users, Target, BarChart3, Clock, Zap } from 'lucide-react';

const EmailMarketing = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: Mail, title: "Personalização Automática", description: "Cada email é adaptado para o destinatário específico" },
    { icon: Users, title: "Segmentação Inteligente", description: "Listas organizadas por comportamento e preferências" },
    { icon: Clock, title: "Horários Otimizados", description: "Machine learning define o melhor momento para envio" },
    { icon: Target, title: "Templates Responsivos", description: "Designs que se adaptam a qualquer dispositivo" },
    { icon: BarChart3, title: "Testes A/B Automatizados", description: "Otimização contínua de subject lines e conteúdo" },
    { icon: Zap, title: "Automação de Fluxos", description: "Campanhas acionadas por eventos e comportamentos" },
  ];

  const automationTypes = [
    "Emails de boas-vindas personalizados", "Campanhas de carrinho abandonado",
    "Sequências de nutrição de leads", "Campanhas de reativação de clientes",
    "Follow-ups pós-compra automatizados", "Campanhas de aniversário e datas especiais",
  ];

  return (
    <SubpageLayout title="Email Marketing" subtitle="Revolucione sua comunicação com campanhas de email marketing inteligentes e personalizadas." badge="📧 Email com IA" seoPath="/email-marketing" seoDescription="Email marketing com IA: campanhas automatizadas, segmentação inteligente e personalização avançada. Aumente suas conversões com a DesignoAI.">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Recursos Principais</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="glass border-border/50 hover:border-primary/30 transition-all group h-full">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Automação Inteligente</h2>
          <Card className="glass border-border/50">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground text-center mb-8">Configuramos fluxos automatizados que respondem ao comportamento do usuário em tempo real:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {automationTypes.map((t, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{t}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default EmailMarketing;
