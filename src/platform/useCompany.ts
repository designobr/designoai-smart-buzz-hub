import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthProvider';

/** The signed-in client's company (first one they own). */
export function useCompany() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['company', user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase.from('companies').select('*')
        .eq('owner_id', user!.id).order('created_at').limit(1).maybeSingle();
      if (error) throw error;
      return data;
    },
  });
}
