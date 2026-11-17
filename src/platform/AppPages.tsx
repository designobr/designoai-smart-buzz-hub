import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { useAuth } from './AuthProvider';
import { useCompany } from './useCompany';
import { EmptyState, PageHeader, Panel, PendingBadge } from './AppLayout';
import { NETWORKS, STATUS_LABEL, creditBalance } from './domain';

const fmt = (d?: string | null) => (d ? format(new Date(d), "dd 'de' MMM, HH:mm", { locale: ptBR }) : '');

function useCompanyRows<T>(table: 'editorial_items' | 'contents' | 'social_accounts' | 'subscriptions' | 'credit_ledger' | 'activity_log' | 'automation_jobs', companyId?: string, order = 'created_at') {
  return useQuery({
    queryKey: [table, companyId],
    enabled: !!companyId,
    queryFn: async () => {
      const { data, error } = await supabase.from(table).select('*').eq('company_id', companyId!).order(order, { ascending: false }).limit(500);
      if (error) throw error;
      return data as unknown as T[];
    },
  });
}

function NeedsCompany() {
  return (
    <EmptyState title="Cadastre sua empresa primeiro" text="Precisamos conhecer seu negócio, site e marca para gerar o planejamento e os conteúdos." />
  );
}

/* ---------------- Dashboard ---------------- */
export function DashboardPage() {
  const { data: company, isLoading } = useCompany();
  const id = company?.id;
  const contents = useCompanyRows<any>('contents', id);
  const editorial = useCompanyRows<any>('editorial_items', id);
  const subs = useCompanyRows<any>('subscriptions', id);
  const ledger = useCompanyRows<any>('credit_ledger', id);
  const activity = useCompanyRows<any>('activity_log', id);
  const jobs = useCompanyRows<any>('automation_jobs', id);

  if (isLoading) return null;
  if (!company) return (
    <>
      <PageHeader title="Bem-vindo à DesignoAI" description="Vamos começar pelo cadastro da sua empresa." />
      <Button asChild className="rounded-full"><Link to="/app/empresa">Cadastrar empresa</Link></Button>
    </>
  );

  const c = contents.data || [];
  const sub = subs.data?.[0];
  const upcoming = (editorial.data || []).filter((e) => e.scheduled_for && new Date(e.scheduled_for) > new Date())
    .sort((a, b) => a.scheduled_for.localeCompare(b.scheduled_for)).slice(0, 5);
  const stats = [
    { k: 'Plano', v: sub ? STATUS_LABEL[sub.status] || sub.status : 'Sem assinatura' },
    { k: 'Créditos disponíveis', v: creditBalance(ledger.data || []) },
    { k: 'Conteúdos produzidos', v: c.filter((x) => ['ready', 'approved', 'scheduled', 'published'].includes(x.status)).length },
    { k: 'Publicados', v: c.filter((x) => x.status === 'published').length },
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
          {upcoming.length ? (
            <ul className="mt-4 divide-y divide-border">
              {upcoming.map((u) => <li key={u.id} className="py-3 text-sm flex justify-between gap-4"><span className="text-foreground">{u.theme}</span><span className="text-muted-foreground whitespace-nowrap">{fmt(u.scheduled_for)}</span></li>)}
            </ul>
          ) : <p className="mt-3 text-sm text-muted-foreground">Nenhuma publicação agendada ainda.</p>}
        </Panel>
        <Panel>
          <h2 className="font-medium text-foreground">Tarefas da automação</h2>
          {(jobs.data || []).length ? (
            <ul className="mt-4 divide-y divide-border">
              {jobs.data!.slice(0, 6).map((j) => <li key={j.id} className="py-3 text-sm flex justify-between"><span className="text-foreground">{j.job_type}</span><span className="text-muted-foreground">{STATUS_LABEL[j.status] || j.status}</span></li>)}
            </ul>
          ) : <p className="mt-3 text-sm text-muted-foreground">Nenhuma tarefa em andamento.</p>}
        </Panel>
        <Panel className="lg:col-span-2">
          <h2 className="font-medium text-foreground">Histórico de atividades</h2>
          {(activity.data || []).length ? (
            <ul className="mt-4 divide-y divide-border">
              {activity.data!.slice(0, 10).map((a) => <li key={a.id} className="py-3 text-sm flex justify-between gap-4"><span className="text-foreground">{a.action}</span><span className="text-muted-foreground">{fmt(a.created_at)}</span></li>)}
            </ul>
          ) : <p className="mt-3 text-sm text-muted-foreground">Sem atividades registradas.</p>}
        </Panel>
      </div>
    </>
  );
}

