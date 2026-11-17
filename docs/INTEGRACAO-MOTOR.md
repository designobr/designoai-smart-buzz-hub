# Integração do /app com o motor (DesignoAI Social Publisher)

O `designoai.com.br/app` é a interface do motor. **Autenticação e usuários: Supabase do motor (fonte única).** Dados e regras: API v1 do motor (`/api/v1`), com o token do usuário no cabeçalho `Authorization` e a organização em `X-Organizacao-Id`.

## O que mudou
- `src/platform/motor.ts`: cliente Supabase do motor (`motorAuth`), função `api()` e tipos da API v1.
- `AuthProvider`, `AuthPages`, `AppLayout`: login, cadastro e recuperação de senha agora no projeto do motor. Primeiro acesso sem organização mostra "Crie a sua organização" (`POST /api/v1/organizacoes`).
- `AppPages`: Painel, Empresa e marca, Planejamento, Produção (revisar, aprovar, pedir alteração), Redes sociais (inicia o OAuth no motor) e Assinatura (contratar e cancelar pelo Asaas), todos pela API.
- `AdminPages`: organizações e planos pela API (só administrador da plataforma).
- O **site público** (formulário de contato e carreiras) continua no cliente antigo `src/integrations/supabase`, que não foi alterado.

## Configuração (padrões = HOMOLOGAÇÃO)
Definidos em `src/platform/motor.ts`, sobrescritos por variáveis de build quando existirem:
| Variável | Padrão (homologação) | Produção |
|---|---|---|
| `VITE_MOTOR_SUPABASE_URL` | `https://nmcdubactqflufusvmdu.supabase.co` | URL do Supabase de produção do motor |
| `VITE_MOTOR_SUPABASE_KEY` | chave publicável da homologação | chave publicável de produção |
| `VITE_MOTOR_API_URL` | `https://social-publisher-web-homologacao.up.railway.app` | domínio do motor em produção |

## Colocar no ar (Lovable)
**Atenção:** publicar esta versão em `designoai.com.br/app` faz o app falar com a **homologação** do motor e passa a aceitar só usuários do Supabase da homologação. Os cadastros antigos do projeto `neeqvcymmnavnrencmsj` deixam de entrar no `/app`. Publique só quando aceitar isso ou depois de o motor de produção existir (troque os três valores acima antes).
1. No GitHub, abra um Pull Request de `claude/designoai-social-publisher-audit-bksx55` para `main` em `designobr/designoai-smart-buzz-hub` e faça o merge.
2. O Lovable sincroniza a `main` sozinho. Abra o projeto no Lovable e confira que o preview carrega.
3. No painel do Supabase do motor, em **Authentication → URL Configuration**, defina **Site URL** `https://designoai.com.br/auth/login` e inclua em **Redirect URLs** `https://designoai.com.br/**`. Sem isso, os links de confirmação de e-mail e de recuperação de senha não voltam para o app. Em **Authentication → SMTP**, configure o e-mail de envio.
4. No Lovable, clique em **Publish → Update**.
5. Verifique: abra `https://designoai.com.br/app`, entre, crie a organização e confira que o painel carrega.
6. O motor já aceita a origem `https://designoai.com.br` (`API_ORIGENS`). Para um domínio de testes do Lovable (por exemplo `*.lovable.app`), acrescente a origem exata em `API_ORIGENS` no Railway.

## Teste
`e2e/motor-app.cjs` (Playwright) roda o fluxo inteiro contra a homologação: login, criar organização, salvar empresa, planejamento, produção, redes, contratar no Asaas Sandbox e bloqueio de `/admin` para não administradores.

## Limites conhecidos
- Aprovar um conteúdo depende do agente de IA estar ligado e de haver mídia; sem isso a Produção fica vazia.
- Anexar mídia às peças e desconectar contas ainda são feitos nas telas do motor (`/app` do domínio do motor).
- Depois de autorizar uma rede, o retorno do OAuth termina numa página do motor, não no `/app`.
