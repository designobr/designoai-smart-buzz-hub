import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  variant?: 'light' | 'dark';
}

const Navbar = ({ variant = 'light' }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isDark = variant === 'dark';
  
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
    window.open('https://wa.me/5511965262002?text=Olá! Gostaria de falar com um consultor sobre o DesignoAI.', '_blank');
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511965262002?text=Olá! Gostaria de saber mais sobre o DesignoAI.', '_blank');
  };
  
  const textColor = isDark ? 'text-white' : 'text-designoai-blue-dark';
  const hoverColor = isDark ? 'hover:text-white/80' : 'hover:text-designoai-blue';
  const bgScrolled = isDark ? 'bg-black/80 backdrop-blur-md shadow-sm' : 'bg-white/90 backdrop-blur-md shadow-sm';
  const mobileMenuBg = isDark ? 'bg-black/95' : 'bg-white';
  const mobileMenuHover = isDark ? 'hover:bg-white/10' : 'hover:bg-designoai-blue-light';
  
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? bgScrolled : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img alt="DesignoAI Logo" src="/lovable-uploads/09cb8eca-27b9-431a-97cf-fd9a75f478f8.png" className="w-8 h-8 object-contain" />
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/studio" className={`text-sm font-medium ${textColor} ${hoverColor} transition`}>Studio</Link>
            <Link to="/services" className={`text-sm font-medium ${textColor} ${hoverColor} transition`}>Serviços</Link>
            <Link to="/recursos" className={`text-sm font-medium ${textColor} ${hoverColor} transition`}>Recursos</Link>
            <a href="#how-it-works" className={`text-sm font-medium ${textColor} ${hoverColor} transition`}>Como Funciona</a>
            <a href="#pricing" className={`text-sm font-medium ${textColor} ${hoverColor} transition`}>Preços</a>
            <a href="#calculator" className={`text-sm font-medium ${textColor} ${hoverColor} transition`}>Calculadora</a>
            <a href="#contact" className={`text-sm font-medium ${textColor} ${hoverColor} transition`}>Contato</a>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className={`${textColor} ${hoverColor} transition`} onClick={handleConsultorClick}>
              Falar com Consultor
            </Button>
            <Button variant="default" className="bg-green-500 hover:bg-green-600 text-white" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button type="button" className={`p-2 ${textColor}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className={`md:hidden ${mobileMenuBg} border-t ${isDark ? 'border-white/10' : ''}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/studio" className={`block px-3 py-2 ${textColor} ${mobileMenuHover} rounded-md`}>Studio</Link>
            <Link to="/services" className={`block px-3 py-2 ${textColor} ${mobileMenuHover} rounded-md`}>Serviços</Link>
            <Link to="/recursos" className={`block px-3 py-2 ${textColor} ${mobileMenuHover} rounded-md`}>Recursos</Link>
            <a href="#how-it-works" className={`block px-3 py-2 ${textColor} ${mobileMenuHover} rounded-md`}>Como Funciona</a>
            <a href="#pricing" className={`block px-3 py-2 ${textColor} ${mobileMenuHover} rounded-md`}>Preços</a>
            <a href="#calculator" className={`block px-3 py-2 ${textColor} ${mobileMenuHover} rounded-md`}>Calculadora</a>
            <a href="#contact" className={`block px-3 py-2 ${textColor} ${mobileMenuHover} rounded-md`}>Contato</a>
          </div>
          <div className={`px-5 py-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
            <Button variant="ghost" className={`w-full ${textColor} mb-2`} onClick={handleConsultorClick}>
              Falar com Consultor
            </Button>
            <Button variant="default" className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>}
    </header>;
};
export default Navbar;