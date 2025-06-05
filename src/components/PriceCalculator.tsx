import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Calculator, Plus } from 'lucide-react';
const PriceCalculator = () => {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const basePrice = 4000;
  const addons = [{
    id: 'cards',
    name: 'Impressão de 100 cartões de visita',
    price: 100
  }, {
    id: 'catalog',
    name: 'Catálogo digital interativo',
    price: 300
  }, {
    id: 'reels',
    name: 'Vídeos Reels extras (2 unidades)',
    price: 260
  }, {
    id: 'landing',
    name: 'Landing Page para campanha específica',
    price: 400
  }, {
    id: 'consulting',
    name: 'Consultoria estratégica mensal',
    price: 250
  }, {
    id: 'email',
    name: 'Criação de e-mail profissional',
    price: 100
  }, {
    id: 'gmb',
    name: 'Google Meu Negócio otimizado',
    price: 200
  }];
  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]);
  };
  const calculateTotal = () => {
    const addonsTotal = selectedAddons.reduce((total, addonId) => {
      const addon = addons.find(a => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);
    return basePrice + addonsTotal;
  };
  const getSelectedAddons = () => {
    return addons.filter(addon => selectedAddons.includes(addon.id));
  };
  return <section id="calculator" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calculator className="w-8 h-8 text-designoai-blue mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-designoai-blue-dark">
              Calculadora de Preços
            </h2>
          </div>
          <p className="text-xl text-gray-600">
            Personalize seu pacote adicionando serviços extras conforme sua necessidade
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Seleção de Adicionais */}
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
                {addons.map(addon => <div key={addon.id} className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${selectedAddons.includes(addon.id) ? 'border-designoai-blue bg-designoai-blue-light' : 'border-gray-200 hover:border-designoai-blue-light'}`} onClick={() => toggleAddon(addon.id)}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center ${selectedAddons.includes(addon.id) ? 'border-designoai-blue bg-designoai-blue' : 'border-gray-300'}`}>
                          {selectedAddons.includes(addon.id) && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{addon.name}</h3>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-designoai-blue">
                          +R$ {addon.price}
                        </span>
                      </div>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Resumo do Pedido */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-designoai-blue-dark">
                  Resumo do Pacote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="font-medium text-gray-800">Pacote Base DesignoAI Fusion</span>
                    <span className="text-xl font-bold text-designoai-blue">R$ {basePrice.toLocaleString()}</span>
                  </div>
                  
                  {getSelectedAddons().length > 0 && <div>
                      <h4 className="font-medium text-gray-800 mb-3">Serviços Adicionais:</h4>
                      <div className="space-y-2">
                        {getSelectedAddons().map(addon => <div key={addon.id} className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">{addon.name}</span>
                            <span className="font-medium text-designoai-blue">+R$ {addon.price}</span>
                          </div>)}
                      </div>
                    </div>}
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-800">Total Mensal:</span>
                      <span className="text-3xl font-bold text-designoai-blue">
                        R$ {calculateTotal().toLocaleString()}
                      </span>
                    </div>
                    
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-designoai-blue text-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Economia Anual</h3>
                  <p className="mb-4">
                    Contratando anualmente, você economiza até R$ 2.400
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-white text-designoai-blue hover:bg-gray-100">
                      Solicitar Proposta Personalizada
                    </Button>
                    <Button variant="outline" className="w-full border-white text-slate-50 font-normal bg-slate-700 hover:bg-slate-600">
                      Falar com Consultor
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-designoai-blue-light">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <Plus className="w-5 h-5 text-designoai-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-designoai-blue-dark mb-2">
                      Incluso no Pacote Base:
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 12 posts mensais + stories diários</li>
                      <li>• Site responsivo + identidade visual</li>
                      <li>• Tráfego pago + relatórios IA</li>
                      <li>• Sessão de fotos + vídeo institucional</li>
                      <li>• Assistente WhatsApp com IA</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default PriceCalculator;