export const LOCALES = ['pt-BR', 'en', 'es', 'fr'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'pt-BR';

/** URL prefix per locale. The default locale lives at the root (no prefix). */
export const LOCALE_PREFIX: Record<Locale, string> = {
  'pt-BR': '',
  en: '/en',
  es: '/es',
  fr: '/fr',
};

export const LOCALE_LABELS: Record<Locale, { short: string; native: string; english: string }> = {
  'pt-BR': { short: 'PT', native: 'Português', english: 'Portuguese (Brazil)' },
  en: { short: 'EN', native: 'English', english: 'English' },
  es: { short: 'ES', native: 'Español', english: 'Spanish' },
  fr: { short: 'FR', native: 'Français', english: 'French' },
};

/** html lang attribute + og:locale per locale. */
export const HTML_LANG: Record<Locale, string> = {
  'pt-BR': 'pt-BR',
  en: 'en',
  es: 'es',
  fr: 'fr',
};

export const OG_LOCALE: Record<Locale, string> = {
  'pt-BR': 'pt_BR',
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
};

export const STORAGE_KEY = 'designoai.lang';
export const COOKIE_NAME = 'designoai_lang';

export const BASE_URL = 'https://designoai.com.br';

export const isLocale = (value: string | null | undefined): value is Locale =>
  !!value && (LOCALES as readonly string[]).includes(value);
