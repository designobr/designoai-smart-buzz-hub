
import { Star, Zap, BarChart3, PenTool, Share2, Brain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.service-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const servicesData = [
    {
      number: "01",
      icon: <Star className="h-8 w-8 text-white" />,
      title: "Criação de Conteúdo",
      description: "Serviços para todos os níveis de conhecimento em criação de conteúdo digital.",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      link: "/criacao-conteudo",
      isHighlight: false
    },
    {
      number: "02",
      icon: <BarChart3 className="h-8 w-8 text-black" />,
      title: "Melhores práticas do mercado",
      description: "Nossa tecnologia une inteligência de dados com automação para resultados reais.",
      gradient: "from-designoai-blue to-blue-400",
      link: "/analise-dados",
      isHighlight: true
    },
    {
      number: "03",
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "Segurança e Compliance",
      description: "Protegido com segurança de dados e compliance total para sua empresa.",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      link: "/estrategias-personalizadas",
      isHighlight: false
    },
    {
      number: "04",
      icon: <PenTool className="h-8 w-8 text-white" />,
      title: "Design Automatizado",
      description: "Criação de designs profissionais para suas publicações em redes sociais.",
      gradient: "from-green-500 via-green-600 to-emerald-500",
      link: "/design-automatizado",
      isHighlight: false
    },
    {
      number: "05",
      icon: <Share2 className="h-8 w-8 text-white" />,
      title: "Gestão de Redes Sociais",
      description: "Automação inteligente para postagens, engajamento e monitoramento.",
      gradient: "from-orange-500 via-orange-600 to-red-500",
      link: "/gestao-redes-sociais",
      isHighlight: false
    },
    {
      number: "06",
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "SEO Inteligente",
      description: "Otimização automática para melhorar seu posicionamento nos buscadores.",
      gradient: "from-yellow-500 via-yellow-600 to-orange-500",
      link: "/seo-inteligente",
      isHighlight: false
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="floating-orb w-96 h-96 top-0 right-0 opacity-10"></div>
      <div className="floating-orb w-64 h-64 bottom-0 left-0 opacity-15"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-6 py-3 glass-effect rounded-full text-designoai-blue font-medium mb-6 border border-designoai-blue/20 hover-lift">
            <span className="w-2 h-2 bg-designoai-blue rounded-full mr-2 animate-pulse"></span>
            🚀 Nossos Serviços
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            <span className="text-white block mb-2">
              Seu parceiro{' '}
              <span className="text-designoai-blue relative">
                confiável
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-designoai-blue to-transparent rounded-full opacity-60"></div>
              </span>
            </span>
            <span className="text-white">em marketing digital.</span>
          </h2>
          <p className="text-xl text-white/70 leading-relaxed">
            Nossas soluções alimentadas por IA transformam sua presença digital e potencializam seus resultados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {servicesData.map((service, index) => (
            <Card 
              key={index}
              data-index={index}
              className={`service-card group relative overflow-hidden border-0 transition-all duration-700 hover-lift cursor-pointer ${
                service.isHighlight 
                  ? 'bg-designoai-blue text-black' 
                  : 'glass-effect text-white'
              } ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                background: service.isHighlight ? '#5EA2FF' : undefined
              }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-designoai-blue/50 via-purple-500/50 to-designoai-blue/50"></div>
              
              <CardHeader className="relative z-10 pb-4">
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-4xl font-bold ${
                    service.isHighlight ? 'text-black/60' : 'text-designoai-blue'
                  }`}>
                    {service.number}
                  </div>
                  <div className={`p-3 rounded-xl group-hover:scale-110 transition-all duration-500 ${
                    service.isHighlight 
                      ? 'bg-black/10' 
                      : 'bg-gradient-to-br from-designoai-blue/20 to-purple-500/20'
                  }`}>
                    {service.icon}
                  </div>
                </div>
                <CardTitle className={`text-xl font-bold transition-colors duration-500 ${
                  service.isHighlight ? 'text-black' : 'text-white group-hover:text-designoai-blue'
                }`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 pt-0">
                <CardDescription className={`text-base leading-relaxed transition-colors duration-300 ${
                  service.isHighlight ? 'text-black/80' : 'text-white/70 group-hover:text-white/90'
                }`}>
                  {service.description}
                </CardDescription>
                
                {service.isHighlight && (
                  <Link 
                    to={service.link} 
                    className="mt-6 inline-flex items-center text-black font-bold hover:translate-x-1 transition-transform duration-300"
                  >
                    Saiba Mais →
                  </Link>
                )}
                
                <Link to={service.link} className="absolute inset-0 z-10" aria-label={service.title} />
              </CardContent>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-designoai-blue/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="glass-effect border-designoai-blue/20 hover-lift group cursor-pointer">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-designoai-blue mb-4 group-hover:scale-105 transition-transform duration-300">
                Campanhas Inteligentes
              </h3>
              <p className="text-white/80 leading-relaxed">
                Automatize sua geração de leads com estratégias baseadas em IA.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-designoai-blue/20 hover-lift group cursor-pointer">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-designoai-blue mb-4 group-hover:scale-105 transition-transform duration-300">
                Relatórios Otimizados
              </h3>
              <p className="text-white/80 leading-relaxed">
                Acompanhe métricas em tempo real e ajuste suas ações com precisão.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Plataforma{' '}
            <span className="text-designoai-blue relative">
              inteligente
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-designoai-blue to-transparent rounded-full opacity-60"></div>
            </span>
            {' '}acessível{' '}
            <span className="text-designoai-blue relative">
              a qualquer hora
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-designoai-blue to-transparent rounded-full opacity-60"></div>
            </span>
            .
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Integramos ferramentas modernas de marketing com fluxos automatizados para escalar sua presença digital com eficiência e segurança.
          </p>
          <Link to="/services">
            <button className="shimmer-button text-white font-semibold px-8 py-4 rounded-xl hover-lift ripple-effect group">
              Saiba Mais
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
