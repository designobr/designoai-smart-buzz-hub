import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Zap } from 'lucide-react';

/** Recursos page — floating mini cards in 3D perspective */
const FloatingCardsVisual = () => {
  const cards = [
    { icon: Sparkles, label: 'IA', x: 0, y: 0, rotate: -6 },
    { icon: BarChart3, label: 'Analytics', x: 40, y: -30, rotate: 4 },
    { icon: Zap, label: 'Automação', x: -20, y: 50, rotate: -3 },
  ];

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
      <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full flex items-center justify-center"
        style={{ perspective: 800 }}
      >
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={i}
              className="absolute rounded-xl border border-border/50 bg-card/60 backdrop-blur-xl p-4 shadow-xl"
              style={{ x: card.x, y: card.y, rotateZ: card.rotate }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [card.y, card.y - 10, card.y] }}
              transition={{
                opacity: { duration: 0.5, delay: i * 0.2 },
                scale: { duration: 0.5, delay: i * 0.2 },
                y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 },
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{card.label}</div>
                  <div className="w-12 h-1 rounded bg-muted mt-1" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default FloatingCardsVisual;
