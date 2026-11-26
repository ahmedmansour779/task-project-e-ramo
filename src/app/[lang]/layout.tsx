import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import "../globals.css";
import { metadataHome } from "@/meta/homeMeta";
import { getDictionary, isLocale, locales } from "@/content";
import { Header } from "@/layouts";

export const metadata: Metadata = metadataHome;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const content = getDictionary(lang);

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} className="h-full antialiased">
      <body
        className={`flex min-h-full flex-col bg-background text-foreground ${
          lang === "ar" ? "font-cairo" : "font-dm-sans"
        }`}
      >
        <Header lang={lang} content={content.home.header} />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
