
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-96 h-96 top-1/4 left-0" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb w-64 h-64 bottom-1/4 right-0" style={{ animationDelay: '4s' }}></div>
        <div className="floating-orb w-48 h-48 top-1/2 right-1/4" style={{ animationDelay: '6s' }}></div>
        <div className="absolute inset-0 mesh-gradient"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Por que escolher o DesignoAI?
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              A Revolução do Marketing Digital
            </span>
          </h2>
          <p className="text-xl text-white/70">
            Nossa plataforma reúne o melhor da inteligência artificial para transformar sua estratégia de marketing digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          <div className="order-2 md:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse"></div>
              <div className="relative glass-strong rounded-3xl p-8 shadow-2xl border border-white/20 group-hover:scale-105 transition-all duration-700">
                <img 
                  src="/lovable-uploads/d829b16b-0e24-4f64-beac-e8a25b579587.png" 
                  alt="DesignoAI Coffee Cup" 
                  className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute -bottom-6 -right-6 glass-card p-3 rounded-2xl shadow-xl border border-white/20 group-hover:scale-110 transition-transform duration-500">
                  <div className="relative">
                    <img src="/star-icon.svg" className="w-12 h-12" alt="DesignoAI Star" />
                    <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Ganhe tempo e eficiência
              </span>
              <br />
              <span className="text-white">em suas campanhas</span>
            </h3>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Automação Inteligente",
                  description: "Reduza horas de trabalho com automação de tarefas de marketing e social media",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Personalização em Escala",
                  description: "Crie conteúdo personalizado para diferentes segmentos do seu público",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Análise Preditiva",
                  description: "Antecipe tendências e comportamentos do seu público-alvo",
                  gradient: "from-green-500 to-emerald-500"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 relative">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/recursos">
              <Button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-1 glass border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                Conheça todos os recursos
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Resultados mensuráveis
              </span>
              <br />
              <span className="text-white">e consistentes</span>
            </h3>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: "Dashboard Intuitivo",
                  description: "Acompanhe todos os seus KPIs em um único lugar com visualizações claras",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Relatórios Automatizados",
                  description: "Receba insights semanais sobre o desempenho de suas campanhas",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  title: "Otimização Contínua",
                  description: "Nossa IA aprende com os resultados e melhora suas estratégias automaticamente",
                  gradient: "from-green-500 to-teal-500"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 relative">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mr-4 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 via-emerald-500/20 to-teal-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse"></div>
            <div className="relative glass-strong rounded-3xl p-8 shadow-2xl border border-white/20 group-hover:scale-105 transition-all duration-700">
              <img 
                src="/lovable-uploads/f8692a56-e528-4392-9a28-98a1e875ec76.png" 
                alt="DesignoAI Mug" 
                className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute -top-6 -left-6 glass-card p-3 rounded-2xl shadow-xl border border-white/20 group-hover:scale-110 transition-transform duration-500">
                <div className="relative">
                  <img src="/star-icon.svg" className="w-12 h-12" alt="DesignoAI Star" />
                  <div className="absolute -inset-2 bg-green-500/30 rounded-full blur animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
