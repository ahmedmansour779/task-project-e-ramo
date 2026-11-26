import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/content";
import {
  AboutSection,
  HeroSection,
  HowItWorksSection,
  HybridWorkingSection,
  LatestListingsSection,
  ProductsSection,
} from "@/features/landing";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const { home } = getDictionary(lang);

  return (
    <main className="min-h-screen">
      <HeroSection content={home.hero} />
      <AboutSection lang={lang} content={home.about} />
      <LatestListingsSection lang={lang} content={home.latestListings} />
      <ProductsSection lang={lang} content={home.products} />
      <HowItWorksSection content={home.howItWorks} />
      <HybridWorkingSection lang={lang} content={home.hybridWorking} />
    </main>
  );
}
