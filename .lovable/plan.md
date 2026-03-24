

# WireframeVisual — Mockup "FinancePro" com moldura de celular neon

## Resumo
Transformar o visual atual (browser wireframe) em um celular holográfico flutuante com conteúdo "FinancePro" de alta fidelidade, moldura neon cyan nas bordas, fundo transparente — conforme o celular da esquerda na imagem de referência.

## Alteração única: `src/components/hero-visuals/WireframeVisual.tsx`

### Moldura — de browser para celular
- Remover browser chrome (3 dots + URL bar)
- Moldura celular: `rounded-[24px]` com `shadow-[0_0_15px_hsl(var(--primary)/0.4),0_0_40px_hsl(var(--primary)/0.15)]` para glow neon cyan
- Status bar no topo: hora, wifi e bateria em texto minúsculo `text-[3.5px]`
- Notch centralizado `w-12 h-1.5 rounded-full bg-black/60`
- Aumentar altura para `h-[320px]` para caber mais conteúdo
- Manter perspectiva 3D e floating animation existentes

### Conteúdo interno (4 seções com stagger)

**1. Header (delay 0.5s)**
- `FINANCEPRO` em `text-[5px] font-bold text-foreground tracking-wider` com mini ícone diamond SVG
- Burger menu à direita

**2. Hero (delay 0.8s)**
- Título gradient em 2 linhas: "Sua Liberdade" / "Financeira Começa Aqui" — `text-[7px] font-bold`
- 3 linhas de lorem ipsum `text-[3.5px] text-muted-foreground/70`
- Botão CTA sólido `bg-primary rounded-full` com texto "Agendar Consultoria Gratuita" e glow

**3. Cards 2x2 (delay 1.2s, stagger 0.15s)**
- Cards com `bg-card/70 border border-border/40 rounded-lg`
- Títulos reais: "Investimentos", "Planejamento Tributário", "Aposentadoria", "Patrimônio"
- SVG icons (Zap, Gear, Rocket, BarChart) + 2 linhas descritivas `text-[3px]`

**4. Footer (delay 2.0s)**
- Divisor `h-px bg-border/20`
- "DesignoAI" centralizado + 3 social icons SVG (Facebook, X, Instagram)
- `© 2024 DesignoAI` em `text-[3px]`

### Detalhes técnicos
- Fundo do celular: `bg-background/95` (transparente, sem azul sólido)
- Borda externa: `border border-primary/30` para efeito neon
- Container wrapper mantido igual (glow radial `bg-primary/15 blur-[80px]`)
- Padding interno `p-3`, `space-y-2`
- Todos SVGs inline, sem dependências externas