/* ---------------- Company & brand ---------------- */
const FIELDS: { key: string; label: string; long?: boolean; required?: boolean; placeholder?: string }[] = [
  { key: 'name', label: 'Nome da empresa', required: true },
  { key: 'website', label: 'Site oficial', placeholder: 'https://' },
  { key: 'segment', label: 'Segmento' },
  { key: 'description', label: 'Descrição do negócio', long: true },
  { key: 'target_audience', label: 'Público-alvo (se souber)', long: true },
  { key: 'products_services', label: 'Produtos e serviços', long: true },
  { key: 'differentials', label: 'Diferenciais', long: true },
  { key: 'communication_preferences', label: 'Preferências de comunicação', long: true, placeholder: 'Tom de voz, palavras a evitar, estilo...' },
  { key: 'logo_url', label: 'Link do logotipo', placeholder: 'https://' },
];

export function CompanyPage() {
  const { user } = useAuth();
  const qc = useQueryClient();
  const { data: company, isLoading } = useCompany();
  const [form, setForm] = useState<Record<string, string>>({});
  const [colors, setColors] = useState('');
  const [mode, setMode] = useState('assisted');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!company) return;
    const f: Record<string, string> = {};
    FIELDS.forEach(({ key }) => (f[key] = (company as any)[key] || ''));
    setForm(f); setColors((company.brand_colors || []).join(', ')); setMode(company.publishing_mode);
  }, [company]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name?.trim()) return toast.error('Informe o nome da empresa.');
    if (form.website && !/^https?:\/\/.+\..+/.test(form.website)) return toast.error('Informe o site com https://');
    setBusy(true);
    const payload: any = { ...Object.fromEntries(FIELDS.map(({ key }) => [key, (form[key] || '').trim().slice(0, 4000) || null])),
      brand_colors: colors.split(',').map((c) => c.trim()).filter((c) => /^#[0-9a-fA-F]{3,8}$/.test(c)), publishing_mode: mode };
    const res = company
      ? await supabase.from('companies').update(payload).eq('id', company.id)
      : await supabase.from('companies').insert({ ...payload, owner_id: user!.id });
    setBusy(false);
    if (res.error) return toast.error(res.error.message);
    toast.success('Dados salvos.');
    qc.invalidateQueries({ queryKey: ['company'] });
  };

  if (isLoading) return null;
  return (
    <>
      <PageHeader title="Empresa e marca" description="Essas informações orientam a IA no planejamento e na criação dos conteúdos." />
      <form onSubmit={submit} className="space-y-6 max-w-3xl">
        <Panel className="grid gap-5 sm:grid-cols-2">
          {FIELDS.map((f) => (
            <div key={f.key} className={f.long ? 'sm:col-span-2 space-y-2' : 'space-y-2'}>
              <Label htmlFor={f.key}>{f.label}</Label>
              {f.long
                ? <Textarea id={f.key} rows={3} className="rounded-xl" placeholder={f.placeholder} value={form[f.key] || ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} maxLength={4000} />
                : <Input id={f.key} className="h-11 rounded-xl" placeholder={f.placeholder} value={form[f.key] || ''} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} required={f.required} maxLength={500} />}
            </div>
          ))}
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="colors">Cores da marca (hex, separadas por vírgula)</Label>
            <Input id="colors" className="h-11 rounded-xl" placeholder="#111111, #2563EB" value={colors} onChange={(e) => setColors(e.target.value)} />
          </div>
        </Panel>
        <Panel>
          <h2 className="font-medium text-foreground">Modo de publicação</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[{ v: 'assisted', t: 'Assistido', d: 'Cada conteúdo só é publicado após sua aprovação.' }, { v: 'automatic', t: 'Automático', d: 'Publica conforme as regras que você autorizou.' }].map((o) => (
              <button type="button" key={o.v} onClick={() => setMode(o.v)}
                className={`text-left rounded-xl border p-4 transition-colors ${mode === o.v ? 'border-foreground' : 'border-border'}`}>
                <p className="text-sm font-medium text-foreground">{o.t}</p><p className="mt-1 text-xs text-muted-foreground">{o.d}</p>
              </button>
            ))}
          </div>
        </Panel>
        <Panel className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-sm font-medium text-foreground">Análise automática do site</p><p className="text-xs text-muted-foreground">Extrai informações do site informado para completar o perfil.</p></div>
          <PendingBadge>Aguardando integração de IA</PendingBadge>
        </Panel>
        <Button type="submit" disabled={busy} className="rounded-full h-11 px-8">{busy ? 'Salvando...' : company ? 'Salvar alterações' : 'Cadastrar empresa'}</Button>
      </form>
    </>
  );
}

