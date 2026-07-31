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

const SubpageLayout = ({
  children,
  title,
  subtitle,
  badge,
  seoDescription,
  seoPath,
  ctaLabel,
  ctaHref,
  onCtaClick,
}: SubpageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={title}
        description={seoDescription || subtitle || `${title} — DesignoAI, estúdio de marketing e design.`}
        path={seoPath}
      />
      <Navbar />

      <main>
        <PremiumHero
          badge={badge}
          title={title}
          subtitle={subtitle}
          ctaLabel={ctaLabel}
          ctaHref={ctaHref}
          onCtaClick={onCtaClick}
        />
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default SubpageLayout;
