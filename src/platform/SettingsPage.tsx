// Configurações da organização no /app: dados, membros, publicação automática e privacidade (LGPD). Tudo pela API v1 do motor.
import { useEffect, useState, type FormEvent } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from './AuthProvider';
import { useMotor } from './useCompany';
import { PageHeader, Panel } from './AppLayout';
import { api } from './motor';

const PAPEIS = [['administrador', 'Administrador'], ['editor', 'Editor'], ['aprovador', 'Aprovador'], ['visualizador', 'Visualizador']] as const;
const CATEGORIAS: [string, string][] = [['22', 'Pessoas e blogs'], ['24', 'Entretenimento'], ['27', 'Educação'], ['26', 'Estilo e como fazer'], ['28', 'Ciência e tecnologia'], ['25', 'Notícias'], ['23', 'Comédia'], ['10', 'Música'], ['20', 'Games'], ['17', 'Esportes']];

type Perfil = {
  publicarAposAprovacao: boolean; atrasoMinutos: number; instagram: { automatica: boolean }; threads: { automatica: boolean };
  youtube: { automatica: boolean; privacidade: string; paraCriancas: boolean; categoriaId: string } | null;
  tiktok: { automatica: boolean; privacidade: string; comentarios: boolean; duet: boolean; stitch: boolean; consentimentoMusica: true } | null;
};
type PerfilApi = { perfil: Perfil; origem: string; versao: number | null };

function Aba({ id, atual, setAtual, children }: { id: string; atual: string; setAtual: (s: string) => void; children: string }) {
  return <button type="button" onClick={() => setAtual(id)} className={`rounded-full px-4 py-1.5 text-sm ${atual === id ? 'bg-foreground text-background' : 'border border-border text-muted-foreground'}`}>{children}</button>;
}

/* ---------- Organização ---------- */
function Organizacao({ admin }: { admin: boolean }) {
  const { orgId, reload } = useAuth();
  const q = useMotor<{ nome: string; papel: string }>('/organizacao');
  const [nome, setNome] = useState('');
  useEffect(() => { if (q.data) setNome(q.data.nome); }, [q.data]);
  const salvar = async (e: FormEvent) => {
    e.preventDefault();
    try { await api('/organizacao', { method: 'PUT', org: orgId, body: { nome } }); toast.success('Organização atualizada.'); await reload(); }
    catch (err) { toast.error((err as Error).message); }
  };
  return (
    <Panel>
      <form onSubmit={salvar} className="max-w-md space-y-4">
        <div className="space-y-2"><Label htmlFor="o-nome">Nome da organização</Label><Input id="o-nome" value={nome} onChange={(e) => setNome(e.target.value)} disabled={!admin} minLength={2} maxLength={120} required /></div>
        {admin ? <Button type="submit" className="rounded-full">Salvar</Button> : <p className="text-sm text-muted-foreground">Só administradores alteram os dados da organização.</p>}
      </form>
    </Panel>
  );
}

