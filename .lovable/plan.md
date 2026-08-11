# Internacionalização (i18n) profissional — pt-BR / en / es / fr

## 1. Arquitetura atual encontrada

- **Stack**: Vite + React 18 SPA, React Router v6 (`BrowserRouter` em `src/App.tsx`), Tailwind, shadcn, `react-helmet-async`.
- **Rotas**: 24 rotas em português + `*` (404). Duas rotas duplicadas já existem hoje: `/servicos` e `/services` apontam para a mesma página.
- **SEO**: `src/components/SEOHead.tsx` (Helmet) usado por todas as páginas; `SubpageLayout.tsx` repassa título/descrição/JSON-LD. `index.html` tem o head estático (o que crawlers sem JS leem). `public/sitemap.xml` estático com 23 URLs.
- **Conteúdo**: ~5.000 linhas de JSX com textos em português hardcoded (24 páginas + 18 componentes). Volume alto em `Studio.tsx` (552), `Services.tsx` (288), `SitesIA.tsx` (357), `AiSdr.tsx` (354), `Carreiras.tsx` (281), `PriceCalculator.tsx` (207), `ContactForm.tsx` (187).
- **Integrações**: Supabase Edge Functions `submit-contact-form` e `submit-job-application` (formulários). Sem autenticação de usuário.
- **Contato**: CTAs abrem WhatsApp com mensagem pré-preenchida em português (precisa ser localizada também).

## 2. Arquitetura de i18n recomendada

Solução própria e leve (sem dependência externa nova), baseada em Context + dicionários tipados:

```text
src/i18n/
  config.ts            LOCALES, DEFAULT_LOCALE='pt-BR', prefixos ('' | /en | /es | /fr)
  routes.ts            mapa de páginas -> slug por idioma (fonte única de verdade)
  detect.ts            navigator.languages -> locale suportado
  I18nProvider.tsx     contexto: locale, t(), localizedPath(), switchLocale()
  useT.ts              hook t('ns.chave') com interpolação {var}
  dictionaries/
    pt-BR/ en/ es/ fr/   (namespaces: common, nav, footer, home, forms, seo, studio, services, ...)
```

- **pt-BR carregado no bundle inicial**; en/es/fr carregados por `import()` dinâmico (um chunk por idioma) — nenhuma chamada de API, zero impacto no JS inicial de visitantes pt-BR.
- `t()` nunca renderiza chave crua: fallback para pt-BR se faltar chave.
- Textos ficam em dicionários; nenhum texto de usuário permanece no componente.

## 3. Rotas: como adaptar sem quebrar links

`routes.ts` define, por página, o slug em cada idioma. O router passa a ser gerado a partir desse mapa:

| Página | pt-BR (raiz, sem prefixo) | en | es | fr |
| --- | --- | --- | --- | --- |
| Home | `/` | `/en` | `/es` | `/fr` |
| Serviços | `/servicos` | `/en/services` | `/es/servicios` | `/fr/services` |
| Sobre | `/sobre-nos` | `/en/about` | `/es/sobre-nosotros` | `/fr/a-propos` |
| … | (todos os slugs atuais preservados) | … | … | … |

Garantias contra quebra:
- **Todos os slugs pt-BR atuais permanecem idênticos e sem prefixo** — nenhum link, indexação ou compartilhamento existente muda.
- `/services` (alias legado em inglês na raiz) continua funcionando como alias de `/servicos`.
- Links internos passam a usar um `<LocaleLink>`/`localizedPath()` que resolve o slug do idioma ativo, então navegação interna nunca cruza idiomas.
- URL desconhecida com prefixo válido (ex.: `/en/xyz`) cai no 404 **no idioma en**; sem prefixo, 404 em pt-BR.

## 4. Detecção automática

Na primeira visita, apenas quando não há preferência salva e a URL não tem prefixo de idioma:
1. Percorre `navigator.languages` (fallback `navigator.language`), na ordem de prioridade.
2. Normaliza: `pt`/`pt-*` → pt-BR, `en-*` → en, `es-*` → es, `fr-*` → fr; região usada só para desempate.
3. Se resultar em en/es/fr → redirect (`replace`, sem poluir histórico) para a URL equivalente prefixada.
4. Qualquer outro idioma → pt-BR (fallback). Sem geolocalização/IP.
5. URL com prefixo explícito sempre ganha da detecção (link compartilhado é respeitado).

