import { motion } from 'framer-motion';

/** Parcerias page — two circles connecting with animated line */
const HandshakeVisual = () => (
  <div className="relative w-72 h-64 md:w-80 md:h-72 mx-auto">
    <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Left circle */}
      <motion.div
        className="absolute left-4 md:left-6 w-24 h-24 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl flex items-center justify-center shadow-xl"
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-2xl font-heading font-bold text-primary/60">A</span>
      </motion.div>

      {/* Right circle */}
      <motion.div
        className="absolute right-4 md:right-6 w-24 h-24 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-xl flex items-center justify-center shadow-xl"
        animate={{ x: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-2xl font-heading font-bold text-[hsl(270,70%,60%)]/60">B</span>
      </motion.div>

      {/* Connecting line */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 280">
        <motion.line
          x1="115" y1="140" x2="205" y2="140"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.circle
          cx="160" cy="140" r="6"
          fill="hsl(var(--primary))"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      {/* Central spark */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-primary"
        animate={{ scale: [0, 1.5, 0], opacity: [0, 0.8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  </div>
);

export default HandshakeVisual;
