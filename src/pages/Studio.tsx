import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, Instagram, Linkedin, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import SEOHead from '@/components/SEOHead';
import { useI18n } from '@/i18n/I18nProvider';

// Gallery portrait images
import portrait1 from '@/assets/studio/portrait-1.png';
import portrait2 from '@/assets/studio/portrait-2.png';
import portrait3 from '@/assets/studio/portrait-3.png';
import portrait4 from '@/assets/studio/portrait-4.png';
import example5 from '@/assets/studio/example-5.png';
import example6 from '@/assets/studio/example-6.png';
import example7 from '@/assets/studio/example-7.png';
import example8 from '@/assets/studio/example-8.png';

// Testimonial images
import testimonialFernanda from '@/assets/studio/testimonial-fernanda.png';
import testimonialLucas from '@/assets/studio/testimonial-lucas.png';
import testimonialAmanda from '@/assets/studio/testimonial-amanda.png';
import testimonialGabriel from '@/assets/studio/testimonial-gabriel.png';

const Studio = () => {
  const { t, tList } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511947968158', '_blank');
  };

  const targetAudience = tList<{ title: string; description: string }>('studio.audience.items');
  const benefits = tList<{ title: string; description: string }>('studio.benefits.items');
  const traditionalList = tList<string>('studio.comparison.traditionalList');
  const designoaiList = tList<string>('studio.comparison.designoaiList');
  const steps = tList<{ title: string; description: string }>('studio.steps.items');
  const faqs = tList<{ question: string; answer: string }>('studio.faq.items');

  const contactData = tList<{ title: string; info: string; subtitle: string }>('studio.contact.items');
  const contacts = [
    { ...contactData[0], icon: <Phone className="w-8 h-8" />, link: 'https://wa.me/5511947968158' },
    { ...contactData[1], icon: <Mail className="w-8 h-8" />, link: 'mailto:contato@designoai.com.br' },
    { ...contactData[2], icon: <Instagram className="w-8 h-8" />, link: 'https://instagram.com/designoai.br' },
    { ...contactData[3], icon: <Linkedin className="w-8 h-8" />, link: 'https://www.linkedin.com/in/kauewebster' },
  ];

  const galleryImages = [portrait1, portrait2, portrait3, portrait4, example5, example6, example7, example8];

  const testimonialImages = [testimonialFernanda, testimonialLucas, testimonialAmanda, testimonialGabriel];
  const testimonialData = tList<{ name: string; role: string; text: string }>('studio.testimonials.items');
  const testimonials = testimonialData.map((item, i) => ({
    ...item,
    image: testimonialImages[i],
    rating: 5,
  }));

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title={t('studio.seo.title')}
        description={t('studio.seo.description')}
        path="/studio"
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
 className="text-center md:text-left"
            >
              <div className="inline-flex items-center px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground mb-6 border border-border">
                {t('studio.hero.badge')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6 text-foreground">
                {t('studio.hero.titlePrefix')} <span className="text-muted-foreground">{t('studio.hero.titleSuffix')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
                {t('studio.hero.subtitle')}
              </p>
              <button
                onClick={handleWhatsAppClick}
 className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-lg font-bold rounded-xl shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
              >
                {t('studio.hero.cta')}
              </button>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Para Quem Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              {t('studio.audience.heading')}
            </h2>
            <div className="w-20 h-1 bg-border mx-auto rounded-full mb-12" />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
 className="group bg-secondary p-8 rounded-2xl border border-border hover:-translate-y-2 hover:border-foreground/20 hover:shadow-card-hover transition-all duration-400 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Escolher Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              {t('studio.benefits.heading')}
            </h2>
            <div className="w-20 h-1 bg-border mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
 className="group bg-secondary p-8 rounded-2xl border border-border hover:-translate-y-2 hover:border-foreground/20 hover:shadow-card-hover transition-all duration-400 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              {t('studio.gallery.heading')}
            </h2>
            <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
              {t('studio.gallery.subtitle')}
            </p>
            <div className="w-20 h-1 bg-border mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
 className="group relative overflow-hidden rounded-2xl aspect-[3/4] border border-border hover:border-foreground/20 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={image} 
                  alt={t('studio.gallery.imageAlt', { number: index + 1 })}
 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="text-foreground text-sm font-semibold">{t('studio.gallery.badge')}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p 
 className="text-center text-muted-foreground text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {t('studio.gallery.footnote')}
          </motion.p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              {t('studio.testimonials.heading')}
            </h2>
            <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
              {t('studio.testimonials.subtitle')}
            </p>
            <div className="w-20 h-1 bg-border mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
 className="group bg-secondary p-6 md:p-8 rounded-2xl border border-border hover:border-foreground/20 hover:shadow-card-hover transition-all duration-400 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-border">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
 className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              {t('studio.comparison.heading')}
            </h2>
            <div className="w-20 h-1 bg-border mx-auto rounded-full mb-12" />
          </motion.div>

          <motion.div 
 className="bg-secondary rounded-3xl p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl md:text-8xl font-black text-muted-foreground z-0">VS</span>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">{t('studio.comparison.traditionalTitle')}</h3>
              <ul className="space-y-3">
                {traditionalList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary-foreground font-bold"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">{t('studio.comparison.designoaiTitle')}</h3>
              <ul className="space-y-3">
                {designoaiList.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary-foreground font-bold"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              {t('studio.steps.heading')}
            </h2>
            <div className="w-20 h-1 bg-border mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={index}
 className="group bg-secondary p-8 rounded-2xl border border-border hover:-translate-y-2 hover:border-foreground/20 hover:shadow-card-hover transition-all duration-400 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
 className="bg-secondary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
 className="absolute -top-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <span className="text-5xl mb-4 block"></span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{t('studio.guarantee.heading')}</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">{t('studio.guarantee.subheading')}</h3>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('studio.guarantee.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              {t('studio.faq.heading')}
            </h2>
            <div className="w-20 h-1 bg-border mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
 className="bg-secondary rounded-2xl border border-border overflow-hidden hover:border-foreground/20 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
 className="w-full p-6 text-left font-bold text-foreground flex justify-between items-center hover:bg-secondary transition-all"
                >
                  <span>{faq.question}</span>
                  <span className={`text-2xl transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
 className="px-6 pb-6 text-muted-foreground leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} viewport={{ once: true }} whileInView="animate" initial="initial">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-4">
              {t('studio.contact.heading')}
            </h2>
            <div className="w-20 h-1 bg-border mx-auto rounded-full mb-12" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
 className="bg-secondary p-6 rounded-2xl border border-border text-center hover:-translate-y-1 hover:border-foreground/20 transition-all block"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-primary-foreground flex justify-center mb-3">{contact.icon}</div>
                <h3 className="font-bold mb-1">{contact.title}</h3>
                <p className="text-primary-foreground font-semibold">{contact.info}</p>
                <p className="text-muted-foreground text-sm">{contact.subtitle}</p>
              </motion.a>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-lg">
            {t('studio.contact.footnote')}
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <motion.div 
 className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div 
 className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            {t('studio.finalCta.heading')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t('studio.finalCta.subtitle')}
          </p>
          <button 
            onClick={handleWhatsAppClick}
 className="inline-block bg-primary text-primary-foreground px-8 py-4 text-lg md:text-xl font-bold rounded-full shadow-card hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300"
          >
            {t('studio.finalCta.button')}
          </button>
          <p className="mt-6 text-muted-foreground">
            {t('studio.finalCta.footnote')}
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-background border-t border-border text-center">
        <h3 className="text-2xl font-bold mb-2 text-foreground">
          DesignoAI
        </h3>
        <p className="text-muted-foreground mb-4">
          {t('studio.footer.tagline')}
        </p>
        <p className="text-muted-foreground text-sm">
          {t('studio.footer.copyright')}
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          {t('studio.footer.note')}
        </p>
      </footer>
    </div>
  );
};

export default Studio;