/* ---------- Membros ---------- */
function Membros({ admin }: { admin: boolean }) {
  const { orgId, user } = useAuth();
  const qc = useQueryClient();
  const q = useMotor<{ userId: string; email: string; papel: string }[]>('/membros');
  const [email, setEmail] = useState(''); const [papel, setPapel] = useState('editor');
  const refresh = () => qc.invalidateQueries({ queryKey: ['motor', orgId] });
  const convidar = async (e: FormEvent) => {
    e.preventDefault();
    try { await api('/membros/convidar', { org: orgId, body: { email, papel } }); toast.success('Convite criado. A pessoa entra com esse e-mail.'); setEmail(''); await refresh(); }
    catch (err) { toast.error((err as Error).message); }
  };
  const mudar = async (id: string, novo: string) => {
    try { await api(`/membros/${id}/papel`, { method: 'PUT', org: orgId, body: { papel: novo } }); toast.success('Papel atualizado.'); await refresh(); } catch (err) { toast.error((err as Error).message); await refresh(); }
  };
  const remover = async (id: string, em: string) => {
    if (!window.confirm(`Remover ${em} da organização?`)) return;
    try { await api(`/membros/${id}/remover`, { org: orgId, body: {} }); toast.success('Membro removido.'); await refresh(); } catch (err) { toast.error((err as Error).message); }
  };
  return (
    <div className="space-y-6">
      <Panel>
        <ul className="divide-y divide-border text-sm">
          {(q.data ?? []).map((m) => (
            <li key={m.userId} className="flex flex-wrap items-center justify-between gap-3 py-2.5">
              <span>{m.email}{m.userId === user?.id ? ' (você)' : ''}</span>
              <span className="flex items-center gap-3">
                <select aria-label={`Papel de ${m.email}`} value={m.papel} disabled={!admin || m.userId === user?.id} onChange={(e) => mudar(m.userId, e.target.value)} className="rounded-lg border border-border bg-background px-2 py-1">
                  {PAPEIS.map(([k, r]) => <option key={k} value={k}>{r}</option>)}
                </select>
                {admin && m.userId !== user?.id && <button onClick={() => remover(m.userId, m.email)} className="text-xs text-muted-foreground underline underline-offset-4">Remover</button>}
              </span>
            </li>
          ))}
        </ul>
      </Panel>
      {admin && (
        <Panel>
          <h2 className="font-medium">Convidar alguém</h2>
          <form onSubmit={convidar} className="mt-3 flex flex-wrap items-end gap-3">
            <div className="space-y-2"><Label htmlFor="m-email">E-mail</Label><Input id="m-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-64" /></div>
            <div className="space-y-2"><Label htmlFor="m-papel">Papel</Label>
              <select id="m-papel" value={papel} onChange={(e) => setPapel(e.target.value)} className="h-10 rounded-lg border border-border bg-background px-2">{PAPEIS.map(([k, r]) => <option key={k} value={k}>{r}</option>)}</select></div>
            <Button type="submit" className="rounded-full">Convidar</Button>
          </form>
          <p className="mt-2 text-xs text-muted-foreground">Administrador gerencia tudo; editor cria e conecta; aprovador aprova conteúdos; visualizador só acompanha.</p>
        </Panel>
      )}
    </div>
  );
}

