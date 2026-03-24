import { motion } from 'framer-motion';

/** SitesIA — floating high-fidelity website mockup in perspective */
const WireframeVisual = () => (
  <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
    <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: 600 }}
    >
      <motion.div
        className="w-56 h-[280px] rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden"
        style={{ rotateY: -8, rotateX: 5 }}
      >
        {/* Browser chrome */}
        <div className="h-6 bg-muted/30 border-b border-border/30 flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-destructive/40" />
          <div className="w-2 h-2 rounded-full bg-warning/40" />
          <div className="w-2 h-2 rounded-full bg-green-500/40" />
          <div className="ml-3 h-2.5 w-24 rounded-full bg-muted/40" />
        </div>

        <div className="p-3 space-y-2">
          {/* 1. Header */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-[5px] font-bold text-primary">DesignoAI</span>
            <div className="flex flex-col gap-[1.5px]">
              <div className="w-2.5 h-px bg-foreground/30" />
              <div className="w-2.5 h-px bg-foreground/30" />
              <div className="w-2.5 h-px bg-foreground/30" />
            </div>
          </motion.div>

          {/* 2. Hero Section */}
          <motion.div
            className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 p-2.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-[6px] font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent leading-tight">
              Seu Site Inteligente
            </p>
            <div className="mt-1.5 space-y-1">
              <div className="h-1 w-[85%] rounded bg-muted/40" />
              <div className="h-1 w-[60%] rounded bg-muted/40" />
            </div>
            <div className="flex gap-1.5 mt-2">
              <div className="h-3 w-10 rounded-full bg-primary/30 border border-primary/20 shadow-[0_0_6px_hsl(var(--primary)/0.3)]" />
              <div className="h-3 w-10 rounded-full bg-muted/20 border border-border/20" />
            </div>
          </motion.div>

          {/* 3. Features Grid 2x2 */}
          <div className="grid grid-cols-2 gap-1.5">
            {[
              // Zap (lightning bolt)
              'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
              // Gear
              'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
              // Rocket
              'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',
              // BarChart
              'M12 20V10M18 20V4M6 20v-4',
            ].map((path, i) => (
              <motion.div
                key={i}
                className="bg-muted/10 border border-border/20 rounded-md p-1.5 flex flex-col items-center gap-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.15 }}
              >
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                >
                  <path d={path} />
                </svg>
                <div className="w-full space-y-0.5">
                  <div className="h-[2px] w-full rounded bg-muted/30" />
                  <div className="h-[2px] w-3/4 rounded bg-muted/30" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4. Form Section */}
          <motion.div
            className="space-y-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            <div className="h-3 w-full rounded bg-background/30 border border-border/30 flex items-center px-1.5">
              <span className="text-[4px] text-muted-foreground/50">Nome</span>
            </div>
            <div className="h-3 w-full rounded bg-background/30 border border-border/30 flex items-center px-1.5">
              <span className="text-[4px] text-muted-foreground/50">Email</span>
            </div>
            <div className="h-3.5 w-full rounded bg-primary/30 border border-primary/20 flex items-center justify-center shadow-[0_0_8px_hsl(var(--primary)/0.25)]">
              <span className="text-[4px] text-primary-foreground/70 font-semibold">Enviar</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default WireframeVisual;
