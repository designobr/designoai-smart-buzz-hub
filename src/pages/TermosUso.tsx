
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, AlertTriangle, Users } from 'lucide-react';

const TermosUso = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-orb w-96 h-96 top-20 left-10" style={{ animationDelay: '1s' }}></div>
          <div className="floating-orb w-64 h-64 bottom-10 right-10" style={{ animationDelay: '3s' }}></div>
          <div className="absolute inset-0 mesh-gradient"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 glass-strong rounded-full text-blue-300 font-medium mb-8 border border-white/20 shadow-xl">
              <FileText className="w-4 h-4 mr-2" />
              📄 Termos Legais
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Termos de Uso
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Conheça os termos e condições que regem o uso da plataforma DesignoAI
            </p>
            <div className="text-sm text-white/50">
              Última atualização: 10 de junho de 2025
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="glass-strong border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-2xl mr-3 animate-glow">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  1. Aceitação dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p>
                  Ao acessar e usar a plataforma DesignoAI, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso.
                </p>
                <p>
                  Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-strong border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl mr-3 animate-glow">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  2. Uso da Plataforma
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p>
                  A DesignoAI concede a você uma licença limitada, não exclusiva e não transferível para usar nossa plataforma de acordo com estes termos.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Você deve ter pelo menos 18 anos para usar nossos serviços</li>
                  <li>É responsável por manter a confidencialidade de sua conta</li>
                  <li>Não deve usar a plataforma para atividades ilegais ou não autorizadas</li>
                  <li>Deve fornecer informações precisas e atualizadas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-strong border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl mr-3 animate-glow">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  3. Propriedade Intelectual
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p>
                  Todo o conteúdo da plataforma DesignoAI, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade da DesignoAI ou de seus licenciadores.
                </p>
                <p>
                  Os conteúdos criados por você usando nossa plataforma permanecem de sua propriedade, mas você nos concede uma licença para hospedar e processar esse conteúdo.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-strong border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-2xl mr-3 animate-glow">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  4. Limitação de Responsabilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p>
                  A DesignoAI não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
                </p>
                <p>
                  Fornecemos nossos serviços "como estão" e não garantimos que sejam livres de erros ou interrupções.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-strong border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-white">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-2xl mr-3 animate-glow">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  5. Modificações dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 space-y-4">
                <p>
                  Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação na plataforma.
                </p>
                <p>
                  É sua responsabilidade revisar periodicamente estes termos para estar ciente de quaisquer alterações.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-strong border border-white/20 shadow-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Contato
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/80 text-center">
                <p>
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em:
                </p>
                <p className="font-semibold text-blue-400 mt-2">
                  contato@designoai.com.br
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermosUso;
