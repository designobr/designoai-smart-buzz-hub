// Aprovação de conteúdos dentro do app: rascunhos (vídeo, imagem ou texto) aguardando decisão, com legendas por rede.
// Dados e decisão pela API v1 do motor (GET /aprovacoes, GET /aprovacoes/:id, POST /aprovacoes/:id/decisao). Nada é publicado
// sem aprovação aqui; depois de aprovado, a publicação segue o perfil de publicação da organização (automática ou manual).
import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Loader2, Check, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useAuth } from './AuthProvider';
import { useMotor } from './useCompany';
import { EmptyState, PageHeader, Panel } from './AppLayout';
import { api, REDES, type Rede } from './motor';

type Resumo = { id: string; tipo: 'midia' | 'texto'; redes: string[]; legendas: Record<string, string>; hash: string; criadoEm: string; clienteId: string | null };
type Detalhe = { id: string; status: string; hash: string; criadoEm: string; legendas: Record<string, string>; redes: string[];
  midia: { tipo: 'video' | 'imagem'; duracaoS: number | null; largura: number | null; altura: number | null; codecVideo: string | null; codecAudio: string | null; validacao: string } | null;
  urlMidia: string | null };

const nomeRede = (k: string) => REDES.find((r) => r.key === k)?.label ?? k;
const quando = (d: string) => new Date(d).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

function Revisao({ id, onFim }: { id: string; onFim: () => void }) {
  const { orgId, org } = useAuth();
  const qc = useQueryClient();
  const q = useMotor<Detalhe>(`/aprovacoes/${id}`);
  const [motivo, setMotivo] = useState('');
  const [busy, setBusy] = useState(false);
  const podeDecidir = ['administrador', 'aprovador'].includes(org?.papel ?? '');
  const decidir = async (decisao: 'aprovado' | 'rejeitado') => {
    if (!q.data) return;
    setBusy(true);
    try {
      await api(`/aprovacoes/${id}/decisao`, { org: orgId, body: { decisao, hash: q.data.hash, ...(decisao === 'rejeitado' && motivo.trim() ? { motivo: motivo.trim() } : {}) } });
      toast.success(decisao === 'aprovado' ? 'Conteúdo aprovado.' : 'Conteúdo rejeitado.');
      await qc.invalidateQueries({ queryKey: ['motor', orgId] });
      onFim();
    } catch (err) { toast.error((err as Error).message); } finally { setBusy(false); }
  };

  if (q.isLoading) return <Panel className="mb-6"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></Panel>;
  if (q.error || !q.data) return <Panel className="mb-6"><p role="alert" className="text-sm text-destructive">{(q.error as Error)?.message ?? 'Não foi possível abrir este conteúdo.'}</p></Panel>;
  const d = q.data;
  return (
    <Panel className="mb-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-medium">{d.midia?.tipo === 'video' ? 'Vídeo' : d.midia ? 'Imagem' : 'Texto'} para aprovação</h2>
          <p className="text-xs text-muted-foreground">Enviado em {quando(d.criadoEm)}</p>
        </div>
        <Button variant="ghost" size="sm" className="rounded-full" onClick={onFim}>Fechar</Button>
      </div>

      {d.midia?.tipo === 'video' && d.urlMidia && (
        <video src={d.urlMidia} controls playsInline className="mt-4 max-h-[520px] w-full rounded-xl bg-black object-contain" />
      )}
      {d.midia && (
        <p className="mt-2 text-xs text-muted-foreground">
          {d.midia.largura && d.midia.altura ? `${d.midia.largura}×${d.midia.altura}` : ''}
          {d.midia.duracaoS ? ` · ${d.midia.duracaoS.toFixed(1)} s` : ''}
          {d.midia.codecVideo ? ` · ${d.midia.codecVideo.toUpperCase()}` : ''}
          {d.midia.codecAudio ? ` · ${d.midia.codecAudio.toUpperCase()}` : ''}
          {d.midia.validacao === 'aprovada_tecnicamente' ? ' · validação técnica aprovada' : ''}
        </p>
      )}

      <div className="mt-5 space-y-3">
        <h3 className="text-sm font-medium">Legendas por rede</h3>
        {d.redes.map((r) => (
          <div key={r} className="rounded-xl border border-border p-3">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{nomeRede(r)}</p>
            <p className="mt-1 whitespace-pre-line text-sm">{d.legendas[r]}</p>
          </div>
        ))}
      </div>

      {podeDecidir ? (
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="motivo-rejeicao">Motivo (só se rejeitar)</Label>
            <Textarea id="motivo-rejeicao" value={motivo} onChange={(e) => setMotivo(e.target.value)} maxLength={500} className="rounded-xl" />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => decidir('aprovado')} disabled={busy} className="rounded-full"><Check className="mr-1 h-4 w-4" />Aprovar</Button>
            <Button variant="outline" onClick={() => decidir('rejeitado')} disabled={busy} className="rounded-full"><X className="mr-1 h-4 w-4" />Rejeitar</Button>
          </div>
          <p className="text-xs text-muted-foreground">Ao aprovar, a publicação segue o perfil de publicação da organização: automática (pouco depois da aprovação) ou manual.</p>
        </div>
      ) : (
        <p className="mt-6 text-xs text-muted-foreground">Só administradores e aprovadores decidem sobre os conteúdos.</p>
      )}
    </Panel>
  );
}

export function ApprovalsPage() {
  const q = useMotor<Resumo[]>('/aprovacoes');
  const [abertoId, setAbertoId] = useState<string | null>(null);
  return (
    <>
      <PageHeader title="Aprovações" description="Confira o que está pronto para publicar. Nada é publicado sem a sua aprovação." />
      {q.isLoading ? <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /> : q.error ? (
        <p role="alert" className="text-sm text-destructive">{(q.error as Error).message}</p>
      ) : (
        <>
          {abertoId && <Revisao id={abertoId} onFim={() => setAbertoId(null)} />}
          {(q.data ?? []).length === 0 ? (
            <EmptyState title="Nada aguardando aprovação" text="Quando um conteúdo estiver pronto para revisão, ele aparece aqui." />
          ) : (
            <ul className="grid gap-4 sm:grid-cols-2">
              {(q.data ?? []).map((r) => (
                <li key={r.id}>
                  <button type="button" onClick={() => setAbertoId(r.id)} className="w-full rounded-2xl border border-border bg-background p-5 text-left transition-colors hover:border-foreground/30">
                    <p className="font-medium">{r.tipo === 'midia' ? 'Conteúdo com mídia' : 'Texto'}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{r.redes.map(nomeRede).join(' · ')}</p>
                    <p className="mt-2 text-xs text-muted-foreground">Enviado em {quando(r.criadoEm)}</p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}
