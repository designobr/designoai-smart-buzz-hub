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
  return <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-designoai-blue-dark mb-4">
            Empresas que confiam no DesignoAI
          </h2>
          <p className="text-gray-600">
            Mais de 500 empresas já transformaram seu marketing digital conosco
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {clients.map((client, index) => {})}
        </div>
      </div>
    </section>;
};
export default ClientLogos;