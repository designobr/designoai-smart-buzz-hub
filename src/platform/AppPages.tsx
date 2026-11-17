import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { chamarMotor } from './motor-api';
import { useCompany } from './useCompany';
import { EmptyState, PageHeader, Panel } from './AppLayout';

/* Tipos das respostas da API v1 do motor (ver src/web/api/v1.ts no repositório do motor). */
type Item = {
  id: string; dataPrevista: string; rede: string; formato: string; tema: string; estado: string;
  titulo: string | null; legenda: string | null; hashtags: string[]; roteiro: string | null; rascunhoId: string | null;
};
type Conta = { id: string; rede: string; nome: string; status: string; erro: string | null };
type Planejamento = { mes: string; hoje: string; itens: Item[]; podeGerar: boolean; estado: { agenteAtivo: boolean; provedor: string } };
type Assinatura = { plano: { nome?: string; creditos_mes?: number | null } | null; uso: { usado: number; reservado: number } | null };

const REDES = [
  { key: 'instagram', label: 'Instagram' }, { key: 'threads', label: 'Threads' },
  { key: 'tiktok', label: 'TikTok' }, { key: 'youtube', label: 'YouTube' },
];
const ESTADO_LABEL: Record<string, string> = {
  planejado: 'Planejado', em_producao: 'Em produção', aguardando_midia: 'Aguardando a mídia', aguardando_aprovacao: 'Aguardando sua aprovação',
  aprovado: 'Aprovado', agendado: 'Agendado', publicado: 'Publicado', alteracao_solicitada: 'Alteração em andamento',
  aguardando_creditos: 'Aguardando créditos', falhou: 'Falhou', cancelado: 'Cancelado',
};

const fmt = (d?: string | null) => (d ? format(new Date(d), "dd 'de' MMM, HH:mm", { locale: ptBR }) : '');
const mesAtual = () => format(new Date(), 'yyyy-MM');

function useMotor<T>(chave: unknown[], caminho: string, organizacaoId?: string) {
  return useQuery({
    queryKey: [...chave, organizacaoId],
    enabled: !!organizacaoId,
    queryFn: () => chamarMotor<T>(caminho, { organizacaoId }),
  });
}

function NeedsCompany() {
  return (
    <EmptyState title="Cadastre sua empresa primeiro" text="Precisamos conhecer seu negócio para gerar o planejamento e os conteúdos." />
  );
}

/* ---------------- Painel ---------------- */
export function DashboardPage() {
  const { data: company, isLoading } = useCompany();
  const id = company?.id;
  const plano = useMotor<Planejamento>(['planejamento'], `/planejamento?mes=${mesAtual()}`, id);
  const conteudos = useMotor<Item[]>(['conteudos'], '/conteudos', id);
  const assinatura = useMotor<Assinatura>(['assinatura'], '/assinatura', id);

  if (isLoading) return null;
  if (!company) return (
    <>
      <PageHeader title="Bem-vindo à DesignoAI" description="Vamos começar pelo cadastro da sua empresa." />
      <Button asChild className="rounded-full"><Link to="/app/empresa">Cadastrar empresa</Link></Button>
    </>
  );

  const itens = conteudos.data ?? [];
  const agora = Date.now();
  const proximas = itens
    .filter((i) => i.dataPrevista && new Date(i.dataPrevista).getTime() > agora && ['agendado', 'aprovado'].includes(i.estado))
    .sort((a, b) => a.dataPrevista.localeCompare(b.dataPrevista)).slice(0, 5);
  const stats = [
    { k: 'Plano', v: assinatura.data?.plano?.nome ?? 'Sem plano' },
    { k: 'Aguardando sua aprovação', v: itens.filter((i) => i.estado === 'aguardando_aprovacao').length },
    { k: 'Agendados ou aprovados', v: itens.filter((i) => ['agendado', 'aprovado'].includes(i.estado)).length },
    { k: 'Publicados', v: itens.filter((i) => i.estado === 'publicado').length },
  ];

  return (
    <>
      <PageHeader title={company.name} description="Visão geral da sua operação de conteúdo." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Panel key={s.k}><p className="text-xs text-muted-foreground">{s.k}</p><p className="mt-2 text-2xl font-semibold text-foreground">{s.v}</p></Panel>
        ))}
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel>
          <h2 className="font-medium text-foreground">Próximas publicações</h2>
          {proximas.length ? (
            <ul className="mt-4 divide-y divide-border">
              {proximas.map((u) => <li key={u.id} className="py-3 text-sm flex justify-between gap-4"><span className="text-foreground">{u.tema}</span><span className="text-muted-foreground whitespace-nowrap">{fmt(u.dataPrevista)}</span></li>)}
            </ul>
          ) : <p className="mt-3 text-sm text-muted-foreground">Nenhuma publicação agendada ainda.</p>}
        </Panel>
        <Panel>
          <h2 className="font-medium text-foreground">Planejamento do mês</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {plano.data?.itens.length ? `${plano.data.itens.length} peças planejadas para este mês.` : 'Nenhum planejamento gerado para este mês ainda.'}
          </p>
          <Button asChild variant="outline" className="mt-4 rounded-full"><Link to="/app/planejamento">Ver planejamento</Link></Button>
        </Panel>
      </div>
    </>
  );
}

