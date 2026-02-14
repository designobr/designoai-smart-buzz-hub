
import { motion } from 'framer-motion';

const ClientLogos = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">
            Empresas que confiam em nós
          </p>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            Mais de <span className="text-gradient">500 empresas</span> já transformaram seu marketing
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 text-xs text-muted-foreground"
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
