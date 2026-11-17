import { useQuery, type QueryKey } from '@tanstack/react-query';
import { api } from './motor';
import { useAuth } from './AuthProvider';

/** Consulta GET da API v1 na organização escolhida. A chave inclui a organização, então trocar de organização recarrega tudo. */
export function useMotor<T>(path: string, opts: { enabled?: boolean; extraKey?: QueryKey } = {}) {
  const { orgId } = useAuth();
  return useQuery({
    queryKey: ['motor', orgId, path, ...(opts.extraKey ?? [])],
    enabled: !!orgId && (opts.enabled ?? true),
    queryFn: () => api<T>(path, { org: orgId }),
  });
}