## 5. Persistência da preferência

- Escolha manual no seletor grava `localStorage['designoai.lang']` **e** cookie `designoai_lang` (1 ano, `path=/`, `SameSite=Lax`) — o cookie deixa a preferência disponível caso o projeto migre para SSR.
- Preferência salva tem prioridade sobre detecção do navegador; URL explícita tem prioridade sobre ambas.

## 6. Seletor de idioma

- Componente novo `LanguageSwitcher.tsx` usando o `DropdownMenu` (shadcn) já existente, com as classes/tokens atuais — sem mudar cores, tipografia ou espaçamentos.
- Desktop: no header, à esquerda dos botões de CTA, mostrando o idioma atual (`PT` / `EN` / `ES` / `FR`).
- Mobile: bloco de idiomas dentro do menu hambúrguer já existente.
- Ao trocar: navega para a **mesma página** no novo idioma (via chave da página no `routes.ts`), preservando âncora/hash; se não houver equivalente, vai para a home do idioma. Usa `navigate()` normal (histórico preservado).

## 7. SEO multilíngue

- `SEOHead` passa a receber a chave da página e gerar: `<html lang>` correto, `title`/`description` do dicionário do idioma, `canonical` autorreferente da URL localizada, `og:locale` (`pt_BR`/`en_US`/`es_ES`/`fr_FR`), `og:url` localizado.
- **hreflang bidirecional**: em toda página, 4 tags `alternate` (uma por idioma) + `x-default` apontando para a versão pt-BR.
- JSON-LD com `inLanguage` e nome/descrição localizados.
- `public/sitemap.xml` regenerado com as 4 versões de cada URL e blocos `xhtml:link` de hreflang recíprocos.
- 404 permanece `noindex, follow` em todos os idiomas.

## 8. Riscos e mitigação

| Risco | Mitigação |
| --- | --- |
| Perder ranking dos slugs pt-BR | pt-BR fica na raiz, slugs inalterados |
| Links internos apontando para slug de outro idioma | helper central `localizedPath()`; nenhum `to="/..."` literal fica |
| Redirect de detecção em loop | só ocorre uma vez, sem preferência salva e sem prefixo na URL, com `replace` |
| Crawler sem JS ver só o head estático (limitação atual do SPA) | `index.html` mantém hreflang estáticos; per-rota depende de JS (limitação já existente do projeto) |
| Formulários/Edge Functions | payload e validação inalterados; só labels, placeholders e mensagens passam a vir do dicionário |
| Tradução de termos comerciais | nomes de produto (DesignoAI, AI SDR, Studio, Sites IA) e valores em R$ **não** são traduzidos; ambiguidades listadas no fim |

## 9. Arquivos criados / modificados

- **Criados**: `src/i18n/*` (config, routes, detect, provider, hook), `src/i18n/dictionaries/{pt-BR,en,es,fr}/*`, `src/components/LanguageSwitcher.tsx`, `src/components/LocaleLink.tsx`, `scripts/generate-sitemap.ts`.
- **Modificados**: `src/App.tsx` (rotas geradas), `src/main.tsx` (provider), `SEOHead.tsx`, `SubpageLayout.tsx`, `Navbar.tsx`, `Footer.tsx`, todas as 24 páginas e os componentes com texto, `index.html` (hreflang), `public/sitemap.xml`, `package.json` (predev/prebuild do sitemap).

## 10. Auditoria pós-implementação

Testes via Playwright no preview: primeiro acesso com `navigator.languages` simulado (pt/en/es/fr/ja), troca manual, URL atualizada, persistência após reload, navegação entre páginas mantendo idioma, mobile (430px) e desktop, head/hreflang/canonical por idioma, formulários, 404 em cada idioma, e varredura final procurando texto em português nas versões en/es/fr.
