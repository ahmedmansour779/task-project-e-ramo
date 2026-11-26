"use client";

import type { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { Locale } from "@/content";
import hybrid1Image from "@/shared/images/hybrid-working/hybrid-1.jpg";
import hybrid2Image from "@/shared/images/hybrid-working/hybrid-2.jpg";
import hybrid3Image from "@/shared/images/hybrid-working/hybrid-3.jpg";
import { HybridWorkingImageCard } from "../molecules/HybridWorkingImageCard";
import type { HybridWorkingContent } from "../../types/hybridWorking";

const HYBRID_IMAGES: Record<string, StaticImageData> = {
  "hybrid-1": hybrid1Image,
  "hybrid-2": hybrid2Image,
  "hybrid-3": hybrid3Image,
};

interface HybridWorkingSectionProps {
  lang: Locale;
  content: HybridWorkingContent;
}

export function HybridWorkingSection({
  lang,
  content,
}: HybridWorkingSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="flex flex-col items-center gap-5 text-center"
      >
        <h2 className="text-2xl font-bold tracking-[0.03em] text-write-main sm:text-[32px] sm:leading-[42px]">
          {content.title}
        </h2>
        <p className="max-w-[1312px] text-base leading-[26px] text-subwrite sm:text-xl sm:leading-[30px]">
          {content.description}
        </p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {content.cards.map((card, index) => (
          <HybridWorkingImageCard
            key={card.id}
            card={card}
            image={HYBRID_IMAGES[card.id] ?? hybrid1Image}
            index={index}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut", delay: 0.3 }}
        className="mt-8 flex justify-center"
      >
        <Link
          href={`/${lang}#contact-us`}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-green px-8 text-base font-bold text-off-white transition-opacity duration-200 hover:opacity-90 sm:h-14 sm:w-[416px]"
        >
          {content.ctaLabel}
        </Link>
      </motion.div>
    </section>
  );
}
