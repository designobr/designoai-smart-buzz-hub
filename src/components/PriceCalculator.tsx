import { useState } from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';

const packages = [
  { id: 'start', name: 'Pacote Start', description: '12 artes premium personalizadas' },
  { id: 'plus', name: 'Pacote Plus', description: '18 artes premium personalizadas' },
  { id: 'fusion', name: 'Pacote Fusion', description: 'Digital, físico e automação' },
  { id: 'studio', name: 'DesignoAI Studio', description: 'Produção fotográfica assistida por IA' },
];

const addons = [
  { id: 'cards', name: 'Impressão de cartões de visita' },
  { id: 'catalog', name: 'Catálogo digital interativo' },
  { id: 'reels', name: 'Vídeos Reels extras' },
  { id: 'landing', name: 'Landing page de campanha' },
  { id: 'consulting', name: 'Consultoria estratégica mensal' },
  { id: 'email', name: 'Criação de e-mail profissional' },
  { id: 'gmb', name: 'Google Meu Negócio otimizado' },
];

const SelectRow = ({
  selected,
  onClick,
  title,
  subtitle,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  subtitle?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={selected}
    className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-[220ms] ${
      selected ? 'border-foreground/30 bg-secondary' : 'border-border bg-background hover:border-foreground/20'
    }`}
  >
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-[220ms] ${
        selected ? 'border-foreground bg-foreground' : 'border-border'
      }`}
    >
      {selected && <Check className="h-3 w-3 text-background" strokeWidth={2.5} />}
    </span>
    <span>
      <span className="block text-sm font-semibold text-foreground">{title}</span>
      {subtitle && <span className="mt-0.5 block text-sm text-muted-foreground">{subtitle}</span>}
    </span>
  </button>
);

const PriceCalculator = () => {
  const [selectedPackage, setSelectedPackage] = useState('');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const togglePackage = (id: string) => setSelectedPackage(id === selectedPackage ? '' : id);
  const toggleAddon = (id: string) =>
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const totalSelected = (selectedPackage ? 1 : 0) + selectedAddons.length;
  const hasSelection = totalSelected > 0;

  const requestQuote = () => {
    const pkg = packages.find((p) => p.id === selectedPackage);
    const addonList = addons.filter((a) => selectedAddons.includes(a.id));
    let message = 'Olá! Gostaria de solicitar um orçamento para:\n\n';
    if (pkg) message += `Pacote: ${pkg.name}\n`;
    if (addonList.length > 0) {
      message += '\nAdicionais:\n';
      addonList.forEach((a) => {
        message += `- ${a.name}\n`;
      });
    }
    message += '\nAguardo o orçamento personalizado.';
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(message)}`, '_blank');
  };

  const talkToConsultant = () =>
    window.open(
      `https://wa.me/5511947968158?text=${encodeURIComponent(
        'Olá! Gostaria de falar com um consultor sobre os serviços da DesignoAI.'
      )}`,
      '_blank'
    );

  return (
    <section id="calculator" className="section border-t border-border">
      <div className="container-editorial">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">Seletor de serviços</p>
              <h2 className="display-2 mt-6 text-foreground">Monte seu escopo em um minuto.</h2>
            </div>
            <p className="text-base text-muted-foreground lg:col-span-5">
              Selecione um pacote e os adicionais desejados. Enviamos a proposta com valores fechados.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <Reveal>
              <div className="card-surface p-10">
                <h3 className="text-lg font-bold tracking-[-0.03em] text-foreground">Pacotes</h3>
                <div className="mt-6 space-y-3">
                  {packages.map((p) => (
                    <SelectRow
                      key={p.id}
                      selected={selectedPackage === p.id}
                      onClick={() => togglePackage(p.id)}
                      title={p.name}
                      subtitle={p.description}
                    />
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="card-surface p-10">
                <h3 className="text-lg font-bold tracking-[-0.03em] text-foreground">Adicionais</h3>
                <div className="mt-6 space-y-3">
                  {addons.map((a) => (
                    <SelectRow
                      key={a.id}
                      selected={selectedAddons.includes(a.id)}
                      onClick={() => toggleAddon(a.id)}
                      title={a.name}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="card-surface p-10 lg:sticky lg:top-28">
              <h3 className="text-lg font-bold tracking-[-0.03em] text-foreground">Resumo</h3>

              {hasSelection ? (
                <div className="mt-6 space-y-6">
                  {selectedPackage && (
                    <div className="border-b border-border pb-6">
                      <p className="eyebrow">Pacote</p>
                      <p className="mt-3 text-sm font-semibold text-foreground">
                        {packages.find((p) => p.id === selectedPackage)?.name}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {packages.find((p) => p.id === selectedPackage)?.description}
                      </p>
                    </div>
                  )}

                  {selectedAddons.length > 0 && (
                    <div className="border-b border-border pb-6">
                      <p className="eyebrow">Adicionais</p>
                      <ul className="mt-3 space-y-2">
                        {addons
                          .filter((a) => selectedAddons.includes(a.id))
                          .map((a) => (
                            <li key={a.id} className="text-sm text-muted-foreground">
                              {a.name}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground">
                    {totalSelected} item{totalSelected > 1 ? 's' : ''} selecionado
                    {totalSelected > 1 ? 's' : ''} · orçamento sob consulta
                  </p>

                  <ActionButton className="w-full" onClick={requestQuote}>
                    Solicitar orçamento
                  </ActionButton>
                </div>
              ) : (
                <p className="mt-6 text-sm text-muted-foreground">
                  Nenhum item selecionado ainda. Escolha um pacote para começar.
                </p>
              )}

              <div className="mt-10 border-t border-border pt-8">
                <p className="text-sm text-muted-foreground">Prefere conversar antes?</p>
                <button
                  type="button"
                  onClick={talkToConsultant}
                  className="link-underline mt-3 text-sm font-semibold"
                >
                  Falar com um consultor
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;
