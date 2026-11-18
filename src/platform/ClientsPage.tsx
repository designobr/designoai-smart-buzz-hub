// Clientes gerenciados da organização: cadastro, edição, contas de redes de cada cliente e uso dos limites do plano.
// Dados da API v1 do motor (GET/POST /clientes, PUT /clientes/:id, GET /clientes/uso, PUT /contas/:id/cliente, POST /contas/conectar).
// Os limites são conferidos no servidor; a tela só mostra o consumo e evita cliques que seriam recusados.
import { useState, type FormEvent } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Loader2, Pencil, Plus, Check, X } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useAuth } from './AuthProvider';
import { useMotor } from './useCompany';
import { EmptyState, PageHeader, Panel } from './AppLayout';
import { api, REDES, type Cliente, type Conta, type Rede, type UsoClientes } from './motor';

const SEM_CLIENTE = '__sem_cliente__';
const ATIVA = (c: Conta) => !['desconectada', 'revogada'].includes(c.status);

/** Barra de consumo: usado, limite e quanto resta. Limite nulo = sem limite. */
export function Medidor({ rotulo, usado, limite }: { rotulo: string; usado: number; limite: number | null }) {
  const pct = limite && limite > 0 ? Math.min(100, Math.round((usado / limite) * 100)) : 0;
  const cheio = limite !== null && usado >= limite;
  const perto = limite !== null && !cheio && pct >= 80;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="text-muted-foreground">{rotulo}</span>
        <span className="tabular-nums">{usado}{limite !== null ? ` de ${limite}` : ''}</span>
      </div>
      {limite !== null && (
        <div role="progressbar" aria-label={`${rotulo}: ${usado} de ${limite}`} aria-valuemin={0} aria-valuemax={limite} aria-valuenow={Math.min(usado, limite)} className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div className={cn('h-full rounded-full transition-all', cheio ? 'bg-destructive' : perto ? 'bg-amber-500' : 'bg-primary')} style={{ width: `${pct}%` }} />
        </div>
      )}
      <p className={cn('mt-1 text-xs', cheio ? 'text-destructive' : perto ? 'text-amber-600' : 'text-muted-foreground')}>
        {limite === null ? 'Sem limite no plano.' : cheio ? 'Limite atingido.' : `${limite - usado} ${limite - usado === 1 ? 'disponível' : 'disponíveis'}`}
      </p>
    </div>
  );
}

function NovoCliente({ bloqueado, motivo, onCriado }: { bloqueado: boolean; motivo: string | null; onCriado: () => void }) {
  const { orgId } = useAuth();
  const [nome, setNome] = useState('');
  const [busy, setBusy] = useState(false);
  const enviar = async (e: FormEvent) => {
    e.preventDefault(); setBusy(true);
    try { await api('/clientes', { org: orgId, body: { nome: nome.trim() } }); setNome(''); toast.success('Cliente cadastrado.'); onCriado(); }
    catch (err) { toast.error((err as Error).message); } finally { setBusy(false); }
  };
  return (
    <Panel className="mb-6">
      <h2 className="font-medium">Novo cliente</h2>
      <form onSubmit={enviar} className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1 space-y-2">
          <Label htmlFor="cli-nome">Nome do cliente</Label>
          <Input id="cli-nome" value={nome} onChange={(e) => setNome(e.target.value)} className="h-11 rounded-xl" minLength={2} maxLength={120} required disabled={bloqueado} />
        </div>
        <Button type="submit" className="rounded-full" disabled={busy || bloqueado || nome.trim().length < 2}><Plus className="mr-1 h-4 w-4" />Cadastrar</Button>
      </form>
      {motivo && <p className="mt-2 text-xs text-muted-foreground">{motivo}</p>}
    </Panel>
  );
}

type Grupo = { id: string | null; nome: string; contas: Conta[]; usoContas: number; usoPubs: number };

