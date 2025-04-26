
const testimonials = [
  {
    content: "O DesignoAI revolucionou completamente nossa estratégia de marketing. O que antes levava dias para criar e publicar, agora é feito em horas, com resultados muito melhores.",
    author: "Juliana Mendes",
    role: "Marketing Manager, TechSoft"
  },
  {
    content: "A precisão com que a IA do DesignoAI entende nosso público-alvo é impressionante. Conseguimos aumentar nosso engajamento em 230% no primeiro mês de uso.",
    author: "Ricardo Torres",
    role: "CEO, Inova Digital"
  },
  {
    content: "Economizamos tempo e recursos enquanto aumentamos nossa presença online. Os insights gerados pela plataforma nos ajudam a tomar decisões mais inteligentes.",
    author: "Camila Alves",
    role: "Social Media Director, Global Brand"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600">
            Empresas de todos os tamanhos estão transformando seus resultados com o DesignoAI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative">
              <div className="absolute -top-4 -left-4">
                <img src="/star-icon.svg" alt="DesignoAI Star" className="w-8 h-8" />
              </div>
              <div className="mb-6 text-5xl text-designoai-blue">"</div>
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-medium text-designoai-blue-dark">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center space-x-8">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://via.placeholder.com/120x40" alt="Logo Cliente" className="h-8" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://via.placeholder.com/120x40" alt="Logo Cliente" className="h-8" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://via.placeholder.com/120x40" alt="Logo Cliente" className="h-8" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://via.placeholder.com/120x40" alt="Logo Cliente" className="h-8" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="https://via.placeholder.com/120x40" alt="Logo Cliente" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
