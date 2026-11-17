import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LayoutGrid, Building2, CalendarDays, Clapperboard, Share2, CreditCard, Shield, LogOut, Loader2, Settings } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { api, motorAuth as supabase } from './motor';
import { cn } from '@/lib/utils';
import { useAuth } from './AuthProvider';

const NAV = [
  { to: '/app', label: 'Painel', icon: LayoutGrid, end: true },
  { to: '/app/empresa', label: 'Empresa e marca', icon: Building2 },
  { to: '/app/planejamento', label: 'Planejamento', icon: CalendarDays },
  { to: '/app/producao', label: 'Produção', icon: Clapperboard },
  { to: '/app/conexoes', label: 'Redes sociais', icon: Share2 },
  { to: '/app/assinatura', label: 'Assinatura', icon: CreditCard },
  { to: '/app/configuracoes', label: 'Configurações', icon: Settings },
];

export function RequireAuth({ admin = false }: { admin?: boolean }) {
  const { user, loading, isAdmin, ready, erro, orgs } = useAuth();
  const loc = useLocation();
  if (loading) return <div className="min-h-screen grid place-items-center"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>;
  if (!user) return <Navigate to="/auth/login" replace state={{ from: loc.pathname }} />;
  if (!ready && !erro) return <div className="min-h-screen grid place-items-center"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>;
  if (admin && !isAdmin) return <Navigate to="/app" replace />;
  return <AppShell semOrg={ready && orgs.length === 0 && !admin} />;
}

function CriarOrganizacao() {
  const { reload, setOrgId } = useAuth();
  const [nome, setNome] = useState('');
  const [busy, setBusy] = useState(false);
  const enviar = async (e: FormEvent) => {
    e.preventDefault(); setBusy(true);
    try { const o = await api<{ id: string }>('/organizacoes', { body: { nome } }); setOrgId(o.id); await reload(); toast.success('Organização criada.'); }
    catch (err) { toast.error((err as Error).message); } finally { setBusy(false); }
  };
  return (
    <div className="max-w-md">
      <PageHeader title="Crie a sua organização" description="É o espaço da sua empresa na DesignoAI: planejamento, conteúdos, redes conectadas e assinatura ficam nele. Você será o administrador." />
      <form onSubmit={enviar} className="space-y-4">
        <div className="space-y-2"><Label htmlFor="org-nome">Nome da organização</Label><Input id="org-nome" value={nome} onChange={(e) => setNome(e.target.value)} className="h-11 rounded-xl" required minLength={2} maxLength={120} /></div>
        <Button type="submit" disabled={busy || nome.trim().length < 2} className="rounded-full">Criar organização</Button>
      </form>
    </div>
  );
}

function AppShell({ semOrg }: { semOrg: boolean }) {
  const { user, isAdmin, orgs, orgId, setOrgId, erro } = useAuth();
  const nav = useNavigate();
  const items = isAdmin ? [...NAV, { to: '/admin', label: 'Administração', icon: Shield }] : NAV;
  const signOut = async () => { await supabase.auth.signOut(); nav('/auth/login'); };

  return (
    <div className="min-h-screen bg-secondary md:flex">
      <Helmet><title>DesignoAI Social Automation</title><meta name="robots" content="noindex" /></Helmet>
      <aside className="md:w-64 md:min-h-screen border-b md:border-b-0 md:border-r border-border bg-background flex md:flex-col">
        <div className="hidden md:block px-6 py-6">
          <p className="text-sm font-semibold tracking-tight text-foreground">DesignoAI</p>
          <p className="text-xs text-muted-foreground">Social Automation</p>
        </div>
        <nav className="flex md:flex-col gap-1 overflow-x-auto px-3 py-3 md:py-0 flex-1">
          {items.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end}
              className={({ isActive }) => cn('flex items-center gap-3 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm transition-colors',
                isActive ? 'bg-secondary text-foreground font-medium' : 'text-muted-foreground hover:text-foreground')}>
              <Icon className="h-4 w-4" strokeWidth={1.75} />{label}
            </NavLink>
          ))}
        </nav>
        {orgs.length > 1 && (
          <div className="hidden md:block px-4 pb-3">
            <label className="text-xs text-muted-foreground" htmlFor="troca-org">Organização</label>
            <select id="troca-org" value={orgId ?? ''} onChange={(e) => setOrgId(e.target.value)} className="mt-1 w-full rounded-lg border border-border bg-background px-2 py-1.5 text-sm">
              {orgs.map((o) => <option key={o.organizacao_id} value={o.organizacao_id}>{o.nome}</option>)}
            </select>
          </div>
        )}
        <div className="hidden md:block border-t border-border p-4">
          <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
          <button onClick={signOut} className="mt-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" strokeWidth={1.75} />Sair
          </button>
        </div>
        <button onClick={signOut} aria-label="Sair" className="md:hidden px-4 text-muted-foreground"><LogOut className="h-4 w-4" /></button>
      </aside>
      <main className="flex-1 min-w-0 px-4 py-8 sm:px-8 lg:px-12">
        {erro && <p role="alert" className="mb-6 rounded-xl border border-destructive/40 px-4 py-3 text-sm text-destructive">{erro}</p>}
        {semOrg ? <CriarOrganizacao /> : <Outlet />}
      </main>
    </div>
  );
}

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <header className="mb-8">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
      {description && <p className="mt-1 text-sm text-muted-foreground max-w-2xl">{description}</p>}
    </header>
  );
}

export function Panel({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn('rounded-2xl border border-border bg-background p-6', className)}>{children}</section>;
}

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-background px-6 py-12 text-center">
      <p className="font-medium text-foreground">{title}</p>
      <p className="mt-1 text-sm text-muted-foreground max-w-md mx-auto">{text}</p>
    </div>
  );
}

/** Honest integration badge: never claims a connection that does not exist. */
export function PendingBadge({ children = 'Integração pendente' }: { children?: React.ReactNode }) {
  return <span className="inline-flex rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">{children}</span>;
}
