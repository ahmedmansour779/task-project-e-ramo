"use client";

import { motion } from "motion/react";
import { SubscribeEndDecorIcon, SubscribeStartDecorIcon } from "@/shared/icons";
import { SubscribeForm } from "../molecules/SubscribeForm";
import type { SubscribeContent } from "../../types/sections";

export function SubscribeSection({ content }: { content: SubscribeContent }) {
  return (
    <section className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative flex flex-col items-center text-center"
      >
        <div className="pointer-events-none absolute start-6 top-2 hidden size-[74px] items-center justify-center rounded-[18px] bg-raw-f4f1ed lg:flex rtl:-scale-x-100">
          <SubscribeStartDecorIcon />
        </div>
        <div className="pointer-events-none absolute end-6 top-2 hidden size-[74px] items-center justify-center rounded-[18px] bg-raw-f4f1ed lg:flex rtl:-scale-x-100">
          <SubscribeEndDecorIcon />
        </div>

        <h2 className="max-w-[525px] text-2xl font-bold tracking-[0.05em] text-write-main sm:text-3xl lg:text-[40px] lg:leading-[48px]">
          {content.heading}
        </h2>
        <p className="mt-4 max-w-[603px] text-base leading-7 text-subwrite sm:text-xl">
          {content.subtitle}
        </p>

        <SubscribeForm content={content} />
      </motion.div>
    </section>
  );
}
