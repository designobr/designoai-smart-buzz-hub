
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleConsultorClick = () => {
    window.open('https://wa.me/5511947968158?text=Olá! Gostaria de falar com um consultor sobre o DesignoAI.', '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511947968158?text=Olá! Gostaria de saber mais sobre o DesignoAI.', '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-strong shadow-lg border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                alt="DesignoAI Logo" 
                src="/lovable-uploads/09cb8eca-27b9-431a-97cf-fd9a75f478f8.png" 
                className="w-8 h-8 object-contain filter drop-shadow-lg" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-sm font-medium text-white/90 hover:text-blue-400 transition-colors relative group">
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/recursos" className="text-sm font-medium text-white/90 hover:text-blue-400 transition-colors relative group">
              Recursos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="#how-it-works" className="text-sm font-medium text-white/90 hover:text-blue-400 transition-colors relative group">
              Como Funciona
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-sm font-medium text-white/90 hover:text-blue-400 transition-colors relative group">
              Preços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#calculator" className="text-sm font-medium text-white/90 hover:text-blue-400 transition-colors relative group">
              Calculadora
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm font-medium text-white/90 hover:text-blue-400 transition-colors relative group">
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 glass" 
              onClick={handleConsultorClick}
            >
              Falar com Consultor
            </Button>
            <Button 
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 glass border-white/20" 
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="p-2 text-white/90 hover:text-white transition-colors" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-strong border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              Serviços
            </Link>
            <Link to="/recursos" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              Recursos
            </Link>
            <a href="#how-it-works" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              Como Funciona
            </a>
            <a href="#pricing" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              Preços
            </a>
            <a href="#calculator" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              Calculadora
            </a>
            <a href="#contact" className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
              Contato
            </a>
          </div>
          <div className="px-5 py-4 border-t border-white/10">
            <Button 
              variant="ghost" 
              className="w-full text-white/90 mb-2 hover:bg-white/10 glass" 
              onClick={handleConsultorClick}
            >
              Falar com Consultor
            </Button>
            <Button 
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white glass" 
              onClick={handleWhatsAppClick}
            >
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
