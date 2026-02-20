
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Pen, Target, BarChart3, Sparkles, Globe, Image, FileText, Camera, Video, CheckCircle } from 'lucide-react';

const CriacaoConteudo = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: Pen, title: "Geração Automática de Textos", description: "IA cria textos otimizados para SEO e engajamento" },
    { icon: Image, title: "Criação de Imagens", description: "Gráficos e imagens personalizados para sua marca" },
    { icon: Target, title: "Templates Responsivos", description: "Designs que se adaptam a qualquer dispositivo" },
    { icon: Globe, title: "Adaptação Multi-plataforma", description: "Conteúdo otimizado para diferentes redes sociais" },
    { icon: BarChart3, title: "Análise de Performance", description: "Otimização contínua baseada em dados" },
    { icon: Sparkles, title: "Biblioteca de Recursos", description: "Acesso a recursos visuais exclusivos" },
  ];

  const contentTypes = [
    { icon: FileText, title: "Posts para Redes Sociais", description: "Conteúdo envolvente para Instagram, Facebook, LinkedIn" },
    { icon: Pen, title: "Artigos para Blog", description: "Textos otimizados para SEO e engajamento" },
    { icon: Camera, title: "Banners e Anúncios", description: "Designs impactantes para campanhas publicitárias" },
    { icon: Video, title: "Vídeos Promocionais", description: "Conteúdo audiovisual para maior alcance" },
  ];

  const benefits = [
    "Economia de 80% do tempo na produção de conteúdo",
    "Consistência de 95% na comunicação da marca",
    "Aumento de 300% no engajamento orgânico",
    "Escalabilidade para grandes volumes de conteúdo",
    "Redução de 70% nos custos com produção",
    "Otimização automática baseada em performance",
  ];

  return (
    <SubpageLayout title="Criação de Conteúdo" subtitle="Transforme sua comunicação com inteligência artificial que gera textos, imagens e gráficos de alta qualidade." badge="✍️ Conteúdo com IA" seoPath="/criacao-conteudo" seoDescription="Criação de conteúdo com IA: textos, imagens e gráficos de alta qualidade para redes sociais, blogs e campanhas. Aumente seu engajamento com a DesignoAI.">
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
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Tipos de Conteúdo</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {contentTypes.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="glass border-border/50 hover:border-primary/30 transition-all group">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors"><t.icon className="w-7 h-7 text-primary" /></div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{t.title}</h3>
                      <p className="text-muted-foreground">{t.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Benefícios Mensuráveis</h2>
          <Card className="glass border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-4">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-muted-foreground">{b}</span></li>
                  ))}
                </ul>
                <div className="glass-strong rounded-2xl p-8 text-center">
                  <h4 className="text-4xl font-heading font-bold text-gradient mb-2">95%</h4>
                  <p className="text-muted-foreground">Consistência na comunicação</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default CriacaoConteudo;
