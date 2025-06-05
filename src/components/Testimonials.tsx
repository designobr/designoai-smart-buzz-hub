
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "O DesignoAI revolucionou completamente nossa estratégia de marketing. O que antes levava dias para criar e publicar, agora é feito em horas, com resultados muito melhores.",
    author: "Juliana Mendes",
    role: "Marketing Manager, TechSoft",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    content: "A precisão com que a IA do DesignoAI entende nosso público-alvo é impressionante. Conseguimos aumentar nosso engajamento em 230% no primeiro mês de uso.",
    author: "Ricardo Torres",
    role: "CEO, Inova Digital",
    rating: 5,
    avatar: "👨‍💼"
  },
  {
    content: "Economizamos tempo e recursos enquanto aumentamos nossa presença online. Os insights gerados pela plataforma nos ajudam a tomar decisões mais inteligentes.",
    author: "Camila Alves",
    role: "Social Media Director, Global Brand",
    rating: 5,
    avatar: "👩‍🎨"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-designoai-gray/50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-designoai-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-designoai-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-designoai-blue-light rounded-full text-designoai-blue font-medium mb-6">
            💬 Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-designoai-blue-dark bg-clip-text text-transparent mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600">
            Empresas de todos os tamanhos estão transformando seus resultados com o DesignoAI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-designoai-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Quote icon */}
              <div className="relative z-10">
                <div className="absolute -top-4 -left-4 p-3 bg-gradient-to-br from-designoai-blue to-designoai-blue-dark rounded-2xl shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                
                {/* Stars rating */}
                <div className="flex items-center mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-designoai-blue to-designoai-blue-dark rounded-full flex items-center justify-center text-white text-xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-designoai-blue-dark text-lg">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl font-bold text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">4.9/5</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">500+</div>
            <div className="text-gray-600">Clientes Satisfeitos</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">98%</div>
            <div className="text-gray-600">Taxa de Retenção</div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">24/7</div>
            <div className="text-gray-600">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
