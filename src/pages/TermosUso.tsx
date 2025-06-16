
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, AlertTriangle, Users } from 'lucide-react';

const TermosUso = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-designoai-blue-light/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-designoai-blue/5 via-transparent to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-designoai-blue/20 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-designoai-blue/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-designoai-blue/20 to-purple-200/30 rounded-2xl">
                <FileText size={48} className="text-designoai-blue" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent">
                Termos de Uso
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Conheça os termos e condições que regem o uso da plataforma DesignoAI
            </p>
            <div className="text-sm text-gray-500">
              Última atualização: 10 de junho de 2025
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-3 text-designoai-blue" />
                  1. Aceitação dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  Ao acessar e usar a plataforma DesignoAI, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso.
                </p>
                <p>
                  Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="mr-3 text-designoai-blue" />
                  2. Uso da Plataforma
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
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

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="mr-3 text-designoai-blue" />
                  3. Propriedade Intelectual
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  Todo o conteúdo da plataforma DesignoAI, incluindo textos, gráficos, logos, ícones, imagens e software, é propriedade da DesignoAI ou de seus licenciadores.
                </p>
                <p>
                  Os conteúdos criados por você usando nossa plataforma permanecem de sua propriedade, mas você nos concede uma licença para hospedar e processar esse conteúdo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="mr-3 text-designoai-blue" />
                  4. Limitação de Responsabilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  A DesignoAI não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou incapacidade de usar nossos serviços.
                </p>
                <p>
                  Fornecemos nossos serviços "como estão" e não garantimos que sejam livres de erros ou interrupções.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="mr-3 text-designoai-blue" />
                  5. Modificações dos Termos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação na plataforma.
                </p>
                <p>
                  É sua responsabilidade revisar periodicamente estes termos para estar ciente de quaisquer alterações.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <span className="bg-gradient-to-r from-designoai-blue to-purple-600 bg-clip-text text-transparent">
                    Contato
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-center">
                <p>
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em:
                </p>
                <p className="font-semibold text-designoai-blue mt-2">
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
