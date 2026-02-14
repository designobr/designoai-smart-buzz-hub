
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSparkEffect } from '@/hooks/useSparkEffect';

const testimonials = [
  {
    content: "O DesignoAI revolucionou completamente nossa estratégia de marketing. O que antes levava dias, agora é feito em horas, com resultados muito melhores.",
    author: "Juliana Mendes",
    role: "Marketing Manager, TechSoft",
    rating: 5,
  },
  {
    content: "A precisão com que a IA entende nosso público-alvo é impressionante. Conseguimos aumentar nosso engajamento em 230% no primeiro mês.",
    author: "Ricardo Torres",
    role: "CEO, Inova Digital",
    rating: 5,
  },
  {
    content: "Economizamos tempo e recursos enquanto aumentamos nossa presença online. Os insights nos ajudam a tomar decisões mais inteligentes.",
    author: "Camila Alves",
    role: "Social Media Director",
    rating: 5,
  }
];

const Testimonials = () => {
  const spark = useSparkEffect({ count: 6, spread: 30 });

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(270,70%,60%)]/3 rounded-full blur-[150px]" />
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
            <Quote className="w-4 h-4 mr-2" />
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="text-foreground">O Que Nossos Clientes </span>
            <span className="text-gradient">Dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.06] hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-warning fill-current"
                    onClick={(e) => spark(e as any, `star-${index}-${i}`)}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">"{t.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mr-3 text-primary font-heading font-bold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Award className="w-5 h-5" />, value: "4.9/5", label: "Avaliação" },
            { icon: <Users className="w-5 h-5" />, value: "500+", label: "Clientes" },
            { icon: <TrendingUp className="w-5 h-5" />, value: "98%", label: "Retenção" },
            { icon: <Star className="w-5 h-5" />, value: "24/7", label: "Suporte" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-5 text-center group hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary group-hover:bg-primary/20 transition-colors">
                {stat.icon}
              </div>
              <div className="text-xl font-heading font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
