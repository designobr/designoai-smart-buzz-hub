

# Elevar o Padrão Visual — Heroes Premium para Todo o Site

## Resumo

O projeto tem 4 grupos de páginas com heroes distintos:
1. **Home** — componente `Hero.tsx` dedicado (centralizado, sem 2 colunas)
2. **Services, Studio, AiSdr** — heroes customizados inline
3. **SitesIA** — usa SubpageLayout (hero genérico)
4. **15+ subpáginas** — todas usam `SubpageLayout` com hero genérico centralizado

A estratégia é criar um componente `PremiumHero` reutilizável que aceita o elemento visual como prop, e atualizar o `SubpageLayout` para usá-lo. Páginas com hero customizado (Services, Studio, AiSdr) e a Home serão atualizadas individualmente.

---

## Arquitetura

### 1. Novo componente: `src/components/PremiumHero.tsx`

Componente reutilizável com as seguintes props:
- `badge` — texto do badge (com ícone Sparkles)
- `title` — texto antes do gradient
- `titleGradient` — texto com gradient
- `subtitle` — parágrafo explicativo
- `ctaLabel`, `ctaHref`, `onCtaClick` — botão principal (opcional)
- `secondaryCtaLabel`, `onSecondaryCta` — botão secundário (opcional)
- `visualElement` — `ReactNode` para a coluna da direita

Layout interno:
- `grid md:grid-cols-2 gap-12 items-center`
- Coluna esquerda: `text-center md:text-left`
- Background: glows radiais (primary/5 e purple/5) + blur
- Animações fadeUp com framer-motion
- Botões com glow-sm e hover effects

### 2. Atualizar `SubpageLayout.tsx`

Substituir o hero genérico centralizado pelo novo `PremiumHero`. Adicionar prop `visualElement?: ReactNode` ao `SubpageLayout`. Se nenhum `visualElement` for passado, renderizar um elemento visual padrão genérico (orbs flutuantes com ícone da página).

### 3. Elementos visuais por página (coluna direita) — todos em CSS/SVG/Framer Motion

Cada elemento visual será um componente inline ou pequeno componente dedicado. Nenhuma imagem externa.

| Página | Elemento Visual |
|--------|----------------|
| **Home (Index)** | Dashboard futurista: painel glass com barras de gráfico animadas, indicadores pulsantes e linhas de dados flutuantes |
| **Serviços** | Ícones de serviço orbitando um núcleo central (engrenagem/Zap), rotação infinita lenta |
| **Sobre Nós** | Rede de nós conectados (circles + lines SVG) com pulso animado representando conexão humano-tech |
| **Recursos** | Grid de cards miniatura flutuando em perspectiva 3D com stagger |
| **Blog** | Documento/artigo estilizado com linhas de texto animadas aparecendo |
| **Carreiras** | Silhuetas de pessoas abstratas (circles) conectadas em rede, pulsando |
| **Casos de Sucesso** | Gráfico de crescimento SVG com linha animada subindo + seta |
| **Parcerias** | Dois círculos glass se conectando com linha animada (handshake visual) |
| **SitesIA** | Wireframe de site flutuante em perspectiva com elementos aparecendo |
| **Studio** | Lente de câmera estilizada em SVG com reflexos animados |
| **Subpáginas menores** (Privacidade, Termos, Cookies, feature pages) | Elemento genérico padrão: orbs flutuantes com ícone central da página |

### 4. Páginas a atualizar individualmente

- **`src/components/Hero.tsx`** (Home): Refatorar para layout 2 colunas com dashboard visual na direita
- **`src/pages/Services.tsx`**: Substituir hero centralizado por `PremiumHero` com visual de órbita
- **`src/pages/Studio.tsx`**: Substituir hero gradient-bg por `PremiumHero` com lente/câmera visual (manter tema de cores do Studio)
- **`src/pages/AiSdr.tsx`**: Hero já tem bom padrão, apenas alinhar estilo do título/badge com o novo padrão

### 5. Subpáginas via SubpageLayout (atualização automática)

As ~15 páginas que usam `SubpageLayout` receberão o novo hero automaticamente ao atualizar o componente. Cada uma passará seu `visualElement` contextual como prop, ou usará o elemento genérico padrão.

---

## Detalhes técnicos

- Todos os visuais usam `framer-motion` para floating (`y: [0, -15, 0]`), fade-in e scale
- Glows radiais: `bg-primary/20 blur-[80px]` atrás dos elementos visuais
- Glass panels: `bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl`
- SVGs inline para gráficos, linhas, formas
- Nenhuma dependência nova necessária

## Arquivos alterados

1. `src/components/PremiumHero.tsx` — novo componente
2. `src/components/SubpageLayout.tsx` — usar PremiumHero
3. `src/components/Hero.tsx` — refatorar para 2 colunas
4. `src/pages/Services.tsx` — novo hero
5. `src/pages/Studio.tsx` — novo hero
6. `src/pages/SobreNos.tsx` — passar visual element
7. `src/pages/Recursos.tsx` — passar visual element
8. `src/pages/Blog.tsx` — passar visual element
9. `src/pages/Carreiras.tsx` — passar visual element
10. `src/pages/CasosSucesso.tsx` — passar visual element
11. `src/pages/Parcerias.tsx` — passar visual element
12. `src/pages/SitesIA.tsx` — converter para usar PremiumHero diretamente (landing page)
13. Subpáginas menores (Termos, Privacidade, Cookies, feature pages) — usarão visual genérico padrão do SubpageLayout

## Ordem de implementação

1. Criar `PremiumHero.tsx`
2. Criar elementos visuais para as páginas principais (Home, Serviços, Sobre Nós, SitesIA)
3. Atualizar `SubpageLayout.tsx`
4. Atualizar Hero.tsx (Home)
5. Atualizar Services, Studio
6. Atualizar subpáginas que precisam de visual customizado
7. Testar responsividade

