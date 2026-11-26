"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Locale } from "@/content";
import about1 from "@/shared/images/about/about-1.png";
import about2 from "@/shared/images/about/about-2.png";
import about3 from "@/shared/images/about/about-3.png";

const IMAGES = [
  { id: "about-1", src: about1, alt: "Modern co-working office interior", hasOverlay: true },
  { id: "about-2", src: about2, alt: "Team collaborating around meeting table", hasOverlay: false },
  { id: "about-3", src: about3, alt: "Professional working on laptop in office", hasOverlay: true },
] as const;

const IMAGE_OVERLAY =
  "bg-[linear-gradient(90deg,rgba(124,154,130,1)_0%,rgba(231,202,170,1)_100%)] opacity-30";

export function AboutImageStack({ lang }: { lang: Locale }) {
  const initialX = lang === "ar" ? -60 : 60;

  return (
    <div className="hidden w-full max-w-[640px] flex-col gap-6 lg:flex">
      {IMAGES.map(({ id, src, alt, hasOverlay }, index) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, x: initialX }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: index * 0.15 }}
          className="relative aspect-[640/195] w-full overflow-hidden rounded-xl"
        >
          <Image src={src} alt={alt} fill sizes="640px" className="object-cover" />
          {hasOverlay && <div className={`absolute inset-0 ${IMAGE_OVERLAY}`} />}
        </motion.div>
      ))}
    </div>
  );
}
