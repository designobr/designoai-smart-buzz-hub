import { motion } from 'framer-motion';

/** SitesIA — floating high-fidelity "FinancePro" phone mockup with neon frame */
const WireframeVisual = () => (
  <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-80 mx-auto">
    {/* Radial glow behind phone */}
    <div className="absolute inset-0 bg-primary/15 rounded-full blur-[80px]" />

    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: 600 }}
    >
      <motion.div
        className="w-36 h-[230px] sm:w-44 sm:h-[270px] md:w-52 md:h-[320px] rounded-[20px] md:rounded-[24px] border border-primary/30 bg-background/95 backdrop-blur-xl overflow-hidden"
        style={{ rotateY: -8, rotateX: 5, boxShadow: '0 0 15px hsl(var(--primary) / 0.4), 0 0 40px hsl(var(--primary) / 0.15), 0 25px 50px -12px rgba(0,0,0,0.5)' }}
      >
        {/* Status bar */}
        <div className="h-5 flex items-center justify-between px-2 pt-1">
          <span className="text-[3.5px] text-muted-foreground/60 font-medium">9:41</span>
          <div className="w-12 h-1.5 rounded-full bg-foreground/10" />
          <div className="flex items-center gap-1">
            {/* WiFi */}
            <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground) / 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><circle cx="12" cy="20" r="1" />
            </svg>
            {/* Battery */}
            <svg width="7" height="4" viewBox="0 0 28 14" fill="none" stroke="hsl(var(--muted-foreground) / 0.5)" strokeWidth="1.5">
              <rect x="1" y="1" width="22" height="12" rx="2" /><rect x="3" y="3" width="14" height="8" rx="1" fill="hsl(var(--muted-foreground) / 0.4)" /><path d="M25 5v4" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <div className="px-1.5 pb-2 space-y-1.5 sm:px-3 sm:pb-3 sm:space-y-2">
          {/* 1. Header */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-0.5">
              {/* Diamond icon */}
              <svg width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l4 6-10 13L2 9z" />
              </svg>
              <span className="text-[5px] font-bold text-foreground tracking-wider">FINANCEPRO</span>
            </div>
            <div className="flex flex-col gap-[1.5px]">
              <div className="w-2.5 h-px bg-muted-foreground/30" />
              <div className="w-2.5 h-px bg-muted-foreground/30" />
              <div className="w-2.5 h-px bg-muted-foreground/30" />
            </div>
          </motion.div>

          {/* 2. Hero Section */}
          <motion.div
            className="pt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-[7px] font-bold leading-tight bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Sua Liberdade{'\n'}Financeira Começa Aqui
            </p>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-[3.5px] text-muted-foreground/70 leading-relaxed">
                Transforme suas finanças com estratégias
              </p>
              <p className="text-[3.5px] text-muted-foreground/70 leading-relaxed">
                personalizadas e alcance a independência
              </p>
              <p className="text-[3.5px] text-muted-foreground/70 leading-relaxed">
                financeira que você sempre sonhou.
              </p>
            </div>
            <div
              className="mt-2 h-4 w-full rounded-full bg-primary flex items-center justify-center"
              style={{ boxShadow: '0 0 8px hsl(var(--primary) / 0.4)' }}
            >
              <span className="text-[4px] text-primary-foreground font-semibold">Agendar Consultoria Gratuita</span>
            </div>
          </motion.div>

          {/* 3. Cards Grid 2x2 */}
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {[
              { path: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', title: 'Investimentos', desc: ['Maximize seus rendimentos', 'com estratégias inteligentes'] },
              { path: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z', title: 'Plan. Tributário', desc: ['Reduza impostos de forma', 'legal e otimizada'] },
              { path: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z', title: 'Aposentadoria', desc: ['Planeje seu futuro com', 'segurança e tranquilidade'] },
              { path: 'M12 20V10M18 20V4M6 20v-4', title: 'Patrimônio', desc: ['Construa e proteja seu', 'patrimônio a longo prazo'] },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="bg-card/70 border border-border/40 rounded-lg p-1.5 flex flex-col items-start gap-0.5"
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
                  className="opacity-80"
                >
                  <path d={card.path} />
                </svg>
                <span className="text-[4px] font-semibold text-foreground">{card.title}</span>
                {card.desc.map((line, j) => (
                  <span key={j} className="text-[3px] text-muted-foreground/60 leading-tight">{line}</span>
                ))}
              </motion.div>
            ))}
          </div>

          {/* 4. Footer */}
          <motion.div
            className="pt-1 space-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            <div className="h-px w-full bg-border/20" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-[4px] text-muted-foreground/50 font-medium">DesignoAI</span>
              <div className="flex items-center gap-1.5">
                {/* Facebook */}
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground) / 0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                {/* X / Twitter */}
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground) / 0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16zM4 20l6.768 -6.768M13.232 10.768L20 4" />
                </svg>
                {/* Instagram */}
                <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground) / 0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="hsl(var(--muted-foreground) / 0.4)" />
                </svg>
              </div>
              <span className="text-[3px] text-muted-foreground/30">© 2024 DesignoAI</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

export default WireframeVisual;
