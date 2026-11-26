"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Locale } from "@/content";
import { PricingCard } from "../molecules/PricingCard";
import { PricingSidebar } from "../molecules/PricingSidebar";
import type { PricingContent } from "../../types/sections";

interface PricingSectionProps {
  lang: Locale;
  content: PricingContent;
}

export function PricingSection({ lang, content }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    content.sidebar.categories[1]?.id ?? content.sidebar.categories[0]?.id ?? "meeting-rooms",
  );

  const periodLabel = isAnnual
    ? content.billing.annuallyPeriod
    : content.billing.monthlyPeriod;

  return (
    <section
      id="membership"
      className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="mx-auto flex max-w-[668px] flex-col items-center text-center"
      >
        <span className="text-sm font-bold uppercase tracking-[0.1em] text-green sm:text-lg">
          {content.eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold text-write-main sm:text-4xl lg:text-[50px] lg:leading-[62px]">
          {content.heading}
        </h2>
        <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-lg sm:leading-[30px]">
          {content.subtitle}
        </p>

        <div className="mt-7 flex items-center gap-4">
          <span
            className={`text-base transition-colors sm:text-lg ${
              !isAnnual ? "font-semibold text-neutral-800" : "text-neutral-600"
            }`}
          >
            {content.billing.monthly}
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={isAnnual}
            aria-label={content.billing.toggleAriaLabel}
            onClick={() => setIsAnnual((prev) => !prev)}
            className="relative flex h-[33px] w-[74px] items-center rounded-full bg-green p-1 transition-colors duration-200"
          >
            <span
              className={`size-[25px] rounded-full bg-white shadow-xs transition-transform duration-300 ${
                isAnnual
                  ? "ltr:translate-x-[41px] rtl:-translate-x-[41px]"
                  : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-base transition-colors sm:text-lg ${
              isAnnual ? "font-semibold text-neutral-800" : "text-neutral-600"
            }`}
          >
            {content.billing.annually}
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
        className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:mt-14 md:grid-cols-2 xl:grid-cols-4"
      >
        <PricingSidebar
          lang={lang}
          sidebar={content.sidebar}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {content.plans.map((plan) => (
          <PricingCard
            key={plan.id}
            lang={lang}
            plan={plan}
            currency={content.currency}
            periodLabel={periodLabel}
            whatsIncluded={content.whatsIncluded}
            isAnnual={isAnnual}
          />
        ))}
      </motion.div>
    </section>
  );
}
