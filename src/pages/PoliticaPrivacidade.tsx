
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Database, Lock, UserCheck, Settings } from 'lucide-react';

const PoliticaPrivacidade = () => {
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
                <Shield size={48} className="text-designoai-blue" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent">
                Política de Privacidade
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Sua privacidade é importante para nós. Saiba como coletamos, usamos e protegemos suas informações
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
                  <Eye className="mr-3 text-designoai-blue" />
                  1. Informações que Coletamos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  Coletamos informações que você nos fornece diretamente e automaticamente quando usa nossos serviços:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Informações Fornecidas:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Nome e informações de contato</li>
                      <li>Informações de conta e perfil</li>
                      <li>Conteúdo que você cria</li>
                      <li>Comunicações conosco</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Informações Automáticas:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Dados de uso da plataforma</li>
                      <li>Informações do dispositivo</li>
                      <li>Endereço IP e localização</li>
                      <li>Cookies e tecnologias similares</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Settings className="mr-3 text-designoai-blue" />
                  2. Como Usamos suas Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fornecer e melhorar nossos serviços</li>
                  <li>Personalizar sua experiência na plataforma</li>
                  <li>Processar transações e pagamentos</li>
                  <li>Enviar comunicações importantes e atualizações</li>
                  <li>Analisar o uso da plataforma e desenvolver melhorias</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <UserCheck className="mr-3 text-designoai-blue" />
                  3. Compartilhamento de Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Com seu consentimento explícito</li>
                  <li>Com prestadores de serviços que nos ajudam a operar a plataforma</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Para proteger nossos direitos e segurança</li>
                  <li>Em caso de fusão ou aquisição da empresa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lock className="mr-3 text-designoai-blue" />
                  4. Segurança dos Dados
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Segurança Técnica:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Criptografia de dados</li>
                      <li>Firewalls e sistemas de detecção</li>
                      <li>Acesso restrito aos dados</li>
                      <li>Monitoramento contínuo</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Segurança Organizacional:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Treinamento de funcionários</li>
                      <li>Políticas de acesso</li>
                      <li>Auditorias regulares</li>
                      <li>Contratos de confidencialidade</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Database className="mr-3 text-designoai-blue" />
                  5. Seus Direitos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>Você tem os seguintes direitos em relação aos seus dados:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Acesso:</strong> Solicitar cópias de suas informações pessoais</li>
                  <li><strong>Retificação:</strong> Corrigir informações incorretas ou incompletas</li>
                  <li><strong>Exclusão:</strong> Solicitar a exclusão de suas informações</li>
                  <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                  <li><strong>Oposição:</strong> Opor-se ao processamento de seus dados</li>
                  <li><strong>Limitação:</strong> Restringir o processamento de seus dados</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-r from-designoai-blue/5 via-white to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <span className="bg-gradient-to-r from-designoai-blue to-purple-600 bg-clip-text text-transparent">
                    Entre em Contato
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-center space-y-4">
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
                </p>
                <div className="space-y-2">
                  <p className="font-semibold text-designoai-blue">Email: contato@designoai.com.br</p>
                  <p className="font-semibold text-designoai-blue">WhatsApp: +55 11 94796-8158</p>
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

export default PoliticaPrivacidade;
