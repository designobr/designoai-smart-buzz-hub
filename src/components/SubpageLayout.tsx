
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface SubpageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  badge?: string;
}

const SubpageLayout = ({ children, title, subtitle, badge }: SubpageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(270,70%,60%)]/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {badge && (
              <div className="inline-flex items-center px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-6">
                {badge}
              </div>
            )}
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              <span className="text-gradient">{title}</span>
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {children}

      <Footer />
    </div>
  );
};

export default SubpageLayout;
