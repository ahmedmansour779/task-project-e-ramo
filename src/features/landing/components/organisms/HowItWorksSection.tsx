"use client";

import type { StaticImageData } from "next/image";
import { motion } from "motion/react";
import step1Image from "@/shared/images/how-it-works/step-1.jpg";
import step2Image from "@/shared/images/how-it-works/step-2.jpg";
import step3Image from "@/shared/images/how-it-works/step-3.jpg";
import { HowItWorksStepCard } from "../molecules/HowItWorksStepCard";
import type { HowItWorksContent } from "../../types/howItWorks";

const STEP_IMAGES: Record<string, StaticImageData> = {
  "step-1": step1Image,
  "step-2": step2Image,
  "step-3": step3Image,
};

export function HowItWorksSection({ content }: { content: HowItWorksContent }) {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1088px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="mx-auto flex max-w-[600px] flex-col items-center gap-3 text-center"
        >
          <h2 className="text-3xl font-bold tracking-[0.03em] text-write-main sm:text-4xl lg:text-[56px] lg:leading-[73px]">
            {content.titlePrefix}
            <span className="text-green">{content.titleHighlight}</span>
            {content.titleSuffix}
          </h2>
          <p className="text-base leading-relaxed text-write-main sm:text-xl lg:text-2xl">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {content.steps.map((step, index) => (
            <HowItWorksStepCard
              key={step.id}
              step={step}
              image={STEP_IMAGES[step.id] ?? step1Image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
