// Modelo comercial modular do DesignoAI Social Automation: um plano base mais adicionais. Valores em CENTAVOS (inteiros), para não haver erro de ponto flutuante.
// Só alimenta a página pública de valores; não cobra nem ativa nada.
export const BASE = { precoCentavos: 59990, clientes: 1, contas: 4, publicacoes: 15, alteracoesPorConteudo: 2 } as const;
export const CLIENTE_ADICIONAL_CENTAVOS = 3990;
export const PACOTES = [
  { publicacoes: 10, precoCentavos: 2990 },
  { publicacoes: 20, precoCentavos: 4990 },
  { publicacoes: 50, precoCentavos: 9990 },
] as const;

export type Selecao = { clientesAdicionais: number; pacotes: Record<number, number> };

export function calcular(sel: Selecao) {
  const clientesAdicionais = Math.max(0, Math.floor(sel.clientesAdicionais));
  let extraPubs = 0; let extraCentavos = 0;
  for (const p of PACOTES) {
    const q = Math.max(0, Math.floor(sel.pacotes[p.publicacoes] ?? 0));
    extraPubs += q * p.publicacoes; extraCentavos += q * p.precoCentavos;
  }
  return {
    clientes: BASE.clientes + clientesAdicionais,
    publicacoes: BASE.publicacoes + extraPubs,
    totalCentavos: BASE.precoCentavos + clientesAdicionais * CLIENTE_ADICIONAL_CENTAVOS + extraCentavos,
  };
}

export const brl = (centavos: number) => (centavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

/** Exemplos da página. Os valores vêm de calcular(), então a tabela nunca diverge da fórmula. */
export const EXEMPLOS: Selecao[] = [
  { clientesAdicionais: 0, pacotes: {} },
  { clientesAdicionais: 1, pacotes: {} },
  { clientesAdicionais: 0, pacotes: { 10: 1 } },
  { clientesAdicionais: 1, pacotes: { 10: 1 } },
  { clientesAdicionais: 2, pacotes: { 20: 1 } },
  { clientesAdicionais: 4, pacotes: { 50: 1 } },
];
