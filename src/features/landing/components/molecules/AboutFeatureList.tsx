import type { ComponentType, SVGProps } from "react";
import { AboutAmenitiesIcon, AboutLocationIcon, AboutSupportIcon } from "@/shared/icons";
import type { AboutContent } from "../../types/about";

const FEATURE_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  location: AboutLocationIcon,
  amenities: AboutAmenitiesIcon,
  support: AboutSupportIcon,
};

interface AboutFeatureListProps {
  subtitle: AboutContent["subtitle"];
  features: AboutContent["features"];
}

export function AboutFeatureList({ subtitle, features }: AboutFeatureListProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-start text-lg font-semibold text-write-main sm:text-xl">{subtitle}</h3>
      <ul className="flex flex-col gap-6">
        {features.map(({ id, text, icon }) => {
          const Icon = FEATURE_ICONS[icon];
          return (
            <li key={id} className="flex items-center gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-raw-f3f5f6">
                {Icon && <Icon className="size-10" />}
              </span>
              <span className="text-start text-sm font-semibold text-green sm:text-base">{text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
