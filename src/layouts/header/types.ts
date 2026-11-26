import type { Dictionary, Locale } from "@/content";

export type HeaderContent = Dictionary["home"]["header"];
export type HeaderVariant = "desktop" | "mobile";

export interface HeaderSectionProps {
  lang: Locale;
  content: HeaderContent;
  variant?: HeaderVariant;
  onNavigate?: () => void;
}
