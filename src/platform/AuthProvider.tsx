import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { useQueryClient } from '@tanstack/react-query';
import { api, motorAuth, type Organizacao, type SessaoApi } from './motor';

type AuthState = {
  user: User | null; session: Session | null; loading: boolean; isAdmin: boolean;
  /** Organizações do usuário no motor, a escolhida e a troca. `ready` indica que /sessao já respondeu. */
  orgs: Organizacao[]; org: Organizacao | null; orgId: string | null; setOrgId: (id: string) => void; ready: boolean; erro: string; reload: () => Promise<void>;
};
const vazio: AuthState = { user: null, session: null, loading: true, isAdmin: false, orgs: [], org: null, orgId: null, setOrgId: () => undefined, ready: false, erro: '', reload: async () => undefined };
const AuthContext = createContext<AuthState>(vazio);
const CHAVE_ORG = 'motor-org';
const lerOrg = () => { try { return localStorage.getItem(CHAVE_ORG); } catch { return null; } };

export function AuthProvider({ children }: { children: ReactNode }) {
  const qc = useQueryClient();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [sessao, setSessao] = useState<SessaoApi | null>(null);
  const [erro, setErro] = useState('');
  const [escolhida, setEscolhida] = useState<string | null>(lerOrg());

  useEffect(() => {
    const { data: sub } = motorAuth.auth.onAuthStateChange((_e, s) => setSession(s));
    motorAuth.auth.getSession().then(({ data }) => { setSession(data.session); setLoading(false); });
    return () => sub.subscription.unsubscribe();
  }, []);

  const uid = session?.user.id ?? null;
  const reload = useCallback(async () => {
    if (!uid) { setSessao(null); setErro(''); return; }
    try { setSessao(await api<SessaoApi>('/sessao')); setErro(''); }
    catch (e) { setErro((e as Error).message); }
  }, [uid]);
  // setTimeout: o cliente do Supabase não deve ser chamado dentro do próprio callback de mudança de sessão.
  useEffect(() => { const t = setTimeout(() => { void reload(); }, 0); return () => clearTimeout(t); }, [reload]);

  const orgs = sessao?.organizacoes ?? [];
  const org = orgs.find((o) => o.organizacao_id === escolhida) ?? orgs[0] ?? null;
  const setOrgId = useCallback((id: string) => {
    setEscolhida(id); try { localStorage.setItem(CHAVE_ORG, id); } catch { /* sem armazenamento */ }
    qc.clear();
  }, [qc]);

  const valor = useMemo<AuthState>(() => ({
    user: session?.user ?? null, session, loading, isAdmin: sessao?.admin ?? false,
    orgs, org, orgId: org?.organizacao_id ?? null, setOrgId, ready: !!sessao, erro, reload,
  }), [session, loading, sessao, orgs, org, setOrgId, erro, reload]);

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
