
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[hsl(270,70%,60%)]/3 rounded-full blur-[120px]" />
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
            Por que DesignoAI?
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-gradient">A Revolução</span>
            <span className="text-foreground"> do Marketing</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Nossa plataforma reúne o melhor da inteligência artificial para transformar sua estratégia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-[hsl(270,70%,60%)]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass rounded-2xl p-6 overflow-hidden">
                <img
                  src="/lovable-uploads/d829b16b-0e24-4f64-beac-e8a25b579587.png"
                  alt="DesignoAI Coffee Cup"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 md:order-2"
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              <span className="text-gradient">Ganhe tempo e eficiência</span>
              <br />
              <span className="text-foreground">em suas campanhas</span>
            </h3>

            <div className="space-y-5 mb-8">
              {[
                { title: "Automação Inteligente", description: "Reduza horas de trabalho com automação de tarefas de marketing" },
                { title: "Personalização em Escala", description: "Crie conteúdo personalizado para diferentes segmentos" },
                { title: "Análise Preditiva", description: "Antecipe tendências e comportamentos do seu público-alvo" },
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/recursos">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Conheça todos os recursos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">
              <span className="text-gradient">Resultados mensuráveis</span>
              <br />
              <span className="text-foreground">e consistentes</span>
            </h3>

            <div className="space-y-5">
              {[
                { title: "Dashboard Intuitivo", description: "Acompanhe todos os seus KPIs em um único lugar" },
                { title: "Relatórios Automatizados", description: "Receba insights semanais sobre o desempenho" },
                { title: "Otimização Contínua", description: "Nossa IA aprende e melhora suas estratégias automaticamente" },
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mr-4 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-200">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(270,70%,60%)]/20 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass rounded-2xl p-6 overflow-hidden">
                <img
                  src="/lovable-uploads/f8692a56-e528-4392-9a28-98a1e875ec76.png"
                  alt="DesignoAI Mug"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
