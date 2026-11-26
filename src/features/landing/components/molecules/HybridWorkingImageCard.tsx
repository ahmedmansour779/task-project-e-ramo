"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import type { HybridWorkingCardItem } from "../../types/hybridWorking";

interface HybridWorkingImageCardProps {
  card: HybridWorkingCardItem;
  image: StaticImageData;
  index: number;
}

export function HybridWorkingImageCard({
  card,
  image,
  index,
}: HybridWorkingImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: "easeOut", delay: index * 0.15 }}
      className="group relative aspect-[416/356] w-full overflow-hidden rounded-2xl sm:rounded-[27px]"
    >
      <Image
        src={image}
        alt={card.alt}
        fill
        sizes="(min-width: 1024px) 416px, (min-width: 768px) 45vw, 92vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </motion.div>
  );
}
