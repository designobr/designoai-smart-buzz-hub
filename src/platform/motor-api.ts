// Chamadas à API v1 do motor. Envia o token da sessão (Bearer) e a organização escolhida (X-Organizacao-Id).
import { motorSupabase } from './motor-cliente';

export const MOTOR_API =
  (import.meta.env.VITE_MOTOR_API_URL as string | undefined) ??
  'https://social-publisher-web-homologacao.up.railway.app/api/v1';

export class ErroMotor extends Error {
  constructor(public status: number, mensagem: string) {
    super(mensagem);
  }
}

type Opcoes = { metodo?: 'GET' | 'POST' | 'PUT'; corpo?: unknown; organizacaoId?: string };

export async function chamarMotor<T>(caminho: string, opcoes: Opcoes = {}): Promise<T> {
  const { data } = await motorSupabase.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new ErroMotor(401, 'Sessão expirada. Entre novamente.');
  const cabecalhos: Record<string, string> = { Authorization: `Bearer ${token}` };
  if (opcoes.corpo !== undefined) cabecalhos['Content-Type'] = 'application/json';
  if (opcoes.organizacaoId) cabecalhos['X-Organizacao-Id'] = opcoes.organizacaoId;
  const res = await fetch(`${MOTOR_API}${caminho}`, {
    method: opcoes.metodo ?? 'GET',
    headers: cabecalhos,
    body: opcoes.corpo !== undefined ? JSON.stringify(opcoes.corpo) : undefined,
  });
  const json = (await res.json().catch(() => ({}))) as { erro?: string };
  if (!res.ok) throw new ErroMotor(res.status, json.erro ?? `Erro ${res.status}`);
  return json as T;
}
