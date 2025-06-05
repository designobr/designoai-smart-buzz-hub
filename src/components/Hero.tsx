
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
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-designoai-blue-light relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-designoai-blue/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-designoai-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{
          animationDelay: '1s'
        }}></div>
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
              <Sparkles className="w-12 h-12 text-white animate-bounce" style={{
                animationDelay: '1s',
                animationDuration: '3s'
              }} />
            </div>
            <div className="absolute bottom-10 left-20">
              <div className="w-8 h-8 bg-white rounded-full animate-pulse-slow" style={{
                animationDelay: '2s'
              }}></div>
            </div>
            <div className="absolute bottom-20 right-10">
              <Star className="w-20 h-20 text-white animate-pulse-slow" style={{
                animationDelay: '0.5s'
              }} />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 border-2 border-white/20 rounded-full animate-spin" style={{
                animationDuration: '20s'
              }}></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center min-h-[80vh] relative z-10">
            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
              {/* Enhanced Logo with premium effects */}
              <div className="mb-8 animate-fade-in">
                <div className="relative inline-block group">
                  <img 
                    src="/lovable-uploads/f3d9e115-20f9-4e21-8131-b13ad5504d5e.png" 
                    alt="DesignoAI Logo" 
                    className="w-[400px] md:w-[480px] lg:w-[560px] h-auto object-contain mx-auto lg:mx-0 drop-shadow-2xl transform group-hover:scale-105 transition-all duration-700" 
                  />
                  <div className="absolute -inset-6 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full blur-3xl -z-10 group-hover:blur-2xl transition-all duration-700"></div>
                  <div className="absolute -inset-8 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full blur-2xl -z-20 opacity-50"></div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in text-white" style={{
                animationDelay: '0.2s'
              }}>
                <span className="block bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent mb-2">
                  Sua marca no
                </span>
                <span className="relative block">
                  <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 bg-clip-text text-transparent">
                    futuro agora!
                  </span>
                  <div className="absolute -bottom-4 left-0 w-3/4 h-0.5 bg-gradient-to-r from-white/50 to-transparent rounded-full"></div>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in max-w-2xl" style={{
                animationDelay: '0.3s'
              }}>
                Revolucione suas estratégias de marketing e mídias sociais com soluções inteligentes que 
                <span className="font-semibold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent"> analisam, criam e otimizam</span> seu conteúdo automaticamente.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in mb-8" style={{
                animationDelay: '0.4s'
              }}>
                <Button 
                  size="lg" 
                  className="relative overflow-hidden bg-white text-designoai-blue hover:bg-gray-50 text-lg font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1 min-w-[200px]" 
                  onClick={handleCallClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                  Agende uma Conversa
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{
                animationDelay: '0.5s'
              }}>
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-white/10 to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                  </div>
                  <div className="text-sm text-white/80 font-medium">Empresas</div>
                </div>
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">230%</div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-400/10 to-emerald-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                  </div>
                  <div className="text-sm text-white/80 font-medium">Aumento Médio</div>
                </div>
                <div className="text-center group">
                  <div className="relative">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                  </div>
                  <div className="text-sm text-white/80 font-medium">Suporte</div>
                </div>
              </div>

              {/* Enhanced trust indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex items-center justify-center text-white/90 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Não é necessário cartão de crédito
                </div>
                <div className="flex items-center justify-center text-white/90 text-sm">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse" style={{
                    animationDelay: '0.5s'
                  }}></div>
                  Cancelamento a qualquer momento
                </div>
                <div className="flex items-center justify-center text-white/90 text-sm">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" style={{
                    animationDelay: '1s'
                  }}></div>
                  Suporte premium incluído
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative animate-fade-in" style={{
              animationDelay: '0.6s'
            }}>
              <div className="relative">
                {/* Enhanced floating elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl opacity-80 rotate-12 animate-pulse-slow shadow-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 rounded-full backdrop-blur-sm shadow-xl animate-pulse-slow" style={{
                  animationDelay: '1s'
                }}></div>
                <div className="absolute top-1/2 -right-4 w-8 h-8 bg-gradient-to-br from-white/40 to-white/20 rounded-lg rotate-45 animate-bounce opacity-70" style={{
                  animationDelay: '2s',
                  animationDuration: '3s'
                }}></div>
                
                {/* Premium dashboard mockup */}
                <div className="relative bg-gradient-to-br from-white/90 to-white/70 rounded-3xl shadow-2xl overflow-hidden border border-white/50 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-white/80 to-white/60 p-6 flex items-center justify-between relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 animate-pulse-slow"></div>
                    <div className="flex space-x-2 relative z-10">
                      <div className="w-3 h-3 rounded-full bg-red-400 shadow-lg"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-lg"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg"></div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-center h-64 md:h-80 bg-gradient-to-br from-designoai-blue-light/30 via-purple-50/50 to-indigo-50/30 rounded-2xl relative overflow-hidden border border-slate-100">
                      {/* Enhanced animated content */}
                      <div className="text-center space-y-6 relative z-10">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-br from-designoai-blue via-purple-500 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center animate-pulse-slow shadow-xl">
                            <Sparkles className="w-8 h-8 text-white" />
                          </div>
                          <div className="absolute -inset-4 bg-gradient-to-r from-designoai-blue/20 to-purple-500/20 rounded-full blur animate-pulse-slow"></div>
                        </div>
                        <div className="space-y-3">
                          <div className="h-4 w-56 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-full mx-auto animate-pulse shadow-sm"></div>
                          <div className="h-4 w-48 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-full mx-auto animate-pulse shadow-sm" style={{
                            animationDelay: '0.2s'
                          }}></div>
                          <div className="h-4 w-40 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 rounded-full mx-auto animate-pulse shadow-sm" style={{
                            animationDelay: '0.4s'
                          }}></div>
                        </div>
                      </div>
                      
                      {/* Enhanced floating cards */}
                      <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-xl animate-bounce border border-slate-100 backdrop-blur-sm" style={{
                        animationDelay: '1s',
                        animationDuration: '3s'
                      }}>
                        <div className="w-8 h-8 bg-gradient-to-br from-designoai-blue to-indigo-600 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-lg">AI</div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-xl shadow-xl animate-bounce border border-slate-100 backdrop-blur-sm" style={{
                        animationDelay: '2s',
                        animationDuration: '3s'
                      }}>
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg text-white text-xs flex items-center justify-center font-bold shadow-lg">✓</div>
                      </div>
                      <div className="absolute top-1/2 right-8 bg-white p-2 rounded-lg shadow-lg animate-bounce border border-slate-100" style={{
                        animationDelay: '1.5s',
                        animationDuration: '4s'
                      }}>
                        <Star className="w-4 h-4 text-yellow-500" />
                      </div>
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