function CartaoCliente({ g, todos, limites, podeGerir, podeRenomear, onMudou }: {
  g: Grupo; todos: Grupo[]; limites: UsoClientes['limites']; podeGerir: boolean; podeRenomear: boolean; onMudou: () => Promise<void>;
}) {
  const { orgId } = useAuth();
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState(g.nome);
  const [busy, setBusy] = useState<string | null>(null);
  const [rede, setRede] = useState<Rede>('instagram');
  const contasCheio = limites.contasPorCliente !== null && g.usoContas >= limites.contasPorCliente;
  const totalCheio = limites.contas !== null && todos.reduce((n, x) => n + x.usoContas, 0) >= limites.contas;

  const salvarNome = async (e: FormEvent) => {
    e.preventDefault(); if (!g.id) return; setBusy('nome');
    try { await api(`/clientes/${g.id}`, { org: orgId, method: 'PUT', body: { nome: nome.trim() } }); toast.success('Nome atualizado.'); setEditando(false); await onMudou(); }
    catch (err) { toast.error((err as Error).message); } finally { setBusy(null); }
  };
  const mover = async (c: Conta, destino: string) => {
    setBusy(c.id);
    try { await api(`/contas/${c.id}/cliente`, { org: orgId, method: 'PUT', body: { clienteId: destino === SEM_CLIENTE ? null : destino } }); toast.success('Conta movida.'); await onMudou(); }
    catch (err) { toast.error((err as Error).message); } finally { setBusy(null); }
  };
  const conectar = async () => {
    setBusy('conectar');
    try {
      // O retorno do OAuth passa pela tela de redes sociais, que também cuida da escolha de Página e dos avisos.
      const r = await api<{ url: string }>('/contas/conectar', { org: orgId, body: { rede, retorno: '/app/conexoes', ...(g.id ? { clienteId: g.id } : {}) } });
      window.location.assign(r.url);
    } catch (err) { toast.error((err as Error).message); setBusy(null); }
  };

  return (
    <Panel>
      <div className="flex items-start justify-between gap-3">
        {editando && g.id ? (
          <form onSubmit={salvarNome} className="flex flex-1 items-center gap-2">
            <Input aria-label="Nome do cliente" value={nome} onChange={(e) => setNome(e.target.value)} className="h-9 rounded-lg" minLength={2} maxLength={120} required autoFocus />
            <Button type="submit" size="icon" variant="outline" className="h-9 w-9 rounded-full" disabled={busy === 'nome' || nome.trim().length < 2} aria-label="Salvar nome"><Check className="h-4 w-4" /></Button>
            <Button type="button" size="icon" variant="ghost" className="h-9 w-9 rounded-full" onClick={() => { setEditando(false); setNome(g.nome); }} aria-label="Cancelar"><X className="h-4 w-4" /></Button>
          </form>
        ) : (
          <div className="min-w-0">
            <h2 className="truncate font-medium">{g.nome}</h2>
            {!g.id && <p className="text-xs text-muted-foreground">Contas da própria organização, sem cliente. Seguem os mesmos limites de um cliente.</p>}
          </div>
        )}
        {g.id && podeRenomear && !editando && (
          <button onClick={() => setEditando(true)} className="shrink-0 text-muted-foreground hover:text-foreground" aria-label={`Editar ${g.nome}`}><Pencil className="h-4 w-4" strokeWidth={1.75} /></button>
        )}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Medidor rotulo="Contas de redes" usado={g.usoContas} limite={limites.contasPorCliente} />
        <Medidor rotulo="Publicações no mês" usado={g.usoPubs} limite={limites.publicacoesPorClienteMes} />
      </div>

      <div className="mt-5">
        <h3 className="text-sm font-medium">Contas</h3>
        {g.contas.length === 0 ? <p className="mt-1 text-sm text-muted-foreground">Nenhuma conta conectada.</p> : (
          <ul className="mt-2 space-y-2 text-sm">
            {g.contas.map((c) => (
              <li key={c.id} className="flex flex-wrap items-center justify-between gap-2">
                <span>{REDES.find((r) => r.key === c.rede)?.label ?? c.rede} · {c.nome}{c.status !== 'conectada' && <span className="text-destructive"> · {c.status}</span>}</span>
                {podeGerir && (
                  <label className="flex items-center gap-2 text-xs text-muted-foreground">Mover para
                    <select aria-label={`Mover ${c.nome} para`} value={g.id ?? SEM_CLIENTE} disabled={busy === c.id} onChange={(e) => mover(c, e.target.value)}
                      className="rounded-lg border border-border bg-background px-2 py-1 text-sm text-foreground">
                      {todos.map((o) => {
                        const cheioO = o.id !== g.id && limites.contasPorCliente !== null && o.usoContas >= limites.contasPorCliente;
                        return <option key={o.id ?? SEM_CLIENTE} value={o.id ?? SEM_CLIENTE} disabled={cheioO}>{o.nome}{cheioO ? ' (limite de contas)' : ''}</option>;
                      })}
                    </select>
                  </label>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {podeGerir && (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <select aria-label="Rede a conectar" value={rede} onChange={(e) => setRede(e.target.value as Rede)} className="rounded-lg border border-border bg-background px-2 py-1.5 text-sm">
            {REDES.map((r) => <option key={r.key} value={r.key}>{r.label}</option>)}
          </select>
          <Button variant="outline" className="rounded-full" disabled={busy === 'conectar' || contasCheio || totalCheio} onClick={conectar}>Conectar conta</Button>
          {(contasCheio || totalCheio) && <span className="text-xs text-muted-foreground">{contasCheio ? 'Este cliente atingiu o limite de contas.' : 'O plano atingiu o total de contas.'}</span>}
        </div>
      )}
    </Panel>
  );
}

export function ClientsPage() {
  const { orgId, org } = useAuth();
  const qc = useQueryClient();
  const clientes = useMotor<Cliente[]>('/clientes');
  const uso = useMotor<UsoClientes>('/clientes/uso');
  const contas = useMotor<Conta[]>('/contas');
  const refazer = () => qc.invalidateQueries({ queryKey: ['motor', orgId] });
  const papel = org?.papel ?? '';
  const podeGerir = ['administrador', 'editor'].includes(papel);
  const podeRenomear = papel === 'administrador';

  const carregando = clientes.isLoading || uso.isLoading || contas.isLoading;
  const erro = (clientes.error ?? uso.error ?? contas.error) as Error | null;
  if (carregando || erro || !clientes.data || !uso.data || !contas.data) {
    return <><PageHeader title="Clientes" />{erro ? <p role="alert" className="text-sm text-destructive">{erro.message}</p> : <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />}</>;
  }

  const limites = uso.data.limites;
  const ativas = contas.data.filter(ATIVA);
  const usoDe = (id: string | null) => uso.data.clientes.find((u) => u.clienteId === id);
  const grupos: Grupo[] = [
    ...clientes.data.map((c): Grupo => ({ id: c.id, nome: c.nome, contas: ativas.filter((a) => a.clienteId === c.id), usoContas: usoDe(c.id)?.contas ?? 0, usoPubs: usoDe(c.id)?.publicacoesMes ?? 0 })),
    { id: null, nome: 'Sem cliente (a própria organização)', contas: ativas.filter((a) => !a.clienteId), usoContas: usoDe(null)?.contas ?? 0, usoPubs: usoDe(null)?.publicacoesMes ?? 0 },
  ];
  const totContas = grupos.reduce((n, g) => n + g.usoContas, 0);
  const totPubs = grupos.reduce((n, g) => n + g.usoPubs, 0);
  const clientesCheio = limites.clientes !== null && clientes.data.length >= limites.clientes;
  const semGrupoVazio = grupos.filter((g) => g.id !== null || g.contas.length > 0 || g.usoPubs > 0);

  return (
    <>
      <PageHeader title="Clientes" description="Cadastre os clientes que você gerencia. Cada cliente tem as suas contas de redes e os seus próprios limites de contas e de publicações por mês, além dos totais do plano." />

      <Panel className="mb-6">
        <h2 className="font-medium">Uso do plano</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Medidor rotulo="Clientes" usado={clientes.data.length} limite={limites.clientes} />
          <Medidor rotulo="Contas de redes (total)" usado={totContas} limite={limites.contas} />
          <Medidor rotulo="Publicações no mês (total)" usado={totPubs} limite={limites.publicacoesMes} />
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Cada publicação em cada rede conta como uma. O mês de contagem é o da sua organização.</p>
      </Panel>

      {podeRenomear && <NovoCliente bloqueado={clientesCheio} motivo={clientesCheio ? 'O plano atingiu o limite de clientes. Troque de plano em Assinatura para cadastrar mais.' : null} onCriado={refazer} />}

      {clientes.data.length === 0 && semGrupoVazio.length === 1 && semGrupoVazio[0].contas.length === 0 ? (
        <EmptyState title="Nenhum cliente ainda" text={podeRenomear ? 'Cadastre o primeiro cliente para conectar as redes dele e acompanhar os limites.' : 'Peça a um administrador para cadastrar os clientes.'} />
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {semGrupoVazio.map((g) => <CartaoCliente key={g.id ?? SEM_CLIENTE} g={g} todos={grupos} limites={limites} podeGerir={podeGerir} podeRenomear={podeRenomear} onMudou={async () => { await refazer(); }} />)}
        </div>
      )}
    </>
  );
}
