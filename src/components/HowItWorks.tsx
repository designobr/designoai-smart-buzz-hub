
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: "01",
    title: "Análise de Dados",
    description: "Nossa IA analisa seu nicho, público-alvo e concorrentes para entender o cenário completo."
  },
  {
    number: "02",
    title: "Estratégia Personalizada",
    description: "Desenvolvemos uma estratégia exclusiva baseada nos insights coletados e em suas metas de negócio."
  },
  {
    number: "03",
    title: "Criação de Conteúdo",
    description: "Geramos conteúdo otimizado e adaptado para cada canal de marketing digital."
  },
  {
    number: "04",
    title: "Automação e Distribuição",
    description: "Publicamos e gerenciamos seu conteúdo nos momentos ideais para maximizar o engajamento."
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
    <section id="how-it-works" className="py-16 md:py-24 bg-designoai-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como o DesignoAI Transforma seu Marketing
          </h2>
          <p className="text-xl text-gray-300">
            Um processo simplificado para resultados extraordinários
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 relative hover:bg-white/10 transition-colors duration-300">
              <div className="absolute -top-5 -left-5 w-10 h-10 bg-designoai-blue rounded-full flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 mt-4 text-white">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Pronto para transformar seu marketing digital com o poder da inteligência artificial?
          </p>
          <Button 
            className="bg-white text-designoai-blue-dark hover:bg-gray-100"
            onClick={handleContactClick}
          >
            Agende uma Conversa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
