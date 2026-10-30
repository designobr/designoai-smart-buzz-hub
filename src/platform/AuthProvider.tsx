import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

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
    setTimeout(() => {
      supabase.from('user_roles').select('role').eq('user_id', uid).eq('role', 'admin').maybeSingle()
        .then(({ data }) => setIsAdmin(!!data));
    }, 0);
  }, [session?.user.id]);

  return (
    <AuthContext.Provider value={{ user: session?.user ?? null, session, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
