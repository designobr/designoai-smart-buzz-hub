import { motion } from 'framer-motion';

/** SitesIA — floating wireframe of a website in perspective */
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
        className="w-56 h-64 rounded-xl border border-border/50 bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden"
        style={{ rotateY: -8, rotateX: 5 }}
      >
        {/* Browser chrome */}
        <div className="h-6 bg-muted/30 border-b border-border/30 flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-destructive/40" />
          <div className="w-2 h-2 rounded-full bg-warning/40" />
          <div className="w-2 h-2 rounded-full bg-green-500/40" />
          <div className="ml-3 h-2.5 w-24 rounded-full bg-muted/40" />
        </div>

        <div className="p-4 space-y-3">
          {/* Nav */}
          <motion.div
            className="flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-2 w-8 rounded bg-primary/30" />
            <div className="h-2 w-6 rounded bg-muted/40" />
            <div className="h-2 w-6 rounded bg-muted/40" />
            <div className="h-2 w-6 rounded bg-muted/40" />
          </motion.div>

          {/* Hero area */}
          <motion.div
            className="h-16 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="space-y-1.5 text-center">
              <div className="h-2 w-20 mx-auto rounded bg-foreground/10" />
              <div className="h-1.5 w-14 mx-auto rounded bg-muted/40" />
            </div>
          </motion.div>

          {/* Card grid */}
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-10 rounded-md bg-muted/20 border border-border/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.15 }}
              />
            ))}
          </div>

          {/* Content lines */}
          <div className="space-y-1.5">
            {[80, 65, 50].map((w, i) => (
              <motion.div
                key={i}
                className="h-1.5 rounded bg-muted/30"
                style={{ width: `${w}%` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 + i * 0.1 }}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="h-5 w-16 rounded-md bg-primary/20 border border-primary/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
          />
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default WireframeVisual;
