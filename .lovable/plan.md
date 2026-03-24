

# Seção "Teste Agora" — Layout 2 Colunas com Mockup de Smartphone

## Resumo
Adicionar uma nova seção entre Benefícios e CTA Final com layout de 2 colunas no desktop (empilhado no mobile). Coluna esquerda com texto e botão WhatsApp gigante verde. Coluna direita com um mockup de smartphone estilizado em CSS/SVG mostrando uma interface de chat simulada, com animação de flutuação e glow neon.

## Alteração

**`src/pages/AiSdr.tsx`** — Inserir seção entre linhas 247 e 249:

### Coluna Esquerda (texto + CTA)
- Titulo gradient: "Veja a IA em Ação"
- Subtitulo: "Clique no botão abaixo e receba uma mensagem automática no seu WhatsApp agora mesmo."
- Botão gigante verde (#25D366) com ícone SVG do WhatsApp inline, texto "Testar Robô no WhatsApp", glow verde, hover scale+translate
- Link: `https://wa.me/5511978594803?text=Quero%20testar%20a%20IA%20da%20DesignoAI`
- Alinhamento: `text-left` no desktop, `text-center` no mobile

### Coluna Direita (mockup visual)
- Componente `PhoneMockup` renderizado inline: um frame de smartphone em CSS puro (bordas arredondadas, notch, borda glass) contendo uma mini interface de chat simulada com 3-4 bolhas de mensagem estáticas (estilo WhatsApp) mostrando uma conversa de prospecção IA
- Bolhas animadas com `framer-motion` aparecendo em sequência (stagger) para simular mensagens chegando
- Animação de flutuação contínua no smartphone inteiro: `y: [0, -15, 0]` com duration ~6s
- Glow radial atrás do phone: div com `bg-primary/20 blur-[80px]` centralizado

### Layout
- `grid md:grid-cols-2 gap-12 items-center` no container
- Background: gradiente radial sutil `from-[#25D366]/5 via-transparent to-primary/5`
- Divider line no topo consistente com outras seções

### Detalhes técnicos
- Nenhum arquivo novo: tudo inline no AiSdr.tsx
- WhatsApp icon como SVG path inline (não depende de biblioteca externa)
- Mockup do phone inteiramente em Tailwind + framer-motion (sem imagens externas)
- Mensagens do chat simulado em português, ex: "Olá! Encontramos sua empresa...", "Temos uma solução de IA...", "Posso agendar uma demonstração?"

