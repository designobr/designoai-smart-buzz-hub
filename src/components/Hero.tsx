
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCallClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 pb-16 overflow-hidden bg-gradient-to-br from-designoai-blue-dark via-black to-designoai-blue-dark">
      {/* Floating Orbs */}
      <div className="floating-orb w-96 h-96 top-1/4 left-1/4 opacity-30"></div>
      <div className="floating-orb w-64 h-64 top-3/4 right-1/4 opacity-20"></div>
      <div className="floating-orb w-80 h-80 top-1/2 right-1/3 opacity-25"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            {/* Badge */}
            <div className={`inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              🛡️ MANTENHA SUA MARCA SEGURA!
            </div>
            
            {/* Main Heading */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-white block mb-2">
                Melhor{' '}
                <span className="text-designoai-blue relative">
                  plataforma
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-designoai-blue to-transparent rounded-full opacity-60"></div>
                </span>
              </span>
              <span className="text-white block mb-2">de{' '}
                <span className="text-designoai-blue relative">
                  marketing digital
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-designoai-blue to-transparent rounded-full opacity-60"></div>
                </span>
              </span>
              <span className="text-white block">para o seu futuro.</span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-2xl transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Revolucione suas estratégias de marketing com soluções inteligentes que 
              <span className="font-semibold text-designoai-blue"> analisam, criam e otimizam</span> seu conteúdo automaticamente.
            </p>
            
            {/* CTA Button */}
            <div className={`mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Button 
                size="lg" 
                className="shimmer-button text-white font-semibold px-8 py-4 rounded-xl text-lg hover-lift ripple-effect group" 
                onClick={handleCallClick}
              >
                Explore agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Real-time Users */}
            <div className={`flex items-center space-x-4 transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-designoai-blue to-blue-400 border-2 border-white/20 flex items-center justify-center text-white text-xs font-bold animate-pulse-glow">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex items-center text-white/80">
                <Users className="w-4 h-4 mr-2 text-designoai-blue" />
                <span className="font-semibold text-white">168K+</span>
                <span className="ml-1">Usuários em tempo real</span>
              </div>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-designoai-blue group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-sm text-white/70 font-medium">Empresas</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-designoai-blue group-hover:scale-110 transition-transform duration-300">230%</div>
                <div className="text-sm text-white/70 font-medium">Aumento Médio</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-designoai-blue group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-white/70 font-medium">Suporte</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Mockup */}
          <div className={`lg:w-1/2 relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative max-w-sm mx-auto">
              {/* Main Mockup Image */}
              <img 
                src="https://cdn.pixabay.com/photo/2023/03/13/15/26/ai-7849016_960_720.png" 
                alt="DesignoAI Platform Mockup" 
                className="w-full h-auto animate-float drop-shadow-2xl relative z-10"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-designoai-blue/20 via-purple-500/20 to-designoai-blue/20 rounded-3xl blur-3xl animate-pulse-glow -z-10"></div>
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 animate-float hover-lift cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-designoai-blue to-blue-400 rounded-lg text-white text-xs flex items-center justify-center font-bold">
                  AI
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 animate-float hover-lift cursor-pointer" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-xs font-medium">Online</span>
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
