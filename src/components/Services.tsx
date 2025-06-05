
import { Star, Zap, BarChart3, PenTool, Share2, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
  {
    icon: <Star className="h-10 w-10 text-designoai-blue" />,
    title: "Criação de Conteúdo",
    description: "Textos, imagens e gráficos gerados por IA para suas campanhas de marketing digital.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-designoai-blue" />,
    title: "Análise de Dados",
    description: "Insights precisos e em tempo real sobre o desempenho de suas estratégias de marketing.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <PenTool className="h-10 w-10 text-designoai-blue" />,
    title: "Design Automatizado",
    description: "Criação de designs profissionais para suas publicações em redes sociais.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <Share2 className="h-10 w-10 text-designoai-blue" />,
    title: "Gestão de Redes Sociais",
    description: "Automação inteligente para postagens, engajamento e monitoramento de suas redes.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: <Zap className="h-10 w-10 text-designoai-blue" />,
    title: "SEO Inteligente",
    description: "Otimização automática para melhorar seu posicionamento nos mecanismos de busca.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Brain className="h-10 w-10 text-designoai-blue" />,
    title: "Estratégias Personalizadas",
    description: "Recomendações baseadas em IA para maximizar seus resultados de marketing.",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-white to-designoai-gray/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-designoai-blue-light rounded-full text-designoai-blue font-medium mb-6">
            🚀 Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-designoai-blue-dark bg-clip-text text-transparent mb-6">
            Serviços Inteligentes para Seu Marketing
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nossas soluções alimentadas por IA transformam sua presença digital e potencializam seus resultados de forma automática e inteligente
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <Card 
              key={index} 
              className="group border-0 bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative z-10">
                <div className="mb-6 p-3 bg-designoai-blue-light rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-designoai-blue-dark group-hover:text-designoai-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                
                {/* Subtle arrow indicator */}
                <div className="mt-4 inline-flex items-center text-designoai-blue font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Saiba mais
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-designoai-blue to-designoai-blue-dark text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 cursor-pointer">
            Ver todos os recursos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
