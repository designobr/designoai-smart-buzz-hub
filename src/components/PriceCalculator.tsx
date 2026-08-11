import { useState } from 'react';
import { Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ActionButton from '@/components/ActionButton';
import { useI18n } from '@/i18n/I18nProvider';

type PackageItem = { id: string; name: string; description: string };
type AddonItem = { id: string; name: string };

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
  const { t, tList } = useI18n();
  const packages = tList<PackageItem>('home.calculator.packages');
  const addons = tList<AddonItem>('home.calculator.addons');

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
    let message = `${t('home.calculator.waIntro')}\n\n`;
    if (pkg) message += `${t('home.calculator.waPackageLabel')}: ${pkg.name}\n`;
    if (addonList.length > 0) {
      message += `\n${t('home.calculator.waAddonsLabel')}:\n`;
      addonList.forEach((a) => {
        message += `- ${a.name}\n`;
      });
    }
    message += `\n${t('home.calculator.waClosing')}`;
    window.open(`https://wa.me/5511947968158?text=${encodeURIComponent(message)}`, '_blank');
  };

  const talkToConsultant = () =>
    window.open(
      `https://wa.me/5511947968158?text=${encodeURIComponent(t('home.calculator.waConsultant'))}`,
      '_blank'
    );

  return (
    <section id="calculator" className="section border-t border-border">
      <div className="container-editorial">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow">{t('home.calculator.eyebrow')}</p>
              <h2 className="display-2 mt-6 text-foreground">{t('home.calculator.title')}</h2>
            </div>
            <p className="text-base text-muted-foreground lg:col-span-5">{t('home.calculator.description')}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-7">
            <Reveal>
              <div className="card-surface p-10">
                <h3 className="text-lg font-bold tracking-[-0.03em] text-foreground">
                  {t('home.calculator.packagesTitle')}
                </h3>
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
                <h3 className="text-lg font-bold tracking-[-0.03em] text-foreground">
                  {t('home.calculator.addonsTitle')}
                </h3>
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
              <h3 className="text-lg font-bold tracking-[-0.03em] text-foreground">
                {t('home.calculator.summaryTitle')}
              </h3>

              {hasSelection ? (
                <div className="mt-6 space-y-6">
                  {selectedPackage && (
                    <div className="border-b border-border pb-6">
                      <p className="eyebrow">{t('home.calculator.packageLabel')}</p>
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
                      <p className="eyebrow">{t('home.calculator.addonsLabel')}</p>
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
                    {t(
                      totalSelected > 1
                        ? 'home.calculator.itemsSelectedPlural'
                        : 'home.calculator.itemsSelectedSingular',
                      { count: totalSelected }
                    )}
                  </p>

                  <ActionButton className="w-full" onClick={requestQuote}>
                    {t('home.calculator.quoteCta')}
                  </ActionButton>
                </div>
              ) : (
                <p className="mt-6 text-sm text-muted-foreground">{t('home.calculator.noSelection')}</p>
              )}

              <div className="mt-10 border-t border-border pt-8">
                <p className="text-sm text-muted-foreground">{t('home.calculator.talkPrompt')}</p>
                <button
                  type="button"
                  onClick={talkToConsultant}
                  className="link-underline mt-3 text-sm font-semibold"
                >
                  {t('home.calculator.talkCta')}
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
