import type { Locale } from '../config';
import ptBR from './pt-BR';

export type DictValue = string | number | boolean | readonly DictValue[] | DictNode;
export interface DictNode {
  [key: string]: DictValue;
}

export type Dictionary = DictNode;

/** pt-BR ships in the initial bundle; the other locales load as separate chunks. */
export const baseDictionary: Dictionary = ptBR;

const loaders: Record<Locale, () => Promise<{ default: Dictionary }>> = {
  'pt-BR': () => Promise.resolve({ default: ptBR }),
  en: () => import('./en'),
  es: () => import('./es'),
  fr: () => import('./fr'),
};

const cache: Partial<Record<Locale, Dictionary>> = { 'pt-BR': ptBR };

export const getCachedDictionary = (locale: Locale): Dictionary | undefined => cache[locale];

export const loadDictionary = async (locale: Locale): Promise<Dictionary> => {
  const cached = cache[locale];
  if (cached) return cached;
  const mod = await loaders[locale]();
  cache[locale] = mod.default;
  return mod.default;
};
