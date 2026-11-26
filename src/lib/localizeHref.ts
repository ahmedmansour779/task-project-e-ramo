import type { Locale } from "@/content";

export function localizeHref(lang: Locale, href: string): string {
  return href.startsWith("#") || href.startsWith("/") ? `/${lang}${href}` : href;
}