/* ---------------- Editorial planning ---------------- */
export function PlanningPage() {
  const { data: company } = useCompany();
  const items = useCompanyRows<any>('editorial_items', company?.id, 'scheduled_for');
  const [month, setMonth] = useState(() => new Date());
  const byDay = useMemo(() => {
    const m: Record<number, any[]> = {};
    (items.data || []).forEach((i) => {
      if (!i.scheduled_for) return; const d = new Date(i.scheduled_for);
      if (d.getMonth() === month.getMonth() && d.getFullYear() === month.getFullYear()) (m[d.getDate()] ||= []).push(i);
    });
    return m;
  }, [items.data, month]);
  if (!company) return <><PageHeader title="Planejamento editorial" /><NeedsCompany /></>;
  const list = items.data || [];
  const days = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const offset = new Date(month.getFullYear(), month.getMonth(), 1).getDay();

  return (
    <>
      <PageHeader title="Planejamento editorial" description="Planejamento mensal gerado pela IA a partir do perfil da sua empresa." />
      {!list.length ? <EmptyState title="Nenhum planejamento gerado ainda" text="A geração automática começa quando a integração de IA estiver ativa e sua assinatura confirmada." /> : (
        <Tabs defaultValue="list">
          <TabsList className="rounded-full"><TabsTrigger value="list" className="rounded-full">Lista</TabsTrigger><TabsTrigger value="calendar" className="rounded-full">Calendário</TabsTrigger></TabsList>
          <TabsContent value="list" className="mt-6 grid gap-4">
            {list.map((i) => (
              <Panel key={i.id}>
                <div className="flex flex-wrap justify-between gap-2">
                  <p className="font-medium text-foreground">{i.theme}</p>
                  <span className="text-xs text-muted-foreground">{STATUS_LABEL[i.status] || i.status}</span>
                </div>
                <dl className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-3">
                  {[['Pilar', i.pillar], ['Objetivo', i.objective], ['Formato', i.format], ['Rede', i.network], ['Data', fmt(i.scheduled_for)], ['CTA', i.cta]].map(([k, v]) => v ? <div key={k}><dt className="text-xs text-muted-foreground">{k}</dt><dd className="text-foreground">{v}</dd></div> : null)}
                </dl>
                {i.script && <details className="mt-3 text-sm"><summary className="cursor-pointer text-muted-foreground">Roteiro e legenda</summary><p className="mt-2 whitespace-pre-line text-foreground">{i.script}</p><p className="mt-2 whitespace-pre-line text-muted-foreground">{i.caption}</p><p className="mt-2 text-xs text-muted-foreground">{(i.hashtags || []).join(' ')}</p></details>}
              </Panel>
            ))}
          </TabsContent>
          <TabsContent value="calendar" className="mt-6">
            <Panel>
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" size="sm" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}>Anterior</Button>
                <p className="font-medium capitalize text-foreground">{format(month, 'MMMM yyyy', { locale: ptBR })}</p>
                <Button variant="ghost" size="sm" onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}>Próximo</Button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-xs">
                {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => <div key={i} className="text-center text-muted-foreground py-1">{d}</div>)}
                {Array.from({ length: offset }).map((_, i) => <div key={`o${i}`} />)}
                {Array.from({ length: days }).map((_, i) => (
                  <div key={i} className="min-h-20 rounded-lg border border-border p-1.5">
                    <p className="text-muted-foreground">{i + 1}</p>
                    {(byDay[i + 1] || []).map((e) => <p key={e.id} className="mt-1 truncate rounded bg-secondary px-1 text-foreground">{e.theme}</p>)}
                  </div>
                ))}
              </div>
            </Panel>
          </TabsContent>
        </Tabs>
      )}
    </>
  );
}

