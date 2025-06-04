
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

const Index = () => {
  return (
    <div className="min-h-screen">
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
