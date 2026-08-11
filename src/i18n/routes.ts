import { DEFAULT_LOCALE, LOCALE_PREFIX, LOCALES, isLocale, type Locale } from './config';

export type PageKey =
  | 'home'
  | 'services'
  | 'recursos'
  | 'gestaoRedesSociais'
  | 'criacaoConteudo'
  | 'designAutomatizado'
  | 'estrategiasPersonalizadas'
  | 'analiseDados'
  | 'seoInteligente'
  | 'socialMedia'
  | 'emailMarketing'
  | 'otimizacaoImagens'
  | 'sobreNos'
  | 'carreiras'
  | 'blog'
  | 'casosSucesso'
  | 'parcerias'
  | 'termosUso'
  | 'politicaPrivacidade'
  | 'cookies'
  | 'studio'
  | 'sitesIa'
  | 'aiSdr';

export interface PageRoute {
  key: PageKey;
  /** Slug per locale, without leading slash. Empty string = locale home. */
  slugs: Record<Locale, string>;
  /** Extra legacy slugs kept alive per locale so existing links never break. */
  aliases?: Partial<Record<Locale, string[]>>;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

export const PAGES: PageRoute[] = [
  {
    key: 'home',
    slugs: { 'pt-BR': '', en: '', es: '', fr: '' },
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    key: 'services',
    slugs: { 'pt-BR': 'servicos', en: 'services', es: 'servicios', fr: 'services' },
    aliases: { 'pt-BR': ['services'] },
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    key: 'studio',
    slugs: { 'pt-BR': 'studio', en: 'studio', es: 'studio', fr: 'studio' },
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    key: 'sitesIa',
    slugs: { 'pt-BR': 'sites-ia', en: 'ai-websites', es: 'sitios-ia', fr: 'sites-ia' },
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    key: 'aiSdr',
    slugs: { 'pt-BR': 'ai-sdr', en: 'ai-sdr', es: 'ai-sdr', fr: 'ai-sdr' },
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    key: 'gestaoRedesSociais',
    slugs: {
      'pt-BR': 'gestao-redes-sociais',
      en: 'social-media-management',
      es: 'gestion-redes-sociales',
      fr: 'gestion-reseaux-sociaux',
    },
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'socialMedia',
    slugs: { 'pt-BR': 'social-media', en: 'social-media', es: 'social-media', fr: 'social-media' },
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'criacaoConteudo',
    slugs: {
      'pt-BR': 'criacao-conteudo',
      en: 'content-creation',
      es: 'creacion-contenido',
      fr: 'creation-contenu',
    },
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'designAutomatizado',
    slugs: {
      'pt-BR': 'design-automatizado',
      en: 'automated-design',
      es: 'diseno-automatizado',
      fr: 'design-automatise',
    },
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'seoInteligente',
    slugs: { 'pt-BR': 'seo-inteligente', en: 'smart-seo', es: 'seo-inteligente', fr: 'seo-intelligent' },
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'emailMarketing',
    slugs: { 'pt-BR': 'email-marketing', en: 'email-marketing', es: 'email-marketing', fr: 'email-marketing' },
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'analiseDados',
    slugs: { 'pt-BR': 'analise-dados', en: 'data-analysis', es: 'analisis-datos', fr: 'analyse-donnees' },
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'estrategiasPersonalizadas',
    slugs: {
      'pt-BR': 'estrategias-personalizadas',
      en: 'custom-strategies',
      es: 'estrategias-personalizadas',
      fr: 'strategies-personnalisees',
    },
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'otimizacaoImagens',
    slugs: {
      'pt-BR': 'otimizacao-imagens',
      en: 'image-optimization',
      es: 'optimizacion-imagenes',
      fr: 'optimisation-images',
    },
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    key: 'recursos',
    slugs: { 'pt-BR': 'recursos', en: 'resources', es: 'recursos', fr: 'ressources' },
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    key: 'casosSucesso',
    slugs: { 'pt-BR': 'casos-sucesso', en: 'case-studies', es: 'casos-de-exito', fr: 'etudes-de-cas' },
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    key: 'blog',
    slugs: { 'pt-BR': 'blog', en: 'blog', es: 'blog', fr: 'blog' },
    changefreq: 'weekly',
    priority: '0.7',
  },
  {
    key: 'sobreNos',
    slugs: { 'pt-BR': 'sobre-nos', en: 'about', es: 'sobre-nosotros', fr: 'a-propos' },
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    key: 'carreiras',
    slugs: { 'pt-BR': 'carreiras', en: 'careers', es: 'carreras', fr: 'carrieres' },
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    key: 'parcerias',
    slugs: { 'pt-BR': 'parcerias', en: 'partnerships', es: 'alianzas', fr: 'partenariats' },
    changefreq: 'monthly',
    priority: '0.6',
  },
  {
    key: 'termosUso',
    slugs: { 'pt-BR': 'termos-uso', en: 'terms-of-use', es: 'terminos-de-uso', fr: 'conditions-utilisation' },
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    key: 'politicaPrivacidade',
    slugs: {
      'pt-BR': 'politica-privacidade',
      en: 'privacy-policy',
      es: 'politica-de-privacidad',
      fr: 'politique-confidentialite',
    },
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    key: 'cookies',
    slugs: { 'pt-BR': 'cookies', en: 'cookies', es: 'cookies', fr: 'cookies' },
    changefreq: 'yearly',
    priority: '0.3',
  },
];

export const PAGE_BY_KEY = PAGES.reduce<Record<PageKey, PageRoute>>((acc, page) => {
  acc[page.key] = page;
  return acc;
}, {} as Record<PageKey, PageRoute>);

/** Absolute in-app path for a page in a given locale, e.g. ('services','en') -> '/en/services'. */
export const pathFor = (key: PageKey, locale: Locale): string => {
  const page = PAGE_BY_KEY[key];
  const prefix = LOCALE_PREFIX[locale];
  const slug = page ? page.slugs[locale] : '';
  if (!slug) return prefix || '/';
  return `${prefix}/${slug}`;
};

/** Reads the locale from a pathname. Unprefixed paths belong to the default locale. */
export const localeFromPath = (pathname: string): Locale => {
  const first = pathname.split('/').filter(Boolean)[0];
  if (isLocale(first) && first !== DEFAULT_LOCALE) return first;
  return DEFAULT_LOCALE;
};

/** Strips the locale prefix, returning the slug (no leading slash). */
export const slugFromPath = (pathname: string): string => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && isLocale(parts[0]) && parts[0] !== DEFAULT_LOCALE) parts.shift();
  return parts.join('/');
};

/** Resolves which page a pathname points to, if any. */
export const pageFromPath = (pathname: string): PageKey | null => {
  const locale = localeFromPath(pathname);
  const slug = slugFromPath(pathname);
  const match = PAGES.find(
    (p) => p.slugs[locale] === slug || (p.aliases?.[locale] || []).includes(slug),
  );
  return match ? match.key : null;
};

/** Every (locale, path) pair — used by the sitemap generator and hreflang tags. */
export const allLocalizedPaths = (key: PageKey) =>
  LOCALES.map((locale) => ({ locale, path: pathFor(key, locale) }));
