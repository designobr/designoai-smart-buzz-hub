import { motion } from 'framer-motion';

/** Studio — stylized camera lens with reflections */
const LensVisual = () => (
  <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
    <div className="absolute inset-0 bg-[hsl(270,70%,60%)]/10 rounded-full blur-[80px]" />
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Outer ring */}
      <div className="absolute w-56 h-56 rounded-full border-4 border-border/30 bg-card/30 backdrop-blur-xl" />

      {/* Inner ring */}
      <div className="absolute w-44 h-44 rounded-full border-2 border-border/20 bg-card/20" />

      {/* Lens glass */}
      <motion.div
        className="absolute w-32 h-32 rounded-full border border-primary/30 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 35% 35%, hsl(var(--primary) / 0.15), transparent 60%)',
        }}
      >
        {/* Reflection */}
        <motion.div
          className="absolute w-8 h-16 bg-white/5 rounded-full -rotate-45"
          style={{ top: '15%', left: '20%' }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-primary/30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Aperture blades hint */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute w-0.5 h-8 bg-primary/20"
          style={{
            transform: `rotate(${angle}deg) translateY(-52px)`,
            transformOrigin: 'center 52px',
          }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}

      {/* Focus indicator */}
      <motion.div
        className="absolute top-2 right-8 px-2 py-1 rounded bg-card/80 border border-border/50 backdrop-blur-xl"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.8, 1] }}
      >
        <span className="text-[9px] text-primary font-medium">AF ●</span>
      </motion.div>
    </motion.div>
  </div>
);

export default LensVisual;
