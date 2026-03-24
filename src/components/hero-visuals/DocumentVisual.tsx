import { motion } from 'framer-motion';

/** Blog page — document with animated text lines */
const DocumentVisual = () => {
  const lines = [85, 70, 90, 60, 80, 50, 75];

  return (
    <div className="relative w-64 h-72 md:w-72 md:h-80 mx-auto">
      <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-full h-full"
      >
        <div className="absolute inset-0 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl p-6 shadow-2xl">
          {/* Doc header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-sm bg-primary/40" />
            <div className="h-2 w-20 rounded bg-muted/50" />
          </div>
          <div className="h-3 w-3/4 rounded bg-foreground/10 mb-6" />

          {/* Text lines appearing */}
          <div className="space-y-3">
            {lines.map((w, i) => (
              <motion.div
                key={i}
                className="h-2 rounded-full bg-muted/40"
                style={{ width: `${w}%` }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.15 }}
              />
            ))}
          </div>

          {/* Bottom accent */}
          <motion.div
            className="absolute bottom-6 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-primary/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 2 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>

        {/* Floating tag */}
        <motion.div
          className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg border border-border/50 bg-card/80 backdrop-blur-xl shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[10px] font-medium text-primary">📝 Novo</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DocumentVisual;
