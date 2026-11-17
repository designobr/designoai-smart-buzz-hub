// Telas do cliente em /app. Todos os dados vêm da API v1 do motor (src/platform/motor.ts); nada é lido direto de tabelas.
import { useEffect, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { useAuth } from './AuthProvider';
import { useMotor } from './useCompany';
import { EmptyState, PageHeader, Panel } from './AppLayout';
import {
  api, enviarImagem, enviarVideo, reais, REDES, type AssinaturaApi, type Conta, type Conteudo, type Consumo, type Item, type Negocio, type Planejamento, type Rede,
} from './motor';

const dia = (d?: string | null) => (d ? format(new Date(`${d.slice(0, 10)}T12:00:00`), "dd 'de' MMM", { locale: ptBR }) : '');
const quando = (d?: string | null) => (d ? format(new Date(d), 'dd/MM/yyyy', { locale: ptBR }) : '');
const nomeRede = (k: string) => REDES.find((r) => r.key === k)?.label ?? k;

export const ESTADO_ROTULO: Record<string, string> = {
  planejado: 'Planejado', em_producao: 'Em produção', aguardando_creditos: 'Aguardando créditos', aguardando_midia: 'Aguardando mídia',
  aguardando_aprovacao: 'Aguardando aprovação', alteracao_solicitada: 'Alteração solicitada', aprovado: 'Aprovado', agendado: 'Agendado',
  publicado: 'Publicado', falhou: 'Falhou', cancelado: 'Cancelado',
  ativa: 'Ativa', pendente: 'Pendente', inadimplente: 'Inadimplente', cancelada: 'Cancelada', suspensa: 'Suspensa',
};
const rotulo = (e: string) => ESTADO_ROTULO[e] ?? e;

const GRUPOS = [
  { titulo: 'Aguardando a sua aprovação', estados: ['aguardando_aprovacao'] },
  { titulo: 'Alteração em andamento', estados: ['alteracao_solicitada'] },
  { titulo: 'Em produção', estados: ['planejado', 'em_producao', 'aguardando_midia', 'aguardando_creditos'] },
  { titulo: 'Aprovados e agendados', estados: ['aprovado', 'agendado'] },
  { titulo: 'Publicados', estados: ['publicado'] },
  { titulo: 'Com problema ou cancelados', estados: ['falhou', 'cancelado'] },
];

function Carregando({ erro }: { erro?: Error | null }) {
  return erro ? <p role="alert" className="text-sm text-destructive">{erro.message}</p> : <p className="text-sm text-muted-foreground">Carregando…</p>;
}

function AvisoAgente({ estado }: { estado?: { agenteAtivo: boolean; provedor: string } }) {
  if (!estado || (estado.agenteAtivo && estado.provedor !== 'desligado')) return null;
  return (
    <p className="mb-6 rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted-foreground">
      A geração automática de textos ainda não está ligada nesta plataforma. Você pode cadastrar a empresa e ver o planejamento, mas os conteúdos só são produzidos depois que a administração ativar o agente.
    </p>
  );
}

/* ---------------- Painel ---------------- */
export function DashboardPage() {
  const { org } = useAuth();
  const consumo = useMotor<Consumo>('/consumo');
  const plano = useMotor<Planejamento>('/planejamento');
  const contas = useMotor<Conta[]>('/contas');
  const negocio = useMotor<{ negocio: Negocio | null }>('/negocio');
  const assin = useMotor<AssinaturaApi>('/assinatura');
  const pubs = useMotor<{ id: string; rede: string; status: string; agendadaPara: string; publicadoEm: string | null; url: string | null; erro: string | null }[]>('/publicacoes');
  const avisos = useMotor<{ id: number; mensagem: string; criadaEm: string | null; lida: boolean }[]>('/notificacoes');

  if (negocio.isLoading) return null;
  const semEmpresa = !negocio.data?.negocio;
  const itens = plano.data?.itens ?? [];
  const aprovar = itens.filter((i) => i.estado === 'aguardando_aprovacao').length;
  const proximos = itens.filter((i) => ['aprovado', 'agendado', 'planejado'].includes(i.estado) && i.dataPrevista >= (plano.data?.hoje ?? '')).slice(0, 5);
  return (
    <>
      <PageHeader title={`Olá${org ? `, ${org.nome}` : ''}`} description="Resumo do seu planejamento, créditos e redes conectadas." />
      <AvisoAgente estado={consumo.data?.estado} />
      {semEmpresa && (
        <Panel className="mb-6">
          <p className="font-medium">Cadastre sua empresa</p>
          <p className="mt-1 text-sm text-muted-foreground">Precisamos conhecer o seu negócio para gerar o planejamento e os conteúdos.</p>
          <Button asChild className="mt-4 rounded-full"><Link to="/app/empresa">Cadastrar empresa</Link></Button>
        </Panel>
      )}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Panel><p className="text-xs text-muted-foreground">Publicações no mês</p><p className="mt-1 text-2xl font-semibold">{assin.data ? `${(assin.data.uso?.usado ?? 0) + (assin.data.uso?.reservado ?? 0)}${assin.data.plano?.limitePublicacoesMes != null ? ` de ${assin.data.plano.limitePublicacoesMes}` : ''}` : '–'}</p></Panel>
        <Panel><p className="text-xs text-muted-foreground">Aguardando sua aprovação</p><p className="mt-1 text-2xl font-semibold">{aprovar}</p></Panel>
        <Panel><p className="text-xs text-muted-foreground">Peças no mês</p><p className="mt-1 text-2xl font-semibold">{itens.length}</p></Panel>
        <Panel><p className="text-xs text-muted-foreground">Redes conectadas</p><p className="mt-1 text-2xl font-semibold">{(contas.data ?? []).filter((c) => c.status === 'conectada').length}</p></Panel>
      </div>
      <Panel className="mt-6">
        <h2 className="font-medium">Próximas publicações</h2>
        {proximos.length === 0 ? <p className="mt-2 text-sm text-muted-foreground">Nada previsto por enquanto.</p> : (
          <ul className="mt-3 divide-y divide-border text-sm">
            {proximos.map((i) => <li key={i.id} className="flex justify-between gap-3 py-2"><span>{dia(i.dataPrevista)} · {nomeRede(i.rede)} · {i.tema}</span><span className="text-muted-foreground">{rotulo(i.estado)}</span></li>)}
          </ul>
        )}
      </Panel>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Panel>
          <h2 className="font-medium">Publicações recentes</h2>
          {(pubs.data ?? []).length === 0 ? <p className="mt-2 text-sm text-muted-foreground">Nenhuma publicação ainda.</p> : (
            <ul className="mt-3 divide-y divide-border text-sm">
              {(pubs.data ?? []).slice(0, 8).map((p) => (
                <li key={p.id} className="flex flex-wrap justify-between gap-2 py-2">
                  <span>{nomeRede(p.rede)} · {quando(p.publicadoEm ?? p.agendadaPara)}{p.url ? <> · <a href={p.url} target="_blank" rel="noreferrer" className="underline underline-offset-4">ver</a></> : null}</span>
                  <span className={p.status === 'falhou' ? 'text-destructive' : 'text-muted-foreground'}>{PUB_ROTULO[p.status] ?? p.status}</span>
                </li>
              ))}
            </ul>
          )}
        </Panel>
        <Panel>
          <h2 className="font-medium">Avisos</h2>
          {(avisos.data ?? []).length === 0 ? <p className="mt-2 text-sm text-muted-foreground">Nenhum aviso.</p> : (
            <ul className="mt-3 divide-y divide-border text-sm">
              {(avisos.data ?? []).slice(0, 8).map((a) => <li key={a.id} className="py-2"><span className={a.lida ? 'text-muted-foreground' : ''}>{a.mensagem}</span>{a.criadaEm ? <span className="ml-2 text-xs text-muted-foreground">{quando(a.criadaEm)}</span> : null}</li>)}
            </ul>
          )}
        </Panel>
      </div>
    </>
  );
}

const PUB_ROTULO: Record<string, string> = { agendada: 'Agendada', em_execucao: 'Publicando', publicada: 'Publicada', falhou: 'Falhou', cancelada: 'Cancelada', pendente_reconciliacao: 'Em verificação' };

/* ---------------- Empresa e marca ---------------- */
const lista = (t: string) => t.split(/[\n,;]+/).map((s) => s.trim()).filter(Boolean);
const texto = (l?: string[]) => (l ?? []).join('\n');

export function CompanyPage() {
  const { orgId } = useAuth();
  const qc = useQueryClient();
  const q = useMotor<{ negocio: Negocio | null; versao: number | null }>('/negocio');
  const [f, setF] = useState({ nomeFantasia: '', segmento: '', descricao: '', publicoAlvo: '', tomDeVoz: '', siteUrl: '', observacoes: '', objetivos: '', diferenciais: '', produtos: '', regioes: '', palavrasEvitar: '' });
  const [redes, setRedes] = useState<Rede[]>([]);
  const [freq, setFreq] = useState<Partial<Record<Rede, string>>>({});
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const n = q.data?.negocio; if (!n) return;
    setF({ nomeFantasia: n.nomeFantasia, segmento: n.segmento, descricao: n.descricao, publicoAlvo: n.publicoAlvo, tomDeVoz: n.tomDeVoz, siteUrl: n.siteUrl, observacoes: n.observacoes,
      objetivos: texto(n.objetivos), diferenciais: texto(n.diferenciais), produtos: texto(n.produtos), regioes: texto(n.regioes), palavrasEvitar: texto(n.palavrasEvitar) });
    setRedes(n.redes);
    setFreq(Object.fromEntries(Object.entries(n.frequenciaSemanal).map(([k, v]) => [k, String(v)])));
  }, [q.data]);

  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF((p) => ({ ...p, [k]: e.target.value }));
  const alternar = (r: Rede) => setRedes((p) => (p.includes(r) ? p.filter((x) => x !== r) : [...p, r]));

  const salvar = async (e: FormEvent) => {
    e.preventDefault(); setBusy(true);
    const dados = {
      nomeFantasia: f.nomeFantasia, segmento: f.segmento, descricao: f.descricao, publicoAlvo: f.publicoAlvo, tomDeVoz: f.tomDeVoz, siteUrl: f.siteUrl, observacoes: f.observacoes,
      objetivos: lista(f.objetivos), diferenciais: lista(f.diferenciais), produtos: lista(f.produtos), regioes: lista(f.regioes), palavrasEvitar: lista(f.palavrasEvitar),
      redes, frequenciaSemanal: Object.fromEntries(redes.filter((r) => freq[r] !== undefined && freq[r] !== '').map((r) => [r, Number(freq[r])])),
    };
    try {
      await api('/negocio', { method: 'PUT', org: orgId, body: { dados, versao: q.data?.versao ?? null } });
      await qc.invalidateQueries({ queryKey: ['motor', orgId] });
      toast.success('Empresa salva.');
    } catch (err) { toast.error((err as Error).message); } finally { setBusy(false); }
  };

  if (q.isLoading || q.error) return <Carregando erro={q.error as Error | null} />;
  return (
    <>
      <PageHeader title="Empresa e marca" description="Quanto melhor a descrição, melhores serão os textos e o planejamento." />
      <form onSubmit={salvar} className="max-w-3xl space-y-6">
        <Panel className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="n1">Nome da empresa</Label><Input id="n1" value={f.nomeFantasia} onChange={set('nomeFantasia')} maxLength={120} required /></div>
            <div className="space-y-2"><Label htmlFor="n2">Segmento</Label><Input id="n2" value={f.segmento} onChange={set('segmento')} maxLength={120} required /></div>
          </div>
          <div className="space-y-2"><Label htmlFor="n3">Descreva o negócio</Label><Textarea id="n3" value={f.descricao} onChange={set('descricao')} rows={4} maxLength={2000} required /><p className="text-xs text-muted-foreground">Pelo menos 20 caracteres.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2"><Label htmlFor="n4">Público-alvo</Label><Input id="n4" value={f.publicoAlvo} onChange={set('publicoAlvo')} /></div>
            <div className="space-y-2"><Label htmlFor="n5">Tom de voz</Label><Input id="n5" value={f.tomDeVoz} onChange={set('tomDeVoz')} placeholder="Ex.: próximo, descontraído" /></div>
          </div>
          <div className="space-y-2"><Label htmlFor="n6">Site</Label><Input id="n6" value={f.siteUrl} onChange={set('siteUrl')} placeholder="https://" /></div>
        </Panel>
        <Panel className="grid gap-4 sm:grid-cols-2">
          {([['objetivos', 'Objetivos'], ['diferenciais', 'Diferenciais'], ['produtos', 'Produtos e serviços'], ['regioes', 'Regiões atendidas'], ['palavrasEvitar', 'Palavras a evitar']] as const).map(([k, rot]) => (
            <div key={k} className="space-y-2"><Label htmlFor={`l-${k}`}>{rot}</Label><Textarea id={`l-${k}`} value={f[k]} onChange={set(k)} rows={3} placeholder="Um por linha" /></div>
          ))}
          <div className="space-y-2"><Label htmlFor="n7">Observações</Label><Textarea id="n7" value={f.observacoes} onChange={set('observacoes')} rows={3} /></div>
        </Panel>
        <Panel>
          <p className="mb-3 text-sm font-medium">Redes sociais e publicações por semana</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {REDES.map((r) => (
              <div key={r.key} className="flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-2">
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={redes.includes(r.key)} onChange={() => alternar(r.key)} />{r.label}</label>
                {redes.includes(r.key) && <Input aria-label={`Publicações por semana no ${r.label}`} type="number" min={0} max={14} className="h-9 w-20" value={freq[r.key] ?? ''} onChange={(e) => setFreq((p) => ({ ...p, [r.key]: e.target.value }))} placeholder="padrão" />}
              </div>
            ))}
          </div>
        </Panel>
        <Button type="submit" disabled={busy} className="rounded-full">Salvar empresa</Button>
      </form>
    </>
  );
}

