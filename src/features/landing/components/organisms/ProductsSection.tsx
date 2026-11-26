"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import type { Locale } from "@/content";
import about1 from "@/shared/images/about/about-1.png";
import about2 from "@/shared/images/about/about-2.png";
import latestImage from "@/shared/images/latest-image.jpg";
import sharedSpaceImage from "@/shared/images/products/shared-space.jpg";
import { ProductsCategoryTabs } from "../molecules/ProductsCategoryTabs";
import { ProductWorkspaceDetails } from "../molecules/ProductWorkspaceDetails";
import type { ProductsContent } from "../../types/products";

const CATEGORY_IMAGES: Record<string, StaticImageData> = {
  "shared-space": sharedSpaceImage,
  "private-offices": about1,
  "meeting-rooms": about2,
  "virtual-offices": latestImage,
};

interface ProductsSectionProps {
  lang: Locale;
  content: ProductsContent;
}

export function ProductsSection({ lang, content }: ProductsSectionProps) {
  const [activeId, setActiveId] = useState(
    content.categories[0]?.id ?? "shared-space",
  );

  const activeCategory =
    content.categories.find((item) => item.id === activeId) ??
    content.categories[0];

  const activeImage = CATEGORY_IMAGES[activeCategory.id] ?? sharedSpaceImage;

  return (
    <section
      id="products"
      className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="px-2 sm:px-6">
          <ProductsCategoryTabs
            categories={content.categories}
            activeId={activeCategory.id}
            onSelect={setActiveId}
          />
        </div>

        <div className="-mt-8 rounded-3xl bg-raw-fdf8f2/50 px-5 pt-14 pb-8 sm:-mt-9 sm:px-8 sm:pt-16 sm:pb-10 lg:-mt-[46px] lg:rounded-[32px] lg:px-10 lg:pt-[108px] lg:pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-10"
            >
              <ProductWorkspaceDetails
                lang={lang}
                category={activeCategory}
                priceStartingFrom={content.priceStartingFrom}
                actions={content.actions}
              />

              <div className="relative aspect-[654/545] w-full overflow-hidden rounded-2xl lg:max-w-[654px] lg:rounded-[24px]">
                <Image
                  src={activeImage}
                  alt={activeCategory.title}
                  fill
                  sizes="(min-width: 1024px) 654px, 92vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
