
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const steps = [
  { number: "01", title: "Análise de Dados", description: "Nossa IA analisa seu nicho, público-alvo e concorrentes para entender o cenário completo." },
  { number: "02", title: "Estratégia Personalizada", description: "Desenvolvemos uma estratégia exclusiva baseada nos insights coletados e em suas metas." },
  { number: "03", title: "Criação de Conteúdo", description: "Geramos conteúdo otimizado e adaptado para cada canal de marketing digital." },
  { number: "04", title: "Automação e Distribuição", description: "Publicamos e gerenciamos seu conteúdo nos momentos ideais para maximizar o engajamento." }
];

const HowItWorks = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
            Processo
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-foreground">Como o DesignoAI </span>
            <span className="text-gradient">Transforma</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo simplificado para resultados extraordinários
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 relative group hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl font-heading font-bold text-primary/10 mb-4 group-hover:text-primary/20 transition-colors">
                {step.number}
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Pronto para transformar seu marketing digital com o poder da inteligência artificial?
          </p>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm"
            onClick={handleContactClick}
          >
            Agende uma Conversa
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
