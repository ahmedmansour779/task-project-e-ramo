"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content";
import type { ListingItem } from "@/shared/data";
import {
  ListingArrowIcon,
  ListingCalendarIcon,
  ListingCapacityIcon,
  ListingHeartIcon,
  ListingRibbonShape,
  ListingShareIcon,
  ListingStarIcon,
} from "@/shared/icons";
import type { LatestListingsContent } from "../../types/latestListings";

interface ListingCardProps {
  lang: Locale;
  item: ListingItem;
  content: LatestListingsContent;
}

const IMAGE_GRADIENT =
  "bg-[linear-gradient(181deg,rgba(26,41,33,0.72)_0%,rgba(255,255,255,0)_100%)]";

export function ListingCard({ lang, item, content }: ListingCardProps) {
  const [favorite, setFavorite] = useState(item.isFavorite);
  const localized = item[lang];

  return (
    <article className="flex h-full flex-col rounded-2xl border-2 border-raw-eff0f6 bg-white p-3 transition-shadow duration-200 hover:shadow-[0_2px_12px_0_var(--shadow-card)]">
      <div className="relative h-[203px] w-full overflow-hidden rounded-lg">
        <Image
          src={item.image}
          alt={localized.title}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 92vw"
          className="object-cover"
        />
        <div className={`pointer-events-none absolute inset-0 ${IMAGE_GRADIENT}`} />

        <div className="pointer-events-none absolute start-0 top-0 h-[82px] w-[89px]">
          <ListingRibbonShape
            className={`h-full w-full rtl:-scale-x-100 ${
              item.isAvailable ? "text-raw-a7bc9d" : "text-raw-ae5b5b"
            }`}
          />
          <span
            className={`absolute inset-0 flex -translate-x-2 -translate-y-2 items-center justify-center -rotate-[42deg] whitespace-nowrap text-[11px] font-medium leading-none rtl:translate-x-2 rtl:rotate-[42deg] ${
              item.isAvailable ? "text-raw-000000" : "text-white"
            }`}
          >
            {item.isAvailable ? content.availableBadge : content.notAvailableBadge}
          </span>
        </div>

        <div className="absolute end-3 top-3 flex items-center gap-4">
          <button
            type="button"
            aria-label="Share"
            className="flex size-[30px] items-center justify-center rounded-full bg-white transition-transform duration-200 hover:scale-105"
          >
            <ListingShareIcon className="rtl:-scale-x-100" />
          </button>
          <button
            type="button"
            aria-label="Favorite"
            aria-pressed={favorite}
            onClick={() => setFavorite((prev) => !prev)}
            className="flex size-[30px] items-center justify-center rounded-full bg-white transition-transform duration-200 hover:scale-105"
          >
            <ListingHeartIcon active={favorite} />
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="inline-flex min-h-[28px] items-center rounded-lg bg-raw-f4f1ed px-2.5 py-1 text-xs font-semibold text-green">
          {localized.category}
        </span>
        <div className="flex items-center gap-1 text-xs text-write-main">
          <ListingStarIcon className="shrink-0" />
          <span>
            {item.rating} ({item.reviewsCount} {content.reviewLabel})
          </span>
        </div>
      </div>

      <h3 className="mt-3 line-clamp-1 text-start text-xl font-semibold tracking-[0.03em] text-raw-2a3b32">
        {localized.title}
      </h3>

      <p className="mt-2 line-clamp-3 text-start text-sm leading-[19px] text-subwrite">
        {localized.description}
      </p>

      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-1.5 text-sm">
          <ListingCapacityIcon className="shrink-0" />
          <span className="text-green">{item.capacity}</span>
          <span className="text-raw-64748b">{content.perLabel}</span>
        </div>
        <div
          className={`flex items-center gap-1.5 text-sm ${
            item.isOpen ? "text-green" : "text-raw-e17b7b"
          }`}
        >
          <ListingCalendarIcon className="shrink-0" />
          <span>{item.isOpen ? content.openStatus : content.closedStatus}</span>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="border-t border-raw-94a3b8/30 pt-3">
          <div className="flex items-center justify-between gap-2">
            <p className="text-start text-sm text-subwrite">
              {content.startsFrom}{" "}
              <strong className="font-bold">{item.price}</strong>
              {localized.currency} {localized.period}
            </p>
            <Link
              href={`/${lang}/booking`}
              aria-label={localized.title}
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#F8FFF3] transition-transform duration-200 hover:scale-105"
            >
              <ListingArrowIcon className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
