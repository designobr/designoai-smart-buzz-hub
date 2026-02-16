
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, ClipboardList, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PriceCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const packages = [
    { id: 'start', name: 'Pacote Start', description: '12 artes premium personalizadas + IA' },
    { id: 'plus', name: 'Pacote Plus', description: '18 artes premium personalizadas + IA' },
    { id: 'fusion', name: 'Pacote Fusion', description: 'Marketing físico + digital + IA completo' },
    { id: 'studio', name: 'DesignoAI Studio', description: 'Fotos profissionais geradas por IA' },
  ];

  const addons = [
    { id: 'cards', name: 'Impressão de cartões de visita' },
    { id: 'catalog', name: 'Catálogo digital interativo' },
    { id: 'reels', name: 'Vídeos Reels extras' },
    { id: 'landing', name: 'Landing Page para campanha' },
    { id: 'consulting', name: 'Consultoria estratégica mensal' },
    { id: 'email', name: 'Criação de e-mail profissional' },
    { id: 'gmb', name: 'Google Meu Negócio otimizado' },
  ];

  const togglePackage = (id: string) => setSelectedPackage(id === selectedPackage ? '' : id);
  const toggleAddon = (id: string) => setSelectedAddons((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  const totalSelected = (selectedPackage ? 1 : 0) + selectedAddons.length;
  const hasSelection = () => selectedPackage !== '' || selectedAddons.length > 0;

  const handleSolicitarOrcamento = () => {
    const pkg = packages.find((p) => p.id === selectedPackage);
    const addonList = addons.filter((a) => selectedAddons.includes(a.id));
    let message = 'Olá! Gostaria de solicitar um orçamento para:\n\n';
    if (pkg) message += `📦 Pacote: ${pkg.name}\n`;
    if (addonList.length > 0) {
      message += '\n🔧 Adicionais:\n';
      addonList.forEach((a) => { message += `• ${a.name}\n`; });
    }
    message += '\nAguardo o orçamento personalizado!';
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFalarConsultor = () => {
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent('Olá! Gostaria de falar com um consultor sobre os serviços do DesignoAI.')}`, '_blank');
  };

  const SelectableItem = ({ selected, onClick, title, subtitle }: { selected: boolean; onClick: () => void; title: string; subtitle?: string }) => (
    <motion.div
      layout
      className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
        selected ? 'border-primary/50 bg-primary/5' : 'border-border hover:border-primary/20 bg-surface'
      }`}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center">
        <motion.div
          className={`w-5 h-5 rounded-md border-2 mr-3 flex items-center justify-center transition-colors ${
            selected ? 'border-primary bg-primary' : 'border-muted-foreground/30'
          }`}
          animate={selected ? { scale: [1, 1.2, 1] } : {}}
          transition={{ type: 'spring', stiffness: 500, damping: 15 }}
        >
          {selected && <Check className="w-3 h-3 text-primary-foreground" />}
        </motion.div>
        <div>
          <h3 className="font-medium text-foreground text-sm">{title}</h3>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="calculator" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <ClipboardList className="w-6 h-6 text-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Seletor de <span className="text-gradient">Serviços</span>
            </h2>
          </div>
          <p className="text-muted-foreground">Selecione os serviços e solicite um orçamento personalizado</p>
        </motion.div>

        {/* Progress bar */}
        {totalSelected > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto mb-6"
          >
            <div className="glass rounded-full px-4 py-2 flex items-center gap-3">
              <span className="text-xs text-muted-foreground">{totalSelected} serviço{totalSelected > 1 ? 's' : ''} selecionado{totalSelected > 1 ? 's' : ''}</span>
              <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-[hsl(270,70%,60%)] rounded-full"
                  animate={{ width: `${Math.min((totalSelected / 5) * 100, 100)}%` }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              </div>
            </div>
          </motion.div>
        )}

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-1">Pacotes Disponíveis</h3>
              <p className="text-xs text-muted-foreground mb-4">Escolha um dos nossos pacotes</p>
              <div className="space-y-3">
                {packages.map((pkg) => (
                  <SelectableItem key={pkg.id} selected={selectedPackage === pkg.id} onClick={() => togglePackage(pkg.id)} title={pkg.name} subtitle={pkg.description} />
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-1">Serviços Adicionais</h3>
              <p className="text-xs text-muted-foreground mb-4">Selecione extras</p>
              <div className="space-y-3">
                {addons.map((addon) => (
                  <SelectableItem key={addon.id} selected={selectedAddons.includes(addon.id)} onClick={() => toggleAddon(addon.id)} title={addon.name} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Serviços Selecionados</h3>
              {hasSelection() ? (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {selectedPackage && (
                      <motion.div
                        key={selectedPackage}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="flex items-center pb-4 border-b border-border"
                      >
                        <Check className="w-4 h-4 text-primary mr-3" />
                        <div>
                          <span className="font-medium text-foreground text-sm">{packages.find((p) => p.id === selectedPackage)?.name}</span>
                          <p className="text-xs text-muted-foreground">{packages.find((p) => p.id === selectedPackage)?.description}</p>
                        </div>
                      </motion.div>
                    )}
                    {selectedAddons.length > 0 && (
                      <motion.div layout>
                        <h4 className="text-xs font-medium text-foreground mb-2 uppercase tracking-wider">Adicionais:</h4>
                        <AnimatePresence>
                          {addons.filter((a) => selectedAddons.includes(a.id)).map((a) => (
                            <motion.div
                              key={a.id}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex items-center text-sm py-1"
                            >
                              <Check className="w-3 h-3 text-primary mr-2" />
                              <span className="text-muted-foreground text-xs">{a.name}</span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="pt-4 border-t border-border">
                    <div className="bg-primary/5 border border-primary/10 p-4 rounded-xl text-center">
                      <p className="text-foreground font-medium text-sm">Orçamento sob consulta</p>
                      <p className="text-xs text-muted-foreground mt-1">Solicite via WhatsApp</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground text-sm">
                  Selecione um pacote ou serviço
                </div>
              )}
            </div>

            <AnimatePresence>
              {hasSelection() && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="glass rounded-2xl p-6 border-primary/20"
                >
                  <div className="text-center">
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2">Solicitar Orçamento</h3>
                    <p className="text-xs text-muted-foreground mb-4">Entre em contato via WhatsApp</p>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-sm" onClick={handleSolicitarOrcamento}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Solicitar via WhatsApp ({totalSelected})
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-3">Precisa de ajuda?</p>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground" onClick={handleFalarConsultor}>
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar com Consultor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