/* ---------------- Production ---------------- */
export function ProductionPage() {
  const { data: company } = useCompany();
  const qc = useQueryClient();
  const contents = useCompanyRows<any>('contents', company?.id);
  if (!company) return <><PageHeader title="Produção" /><NeedsCompany /></>;
  const approve = async (id: string) => {
    const { error } = await supabase.from('contents').update({ status: 'approved', approved_at: new Date().toISOString() }).eq('id', id);
    if (error) return toast.error(error.message);
    toast.success('Conteúdo aprovado.'); qc.invalidateQueries({ queryKey: ['contents'] });
  };
  const list = contents.data || [];
  return (
    <>
      <PageHeader title="Produção de conteúdo" description="Reels, YouTube Shorts, vídeos verticais, carrosséis e artes estáticas." />
      {!list.length ? <EmptyState title="Nenhum conteúdo em produção" text="Os conteúdos aparecem aqui assim que a produção automática for iniciada." /> : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((c) => (
            <Panel key={c.id} className="p-0 overflow-hidden">
              <div className="aspect-[4/5] bg-secondary grid place-items-center">
                {c.preview_url ? <img src={c.preview_url} alt={c.title || c.format} className="h-full w-full object-cover" loading="lazy" /> : <span className="text-xs text-muted-foreground">Prévia indisponível</span>}
              </div>
              <div className="p-5">
                <div className="flex justify-between text-xs text-muted-foreground"><span>{c.format}</span><span>{STATUS_LABEL[c.status] || c.status}</span></div>
                <p className="mt-2 font-medium text-foreground">{c.title || 'Sem título'}</p>
                {c.due_at && <p className="mt-1 text-xs text-muted-foreground">Previsto: {fmt(c.due_at)}</p>}
                <p className="mt-1 text-xs text-muted-foreground">Versão {c.version}</p>
                <div className="mt-4 flex gap-2">
                  {c.file_url && <Button asChild size="sm" variant="outline" className="rounded-full"><a href={c.file_url} target="_blank" rel="noreferrer">Arquivo final</a></Button>}
                  {company.publishing_mode === 'assisted' && c.status === 'ready' && <Button size="sm" className="rounded-full" onClick={() => approve(c.id)}>Aprovar</Button>}
                </div>
              </div>
            </Panel>
          ))}
        </div>
      )}
    </>
  );
}

/* ---------------- Social connections ---------------- */
export function ConnectionsPage() {
  const { data: company } = useCompany();
  const accounts = useCompanyRows<any>('social_accounts', company?.id);
  const contents = useCompanyRows<any>('contents', company?.id);
  if (!company) return <><PageHeader title="Redes sociais" /><NeedsCompany /></>;
  const published = (contents.data || []).filter((c) => c.status === 'published');
  return (
    <>
      <PageHeader title="Redes sociais" description="Conexões feitas pelos acessos oficiais de cada plataforma. Os status abaixo refletem apenas dados reais." />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {NETWORKS.map((n) => {
          const acc = (accounts.data || []).find((a) => a.platform === n.key);
          return (
            <Panel key={n.key}>
              <p className="font-medium text-foreground">{n.label}</p>
              {acc && acc.status === 'connected'
                ? <p className="mt-2 text-sm text-foreground">Conectado: {acc.account_name}</p>
                : <p className="mt-2 text-sm text-muted-foreground">{acc?.status === 'error' ? `Erro: ${acc.last_error}` : 'Não conectado'}</p>}
              <div className="mt-4"><PendingBadge>Conexão oficial em preparação</PendingBadge></div>
            </Panel>
          );
        })}
      </div>
      <Panel className="mt-6">
        <h2 className="font-medium text-foreground">Publicações concluídas</h2>
        {published.length ? (
          <ul className="mt-4 divide-y divide-border">
            {published.map((p) => <li key={p.id} className="py-3 text-sm flex justify-between gap-4"><span className="text-foreground">{p.title} · {p.network}</span>{p.published_url && <a href={p.published_url} target="_blank" rel="noreferrer" className="underline text-foreground">Ver</a>}</li>)}
          </ul>
        ) : <p className="mt-3 text-sm text-muted-foreground">Nenhuma publicação realizada ainda.</p>}
      </Panel>
    </>
  );
}

