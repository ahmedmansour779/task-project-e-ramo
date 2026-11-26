import Link from "next/link";
import type { Locale } from "@/content";
import { AboutFeatureList } from "../molecules/AboutFeatureList";
import { AboutImageStack } from "../molecules/AboutImageStack";
import type { AboutContent } from "../../types/about";

interface AboutSectionProps {
  lang: Locale;
  content: AboutContent;
}

export function AboutSection({ lang, content }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16 lg:py-24">
      <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-12">
        <div className="flex w-full flex-col gap-6 lg:max-w-[592px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-start text-2xl font-bold tracking-[0.03em] text-write-main sm:text-[32px]">
              {content.title}
            </h2>
            <p className="text-start text-base leading-[26px] text-subwrite sm:text-xl sm:leading-[30px]">
              {content.description}
            </p>
          </div>
          <AboutFeatureList subtitle={content.subtitle} features={content.features} />
          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-5">
            <Link
              href={`/${lang}#products`}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-green px-6 text-base font-bold text-off-white transition-opacity duration-200 hover:opacity-90 sm:h-14 sm:w-[190px]"
            >
              {content.actions.viewProducts}
            </Link>
            <Link
              href={`/${lang}/booking`}
              className="flex h-12 w-full items-center justify-center rounded-xl border border-lighter-green px-6 text-base font-bold text-lighter-green transition-colors duration-200 hover:bg-lighter-green hover:text-off-white sm:h-14 sm:w-[190px]"
            >
              {content.actions.bookNow}
            </Link>
          </div>
        </div>
        <AboutImageStack lang={lang} />
      </div>
    </section>
  );
}
