
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="floating-orb w-96 h-96 top-10 left-10" style={{ animationDelay: '0s' }}></div>
        <div className="floating-orb w-64 h-64 top-1/3 right-20" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-80 h-80 bottom-20 left-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="floating-orb w-48 h-48 bottom-10 right-10" style={{ animationDelay: '1s' }}></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 mesh-gradient"></div>
        
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 text-center lg:text-left">
            {/* Enhanced Logo with glassmorphism */}
            <div className="mb-8 animate-fade-in">
              <div className="relative inline-block group">
                <div className="glass-strong rounded-3xl p-8 transform group-hover:scale-105 transition-all duration-700">
                  <img 
                    src="/lovable-uploads/643dfebb-85f6-4868-920c-35c1901aaf13.png" 
                    alt="DesignoAI Logo" 
                    className="w-[300px] md:w-[400px] lg:w-[480px] h-auto object-contain mx-auto lg:mx-0 drop-shadow-2xl" 
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-700 animate-glow"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in text-white" style={{ animationDelay: '0.2s' }}>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Sua marca no futuro
              </span>
              <span className="relative block">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                  agora!
                </span>
                <div className="absolute -bottom-4 left-0 w-3/4 h-1 bg-gradient-to-r from-yellow-400/60 to-transparent rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed animate-fade-in max-w-2xl mx-auto lg:mx-0" style={{ animationDelay: '0.3s' }}>
              Revolucione suas estratégias de marketing e mídias sociais com soluções inteligentes que 
              <span className="font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"> analisam, criam e otimizam</span> seu conteúdo automaticamente.
            </p>
            
            {/* Enhanced CTA Button */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in mb-8 justify-center lg:justify-start" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="relative overflow-hidden glass-strong bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1 min-w-[200px] border border-white/20" 
                onClick={handleCallClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                Agende uma Conversa
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Enhanced Stats with glassmorphism */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-center group">
                <div className="glass-card rounded-2xl p-4 hover:glass-strong transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                  <div className="text-sm text-white/70 font-medium">Empresas</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="glass-card rounded-2xl p-4 hover:glass-strong transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">230%</div>
                  <div className="text-sm text-white/70 font-medium">Aumento Médio</div>
                </div>
              </div>
              <div className="text-center group">
                <div className="glass-card rounded-2xl p-4 hover:glass-strong transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
                  <div className="text-sm text-white/70 font-medium">Suporte</div>
                </div>
              </div>
            </div>

            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center text-white/70 text-sm glass-card rounded-lg p-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Não é necessário cartão de crédito
              </div>
              <div className="flex items-center justify-center text-white/70 text-sm glass-card rounded-lg p-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                Cancelamento a qualquer momento
              </div>
              <div className="flex items-center justify-center text-white/70 text-sm glass-card rounded-lg p-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                Suporte premium incluído
              </div>
            </div>
          </div>
          
          {/* Premium dashboard mockup with glassmorphism */}
          <div className="lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Enhanced floating elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 glass-card rounded-2xl opacity-80 rotate-12 animate-float shadow-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 glass-card rounded-full shadow-xl animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 glass-card rounded-lg rotate-45 animate-bounce opacity-70" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
              
              {/* Premium dashboard mockup */}
              <div className="relative glass-strong rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                <div className="glass-card p-6 flex items-center justify-between relative overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse-slow"></div>
                  <div className="flex space-x-2 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-red-400 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg"></div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-center h-64 md:h-80 glass-card rounded-2xl relative overflow-hidden border border-white/10">
                    {/* Enhanced animated content */}
                    <div className="text-center space-y-6 relative z-10">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl mx-auto flex items-center justify-center animate-pulse-slow shadow-xl">
                          <Sparkles className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur animate-pulse-slow"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-4 w-56 bg-gradient-to-r from-white/20 via-white/30 to-white/20 rounded-full mx-auto animate-pulse shadow-sm"></div>
                        <div className="h-4 w-48 bg-gradient-to-r from-white/20 via-white/30 to-white/20 rounded-full mx-auto animate-pulse shadow-sm" style={{ animationDelay: '0.2s' }}></div>
                        <div className="h-4 w-40 bg-gradient-to-r from-white/20 via-white/30 to-white/20 rounded-full mx-auto animate-pulse shadow-sm" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                    
                    {/* Enhanced floating cards */}
                    <div className="absolute top-4 left-4 glass-card p-3 rounded-xl shadow-xl animate-float border border-white/20" style={{ animationDelay: '1s' }}>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-lg">AI</div>
                    </div>
                    <div className="absolute bottom-4 right-4 glass-card p-3 rounded-xl shadow-xl animate-float border border-white/20" style={{ animationDelay: '2s' }}>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-lg">✓</div>
                    </div>
                    <div className="absolute top-1/2 right-8 glass-card p-2 rounded-lg shadow-lg animate-float border border-white/20" style={{ animationDelay: '1.5s' }}>
                      <Star className="w-4 h-4 text-yellow-400" />
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
