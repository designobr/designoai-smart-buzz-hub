
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/star-icon.svg" alt="DesignoAI Logo" className="w-8 h-8" />
              <span className="text-designoai-blue-dark text-xl font-bold">DesignoAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">Serviços</Link>
            <a href="#features" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">Recursos</a>
            <a href="#how-it-works" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">Como Funciona</a>
            <a href="#pricing" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">Preços</a>
            <a href="#calculator" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">Calculadora</a>
            <a href="#contact" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">Contato</a>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-designoai-blue-dark hover:text-designoai-blue transition">Login</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-designoai-blue-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/services" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">Serviços</Link>
            <a href="#features" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">Recursos</a>
            <a href="#how-it-works" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">Como Funciona</a>
            <a href="#pricing" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">Preços</a>
            <a href="#calculator" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">Calculadora</a>
            <a href="#contact" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">Contato</a>
          </div>
          <div className="px-5 py-4 border-t border-gray-200">
            <Button variant="ghost" className="w-full text-designoai-blue-dark mb-2">Login</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
