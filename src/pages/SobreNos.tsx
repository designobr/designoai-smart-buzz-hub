
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Lightbulb, Globe } from 'lucide-react';

const SobreNos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Estamos sempre na vanguarda da tecnologia",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Heart,
      title: "Simplicidade",
      description: "Tornamos o complexo em simples e acessível",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Focamos em gerar impacto real para nossos clientes",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Mantemos comunicação clara e honesta",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Excelência",
      description: "Buscamos a perfeição em tudo que fazemos",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Sustentabilidade",
      description: "Crescemos de forma responsável e sustentável",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Empresas Atendidas", gradient: "from-blue-500 to-cyan-500" },
    { number: "50+", label: "Profissionais Especialistas", gradient: "from-purple-500 to-pink-500" },
    { number: "2023", label: "Ano de Fundação", gradient: "from-green-500 to-emerald-500" },
    { number: "98%", label: "Taxa de Satisfação", gradient: "from-orange-500 to-red-500" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb w-96 h-96 top-20 right-10" style={{ animationDelay: '1s' }}></div>
          <div className="floating-orb w-64 h-64 bottom-10 left-10" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 mesh-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
              🏢 Nossa História
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Sobre Nós
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Democratizando o poder da inteligência artificial para empresas de todos os tamanhos.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="floating-orb w-48 h-48 top-20 left-20" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <Card className="glass-strong border border-white/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Nossa História
              </h2>
              
              <div className="prose prose-lg max-w-none text-white/80">
                <p className="text-xl leading-relaxed mb-6">
                  A DesignoAI nasceu da visão de democratizar o poder da inteligência artificial para empresas de todos os tamanhos. Fundada por especialistas em tecnologia e marketing digital, nossa missão é transformar a forma como as empresas se conectam com seus clientes.
                </p>
                
                <div className="glass-card p-8 rounded-xl border border-white/20 my-8">
                  <p className="leading-relaxed mb-4 text-white/90">
                    Em 2023, percebemos que muitas empresas brasileiras enfrentavam dificuldades para competir no ambiente digital devido à falta de recursos tecnológicos avançados. Foi então que decidimos criar uma plataforma que combinasse inteligência artificial de ponta com simplicidade de uso.
                  </p>
                  
                  <p className="leading-relaxed text-white/90">
                    Hoje, a DesignoAI é reconhecida como uma das principais empresas de marketing digital com IA do Brasil, atendendo mais de 500 empresas e gerando resultados extraordinários para nossos clientes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb w-80 h-80 bottom-20 right-20" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center glass-card border border-white/20 hover:glass-strong transition-all duration-500 hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="relative">
                    <h3 className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.number}
                    </h3>
                    <p className="text-white/70 font-medium group-hover:text-white transition-colors duration-300">{stat.label}</p>
                    <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} opacity-20 rounded-lg blur group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-strong border border-white/20 shadow-xl hover:scale-105 transition-transform duration-500">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl w-fit mx-auto mb-4 animate-glow">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80 leading-relaxed">
                  Democratizar o acesso à tecnologia de inteligência artificial para pequenas e médias empresas, permitindo que compitam em igualdade com grandes corporações no ambiente digital.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-strong border border-white/20 shadow-xl hover:scale-105 transition-transform duration-500">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl w-fit mx-auto mb-4 animate-glow">
                  <Eye className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Nossa Visão
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80 leading-relaxed">
                  Ser a principal referência em soluções de marketing digital com inteligência artificial na América Latina até 2030, transformando a maneira como as empresas se comunicam com seus clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb w-96 h-96 top-10 left-10" style={{ animationDelay: '3s' }}></div>
          <div className="floating-orb w-64 h-64 bottom-10 right-10" style={{ animationDelay: '5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Nossos Valores
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group glass-card border border-white/20 hover:glass-strong transition-all duration-500 hover:-translate-y-3">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 bg-gradient-to-r ${value.gradient} rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                    <value.icon className="w-8 h-8 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Innovation */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <div className="space-y-12">
            <Card className="glass-strong border border-white/20 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Nossa Equipe
                </h2>
                <p className="text-white/80 leading-relaxed text-lg">
                  Contamos com uma equipe multidisciplinar de mais de 50 profissionais especialistas em inteligência artificial, marketing digital, desenvolvimento de software, design e atendimento ao cliente. Nosso time é formado por talentos de diversas áreas que compartilham a paixão por inovação e resultados.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-strong border border-white/20 shadow-2xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Tecnologia e Inovação
                </h2>
                <p className="text-white/80 leading-relaxed text-lg mb-6">
                  Investimos continuamente em pesquisa e desenvolvimento, mantendo parcerias com as principais universidades e centros de pesquisa do país. Nossa plataforma utiliza algoritmos proprietários de machine learning e processamento de linguagem natural.
                </p>
                
                <div className="glass-card p-6 rounded-xl border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-4">Responsabilidade Social</h3>
                  <p className="text-white/70 leading-relaxed">
                    Acreditamos no poder transformador da tecnologia e trabalhamos para que ela seja uma força positiva na sociedade, contribuindo para o crescimento sustentável das empresas brasileiras.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SobreNos;
