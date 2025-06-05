
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

const CTA = () => {
  const handleStartClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleSpecialistClick = () => {
    window.open('https://wa.me/5511947968158?text=Olá! Gostaria de falar com um especialista sobre o Plano Fusion.', '_blank');
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-designoai-blue-light relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-designoai-blue/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-designoai-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-designoai-blue via-purple-600 to-indigo-600 rounded-3xl p-8 md:p-12 lg:p-20 shadow-2xl">
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {/* Floating elements */}
            <div className="absolute top-10 left-10">
              <Star className="w-16 h-16 text-white animate-pulse-slow" />
            </div>
            <div className="absolute top-20 right-20">
              <Sparkles className="w-12 h-12 text-white animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }} />
            </div>
            <div className="absolute bottom-10 left-20">
              <div className="w-8 h-8 bg-white rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className="absolute bottom-20 right-10">
              <Star className="w-20 h-20 text-white animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
            </div>
          </div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium mb-6 border border-white/30">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Última Chance de Transformar seu Marketing
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              <span className="block">Pronto para</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                revolucionar
              </span>
              <span className="block">seu marketing digital?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Começe agora e conte com suporte total da nossa equipe desde o primeiro dia.
              <span className="block mt-2 font-semibold">
                Junte-se a mais de 500 empresas que já transformaram seus resultados!
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Button 
                size="lg" 
                className="relative overflow-hidden bg-white text-designoai-blue hover:bg-gray-50 text-lg font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1 min-w-[200px]" 
                onClick={handleStartClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                Começe Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleSpecialistClick} 
                className="relative overflow-hidden border-2 border-white/30 text-white hover:bg-white/10 text-lg font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm transition-all duration-500 group transform hover:-translate-y-1 min-w-[200px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                Fale com um Especialista
              </Button>
            </div>

            {/* Enhanced trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center text-white/90 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Não é necessário cartão de crédito
              </div>
              <div className="flex items-center justify-center text-white/90 text-sm">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                Cancelamento a qualquer momento
              </div>
              <div className="flex items-center justify-center text-white/90 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                Suporte premium incluído
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
