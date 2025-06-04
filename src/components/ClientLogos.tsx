
const ClientLogos = () => {
  const clients = [
    { name: "TechSolutions", logo: "🚀" },
    { name: "BeautyMax", logo: "💄" },
    { name: "FoodHub", logo: "🍕" },
    { name: "FitStudio", logo: "💪" },
    { name: "EcoGreen", logo: "🌱" },
    { name: "AutoParts", logo: "🔧" },
    { name: "PetCare", logo: "🐕" },
    { name: "StyleShop", logo: "👗" }
  ];

  return (
    <section className="py-16 bg-gray-50">
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
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-2">{client.logo}</div>
              <span className="text-sm font-medium text-gray-700">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
