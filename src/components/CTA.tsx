
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  const handleStartClick = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSpecialistClick = () => {
    window.open('https://wa.me/5511965262002?text=Olá! Gostaria de falar com um especialista sobre o Plano Fusion.', '_blank');
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden">

          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[hsl(270,70%,60%)]/10 rounded-full blur-[80px]" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-8 border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Transforme seu Marketing
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              <span className="text-foreground">Pronto para </span>
              <span className="text-gradient">revolucionar</span>
              <span className="text-foreground"> seu marketing?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Junte-se a mais de 500 empresas que já transformaram seus resultados com DesignoAI.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-md text-base px-8 py-6 rounded-xl group"
                onClick={handleStartClick}>

                Começe Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-secondary text-base px-8 py-6 rounded-xl border-primary-foreground text-destructive-foreground"
                onClick={handleSpecialistClick}>

                Fale com Especialista
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              {['Sem cartão de crédito', 'Cancele quando quiser', 'Suporte premium'].map((text, i) =>
              <div key={i} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2" />
                  {text}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default CTA;