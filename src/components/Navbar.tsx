
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  alt="DesignoAI Logo" 
                  src="/lovable-uploads/09cb8eca-27b9-431a-97cf-fd9a75f478f8.png" 
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-designoai-blue rounded-full blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold text-designoai-blue tracking-wide">
                DESIGNOAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { to: "/services", label: "Serviços" },
              { to: "/recursos", label: "Recursos" },
              { href: "#how-it-works", label: "Como Funciona" },
              { href: "#pricing", label: "Preços" },
              { href: "#calculator", label: "Calculadora" },
              { href: "#contact", label: "Contato" }
            ].map((item, index) => (
              <div key={index} className="relative group">
                {item.to ? (
                  <Link 
                    to={item.to} 
                    className="text-sm font-medium text-white/80 hover:text-designoai-blue transition-all duration-300 relative overflow-hidden px-2 py-1"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-designoai-blue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ) : (
                  <a 
                    href={item.href} 
                    className="text-sm font-medium text-white/80 hover:text-designoai-blue transition-all duration-300 relative overflow-hidden px-2 py-1"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-designoai-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-designoai-blue hover:bg-white/5 transition-all duration-300" 
              onClick={handleConsultorClick}
            >
              Falar com Consultor
            </Button>
            <Button 
              className="shimmer-button text-white font-semibold px-6 py-2 rounded-lg border-0 ripple-effect relative overflow-hidden group" 
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Explore agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="p-2 text-white hover:text-designoai-blue transition-colors duration-300" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/10 animate-fade-in">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <Link to="/services" className="block px-3 py-2 text-white/80 hover:text-designoai-blue hover:bg-white/5 rounded-md transition-all duration-300">Serviços</Link>
            <Link to="/recursos" className="block px-3 py-2 text-white/80 hover:text-designoai-blue hover:bg-white/5 rounded-md transition-all duration-300">Recursos</Link>
            <a href="#how-it-works" className="block px-3 py-2 text-white/80 hover:text-designoai-blue hover:bg-white/5 rounded-md transition-all duration-300">Como Funciona</a>
            <a href="#pricing" className="block px-3 py-2 text-white/80 hover:text-designoai-blue hover:bg-white/5 rounded-md transition-all duration-300">Preços</a>
            <a href="#calculator" className="block px-3 py-2 text-white/80 hover:text-designoai-blue hover:bg-white/5 rounded-md transition-all duration-300">Calculadora</a>
            <a href="#contact" className="block px-3 py-2 text-white/80 hover:text-designoai-blue hover:bg-white/5 rounded-md transition-all duration-300">Contato</a>
          </div>
          <div className="px-5 py-4 border-t border-white/10">
            <Button 
              variant="ghost" 
              className="w-full text-white/80 mb-2 hover:bg-white/5" 
              onClick={handleConsultorClick}
            >
              Falar com Consultor
            </Button>
            <Button 
              className="w-full shimmer-button text-white ripple-effect" 
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Explore agora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
