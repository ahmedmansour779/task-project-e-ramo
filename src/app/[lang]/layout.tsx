import type { ReactNode } from "react";
import { Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import "../globals.css";
import { getDictionary, isLocale, locales, type Locale } from "@/content";
import { Footer, Header } from "@/layouts";
import { getLocalizedMetadata, type Metadata } from "@/meta";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://chairlocation.com",
    ),
    ...getLocalizedMetadata(locale),
  };
}

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
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      className={`h-full antialiased${lang === "ar" ? ` ${cairo.variable}` : ""}`}
    >
      <body
        className={`flex min-h-full flex-col bg-background text-foreground ${
          lang === "ar" ? `${cairo.className} font-cairo` : "font-dm-sans"
        }`}
      >
        <Header lang={lang} content={content.home.header} />
        {children}
        <Footer lang={lang} content={content.home.footer} />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
