
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, MessageCircle } from 'lucide-react';

const GestaoRedesSociais = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: Calendar, title: "Agendamento Inteligente", description: "Postagens automáticas nos melhores horários com base em dados de engajamento." },
    { icon: Users, title: "Gestão de Comunidade", description: "Engajamento automático e resposta inteligente a comentários e mensagens." },
    { icon: MessageCircle, title: "Monitoramento 24/7", description: "Acompanhamento contínuo de menções, hashtags e tendências do seu setor." },
  ];

  return (
    <SubpageLayout title="Gestão de Redes Sociais" subtitle="Automação inteligente para postagens, engajamento e monitoramento de suas redes sociais." badge="📱 Redes Sociais" seoPath="/gestao-redes-sociais" seoDescription="Gestão completa de redes sociais com IA: posts automatizados, stories, engajamento e monitoramento. Aumente sua presença digital com a DesignoAI.">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
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
    </SubpageLayout>
  );
};

export default GestaoRedesSociais;
