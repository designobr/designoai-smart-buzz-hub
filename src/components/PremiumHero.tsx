import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ActionButton from '@/components/ActionButton';

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
  /** Deprecated: decorative visuals were removed from the design system. */
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
}: PremiumHeroProps) => {
  const handleCta = () => {
    if (ctaHref) window.open(ctaHref, '_blank');
    else if (onCtaClick) onCtaClick();
  };

  const heading = [title, titleGradient].filter(Boolean).join(' ');
  const cleanBadge = badge?.replace(/[^\p{L}\p{N}\s&/+.-]/gu, '').trim();

  return (
    <section className="border-b border-border pb-20 pt-[128px] md:pb-24 md:pt-[168px]">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            {cleanBadge && <p className="eyebrow">{cleanBadge}</p>}
            <h1 className="display-1 mt-6 max-w-3xl text-foreground">{heading}</h1>
          </div>

          <div className="lg:col-span-4">
            {subtitle && <p className="text-base text-muted-foreground">{subtitle}</p>}
            {(ctaLabel || secondaryCtaLabel) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {ctaLabel && (
                  <ActionButton onClick={handleCta}>
                    {ctaLabel}
                    <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
                  </ActionButton>
                )}
                {secondaryCtaLabel && (
                  <ActionButton variant="secondary" onClick={onSecondaryCta}>
                    {secondaryCtaLabel}
                  </ActionButton>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumHero;
