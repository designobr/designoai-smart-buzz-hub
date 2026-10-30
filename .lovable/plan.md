# Integração Asaas: assinaturas do DesignoAI Social Automation

Mantém o Supabase atual, o site institucional e todas as tabelas existentes. Começa no Sandbox do Asaas. O acesso só é liberado quando um webhook do Asaas confirma o pagamento; nada é marcado como pago pelo navegador.

## Fluxo

```text
Cliente (/app/billing) -> escolhe plano + forma (cartão, Pix, boleto)
   -> asaas-create-subscription (edge function)
        cria/reaproveita cliente no Asaas, cria assinatura mensal
        grava subscription status=pending
   <- link de pagamento / QR Pix / boleto do Asaas
Asaas -> asaas-webhook (token verificado)
   -> registra evento (idempotente), atualiza pagamento e assinatura
   -> PAYMENT_CONFIRMED/RECEIVED: status=active, renova período, concede créditos do plano
   -> PAYMENT_OVERDUE: status=past_due, acesso suspenso
   -> SUBSCRIPTION_DELETED/INACTIVATED: status=canceled
```

## Edge Functions

1. **asaas-create-subscription**: usuário logado; valida plano e forma de pagamento; cria cliente Asaas (CPF/CNPJ obrigatório) e assinatura `cycle=MONTHLY`; retorna a URL da primeira cobrança.
2. **asaas-webhook**: público; exige o header `asaas-access-token` igual ao segredo salvo; grava cada evento uma única vez; atualiza tudo com permissão de serviço.
3. **asaas-manage-subscription**: usuário logado; cancela ou troca de plano/forma de pagamento no Asaas. O status local só muda quando o webhook correspondente chega.
4. **asaas-apply-subscription-change**: somente admin; aplica no Asaas e no banco uma alteração já autorizada e com aviso prévio enviado.
5. **asaas-sync-payments** (opcional, admin): reconsulta a API do Asaas para corrigir eventos perdidos.

Um módulo `_shared/asaas.ts` centraliza a chamada à API (URL sandbox ou produção pelo segredo de ambiente).

## Eventos de webhook tratados

- Pagamento: `PAYMENT_CREATED`, `PAYMENT_UPDATED`, `PAYMENT_CONFIRMED`, `PAYMENT_RECEIVED`, `PAYMENT_OVERDUE`, `PAYMENT_REFUNDED`, `PAYMENT_DELETED`, `PAYMENT_CHARGEBACK_REQUESTED`
- Assinatura: `SUBSCRIPTION_CREATED`, `SUBSCRIPTION_UPDATED`, `SUBSCRIPTION_INACTIVATED`, `SUBSCRIPTION_DELETED`

Regras de acesso: `active` libera; `past_due` suspende a geração e a publicação, mas mantém o painel e o histórico visíveis; `canceled` mantém o acesso até o fim do período já pago. Os créditos do plano entram uma vez por pagamento confirmado (chave única por pagamento, sem duplicar).

## Alterações no banco (somente acréscimos)

- `plans`: adicionar `price_cents` e `currency`. Hoje não há nenhum plano cadastrado; serão criados Start (9700), Professional (19700) e Premium (39700), todos em BRL. Preço, limites e créditos ficam editáveis na tela de planos do admin, sem mudar código. O preço do plano vale apenas para novas assinaturas.
- `companies`: adicionar `billing_document` (CPF/CNPJ), `asaas_customer_id`.
- `subscriptions`: adicionar `price_cents`, `currency` e `contracted_limits` (cópia dos limites e créditos do plano no momento da contratação), além de `billing_type`, `next_due_date`, `last_payment_at`; reaproveitar `provider='asaas'` e `provider_subscription_id`.
- Nova `billing_payments`: id Asaas, assinatura, valor, forma, status, vencimento, data de pagamento, links de fatura/boleto/Pix. Cliente apenas lê os da própria empresa.
- Nova `billing_webhook_events`: id do evento Asaas único, tipo, payload, processado em. Somente serviço.
- Nova `subscription_changes`: alteração de valor ou limites de um contrato ativo. Campos: valores antigo e novo, motivo, admin que pediu, data de aviso ao cliente, data de vigência, status (`proposed`, `notified`, `authorized`, `applied`, `canceled`) e quem autorizou. Somente admin e serviço.
- Função `company_has_active_access(company)` usada pelas políticas e pelas funções de geração.
- Tabela `orders` e demais tabelas permanecem intactas.

## Proteção dos contratos ativos

- Ao assinar, preço, limites e créditos do plano são copiados para a assinatura. Créditos mensais e limites sempre vêm dessa cópia, nunca do plano atual.
- Editar um plano no admin não altera nenhuma assinatura existente.
- Para mudar um contrato ativo, o admin cria uma proposta de alteração. O cliente é avisado no painel e por e-mail, com a data em que passa a valer. Um admin autoriza explicitamente.
- Só então `asaas-apply-subscription-change` atualiza o valor no Asaas (sem alterar cobranças já geradas) e grava a mudança no histórico.

## Painel do cliente

- Página **Assinatura**: plano atual, status, próxima cobrança, créditos, botões de assinar, trocar ou cancelar.
- **Histórico de cobranças**: lista de `billing_payments` com status e link para fatura/boleto/Pix.
- Aviso de pagamento pendente ou em atraso.

## Pix Automático

O Asaas oferece Pix Automático por autorização recorrente, mas a disponibilidade depende de habilitação na conta e no Sandbox. Primeira entrega: Pix recorrente comum (uma cobrança Pix por mês). Pix Automático entra como etapa seguinte, depois de confirmar que a conta tem a função ativa.

## Segredos (guardados no Supabase, nunca no chat ou no código)

- `ASAAS_API_KEY`: chave do Sandbox (você cola num formulário seguro).
- `ASAAS_WEBHOOK_TOKEN`: token que você define no painel do Asaas, em Integrações > Webhooks.
- `ASAAS_ENV`: `sandbox` agora, `production` depois.

## Ordem de execução

1. Migração do banco.
2. Edge functions + publicação do webhook (para você já ter a URL).
3. Pedido dos segredos e configuração do webhook no Asaas Sandbox.
4. Telas de assinatura e histórico.
5. Teste real no Sandbox: assinar, pagar pelo simulador do Asaas e conferir a liberação via webhook.

Produção fica bloqueada: com `ASAAS_ENV=sandbox` as funções só falam com sandbox.asaas.com. A troca para produção só acontece com sua aprovação.
