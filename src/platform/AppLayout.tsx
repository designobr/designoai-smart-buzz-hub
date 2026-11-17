import { NavLink, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LayoutGrid, Building2, CalendarDays, Clapperboard, Share2, CreditCard, Shield, LogOut, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { useAuth } from './AuthProvider';

const NAV = [
  { to: '/app', label: 'Painel', icon: LayoutGrid, end: true },
  { to: '/app/empresa', label: 'Empresa e marca', icon: Building2 },
  { to: '/app/planejamento', label: 'Planejamento', icon: CalendarDays },
  { to: '/app/producao', label: 'Produção', icon: Clapperboard },
  { to: '/app/conexoes', label: 'Redes sociais', icon: Share2 },
  { to: '/app/assinatura', label: 'Assinatura', icon: CreditCard },
];

export function RequireAuth({ admin = false }: { admin?: boolean }) {
  const { user, loading, isAdmin } = useAuth();
  const loc = useLocation();
  if (loading) return <div className="min-h-screen grid place-items-center"><Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /></div>;
  if (!user) return <Navigate to="/auth/login" replace state={{ from: loc.pathname }} />;
  if (admin && !isAdmin) return <Navigate to="/app" replace />;
  return <AppShell />;
}

function AppShell() {
  const { user, isAdmin } = useAuth();
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
        <div className="hidden md:block border-t border-border p-4">
          <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
          <button onClick={signOut} className="mt-2 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" strokeWidth={1.75} />Sair
          </button>
        </div>
        <button onClick={signOut} aria-label="Sair" className="md:hidden px-4 text-muted-foreground"><LogOut className="h-4 w-4" /></button>
      </aside>
      <main className="flex-1 min-w-0 px-4 py-8 sm:px-8 lg:px-12"><Outlet /></main>
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
