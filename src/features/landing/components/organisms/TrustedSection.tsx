"use client";

import { motion } from "motion/react";
import { PartnerLogo } from "@/shared/icons";
import type { TrustedContent } from "../../types/sections";

export function TrustedSection({ content }: { content: TrustedContent }) {
  return (
    <section className="relative overflow-hidden bg-green py-14 sm:py-20">
      <div className="pointer-events-none absolute -start-24 -top-24 size-96 rounded-full bg-lighter-green/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -end-24 size-96 rounded-full bg-raw-e7caaa/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-[1375px] flex-col items-start justify-between gap-10 px-4 sm:px-8 lg:flex-row lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="w-full lg:max-w-[558px]"
        >
          <h2 className="text-start text-2xl font-bold leading-snug tracking-[0.03em] text-raw-f3f5f6 sm:text-4xl lg:text-[48px] lg:leading-[58px]">
            {content.heading}
          </h2>
          <p className="mt-4 max-w-[458px] text-start text-base leading-7 text-raw-f3f5f6/85 sm:text-lg">
            {content.subtitle}
          </p>
        </motion.div>

        <div className="grid w-full grid-cols-2 gap-3.5 sm:gap-6 lg:max-w-[640px]">
          {content.partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.07 }}
              aria-label={partner.name}
              className="flex h-24 items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-4 text-raw-f3f5f6 backdrop-blur-xs transition-colors duration-200 hover:bg-white/15 sm:h-[122px] sm:rounded-3xl sm:px-6"
            >
              <PartnerLogo
                logoKey={partner.logoKey}
                className="h-9 w-auto max-w-[150px] sm:h-11"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
