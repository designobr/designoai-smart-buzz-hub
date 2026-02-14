
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Target, TrendingUp, Users, BarChart3, MessageCircle, CheckCircle } from 'lucide-react';

const SocialMedia = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: Sparkles, title: "Criação de Conteúdo Visual", description: "IA gera posts personalizados para cada plataforma" },
    { icon: Target, title: "Planejamento Estratégico", description: "Cronograma otimizado baseado em dados comportamentais" },
    { icon: TrendingUp, title: "Análise de Tendências", description: "Identificação automática de hashtags e temas virais" },
    { icon: Users, title: "Gestão Automatizada", description: "Publicação simultânea em múltiplas plataformas" },
    { icon: BarChart3, title: "Relatórios Detalhados", description: "Métricas de performance em tempo real" },
    { icon: MessageCircle, title: "Resposta Automatizada", description: "Chatbot inteligente para interações com seguidores" },
  ];

  const benefits = [
    "Aumento de 300% no engajamento orgânico",
    "Economia de 15 horas semanais de trabalho manual",
    "Crescimento de 250% no número de seguidores",
    "ROI 5x superior em campanhas pagas",
    "Consistência de 98% na identidade visual da marca",
  ];

  return (
    <SubpageLayout title="Social Media" subtitle="Transforme sua presença digital com inteligência artificial que cria conteúdo envolvente e gerencia suas redes sociais." badge="📱 Social Media">
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
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Resultados Comprovados</h2>
          <Card className="glass border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{b}</span></li>
                  ))}
                </ul>
                <div className="glass-strong rounded-2xl p-8 text-center">
                  <h4 className="text-4xl font-heading font-bold text-gradient mb-2">98%</h4>
                  <p className="text-muted-foreground">Taxa de satisfação dos clientes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default SocialMedia;
