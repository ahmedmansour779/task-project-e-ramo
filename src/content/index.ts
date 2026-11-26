import { ar } from "./ar";
import { en, type Dictionary } from "./en";

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
