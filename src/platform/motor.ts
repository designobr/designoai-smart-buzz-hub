// Ligação do app (designoai.com.br/app) com o motor DesignoAI Social Publisher.
// Autenticação e usuários: Supabase do MOTOR (fonte única). Dados e regras: API v1 do motor, com o token do usuário no cabeçalho.
// O site público (formulários de contato e carreiras) continua usando o cliente de src/integrations/supabase, que é outro projeto.
import { createClient } from '@supabase/supabase-js';
import { brokeredPreviewStorage } from '@/integrations/supabase/previewAuthStorage';

const env = import.meta.env as Record<string, string | undefined>;

// Padrões de HOMOLOGAÇÃO. Em produção, defina as três variáveis no Lovable (ver docs/INTEGRACAO-MOTOR.md).
const MOTOR_SUPABASE_URL = env.VITE_MOTOR_SUPABASE_URL ?? 'https://nmcdubactqflufusvmdu.supabase.co';
const MOTOR_SUPABASE_KEY = env.VITE_MOTOR_SUPABASE_KEY ?? 'sb_publishable_RNOGLYIQ_d6RSPx6DLne9g_yoMD0ZIi';
export const MOTOR_API = (env.VITE_MOTOR_API_URL ?? 'https://social-publisher-web-homologacao.up.railway.app').replace(/\/$/, '');

export const motorAuth = createClient(MOTOR_SUPABASE_URL, MOTOR_SUPABASE_KEY, {
  auth: { storage: brokeredPreviewStorage(), persistSession: true, autoRefreshToken: true, storageKey: 'sb-motor-auth' },
});

export class ApiError extends Error {
  constructor(message: string, public status: number) { super(message); }
}

export async function api<T>(path: string, opts: { method?: 'GET' | 'POST' | 'PUT'; body?: unknown; org?: string | null } = {}): Promise<T> {
  const { data } = await motorAuth.auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new ApiError('Sua sessão expirou. Entre de novo.', 401);
  const headers: Record<string, string> = { Authorization: `Bearer ${token}` };
  if (opts.org) headers['X-Organizacao-Id'] = opts.org;
  if (opts.body !== undefined) headers['Content-Type'] = 'application/json';
  let r: Response;
  try {
    r = await fetch(`${MOTOR_API}/api/v1${path}`, {
      method: opts.method ?? (opts.body !== undefined ? 'POST' : 'GET'), headers,
      body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
    });
  } catch {
    throw new ApiError('Não foi possível falar com o servidor. Tente de novo em instantes.', 0);
  }
  const j = (await r.json().catch(() => ({}))) as { erro?: string };
  if (!r.ok) throw new ApiError(j.erro ?? `Erro ${r.status}`, r.status);
  return j as T;
}

// ---- Tipos da API v1 (espelham src/web/api/v1.ts do motor) ----
export type Organizacao = { organizacao_id: string; nome: string; slug: string; papel: string; status: string };
export type SessaoApi = { usuario: { id: string; email: string | null }; organizacoes: Organizacao[]; admin: boolean };

export type Rede = 'instagram' | 'threads' | 'tiktok' | 'youtube';
export const REDES: { key: Rede; label: string }[] = [
  { key: 'instagram', label: 'Instagram' }, { key: 'threads', label: 'Threads' },
  { key: 'tiktok', label: 'TikTok' }, { key: 'youtube', label: 'YouTube' },
];

