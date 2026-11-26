"use client";

import { motion } from "motion/react";
import { DownloadAppPhoneMockup } from "../molecules/DownloadAppPhoneMockup";
import { DownloadAppStoreButtons } from "../molecules/DownloadAppStoreButtons";
import type { DownloadAppContent } from "../../types/downloadApp";

export function DownloadAppSection({ content }: { content: DownloadAppContent }) {
  return (
    <section className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16">
      <div className="overflow-hidden rounded-3xl bg-raw-fdf8f2 px-5 pt-8 sm:px-10 sm:pt-12 lg:rounded-[32px] lg:px-14 lg:pt-0 xl:px-20">
        <div className="flex flex-col items-center justify-between gap-8 lg:min-h-[610px] lg:flex-row lg:items-end lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            className="flex w-full flex-col lg:order-2 lg:max-w-[650px] lg:self-center lg:py-12"
          >
            <h2 className="text-start text-2xl font-bold tracking-[0.03em] text-write-main sm:text-3xl lg:text-[40px] lg:leading-[52px]">
              {content.title}
            </h2>
            <p className="mt-4 text-start text-base leading-[26px] text-subwrite sm:mt-5 sm:text-xl sm:leading-[30px]">
              {content.description}
            </p>
            <DownloadAppStoreButtons stores={content.stores} />
          </motion.div>

          <div className="flex w-full justify-center lg:order-1 lg:w-auto">
            <DownloadAppPhoneMockup alt={content.mockupAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}
