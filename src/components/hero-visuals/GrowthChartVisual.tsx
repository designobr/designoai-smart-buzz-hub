import { motion } from 'framer-motion';

/** Casos de Sucesso — animated growth chart */
const GrowthChartVisual = () => {
  const pathData = 'M 10 80 Q 25 75, 30 60 T 50 45 T 70 25 T 90 10';

  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
      <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full"
      >
        <div className="absolute inset-4 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl p-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground font-medium">Crescimento</span>
          </div>

          <svg viewBox="0 0 100 90" className="w-full h-full">
            {/* Grid lines */}
            {[20, 40, 60, 80].map((y) => (
              <line key={y} x1="10" y1={y} x2="90" y2={y} stroke="hsl(var(--border))" strokeWidth="0.3" strokeOpacity="0.5" />
            ))}

            {/* Area fill */}
            <motion.path
              d={`${pathData} L 90 80 L 10 80 Z`}
              fill="hsl(var(--primary))"
              fillOpacity="0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Main line */}
            <motion.path
              d={pathData}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
            />

            {/* End dot */}
            <motion.circle
              cx="90" cy="10" r="3"
              fill="hsl(var(--primary))"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
            />

            {/* Arrow */}
            <motion.path
              d="M 85 15 L 90 8 L 93 16"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            />
          </svg>
        </div>

        {/* Floating stat */}
        <motion.div
          className="absolute -top-2 -right-2 rounded-xl border border-border/50 bg-card/80 backdrop-blur-xl px-3 py-2 shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <span className="text-xs font-bold text-primary">+320%</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GrowthChartVisual;