/* ---------------- Empresa e marca (perfil do negócio) ---------------- */
type Negocio = { nomeFantasia: string; segmento: string; descricao: string; publicoAlvo: string; tomDeVoz: string; objetivos: string[]; redes: string[]; frequenciaSemanal: Record<string, number> };

export function CompanyPage() {
  const { data: company, isLoading } = useCompany();
  const qc = useQueryClient();
  const negocio = useMotor<{ negocio: Negocio | null; versao: number | null }>(['negocio'], '/negocio', company?.id);
  const [form, setForm] = useState<Record<string, string>>({});
  const [redes, setRedes] = useState<string[]>([]);
  const [frequencia, setFrequencia] = useState<Record<string, number>>({});
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const n = negocio.data?.negocio;
    if (!n) return;
    setForm({ nomeFantasia: n.nomeFantasia ?? '', segmento: n.segmento ?? '', descricao: n.descricao ?? '', publicoAlvo: n.publicoAlvo ?? '', tomDeVoz: n.tomDeVoz ?? '', objetivos: (n.objetivos ?? []).join('\n') });
    setRedes(n.redes ?? []);
    setFrequencia(n.frequenciaSemanal ?? {});
  }, [negocio.data]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!redes.length) return toast.error('Escolha pelo menos uma rede.');
    setBusy(true);
    try {
      const dados = {
        nomeFantasia: form.nomeFantasia?.trim() ?? '', segmento: form.segmento?.trim() ?? '', descricao: form.descricao?.trim() ?? '',
        publicoAlvo: form.publicoAlvo?.trim() ?? '', tomDeVoz: form.tomDeVoz?.trim() ?? '',
        objetivos: (form.objetivos ?? '').split('\n').map((o) => o.trim()).filter(Boolean),
        redes, frequenciaSemanal: Object.fromEntries(redes.map((r) => [r, frequencia[r] ?? 2])),
      };
      await chamarMotor('/negocio', { metodo: 'PUT', organizacaoId: company!.id, corpo: { dados, versao: negocio.data?.versao ?? null } });
      toast.success('Perfil salvo.');
      qc.invalidateQueries({ queryKey: ['negocio'] });
    } catch (err) { toast.error((err as Error).message); } finally { setBusy(false); }
  };

  if (isLoading) return null;
  if (!company) return <><PageHeader title="Empresa e marca" /><NeedsCompany /></>;
  const campo = (id: string, label: string, long = false) => (
    <div className={long ? 'sm:col-span-2 space-y-2' : 'space-y-2'}>
      <Label htmlFor={id}>{label}</Label>
      {long
        ? <Textarea id={id} rows={3} className="rounded-xl" value={form[id] ?? ''} onChange={(e) => setForm({ ...form, [id]: e.target.value })} maxLength={4000} />
        : <Input id={id} className="h-11 rounded-xl" value={form[id] ?? ''} onChange={(e) => setForm({ ...form, [id]: e.target.value })} maxLength={500} />}
    </div>
  );

  return (
    <>
      <PageHeader title="Empresa e marca" description="Essas informações orientam o planejamento e a criação dos conteúdos." />
      <form onSubmit={submit} className="space-y-6 max-w-3xl">
        <Panel className="grid gap-5 sm:grid-cols-2">
          {campo('nomeFantasia', 'Nome da empresa')}
          {campo('segmento', 'Segmento')}
          {campo('descricao', 'Descrição do negócio', true)}
          {campo('publicoAlvo', 'Público-alvo', true)}
          {campo('tomDeVoz', 'Tom de voz')}
          {campo('objetivos', 'Objetivos (um por linha)', true)}
        </Panel>
        <Panel>
          <h2 className="font-medium text-foreground">Redes e frequência</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {REDES.map((r) => (
              <label key={r.key} className="flex items-center justify-between rounded-xl border border-border p-4 text-sm">
                <span className="flex items-center gap-2">
                  <input type="checkbox" checked={redes.includes(r.key)} onChange={(e) => setRedes(e.target.checked ? [...redes, r.key] : redes.filter((x) => x !== r.key))} />
                  {r.label}
                </span>
                <span className="flex items-center gap-2 text-muted-foreground">
                  por semana
                  <Input type="number" min={1} max={7} className="h-9 w-20 rounded-lg" disabled={!redes.includes(r.key)}
                    value={frequencia[r.key] ?? 2} onChange={(e) => setFrequencia({ ...frequencia, [r.key]: Math.max(1, Math.min(7, Number(e.target.value) || 1)) })} />
                </span>
              </label>
            ))}
          </div>
        </Panel>
        <Button type="submit" disabled={busy} className="rounded-full h-11 px-8">{busy ? 'Salvando...' : 'Salvar alterações'}</Button>
      </form>
    </>
  );
}

