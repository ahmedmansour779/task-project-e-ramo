import type { Metadata } from "next";
import type { Locale } from "@/content";
import { metadataAr } from "./ar";
import { metadataEn } from "./en";

export type { Metadata };
export { metadataAr, metadataEn };

export function getLocalizedMetadata(lang: Locale): Metadata {
  return lang === "ar" ? metadataAr : metadataEn;
}
