# Roadmap

- [x] Analisar os dois vídeos e incluí-los em Criação de Conteúdo e Gestão de Redes Sociais com textos em quatro idiomas.
- [x] Validar vídeos, capas, links e apresentação em celular e desktop.
- [x] Incluir vídeo de animação 2D do AI SDR na página AI SDR (seção "Veja na prática") com textos em quatro idiomas.
- [x] Validar vídeo, capa, fallback webm, links e apresentação em celular e desktop (CDN responde 206 video/mp4).

- [x] Incluir vídeo original no AI SDR, seção de atendimento 24h e textos em quatro idiomas.
- [x] Verificar disponibilidade pública do vídeo, WhatsApp e apresentação no celular e desktop.
- [ ] Confirmar reprodução em navegador com suporte H.264: navegador automatizado não possui o codec necessário (arquivos servidos corretamente pela CDN).

- [x] Auditar imagens, cards, rotas, WhatsApp, traduções e depoimentos existentes.
- [x] Integrar a logo oficial enviada nas camadas editoriais, sem substituir fotografias.
- [x] Adicionar camadas editoriais HTML somente às imagens adequadas da home.
- [x] Tornar os seis cards de serviços integralmente clicáveis, preservando conteúdo e rotas localizadas.
- [x] Adicionar camadas editoriais HTML às imagens da galeria Studio, preservando arquivos e proporções.
- [x] Manter fotos de depoimentos intactas e verificar acabamento sem sobreposição prejudicial.
- [x] Validar home e Studio em celular e desktop, cliques, traduções e diagnósticos.
- [x] Evoluir somente os seis cards de serviços da Home com imagens existentes, textos sobrepostos, ícones e destinos preservados.
- [x] Validar os seis cards em celular e desktop, incluindo proporções, links, rolagem horizontal, compilação e console.

## DesignoAI Social Automation
- [x] Etapa 1: banco com isolamento por cliente, login/cadastro/recuperação de senha, painel, empresa e marca, planejamento (lista/calendário), produção, redes sociais, assinatura, admin (clientes e planos)
- [ ] Definir primeiro administrador (aguarda e-mail do usuário)
- [ ] Gateway de pagamento + webhooks (aguarda escolha do gateway)
- [ ] IA: análise de site e planejamento (aguarda chave Anthropic)
- [ ] Narração ElevenLabs, geração de imagem/vídeo (aguarda chaves)
- [ ] Conexões oficiais Instagram/Facebook/YouTube/Threads/TikTok ou Buffer (aguarda credenciais)
- [ ] Executor da fila de tarefas em segundo plano

## Asaas (Sandbox)
- [ ] Integração Asaas: assinaturas, webhooks, acesso e créditos (aguardando aprovação do plano)
- [ ] Preços iniciais Start R$97, Professional R$197, Premium R$397 em BRL, editáveis pelo admin
- [ ] Assinaturas preservam preço/limites/créditos contratados; mudança só por ação admin registrada, aviso prévio e autorização
- [ ] Cancelamento mantém acesso até current_period_end; cada cobrança com id/valor/vencimento/status próprios
- [ ] Validação de consistência do webhook; estornos/chargebacks; idempotência de eventos e créditos
- [ ] Concordância do cliente em mudanças contratuais; auditoria completa; relatório de testes entre etapas
