
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, BarChart3, TrendingUp, Target, Database, Zap } from 'lucide-react';

const AnalyseDados = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const capabilities = [
    { icon: Brain, title: "Análise Comportamental", description: "Compreensão profunda do comportamento dos clientes em tempo real" },
    { icon: TrendingUp, title: "Identificação de Padrões", description: "Descoberta automática de tendências e oportunidades de mercado" },
    { icon: Target, title: "Segmentação Automática", description: "Criação inteligente de grupos de audiência baseada em dados" },
    { icon: BarChart3, title: "Previsão de Demanda", description: "Antecipação de sazonalidade e comportamentos futuros" },
    { icon: Database, title: "Análise de Sentimento", description: "Monitoramento da percepção da marca em redes sociais" },
    { icon: Zap, title: "Otimização de ROI", description: "Maximização do retorno por canal de marketing" },
  ];

  const predictiveFeatures = [
    "Previsão de churn de clientes", "Identificação de clientes com maior potencial",
    "Previsão de receita e crescimento", "Análise de lifetime value",
    "Otimização de preços baseada em demanda", "Previsão de performance de campanhas",
  ];

  return (
    <SubpageLayout title="Análise de Dados" subtitle="Transforme dados em insights acionáveis com inteligência artificial que revela oportunidades ocultas." badge="📊 Data Analytics" seoPath="/analise-dados" seoDescription="Análise de dados com IA: dashboards em tempo real, insights acionáveis e previsões inteligentes para otimizar suas campanhas de marketing digital.">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Capacidades Analíticas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="glass border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors"><c.icon className="w-7 h-7 text-primary" /></div>
                    <CardTitle className="text-lg text-foreground">{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center"><p className="text-muted-foreground">{c.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Análise Preditiva</h2>
          <Card className="glass border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {predictiveFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <Brain className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[{ num: "360°", label: "Visão completa" }, { num: "24/7", label: "Monitoramento contínuo" }, { num: "AI", label: "Insights automatizados" }].map((s, i) => (
                  <div key={i} className="glass-strong rounded-xl p-6 text-center">
                    <h3 className="text-2xl font-heading font-bold text-gradient mb-1">{s.num}</h3>
                    <p className="text-muted-foreground text-sm">{s.label}</p>
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

export default AnalyseDados;
