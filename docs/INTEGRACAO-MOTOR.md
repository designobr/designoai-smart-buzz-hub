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

## Funcionalidades do /app (todas pela API v1)
- **Conexão de redes dentro do app:** o botão Conectar leva à rede e o retorno volta para `/app/conexoes` com o resultado (conta conectada, erro ou escolha de conta). O destino viaja no `state` do OAuth e só vale para origens de `API_ORIGENS` e caminhos sob `/app`.
- **Desconectar contas** (administrador e editor), com confirmação.
- **Envio de mídia:** imagem PNG ou JPEG (até 8 MB) e vídeo MP4 ou MOV (envio direto ao armazenamento por URL temporária, validação no motor). Instagram aceita só JPEG, e o app avisa antes.
- **Agente de IA:** estados de processamento (a tela se atualiza sozinha), erros com mensagem, refazer planejamento, aviso claro quando o agente está desligado, créditos e falta de crédito. A administração liga, desliga e configura o provedor e a chave em `/admin`.
- **Revisão e aprovação** de conteúdos, pedido de alteração e anexar mídia à peça.
- **Configurações:** dados da organização, membros e convites, perfil de publicação automática (com as declarações do YouTube e do TikTok feitas pelo administrador), exportação e exclusão LGPD.
- **Painel:** publicações recentes (com link), avisos e resumo.
- **Assinatura:** planos, contratar e cancelar (Asaas), uso do mês e créditos.

## Testes
Em navegador real (Playwright), contra a homologação, servindo o build como `https://designoai.com.br`:
- `e2e/app-completo.cjs`: 23 verificações (login, painel, conexões com retorno do OAuth, desconectar, produção com envio de imagem e a regra de JPEG do Instagram, planejamento, configurações, perfil de publicação, exportação e administração do agente).
- `e2e/video.cjs`: envio de vídeo direto ao armazenamento, validação e anexo.
Uso: `npm run build` e `E=<email> S=<senha> node e2e/app-completo.cjs` com um usuário descartável e uma organização de teste semeada (ver o cabeçalho do script).

## Limites conhecidos
- O motor ainda exige o agente de IA ligado (chave de provedor) para gerar planejamento e textos; sem isso o app mostra o aviso e a Produção fica vazia.
- Agendamento manual avulso, relatórios por cliente (agências) e calendário editorial do motor ainda não têm tela no app. A rotina padrão (planejar, revisar, aprovar, publicar) está completa.
- Recuperação de senha e confirmação de e-mail dependem da configuração de URLs e SMTP do Auth (passo 3 acima).
