import { motion } from 'framer-motion';

/** Home page — futuristic AI dashboard with animated bars and indicators */
const DashboardVisual = () => {
  const bars = [65, 85, 45, 90, 70, 55, 80];

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Main panel */}
        <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl p-6 shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">AI Dashboard</span>
            </div>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            </div>
          </div>

          {/* Metric cards row */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Leads', value: '2.4k', color: 'bg-primary/20 text-primary' },
              { label: 'Conversão', value: '18%', color: 'bg-[hsl(270,70%,60%)]/20 text-[hsl(270,70%,60%)]' },
              { label: 'ROI', value: '340%', color: 'bg-primary/20 text-primary' },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="rounded-lg bg-background/50 border border-border/30 p-3 text-center"
              >
                <div className={`text-lg font-heading font-bold ${m.color.split(' ')[1]}`}>{m.value}</div>
                <div className="text-[10px] text-muted-foreground">{m.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Bar chart */}
          <div className="flex items-end gap-2 h-24 mb-4">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-primary/60 to-primary/20"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
              />
            ))}
          </div>

          {/* Data lines */}
          <div className="space-y-2">
            {[75, 60, 45].map((w, i) => (
              <motion.div
                key={i}
                className="h-1.5 rounded-full bg-muted/50 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + i * 0.1 }}
              >
                <motion.div
                  className="h-full rounded-full bg-primary/30"
                  initial={{ width: 0 }}
                  animate={{ width: `${w}%` }}
                  transition={{ duration: 1, delay: 1.6 + i * 0.1 }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating indicator */}
        <motion.div
          className="absolute -top-4 -right-4 rounded-xl border border-border/50 bg-card/80 backdrop-blur-xl px-4 py-2 shadow-lg"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-muted-foreground">IA Ativa</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardVisual;
