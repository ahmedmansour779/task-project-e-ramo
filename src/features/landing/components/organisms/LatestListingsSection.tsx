"use client";

import { motion } from "motion/react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import type { Locale } from "@/content";
import { latestListings } from "@/shared/data";
import { ListingCard } from "../molecules/ListingCard";
import type { LatestListingsContent } from "../../types/latestListings";

interface LatestListingsSectionProps {
  lang: Locale;
  content: LatestListingsContent;
}

const LOOP_SLIDES = [...latestListings, ...latestListings];

export function LatestListingsSection({ lang, content }: LatestListingsSectionProps) {
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <section id="latest-listings" className="mx-auto w-full max-w-[1375px] px-4 py-12 sm:px-8 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
      >
        <div className="mx-auto flex max-w-[600px] flex-col items-center gap-2 text-center">
          <h2 className="text-3xl font-bold tracking-[0.03em] text-write-main sm:text-4xl lg:text-[56px] lg:leading-[73px]">
            {content.title}
          </h2>
          <p className="text-base text-write-main sm:text-xl lg:text-2xl">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-7 sm:mt-9">
          <Swiper
            key={lang}
            dir={dir}
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {LOOP_SLIDES.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`} className="!h-auto">
                <ListingCard lang={lang} item={item} content={content} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
}