/* ---------------- Subscription ---------------- */
const brl = (cents?: number | null, cur = 'BRL') => ((cents || 0) / 100).toLocaleString('pt-BR', { style: 'currency', currency: cur });
const PAY_LABEL: Record<string, string> = {
  PENDING: 'Aguardando pagamento', RECEIVED: 'Pago', CONFIRMED: 'Confirmado', RECEIVED_IN_CASH: 'Pago', OVERDUE: 'Vencido',
  REFUNDED: 'Estornado', REFUND_REQUESTED: 'Estorno solicitado', CHARGEBACK_REQUESTED: 'Contestação', CHARGEBACK_DISPUTE: 'Contestação em disputa',
  AWAITING_CHARGEBACK_REVERSAL: 'Contestação em análise', DELETED: 'Removida',
};
const METHOD_LABEL: Record<string, string> = { CREDIT_CARD: 'Cartão de crédito', PIX: 'Pix', BOLETO: 'Boleto', UNDEFINED: 'A escolher' };
const day = (d?: string | null) => (d ? format(new Date(d.length === 10 ? `${d}T12:00:00` : d), 'dd/MM/yyyy') : '');

async function callFn(name: string, body: unknown) {
  const { data, error } = await supabase.functions.invoke(name, { body });
  if (error) {
    let msg = error.message;
    try { const ctx = await (error as any).context?.json?.(); if (ctx?.error) msg = typeof ctx.error === 'string' ? ctx.error : 'Dados inválidos.'; } catch { /* keep message */ }
    throw new Error(msg);
  }
  return data;
}

