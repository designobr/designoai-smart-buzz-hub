
import { Star, Zap, BarChart3, PenTool, Share2, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
  {
    icon: <Star className="h-10 w-10 text-white" />,
    title: "Criação de Conteúdo",
    description: "Textos, imagens e gráficos gerados por IA para suas campanhas de marketing digital.",
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-white" />,
    title: "Análise de Dados",
    description: "Insights precisos e em tempo real sobre o desempenho de suas estratégias de marketing.",
    gradient: "from-purple-500 via-purple-600 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50"
  },
  {
    icon: <PenTool className="h-10 w-10 text-white" />,
    title: "Design Automatizado",
    description: "Criação de designs profissionais para suas publicações em redes sociais.",
    gradient: "from-green-500 via-green-600 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    icon: <Share2 className="h-10 w-10 text-white" />,
    title: "Gestão de Redes Sociais",
    description: "Automação inteligente para postagens, engajamento e monitoramento de suas redes.",
    gradient: "from-orange-500 via-orange-600 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    icon: <Zap className="h-10 w-10 text-white" />,
    title: "SEO Inteligente",
    description: "Otimização automática para melhorar seu posicionamento nos mecanismos de busca.",
    gradient: "from-yellow-500 via-yellow-600 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50"
  },
  {
    icon: <Brain className="h-10 w-10 text-white" />,
    title: "Estratégias Personalizadas",
    description: "Recomendações baseadas em IA para maximizar seus resultados de marketing.",
    gradient: "from-indigo-500 via-indigo-600 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50/50 to-gray-50 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-designoai-blue/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-designoai-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-designoai-blue-light to-purple-50 rounded-full text-designoai-blue font-medium mb-6 shadow-lg border border-designoai-blue/20">
            <span className="w-2 h-2 bg-designoai-blue rounded-full mr-2 animate-pulse"></span>
            🚀 Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-designoai-blue to-indigo-600 bg-clip-text text-transparent">
              Serviços Inteligentes para
            </span>
            <br />
            <span className="bg-gradient-to-r from-designoai-blue via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Seu Marketing
            </span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Nossas soluções alimentadas por IA transformam sua presença digital e potencializam seus resultados de forma automática e inteligente
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <Card 
              key={index} 
              className="group border-0 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
            >
              {/* Enhanced gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Subtle border gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 via-transparent to-slate-200/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="relative mb-6">
                  <div className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl`}>
                    {service.icon}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  </div>
                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-designoai-blue transition-colors duration-500">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <CardDescription className="text-slate-600 text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {service.description}
                </CardDescription>
                
                {/* Enhanced arrow indicator */}
                <div className="mt-6 inline-flex items-center text-designoai-blue font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="relative">
                    Saiba mais
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-designoai-blue to-purple-600 group-hover:w-full transition-all duration-300"></div>
                  </span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-designoai-blue via-purple-600 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-designoai-blue via-purple-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              Ver todos os recursos
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
