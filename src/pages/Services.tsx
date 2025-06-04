
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star } from 'lucide-react';

const Services = () => {
  const additionalServices = [
    { name: "Impressão de 100 cartões de visita", price: "R$ 80 a R$ 120" },
    { name: "Catálogo digital interativo", price: "R$ 300" },
    { name: "Vídeos Reels (extra)", price: "R$ 80 a R$ 150 cada" },
    { name: "Landing Page para campanha específica", price: "R$ 400" },
    { name: "Consultoria estratégica mensal", price: "R$ 250" },
    { name: "Criação de e-mail profissional", price: "R$ 100 (setup)" },
    { name: "Google Meu Negócio otimizado", price: "R$ 200" }
  ];

  const handleConsultationClick = () => {
    window.open('https://wa.me/5511947968158?text=Olá! Gostaria de agendar uma consultoria gratuita sobre o Plano Fusion.', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 bg-gradient-to-br from-designoai-blue-light to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-designoai-blue-dark mb-6">
              Plano Fusion
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Atendemos empresas pequenas e médias que atuam no físico, mas ainda não possuem presença digital estratégica
            </p>
            <div className="flex items-center justify-center mb-8">
              <Star className="w-8 h-8 text-designoai-blue mr-2" />
              <span className="text-3xl font-bold text-designoai-blue">R$ 4.000/mês</span>
            </div>
            <Button 
              size="lg" 
              className="bg-designoai-blue hover:bg-designoai-blue-dark"
              onClick={handleConsultationClick}
            >
              Agende sua Consultoria Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="digital" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="digital">📱 Digital</TabsTrigger>
              <TabsTrigger value="physical">🧾 Físico</TabsTrigger>
              <TabsTrigger value="ai">🤖 IA</TabsTrigger>
              <TabsTrigger value="extras">➕ Extras</TabsTrigger>
            </TabsList>

            <TabsContent value="digital">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-designoai-blue-dark">📱 Serviços Digitais</CardTitle>
                  <CardDescription>Presença digital completa e profissional</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Gestão de Redes Sociais</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />12 posts/mês (imagem + legenda + hashtag #inteligenciaartificial)</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Stories diários programados</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Calendário de conteúdo com planejamento estratégico</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Design & Copy</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Criação da identidade visual completa</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Templates editáveis no Canva</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Legendas otimizadas + textos para anúncios</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Sugestão de bio e textos institucionais</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tráfego Pago</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Campanhas no Instagram e Facebook</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Foco em conversão ou visibilidade</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Relatório mensal automático via IA</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Site One Page</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Site institucional responsivo</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Quem somos, serviços, contato</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Formulário de contato e botão WhatsApp</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="physical">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-designoai-blue-dark">🧾 Materiais Físicos</CardTitle>
                  <CardDescription>Integração perfeita entre físico e digital</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Cartões de Visita</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Cartão de Visita Digital com QR Code</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Cartão de Visita Físico (opcional)</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Design alinhado com identidade visual</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Produção Audiovisual</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />1 Sessão de Fotos Presencial (semestre)</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />1 Gravação de Vídeo Institucional (semestre)</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Material profissional para redes sociais</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-designoai-blue-dark">🤖 Inteligência Artificial</CardTitle>
                  <CardDescription>Tecnologia avançada para otimizar seus resultados</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Relatórios Inteligentes</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Relatórios mensais de desempenho automáticos</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Análise de métricas e insights</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Sugestões de otimização baseadas em dados</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Assistente Virtual</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Assistente por WhatsApp com IA</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Suporte humano quando necessário</li>
                      <li className="flex items-center"><Check className="w-4 h-4 text-green-500 mr-2" />Diagnóstico de marketing automático</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="extras">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-designoai-blue-dark">➕ Serviços Adicionais</CardTitle>
                  <CardDescription>Expanda seu pacote com serviços personalizados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {additionalServices.map((service, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="font-medium text-gray-700">{service.name}</span>
                        <span className="text-designoai-blue font-semibold">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-designoai-blue-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-designoai-blue-dark mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Entre em contato conosco e descubra como podemos impulsionar sua empresa
            </p>
            <Button 
              size="lg" 
              className="bg-designoai-blue hover:bg-designoai-blue-dark"
              onClick={handleConsultationClick}
            >
              Fale Conosco no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
