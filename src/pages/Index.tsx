
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import PriceCalculator from '@/components/PriceCalculator';
import ContactForm from '@/components/ContactForm';
import ClientLogos from '@/components/ClientLogos';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        path="/"
        description="Agência de marketing digital com IA. Gestão de redes sociais, tráfego pago, design automatizado, SEO inteligente e criação de sites. Transforme sua marca com inteligência artificial."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'DesignoAI',
          url: 'https://designoai.lovable.app',
          description: 'Agência de marketing digital com inteligência artificial para impulsionar sua marca.',
          telephone: '+55-11-94796-8158',
          priceRange: '$$',
          address: { '@type': 'PostalAddress', addressCountry: 'BR' },
          openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' },
        }}
      />
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <Features />
      <HowItWorks />
      <Pricing />
      <PriceCalculator />
      <ContactForm />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
