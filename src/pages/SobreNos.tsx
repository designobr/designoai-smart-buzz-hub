
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
      description: "Estamos sempre na vanguarda da tecnologia"
    },
    {
      icon: Heart,
      title: "Simplicidade",
      description: "Tornamos o complexo em simples e acessível"
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Focamos em gerar impacto real para nossos clientes"
    },
    {
      icon: Eye,
      title: "Transparência",
      description: "Mantemos comunicação clara e honesta"
    },
    {
      icon: Users,
      title: "Excelência",
      description: "Buscamos a perfeição em tudo que fazemos"
    },
    {
      icon: Globe,
      title: "Sustentabilidade",
      description: "Crescemos de forma responsável e sustentável"
    }
  ];

  const stats = [
    { number: "500+", label: "Empresas Atendidas" },
    { number: "50+", label: "Profissionais Especialistas" },
    { number: "2023", label: "Ano de Fundação" },
    { number: "98%", label: "Taxa de Satisfação" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-designoai-blue-light/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-designoai-blue/5 via-transparent to-purple-400/10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-designoai-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent leading-tight">
              Sobre Nós
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Democratizando o poder da inteligência artificial para empresas de todos os tamanhos.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                Nossa História
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  A DesignoAI nasceu da visão de democratizar o poder da inteligência artificial para empresas de todos os tamanhos. Fundada por especialistas em tecnologia e marketing digital, nossa missão é transformar a forma como as empresas se conectam com seus clientes.
                </p>
                
                <div className="bg-gradient-to-r from-designoai-blue-light/50 to-purple-50 rounded-xl p-8 my-8">
                  <p className="leading-relaxed mb-4">
                    Em 2023, percebemos que muitas empresas brasileiras enfrentavam dificuldades para competir no ambiente digital devido à falta de recursos tecnológicos avançados. Foi então que decidimos criar uma plataforma que combinasse inteligência artificial de ponta com simplicidade de uso.
                  </p>
                  
                  <p className="leading-relaxed">
                    Hoje, a DesignoAI é reconhecida como uma das principais empresas de marketing digital com IA do Brasil, atendendo mais de 500 empresas e gerando resultados extraordinários para nossos clientes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <CardContent className="p-8">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-designoai-blue to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-designoai-blue mx-auto mb-4" />
                <CardTitle className="text-2xl bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed">
                  Democratizar o acesso à tecnologia de inteligência artificial para pequenas e médias empresas, permitindo que compitam em igualdade com grandes corporações no ambiente digital.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="text-center">
                <Eye className="w-12 h-12 text-designoai-blue mx-auto mb-4" />
                <CardTitle className="text-2xl bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                  Nossa Visão
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed">
                  Ser a principal referência em soluções de marketing digital com inteligência artificial na América Latina até 2030, transformando a maneira como as empresas se comunicam com seus clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-designoai-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Nossos Valores
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <CardTitle className="text-xl text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Innovation */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-12">
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                  Nossa Equipe
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Contamos com uma equipe multidisciplinar de mais de 50 profissionais especialistas em inteligência artificial, marketing digital, desenvolvimento de software, design e atendimento ao cliente. Nosso time é formado por talentos de diversas áreas que compartilham a paixão por inovação e resultados.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                  Tecnologia e Inovação
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Investimos continuamente em pesquisa e desenvolvimento, mantendo parcerias com as principais universidades e centros de pesquisa do país. Nossa plataforma utiliza algoritmos proprietários de machine learning e processamento de linguagem natural.
                </p>
                
                <div className="bg-gradient-to-r from-designoai-blue/10 to-purple-100 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-designoai-blue-dark mb-4">Responsabilidade Social</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Acreditamos no poder transformador da tecnologia e mantemos programas de responsabilidade social que incluem capacitação gratuita para empreendedores, apoio a startups sociais e iniciativas de inclusão digital em comunidades carentes.
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
