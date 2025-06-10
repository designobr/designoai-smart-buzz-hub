
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Globe, Users, Award, Mail, Phone, MessageCircle, Target } from 'lucide-react';

const Parcerias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnershipTypes = [
    {
      icon: Globe,
      title: "Parceiros de Tecnologia",
      description: "Colaboramos com líderes em tecnologia para integrar as melhores ferramentas e plataformas em nossas soluções."
    },
    {
      icon: Users,
      title: "Parceiros de Canal",
      description: "Trabalhamos com agências de marketing, consultorias e integradores que expandem nosso alcance."
    },
    {
      icon: Handshake,
      title: "Parceiros Estratégicos",
      description: "Estabelecemos alianças estratégicas com empresas complementares para criar soluções integradas."
    }
  ];

  const benefits = [
    "Acesso antecipado a novas funcionalidades",
    "Treinamento especializado em nossas tecnologias",
    "Suporte técnico dedicado e prioritário",
    "Materiais de marketing co-brandados",
    "Participação em eventos exclusivos",
    "Programa de certificação oficial",
    "Comissões atrativas e metas flexíveis",
    "Portal exclusivo para parceiros"
  ];

  const certifications = [
    "Certificação técnica em implementação de IA",
    "Certificação comercial em vendas consultivas",
    "Certificação em marketing digital avançado",
    "Workshops práticos e hands-on",
    "Avaliações contínuas e atualizações",
    "Reconhecimento oficial e credenciais digitais"
  ];

  const requirements = [
    "Experiência comprovada no mercado de marketing digital ou tecnologia",
    "Equipe técnica capacitada ou disposição para treinamento",
    "Compromisso com a qualidade no atendimento ao cliente",
    "Alinhamento com nossos valores e visão de mercado",
    "Capacidade de investimento em marketing conjunto",
    "Estrutura para suporte pós-venda"
  ];

  const processSteps = [
    "Preencha o formulário de interesse em parcerias",
    "Participe de uma reunião de alinhamento",
    "Avaliação técnica e comercial",
    "Assinatura do acordo de parceria",
    "Onboarding e treinamento inicial",
    "Início das atividades conjuntas"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-designoai-blue-light/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-designoai-blue/5 via-transparent to-purple-400/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-designoai-blue/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent leading-tight">
              Parcerias
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Construindo relacionamentos duradouros para oferecer soluções ainda mais completas e inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Tipos de Parcerias
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/70 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-designoai-blue/20 to-purple-400/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-8 h-8 text-designoai-blue" />
                  </div>
                  <CardTitle className="text-xl text-designoai-blue-dark group-hover:text-designoai-blue transition-colors">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Benefícios das Parcerias
          </h2>
          
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
                Nossos parceiros desfrutam de uma série de benefícios exclusivos:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start p-4 bg-gradient-to-r from-designoai-blue-light/30 to-purple-50 rounded-xl hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certification Program */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
            Programa de Certificação
          </h2>
          
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
            <CardContent className="p-8 md:p-12">
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
                Oferecemos um programa completo de certificação para garantir que nossos parceiros tenham o conhecimento necessário:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Requirements & Process */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-designoai-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                  Requisitos para Parceria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-1 mr-3 mt-1.5 flex-shrink-0">
                        <Target className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{req}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                  Como se Tornar Parceiro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-2 mr-4 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-designoai-blue-light/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-designoai-blue-dark mb-4">Parcerias Internacionais</h3>
                <p className="text-gray-700 leading-relaxed">
                  Estamos expandindo nossas operações para mercados internacionais e buscamos parceiros locais que possam representar a DesignoAI em diferentes países e regiões. Oferecemos suporte completo para adaptação cultural e regulamentações locais.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-purple-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-designoai-blue-dark mb-4">Programa de Startups</h3>
                <p className="text-gray-700 leading-relaxed">
                  Temos um programa especial para startups e empresas em crescimento, oferecendo condições diferenciadas e suporte especializado para empresas que estão começando sua jornada digital.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-designoai-blue/10 via-white to-purple-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl text-center bg-gradient-to-r from-designoai-blue-dark to-designoai-blue bg-clip-text text-transparent">
                Entre em Contato para Parcerias
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-designoai-blue-light/30 to-purple-50 rounded-xl">
                  <div className="bg-gradient-to-r from-designoai-blue to-purple-500 rounded-full p-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-designoai-blue-dark">E-mail</p>
                    <a 
                      href="mailto:contato@designoai.com.br" 
                      className="text-designoai-blue hover:underline text-lg"
                    >
                      contato@designoai.com.br
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-50 to-designoai-blue-light/30 rounded-xl">
                  <div className="bg-gradient-to-r from-purple-500 to-designoai-blue rounded-full p-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-designoai-blue-dark">WhatsApp</p>
                    <a 
                      href="https://wa.me/5511947968158" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-designoai-blue hover:underline text-lg"
                    >
                      (11) 94796-8158
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-designoai-blue/10 to-purple-100 rounded-2xl p-8 text-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Entre em contato conosco para iniciar uma conversa sobre como podemos crescer juntos e criar valor para nossos clientes mútuos.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Parcerias;