/* ---------------- Planejamento ---------------- */
export function PlanningPage() {
  const { data: company } = useCompany();
  const qc = useQueryClient();
  const [mes, setMes] = useState(mesAtual());
  const plano = useQuery({
    queryKey: ['planejamento', mes, company?.id],
    enabled: !!company?.id,
    queryFn: () => chamarMotor<Planejamento>(`/planejamento?mes=${mes}`, { organizacaoId: company!.id }),
  });
  const [gerando, setGerando] = useState(false);
  const itens = plano.data?.itens ?? [];

  const gerar = async () => {
    setGerando(true);
    try {
      await chamarMotor('/planejamento/gerar', { metodo: 'POST', organizacaoId: company!.id, corpo: { mes } });
      toast.success('Planejamento solicitado. Ele aparece aqui em instantes.');
      qc.invalidateQueries({ queryKey: ['planejamento'] });
    } catch (err) { toast.error((err as Error).message); } finally { setGerando(false); }
  };

  const deslocaMes = (delta: number) => {
    const [a, m] = mes.split('-').map(Number);
    setMes(format(new Date(a!, m! - 1 + delta, 1), 'yyyy-MM'));
  };

  if (!company) return <><PageHeader title="Planejamento editorial" /><NeedsCompany /></>;
  return (
    <>
      <PageHeader title="Planejamento editorial" description="Planejamento mensal gerado a partir do perfil da sua empresa." />
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => deslocaMes(-1)}>Anterior</Button>
        <p className="font-medium capitalize text-foreground">{format(new Date(`${mes}-01T12:00:00`), 'MMMM yyyy', { locale: ptBR })}</p>
        <Button variant="ghost" size="sm" onClick={() => deslocaMes(1)}>Próximo</Button>
        {plano.data?.podeGerar && plano.data.estado.agenteAtivo && (
          <Button size="sm" className="rounded-full" disabled={gerando} onClick={gerar}>Gerar o planejamento do mês</Button>
        )}
      </div>
      {plano.isLoading ? null : !itens.length ? (
        <EmptyState title="Nenhum planejamento neste mês" text="O planejamento é gerado a partir do perfil da empresa. Confira o perfil em Empresa e marca." />
      ) : (
        <Tabs defaultValue="lista">
          <TabsList className="rounded-full"><TabsTrigger value="lista" className="rounded-full">Lista</TabsTrigger><TabsTrigger value="calendario" className="rounded-full">Calendário</TabsTrigger></TabsList>
          <TabsContent value="lista" className="mt-6 grid gap-4">
            {itens.map((i) => (
              <Panel key={i.id}>
                <div className="flex flex-wrap justify-between gap-2">
                  <p className="font-medium text-foreground">{i.tema}</p>
                  <span className="text-xs text-muted-foreground">{ESTADO_LABEL[i.estado] ?? i.estado}</span>
                </div>
                <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
                  {[['Formato', i.formato], ['Rede', i.rede], ['Data', fmt(i.dataPrevista)]].map(([k, v]) => <div key={k}><dt className="text-xs text-muted-foreground">{k}</dt><dd className="text-foreground">{v}</dd></div>)}
                </dl>
              </Panel>
            ))}
          </TabsContent>
          <TabsContent value="calendario" className="mt-6">
            <Panel>
              <ul className="divide-y divide-border">
                {[...itens].sort((a, b) => a.dataPrevista.localeCompare(b.dataPrevista)).map((i) => (
                  <li key={i.id} className="py-3 text-sm flex justify-between gap-4"><span className="text-foreground">{i.tema}</span><span className="text-muted-foreground whitespace-nowrap">{fmt(i.dataPrevista)} · {i.rede}</span></li>
                ))}
              </ul>
            </Panel>
          </TabsContent>
        </Tabs>
      )}
    </>
  );
}

