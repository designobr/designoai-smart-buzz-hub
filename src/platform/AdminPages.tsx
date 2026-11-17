import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { chamarMotor } from './motor-api';
import { EmptyState, PageHeader, Panel } from './AppLayout';

type Plano = { codigo: string; nome: string; ativo: boolean; limite_contas: number | null; limite_publicacoes_mes: number | null; limite_clientes: number | null; organizacoes: number };
const lim = (n: number | null) => (n == null ? 'sem limite' : String(n));
type Org = { id: string; nome: string; slug: string; status: string; plano_codigo: string | null };

/* Planos (limites e preços) são cadastrados pelo motor; aqui: leitura e atribuição de plano aos clientes. */
function PlansAdmin() {
  const planos = useQuery({ queryKey: ['admin-planos'], queryFn: () => chamarMotor<Plano[]>('/admin/planos') });
  if (!(planos.data || []).length) return <EmptyState title="Nenhum plano" text="Os planos cadastrados no motor aparecem aqui." />;
  return (
    <div className="grid gap-4">
      {planos.data!.map((p) => (
        <Panel key={p.codigo}>
          <p className="font-medium text-foreground">{p.nome} <span className="text-xs text-muted-foreground">({p.codigo})</span></p>
          <p className="mt-2 text-xs text-muted-foreground">
            Contas: {lim(p.limite_contas)} · Publicações por mês: {lim(p.limite_publicacoes_mes)} · Clientes: {lim(p.limite_clientes)} · Organizações neste plano: {p.organizacoes}
          </p>
        </Panel>
      ))}
    </div>
  );
}

function ClientsAdmin() {
  const qc = useQueryClient();
  const orgs = useQuery({ queryKey: ['admin-orgs'], queryFn: () => chamarMotor<Org[]>('/admin/organizacoes') });
  const planos = useQuery({ queryKey: ['admin-planos'], queryFn: () => chamarMotor<Plano[]>('/admin/planos') });
  const [busy, setBusy] = useState<string | null>(null);

  const trocarPlano = async (org: Org, codigo: string) => {
    setBusy(org.id);
    try {
      await chamarMotor(`/admin/organizacoes/${org.id}/plano`, { metodo: 'PUT', corpo: { codigo: codigo || null } });
      toast.success('Plano atualizado.');
      qc.invalidateQueries({ queryKey: ['admin-orgs'] });
    } catch (err) { toast.error((err as Error).message); } finally { setBusy(null); }
  };

  if (!(orgs.data || []).length) return <EmptyState title="Nenhum cliente" text="As organizações cadastradas aparecerão aqui." />;
  return (
    <Panel className="p-0 overflow-x-auto">
      <table className="w-full text-sm">
        <thead><tr className="text-left text-xs text-muted-foreground border-b border-border">{['Empresa', 'Status', 'Plano'].map((h) => <th key={h} className="px-5 py-3 font-normal">{h}</th>)}</tr></thead>
        <tbody>{orgs.data!.map((o) => (
          <tr key={o.id} className="border-b border-border last:border-0">
            <td className="px-5 py-3 text-foreground">{o.nome}</td>
            <td className="px-5 py-3 text-muted-foreground">{o.status}</td>
            <td className="px-5 py-3">
              <select aria-label={`Plano de ${o.nome}`} className="rounded-full border border-border bg-background px-3 py-1 text-sm" disabled={busy === o.id}
                value={o.plano_codigo ?? ''} onChange={(e) => trocarPlano(o, e.target.value)}>
                <option value="">Sem plano</option>
                {(planos.data || []).map((p) => <option key={p.codigo} value={p.codigo}>{p.nome}</option>)}
              </select>
            </td>
          </tr>))}
        </tbody>
      </table>
    </Panel>
  );
}

export function AdminPage() {
  return (
    <>
      <PageHeader title="Administração DesignoAI" description="Clientes, planos e operação da plataforma." />
      <Tabs defaultValue="clients">
        <TabsList className="rounded-full"><TabsTrigger value="clients" className="rounded-full">Clientes</TabsTrigger><TabsTrigger value="plans" className="rounded-full">Planos</TabsTrigger></TabsList>
        <TabsContent value="clients" className="mt-6"><ClientsAdmin /></TabsContent>
        <TabsContent value="plans" className="mt-6"><PlansAdmin /></TabsContent>
      </Tabs>
    </>
  );
}
