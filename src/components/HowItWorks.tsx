
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: "01",
    title: "Análise de Dados",
    description: "Nossa IA analisa seu nicho, público-alvo e concorrentes para entender o cenário completo.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    title: "Estratégia Personalizada",
    description: "Desenvolvemos uma estratégia exclusiva baseada nos insights coletados e em suas metas de negócio.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    title: "Criação de Conteúdo",
    description: "Geramos conteúdo otimizado e adaptado para cada canal de marketing digital.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    number: "04",
    title: "Automação e Distribuição",
    description: "Publicamos e gerenciamos seu conteúdo nos momentos ideais para maximizar o engajamento.",
    gradient: "from-orange-500 to-red-500"
  }
];

const HowItWorks = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-80 h-80 top-10 left-10" style={{ animationDelay: '1s' }}></div>
        <div className="floating-orb w-64 h-64 bottom-10 right-20" style={{ animationDelay: '3s' }}></div>
        <div className="floating-orb w-48 h-48 top-1/2 right-0" style={{ animationDelay: '5s' }}></div>
        <div className="absolute inset-0 mesh-gradient"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
            ⚡ Como Funciona
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Como o DesignoAI Transforma seu Marketing
          </h2>
          <p className="text-xl text-white/70">
            Um processo simplificado para resultados extraordinários
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="glass-card rounded-xl p-8 border border-white/20 hover:glass-strong transition-all duration-500 hover:-translate-y-2 group">
                <div className={`absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold shadow-xl animate-glow group-hover:scale-110 transition-transform duration-300`}>
                  {step.number}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur opacity-50`}></div>
                </div>
                <h3 className="text-xl font-semibold mb-4 mt-4 text-white group-hover:text-blue-400 transition-colors duration-300">{step.title}</h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{step.description}</p>
              </div>
              
              {/* Connection line for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/30 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card p-8 rounded-2xl border border-white/20">
          <p className="text-xl mb-6 max-w-2xl mx-auto text-white/80">
            Pronto para transformar seu marketing digital com o poder da inteligência artificial?
          </p>
          <Button 
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:via-purple-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-500 glass border border-white/20 group transform hover:-translate-y-1"
            onClick={handleContactClick}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
            Agende uma Conversa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
