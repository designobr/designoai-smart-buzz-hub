
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSparkEffect } from '@/hooks/useSparkEffect';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const spark = useSparkEffect({ count: 6, spread: 40 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleConsultorClick = () => {
    window.open('https://wa.me/5511965262002?text=Olá! Gostaria de falar com um consultor sobre o DesignoAI.', '_blank');
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511965262002?text=Olá! Gostaria de saber mais sobre o DesignoAI.', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              alt="DesignoAI Logo"
              src="/lovable-uploads/09cb8eca-27b9-431a-97cf-fd9a75f478f8.png"
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
              onClick={(e) => spark(e, 'logo')}
            />
            <span className="text-lg font-heading font-bold text-foreground">
              Designo<span className="text-primary">AI</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {[
              { to: '/studio', label: 'Studio' },
              { to: '/services', label: 'Serviços' },
              { to: '/recursos', label: 'Recursos' },
              { href: '#how-it-works', label: 'Como Funciona' },
              { href: '#pricing', label: 'Preços' },
              { href: '#contact', label: 'Contato' },
            ].map((item) =>
              'to' in item ? (
                <Link
                  key={item.label}
                  to={item.to!}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-secondary"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
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
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-sm"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
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

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {[
              { to: '/studio', label: 'Studio' },
              { to: '/services', label: 'Serviços' },
              { to: '/recursos', label: 'Recursos' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block px-3 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {[
              { href: '#how-it-works', label: 'Como Funciona' },
              { href: '#pricing', label: 'Preços' },
              { href: '#contact', label: 'Contato' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
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
        </div>
      )}
    </header>
  );
};

export default Navbar;
