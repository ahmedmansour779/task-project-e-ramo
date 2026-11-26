"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import {
  MeetingRoomsIcon,
  PrivateOfficesIcon,
  SharedSpaceIcon,
  VirtualOfficesIcon,
} from "@/shared/icons";
import type { HeroContent } from "../../types/hero";

const TAB_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "shared-space": SharedSpaceIcon,
  "private-offices": PrivateOfficesIcon,
  "meeting-rooms": MeetingRoomsIcon,
  "virtual-offices": VirtualOfficesIcon,
};

const ACTIVE_STYLE = "border-b-[0.5px] border-green bg-raw-fafff7 font-semibold text-write-main";
const INACTIVE_STYLE = "bg-raw-f7f8f9 text-subwrite hover:text-green";

export function HeroSearchTabs({ tabs }: { tabs: HeroContent["tabs"] }) {
  const [activeId, setActiveId] = useState(tabs[2]?.id ?? tabs[0]?.id);

  return (
    <div
      role="tablist"
      className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:gap-3 lg:grid lg:grid-cols-4 lg:gap-3 xl:gap-6"
    >
      {tabs.map(({ id, label, icon }) => {
        const Icon = TAB_ICONS[icon];
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={activeId === id}
            onClick={() => setActiveId(id)}
            className={`flex min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-xs transition-colors duration-200 sm:flex-1 sm:gap-2 sm:text-sm lg:h-12 lg:text-base ${
              activeId === id ? ACTIVE_STYLE : INACTIVE_STYLE
            }`}
          >
            {Icon && <Icon className="size-4 shrink-0 opacity-80 lg:size-6" />}
            <span className="truncate">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
