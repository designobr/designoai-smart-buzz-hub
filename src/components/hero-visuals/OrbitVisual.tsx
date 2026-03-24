import { motion } from 'framer-motion';
import { Zap, Globe, BarChart3, Palette, Smartphone, Brain } from 'lucide-react';

/** Services page — icons orbiting a central core */
const OrbitVisual = () => {
  const icons = [Globe, BarChart3, Palette, Smartphone, Brain, Zap];

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
      <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full"
      >
        {/* Center core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-card/60 backdrop-blur-xl border border-border/50 flex items-center justify-center shadow-xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Zap className="w-8 h-8 text-primary" />
          </motion.div>
        </div>

        {/* Orbit ring */}
        <div className="absolute inset-4 rounded-full border border-border/20" />
        <div className="absolute inset-0 rounded-full border border-border/10" />

        {/* Orbiting icons */}
        {icons.map((Icon, i) => {
          const angle = (360 / icons.length) * i;
          return (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2"
              animate={{ rotate: [angle, angle + 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '0 0' }}
            >
              <motion.div
                className="w-10 h-10 -ml-5 -mt-5 rounded-xl bg-card/70 backdrop-blur-xl border border-border/40 flex items-center justify-center shadow-lg"
                style={{ transform: `translate(${120}px, 0px)` }}
                animate={{ rotate: [-(angle), -(angle + 360)] }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              >
                <Icon className="w-4 h-4 text-primary" />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Pulse rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10"
            animate={{
              width: [40, 280],
              height: [40, 280],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: 'easeOut',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OrbitVisual;
