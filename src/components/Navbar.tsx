
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSparkEffect } from '@/hooks/useSparkEffect';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const spark = useSparkEffect({ count: 6, spread: 40 });

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      setScrollProgress(Math.min(y / 200, 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultorClick = () => {
    window.open('https://wa.me/5511947968158?text=Olá! Gostaria de falar com um consultor sobre o DesignoAI.', '_blank');
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511947968158?text=Olá! Gostaria de saber mais sobre o DesignoAI.', '_blank');
  };

  const navLinks = [
    { to: '/studio', label: 'Studio' },
    { to: '/sites-ia', label: 'Sites IA' },
    { to: '/services', label: 'Serviços' },
    { to: '/recursos', label: 'Recursos' },
    { href: '#how-it-works', label: 'Como Funciona' },
    { href: '#pricing', label: 'Preços' },
    { href: '#contact', label: 'Contato' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: `hsl(220 16% 6% / ${0.4 + scrollProgress * 0.5})`,
        backdropFilter: `blur(${8 + scrollProgress * 16}px)`,
        borderBottom: isScrolled ? '1px solid hsl(220 14% 16% / 0.5)' : '1px solid transparent',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <img
                alt="DesignoAI Logo"
                src="/lovable-uploads/09cb8eca-27b9-431a-97cf-fd9a75f478f8.png"
                className="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(195,100%,50%,0.5)]"
                onClick={(e) => spark(e, 'logo')}
              />
            </div>
            <span className="text-lg font-heading font-bold text-foreground">
              Designo<span className="text-primary">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((item) =>
              'to' in item && item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md text-muted-foreground hover:text-foreground group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md text-muted-foreground hover:text-foreground group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                </a>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center">
            <div className="w-px h-6 bg-border mr-4" />
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-foreground"
                onClick={handleConsultorClick}
              >
                Falar com Consultor
              </Button>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm animate-pulse-glow group"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                WhatsApp
              </Button>
            </div>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'hsl(220 16% 6% / 0.95)', backdropFilter: 'blur(24px)' }}
          >
            <div className="px-4 pt-2 pb-3 space-y-1 border-t border-border">
              {[
                { to: '/studio', label: 'Studio' },
                { to: '/sites-ia', label: 'Sites IA' },
                { to: '/services', label: 'Serviços' },
                { to: '/recursos', label: 'Recursos' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    className="block px-3 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              {[
                { href: '#how-it-works', label: 'Como Funciona' },
                { href: '#pricing', label: 'Preços' },
                { href: '#contact', label: 'Contato' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 4) * 0.05 }}
                >
                  <a
                    href={item.href}
                    className="block px-3 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </div>
            <div className="px-4 py-4 border-t border-border space-y-2">
              <Button variant="ghost" className="w-full justify-center" onClick={handleConsultorClick}>
                Falar com Consultor
              </Button>
              <Button className="w-full bg-primary text-primary-foreground" onClick={handleWhatsAppClick}>
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
