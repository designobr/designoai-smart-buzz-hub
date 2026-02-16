
import { Button } from '@/components/ui/button';
import { Check, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Pricing = () => {
  const startFeatures = ["12 artes premium personalizadas", "Suporte de IA na criação visual", "Sugestão de temas com base em tendências", "Processo de aprovação com revisão", "Atendimento via WhatsApp"];
  const plusFeatures = ["18 artes premium personalizadas", "Suporte de IA no processo criativo", "Sugestão de temas com base em tendências", "Processo de aprovação com revisão", "Atendimento via WhatsApp"];
  const fusionDigital = ["Gestão de Redes Sociais (12 posts/mês)", "Stories diários programados", "Design Gráfico + Copywriting", "Tráfego Pago + Site Responsivo"];
  const fusionPhysical = ["Cartão de Visita Digital", "Sessão de Fotos + Vídeo"];
  const fusionAI = ["Relatórios de desempenho", "Assistente WhatsApp com IA"];

  const handleWhatsAppClick = (planName: string) => {
    const message = `Olá! Tenho interesse no ${planName} do DesignoAI. Gostaria de solicitar um orçamento.`;
    window.open(`https://wa.me/5511965262002?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCalculatorClick = () => {
    const el = document.getElementById('calculator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
            Planos
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Nossos <span className="text-gradient">Planos</span>
          </h2>
          <p className="text-muted-foreground text-lg">Escolha o plano ideal para sua empresa</p>
          <p className="text-sm text-muted-foreground mt-2">Orçamento sob consulta • Entre em contato via WhatsApp</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {/* Start */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6 flex flex-col hover:border-primary/20 transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">Start</h3>
              <p className="text-sm text-primary font-medium mb-2">Orçamento sob consulta</p>
              <p className="text-xs text-muted-foreground">Ideal para pequenos negócios com presença visual</p>
            </div>
            <ul className="space-y-3 mb-6 flex-1">
              {startFeatures.map((f, i) => (
                <li key={i} className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-secondary text-foreground hover:bg-secondary/80" onClick={() => handleWhatsAppClick('Pacote Start')}>
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </motion.div>

          {/* Plus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6 flex flex-col hover:border-primary/20 transition-all duration-300"
          >
            <div className="mb-6">
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">Plus</h3>
              <p className="text-sm text-primary font-medium mb-2">Orçamento sob consulta</p>
              <p className="text-xs text-muted-foreground">Plano intermediário com mais artes</p>
            </div>
            <ul className="space-y-3 mb-6 flex-1">
              {plusFeatures.map((f, i) => (
                <li key={i} className="flex items-start text-sm">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-secondary text-foreground hover:bg-secondary/80" onClick={() => handleWhatsAppClick('Pacote Plus')}>
              <MessageCircle className="w-4 h-4 mr-2" />
              Solicitar Orçamento
            </Button>
          </motion.div>

          {/* Fusion - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative md:scale-105 md:-mt-4"
          >
            <div className="animated-border rounded-2xl p-6 flex flex-col glow-md">
              {/* Shimmer badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[hsl(270,70%,60%)] text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold overflow-hidden">
                <span className="relative z-10">MAIS COMPLETO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </div>

              {/* Radial glow background */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,hsl(195,100%,50%,0.05),transparent_70%)]" />

              <div className="mb-6 pt-2 relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-heading font-bold text-foreground">Fusion</h3>
                </div>
                <p className="text-sm text-primary font-medium mb-2">Orçamento sob consulta</p>
                <p className="text-xs text-muted-foreground">Marketing físico + digital + IA</p>
              </div>

              <div className="space-y-4 mb-6 flex-1 relative z-10">
                <div>
                  <p className="text-xs font-medium text-foreground mb-2 uppercase tracking-wider">📱 Digital</p>
                  <ul className="space-y-1.5">
                    {fusionDigital.map((f, i) => (
                      <li key={i} className="flex items-start text-xs">
                        <Check className="w-3 h-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground mb-2 uppercase tracking-wider">🧾 Físico</p>
                  <ul className="space-y-1.5">
                    {fusionPhysical.map((f, i) => (
                      <li key={i} className="flex items-start text-xs">
                        <Check className="w-3 h-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground mb-2 uppercase tracking-wider">🤖 IA</p>
                  <ul className="space-y-1.5">
                    {fusionAI.map((f, i) => (
                      <li key={i} className="flex items-start text-xs">
                        <Check className="w-3 h-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-sm" onClick={() => handleWhatsAppClick('Pacote Fusion')}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Orçamento
                </Button>
                <Link to="/services" className="block">
                  <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground">
                    Ver Detalhes <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-10">
          <Button variant="ghost" className="text-primary hover:text-primary/80" onClick={handleCalculatorClick}>
            Ver Seletor de Serviços →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
