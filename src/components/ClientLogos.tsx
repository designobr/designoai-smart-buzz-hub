
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const segments = [
  'E-commerce', 'Saúde', 'Advocacia', 'Gastronomia', 'Educação',
  'Tecnologia', 'Imobiliário', 'Fitness', 'Moda', 'Indústria',
  'Consultoria', 'Veterinária', 'Estética', 'Contabilidade',
];

const ClientLogos = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Empresas que confiam em nós
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-6">
            Mais de <span className="text-gradient">500 empresas</span> já transformaram seu marketing
          </h2>

          {/* Rating + avatars */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex -space-x-2">
              {['bg-primary/20', 'bg-[hsl(270,70%,60%)]/20', 'bg-warning/20', 'bg-success/20', 'bg-info/20'].map((bg, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${bg} border-2 border-background flex items-center justify-center text-[10px] font-bold text-foreground`}
                >
                  {['J', 'R', 'C', 'M', 'A'][i]}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-warning fill-current" />
              ))}
              <span className="text-sm font-semibold text-foreground ml-1">4.9/5</span>
            </div>
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="overflow-hidden">
            <div className="marquee-track">
              {[...segments, ...segments].map((segment, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-2 px-5 py-2.5 glass rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {segment}
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground mt-8"
        >
          {[
            { dot: 'bg-success', label: '99.9% Uptime' },
            { dot: 'bg-primary', label: 'ISO 27001' },
            { dot: 'bg-[hsl(270,70%,60%)]', label: 'GDPR Compliant' },
            { dot: 'bg-warning', label: '24/7 Support' },
          ].map((item, i) => (
            <div key={i} className="flex items-center">
              <div className={`w-1.5 h-1.5 ${item.dot} rounded-full mr-2`} />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;
