
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, ArrowRight, Smartphone, Camera, Brain, Star, MessageCircle, Zap, BarChart3, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const Services = () => {
  useEffect(() => {window.scrollTo(0, 0);}, []);

  const digitalServices = [
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Gestão de Redes Sociais",
    description: "12 posts mensais personalizados com design premium e copywriting otimizado para engajamento.",
    features: ["12 posts/mês", "Stories diários programados", "Design profissional", "Copywriting otimizado"]
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Tráfego Pago",
    description: "Campanhas estratégicas no Instagram e Facebook para aumentar sua visibilidade e conversões.",
    features: ["Campanhas Instagram/Facebook", "Otimização de conversões", "Relatórios de performance", "Segmentação avançada"]
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Site One Page",
    description: "Site responsivo e profissional para estabelecer sua presença digital com design moderno.",
    features: ["Design responsivo", "Otimizado para SEO", "Formulário de contato", "Integração redes sociais"]
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Design Gráfico Completo",
    description: "Identidade visual consistente em todos os materiais digitais da sua empresa.",
    features: ["Logotipo profissional", "Paleta de cores", "Tipografia personalizada", "Manual de marca"]
  }];


  const physicalServices = [
  {
    title: "Cartões de Visita",
    features: ["Cartão de Visita Digital com QR Code", "Cartão de Visita Físico (opcional)", "Design alinhado com identidade visual"]
  },
  {
    title: "Produção Audiovisual",
    features: ["1 Sessão de Fotos Presencial (mês)", "1 Gravação de Vídeo Institucional (mês)", "Material profissional para redes sociais"]
  }];


  const aiServices = [
  {
    title: "Relatórios Inteligentes",
    features: ["Relatórios mensais de desempenho automáticos", "Análise de métricas e insights", "Sugestões de otimização baseadas em dados"]
  },
  {
    title: "Assistente Virtual",
    features: ["Assistente por WhatsApp com IA", "Suporte humano quando necessário", "Diagnóstico de marketing automático"]
  }];


  const additionalServices = [
  { name: "Impressão de 100 cartões de visita", price: "R$ 80 – R$ 120", icon: "🎴" },
  { name: "Catálogo digital interativo", price: "R$ 300", icon: "📱" },
  { name: "Vídeos Reels (extra)", price: "R$ 80 – R$ 150/un", icon: "🎬" },
  { name: "Landing Page para campanha", price: "R$ 400", icon: "🌐" },
  { name: "Consultoria estratégica mensal", price: "R$ 250", icon: "💡" },
  { name: "Criação de e-mail profissional", price: "R$ 100 (setup)", icon: "📧" },
  { name: "Google Meu Negócio otimizado", price: "R$ 200", icon: "🗺️" }];


  const handleConsultationClick = () => {
    window.open('https://wa.me/5511965262002?text=Olá! Gostaria de agendar uma consultoria gratuita sobre o Plano Fusion.', '_blank');
  };

  const handleStartClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSpecialistClick = () => {
    window.open('https://wa.me/5511965262002?text=Olá! Gostaria de falar com um especialista sobre o Plano Fusion.', '_blank');
  };

  const ServiceCard = ({ icon, title, description, features, index }: {icon?: React.ReactNode;title: string;description?: string;features: string[];index: number;}) =>
  <motion.div
    custom={index}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="glass rounded-2xl p-6 hover:border-primary/20 transition-all duration-300 group">

      <div className="flex items-center gap-3 mb-4">
        {icon &&
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
      }
        <h3 className="text-lg font-heading font-semibold text-foreground">{title}</h3>
      </div>
      {description && <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{description}</p>}
      <ul className="space-y-2.5">
        {features.map((feature, i) =>
      <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            {feature}
          </li>
      )}
      </ul>
    </motion.div>;


  const TabHeader = ({ icon, title, subtitle }: {icon: React.ReactNode;title: string;subtitle: string;}) =>
  <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-heading font-bold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>;


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(270,70%,60%)]/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto">

            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Plano Fusion
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              <span className="text-gradient">Plano Fusion</span>
              <br />
              <span className="text-foreground">Completo</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Atendemos empresas pequenas, médias e grandes, que querem atuar tanto no físico como também no digital
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm group"
              onClick={handleConsultationClick}>

              Agende sua Consultoria Gratuita
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Tabs Content */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="digital" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12 h-12">
              <TabsTrigger value="digital" className="text-xs sm:text-sm">
                <Smartphone className="w-4 h-4 mr-1.5 hidden sm:inline-block" />
                Digital
              </TabsTrigger>
              <TabsTrigger value="physical" className="text-xs sm:text-sm">
                <Camera className="w-4 h-4 mr-1.5 hidden sm:inline-block" />
                Físico
              </TabsTrigger>
              <TabsTrigger value="ai" className="text-xs sm:text-sm">
                <Brain className="w-4 h-4 mr-1.5 hidden sm:inline-block" />
                IA
              </TabsTrigger>
              <TabsTrigger value="extras" className="text-xs sm:text-sm">
                <Star className="w-4 h-4 mr-1.5 hidden sm:inline-block" />
                Extras
              </TabsTrigger>
            </TabsList>

            {/* Digital */}
            <TabsContent value="digital">
              <TabHeader icon={<Smartphone className="w-6 h-6" />} title="Serviços Digitais" subtitle="Transforme sua presença digital com soluções completas" />
              <div className="grid md:grid-cols-2 gap-5 mb-16">
                {digitalServices.map((s, i) =>
                <ServiceCard key={i} index={i} icon={s.icon} title={s.title} description={s.description} features={s.features} />
                )}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[hsl(270,70%,60%)]/5" />
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                    <span className="text-foreground">Pronto para </span>
                    <span className="text-gradient">revolucionar</span>
                    <br />
                    <span className="text-foreground">seu marketing digital?</span>
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                    Comece agora e conte com suporte total da nossa equipe desde o primeiro dia.
                    <span className="block mt-2 text-foreground font-medium">
                      Junte-se a mais de 500 empresas que já transformaram seus resultados!
                    </span>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm group" onClick={handleStartClick}>
                      Comece Agora
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-border hover:bg-surface-elevated text-destructive-foreground" onClick={handleSpecialistClick}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Fale com um Especialista
                    </Button>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {["Não é necessário cartão de crédito", "Cancelamento a qualquer momento", "Suporte premium incluído"].map((text, i) =>
                    <div key={i} className="flex items-center justify-center text-sm text-muted-foreground gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {text}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Físico */}
            <TabsContent value="physical">
              <TabHeader icon={<Camera className="w-6 h-6" />} title="Materiais Físicos" subtitle="Integração perfeita entre físico e digital" />
              <div className="grid md:grid-cols-2 gap-5">
                {physicalServices.map((s, i) =>
                <ServiceCard key={i} index={i} title={s.title} features={s.features} />
                )}
              </div>
            </TabsContent>

            {/* IA */}
            <TabsContent value="ai">
              <TabHeader icon={<Brain className="w-6 h-6" />} title="Inteligência Artificial" subtitle="Tecnologia avançada para otimizar seus resultados" />
              <div className="grid md:grid-cols-2 gap-5">
                {aiServices.map((s, i) =>
                <ServiceCard key={i} index={i} title={s.title} features={s.features} />
                )}
              </div>
            </TabsContent>

            {/* Extras */}
            <TabsContent value="extras">
              <TabHeader icon={<Star className="w-6 h-6" />} title="Serviços Adicionais" subtitle="Expanda seu pacote com serviços personalizados" />
              <div className="grid sm:grid-cols-2 gap-4">
                {additionalServices.map((s, i) =>
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass rounded-xl p-5 flex items-center justify-between hover:border-primary/20 transition-all duration-300">

                    <div className="flex items-center gap-3">
                      <span className="text-xl">{s.icon}</span>
                      <span className="text-sm font-medium text-foreground">{s.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-primary whitespace-nowrap ml-4">{s.price}</span>
                  </motion.div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Pronto para transformar </span>
              <span className="text-gradient">seu negócio?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Entre em contato conosco e descubra como podemos impulsionar sua empresa
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm group" onClick={handleConsultationClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale Conosco no WhatsApp
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default Services;