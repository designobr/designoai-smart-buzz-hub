import { Minus, Plus } from 'lucide-react';

/** Seletor de quantidade com botões de menos e mais (acessível: rótulos e valor anunciado). */
export function Stepper({ label, value, onChange, max, disabled = false }: { label: string; value: number; onChange: (n: number) => void; max: number; disabled?: boolean }) {
  return (
    <div className="inline-flex shrink-0 items-center gap-2" role="group" aria-label={label}>
      <button type="button" aria-label={`Diminuir: ${label}`} disabled={disabled || value <= 0} onClick={() => onChange(value - 1)}
        className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background transition-colors hover:border-foreground/30 disabled:opacity-40"><Minus className="h-4 w-4" /></button>
      <span className="w-8 text-center text-lg font-semibold tabular-nums" aria-live="polite" data-testid={`q-${label}`}>{value}</span>
      <button type="button" aria-label={`Aumentar: ${label}`} disabled={disabled || value >= max} onClick={() => onChange(value + 1)}
        className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background transition-colors hover:border-foreground/30 disabled:opacity-40"><Plus className="h-4 w-4" /></button>
    </div>
  );
}
