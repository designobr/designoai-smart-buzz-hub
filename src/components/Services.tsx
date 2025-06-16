
import { Star, Zap, BarChart3, PenTool, Share2, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    icon: <Star className="h-10 w-10 text-white" />,
    title: "Criação de Conteúdo",
    description: "Textos, imagens e gráficos gerados por IA para suas campanhas de marketing digital.",
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    link: "/criacao-conteudo"
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-white" />,
    title: "Análise de Dados",
    description: "Insights precisos e em tempo real sobre o desempenho de suas estratégias de marketing.",
    gradient: "from-purple-500 via-purple-600 to-pink-500",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    link: "/analyse-dados"
  },
  {
    icon: <PenTool className="h-10 w-10 text-white" />,
    title: "Design Automatizado",
    description: "Criação de designs profissionais para suas publicações em redes sociais.",
    gradient: "from-green-500 via-green-600 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    link: "/design-automatizado"
  },
  {
    icon: <Share2 className="h-10 w-10 text-white" />,
    title: "Gestão de Redes Sociais",
    description: "Automação inteligente para postagens, engajamento e monitoramento de suas redes.",
    gradient: "from-orange-500 via-orange-600 to-red-500",
    bgGradient: "from-orange-500/20 to-red-500/20",
    link: "/gestao-redes-sociais"
  },
  {
    icon: <Zap className="h-10 w-10 text-white" />,
    title: "SEO Inteligente",
    description: "Otimização automática para melhorar seu posicionamento nos mecanismos de busca.",
    gradient: "from-yellow-500 via-yellow-600 to-orange-500",
    bgGradient: "from-yellow-500/20 to-orange-500/20",
    link: "/seo-inteligente"
  },
  {
    icon: <Brain className="h-10 w-10 text-white" />,
    title: "Estratégias Personalizadas",
    description: "Recomendações baseadas em IA para maximizar seus resultados de marketing.",
    gradient: "from-indigo-500 via-indigo-600 to-purple-500",
    bgGradient: "from-indigo-500/20 to-purple-500/20",
    link: "/estrategias-personalizadas"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="floating-orb w-96 h-96 top-0 left-1/4" style={{ animationDelay: '1s' }}></div>
        <div className="floating-orb w-64 h-64 bottom-0 right-1/4" style={{ animationDelay: '3s' }}></div>
        <div className="floating-orb w-48 h-48 top-1/2 left-0" style={{ animationDelay: '5s' }}></div>
        <div className="absolute inset-0 mesh-gradient"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
            🚀 Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Serviços Inteligentes para
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Seu Marketing
            </span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Nossas soluções alimentadas por IA transformam sua presença digital e potencializam seus resultados de forma automática e inteligente
          </p>
        </div>

        {/* Services grid with glassmorphism */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <Card 
              key={index} 
              className="group glass-card border border-white/20 hover:glass-strong transition-all duration-700 hover:-translate-y-3 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="relative mb-6">
                  <div className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit group-hover:scale-110 transition-all duration-500 shadow-xl group-hover:shadow-2xl animate-glow`}>
                    {service.icon}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 pt-0">
                <CardDescription className="text-white/70 text-base leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </CardDescription>
                
                <Link to={service.link} className="mt-6 inline-flex items-center text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="relative">
                    Saiba mais
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></div>
                  </span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur opacity-50 animate-pulse"></div>
            <Link to="/services">
              <div className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white rounded-full font-medium shadow-xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-1 glass border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                Ver todos os recursos
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
