
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-designoai-blue-dark leading-tight mb-6 animate-fade-in">
              Marketing Digital <br/> Potencializado por IA
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Revolucione suas estratégias de marketing e mídias sociais com soluções inteligentes que analisam, criam e otimizam seu conteúdo automaticamente.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-designoai-blue hover:bg-designoai-blue/90 text-white">
                Comece Agora
              </Button>
              <Button size="lg" variant="outline" className="border-designoai-blue text-designoai-blue hover:bg-designoai-blue-light">
                Agende uma Demo
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-designoai-blue rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-designoai-blue rounded-full opacity-10"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-designoai-blue-dark p-4 flex items-center">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-white text-sm">DesignoAI Dashboard</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center h-64 md:h-80 bg-designoai-blue-light rounded-lg">
                    <div className="text-center">
                      <img src="/star-icon.svg" alt="DesignoAI Star" className="w-16 h-16 mx-auto mb-4 star-icon animate-pulse-slow" />
                      <div className="h-6 w-32 bg-gray-200 rounded mx-auto mb-3 animate-pulse"></div>
                      <div className="h-4 w-48 bg-gray-200 rounded mx-auto mb-3 animate-pulse"></div>
                      <div className="h-4 w-40 bg-gray-200 rounded mx-auto animate-pulse"></div>
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
