import type { ComponentType, SVGProps } from "react";
import {
  ProductMeetingIcon,
  ProductPrivateIcon,
  ProductSharedIcon,
  ProductVirtualIcon,
} from "@/shared/icons";
import type { ProductCategoryItem } from "../../types/products";

const CATEGORY_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  "shared-space": ProductSharedIcon,
  "private-offices": ProductPrivateIcon,
  "meeting-rooms": ProductMeetingIcon,
  "virtual-offices": ProductVirtualIcon,
};

interface ProductsCategoryTabsProps {
  categories: ProductCategoryItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function ProductsCategoryTabs({
  categories,
  activeId,
  onSelect,
}: ProductsCategoryTabsProps) {
  return (
    <div
      role="tablist"
      className="relative z-10 mx-auto grid w-full max-w-[748px] grid-cols-2 gap-2 rounded-3xl bg-green p-2.5 sm:grid-cols-4 sm:gap-3 sm:p-3.5 lg:rounded-[69.5px] lg:gap-4 lg:p-5"
    >
      {categories.map(({ id, tabLabel, icon }) => {
        const Icon = CATEGORY_ICONS[icon];
        const isActive = activeId === id;

        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(id)}
            className={`flex h-11 min-w-0 items-center justify-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-all duration-200 sm:h-12 lg:h-[52px] lg:text-sm ${
              isActive
                ? "bg-white text-green shadow-xs"
                : "bg-lighter-green/10 text-off-white/70 hover:bg-lighter-green/20 hover:text-off-white"
            }`}
          >
            {Icon && <Icon className="size-4 shrink-0 lg:size-5" />}
            <span className="truncate">{tabLabel}</span>
          </button>
        );
      })}
    </div>
  );
}
