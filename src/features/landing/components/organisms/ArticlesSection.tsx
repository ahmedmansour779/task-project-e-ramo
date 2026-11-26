"use client";

import { useRef } from "react";
import type { StaticImageData } from "next/image";
import { motion } from "motion/react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Locale } from "@/content";
import { ArticleArrowNextIcon, ArticleArrowPrevIcon } from "@/shared/icons";
import article1 from "@/shared/images/articles/article-1.jpg";
import article2 from "@/shared/images/articles/article-2.jpg";
import article3 from "@/shared/images/articles/article-3.jpg";
import article4 from "@/shared/images/articles/article-4.jpg";
import { ArticleCard } from "../molecules/ArticleCard";
import type { ArticlesContent } from "../../types/sections";

const ARTICLE_IMAGES: Record<string, StaticImageData> = {
  "article-1": article1,
  "article-2": article2,
  "article-3": article3,
  "article-4": article4,
};

interface ArticlesSectionProps {
  lang: Locale;
  content: ArticlesContent;
}

export function ArticlesSection({ lang, content }: ArticlesSectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <section className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-start text-2xl font-semibold text-raw-172a41 sm:text-[32px] sm:leading-tight">
              {content.heading}
            </h2>
            <p className="mt-2 text-start text-sm leading-7 text-raw-4e657f sm:text-base sm:leading-[30px]">
              {content.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4 self-end">
            <button
              type="button"
              aria-label={content.prevLabel}
              onClick={() => swiperRef.current?.slidePrev()}
              className="flex size-10 items-center justify-center rounded-full border border-raw-eaecf0 bg-white/90 text-write-main backdrop-blur-xs transition-colors duration-200 hover:border-green hover:text-green"
            >
              <ArticleArrowPrevIcon className="rtl:rotate-180" />
            </button>
            <button
              type="button"
              aria-label={content.nextLabel}
              onClick={() => swiperRef.current?.slideNext()}
              className="flex size-10 items-center justify-center rounded-full border border-raw-eaecf0 bg-white/90 text-write-main backdrop-blur-xs transition-colors duration-200 hover:border-green hover:text-green"
            >
              <ArticleArrowNextIcon className="rtl:rotate-180" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <Swiper
            key={lang}
            dir={dir}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            loop
          >
            {content.items.map((article) => (
              <SwiperSlide key={article.id} className="!h-auto">
                <ArticleCard
                  lang={lang}
                  article={article}
                  image={ARTICLE_IMAGES[article.imageKey] ?? article1}
                  readMoreLabel={content.readMoreLabel}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
