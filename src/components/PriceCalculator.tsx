import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ClipboardList, MessageCircle } from 'lucide-react';

const PriceCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const packages = [
    {
      id: 'start',
      name: 'Pacote Start',
      description: '12 artes premium personalizadas + IA'
    },
    {
      id: 'plus',
      name: 'Pacote Plus',
      description: '18 artes premium personalizadas + IA'
    },
    {
      id: 'fusion',
      name: 'Pacote Fusion',
      description: 'Marketing físico + digital + IA completo'
    },
    {
      id: 'studio',
      name: 'DesignoAI Studio',
      description: 'Fotos profissionais geradas por IA para sua marca pessoal'
    }
  ];

  const addons = [
    {
      id: 'cards',
      name: 'Impressão de cartões de visita'
    },
    {
      id: 'catalog',
      name: 'Catálogo digital interativo'
    },
    {
      id: 'reels',
      name: 'Vídeos Reels extras'
    },
    {
      id: 'landing',
      name: 'Landing Page para campanha específica'
    },
    {
      id: 'consulting',
      name: 'Consultoria estratégica mensal'
    },
    {
      id: 'email',
      name: 'Criação de e-mail profissional'
    },
    {
      id: 'gmb',
      name: 'Google Meu Negócio otimizado'
    }
  ];

  const togglePackage = (packageId: string) => {
    setSelectedPackage(packageId === selectedPackage ? '' : packageId);
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId) 
        : [...prev, addonId]
    );
  };

  const getSelectedPackage = () => {
    return packages.find(p => p.id === selectedPackage);
  };

  const getSelectedAddons = () => {
    return addons.filter(addon => selectedAddons.includes(addon.id));
  };

  const hasSelection = () => {
    return selectedPackage !== '' || selectedAddons.length > 0;
  };

  const handleSolicitarOrcamento = () => {
    const selectedPkg = getSelectedPackage();
    const selectedAddonsList = getSelectedAddons();
    
    let message = 'Olá! Gostaria de solicitar um orçamento para os seguintes serviços do DesignoAI:\n\n';
    
    if (selectedPkg) {
      message += `📦 Pacote: ${selectedPkg.name}\n`;
    }
    
    if (selectedAddonsList.length > 0) {
      message += '\n🔧 Serviços adicionais:\n';
      selectedAddonsList.forEach(addon => {
        message += `• ${addon.name}\n`;
      });
    }
    
    message += '\nAguardo o orçamento personalizado!';
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511965262002?text=${encodedMessage}`, '_blank');
  };

  const handleFalarConsultor = () => {
    const message = 'Olá! Gostaria de falar com um consultor sobre os serviços do DesignoAI. Preciso de mais informações para escolher o melhor pacote para minha empresa.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511965262002?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-4">
            <ClipboardList className="w-8 h-8 text-designoai-blue mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark">
              Seletor de Serviços
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Selecione os serviços que você precisa e solicite um orçamento personalizado
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Seleção de Pacotes e Adicionais */}
          <div className="space-y-6">
            {/* Pacotes Base */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-designoai-blue-dark">
                  Pacotes Disponíveis
                </CardTitle>
                <CardDescription>
                  Escolha um dos nossos pacotes principais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {packages.map(pkg => (
                    <div
                      key={pkg.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-designoai-blue bg-designoai-blue-light'
                          : 'border-gray-200 hover:border-designoai-blue-light'
                      }`}
                      onClick={() => togglePackage(pkg.id)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                          selectedPackage === pkg.id
                            ? 'border-designoai-blue bg-designoai-blue'
                            : 'border-gray-300'
                        }`}>
                          {selectedPackage === pkg.id && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">
                            {pkg.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {pkg.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Serviços Adicionais */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-designoai-blue-dark">
                  Serviços Adicionais
                </CardTitle>
                <CardDescription>
                  Selecione os serviços extras que deseja incluir
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {addons.map(addon => (
                    <div
                      key={addon.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedAddons.includes(addon.id)
                          ? 'border-designoai-blue bg-designoai-blue-light'
                          : 'border-gray-200 hover:border-designoai-blue-light'
                      }`}
                      onClick={() => toggleAddon(addon.id)}
                    >
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${
                          selectedAddons.includes(addon.id)
                            ? 'border-designoai-blue bg-designoai-blue'
                            : 'border-gray-300'
                        }`}>
                          {selectedAddons.includes(addon.id) && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{addon.name}</h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Resumo da Seleção */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-designoai-blue-dark">
                  Serviços Selecionados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hasSelection() ? (
                    <>
                      {getSelectedPackage() && (
                        <div className="flex items-center pb-4 border-b">
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                          <div>
                            <span className="font-medium text-gray-800">{getSelectedPackage()?.name}</span>
                            <p className="text-sm text-gray-600">{getSelectedPackage()?.description}</p>
                          </div>
                        </div>
                      )}
                      
                      {getSelectedAddons().length > 0 && (
                        <div>
                          <h4 className="font-medium text-gray-800 mb-3">Serviços Adicionais:</h4>
                          <div className="space-y-2">
                            {getSelectedAddons().map(addon => (
                              <div key={addon.id} className="flex items-center text-sm">
                                <Check className="w-4 h-4 text-green-500 mr-2" />
                                <span className="text-gray-600">{addon.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="pt-4 border-t">
                        <div className="bg-designoai-blue-light p-4 rounded-lg text-center">
                          <p className="text-designoai-blue-dark font-medium">
                            Orçamento sob consulta
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            Solicite seu orçamento personalizado via WhatsApp
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>Selecione um pacote ou serviço para começar</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {hasSelection() && (
              <Card className="bg-designoai-blue text-white">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">
                      Solicitar Orçamento
                    </h3>
                    <p className="mb-4">
                      Entre em contato via WhatsApp para receber seu orçamento personalizado
                    </p>
                    <Button 
                      className="w-full bg-white text-designoai-blue hover:bg-gray-100"
                      onClick={handleSolicitarOrcamento}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Solicitar Orçamento via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Card de descrição do pacote selecionado */}
            {getSelectedPackage() && (
              <Card className="bg-designoai-blue-light">
                <CardContent className="pt-6">
                  <div>
                    <h3 className="font-semibold text-designoai-blue-dark mb-2">
                      O que está incluso no {getSelectedPackage()?.name}:
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {getSelectedPackage()?.id === 'fusion' ? (
                        <>
                          <li>• 12 posts mensais + stories diários</li>
                          <li>• Site responsivo + identidade visual</li>
                          <li>• Tráfego pago + relatórios IA</li>
                          <li>• Sessão de fotos + vídeo institucional</li>
                          <li>• Assistente WhatsApp com IA</li>
                        </>
                      ) : getSelectedPackage()?.id === 'plus' ? (
                        <>
                          <li>• 18 artes premium personalizadas</li>
                          <li>• Suporte de IA no processo criativo</li>
                          <li>• Sugestão de temas com base em tendências</li>
                          <li>• Até 2 rodadas de revisão por arte</li>
                          <li>• Atendimento via WhatsApp</li>
                        </>
                      ) : getSelectedPackage()?.id === 'start' ? (
                        <>
                          <li>• 12 artes premium personalizadas</li>
                          <li>• Suporte de IA na criação visual</li>
                          <li>• Sugestão de temas com base em tendências</li>
                          <li>• Até 2 rodadas de revisão por arte</li>
                          <li>• Atendimento via WhatsApp</li>
                        </>
                      ) : getSelectedPackage()?.id === 'studio' ? (
                        <>
                          <li>• Fotos profissionais geradas por IA</li>
                          <li>• Ideal para marca pessoal e profissionais liberais</li>
                          <li>• Ambientes corporativos ou personalizados</li>
                          <li>• Alta qualidade e realismo</li>
                          <li>• Entrega rápida e digital</li>
                        </>
                      ) : null}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* CTA para falar com consultor */}
            <div className="text-center">
              <p className="text-gray-600 mb-3">Precisa de ajuda para escolher?</p>
              <Button 
                variant="outline" 
                className="border-designoai-blue text-designoai-blue hover:bg-designoai-blue-light"
                onClick={handleFalarConsultor}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar com um Consultor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