/* ---------------- Planejamento ---------------- */
export function PlanningPage() {
  const { orgId } = useAuth();
  const qc = useQueryClient();
  const [mes, setMes] = useState(() => new Date().toISOString().slice(0, 7));
  // Enquanto há tarefas do agente em andamento ou peças sendo produzidas, a tela se atualiza sozinha.
  const q = useMotor<Planejamento>(`/planejamento?mes=${mes}`, { refetchInterval: (d) => (d && (d.pendentes > 0 || d.itens.some((i) => i.estado === 'em_producao')) ? 5000 : false) });
  const [busy, setBusy] = useState(false);
  const gerar = async (refazer = false) => {
    if (refazer && !window.confirm('Refazer o planejamento do mês? As peças que já estão em produção são preservadas.')) return;
    setBusy(true);
    try { await api(refazer ? '/planejamento/refazer' : '/planejamento/gerar', { org: orgId, body: { mes } }); toast.success('Planejamento pedido. Ele aparece aqui em instantes.'); await qc.invalidateQueries({ queryKey: ['motor', orgId] }); }
    catch (err) { toast.error((err as Error).message); } finally { setBusy(false); }
  };
  const d = q.data;
  return (
    <>
      <PageHeader title="Planejamento" description="Calendário de conteúdos do mês, por rede." />
      <div className="mb-6 flex flex-wrap items-end gap-3">
        <div className="space-y-2"><Label htmlFor="mes">Mês</Label><Input id="mes" type="month" value={mes} onChange={(e) => e.target.value && setMes(e.target.value)} className="h-10 w-44" /></div>
        {d?.podeGerar && <Button onClick={() => gerar()} disabled={busy || d.pendentes > 0} className="rounded-full">Gerar planejamento</Button>}
        {d?.podeRefazer && <Button variant="outline" onClick={() => gerar(true)} disabled={busy || d.pendentes > 0} className="rounded-full">Refazer planejamento</Button>}
      </div>
      {q.isLoading || q.error ? <Carregando erro={q.error as Error | null} /> : d && (
        <>
          <AvisoAgente estado={d.estado} />
          {d.pendentes > 0 && <p role="status" className="mb-6 rounded-xl border border-border bg-background px-4 py-3 text-sm">O agente está trabalhando no seu planejamento ({d.pendentes} tarefa{d.pendentes === 1 ? '' : 's'} em andamento). Esta tela se atualiza sozinha.</p>}
          {d.plano && (
            <Panel className="mb-6">
              {d.plano.resumo && <p className="text-sm">{d.plano.resumo}</p>}
              {d.plano.pilares.length > 0 && <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">{d.plano.pilares.map((p) => <li key={p.nome}><span className="font-medium">{p.nome}</span>: <span className="text-muted-foreground">{p.descricao}</span></li>)}</ul>}
            </Panel>
          )}
          {d.itens.length === 0 ? (
            <EmptyState title="Nenhuma peça neste mês" text={d.podeGerar ? 'Use "Gerar planejamento" para criar o calendário do mês.' : 'Cadastre a empresa e aguarde a ativação do agente para gerar o planejamento.'} />
          ) : (
            <Panel>
              <ul className="divide-y divide-border text-sm">
                {d.itens.map((i) => (
                  <li key={i.id} className="flex flex-wrap justify-between gap-2 py-2.5">
                    <span><span className="text-muted-foreground">{dia(i.dataPrevista)}</span> · {nomeRede(i.rede)} · {i.tema}</span>
                    <span className="text-muted-foreground">{rotulo(i.estado)}</span>
                  </li>
                ))}
              </ul>
            </Panel>
          )}
          {d.falhas.length > 0 && (
            <Panel className="mt-4 border-destructive/40">
              <p className="text-sm font-medium text-destructive">{d.falhas.length} tarefa(s) do agente com problema</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">{d.falhas.map((f) => <li key={f.id}>{f.erroMensagem ?? 'Falha sem detalhe.'}</li>)}</ul>
              {d.podeRefazer && <p className="mt-2 text-xs text-muted-foreground">Use "Refazer planejamento" para tentar de novo. Créditos reservados em tarefas que falham são devolvidos.</p>}
            </Panel>
          )}
        </>
      )}
    </>
  );
}

/* ---------------- Produção (revisão e aprovação) ---------------- */
function Detalhe({ id, onClose }: { id: string; onClose: () => void }) {
  const { orgId } = useAuth();
  const qc = useQueryClient();
  const q = useMotor<Conteudo>(`/conteudos/${id}`, { refetchInterval: (d) => (d && ['em_producao', 'alteracao_solicitada'].includes(d.item.estado) ? 5000 : false) });
  const [pedido, setPedido] = useState('');
  const [escolhidas, setEscolhidas] = useState<string[]>([]);
  const [pct, setPct] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const refrescar = () => qc.invalidateQueries({ queryKey: ['motor', orgId] });
  const c = q.data;
  const aprovar = async () => {
    if (!c?.hash) return; setBusy(true);
    try { await api(`/conteudos/${id}/aprovacao`, { org: orgId, body: { hash: c.hash } }); toast.success('Conteúdo aprovado.'); await refrescar(); }
    catch (e) { toast.error((e as Error).message); } finally { setBusy(false); }
  };
  const alterar = async () => {
    setBusy(true);
    try { await api(`/conteudos/${id}/alteracao`, { org: orgId, body: { pedido } }); toast.success('Pedido de alteração enviado.'); setPedido(''); await refrescar(); }
    catch (e) { toast.error((e as Error).message); } finally { setBusy(false); }
  };
  const enviar = async (arquivo: File | undefined) => {
    if (!arquivo || !orgId) return; setBusy(true); setPct(0);
    try {
      const r = arquivo.type.startsWith('video/') ? await enviarVideo(orgId, arquivo, setPct) : await enviarImagem(orgId, arquivo);
      if (r.status !== 'aprovada_tecnicamente') toast.error(`A mídia não passou na validação: ${(r.erros as string[]).join('; ') || 'formato não aceito'}`);
      else { toast.success('Mídia enviada e validada.'); setEscolhidas((p) => [...p, r.id]); }
      setBusy(false); setPct(null); void refrescar();
    } catch (e) { toast.error((e as Error).message); } finally { setBusy(false); setPct(null); }
  };
  const anexar = async () => {
    setBusy(true);
    try { await api(`/conteudos/${id}/midias`, { org: orgId, body: { midiaIds: escolhidas } }); toast.success('Mídia anexada. O conteúdo segue para a produção.'); setEscolhidas([]); await refrescar(); }
    catch (e) { toast.error((e as Error).message); } finally { setBusy(false); }
  };
  const alternarMidia = (m: string) => setEscolhidas((p) => (p.includes(m) ? p.filter((x) => x !== m) : [...p, m]));
  return (
    <Panel className="mb-6">
      <div className="flex items-start justify-between gap-3"><h2 className="font-medium">{c?.item.titulo ?? c?.item.tema ?? 'Conteúdo'}</h2><button onClick={onClose} className="text-sm text-muted-foreground">Fechar</button></div>
      {q.isLoading || q.error ? <Carregando erro={q.error as Error | null} /> : c && (
        <div className="mt-3 space-y-4 text-sm">
          <p className="text-muted-foreground">{nomeRede(c.item.rede)} · {dia(c.item.dataPrevista)} · {rotulo(c.item.estado)}</p>
          {c.item.roteiro && <div><p className="font-medium">Roteiro</p><p className="whitespace-pre-wrap">{c.item.roteiro}</p></div>}
          {c.item.legenda && <div><p className="font-medium">Legenda</p><p className="whitespace-pre-wrap">{c.item.legenda}</p>{c.item.hashtags.length > 0 && <p className="mt-1 text-muted-foreground">{c.item.hashtags.map((h) => `#${h.replace(/^#/, '')}`).join(' ')}</p>}</div>}
          {c.item.estado === 'em_producao' && <p role="status" className="text-muted-foreground">O agente está produzindo este conteúdo. A tela se atualiza sozinha.</p>}
          {c.item.estado === 'alteracao_solicitada' && <p role="status" className="text-muted-foreground">Sua alteração está sendo aplicada. A tela se atualiza sozinha.</p>}
          {c.item.estado === 'aguardando_creditos' && <p className="text-muted-foreground">Faltam créditos para produzir este conteúdo. Veja o saldo em <Link to="/app/assinatura" className="underline underline-offset-4">Assinatura</Link>.</p>}
          {c.item.estado === 'falhou' && <p className="text-destructive">A produção deste conteúdo falhou{c.item.motivoBloqueio ? `: ${c.item.motivoBloqueio}` : '.'} Refaça o planejamento para tentar de novo.</p>}
          {c.item.motivoBloqueio && c.item.estado !== 'falhou' && <p className="text-destructive">{c.item.motivoBloqueio}</p>}
          {c.item.estado === 'aguardando_midia' && (
            <div className="space-y-3 rounded-xl border border-border p-4">
              <p className="font-medium">Esta peça precisa da sua mídia</p>
              {!c.podeAnexar ? <p className="text-muted-foreground">Peça a um administrador ou editor para enviar a mídia.</p> : (
                <>
                  <p className="text-muted-foreground">{c.item.formato === 'video_curto' ? 'Envie um vídeo MP4 ou MOV na vertical (9:16).' : c.item.rede === 'instagram' ? 'O Instagram aceita somente imagens JPEG.' : 'Envie imagens PNG ou JPEG.'}</p>
                  <input type="file" aria-label="Enviar mídia" disabled={busy} accept={c.item.formato === 'video_curto' ? 'video/mp4,video/quicktime' : c.item.formato === 'carrossel' ? 'image/png,image/jpeg,video/mp4,video/quicktime' : c.item.rede === 'instagram' ? 'image/jpeg' : 'image/png,image/jpeg'} onChange={(e) => { void enviar(e.target.files?.[0]); e.target.value = ''; }} />
                  {pct !== null && <p role="status">Enviando… {pct}%</p>}
                  {c.midias.length > 0 && (
                    <ul className="space-y-1">
                      {c.midias.map((m) => (
                        <li key={m.id}><label className="flex items-center gap-2"><input type="checkbox" checked={escolhidas.includes(m.id)} onChange={() => alternarMidia(m.id)} />{m.video ? `Vídeo${m.duracaoS ? ` de ${Math.round(m.duracaoS)} s` : ''}` : 'Imagem'}{m.largura && m.altura ? ` (${m.largura}×${m.altura})` : ''}</label></li>
                      ))}
                    </ul>
                  )}
                  <Button onClick={anexar} disabled={busy || escolhidas.length === 0} className="rounded-full">Anexar à peça</Button>
                </>
              )}
            </div>
          )}
          {c.revisoes.length > 0 && <ul className="list-disc pl-5 text-muted-foreground">{c.revisoes.map((r) => <li key={r.numero}>Alteração {r.numero}: {r.pedido}{r.atendidaEm ? ' (atendida)' : ' (em andamento)'}</li>)}</ul>}
          {c.item.estado === 'aguardando_aprovacao' && c.hash && <Button onClick={aprovar} disabled={busy} className="rounded-full">Aprovar este conteúdo</Button>}
          {c.podePedir && (
            <div className="space-y-2">
              <Label htmlFor="alt">Pedir alteração ({c.restantes} restante{c.restantes === 1 ? '' : 's'})</Label>
              <Textarea id="alt" value={pedido} onChange={(e) => setPedido(e.target.value)} rows={3} maxLength={1000} />
              <Button variant="outline" onClick={alterar} disabled={busy || pedido.trim().length < 5} className="rounded-full">Enviar pedido</Button>
            </div>
          )}
        </div>
      )}
    </Panel>
  );
}

export function ProductionPage() {
  const q = useMotor<Item[]>('/conteudos');
  const [aberto, setAberto] = useState<string | null>(null);
  const itens = q.data ?? [];
  return (
    <>
      <PageHeader title="Produção" description="Revise, aprove ou peça alterações nos conteúdos. Nada é publicado sem a sua aprovação." />
      {q.isLoading || q.error ? <Carregando erro={q.error as Error | null} /> : (
        <>
          {aberto && <Detalhe id={aberto} onClose={() => setAberto(null)} />}
          {itens.length === 0 ? <EmptyState title="Nenhum conteúdo ainda" text="Quando o planejamento do mês for gerado, os conteúdos aparecem aqui para a sua revisão." /> : (
            <div className="space-y-6">
              {GRUPOS.map((g) => {
                const doGrupo = itens.filter((i) => g.estados.includes(i.estado));
                if (doGrupo.length === 0) return null;
                return (
                  <Panel key={g.titulo}>
                    <h2 className="font-medium">{g.titulo} <span className="text-muted-foreground">({doGrupo.length})</span></h2>
                    <ul className="mt-3 divide-y divide-border text-sm">
                      {doGrupo.map((i) => (
                        <li key={i.id} className="flex flex-wrap items-center justify-between gap-2 py-2.5">
                          <span>{dia(i.dataPrevista)} · {nomeRede(i.rede)} · {i.titulo ?? i.tema}</span>
                          <button onClick={() => setAberto(i.id)} className="text-sm underline underline-offset-4">Abrir</button>
                        </li>
                      ))}
                    </ul>
                  </Panel>
                );
              })}
            </div>
          )}
        </>
      )}
    </>
  );
}

/* ---------------- Redes sociais ---------------- */
function Escolha({ selecao, onFim }: { selecao: string; onFim: () => void }) {
  const { orgId } = useAuth();
  const q = useMotor<{ opcoes: { id: string; nome: string }[] }>(`/contas/selecao/${selecao}`);
  const [busy, setBusy] = useState(false);
  const escolher = async (paginaId: string) => {
    setBusy(true);
    try { const r = await api<{ nome: string }>('/contas/selecao', { org: orgId, body: { selecaoId: selecao, paginaId } }); toast.success(`Conta conectada: ${r.nome}`); onFim(); }
    catch (e) { toast.error((e as Error).message); setBusy(false); }
  };
  return (
    <Panel className="mb-6">
      <h2 className="font-medium">Escolha a conta a conectar</h2>
      {q.isLoading || q.error ? <Carregando erro={q.error as Error | null} /> : (
        <ul className="mt-3 space-y-2">
          {(q.data?.opcoes ?? []).map((o) => <li key={o.id} className="flex items-center justify-between gap-3 text-sm"><span>{o.nome}</span><Button size="sm" variant="outline" disabled={busy} onClick={() => escolher(o.id)} className="rounded-full">Conectar esta</Button></li>)}
        </ul>
      )}
    </Panel>
  );
}

export function ConnectionsPage() {
  const { orgId, org } = useAuth();
  const qc = useQueryClient();
  const [params, setParams] = useSearchParams();
  const q = useMotor<Conta[]>('/contas');
  const [busy, setBusy] = useState<string | null>(null);
  const podeGerir = ['administrador', 'editor'].includes(org?.papel ?? '');
  const selecao = params.get('conexao') === 'selecao' ? params.get('selecao') : null;

  // Retorno do OAuth: o motor devolve o usuário aqui com o resultado na URL.
  useEffect(() => {
    const r = params.get('conexao'); if (!r) return;
    if (r === 'ok') toast.success(`Conta conectada${params.get('nome') ? `: ${params.get('nome')}` : ''}.`);
    if (r === 'erro') toast.error(params.get('msg') || 'Não foi possível conectar a conta.');
    if (r !== 'selecao') { setParams({}, { replace: true }); void qc.invalidateQueries({ queryKey: ['motor', orgId] }); }
  }, [params, setParams, qc, orgId]);

  const conectar = async (rede: Rede) => {
    setBusy(rede);
    try { const r = await api<{ url: string }>('/contas/conectar', { org: orgId, body: { rede, retorno: '/app/conexoes' } }); window.location.assign(r.url); }
    catch (e) { toast.error((e as Error).message); setBusy(null); }
  };
  const desconectar = async (c: Conta) => {
    if (!window.confirm(`Desconectar ${c.nome}? As publicações agendadas nessa conta não serão feitas.`)) return;
    setBusy(c.id);
    try { await api(`/contas/${c.id}/desconectar`, { org: orgId, method: 'POST', body: {} }); toast.success('Conta desconectada.'); await qc.invalidateQueries({ queryKey: ['motor', orgId] }); }
    catch (e) { toast.error((e as Error).message); } finally { setBusy(null); }
  };
  const contas = q.data ?? [];
  return (
    <>
      <PageHeader title="Redes sociais" description="Conecte as contas onde o conteúdo será publicado. Você autoriza na própria rede e pode desconectar quando quiser." />
      {selecao && <Escolha selecao={selecao} onFim={() => { setParams({}, { replace: true }); void qc.invalidateQueries({ queryKey: ['motor', orgId] }); }} />}
      {q.isLoading || q.error ? <Carregando erro={q.error as Error | null} /> : (
        <div className="grid gap-4 sm:grid-cols-2">
          {REDES.map((r) => {
            const doTipo = contas.filter((c) => c.rede === r.key && !['desconectada', 'revogada'].includes(c.status));
            return (
              <Panel key={r.key}>
                <h2 className="font-medium">{r.label}</h2>
                {doTipo.length === 0 ? <p className="mt-2 text-sm text-muted-foreground">Não conectada.</p> : (
                  <ul className="mt-2 space-y-2 text-sm">
                    {doTipo.map((c) => (
                      <li key={c.id} className="flex items-start justify-between gap-3">
                        <span>{c.nome} · <span className={c.status === 'conectada' ? '' : 'text-destructive'}>{c.status}</span>
                          {c.erro ? <span className="block text-xs text-destructive">{c.erro}</span> : null}
                          {c.tokenExpiraEm ? <span className="block text-xs text-muted-foreground">Acesso válido até {quando(c.tokenExpiraEm)}</span> : null}</span>
                        {podeGerir && <button disabled={busy === c.id} onClick={() => desconectar(c)} className="shrink-0 text-xs text-muted-foreground underline underline-offset-4">Desconectar</button>}
                      </li>
                    ))}
                  </ul>
                )}
                {podeGerir ? <Button variant="outline" className="mt-4 rounded-full" disabled={busy === r.key} onClick={() => conectar(r.key)}>{doTipo.length ? 'Reconectar' : 'Conectar'}</Button>
                  : <p className="mt-4 text-xs text-muted-foreground">Só administradores e editores conectam contas.</p>}
              </Panel>
            );
          })}
        </div>
      )}
    </>
  );
}

/* ---------------- Assinatura ---------------- */
export function BillingPage() {
  const { orgId, org } = useAuth();
  const qc = useQueryClient();
  const q = useMotor<AssinaturaApi>('/assinatura');
  const consumo = useMotor<Consumo>('/consumo');
  const [f, setF] = useState({ plano: '', nome: '', cpfCnpj: '', email: '' });
  const [busy, setBusy] = useState(false);
  const d = q.data;
  const admin = org?.papel === 'administrador';

  const contratar = async (e: FormEvent) => {
    e.preventDefault(); setBusy(true);
    try {
      const r = await api<{ urlPagamento: string | null }>('/assinatura/contratar', { org: orgId, body: f });
      if (r.urlPagamento) { window.location.assign(r.urlPagamento); return; }
      toast.success('Assinatura criada. O link de pagamento chega no e-mail informado.'); await qc.invalidateQueries({ queryKey: ['motor', orgId] });
    } catch (err) { toast.error((err as Error).message); } finally { setBusy(false); }
  };
  const [novoPlano, setNovoPlano] = useState('');
  const trocar = async () => {
    if (!novoPlano || !window.confirm('Trocar de plano? O novo valor vale a partir das próximas cobranças e os limites do novo plano valem agora.')) return;
    setBusy(true);
    try { await api('/assinatura/alterar-plano', { org: orgId, body: { plano: novoPlano } }); toast.success('Plano alterado.'); setNovoPlano(''); await qc.invalidateQueries({ queryKey: ['motor', orgId] }); }
    catch (err) { toast.error((err as Error).message); } finally { setBusy(false); }
  };
  const cancelar = async () => {
    if (!window.confirm('Cancelar a assinatura? O acesso continua até o fim do período já pago.')) return;
    setBusy(true);
    try { await api('/assinatura/cancelar', { org: orgId, method: 'POST', body: {} }); toast.success('Assinatura cancelada.'); await qc.invalidateQueries({ queryKey: ['motor', orgId] }); }
    catch (err) { toast.error((err as Error).message); } finally { setBusy(false); }
  };

  return (
    <>
      <PageHeader title="Assinatura" description="Seu plano, o uso do mês e os créditos." />
      {q.isLoading || q.error ? <Carregando erro={q.error as Error | null} /> : d && (
        <div className="max-w-3xl space-y-6">
          <Panel>
            {d.assinatura ? (
              <div className="space-y-1 text-sm">
                <p className="text-lg font-medium">{d.assinatura.planoNome} · {reais(d.assinatura.valorCentavos)}/{d.assinatura.ciclo === 'YEARLY' ? 'ano' : 'mês'}</p>
                <p>Situação: <strong>{rotulo(d.assinatura.status)}</strong></p>
                {d.assinatura.proximoVencimento && <p className="text-muted-foreground">Próximo vencimento: {quando(d.assinatura.proximoVencimento)}</p>}
                {d.assinatura.acessoAte && <p className="text-muted-foreground">Acesso até: {quando(d.assinatura.acessoAte)}</p>}
                {d.assinatura.inadimplenteDesde && <p className="text-destructive">Pagamento em atraso desde {quando(d.assinatura.inadimplenteDesde)}.</p>}
                {admin && d.assinatura.status === 'ativa' && d.planosParaContratar.length > 0 && (
                  <div className="mt-4 flex flex-wrap items-end gap-3">
                    <div className="space-y-2"><Label htmlFor="trocar-plano">Trocar de plano</Label>
                      <select id="trocar-plano" value={novoPlano} onChange={(e) => setNovoPlano(e.target.value)} className="h-10 rounded-lg border border-border bg-background px-2 text-sm">
                        <option value="">Escolha o plano</option>
                        {d.planosParaContratar.filter((p) => p.nome !== d.assinatura!.planoNome).map((p) => <option key={p.codigo} value={p.codigo}>{p.nome} ({reais(p.precoCentavos)}/mês)</option>)}
                      </select></div>
                    <Button variant="outline" onClick={trocar} disabled={busy || !novoPlano} className="rounded-full">Trocar</Button>
                  </div>
                )}
                {admin && d.assinatura.status !== 'cancelada' && <Button variant="outline" onClick={cancelar} disabled={busy} className="mt-3 rounded-full">Cancelar assinatura</Button>}
              </div>
            ) : <p className="text-sm text-muted-foreground">Esta organização ainda não tem assinatura.</p>}
          </Panel>
          <Panel>
            <h2 className="font-medium">Uso do mês</h2>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>Publicações: {d.uso?.usado ?? 0}{d.plano?.limitePublicacoesMes != null ? ` de ${d.plano.limitePublicacoesMes}` : ' (sem limite)'}</li>
              {d.plano?.limiteContas != null && <li>Contas de redes: até {d.plano.limiteContas}</li>}
              {d.plano?.limiteClientes != null && <li>Clientes gerenciados: até {d.plano.limiteClientes}</li>}
              <li className="text-xs">Cada publicação conta por rede social: um conteúdo em quatro redes usa quatro. Planejamento, textos e duas alterações por conteúdo estão incluídos.</li>
            </ul>
          </Panel>
          {(!d.assinatura || d.assinatura.status === 'cancelada') && admin && (
            <Panel>
              <h2 className="font-medium">Contratar um plano</h2>
              {!d.cobrancaDisponivel ? <p className="mt-2 text-sm text-muted-foreground">A contratação ainda não está disponível.</p>
                : d.planosParaContratar.length === 0 ? <p className="mt-2 text-sm text-muted-foreground">Nenhum plano está disponível para contratação no momento.</p> : (
                <form onSubmit={contratar} className="mt-3 space-y-4">
                  <div className="space-y-2">
                    {d.planosParaContratar.map((p) => (
                      <label key={p.codigo} className="flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-2 text-sm">
                        <span className="flex items-center gap-2"><input type="radio" name="plano" required checked={f.plano === p.codigo} onChange={() => setF((x) => ({ ...x, plano: p.codigo }))} />{p.nome}</span>
                        <span>{reais(p.precoCentavos)}/{p.ciclo === 'YEARLY' ? 'ano' : 'mês'}</span>
                      </label>
                    ))}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2"><Label htmlFor="b1">Nome ou razão social</Label><Input id="b1" value={f.nome} onChange={(e) => setF((x) => ({ ...x, nome: e.target.value }))} required /></div>
                    <div className="space-y-2"><Label htmlFor="b2">CPF ou CNPJ</Label><Input id="b2" value={f.cpfCnpj} onChange={(e) => setF((x) => ({ ...x, cpfCnpj: e.target.value }))} required /></div>
                  </div>
                  <div className="space-y-2"><Label htmlFor="b3">E-mail para a cobrança</Label><Input id="b3" type="email" value={f.email} onChange={(e) => setF((x) => ({ ...x, email: e.target.value }))} required /></div>
                  <p className="text-xs text-muted-foreground">O pagamento é feito na página segura do Asaas (Pix, boleto ou cartão). A DesignoAI não guarda dados de cartão nem o CPF ou CNPJ informados aqui.</p>
                  <Button type="submit" disabled={busy || !f.plano} className="rounded-full">Contratar</Button>
                </form>
              )}
            </Panel>
          )}
        </div>
      )}
    </>
  );
}
