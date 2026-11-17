export const NETWORKS = [
  { key: 'instagram', label: 'Instagram' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'threads', label: 'Threads' },
  { key: 'tiktok', label: 'TikTok' },
] as const;

export const STATUS_LABEL: Record<string, string> = {
  pending: 'Pendente', active: 'Ativa', past_due: 'Inadimplente', canceled: 'Cancelada', suspended: 'Suspensa',
  draft: 'Rascunho', approved: 'Aprovado', queued: 'Na fila', producing: 'Produzindo', ready: 'Pronto para revisão',
  scheduled: 'Agendado', published: 'Publicado', failed: 'Falhou', processing: 'Processando', completed: 'Concluída',
};

/** Credits available = sum of ledger entries (grants positive, usage negative). */
export function creditBalance(entries: { amount: number }[]): number {
  return entries.reduce((sum, e) => sum + e.amount, 0);
}

/** New productions are blocked unless the subscription is active and credits remain. */
export function canProduce(subscriptionStatus: string | undefined, balance: number): boolean {
  return subscriptionStatus === 'active' && balance > 0;
}
