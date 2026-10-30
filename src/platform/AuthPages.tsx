import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from './AuthProvider';

const emailSchema = z.string().trim().email('E-mail inválido').max(255);
const passwordSchema = z.string().min(8, 'A senha precisa de pelo menos 8 caracteres').max(72);

function Shell({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center px-4 py-12">
      <Helmet><title>{title} | DesignoAI Social Automation</title><meta name="robots" content="noindex" /></Helmet>
      <div className="w-full max-w-md rounded-3xl border border-border bg-background p-8 sm:p-10">
        <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">DesignoAI</Link>
        <h1 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        <div className="mt-8">{children}</div>
      </div>
    </main>
  );
}

function Field({ id, label, ...props }: { id: string; label: string } & React.ComponentProps<typeof Input>) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} className="h-11 rounded-xl" {...props} />
    </div>
  );
}

const Msg = ({ error, info }: { error?: string; info?: string }) =>
  error ? <p className="text-sm text-destructive" role="alert">{error}</p>
  : info ? <p className="text-sm text-foreground" role="status">{info}</p> : null;

export function LoginPage() {
  const { user } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  if (user) return <Navigate to="/app" replace />;

  const submit = async (e: FormEvent) => {
    e.preventDefault(); setError('');
    const em = emailSchema.safeParse(email);
    if (!em.success) return setError(em.error.issues[0].message);
    setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email: em.data, password });
    setBusy(false);
    if (error) return setError(error.message === 'Invalid login credentials' ? 'E-mail ou senha incorretos.' : error.message);
    nav('/app');
  };

  return (
    <Shell title="Entrar" subtitle="Acesse a plataforma DesignoAI Social Automation.">
      <form onSubmit={submit} className="space-y-5">
        <Field id="email" label="E-mail" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Field id="password" label="Senha" type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Msg error={error} />
        <Button type="submit" disabled={busy} className="w-full h-11 rounded-full">{busy ? 'Entrando...' : 'Entrar'}</Button>
      </form>
      <div className="mt-6 flex justify-between text-sm">
        <Link to="/auth/recuperar-senha" className="text-muted-foreground hover:text-foreground">Esqueci a senha</Link>
        <Link to="/auth/cadastro" className="font-medium text-foreground">Criar conta</Link>
      </div>
    </Shell>
  );
}

export function SignupPage() {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [busy, setBusy] = useState(false);
  if (user) return <Navigate to="/app" replace />;

  const submit = async (e: FormEvent) => {
    e.preventDefault(); setError(''); setInfo('');
    const em = emailSchema.safeParse(email); const pw = passwordSchema.safeParse(password);
    if (!name.trim()) return setError('Informe seu nome.');
    if (!em.success) return setError(em.error.issues[0].message);
    if (!pw.success) return setError(pw.error.issues[0].message);
    setBusy(true);
    const { data, error } = await supabase.auth.signUp({
      email: em.data, password,
      options: { emailRedirectTo: `${window.location.origin}/app`, data: { full_name: name.trim().slice(0, 120) } },
    });
    setBusy(false);
    if (error) return setError(error.message);
    if (!data.session) setInfo('Conta criada. Confirme seu e-mail pelo link que enviamos para entrar.');
  };

  return (
    <Shell title="Criar conta" subtitle="Comece a automatizar o marketing da sua empresa.">
      <form onSubmit={submit} className="space-y-5">
        <Field id="name" label="Nome" value={name} onChange={(e) => setName(e.target.value)} maxLength={120} required />
        <Field id="email" label="E-mail" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Field id="password" label="Senha" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Msg error={error} info={info} />
        <Button type="submit" disabled={busy} className="w-full h-11 rounded-full">{busy ? 'Criando...' : 'Criar conta'}</Button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">Já tem conta? <Link to="/auth/login" className="font-medium text-foreground">Entrar</Link></p>
    </Shell>
  );
}

export function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const submit = async (e: FormEvent) => {
    e.preventDefault(); setError('');
    const em = emailSchema.safeParse(email);
    if (!em.success) return setError(em.error.issues[0].message);
    const { error } = await supabase.auth.resetPasswordForEmail(em.data, { redirectTo: `${window.location.origin}/auth/nova-senha` });
    if (error) return setError(error.message);
    setInfo('Se o e-mail estiver cadastrado, você receberá um link para criar uma nova senha.');
  };
  return (
    <Shell title="Recuperar senha" subtitle="Enviaremos um link para redefinir sua senha.">
      <form onSubmit={submit} className="space-y-5">
        <Field id="email" label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Msg error={error} info={info} />
        <Button type="submit" className="w-full h-11 rounded-full">Enviar link</Button>
      </form>
      <p className="mt-6 text-sm"><Link to="/auth/login" className="text-muted-foreground hover:text-foreground">Voltar para entrar</Link></p>
    </Shell>
  );
}

export function ResetPasswordPage() {
  const nav = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.location.hash.includes('type=recovery')) setReady(true);
    const { data } = supabase.auth.onAuthStateChange((ev) => { if (ev === 'PASSWORD_RECOVERY') setReady(true); });
    return () => data.subscription.unsubscribe();
  }, []);
  const submit = async (e: FormEvent) => {
    e.preventDefault(); setError('');
    const pw = passwordSchema.safeParse(password);
    if (!pw.success) return setError(pw.error.issues[0].message);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) return setError(error.message);
    nav('/app');
  };
  return (
    <Shell title="Nova senha" subtitle={ready ? 'Defina sua nova senha de acesso.' : 'Abra esta página pelo link enviado ao seu e-mail.'}>
      <form onSubmit={submit} className="space-y-5">
        <Field id="password" label="Nova senha" type="password" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} disabled={!ready} required />
        <Msg error={error} />
        <Button type="submit" disabled={!ready} className="w-full h-11 rounded-full">Salvar nova senha</Button>
      </form>
    </Shell>
  );
}