/* ---------- Publicação automática ---------- */
function Publicacao({ admin }: { admin: boolean }) {
  const { orgId } = useAuth();
  const qc = useQueryClient();
  const q = useMotor<PerfilApi>('/perfil-publicacao');
  const [pub, setPub] = useState(false); const [atraso, setAtraso] = useState('3');
  const [ig, setIg] = useState(true); const [th, setTh] = useState(true);
  const [yt, setYt] = useState(false); const [ytAuto, setYtAuto] = useState(true); const [ytPriv, setYtPriv] = useState('private'); const [ytCri, setYtCri] = useState<'' | 'sim' | 'nao'>(''); const [ytCat, setYtCat] = useState('22');
  const [tt, setTt] = useState(false); const [ttAuto, setTtAuto] = useState(true); const [ttPriv, setTtPriv] = useState('SELF_ONLY'); const [ttCom, setTtCom] = useState(false); const [ttDuet, setTtDuet] = useState(false); const [ttSt, setTtSt] = useState(false); const [ttMus, setTtMus] = useState(false);

  useEffect(() => {
    const p = q.data?.perfil; if (!p) return;
    setPub(p.publicarAposAprovacao); setAtraso(String(p.atrasoMinutos)); setIg(p.instagram.automatica); setTh(p.threads.automatica);
    setYt(!!p.youtube); if (p.youtube) { setYtAuto(p.youtube.automatica); setYtPriv(p.youtube.privacidade); setYtCri(p.youtube.paraCriancas ? 'sim' : 'nao'); setYtCat(p.youtube.categoriaId); }
    setTt(!!p.tiktok); if (p.tiktok) { setTtAuto(p.tiktok.automatica); setTtPriv(p.tiktok.privacidade); setTtCom(p.tiktok.comentarios); setTtDuet(p.tiktok.duet); setTtSt(p.tiktok.stitch); setTtMus(true); }
  }, [q.data]);

  const salvar = async (e: FormEvent) => {
    e.preventDefault();
    const perfil: Record<string, unknown> = { publicarAposAprovacao: pub, atrasoMinutos: Number(atraso), instagram: { automatica: ig }, threads: { automatica: th } };
    if (yt) perfil.youtube = { automatica: ytAuto, privacidade: ytPriv, paraCriancas: ytCri === 'sim', categoriaId: ytCat };
    if (tt) perfil.tiktok = { automatica: ttAuto, privacidade: ttPriv, comentarios: ttCom, duet: ttDuet, stitch: ttSt, consentimentoMusica: true };
    try {
      await api('/perfil-publicacao', { method: 'PUT', org: orgId, body: { perfil, versao: q.data?.versao ?? 0 } });
      await qc.invalidateQueries({ queryKey: ['motor', orgId] }); toast.success('Perfil de publicação salvo.');
    } catch (err) { toast.error((err as Error).message); }
  };
  const dis = !admin;
  const Check = ({ v, set, children }: { v: boolean; set: (b: boolean) => void; children: string }) => <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={v} disabled={dis} onChange={(e) => set(e.target.checked)} />{children}</label>;
  return (
    <form onSubmit={salvar} className="max-w-2xl space-y-6">
      {!admin && <p className="text-sm text-muted-foreground">Só administradores alteram a publicação automática. Você pode ver as escolhas atuais.</p>}
      <Panel className="space-y-3">
        <Check v={pub} set={setPub}>Publicar sozinho depois que um conteúdo for aprovado</Check>
        {pub && <p className="rounded-lg border border-destructive/40 px-3 py-2 text-xs text-destructive">Atenção: com isto ligado, aprovar um conteúdo agenda e publica de verdade nas redes marcadas abaixo, sem nova confirmação.</p>}
        <div className="flex items-center gap-2 text-sm"><Label htmlFor="p-atraso">Publicar</Label><Input id="p-atraso" type="number" min={2} max={1440} value={atraso} disabled={dis} onChange={(e) => setAtraso(e.target.value)} className="h-9 w-20" /> minutos depois da aprovação</div>
      </Panel>
      <Panel className="space-y-3"><p className="font-medium">Instagram e Threads</p><Check v={ig} set={setIg}>Instagram entra na publicação automática</Check><Check v={th} set={setTh}>Threads entra na publicação automática</Check></Panel>
      <Panel className="space-y-3">
        <Check v={yt} set={setYt}>Usar o YouTube na publicação automática</Check>
        {yt && (
          <div className="space-y-3 pl-6">
            <Check v={ytAuto} set={setYtAuto}>Publicar automaticamente</Check>
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Label htmlFor="yt-priv">Visibilidade</Label>
              <select id="yt-priv" value={ytPriv} disabled={dis} onChange={(e) => setYtPriv(e.target.value)} className="rounded-lg border border-border bg-background px-2 py-1"><option value="private">Privado</option><option value="unlisted">Não listado</option><option value="public">Público</option></select>
              <Label htmlFor="yt-cat">Categoria</Label>
              <select id="yt-cat" value={ytCat} disabled={dis} onChange={(e) => setYtCat(e.target.value)} className="rounded-lg border border-border bg-background px-2 py-1">{CATEGORIAS.map(([k, r]) => <option key={k} value={k}>{r}</option>)}</select>
            </div>
            <fieldset className="text-sm"><legend className="mb-1">Os vídeos do canal são conteúdo feito para crianças? (declaração sua, obrigatória)</legend>
              <label className="mr-4"><input type="radio" name="yt-cri" disabled={dis} checked={ytCri === 'sim'} onChange={() => setYtCri('sim')} /> Sim</label>
              <label><input type="radio" name="yt-cri" disabled={dis} checked={ytCri === 'nao'} onChange={() => setYtCri('nao')} /> Não</label></fieldset>
          </div>
        )}
      </Panel>
      <Panel className="space-y-3">
        <Check v={tt} set={setTt}>Usar o TikTok na publicação automática</Check>
        {tt && (
          <div className="space-y-3 pl-6">
            <p className="text-xs text-muted-foreground">Enquanto o aplicativo do TikTok não passar pela auditoria oficial, só é possível publicar em modo privado (Somente eu) e o TikTok fica fora da publicação automática.</p>
            <Check v={ttAuto} set={setTtAuto}>Publicar automaticamente (depois da auditoria)</Check>
            <div className="flex flex-wrap items-center gap-3 text-sm"><Label htmlFor="tt-priv">Visibilidade</Label>
              <select id="tt-priv" value={ttPriv} disabled={dis} onChange={(e) => setTtPriv(e.target.value)} className="rounded-lg border border-border bg-background px-2 py-1"><option value="SELF_ONLY">Somente eu</option><option value="FOLLOWER_OF_CREATOR">Seguidores</option><option value="MUTUAL_FOLLOW_FRIENDS">Amigos</option><option value="PUBLIC_TO_EVERYONE">Todos</option></select></div>
            <Check v={ttCom} set={setTtCom}>Permitir comentários</Check><Check v={ttDuet} set={setTtDuet}>Permitir Dueto</Check><Check v={ttSt} set={setTtSt}>Permitir Stitch</Check>
            <Check v={ttMus} set={setTtMus}>Confirmo o uso de música conforme a política do TikTok (obrigatório)</Check>
          </div>
        )}
      </Panel>
      <p className="text-xs text-muted-foreground">Os selos de conteúdo gerado por IA nunca são ativados automaticamente.</p>
      {admin && <Button type="submit" disabled={(yt && ytCri === '') || (tt && !ttMus)} className="rounded-full">Salvar</Button>}
    </form>
  );
}

