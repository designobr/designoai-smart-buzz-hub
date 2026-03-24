
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import PremiumHero from '@/components/PremiumHero';

interface SubpageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
  seoDescription?: string;
  seoPath?: string;
  visualElement?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const SubpageLayout = ({ children, title, subtitle, badge, seoDescription, seoPath, visualElement, ctaLabel, ctaHref, onCtaClick }: SubpageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={seoDescription || subtitle || `${title} - Soluções de marketing digital com IA da DesignoAI.`}
        path={seoPath}
      />
      <Navbar />

      <PremiumHero
        badge={badge}
        titleGradient={title}
        subtitle={subtitle}
        visualElement={visualElement}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        onCtaClick={onCtaClick}
      />

      {children}

      <Footer />
    </div>
  );
};

export default SubpageLayout;
