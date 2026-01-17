import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Zap, TrendingUp, Star, Target, CheckCircle, AlertTriangle, Smartphone } from 'lucide-react';

const OtimizacaoImagens = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5511965262002";
    const message = "Olá! Tenho interesse no serviço de otimização de imagens. Gostaria de saber mais!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleConsultorClick = () => {
    const phoneNumber = "5511965262002";
    const message = "Olá! Gostaria de falar com um consultor sobre otimização de imagens para o meu negócio.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-indigo-700"></div>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
              Transforme fotos comuns em 
              <span className="block text-yellow-300 animate-pulse-slow"> poderosas ferramentas de venda</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Nosso serviço de otimização profissional de imagens com IA transforma suas fotos amadoras 
              em conteúdo visual irresistível que pode aumentar suas vendas em até <strong>25%</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
                onClick={handleConsultorClick}
              >
                <Camera className="mr-2" />
                Quero Fotos Profissionais Agora!
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg"
                onClick={handleWhatsAppClick}
              >
                Ver Exemplos no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* O Problema Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Você está perdendo clientes por causa das suas imagens?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Imagens de baixa qualidade são o maior obstáculo entre você e o sucesso do seu negócio. 
              Veja como elas estão prejudicando suas vendas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-red-200 hover:shadow-lg transition-all duration-200 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl text-red-700">Cardápios que Afastam</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Fotos amadoras de pratos fazem os clientes duvidarem da qualidade da sua comida, 
                  diminuindo pedidos em até 40%.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-all duration-200 group">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Smartphone className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl text-orange-700">E-commerce Sem Conversão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Produtos com fotos ruins têm taxa de conversão 67% menor. 
                  Clientes não confiam no que não conseguem ver claramente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-all duration-200 group md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-700">Invisibilidade nas Redes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Conteúdo visual fraco resulta em menos engajamento, 
                  alcance reduzido e perda de oportunidades de vendas.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-red-50 border border-red-200 rounded-lg px-6 py-4">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
              <span className="text-red-800 font-semibold">
                90% das decisões de compra são influenciadas pela qualidade visual
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* A Solução Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              A Solução que Vai Revolucionar Suas Vendas
            </h2>
            
            <p className="text-xl mb-8 opacity-95">
              Nossa tecnologia de otimização profissional com Inteligência Artificial transforma 
              suas imagens comuns em ferramentas poderosas de conversão.
            </p>

            <div className="bg-primary-foreground/10 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-yellow-400 text-primary px-6 py-3 rounded-full">
                  <span className="text-2xl font-bold">+25%</span>
                </div>
              </div>
              <p className="text-2xl font-semibold mb-2">Aumento Comprovado nas Vendas</p>
              <p className="opacity-90">
                Empresas que investem em imagens profissionais aumentam suas conversões em até 25%. 
                Esse é o poder do marketing visual feito da forma correta.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold">Upload Simples</h3>
                <p className="text-sm opacity-90">Você envia suas fotos através do nosso sistema seguro</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold">IA + Especialistas</h3>
                <p className="text-sm opacity-90">Nossa IA otimiza cores, luz e composição com supervisão profissional</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold">Entrega Rápida</h3>
                <p className="text-sm opacity-90">Receba suas imagens otimizadas em até 24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-16 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Por Que Escolher Nosso Serviço?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transforme seu negócio com imagens que vendem, sem precisar investir milhares em fotógrafo profissional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-all duration-200 group hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg text-green-700">Mais Vendas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Imagens profissionais a uma fração do custo. Economia de até 80% comparado a um fotógrafo tradicional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-200 group hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg text-purple-700">Qualidade Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Imagens chamativas e profissionais que impressionam seus clientes e aumentam a credibilidade.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-200 group hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg text-blue-700">Diferencial Competitivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Destaque-se no iFood, Instagram, Google e outras plataformas com conteúdo visual que converte.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-200 group hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg text-orange-700">Rapidez Garantida</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Processo otimizado com entrega em até 24 horas. Seus projetos nunca mais vão atrasar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oferta Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-purple-600 to-indigo-700 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-yellow-400 text-primary inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🔥 OFERTA ESPECIAL
            </div>
            
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Pacote Completo de Otimização
            </h2>
            
            <p className="text-xl mb-8 opacity-95">
              Transforme seu negócio hoje mesmo com nosso pacote especial!
            </p>

            <Card className="max-w-md mx-auto bg-primary-foreground text-foreground border-4 border-yellow-400 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold rotate-12">
                POPULAR
              </div>
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">Pacote Profissional</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">R$ 100</span>
                  <span className="text-muted-foreground line-through ml-2">R$ 300</span>
                </div>
                <p className="text-green-600 font-semibold">Economize R$ 200 hoje!</p>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-sm">10 imagens totalmente otimizadas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-sm">Correção de cores e iluminação</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-sm">Remoção de imperfeições</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-sm">Otimização para redes sociais</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-sm">Entrega em até 24 horas</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-sm">Garantia de satisfação</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-semibold text-primary">BÔNUS: Consultoria gratuita</span>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8">
              <p className="text-lg opacity-90 mb-4">
                <strong>Compare:</strong> Um fotógrafo profissional cobraria R$ 80-150 por foto. 
                Você paga apenas R$ 10 por imagem otimizada!
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-sm opacity-75">
                <span>⭐ Satisfação garantida ou seu dinheiro de volta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Garanta Agora Fotos Profissionais 
              <span className="block text-primary">e Aumente Suas Vendas!</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Não perca mais clientes por causa de imagens amadoras. 
              Transforme seu negócio hoje mesmo com fotos que realmente vendem.
            </p>

            <div className="bg-card border rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-500 text-white px-4 py-2 rounded-full animate-pulse-slow">
                  ⚡ OFERTA POR TEMPO LIMITADO
                </div>
              </div>
              <p className="text-lg font-semibold text-foreground mb-2">
                Apenas nas próximas 48 horas!
              </p>
              <p className="text-muted-foreground">
                Após esse período, o preço volta para R$ 300. 
                Não perca essa oportunidade única de revolucionar suas vendas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-10 py-4 text-xl transform hover:scale-105 transition-all duration-200"
                onClick={handleConsultorClick}
              >
                <Camera className="mr-2" />
                QUERO MINHAS FOTOS PROFISSIONAIS!
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 text-xl"
                onClick={handleWhatsAppClick}
              >
                <Zap className="mr-2" />
                Falar com Consultor
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Sem taxa de setup
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Pagamento seguro
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Garantia de satisfação
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-6 opacity-75">
              * Oferta válida para novos clientes. Condições especiais aplicáveis.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OtimizacaoImagens;