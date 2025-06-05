import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const handleCallClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-white via-designoai-blue-light/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-designoai-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-designoai-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            {/* Logo com efeito moderno */}
            <div className="mb-8 animate-fade-in">
              <div className="relative inline-block">
                <img 
                  src="/lovable-uploads/f3d9e115-20f9-4e21-8131-b13ad5504d5e.png" 
                  alt="DesignoAI Logo" 
                  className="w-96 md:w-[28rem] lg:w-[32rem] h-auto object-contain mx-auto lg:mx-0 drop-shadow-2xl" 
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-designoai-blue/20 to-transparent rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
            
            <div className="flex items-center mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Sparkles className="w-6 h-6 text-designoai-blue mr-2" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="block bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-designoai-blue-dark bg-clip-text text-transparent">Sua marca no</span>
              <span className="relative block text-designoai-blue-dark">
                futuro agora!
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-designoai-blue to-designoai-blue-dark rounded-full"></div>
              </span>
            </h1>
            
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              Revolucione suas estratégias de marketing e mídias sociais com soluções inteligentes que 
              <span className="font-semibold text-designoai-blue"> analisam, criam e otimizam</span> seu conteúdo automaticamente.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <Button size="lg" className="bg-gradient-to-r from-designoai-blue to-designoai-blue-dark hover:from-designoai-blue-dark hover:to-designoai-blue text-white shadow-lg hover:shadow-xl transition-all duration-300 group" onClick={handleCallClick}>
                Agende uma Conversa
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-designoai-blue text-designoai-blue hover:bg-designoai-blue hover:text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-designoai-blue-dark">500+</div>
                <div className="text-sm text-gray-600">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-designoai-blue-dark">230%</div>
                <div className="text-sm text-gray-600">Aumento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-designoai-blue-dark">24/7</div>
                <div className="text-sm text-gray-600">Suporte</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-designoai-blue to-designoai-blue-dark rounded-2xl opacity-80 rotate-12 animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-designoai-blue/20 to-designoai-blue/40 rounded-full backdrop-blur-sm"></div>
              
              {/* Main dashboard mockup */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-designoai-blue-dark to-designoai-blue p-6 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  
                  <div className="w-6"></div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-center h-64 md:h-80 bg-gradient-to-br from-designoai-blue-light/30 to-designoai-blue-light/10 rounded-2xl relative overflow-hidden">
                    {/* Animated content */}
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-designoai-blue to-designoai-blue-dark rounded-2xl mx-auto flex items-center justify-center animate-pulse-slow">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-56 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto animate-pulse"></div>
                        <div className="h-4 w-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto animate-pulse" style={{
                        animationDelay: '0.2s'
                      }}></div>
                        <div className="h-4 w-40 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mx-auto animate-pulse" style={{
                        animationDelay: '0.4s'
                      }}></div>
                      </div>
                    </div>
                    
                    {/* Floating cards */}
                    <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg animate-bounce" style={{
                    animationDelay: '1s',
                    animationDuration: '3s'
                  }}>
                      <div className="w-8 h-8 bg-designoai-blue rounded text-white text-xs flex items-center justify-center">AI</div>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-lg animate-bounce" style={{
                    animationDelay: '2s',
                    animationDuration: '3s'
                  }}>
                      <div className="w-8 h-8 bg-green-500 rounded text-white text-xs flex items-center justify-center">✓</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
