import { motion } from 'framer-motion';
const ClientLogos = () => {
  const clients = [{
    name: "TechFlow Solutions",
    logo: "💼"
  }, {
    name: "GlobalVentures",
    logo: "🌐"
  }, {
    name: "InnovaCorp",
    logo: "⚡"
  }, {
    name: "DigitalPrime",
    logo: "💎"
  }, {
    name: "NextGen Industries",
    logo: "🚀"
  }, {
    name: "ProBusiness Group",
    logo: "📊"
  }, {
    name: "SmartLogistics",
    logo: "📦"
  }, {
    name: "EliteConsulting",
    logo: "🎯"
  }];
  return <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-designoai-blue-light rounded-full text-designoai-blue font-medium mb-4">
            ✨ Empresas que confiam em nós
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent mb-4">
            Mais de 500 empresas já transformaram seu marketing digital
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Junte-se às empresas que já estão revolucionando seus resultados com nossa plataforma de IA
          </p>
        </div>
        
        {/* Logo grid com animação */}
        

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            99.9% Uptime
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            ISO 27001 Certified
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
            GDPR Compliant
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
            24/7 Support
          </div>
        </div>
      </div>
    </section>;
};
export default ClientLogos;