/* ---------------- Produção (aprovação) ---------------- */
export function ProductionPage() {
  const { data: company } = useCompany();
  const qc = useQueryClient();
  const conteudos = useQuery({
    queryKey: ['conteudos', company?.id],
    enabled: !!company?.id,
    queryFn: () => chamarMotor<Item[]>('/conteudos', { organizacaoId: company!.id }),
  });
  const [aprovando, setAprovando] = useState<string | null>(null);
  if (!company) return <><PageHeader title="Produção" /><NeedsCompany /></>;

  // Antes de aprovar, busca a versão atual do texto: a aprovação só vale para o hash que a pessoa leu.
  const aprovar = async (id: string) => {
    setAprovando(id);
    try {
      const atual = await chamarMotor<Item & { hash: string | null }>(`/conteudos/${id}`, { organizacaoId: company.id });
      if (!atual.hash) throw new Error('Este conteúdo ainda não está pronto para aprovação.');
      await chamarMotor(`/conteudos/${id}/aprovacao`, { metodo: 'POST', organizacaoId: company.id, corpo: { hash: atual.hash } });
      toast.success('Conteúdo aprovado. Ele será agendado conforme o seu perfil de publicação.');
      qc.invalidateQueries({ queryKey: ['conteudos'] });
    } catch (err) { toast.error((err as Error).message); } finally { setAprovando(null); }
  };

  const list = conteudos.data ?? [];
  return (
    <>
      <PageHeader title="Produção de conteúdo" description="Textos prontos para a sua aprovação, com o status de cada peça." />
      {!list.length ? <EmptyState title="Nenhum conteúdo em produção" text="Os conteúdos aparecem aqui assim que o planejamento do mês for gerado." /> : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((c) => (
            <Panel key={c.id}>
              <div className="flex justify-between text-xs text-muted-foreground"><span>{c.formato} · {c.rede}</span><span>{ESTADO_LABEL[c.estado] ?? c.estado}</span></div>
              <p className="mt-2 font-medium text-foreground">{c.titulo || c.tema}</p>
              {c.legenda && <p className="mt-2 whitespace-pre-line text-sm text-foreground">{c.legenda}</p>}
              {c.hashtags?.length > 0 && <p className="mt-2 text-xs text-muted-foreground">{c.hashtags.join(' ')}</p>}
              <p className="mt-2 text-xs text-muted-foreground">Previsto: {fmt(c.dataPrevista)}</p>
              {c.estado === 'aguardando_aprovacao' && (
                <div className="mt-4">
                  <Button size="sm" className="rounded-full" disabled={aprovando === c.id} onClick={() => aprovar(c.id)}>
                    {aprovando === c.id ? 'Aprovando...' : 'Aprovar'}
                  </Button>
                </div>
              )}
            </Panel>
          ))}
        </div>
      )}
    </>
  );
}

