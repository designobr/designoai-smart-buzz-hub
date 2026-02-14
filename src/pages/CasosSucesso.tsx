
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, ShoppingBag, Stethoscope, Utensils, Briefcase, Dumbbell, Target } from 'lucide-react';

const CasosSucesso = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const cases = [
    { icon: ShoppingBag, title: "E-commerce de Moda", subtitle: "Aumento de 320% no Engajamento", description: "Uma loja online de moda feminina transformou seus resultados com nossa solução de criação de conteúdo personalizado.", results: ["Engajamento aumentou 320% em 3 meses", "Conversões cresceram 85%", "ROI da campanha aumentou 150%", "Alcance orgânico expandiu 240%"] },
    { icon: Stethoscope, title: "Clínica Médica", subtitle: "200% Mais Pacientes", description: "Clínica especializada superou desafios de presença digital com SEO inteligente e gestão automatizada.", results: ["Aumento de 200% em novos pacientes", "Visitas no site cresceram 180%", "Top 3 no Google para palavras-chave principais", "Redução de 60% no custo por lead"] },
    { icon: Utensils, title: "Restaurante Gourmet", subtitle: "400% de Crescimento Online", description: "Durante a pandemia, um restaurante gourmet desenvolveu seu canal de delivery com campanhas automatizadas.", results: ["Vendas online aumentaram 400%", "Base de clientes cresceu 150%", "Taxa de retenção subiu 90%", "Satisfação do cliente: 98%"] },
  ];

  const additionalCases = [
    { icon: Briefcase, title: "Consultoria Empresarial", subtitle: "Autoridade Digital", metrics: ["250% mais leads", "120% conversão", "80% ticket médio"] },
    { icon: Dumbbell, title: "Academia de Ginástica", subtitle: "Retenção Record", metrics: ["180% retenção", "160% novos membros", "140% receita"] },
  ];

  const impactStats = [
    { number: "500+", label: "Empresas Transformadas" },
    { number: "200%", label: "Aumento Médio em Conversões" },
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "3x", label: "ROI Médio do Investimento" },
  ];

  return (
    <SubpageLayout title="Casos de Sucesso" subtitle="Descubra como empresas de diferentes setores transformaram seus resultados com as soluções da DesignoAI." badge="🏆 Resultados reais">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-12">
          {cases.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Card className="glass border-border/50">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6 gap-4">
                        <div className="p-3 rounded-xl bg-primary/10"><c.icon className="w-7 h-7 text-primary" /></div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-foreground">{c.title}</h3>
                          <p className="text-primary font-semibold">{c.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{c.description}</p>
                    </div>
                    <div className="glass-strong rounded-2xl p-6">
                      <h4 className="text-lg font-heading font-bold text-foreground mb-4">Resultados Alcançados:</h4>
                      <ul className="space-y-3">
                        {c.results.map((r, ri) => (
                          <li key={ri} className="flex items-start gap-3">
                            <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Mais Transformações</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalCases.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="glass border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors"><c.icon className="w-7 h-7 text-primary" /></div>
                    <CardTitle className="text-lg text-foreground">{c.title}</CardTitle>
                    <p className="text-primary font-semibold">{c.subtitle}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    {c.metrics.map((m, mi) => (
                      <div key={mi} className="bg-primary/5 border border-primary/10 rounded-lg p-2"><span className="text-muted-foreground font-medium">{m}</span></div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Nosso Impacto Consolidado</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <Card className="glass border-border/50 text-center hover:border-primary/30 transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-4xl font-heading font-bold text-gradient mb-3">{s.number}</h3>
                    <p className="text-muted-foreground font-medium">{s.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default CasosSucesso;
