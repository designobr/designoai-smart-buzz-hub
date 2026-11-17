// Administração da plataforma. Só aparece para administradores (o motor confere de novo em cada chamada).
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { EmptyState, PageHeader, Panel } from './AppLayout';
import { api } from './motor';

type OrgAdmin = { id: string; nome: string; status: string; plano_codigo: string | null; plano_nome: string | null; membros: number; publicacoes_mes: number | null; limite_mes: number | null };
type PlanoAdmin = { codigo: string; nome: string; limite_contas: number | null; limite_publicacoes_mes: number | null; limite_clientes: number | null; ativo: boolean; organizacoes: number };

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