/* ---------------- Redes sociais (contas) ---------------- */
export function ConnectionsPage() {
  const { data: company } = useCompany();
  const contas = useQuery({
    queryKey: ['contas', company?.id],
    enabled: !!company?.id,
    queryFn: () => chamarMotor<Conta[]>('/contas', { organizacaoId: company!.id }),
  });
  const [conectando, setConectando] = useState<string | null>(null);
  if (!company) return <><PageHeader title="Redes sociais" /><NeedsCompany /></>;

  const conectar = async (rede: string) => {
    setConectando(rede);
    try {
      const { url } = await chamarMotor<{ url: string }>('/contas/conectar', { metodo: 'POST', organizacaoId: company.id, corpo: { rede } });
      window.location.href = url;
    } catch (err) { toast.error((err as Error).message); setConectando(null); }
  };

  return (
    <>
      <PageHeader title="Redes sociais" description="Conecte cada rede pela autorização oficial da plataforma. O status abaixo reflete a conexão real." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {REDES.map((n) => {
          const acc = (contas.data ?? []).find((a) => a.rede === n.key);
          return (
            <Panel key={n.key}>
              <p className="font-medium text-foreground">{n.label}</p>
              {acc && acc.status === 'ativa'
                ? <p className="mt-2 text-sm text-foreground">Conectada: {acc.nome}</p>
                : <p className="mt-2 text-sm text-muted-foreground">{acc?.erro ? `Erro: ${acc.erro}` : acc ? `Situação: ${acc.status}` : 'Não conectada'}</p>}
              <div className="mt-4">
                <Button size="sm" variant="outline" className="rounded-full" disabled={conectando === n.key} onClick={() => conectar(n.key)}>
                  {acc ? 'Reconectar' : 'Conectar'}
                </Button>
              </div>
            </Panel>
          );
        })}
      </div>
    </>
  );
}

/* ---------------- Assinatura (somente leitura por enquanto) ---------------- */
export function BillingPage() {
  const { data: company } = useCompany();
  const assinatura = useQuery({
    queryKey: ['assinatura', company?.id],
    enabled: !!company?.id,
    queryFn: () => chamarMotor<Assinatura>('/assinatura', { organizacaoId: company!.id }),
  });
  if (!company) return <NeedsCompany />;
  const uso = assinatura.data?.uso;
  return (
    <>
      <PageHeader title="Assinatura" description="Plano contratado e uso do mês. Alterações de plano e cobrança são feitas pela equipe DesignoAI." />
      <Panel>
        <div className="grid gap-4 sm:grid-cols-3">
          <div><p className="text-xs text-muted-foreground">Plano</p><p className="mt-1 font-medium text-foreground">{assinatura.data?.plano?.nome ?? 'Sem plano ativo'}</p></div>
          <div><p className="text-xs text-muted-foreground">Créditos de produção no mês</p><p className="mt-1 font-medium text-foreground">{assinatura.data?.plano?.creditos_mes ?? 'Não incluído'}</p></div>
          <div><p className="text-xs text-muted-foreground">Créditos usados ou reservados</p><p className="mt-1 font-medium text-foreground">{uso ? uso.usado + uso.reservado : 0}</p></div>
        </div>
      </Panel>
    </>
  );
}
