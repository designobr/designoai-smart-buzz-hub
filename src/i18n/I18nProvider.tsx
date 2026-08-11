import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DEFAULT_LOCALE, type Locale } from './config';
import { detectBrowserLocale, persistLocale, readStoredLocale } from './detect';
import {
  localeFromPath,
  pageFromPath,
  pathFor,
  type PageKey,
} from './routes';
import {
  baseDictionary,
  getCachedDictionary,
  loadDictionary,
  type Dictionary,
} from './dictionaries';

type Vars = Record<string, string | number>;

const resolve = (dict: Dictionary | undefined, key: string): unknown => {
  if (!dict) return undefined;
  return key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[part];
    return undefined;
  }, dict);
};

const interpolate = (value: string, vars?: Vars) =>
  vars
    ? value.replace(/\{(\w+)\}/g, (_, name: string) =>
        vars[name] !== undefined ? String(vars[name]) : `{${name}}`,
      )
    : value;

interface I18nContextValue {
  locale: Locale;
  /** Translated string. Falls back to pt-BR, then to the key itself. */
  t: (key: string, vars?: Vars) => string;
  /** Raw node (arrays / objects) for list-driven sections. */
  tList: <T = unknown>(key: string) => T[];
  /** In-app path for a page in the active (or given) locale. */
  path: (key: PageKey, locale?: Locale) => string;
  switchLocale: (locale: Locale) => void;
  /** Page key of the current route, when it maps to a known page. */
  pageKey: PageKey | null;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const urlLocale = localeFromPath(location.pathname);
  const hasPrefix = urlLocale !== DEFAULT_LOCALE;
  const pageKey = pageFromPath(location.pathname);

  const [dict, setDict] = useState<Dictionary>(
    () => getCachedDictionary(urlLocale) || baseDictionary,
  );

  // Load the dictionary chunk for the active locale.
  useEffect(() => {
    let cancelled = false;
    const cached = getCachedDictionary(urlLocale);
    if (cached) {
      setDict(cached);
      return;
    }
    loadDictionary(urlLocale).then((loaded) => {
      if (!cancelled) setDict(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [urlLocale]);

  // First visit without an explicit locale in the URL: saved preference wins,
  // otherwise fall back to the browser languages. Never runs on prefixed URLs.
  useEffect(() => {
    if (hasPrefix) return;
    const stored = readStoredLocale();
    const target = stored || detectBrowserLocale();
    if (target === DEFAULT_LOCALE) return;
    const nextPath = pageKey
      ? pathFor(pageKey, target)
      : `${pathFor('home', target)}`.replace(/\/$/, '') || '/';
    navigate(`${nextPath}${location.search}${location.hash}`, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasPrefix, pageKey]);

  const t = useCallback(
    (key: string, vars?: Vars) => {
      const value = resolve(dict, key) ?? resolve(baseDictionary, key);
      if (typeof value === 'string') return interpolate(value, vars);
      if (typeof value === 'number') return String(value);
      return key;
    },
    [dict],
  );

  const tList = useCallback(
    <T,>(key: string): T[] => {
      const value = resolve(dict, key) ?? resolve(baseDictionary, key);
      return Array.isArray(value) ? (value as T[]) : [];
    },
    [dict],
  );

  const path = useCallback(
    (key: PageKey, locale?: Locale) => pathFor(key, locale || urlLocale),
    [urlLocale],
  );

  const switchLocale = useCallback(
    (next: Locale) => {
      persistLocale(next);
      void loadDictionary(next);
      const target = pageKey ? pathFor(pageKey, next) : pathFor('home', next);
      navigate(`${target}${location.search}${location.hash}`);
    },
    [navigate, pageKey, location.search, location.hash],
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale: urlLocale, t, tList, path, switchLocale, pageKey }),
    [urlLocale, t, tList, path, switchLocale, pageKey],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
};
