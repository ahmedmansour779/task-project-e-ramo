"use client";

import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import type { Locale } from "@/content";
import {
  MeetingRoomsIcon,
  PrivateOfficesIcon,
  SharedSpaceIcon,
  SupportHeadsetIcon,
  VirtualOfficesIcon,
} from "@/shared/icons";
import type { PricingContent } from "../../types/sections";

const OPTION_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "shared-space": SharedSpaceIcon,
  "meeting-rooms": MeetingRoomsIcon,
  "private-offices": PrivateOfficesIcon,
  "virtual-offices": VirtualOfficesIcon,
};

interface PricingSidebarProps {
  lang: Locale;
  sidebar: PricingContent["sidebar"];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export function PricingSidebar({
  lang,
  sidebar,
  selectedCategory,
  onSelectCategory,
}: PricingSidebarProps) {
  return (
    <div className="flex flex-col gap-4 md:col-span-2 xl:col-span-1">
      <div className="rounded-xl bg-white p-5 shadow-[0_8px_4px_0_var(--shadow-soft)]">
        <h3 className="max-w-[210px] text-start text-lg font-semibold text-write-main sm:text-xl">
          {sidebar.optionsTitle}
        </h3>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
          {sidebar.categories.map(({ id, label, icon }) => {
            const Icon = OPTION_ICONS[icon];
            const isSelected = selectedCategory === id;

            return (
              <button
                key={id}
                type="button"
                onClick={() => onSelectCategory(id)}
                className={`flex h-[54px] w-full items-center justify-center gap-2.5 rounded-lg px-4 text-sm transition-colors duration-200 sm:text-base ${
                  isSelected
                    ? "bg-raw-e7caaa/50 font-semibold text-green"
                    : "bg-raw-f7f8f9 text-subwrite hover:text-green"
                }`}
              >
                {Icon && <Icon className="size-5 shrink-0 opacity-85" />}
                <span className="truncate">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="rounded-xl bg-white p-5 shadow-[0_8px_4px_0_var(--shadow-soft)]">
        <h4 className="text-start text-lg font-normal text-write-main">
          {sidebar.helpTitle}
        </h4>
        <p className="mt-2 text-start text-sm leading-5 text-subwrite">
          {sidebar.helpSubtitle}
        </p>
        <div className="mt-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-sm font-semibold text-write-main">
            <SupportHeadsetIcon className="size-5 shrink-0" />
            <span>{sidebar.availableLabel}</span>
          </div>
          <Link
            href={`/${lang}#contact-us`}
            className="text-sm font-semibold text-green underline transition-opacity duration-200 hover:opacity-80 sm:text-base"
          >
            {sidebar.contactLinkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
