
import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';

const testimonials = [
  {
    content: "O DesignoAI revolucionou completamente nossa estratégia de marketing. O que antes levava dias para criar e publicar, agora é feito em horas, com resultados muito melhores.",
    author: "Juliana Mendes",
    role: "Marketing Manager, TechSoft",
    rating: 5,
    avatar: "👩‍💼",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    content: "A precisão com que a IA do DesignoAI entende nosso público-alvo é impressionante. Conseguimos aumentar nosso engajamento em 230% no primeiro mês de uso.",
    author: "Ricardo Torres",
    role: "CEO, Inova Digital",
    rating: 5,
    avatar: "👨‍💼",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    content: "Economizamos tempo e recursos enquanto aumentamos nossa presença online. Os insights gerados pela plataforma nos ajudam a tomar decisões mais inteligentes.",
    author: "Camila Alves",
    role: "Social Media Director, Global Brand",
    rating: 5,
    avatar: "👩‍🎨",
    gradient: "from-green-500 to-emerald-500"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-designoai-blue/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-designoai-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-designoai-blue-light to-purple-50 rounded-full text-designoai-blue font-medium mb-6 shadow-lg border border-designoai-blue/20">
            <Quote className="w-4 h-4 mr-2" />
            💬 Depoimentos
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-designoai-blue to-indigo-600 bg-clip-text text-transparent">
              O Que Nossos Clientes
            </span>
            <br />
            <span className="bg-gradient-to-r from-designoai-blue via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Dizem Sobre Nós
            </span>
          </h2>
          <p className="text-xl text-slate-600">
            Empresas de todos os tamanhos estão transformando seus resultados com o DesignoAI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl border border-slate-200/50 relative overflow-hidden transition-all duration-700 hover:-translate-y-3"
            >
              {/* Enhanced gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
              
              {/* Subtle border glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10`}></div>
              
              <div className="relative z-10">
                {/* Enhanced quote icon */}
                <div className="relative mb-6">
                  <div className={`absolute -top-4 -left-4 p-4 bg-gradient-to-br ${testimonial.gradient} rounded-2xl shadow-xl`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className={`absolute -top-6 -left-6 p-6 bg-gradient-to-br ${testimonial.gradient} rounded-2xl blur opacity-30`}></div>
                </div>
                
                {/* Enhanced stars rating */}
                <div className="flex items-center mb-6 mt-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="relative">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <div className="absolute inset-0 bg-yellow-400 rounded-full blur opacity-30"></div>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced content */}
                <p className="text-slate-700 mb-8 text-lg leading-relaxed italic font-medium">
                  "{testimonial.content}"
                </p>
                
                {/* Enhanced author section */}
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white text-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-lg">{testimonial.author}</p>
                    <p className="text-slate-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { 
              icon: <Award className="w-8 h-8" />, 
              value: "4.9/5", 
              label: "Avaliação Média",
              gradient: "from-yellow-500 to-orange-500"
            },
            { 
              icon: <Users className="w-8 h-8" />, 
              value: "500+", 
              label: "Clientes Satisfeitos",
              gradient: "from-blue-500 to-cyan-500"
            },
            { 
              icon: <TrendingUp className="w-8 h-8" />, 
              value: "98%", 
              label: "Taxa de Retenção",
              gradient: "from-green-500 to-emerald-500"
            },
            { 
              icon: <Star className="w-8 h-8" />, 
              value: "24/7", 
              label: "Suporte",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((stat, index) => (
            <div key={index} className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-slate-200/50">
              <div className="relative mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
