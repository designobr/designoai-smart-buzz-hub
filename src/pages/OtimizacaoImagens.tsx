
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SubpageLayout from '@/components/SubpageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Zap, TrendingUp, Star, Target, CheckCircle, AlertTriangle, Smartphone } from 'lucide-react';

const OtimizacaoImagens = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/5511965262002?text=${encodeURIComponent("Olá! Tenho interesse no serviço de otimização de imagens. Gostaria de saber mais!")}`, '_blank');
  };

  const handleConsultorClick = () => {
    window.open(`https://wa.me/5511965262002?text=${encodeURIComponent("Olá! Gostaria de falar com um consultor sobre otimização de imagens para o meu negócio.")}`, '_blank');
  };

  const problems = [
    { icon: AlertTriangle, title: "Cardápios que Afastam", description: "Fotos amadoras de pratos fazem os clientes duvidarem da qualidade da sua comida, diminuindo pedidos em até 40%.", color: "text-destructive" },
    { icon: Smartphone, title: "E-commerce Sem Conversão", description: "Produtos com fotos ruins têm taxa de conversão 67% menor. Clientes não confiam no que não conseguem ver claramente.", color: "text-destructive" },
    { icon: Target, title: "Invisibilidade nas Redes", description: "Conteúdo visual fraco resulta em menos engajamento, alcance reduzido e perda de oportunidades de vendas.", color: "text-primary" },
  ];

  const benefitsCards = [
    { icon: TrendingUp, title: "Mais Vendas", description: "Imagens profissionais a uma fração do custo. Economia de até 80% comparado a um fotógrafo tradicional." },
    { icon: Star, title: "Qualidade Premium", description: "Imagens chamativas e profissionais que impressionam seus clientes e aumentam a credibilidade." },
    { icon: Target, title: "Diferencial Competitivo", description: "Destaque-se no iFood, Instagram, Google e outras plataformas com conteúdo visual que converte." },
    { icon: Zap, title: "Rapidez Garantida", description: "Processo otimizado com entrega em até 24 horas. Seus projetos nunca mais vão atrasar." },
  ];

  const packageFeatures = [
    "10 imagens totalmente otimizadas", "Correção de cores e iluminação", "Remoção de imperfeições",
    "Otimização para redes sociais", "Entrega em até 24 horas", "Garantia de satisfação",
    "BÔNUS: Consultoria gratuita",
  ];

  return (
    <SubpageLayout title="Otimização de Imagens" subtitle="Transforme fotos comuns em poderosas ferramentas de venda com IA." badge="📸 Imagens com IA">
      {/* Problems */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-4 text-foreground">Você está perdendo clientes por causa das suas imagens?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">Imagens de baixa qualidade são o maior obstáculo entre você e o sucesso do seu negócio.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="glass border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-destructive/10 w-fit"><p.icon className={`w-7 h-7 ${p.color}`} /></div>
                    <CardTitle className="text-lg text-foreground">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center"><p className="text-muted-foreground text-sm">{p.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-destructive/10 border border-destructive/20">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <span className="text-destructive font-semibold text-sm">90% das decisões de compra são influenciadas pela qualidade visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-gradient">A Solução que Vai Revolucionar Suas Vendas</h2>
            <p className="text-lg text-muted-foreground mb-8">Nossa tecnologia de otimização profissional com IA transforma suas imagens comuns em ferramentas poderosas de conversão.</p>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/20 border border-primary/30 mb-8">
              <span className="text-2xl font-bold text-primary">+25%</span>
              <span className="text-muted-foreground ml-3">Aumento comprovado nas vendas</span>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {["Upload Simples", "IA + Especialistas", "Entrega Rápida"].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3"><span className="text-primary font-bold">{i + 1}</span></div>
                  <h3 className="font-semibold text-foreground">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">Por Que Escolher Nosso Serviço?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsCards.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="glass border-border/50 hover:border-primary/30 transition-all group h-full">
                  <CardHeader className="text-center pb-3">
                    <div className="mx-auto mb-3 p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors"><b.icon className="w-7 h-7 text-primary" /></div>
                    <CardTitle className="text-lg text-foreground">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center"><p className="text-muted-foreground text-sm">{b.description}</p></CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-lg text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">🔥 OFERTA ESPECIAL</div>
          <Card className="glass border-primary/30 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold">POPULAR</div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl text-foreground mb-2">Pacote Profissional</CardTitle>
              <div className="mb-2">
                <span className="text-4xl font-bold text-primary">R$ 100</span>
                <span className="text-muted-foreground line-through ml-2">R$ 300</span>
              </div>
              <p className="text-primary font-semibold text-sm">Economize R$ 200 hoje!</p>
            </CardHeader>
            <CardContent className="space-y-3">
              {packageFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{f}</span>
                </div>
              ))}
              <Button className="w-full mt-4" size="lg" onClick={handleConsultorClick}>
                <Camera className="mr-2 w-5 h-5" /> Quero Fotos Profissionais!
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Garanta Agora Fotos Profissionais <span className="text-gradient">e Aumente Suas Vendas!</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Não perca mais clientes por causa de imagens amadoras. Transforme seu negócio hoje.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleConsultorClick}><Camera className="mr-2" /> Começar Agora</Button>
            <Button size="lg" variant="outline" onClick={handleWhatsAppClick}>Falar no WhatsApp</Button>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
};

export default OtimizacaoImagens;
