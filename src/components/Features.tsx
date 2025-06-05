
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-4">
            Por que escolher o DesignoAI?
          </h2>
          <p className="text-lg text-gray-600">
            Nossa plataforma reúne o melhor da inteligência artificial para transformar sua estratégia de marketing digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-designoai-blue/5 rounded-3xl p-8 relative">
              <img 
                src="/lovable-uploads/d829b16b-0e24-4f64-beac-e8a25b579587.png" 
                alt="DesignoAI Coffee Cup" 
                className="w-full h-auto rounded-2xl shadow-lg" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-2 rounded-lg shadow-lg">
                <img src="/star-icon.svg" className="w-12 h-12" alt="DesignoAI Star" />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-semibold text-designoai-blue-dark mb-6">
              Ganhe tempo e eficiência em suas campanhas
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-designoai-blue text-white rounded-full flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium text-designoai-blue-dark text-lg">Automação Inteligente</h4>
                  <p className="text-gray-600 mt-1">Reduza horas de trabalho com automação de tarefas de marketing e social media</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-designoai-blue text-white rounded-full flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium text-designoai-blue-dark text-lg">Personalização em Escala</h4>
                  <p className="text-gray-600 mt-1">Crie conteúdo personalizado para diferentes segmentos do seu público</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-designoai-blue text-white rounded-full flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium text-designoai-blue-dark text-lg">Análise Preditiva</h4>
                  <p className="text-gray-600 mt-1">Antecipe tendências e comportamentos do seu público-alvo</p>
                </div>
              </li>
            </ul>

            <Link to="/recursos">
              <Button className="bg-designoai-blue hover:bg-designoai-blue/90">
                Conheça todos os recursos
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mt-24">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-designoai-blue-dark mb-6">
              Resultados mensuráveis e consistentes
            </h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-designoai-blue text-white rounded-full flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium text-designoai-blue-dark text-lg">Dashboard Intuitivo</h4>
                  <p className="text-gray-600 mt-1">Acompanhe todos os seus KPIs em um único lugar com visualizações claras</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-designoai-blue text-white rounded-full flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium text-designoai-blue-dark text-lg">Relatórios Automatizados</h4>
                  <p className="text-gray-600 mt-1">Receba insights semanais sobre o desempenho de suas campanhas</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-designoai-blue text-white rounded-full flex items-center justify-center mr-3 mt-1">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium text-designoai-blue-dark text-lg">Otimização Contínua</h4>
                  <p className="text-gray-600 mt-1">Nossa IA aprende com os resultados e melhora suas estratégias automaticamente</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-designoai-blue/5 rounded-3xl p-8 relative">
              <img 
                src="/lovable-uploads/f8692a56-e528-4392-9a28-98a1e875ec76.png" 
                alt="DesignoAI Mug" 
                className="w-full h-auto rounded-2xl shadow-lg" 
              />
              <div className="absolute -top-6 -left-6 bg-white p-2 rounded-lg shadow-lg">
                <img src="/star-icon.svg" className="w-12 h-12" alt="DesignoAI Star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
