import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/content";
import { HeroSection } from "@/features/landing";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const { home } = getDictionary(lang);

  return (
    <main className="min-h-screen">
      <HeroSection content={home.hero} />
    </main>
  );
}
