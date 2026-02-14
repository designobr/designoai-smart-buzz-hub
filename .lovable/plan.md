
## Efeito de Brilho (Shine Sweep) Global em Todos os Cards

### O que sera feito

Adicionar um efeito de brilho que percorre o card no hover -- uma faixa de luz diagonal que desliza da esquerda para a direita. O efeito sera aplicado globalmente a todos os cards do site, incluindo todas as paginas.

---

### Abordagem Tecnica

**1. Criar uma classe CSS utilitaria `.card-shine`**

Em `src/index.css`, adicionar um pseudo-elemento `::after` que cria o efeito de brilho:
- Gradiente diagonal translucido (`from-transparent via-white/10 to-transparent`)
- Posicionado fora do card (`translateX(-100%)`) por padrao
- No hover, desliza para `translateX(100%)` com `transition` de ~600ms
- Requer `overflow-hidden` e `relative` no card (ja presente na maioria dos `.glass` cards)

**2. Integrar o shine na classe `.glass` existente**

Como praticamente todos os cards usam `.glass`, a forma mais eficiente e adicionar o pseudo-elemento diretamente na definicao da classe `.glass` no CSS. Assim, todos os cards do site ganham o efeito automaticamente sem alterar nenhum componente.

A classe `.glass` passara a incluir:
- `position: relative` e `overflow: hidden`
- Um `::after` com o gradiente de brilho e a animacao de slide

**3. Atualizar a pagina Studio**

O Studio usa cards com estilo proprio (nao usa `.glass`). Ha duas acoes:
- Remover o `div` inline de shine que ja existe em cada card (linhas 182, 212, 293 de Studio.tsx)
- Adicionar a classe `.card-shine` a esses cards, ou alternativamente, migrar os cards do Studio para usar `.glass`

---

### Arquivos Modificados

| Arquivo | Mudanca |
|---------|---------|
| `src/index.css` | Adicionar pseudo-elemento `::after` na classe `.glass` com o efeito shine, e criar `.card-shine` como classe utilitaria separada para cards fora do `.glass` |
| `src/pages/Studio.tsx` | Remover os `div` de shine inline e adicionar `.card-shine` + `relative overflow-hidden` nos cards que nao usam `.glass` |

---

### Detalhes de Implementacao CSS

```css
/* Dentro de @layer utilities */
.glass {
  /* estilos existentes mantidos */
  position: relative;
  overflow: hidden;
}

.glass::after,
.card-shine::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    105deg,
    transparent 40%,
    rgba(255, 255, 255, 0.06) 45%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.06) 55%,
    transparent 60%
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
  pointer-events: none;
  z-index: 1;
}

.glass:hover::after,
.card-shine:hover::after {
  transform: translateX(100%);
}
```

A classe `.card-shine` exige `position: relative` e `overflow: hidden` no elemento.

### Acessibilidade

- Dentro do bloco `@media (prefers-reduced-motion: reduce)`, desabilitar a transicao do shine (definir `transition: none` e esconder o pseudo-elemento)

### Resultado

Ao passar o mouse em qualquer card do site (Home, Services, Blog, Recursos, Carreiras, Studio, etc.), um brilho sutil e elegante percorre o card da esquerda para a direita.