/* ---------- Privacidade ---------- */
function Privacidade({ admin }: { admin: boolean }) {
  const { orgId, org, reload } = useAuth();
  const [conf, setConf] = useState('');
  const exportar = async () => {
    try {
      const r = await api<{ nomeArquivo: string; json: string }>('/privacidade/exportar', { org: orgId, body: {} });
      const url = URL.createObjectURL(new Blob([r.json], { type: 'application/json' }));
      const a = document.createElement('a'); a.href = url; a.download = r.nomeArquivo; a.click(); URL.revokeObjectURL(url);
    } catch (err) { toast.error((err as Error).message); }
  };
  const excluir = async (e: FormEvent) => {
    e.preventDefault();
    if (!window.confirm('Excluir a organização e todos os dados? Esta ação não tem volta.')) return;
    try { await api('/privacidade/excluir', { org: orgId, body: { confirmacao: conf } }); toast.success('Organização excluída.'); try { localStorage.removeItem('motor-org'); } catch { /* sem armazenamento */ } await reload(); }
    catch (err) { toast.error((err as Error).message); }
  };
  if (!admin) return <Panel><p className="text-sm text-muted-foreground">Só administradores exportam ou excluem os dados da organização.</p></Panel>;
  return (
    <div className="max-w-2xl space-y-6">
      <Panel><h2 className="font-medium">Exportar os dados</h2><p className="mt-1 text-sm text-muted-foreground">Baixe um arquivo com os dados da organização. Ele não contém senhas nem acessos às redes.</p><Button variant="outline" onClick={exportar} className="mt-3 rounded-full">Exportar dados</Button></Panel>
      <Panel className="border-destructive/40">
        <h2 className="font-medium text-destructive">Excluir a organização</h2>
        <p className="mt-1 text-sm text-muted-foreground">Apaga todos os dados, desconecta as redes e remove o cliente da cobrança. Cancele a assinatura antes. Digite o nome <strong>{org?.nome}</strong> para confirmar.</p>
        <form onSubmit={excluir} className="mt-3 flex flex-wrap gap-3"><Input aria-label="Nome da organização para confirmar" value={conf} onChange={(e) => setConf(e.target.value)} className="w-64" /><Button type="submit" variant="destructive" disabled={conf !== org?.nome} className="rounded-full">Excluir tudo</Button></form>
      </Panel>
    </div>
  );
}

export function SettingsPage() {
  const { org } = useAuth();
  const [aba, setAba] = useState('organizacao');
  const admin = org?.papel === 'administrador';
  return (
    <>
      <PageHeader title="Configurações" description="Organização, membros, publicação automática e privacidade." />
      <div className="mb-6 flex flex-wrap gap-2">
        <Aba id="organizacao" atual={aba} setAtual={setAba}>Organização</Aba><Aba id="membros" atual={aba} setAtual={setAba}>Membros</Aba>
        <Aba id="publicacao" atual={aba} setAtual={setAba}>Publicação</Aba><Aba id="privacidade" atual={aba} setAtual={setAba}>Privacidade</Aba>
      </div>
      {aba === 'organizacao' && <Organizacao admin={admin} />}
      {aba === 'membros' && <Membros admin={admin} />}
      {aba === 'publicacao' && <Publicacao admin={admin} />}
      {aba === 'privacidade' && <Privacidade admin={admin} />}
    </>
  );
}
