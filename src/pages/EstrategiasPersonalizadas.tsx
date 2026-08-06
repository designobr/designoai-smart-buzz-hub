
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { serviceSchema } from '@/lib/seo-schemas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Target, Lightbulb } from 'lucide-react';

const EstrategiasPersonalizadas = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: Brain, title: "IA Avançada", description: "Algoritmos inteligentes que aprendem com seus dados e otimizam estratégias continuamente." },
    { icon: Target, title: "Segmentação Precisa", description: "Identificação exata do seu público-alvo ideal com base em dados comportamentais." },
    { icon: Lightbulb, title: "Insights Únicos", description: "Descobertas exclusivas sobre seu mercado que revelam oportunidades ocultas." },
  ];

  return (
    <SubpageLayout title="Estratégias Personalizadas" subtitle="Recomendações baseadas em IA para maximizar seus resultados de marketing." badge=" Estratégias com IA" seoPath="/estrategias-personalizadas" seoDescription="Estratégias de marketing personalizadas com IA: análise do seu negócio, recomendações inteligentes e planos de ação para maximizar seus resultados.">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="card-surface border-border/50 hover:border-primary/30 transition-all group h-full">
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

export default EstrategiasPersonalizadas;
