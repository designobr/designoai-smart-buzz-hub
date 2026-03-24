

# Refinar WireframeVisual — De Wireframe para "Página Real" de Alta Fidelidade

## Resumo
Substituir o conteúdo interno do `WireframeVisual.tsx` mantendo o frame externo (perspectiva, flutuação, glow) mas trocando os blocos cinzas genéricos por elementos de UI ricos e detalhados que simulam uma página finalizada.

## Alteração: `src/components/hero-visuals/WireframeVisual.tsx`

Reescrever o conteúdo interno do painel (mantendo wrapper, glow, floating animation e perspective) com 4 seções sequenciais animadas via stagger:

### 1. Header (delay 0.5s)
- Mini texto "DesignoAI" em `text-primary` como logo (font-bold, ~text-[5px])
- 3 linhas horizontais empilhadas no lado direito simulando menu burger (w-2.5, h-px, bg-foreground/30)

### 2. Hero Section (delay 0.8s)
- Título "Seu Site Inteligente" em `text-[6px] font-bold` com `bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent`
- 2 linhas finas de subtítulo (h-1 rounded bg-muted/40) com larguras diferentes
- 2 mini botões lado a lado: um com `bg-primary/30 border-primary/20` (glow sutil via box-shadow) e outro `bg-muted/20 border-border/20`, ambos com texto simulado (h-1 w-6)

### 3. Features Grid — 2x2 (delay 1.2s, stagger 0.15s por card)
- 4 cards glass (`bg-muted/10 border border-border/20 rounded-md p-1.5`)
- Cada card com um SVG path inline minimalista no topo (~8x8px, stroke primary): raio (Zap), engrenagem (Settings), foguete (Rocket), gráfico (BarChart)
- Abaixo do ícone: 2 linhas finas simulando legenda (h-0.5 w-full e h-0.5 w-3/4)

### 4. Form Section (delay 2.0s)
- 2 inputs simulados: retângulos arredondados `bg-background/30 border border-border/30 rounded h-3 w-full` com texto placeholder em `text-[4px] text-muted-foreground/50` ("Nome", "Email")
- Botão de envio: `bg-primary/30 rounded h-3.5 w-full` com texto "Enviar" em `text-[4px] text-primary-foreground/70 font-semibold`

### Técnico
- Todos os ícones são SVG `<path>` inline (sem importar lucide dentro do visual para manter leveza)
- Grid muda de 3 colunas para 2x2 para caber melhor no espaço vertical
- Container interno troca `space-y-3` para `space-y-2` para acomodar mais conteúdo
- Padding interno reduzido para `p-3`

