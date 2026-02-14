
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Target, TrendingUp, BarChart3, Zap, Globe, Link, Shield, Clock, Users, CheckCircle } from 'lucide-react';

const SEOInteligente = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: Search, title: "Pesquisa Inteligente de Palavras-chave", description: "IA identifica keywords com baixa concorrência e alto potencial" },
    { icon: Target, title: "Otimização Automática", description: "Meta tags, URLs e estrutura otimizadas automaticamente" },
    { icon: TrendingUp, title: "Análise da Concorrência", description: "Identificação de oportunidades baseada nos competidores" },
    { icon: Zap, title: "Velocidade Otimizada", description: "Melhoria automática da performance do site" },
    { icon: Link, title: "Link Building Estratégico", description: "Construção inteligente de autoridade do domínio" },
    { icon: BarChart3, title: "Relatórios em Tempo Real", description: "Monitoramento contínuo de posicionamento e tráfego" },
  ];

  const technicalFeatures = [
    { icon: Shield, title: "Implementação de HTTPS", description: "Segurança e confiabilidade para melhor ranking" },
    { icon: Globe, title: "Dados Estruturados", description: "Schema markup para rich snippets" },
    { icon: Clock, title: "Core Web Vitals", description: "Otimização de métricas de experiência do usuário" },
    { icon: Users, title: "SEO Local", description: "Posicionamento para buscas regionais" },
  ];

  const results = [
    "Aumento médio de 200% no tráfego orgânico", "Melhoria do posicionamento para keywords estratégicas",
    "Redução de 50% na taxa de rejeição", "Aumento de 180% no tempo de permanência",
    "Crescimento de 300% na taxa de conversão orgânica", "ROI 5x superior em comparação com métodos tradicionais",
  ];

  return (
    <SubpageLayout title="SEO Inteligente" subtitle="Domine os resultados de busca com inteligência artificial que otimiza automaticamente seu site." badge="🔍 SEO com IA">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">SEO Técnico Avançado</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalFeatures.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="glass border-border/50 hover:border-primary/30 transition-all group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"><f.icon className="w-7 h-7 text-primary" /></div>
                    <div><h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3><p className="text-muted-foreground">{f.description}</p></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Resultados Mensuráveis</h2>
          <Card className="glass border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-4">
                  {results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{r}</span></li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <div className="glass-strong rounded-2xl p-6 text-center"><h4 className="text-3xl font-heading font-bold text-gradient mb-1">200%</h4><p className="text-muted-foreground text-sm">Aumento no tráfego orgânico</p></div>
                  <div className="glass-strong rounded-2xl p-6 text-center"><h4 className="text-3xl font-heading font-bold text-gradient mb-1">Top 3</h4><p className="text-muted-foreground text-sm">Posicionamento médio</p></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default SEOInteligente;
