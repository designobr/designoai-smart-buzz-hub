
import { Button } from '@/components/ui/button';

const CTA = () => {
  const handleStartClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSpecialistClick = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de falar com um especialista sobre o Plano Fusion.', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-designoai-blue-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-designoai-blue rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-xl">
          {/* Background star pattern */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 opacity-10">
              <img src="/star-icon.svg" alt="" className="w-20 h-20" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-10">
              <img src="/star-icon.svg" alt="" className="w-32 h-32" />
            </div>
          </div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Pronto para revolucionar seu marketing digital?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Comece hoje mesmo e veja resultados em 30 dias ou seu dinheiro de volta.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-white text-designoai-blue hover:bg-gray-100 text-lg"
                onClick={handleStartClick}
              >
                Comece Gratuitamente
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg"
                onClick={handleSpecialistClick}
              >
                Fale com um Especialista
              </Button>
            </div>
            <p className="text-white/80 mt-6 text-sm">
              Não é necessário cartão de crédito • Cancelamento a qualquer momento
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
