import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import Services from '@/components/Services';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import PriceCalculator from '@/components/PriceCalculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        path="/"
        description="Estúdio de marketing e design com inteligência artificial. Estratégia, identidade visual, conteúdo, tráfego pago e sites para marcas que querem crescer com consistência."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'DesignoAI',
          url: 'https://designoai.lovable.app',
          description:
            'Estúdio de marketing e design que combina método editorial e inteligência artificial.',
          telephone: '+55-11-94796-8158',
          priceRange: '$$',
          address: { '@type': 'PostalAddress', addressCountry: 'BR' },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        <Services />
        <Features />
        <HowItWorks />
        <Pricing />
        <PriceCalculator />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
