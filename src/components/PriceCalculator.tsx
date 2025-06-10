
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Calculator, Plus, ShoppingCart, TestTube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PriceCalculator = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<number>(1);

  const packages = [
    {
      id: 'test',
      name: 'Teste de Pagamento',
      price: 1,
      description: 'Para testar a integração de pagamento',
      isTest: true
    },
    {
      id: 'start',
      name: 'Pacote Start',
      price: 1200,
      description: '12 artes premium personalizadas + IA'
    },
    {
      id: 'plus',
      name: 'Pacote Plus',
      price: 2600,
      description: '18 artes premium personalizadas + IA'
    },
    {
      id: 'fusion',
      name: 'Pacote Fusion',
      price: 4000,
      description: 'Marketing físico + digital + IA completo'
    }
  ];

  const addons = [
    {
      id: 'cards',
      name: 'Impressão de 100 cartões de visita',
      price: 100
    },
    {
      id: 'catalog',
      name: 'Catálogo digital interativo',
      price: 300
    },
    {
      id: 'reels',
      name: 'Vídeos Reels extras (2 unidades)',
      price: 260
    },
    {
      id: 'landing',
      name: 'Landing Page para campanha específica',
      price: 400
    },
    {
      id: 'consulting',
      name: 'Consultoria estratégica mensal',
      price: 250
    },
    {
      id: 'email',
      name: 'Criação de e-mail profissional',
      price: 100
    },
    {
      id: 'gmb',
      name: 'Google Meu Negócio otimizado',
      price: 200
    }
  ];

  const durationOptions = [
    { months: 1, label: '1 mês', discount: 0 },
    { months: 6, label: '6 meses', discount: 5 },
    { months: 12, label: '12 meses', discount: 10 }
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

  const calculateSubtotal = () => {
    const packagePrice = packages.find(p => p.id === selectedPackage)?.price || 0;
    const addonsTotal = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return (packagePrice + addonsTotal) * selectedDuration;
  };

  const getDiscount = () => {
    const duration = durationOptions.find(d => d.months === selectedDuration);
    return duration?.discount || 0;
  };

  const calculateDiscountAmount = () => {
    const subtotal = calculateSubtotal();
    const discountPercentage = getDiscount();
    return (subtotal * discountPercentage) / 100;
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscountAmount();
  };

  const getSelectedPackage = () => {
    return packages.find(p => p.id === selectedPackage);
  };

  const getSelectedAddons = () => {
    return addons.filter(addon => selectedAddons.includes(addon.id));
  };

  const handleCheckout = () => {
    if (!selectedPackage) return;
    
    const orderData = {
      package: getSelectedPackage(),
      addons: getSelectedAddons(),
      duration: selectedDuration,
      subtotal: calculateSubtotal(),
      discount: getDiscount(),
      discountAmount: calculateDiscountAmount(),
      total: calculateTotal()
    };
    
    navigate('/checkout', { state: orderData });
  };

  const handleSolicitarProposta = () => {
    const selectedPkg = getSelectedPackage();
    const selectedAddonsList = getSelectedAddons();
    const total = calculateTotal();
    
    let message = 'Olá! Gostaria de solicitar uma proposta personalizada do DesignoAI.\n\n';
    
    if (selectedPkg) {
      message += `📦 Pacote selecionado: ${selectedPkg.name} - R$ ${selectedPkg.price.toLocaleString()}\n`;
    }
    
    if (selectedDuration > 1) {
      message += `⏰ Duração: ${selectedDuration} meses\n`;
    }
    
    if (selectedAddonsList.length > 0) {
      message += '\n🔧 Serviços adicionais:\n';
      selectedAddonsList.forEach(addon => {
        message += `• ${addon.name} - R$ ${addon.price}\n`;
      });
    }
    
    if (total > 0) {
      message += `\n💰 Total calculado: R$ ${total.toLocaleString()}\n`;
    }
    
    message += '\nGostaria de receber uma proposta detalhada!';
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511947968158?text=${encodedMessage}`, '_blank');
  };

  const handleFalarConsultor = () => {
    const message = 'Olá! Gostaria de falar com um consultor sobre os serviços do DesignoAI. Preciso de mais informações para escolher o melhor pacote para minha empresa.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5511947968158?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-designoai-blue mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark">
              Calculadora de Preços
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Selecione um pacote base, duração e adicione serviços extras conforme sua necessidade
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Seleção de Pacotes e Adicionais */}
          <div className="space-y-6">
            {/* Pacotes Base */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-designoai-blue-dark">
                  Pacotes Base
                </CardTitle>
                <CardDescription>
                  Escolha um dos nossos pacotes principais ou teste o pagamento
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
                      } ${pkg.isTest ? 'bg-yellow-50 border-yellow-300' : ''}`}
                      onClick={() => togglePackage(pkg.id)}
                    >
                      <div className="flex items-center justify-between">
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
                          {pkg.isTest && <TestTube className="w-4 h-4 mr-2 text-yellow-600" />}
                          <div>
                            <h3 className={`font-medium ${pkg.isTest ? 'text-yellow-800' : 'text-gray-800'}`}>
                              {pkg.name}
                            </h3>
                            <p className={`text-sm ${pkg.isTest ? 'text-yellow-600' : 'text-gray-600'}`}>
                              {pkg.description}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-lg font-bold ${pkg.isTest ? 'text-yellow-600' : 'text-designoai-blue'}`}>
                            R$ {pkg.price.toLocaleString()}{pkg.isTest ? '' : '/mês'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Duração - Só mostrar se não for teste */}
            {selectedPackage && !getSelectedPackage()?.isTest && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-designoai-blue-dark">
                    Duração do Contrato
                  </CardTitle>
                  <CardDescription>
                    Escolha a duração e economize com contratos mais longos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {durationOptions.map(option => (
                      <div
                        key={option.months}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedDuration === option.months
                            ? 'border-designoai-blue bg-designoai-blue-light'
                            : 'border-gray-200 hover:border-designoai-blue-light'
                        }`}
                        onClick={() => setSelectedDuration(option.months)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                              selectedDuration === option.months
                                ? 'border-designoai-blue bg-designoai-blue'
                                : 'border-gray-300'
                            }`}>
                              {selectedDuration === option.months && (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-800">{option.label}</h3>
                              {option.discount > 0 && (
                                <p className="text-sm text-green-600 font-medium">
                                  {option.discount}% de desconto
                                </p>
                              )}
                            </div>
                          </div>
                          {option.discount > 0 && (
                            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                              -{option.discount}%
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Serviços Adicionais - Só mostrar se não for teste */}
            {selectedPackage && !getSelectedPackage()?.isTest && (
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
                        <div className="flex items-center justify-between">
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
                          <div className="text-right">
                            <span className="text-lg font-bold text-designoai-blue">
                              +R$ {addon.price}/mês
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Resumo do Pedido */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-designoai-blue-dark">
                  Resumo do Pedido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {getSelectedPackage() ? (
                    <>
                      <div className="flex justify-between items-center pb-4 border-b">
                        <div className="flex items-center">
                          {getSelectedPackage()?.isTest && <TestTube className="w-4 h-4 mr-2 text-yellow-600" />}
                          <span className="font-medium text-gray-800">{getSelectedPackage()?.name}</span>
                        </div>
                        <span className={`text-xl font-bold ${getSelectedPackage()?.isTest ? 'text-yellow-600' : 'text-designoai-blue'}`}>
                          R$ {getSelectedPackage()?.price.toLocaleString()}{getSelectedPackage()?.isTest ? '' : '/mês'}
                        </span>
                      </div>
                      
                      {!getSelectedPackage()?.isTest && (
                        <div className="flex justify-between items-center pb-4 border-b">
                          <span className="font-medium text-gray-800">Duração</span>
                          <span className="text-lg text-gray-600">
                            {selectedDuration} {selectedDuration === 1 ? 'mês' : 'meses'}
                          </span>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>Selecione um pacote base para começar</p>
                    </div>
                  )}
                  
                  {!getSelectedPackage()?.isTest && getSelectedAddons().length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3">Serviços Adicionais:</h4>
                      <div className="space-y-2">
                        {getSelectedAddons().map(addon => (
                          <div key={addon.id} className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{addon.name}</span>
                            <span className="font-medium text-designoai-blue">+R$ {addon.price}/mês</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {(getSelectedPackage() || getSelectedAddons().length > 0) && (
                    <div className="pt-4 border-t space-y-2">
                      {!getSelectedPackage()?.isTest && (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-medium text-gray-800">Subtotal ({selectedDuration} {selectedDuration === 1 ? 'mês' : 'meses'}):</span>
                            <span className="text-xl font-bold text-gray-800">
                              R$ {calculateSubtotal().toLocaleString()}
                            </span>
                          </div>
                          
                          {getDiscount() > 0 && (
                            <div className="flex justify-between items-center">
                              <span className="text-lg font-medium text-green-600">Desconto ({getDiscount()}%):</span>
                              <span className="text-xl font-bold text-green-600">
                                -R$ {calculateDiscountAmount().toLocaleString()}
                              </span>
                            </div>
                          )}
                        </>
                      )}
                      
                      <div className="flex justify-between items-center pt-2 border-t">
                        <span className="text-xl font-bold text-gray-800">Total Final:</span>
                        <span className={`text-3xl font-bold ${getSelectedPackage()?.isTest ? 'text-yellow-600' : 'text-designoai-blue'}`}>
                          R$ {calculateTotal().toLocaleString()}
                        </span>
                      </div>
                      
                      {!getSelectedPackage()?.isTest && getDiscount() > 0 && (
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm text-green-700 font-medium">
                            💰 Você está economizando R$ {calculateDiscountAmount().toLocaleString()} com este plano!
                          </p>
                        </div>
                      )}

                      {getSelectedPackage()?.isTest && (
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="text-sm text-yellow-700 font-medium">
                            🧪 Esta é uma compra de teste para validar a integração de pagamento
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {calculateTotal() > 0 && (
              <>
                <Card className={getSelectedPackage()?.isTest ? "bg-yellow-100 text-yellow-800" : "bg-designoai-blue text-white"}>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-2">
                        {getSelectedPackage()?.isTest ? 'Teste de Pagamento' : 'Finalizar Compra'}
                      </h3>
                      <p className="mb-4">
                        {getSelectedPackage()?.isTest 
                          ? 'Teste a integração com valor simbólico' 
                          : 'Pagamento seguro via PagBank com PIX, cartão ou boleto'
                        }
                      </p>
                      <div className="space-y-3">
                        <Button 
                          className={getSelectedPackage()?.isTest 
                            ? "w-full bg-yellow-600 text-white hover:bg-yellow-700" 
                            : "w-full bg-white text-designoai-blue hover:bg-gray-100"
                          }
                          onClick={handleCheckout}
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          {getSelectedPackage()?.isTest 
                            ? `Testar Pagamento - R$ ${calculateTotal().toLocaleString()}`
                            : `Pagar Agora - R$ ${calculateTotal().toLocaleString()}`
                          }
                        </Button>
                        {!getSelectedPackage()?.isTest && (
                          <Button 
                            variant="outline" 
                            className="w-full border-white text-slate-50 font-normal bg-slate-700 hover:bg-slate-600"
                            onClick={handleSolicitarProposta}
                          >
                            Solicitar Proposta via WhatsApp
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {!getSelectedPackage()?.isTest && (
                  <Card className="bg-designoai-blue-light">
                    <CardContent className="pt-6">
                      <div className="flex items-start">
                        <Plus className="w-5 h-5 text-designoai-blue mr-3 mt-1" />
                        <div>
                          <h3 className="font-semibold text-designoai-blue-dark mb-2">
                            {getSelectedPackage()?.id === 'fusion' ? 'Incluso no Pacote Fusion:' : 'Incluso no Pacote:'}
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
                            ) : null}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
