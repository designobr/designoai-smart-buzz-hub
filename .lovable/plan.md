

# Plano: Landing Page "AI SDR" — `/ai-sdr`

## Resumo
Criar uma landing page standalone em `/ai-sdr` focada em conversão para o produto AI SDR da DesignoAI. A página seguirá o design system existente (Dark Premium 2026) mas com identidade visual própria e mais agressiva, usando destaques neon/cyan mais fortes.

## Estrutura da Página

A página será um componente único `src/pages/AiSdr.tsx` com 6 seções conforme especificado, sem usar o `SubpageLayout` (para ter controle total do layout de conversão).

### Seções

1. **Hero** — Tagline em badge animado, headline com shimmer na palavra "Automática", sub-headline, botão CTA grande com glow que redireciona para WhatsApp
2. **Problema vs. Solução** — Layout em 2 colunas: esquerda vermelha/negativa ("O Jeito Antigo") vs. direita cyan/positiva ("O Jeito DesignoAI"), com ícones e texto exato fornecido
3. **Como a IA Trabalha por Você** — 3 colunas com cards glass, ícones, números de passo e textos exatos
4. **Autoridade (Efeito Inception)** — Seção de destaque com fundo diferenciado, título e texto exatos
5. **Benefícios** — 3 cards com ícones: Sem Custos Trabalhistas, Segurança Total, Tráfego Qualificado
6. **Fechamento/CTA Final** — Título, texto e botão WhatsApp

### Componentes Visuais
- Navbar e Footer reutilizados do site principal
- Partículas flutuantes no Hero (mesmo padrão da homepage)
- Animated counters onde aplicável
- Framer Motion para scroll animations em todas as seções
- Botões CTA com glow-md e hover effects

### Imagens
- Não serão geradas imagens com IA neste momento (o modelo de imagem não consegue gerar fotos realistas com poros visíveis de forma confiável). Usaremos placeholders estilizados ou ícones premium. O usuário pode fornecer fotos reais depois.

## Alterações Técnicas

| Arquivo | Ação |
|---------|------|
| `src/pages/AiSdr.tsx` | **Criar** — Landing page completa (~300 linhas) |
| `src/App.tsx` | **Editar** — Adicionar rota `/ai-sdr` |

### Detalhes de Implementação
- SEOHead com meta tags OG específicas para o AI SDR
- Todos os textos exatamente como fornecidos pelo usuário
- Botões CTA redirecionam para WhatsApp (`wa.me/5511947968158`) com mensagem contextual
- Layout responsivo mobile-first
- Seção Problema vs. Solução usa grid 1col mobile / 2col desktop com bordas coloridas (vermelho vs. cyan)
- Seção Inception com background gradiente diferenciado para destaque

