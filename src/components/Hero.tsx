
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  const handleStartClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSpecialistClick = () => {
    window.open('https://wa.me/5511947968158?text=Olá! Gostaria de falar com um especialista sobre o DesignoAI.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-96 h-96 top-20 left-10" style={{ animationDelay: '0s' }}></div>
        <div className="floating-orb w-64 h-64 top-40 right-20" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-48 h-48 bottom-20 left-1/4" style={{ animationDelay: '4s' }}></div>
        <div className="floating-orb w-80 h-80 bottom-10 right-10" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 mesh-gradient"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced badge */}
          <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            🚀 Revolução do Marketing Digital com IA
            <Star className="w-4 h-4 ml-2 star-icon" />
          </div>

          {/* Enhanced title with better gradients */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-glow">
              Marketing Digital
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2">
              com Inteligência
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
              Artificial
            </span>
          </h1>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforme sua presença digital com nossa plataforma de IA que cria campanhas, 
            analisa dados e otimiza resultados automaticamente.
          </p>

          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
            <Button 
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white text-lg font-semibold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group transform hover:-translate-y-2 animate-glow min-w-[250px]"
              onClick={handleStartClick}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
              Começar Gratuitamente
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="relative overflow-hidden glass-strong border-2 border-white/30 text-white text-lg font-semibold px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 min-w-[250px]"
              onClick={handleSpecialistClick}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <Play className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
          </div>

          {/* Enhanced stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "500+", label: "Empresas Atendidas" },
              { value: "300%", label: "Aumento Médio ROI" },
              { value: "98%", label: "Satisfação Cliente" },
              { value: "24/7", label: "Suporte IA" }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl border border-white/20 hover:glass-strong transition-all duration-500 group">
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
