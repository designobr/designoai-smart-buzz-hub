// Montagem dos adicionais da assinatura (clientes e pacotes de publicações). Preços e máximos vêm do catálogo do motor; o valor cobrado é sempre
// recalculado no servidor. Aqui só se mostra a prévia de clientes, publicações e valor mensal.
import { Stepper } from './Stepper';
import { reais, type AdicionalVenda, type Adicionais } from './motor';

export function totalAdicionais(catalogo: AdicionalVenda[], v: Adicionais) {
  let centavos = 0; let clientes = 0; let publicacoes = 0;
  for (const a of catalogo) {
    const q = v[a.codigo] ?? 0;
    centavos += q * a.precoCentavos;
    if (a.tipo === 'cliente') clientes += q * a.quantidade; else publicacoes += q * a.quantidade;
  }
  return { centavos, clientes, publicacoes };
}

export function AdicionaisEditor({ catalogo, valor, onChange, base, disabled = false }: {
  catalogo: AdicionalVenda[]; valor: Adicionais; onChange: (v: Adicionais) => void; disabled?: boolean;
  /** Plano base sem adicionais: preço, clientes e publicações por mês. */
  base: { centavos: number; clientes: number; publicacoes: number };
}) {
  const t = totalAdicionais(catalogo, valor);
  const set = (codigo: string, q: number) => onChange({ ...valor, [codigo]: q });
  return (
    <div className="grid gap-6 md:grid-cols-5">
      <div className="space-y-4 md:col-span-3">
        {catalogo.map((a) => (
          <div key={a.codigo} className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium">{a.nome}</p>
              <p className="text-xs text-muted-foreground">{reais(a.precoCentavos)}/mês{a.tipo === 'cliente' ? ' por cliente' : ''}</p>
            </div>
            <Stepper label={a.nome} value={valor[a.codigo] ?? 0} max={a.maximo} disabled={disabled} onChange={(q) => set(a.codigo, q)} />
          </div>
        ))}
        <p className="text-xs text-muted-foreground">Os pacotes de publicações acumulam. Um conteúdo publicado em várias redes conta como 1 publicação.</p>
      </div>
      <div className="rounded-2xl bg-secondary p-5 text-sm md:col-span-2" aria-live="polite">
        <dl className="space-y-2">
          <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Clientes</dt><dd className="font-semibold tabular-nums" data-testid="prev-clientes">{base.clientes + t.clientes}</dd></div>
          <div className="flex justify-between gap-3"><dt className="text-muted-foreground">Publicações por mês</dt><dd className="font-semibold tabular-nums" data-testid="prev-publicacoes">{base.publicacoes + t.publicacoes}</dd></div>
        </dl>
        <div className="mt-4 border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">Valor mensal</p>
          <p className="mt-1 text-2xl font-bold tracking-tight" data-testid="prev-total">{reais(base.centavos + t.centavos)}</p>
        </div>
      </div>
    </div>
  );
}
