
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, Settings, Eye, Shield, BarChart3, Target } from 'lucide-react';

const Cookies = () => {
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
                <Cookie size={48} className="text-designoai-blue" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-designoai-blue-dark via-designoai-blue to-purple-600 bg-clip-text text-transparent">
                Política de Cookies
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Entenda como utilizamos cookies e tecnologias similares para melhorar sua experiência
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
                  <Cookie className="mr-3 text-designoai-blue" />
                  O que são Cookies?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo quando você visita um site. 
                  Eles nos ajudam a melhorar sua experiência, fornecendo funcionalidades personalizadas e analisando como você usa nosso site.
                </p>
                <p>
                  Os cookies podem ser "persistentes" ou "de sessão". Cookies persistentes permanecem no seu dispositivo até expirarem ou serem excluídos. 
                  Cookies de sessão são temporários e são excluídos quando você fecha o navegador.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Settings className="mr-3 text-designoai-blue" />
                  Tipos de Cookies que Utilizamos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-br from-designoai-blue/5 to-purple-50 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Shield className="mr-2 text-designoai-blue" size={20} />
                      <h4 className="font-semibold text-gray-800">Cookies Essenciais</h4>
                    </div>
                    <p className="text-sm">
                      Necessários para o funcionamento básico do site. Incluem autenticação, segurança e navegação.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-designoai-blue/5 to-purple-50 rounded-lg">
                    <div className="flex items-center mb-3">
                      <BarChart3 className="mr-2 text-designoai-blue" size={20} />
                      <h4 className="font-semibold text-gray-800">Cookies de Análise</h4>
                    </div>
                    <p className="text-sm">
                      Nos ajudam a entender como os visitantes interagem com o site, coletando informações anônimas.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-designoai-blue/5 to-purple-50 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Eye className="mr-2 text-designoai-blue" size={20} />
                      <h4 className="font-semibold text-gray-800">Cookies Funcionais</h4>
                    </div>
                    <p className="text-sm">
                      Permitem que o site lembre suas preferências e configurações para uma experiência personalizada.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-gradient-to-br from-designoai-blue/5 to-purple-50 rounded-lg">
                    <div className="flex items-center mb-3">
                      <Target className="mr-2 text-designoai-blue" size={20} />
                      <h4 className="font-semibold text-gray-800">Cookies de Marketing</h4>
                    </div>
                    <p className="text-sm">
                      Usados para exibir anúncios relevantes e medir a eficácia de campanhas publicitárias.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Settings className="mr-3 text-designoai-blue" />
                  Cookies Específicos que Utilizamos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-3 font-semibold text-gray-800">Nome</th>
                        <th className="text-left p-3 font-semibold text-gray-800">Propósito</th>
                        <th className="text-left p-3 font-semibold text-gray-800">Duração</th>
                        <th className="text-left p-3 font-semibold text-gray-800">Tipo</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-mono">session_id</td>
                        <td className="p-3">Autenticação do usuário</td>
                        <td className="p-3">Sessão</td>
                        <td className="p-3">Essencial</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-mono">user_preferences</td>
                        <td className="p-3">Salvar configurações do usuário</td>
                        <td className="p-3">1 ano</td>
                        <td className="p-3">Funcional</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-mono">_ga</td>
                        <td className="p-3">Google Analytics</td>
                        <td className="p-3">2 anos</td>
                        <td className="p-3">Análise</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-mono">marketing_consent</td>
                        <td className="p-3">Consentimento para marketing</td>
                        <td className="p-3">1 ano</td>
                        <td className="p-3">Marketing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="mr-3 text-designoai-blue" />
                  Gerenciamento de Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  Você tem controle total sobre os cookies em nosso site:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Através do nosso site:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Banner de consentimento de cookies</li>
                      <li>Centro de preferências de cookies</li>
                      <li>Configurações da conta</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Através do seu navegador:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Configurações de privacidade</li>
                      <li>Modo de navegação privada</li>
                      <li>Extensões de bloqueio</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Aviso:</strong> Desabilitar alguns cookies pode afetar a funcionalidade do site e sua experiência de usuário.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="mr-3 text-designoai-blue" />
                  Cookies de Terceiros
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 space-y-4">
                <p>
                  Utilizamos alguns serviços de terceiros que podem definir seus próprios cookies:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> Para análise de tráfego e comportamento do usuário</li>
                  <li><strong>Google Ads:</strong> Para campanhas publicitárias e remarketing</li>
                  <li><strong>Facebook Pixel:</strong> Para análise e publicidade nas redes sociais</li>
                  <li><strong>Hotjar:</strong> Para análise de experiência do usuário</li>
                </ul>
                <p>
                  Estes terceiros têm suas próprias políticas de privacidade e cookies, que recomendamos que você revise.
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
              <CardContent className="text-gray-600 text-center space-y-4">
                <p>
                  Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato:
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

export default Cookies;
