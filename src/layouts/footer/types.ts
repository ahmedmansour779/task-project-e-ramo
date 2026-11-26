import type { Dictionary, Locale } from "@/content";

export type FooterContent = Dictionary["home"]["footer"];

export interface FooterProps {
  lang: Locale;
  content: FooterContent;
}
