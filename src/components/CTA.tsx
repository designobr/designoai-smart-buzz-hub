
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
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
          className="relative glass rounded-3xl p-8 md:p-16 overflow-hidden"
        >
          {/* Mesh gradient background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]"
              animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[hsl(270,70%,60%)]/10 rounded-full blur-[80px]"
              animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[120px]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Radial highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(195,100%,50%,0.06),transparent_60%)]" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-8 border border-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Transforme seu Marketing
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              <motion.span
                className="text-foreground inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Pronto para{' '}
              </motion.span>
              <motion.span
                className="text-gradient inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                revolucionar
              </motion.span>
              <motion.span
                className="text-foreground inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {' '}seu marketing?
              </motion.span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se a mais de 500 empresas que já transformaram seus resultados com DesignoAI.
            </p>

            {/* Animated stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 400 }}
                >
                  <Star className="w-5 h-5 text-warning fill-current" />
                </motion.div>
              ))}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="ml-2 text-sm text-muted-foreground"
              >
                4.9/5 avaliação
              </motion.span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-xl group animate-pulse-glow"
                onClick={handleStartClick}
              >
                Começe Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-secondary text-base px-8 py-6 rounded-xl border-border text-foreground"
                onClick={handleSpecialistClick}
              >
                Fale com Especialista
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
              {['Sem cartão de crédito', 'Cancele quando quiser', 'Suporte premium'].map((text, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mr-2" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
