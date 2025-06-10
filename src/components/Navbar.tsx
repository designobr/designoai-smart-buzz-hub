
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

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
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                alt="DesignoAI Logo" 
                src="/lovable-uploads/09cb8eca-27b9-431a-97cf-fd9a75f478f8.png" 
                className="w-8 h-8 object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">
                    Soluções
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <Link 
                        to="/social-media" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Social Media</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Gestão inteligente de redes sociais
                        </p>
                      </Link>
                      <Link 
                        to="/criacao-conteudo" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Criação de Conteúdo</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Conteúdo personalizado com IA
                        </p>
                      </Link>
                      <Link 
                        to="/seo-inteligente" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">SEO Inteligente</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Otimização automática para Google
                        </p>
                      </Link>
                      <Link 
                        to="/email-marketing" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Email Marketing</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Campanhas personalizadas com IA
                        </p>
                      </Link>
                      <Link 
                        to="/analise-dados" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Análise de Dados</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Insights inteligentes e relatórios
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">
                    Empresa
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-3 p-4">
                      <Link 
                        to="/sobre-nos" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Sobre Nós</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Nossa história e missão
                        </p>
                      </Link>
                      <Link 
                        to="/carreiras" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Carreiras</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Trabalhe conosco
                        </p>
                      </Link>
                      <Link 
                        to="/blog" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Blog</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Insights e tendências
                        </p>
                      </Link>
                      <Link 
                        to="/casos-sucesso" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Casos de Sucesso</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Resultados comprovados
                        </p>
                      </Link>
                      <Link 
                        to="/parcerias" 
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Parcerias</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Seja nosso parceiro
                        </p>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/recursos" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">
              Recursos
            </Link>
            <a href="#how-it-works" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">
              Como Funciona
            </a>
            <a href="#pricing" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">
              Preços
            </a>
            <a href="#calculator" className="text-sm font-medium text-designoai-blue-dark hover:text-designoai-blue transition">
              Calculadora
            </a>
          </nav>

          {/* Call to Action */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-designoai-blue-dark hover:text-designoai-blue transition" onClick={handleConsultorClick}>
              Falar com Consultor
            </Button>
            <Button variant="default" className="bg-green-500 hover:bg-green-600 text-white" onClick={handleWhatsAppClick}>
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              type="button" 
              className="p-2 text-designoai-blue-dark" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="space-y-1">
              <div className="px-3 py-2 font-medium text-designoai-blue-dark">Soluções</div>
              <Link to="/social-media" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                Social Media
              </Link>
              <Link to="/criacao-conteudo" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                Criação de Conteúdo
              </Link>
              <Link to="/seo-inteligente" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                SEO Inteligente
              </Link>
              <Link to="/email-marketing" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                Email Marketing
              </Link>
              <Link to="/analise-dados" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                Análise de Dados
              </Link>
            </div>
            
            <div className="space-y-1">
              <div className="px-3 py-2 font-medium text-designoai-blue-dark">Empresa</div>
              <Link to="/sobre-nos" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                Sobre Nós
              </Link>
              <Link to="/carreiras" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                Carreiras
              </Link>
              <Link to="/blog" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                Blog
              </Link>
              <Link to="/casos-sucesso" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                Casos de Sucesso
              </Link>
              <Link to="/parcerias" className="block px-6 py-2 text-sm text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
                Parcerias
              </Link>
            </div>

            <Link to="/recursos" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
              Recursos
            </Link>
            <a href="#how-it-works" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
              Como Funciona
            </a>
            <a href="#pricing" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
              Preços
            </a>
            <a href="#calculator" className="block px-3 py-2 text-designoai-blue-dark hover:bg-designoai-blue-light rounded-md">
              Calculadora
            </a>
          </div>
          <div className="px-5 py-4 border-t border-gray-200">
            <Button variant="ghost" className="w-full text-designoai-blue-dark mb-2" onClick={handleConsultorClick}>
              Falar com Consultor
            </Button>
            <Button variant="default" className="w-full bg-green-500 hover:bg-green-600 text-white" onClick={handleWhatsAppClick}>
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
