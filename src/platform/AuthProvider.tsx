import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { motorSupabase as supabase } from './motor-cliente';
import { chamarMotor } from './motor-api';

type AuthState = { user: User | null; session: Session | null; loading: boolean; isAdmin: boolean };
const AuthContext = createContext<AuthState>({ user: null, session: null, loading: true, isAdmin: false });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const uid = session?.user.id;
    if (!uid) return setIsAdmin(false);
    // Role is read from the protected user_roles table; RLS enforces it server-side too.
    // Administrador da plataforma: a API só responde à lista de organizações para quem é administrador (a função do banco confere).
    setTimeout(() => {
      chamarMotor('/admin/planos').then(() => setIsAdmin(true)).catch(() => setIsAdmin(false));
    }, 0);
  }, [session?.user.id]);

  return (
    <AuthContext.Provider value={{ user: session?.user ?? null, session, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
