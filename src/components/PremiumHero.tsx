import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PremiumHeroProps {
  badge?: string;
  title?: string;
  titleGradient?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  secondaryCtaLabel?: string;
  onSecondaryCta?: () => void;
  visualElement?: ReactNode;
}

const PremiumHero = ({
  badge,
  title,
  titleGradient,
  subtitle,
  ctaLabel,
  ctaHref,
  onCtaClick,
  secondaryCtaLabel,
  onSecondaryCta,
  visualElement,
}: PremiumHeroProps) => {
  const handleCta = () => {
    if (ctaHref) window.open(ctaHref, '_blank');
    else if (onCtaClick) onCtaClick();
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-[hsl(270,70%,60%)]/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left"
          >
            {badge && (
              <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                {badge}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6">
              {title && <span className="text-foreground">{title} </span>}
              {titleGradient && <span className="text-gradient">{titleGradient}</span>}
            </h1>

            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
                {subtitle}
              </p>
            )}

            {(ctaLabel || secondaryCtaLabel) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {ctaLabel && (
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm text-base px-8 py-6 rounded-xl group transition-all duration-300 hover:-translate-y-0.5"
                    onClick={handleCta}
                  >
                    {ctaLabel}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                )}
                {secondaryCtaLabel && (
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-accent text-foreground rounded-xl"
                    onClick={onSecondaryCta}
                  >
                    {secondaryCtaLabel}
                  </Button>
                )}
              </div>
            )}
          </motion.div>

          {/* Right Column — Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            {visualElement || <DefaultVisual />}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
    </section>
  );
};

/* ─── Default Visual: floating orbs ─── */
const DefaultVisual = () => (
  <div className="relative w-64 h-64">
    <div className="absolute inset-0 bg-primary/10 rounded-full blur-[60px]" />
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full h-full"
    >
      <div className="absolute inset-4 rounded-full border border-primary/20 bg-card/30 backdrop-blur-xl flex items-center justify-center">
        <Sparkles className="w-16 h-16 text-primary/40" />
      </div>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-primary/40"
          style={{
            top: `${20 + i * 25}%`,
            left: `${i % 2 === 0 ? 10 : 80}%`,
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
        />
      ))}
    </motion.div>
  </div>
);

export default PremiumHero;