export function BillingPage() {
  const qc = useQueryClient();
  const { data: company } = useCompany();
  const subs = useCompanyRows<any>('subscriptions', company?.id);
  const ledger = useCompanyRows<any>('credit_ledger', company?.id);
  const plans = useQuery({ queryKey: ['plans'], queryFn: async () => (await supabase.from('plans').select('*').eq('is_active', true).order('sort_order')).data || [] });
  const payments = useQuery({
    queryKey: ['billing_payments', company?.id], enabled: !!company?.id,
    queryFn: async () => (await supabase.from('billing_payments').select('*').eq('company_id', company!.id).order('due_date', { ascending: false })).data || [],
  });
  const changes = useQuery({
    queryKey: ['subscription_changes', company?.id], enabled: !!company?.id,
    queryFn: async () => (await supabase.from('subscription_changes').select('*').eq('company_id', company!.id).eq('status', 'notified')).data || [],
  });
  const [plan, setPlan] = useState<string | null>(null);
  const [method, setMethod] = useState<'PIX' | 'BOLETO' | 'CREDIT_CARD'>('PIX');
  const [doc, setDoc] = useState('');
  const [busy, setBusy] = useState(false);

  if (!company) return <NeedsCompany />;
  const sub = (subs.data || []).find((s) => ['pending', 'active', 'past_due', 'suspended'].includes(s.status)) || subs.data?.[0];
  const open = sub && ['pending', 'active', 'past_due', 'suspended'].includes(sub.status);
  const balance = creditBalance(ledger.data || []);
  const refresh = () => ['subscriptions', 'billing_payments', 'credit_ledger', 'subscription_changes'].forEach((k) => qc.invalidateQueries({ queryKey: [k] }));

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    const digits = doc.replace(/\D/g, '');
    if (!plan) return toast.error('Escolha um plano.');
    if (digits.length !== 11 && digits.length !== 14) return toast.error('Informe um CPF ou CNPJ válido.');
    setBusy(true);
    try {
      const res = await callFn('asaas-create-subscription', { plan_slug: plan, billing_type: method, cpf_cnpj: digits });
      toast.success('Assinatura criada. O acesso é liberado assim que o pagamento for confirmado.');
      if (res?.invoice_url) window.open(res.invoice_url, '_blank', 'noopener');
      refresh();
    } catch (err: any) { toast.error(err.message); } finally { setBusy(false); }
  };
  const manage = async (body: any, ok?: string) => {
    setBusy(true);
    try {
      const res = await callFn('asaas-manage-subscription', body);
      if (res?.invoice_url) window.open(res.invoice_url, '_blank', 'noopener');
      else if (body.action === 'pending_invoice') toast.message('Nenhuma cobrança em aberto.');
      if (ok) toast.success(res?.message || ok);
      refresh();
    } catch (err: any) { toast.error(err.message); } finally { setBusy(false); }
  };
  const respond = async (id: string, accept: boolean) => {
    const { error } = await supabase.rpc('respond_subscription_change' as any, { _change: id, _accept: accept });
    if (error) return toast.error(error.message);
    toast.success(accept ? 'Concordância registrada.' : 'Recusa registrada. Seu contrato atual continua.');
    refresh();
  };

  return (
    <>
      <PageHeader title="Assinatura" description="Pagamentos processados pelo Asaas. O acesso é liberado apenas após a confirmação do pagamento." />
      {sub?.environment === 'sandbox' && <p className="mb-4 text-xs text-muted-foreground">Ambiente de testes: nenhuma cobrança real é feita.</p>}

      {(changes.data || []).map((c: any) => (
        <Panel key={c.id} className="mb-6">
          <p className="font-medium text-foreground">Proposta de alteração do seu contrato</p>
          <p className="mt-2 text-sm text-muted-foreground">{c.reason}</p>
          <p className="mt-2 text-sm text-foreground">Mensalidade: {brl(c.old_price_cents)} para {brl(c.new_price_cents)} · a partir de {day(c.effective_date)}</p>
          <div className="mt-4 flex gap-2">
            <Button className="rounded-full" onClick={() => respond(c.id, true)}>Concordo</Button>
            <Button variant="outline" className="rounded-full" onClick={() => respond(c.id, false)}>Não concordo</Button>
          </div>
        </Panel>
      ))}

      {open ? (
        <Panel className="mb-6">
          <div className="grid gap-4 sm:grid-cols-4">
            <div><p className="text-xs text-muted-foreground">Plano</p><p className="mt-1 font-medium text-foreground">{sub.contracted_limits?.plan_name}</p></div>
            <div><p className="text-xs text-muted-foreground">Status</p><p className="mt-1 font-medium text-foreground">{STATUS_LABEL[sub.status] || sub.status}</p></div>
            <div><p className="text-xs text-muted-foreground">Mensalidade contratada</p><p className="mt-1 font-medium text-foreground">{brl(sub.price_cents, sub.currency)}</p></div>
            <div><p className="text-xs text-muted-foreground">Créditos disponíveis</p><p className="mt-1 font-medium text-foreground">{balance}</p></div>
          </div>
          {sub.current_period_end && <p className="mt-4 text-sm text-muted-foreground">Período pago até {day(sub.current_period_end)}{sub.billing_type ? ` · ${METHOD_LABEL[sub.billing_type] || sub.billing_type}` : ''}</p>}
          {sub.status === 'pending' && <p className="mt-4 text-sm text-foreground">Aguardando a confirmação do primeiro pagamento.</p>}
          {sub.status === 'past_due' && <p className="mt-4 text-sm text-foreground">Há uma cobrança vencida. A produção fica pausada até o pagamento.</p>}
          {sub.status === 'suspended' && <p className="mt-4 text-sm text-foreground">Assinatura suspensa por estorno ou contestação. Fale com a DesignoAI.</p>}
          <div className="mt-6 flex flex-wrap gap-2">
            <Button className="rounded-full" disabled={busy} onClick={() => manage({ action: 'pending_invoice' })}>Pagar cobrança em aberto</Button>
            <select aria-label="Forma de pagamento" className="rounded-full border border-border bg-background px-4 text-sm" disabled={busy}
              value={sub.billing_type || ''} onChange={(e) => manage({ action: 'change_billing_type', billing_type: e.target.value }, 'Forma de pagamento alterada.')}>
              {['PIX', 'BOLETO', 'CREDIT_CARD'].map((m) => <option key={m} value={m}>{METHOD_LABEL[m]}</option>)}
            </select>
            <Button variant="ghost" className="rounded-full" disabled={busy}
              onClick={() => { if (confirm('Cancelar a assinatura? O acesso continua até o fim do período pago.')) manage({ action: 'cancel' }, 'Cancelamento solicitado.'); }}>Cancelar assinatura</Button>
          </div>
        </Panel>
      ) : (
        <form onSubmit={subscribe} className="mb-6">
          {sub?.status === 'canceled' && sub.current_period_end && new Date(sub.current_period_end) > new Date() &&
            <p className="mb-4 text-sm text-foreground">Assinatura cancelada. Seu acesso continua até {day(sub.current_period_end)}.</p>}
          <div className="grid gap-4 md:grid-cols-3">
            {(plans.data || []).map((p: any) => (
              <button type="button" key={p.id} onClick={() => setPlan(p.slug)} className="text-left">
                <Panel className={plan === p.slug ? 'border-foreground' : ''}>
                  <p className="font-medium text-foreground">{p.name}</p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{brl(p.price_cents, p.currency)}<span className="text-sm font-normal text-muted-foreground">/mês</span></p>
                  {p.description && <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>}
                  <ul className="mt-4 space-y-1 text-sm text-foreground">
                    <li>{p.monthly_videos} vídeos por mês</li><li>{p.monthly_carousels} carrosséis por mês</li>
                    <li>{p.monthly_static} posts estáticos por mês</li><li>{p.posts_per_week} publicações por semana</li><li>{p.monthly_credits} créditos por mês</li>
                  </ul>
                </Panel>
              </button>
            ))}
          </div>
          <Panel className="mt-4 grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
            <div className="space-y-1.5"><Label htmlFor="doc">CPF ou CNPJ</Label><Input id="doc" className="rounded-xl" inputMode="numeric" value={doc} onChange={(e) => setDoc(e.target.value)} maxLength={18} /></div>
            <div className="space-y-1.5"><Label htmlFor="method">Forma de pagamento</Label>
              <select id="method" className="h-10 w-full rounded-xl border border-border bg-background px-3 text-sm" value={method} onChange={(e) => setMethod(e.target.value as any)}>
                {['PIX', 'BOLETO', 'CREDIT_CARD'].map((m) => <option key={m} value={m}>{METHOD_LABEL[m]}</option>)}
              </select></div>
            <Button type="submit" className="rounded-full" disabled={busy || !plan}>Assinar</Button>
          </Panel>
        </form>
      )}

      <Panel>
        <p className="font-medium text-foreground">Histórico de cobranças</p>
        {(payments.data || []).length ? (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="text-left text-xs text-muted-foreground"><th className="py-2 pr-4 font-normal">Vencimento</th><th className="py-2 pr-4 font-normal">Valor</th><th className="py-2 pr-4 font-normal">Forma</th><th className="py-2 pr-4 font-normal">Status</th><th className="py-2 font-normal">Fatura</th></tr></thead>
              <tbody className="divide-y divide-border">
                {payments.data!.map((p: any) => (
                  <tr key={p.id}><td className="py-3 pr-4 text-foreground">{day(p.due_date)}</td><td className="py-3 pr-4 text-foreground">{brl(p.value_cents)}</td>
                    <td className="py-3 pr-4 text-foreground">{METHOD_LABEL[p.billing_type] || p.billing_type}</td><td className="py-3 pr-4 text-foreground">{PAY_LABEL[p.status] || p.status}</td>
                    <td className="py-3">{p.invoice_url && <a href={p.invoice_url} target="_blank" rel="noreferrer" className="underline text-foreground">Abrir</a>}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : <p className="mt-3 text-sm text-muted-foreground">Nenhuma cobrança registrada ainda.</p>}
      </Panel>
    </>
  );
}
