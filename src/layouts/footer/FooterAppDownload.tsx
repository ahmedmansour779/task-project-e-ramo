import type { ComponentType, SVGProps } from "react";
import { AppStoreBadge, GooglePlayBadge } from "@/shared/icons";

interface StoreBadge {
  id: string;
  label: string;
  href: string;
  Badge: ComponentType<SVGProps<SVGSVGElement>>;
}

const STORE_BADGES: StoreBadge[] = [
  { id: "google-play", label: "Google Play", href: "#", Badge: GooglePlayBadge },
  { id: "app-store", label: "App Store", href: "#", Badge: AppStoreBadge },
];

export function FooterAppDownload({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-[26px]">
      <h3 className="max-w-[227px] text-xl font-bold text-green lg:text-2xl">{title}</h3>
      <ul className="flex flex-col gap-3.5">
        {STORE_BADGES.map(({ id, label, href, Badge }) => (
          <li key={id}>
            <a
              href={href}
              aria-label={label}
              className="block w-fit transition duration-200 hover:scale-105 hover:opacity-90"
            >
              <Badge className="block h-auto w-[168px]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
