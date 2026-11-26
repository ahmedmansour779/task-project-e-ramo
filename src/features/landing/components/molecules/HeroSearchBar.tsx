"use client";

import type { FormEvent } from "react";
import { LocationIcon, SearchIcon } from "@/shared/icons";
import type { HeroContent } from "../../types/hero";

interface HeroSearchBarProps {
  placeholder: HeroContent["searchPlaceholder"];
  nearbyLabel: HeroContent["searchNearby"];
  submitLabel: HeroContent["searchButton"];
}

export function HeroSearchBar({ placeholder, nearbyLabel, submitLabel }: HeroSearchBarProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <form onSubmit={handleSubmit} role="search" className="flex flex-col gap-2 sm:flex-row sm:gap-3 lg:gap-6">
      <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-xl bg-white px-2.5 sm:h-12 sm:px-4 lg:h-[62px] lg:px-5">
        <SearchIcon className="size-4 shrink-0 lg:size-5" />
        <input
          type="search"
          placeholder={placeholder}
          aria-label={placeholder}
          className="min-w-0 flex-1 bg-transparent text-xs text-write-main outline-none placeholder:text-subwrite sm:text-sm lg:text-base"
        />
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 whitespace-nowrap text-[11px] font-semibold text-write-main underline transition-colors duration-200 hover:text-green sm:text-xs lg:text-sm"
        >
          <LocationIcon className="size-3 lg:size-3.5" />
          {nearbyLabel}
        </button>
      </div>
      <button
        type="submit"
        className="h-10 w-full shrink-0 rounded-xl bg-green px-5 text-xs font-semibold text-off-white transition-opacity duration-200 hover:opacity-90 sm:h-12 sm:w-auto sm:px-8 sm:text-sm lg:h-[62px] lg:w-[209px] lg:text-xl"
      >
        {submitLabel}
      </button>
    </form>
  );
}
