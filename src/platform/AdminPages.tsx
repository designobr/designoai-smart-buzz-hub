// Administração da plataforma. Só aparece para administradores (o motor confere de novo em cada chamada).
import { useEffect, useState, type FormEvent } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { EmptyState, PageHeader, Panel } from './AppLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { api } from './motor';

type OrgAdmin = { id: string; nome: string; status: string; plano_codigo: string | null; plano_nome: string | null; membros: number; publicacoes_mes: number | null; limite_mes: number | null };
type PlanoAdmin = { codigo: string; nome: string; limite_contas: number | null; limite_publicacoes_mes: number | null; limite_clientes: number | null; ativo: boolean; organizacoes: number };

type ConfigAgente = { agenteAtivo: boolean | null; provedor: string | null; modelo: string | null; temChave: boolean; efetivo: { agenteAtivo: boolean; provedor: string; modelo: string }; padrao: { agenteAtivo: boolean; provedor: string; temChave: boolean } };

/** Agente de IA: liga e desliga, escolhe o provedor e grava a chave (cifrada no motor; nunca volta para a tela). */
function AgenteConfig() {
  const qc = useQueryClient();
  const q = useQuery({ queryKey: ['motor-admin', 'config'], queryFn: () => api<ConfigAgente>('/admin/config') });
  const [ativo, setAtivo] = useState(false); const [provedor, setProvedor] = useState('desligado'); const [modelo, setModelo] = useState(''); const [chave, setChave] = useState('');
  useEffect(() => { const c = q.data; if (!c) return; setAtivo(c.agenteAtivo ?? c.padrao.agenteAtivo); setProvedor(c.provedor ?? c.padrao.provedor); setModelo(c.modelo ?? ''); }, [q.data]);
  const salvar = async (e: FormEvent, removerChave = false) => {
    e.preventDefault();
    try { await api('/admin/config', { method: 'PUT', body: { agenteAtivo: ativo, provedor, modelo, ...(chave ? { chave } : {}), ...(removerChave ? { removerChave: true } : {}) } }); setChave(''); toast.success('Configuração do agente salva. O agente aplica no próximo ciclo.'); await qc.invalidateQueries({ queryKey: ['motor-admin', 'config'] }); }
    catch (err) { toast.error((err as Error).message); }
  };
  const c = q.data;
  return (
    <Panel className="mb-6">
      <h2 className="font-medium">Agente de IA</h2>
      {q.error ? <p role="alert" className="mt-2 text-sm text-destructive">{(q.error as Error).message}</p> : c && (
        <form onSubmit={salvar} className="mt-3 space-y-4 text-sm">
          <p className="text-muted-foreground">Situação atual: {c.efetivo.agenteAtivo && c.efetivo.provedor !== 'desligado' ? `ativo (${c.efetivo.provedor}, ${c.efetivo.modelo})` : 'desligado. Os clientes veem o aviso de que a geração automática ainda não está ligada.'}</p>
          <label className="flex items-center gap-2"><input type="checkbox" checked={ativo} onChange={(e) => setAtivo(e.target.checked)} />Agente ligado</label>
          <div className="flex flex-wrap items-end gap-3">
            <div className="space-y-2"><Label htmlFor="ag-prov">Provedor</Label>
              <select id="ag-prov" value={provedor} onChange={(e) => setProvedor(e.target.value)} className="h-10 rounded-lg border border-border bg-background px-2"><option value="desligado">Desligado</option><option value="anthropic">Anthropic (Claude)</option></select></div>
            <div className="space-y-2"><Label htmlFor="ag-mod">Modelo (opcional)</Label><Input id="ag-mod" value={modelo} onChange={(e) => setModelo(e.target.value)} className="w-64" placeholder="padrão do servidor" /></div>
          </div>
          <div className="space-y-2"><Label htmlFor="ag-key">Chave da API {c.temChave ? '(já gravada; deixe vazio para manter)' : ''}</Label><Input id="ag-key" type="password" autoComplete="off" value={chave} onChange={(e) => setChave(e.target.value)} className="max-w-md" /></div>
          <div className="flex gap-3"><Button type="submit" className="rounded-full">Salvar</Button>{c.temChave && <Button type="button" variant="outline" className="rounded-full" onClick={(e) => salvar(e as unknown as FormEvent, true)}>Remover a chave</Button>}</div>
          <p className="text-xs text-muted-foreground">Usar o agente consome créditos do cliente e gera custo na conta do provedor.</p>
        </form>
      )}
    </Panel>
  );
}

export function AdminPage() {
  const qc = useQueryClient();
  const orgs = useQuery({ queryKey: ['motor-admin', 'orgs'], queryFn: () => api<OrgAdmin[]>('/admin/organizacoes') });
  const planos = useQuery({ queryKey: ['motor-admin', 'planos'], queryFn: () => api<PlanoAdmin[]>('/admin/planos') });

  const definir = async (id: string, codigo: string) => {
    try { await api(`/admin/organizacoes/${id}/plano`, { method: 'PUT', body: { codigo } }); toast.success('Plano atualizado.'); await qc.invalidateQueries({ queryKey: ['motor-admin'] }); }
    catch (e) { toast.error((e as Error).message); }
  };

  const erro = (orgs.error ?? planos.error) as Error | null;
  return (
    <>
      <PageHeader title="Administração" description="Organizações e planos da plataforma. Preços, créditos e configuração do agente ficam no painel do motor." />
      {erro && <p role="alert" className="text-sm text-destructive">{erro.message}</p>}
      <AgenteConfig />
      <Panel className="mb-6">
        <h2 className="font-medium">Organizações</h2>
        {(orgs.data ?? []).length === 0 ? <div className="mt-3"><EmptyState title="Nenhuma organização" text="As organizações aparecem aqui quando os clientes se cadastram." /></div> : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs text-muted-foreground"><tr><th className="py-2 pr-4">Organização</th><th className="pr-4">Situação</th><th className="pr-4">Membros</th><th className="pr-4">Publicações no mês</th><th>Plano</th></tr></thead>
              <tbody className="divide-y divide-border">
                {(orgs.data ?? []).map((o) => (
                  <tr key={o.id}>
                    <td className="py-2 pr-4">{o.nome}</td><td className="pr-4">{o.status}</td><td className="pr-4">{o.membros}</td>
                    <td className="pr-4">{o.publicacoes_mes ?? 0}{o.limite_mes != null ? ` / ${o.limite_mes}` : ''}</td>
                    <td>
                      <select aria-label={`Plano de ${o.nome}`} value={o.plano_codigo ?? ''} onChange={(e) => definir(o.id, e.target.value)} className="rounded-lg border border-border bg-background px-2 py-1">
                        <option value="">Sem plano</option>
                        {(planos.data ?? []).filter((p) => p.ativo || p.codigo === o.plano_codigo).map((p) => <option key={p.codigo} value={p.codigo}>{p.nome}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>
      <Panel>
        <h2 className="font-medium">Planos</h2>
        <ul className="mt-3 divide-y divide-border text-sm">
          {(planos.data ?? []).map((p) => (
            <li key={p.codigo} className="flex flex-wrap justify-between gap-2 py-2">
              <span>{p.nome} <span className="text-muted-foreground">({p.codigo}){p.ativo ? '' : ' · inativo'}</span></span>
              <span className="text-muted-foreground">
                contas {p.limite_contas ?? '∞'} · publicações/mês {p.limite_publicacoes_mes ?? '∞'} · clientes {p.limite_clientes ?? '∞'} · {p.organizacoes} organização(ões)
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
