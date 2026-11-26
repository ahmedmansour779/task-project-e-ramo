"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";
import type { HowItWorksStepItem } from "../../types/howItWorks";

interface HowItWorksStepCardProps {
  step: HowItWorksStepItem;
  image: StaticImageData;
  index: number;
}

export function HowItWorksStepCard({
  step,
  image,
  index,
}: HowItWorksStepCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: "easeOut", delay: index * 0.15 }}
      className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_8px_4px_0_var(--shadow-soft)] sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-raw-e7caaa text-xl font-semibold text-green">
          {step.number}
        </span>
        <h3 className="text-start text-lg font-semibold text-write-main sm:text-xl">
          {step.title}
        </h3>
      </div>

      <div className="relative mt-6 aspect-[278/276] w-full overflow-hidden rounded-xl lg:rounded-2xl">
        <Image
          src={image}
          alt={step.title}
          fill
          sizes="(min-width: 1024px) 278px, (min-width: 768px) 42vw, 90vw"
          className="object-cover"
        />
      </div>

      <p className="mt-5 text-start text-base leading-7 text-write-main sm:text-lg sm:leading-[28px]">
        {step.description}
      </p>
    </motion.article>
  );
}
