import { COOKIE_NAME, DEFAULT_LOCALE, LOCALES, STORAGE_KEY, isLocale, type Locale } from './config';

/** Maps a BCP-47 tag from the browser onto a supported locale. */
export const matchLocale = (tag: string): Locale | null => {
  const normalized = tag.trim().toLowerCase();
  if (!normalized) return null;
  const [base] = normalized.split('-');
  if (base === 'pt') return 'pt-BR';
  if (base === 'en') return 'en';
  if (base === 'es') return 'es';
  if (base === 'fr') return 'fr';
  return null;
};

/** Walks navigator.languages in priority order; falls back to the default locale. */
export const detectBrowserLocale = (): Locale => {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;
  const tags: string[] = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
  ].filter(Boolean) as string[];
  for (const tag of tags) {
    const match = matchLocale(tag);
    if (match) return match;
  }
  return DEFAULT_LOCALE;
};

const readCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  const found = document.cookie
    .split(';')
    .map((c) => c.trim())
    .find((c) => c.startsWith(`${name}=`));
  return found ? decodeURIComponent(found.slice(name.length + 1)) : null;
};

/** Manually chosen locale, if any. localStorage wins, cookie is the fallback. */
export const readStoredLocale = (): Locale | null => {
  try {
    const stored = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (isLocale(stored)) return stored;
  } catch {
    /* storage blocked */
  }
  const cookie = readCookie(COOKIE_NAME);
  return isLocale(cookie) ? cookie : null;
};

export const persistLocale = (locale: Locale) => {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    /* storage blocked */
  }
  if (typeof document !== 'undefined') {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=${oneYear}; SameSite=Lax`;
  }
};

export const SUPPORTED_LOCALES = LOCALES;