export type Item = {
  id: string; ordem: number; dataPrevista: string; rede: Rede; formato: string; pilar: string | null; tema: string; briefing: string | null;
  estado: string; roteiro: string | null; titulo: string | null; legenda: string | null; hashtags: string[]; revisoesUsadas: number;
  rascunhoId: string | null; motivoBloqueio: string | null;
};
export type Estado = { agenteAtivo: boolean; provedor: string };
export type Planejamento = {
  mes: string; hoje: string; plano: { resumo: string | null; objetivos: string[]; pilares: { nome: string; descricao: string }[]; estado: string } | null;
  itens: Item[]; falhas: { id: string; tipo: string; erroMensagem: string | null }[]; pendentes: number; podeGerar: boolean; podeRefazer: boolean; estado: Estado;
};
export type MidiaBiblioteca = { id: string; video: boolean; largura: number | null; altura: number | null; duracaoS: number | null };
export type Conteudo = {
  item: Item; revisoes: { numero: number; pedido: string; atendidaEm: string | null }[]; restantes: number; podePedir: boolean; podeAnexar: boolean;
  midias: MidiaBiblioteca[]; hash: string | null;
};
export type ResultadoMidia = { id: string; status: string; erros: unknown[] };
export type Consumo = {
  creditos: { periodo: string; incluido: number; avulso: number; reservado: number; consumido: number; disponivel: number };
  lancamentos: { id: number; tipo: string; quantidade: number; motivo: string | null; criadoEm: string }[];
  revisoesPorConteudo: number; estado: Estado;
};
export type Negocio = {
  nomeFantasia: string; segmento: string; descricao: string; publicoAlvo: string; tomDeVoz: string; objetivos: string[]; diferenciais: string[];
  produtos: string[]; regioes: string[]; siteUrl: string; palavrasEvitar: string[]; redes: Rede[]; frequenciaSemanal: Partial<Record<Rede, number>>; observacoes: string;
};
export type Conta = { id: string; rede: string; nome: string; status: string; erro: string | null; tokenExpiraEm: string | null };
export type PlanoVenda = { codigo: string; nome: string; precoCentavos: number; ciclo: 'MONTHLY' | 'YEARLY'; limiteContas?: number | null; limitePublicacoesMes?: number | null; limiteClientes?: number | null };
export type Assinatura = {
  planoNome: string; status: string; valorCentavos: number; ciclo: string; proximoVencimento: string | null; acessoAte: string | null; inadimplenteDesde: string | null;
} | null;
export type AssinaturaApi = {
  plano: { limiteContas: number | null; limitePublicacoesMes: number | null; limiteClientes: number | null; ativo: boolean } | null;
  uso: { usado: number; reservado: number } | null; cobrancaDisponivel: boolean; assinatura: Assinatura; planosParaContratar: PlanoVenda[];
};

export const reais = (centavos: number) => (centavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

async function token(): Promise<string> {
  const { data } = await motorAuth.auth.getSession();
  if (!data.session) throw new ApiError('Sua sessão expirou. Entre de novo.', 401);
  return data.session.access_token;
}

/** Imagem (PNG ou JPEG, até 8 MB): bytes no corpo, nome no cabeçalho. */
export async function enviarImagem(org: string, arquivo: File): Promise<ResultadoMidia> {
  if (!['image/png', 'image/jpeg'].includes(arquivo.type)) throw new ApiError('Use uma imagem PNG ou JPEG.', 422);
  if (arquivo.size > 8 * 1024 * 1024) throw new ApiError('A imagem passa de 8 MB.', 422);
  const r = await fetch(`${MOTOR_API}/api/v1/midias/imagem`, {
    method: 'POST', body: arquivo,
    headers: { Authorization: `Bearer ${await token()}`, 'X-Organizacao-Id': org, 'Content-Type': arquivo.type, 'X-Nome-Arquivo': encodeURIComponent(arquivo.name) },
  }).catch(() => { throw new ApiError('Não foi possível enviar. Tente de novo.', 0); });
  const j = (await r.json().catch(() => ({}))) as ResultadoMidia & { erro?: string };
  if (!r.ok) throw new ApiError(j.erro ?? `Erro ${r.status}`, r.status);
  return j;
}

/** Vídeo MP4 ou MOV: o navegador envia direto ao armazenamento por URL temporária e o motor valida (formato, duração, proporção). */
export async function enviarVideo(org: string, arquivo: File, progresso: (pct: number) => void): Promise<ResultadoMidia> {
  const mime = arquivo.type === 'video/quicktime' ? 'video/quicktime' : 'video/mp4';
  if (!['video/mp4', 'video/quicktime'].includes(arquivo.type)) throw new ApiError('Use um vídeo MP4 ou MOV.', 422);
  const prep = await api<{ upload_id: string; upload_url: string }>('/midias/video/preparar', { org, body: { nome: arquivo.name, mime, tamanho: arquivo.size } });
  await new Promise<void>((ok, falha) => {
    const x = new XMLHttpRequest();
    x.open('PUT', prep.upload_url); x.setRequestHeader('Content-Type', mime);
    x.upload.onprogress = (e) => { if (e.lengthComputable) progresso(Math.round((e.loaded / e.total) * 100)); };
    x.onload = () => (x.status >= 200 && x.status < 300 ? ok() : falha(new ApiError('O envio do vídeo foi recusado. Confira o formato e o tamanho.', x.status)));
    x.onerror = () => falha(new ApiError('A conexão caiu durante o envio. Tente de novo.', 0));
    x.send(arquivo);
  });
  return api<ResultadoMidia>('/midias/video/finalizar', { org, body: { uploadId: prep.upload_id } });
}
