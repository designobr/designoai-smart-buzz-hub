import { useQuery } from '@tanstack/react-query';
import { chamarMotor } from './motor-api';
import { useAuth } from './AuthProvider';

type Sessao = { usuario: { id: string; email: string }; organizacoes: Array<{ organizacao_id: string; nome: string; slug: string; papel: string; status: string }> };

/** A empresa do cliente é a primeira organização da qual ele é membro (o motor cuida do isolamento). */
export function useCompany() {
  const { user } = useAuth();
  return useQuery({
    queryKey: ['company', user?.id],
    enabled: !!user,
    queryFn: async () => {
      const sessao = await chamarMotor<Sessao>('/sessao');
      const org = sessao.organizacoes[0];
      return org ? { id: org.organizacao_id, name: org.nome, papel: org.papel } : null;
    },
  });
}
