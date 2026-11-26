import type { ComponentType, SVGProps } from "react";
import { AppStoreBadge, GooglePlayBadge } from "@/shared/icons";
import type { DownloadAppContent } from "../../types/downloadApp";

interface StoreItem {
  id: string;
  label: string;
  href: string;
  Badge: ComponentType<SVGProps<SVGSVGElement>>;
}

export function DownloadAppStoreButtons({
  stores,
}: {
  stores: DownloadAppContent["stores"];
}) {
  const items: StoreItem[] = [
    {
      id: "google-play",
      label: stores.googlePlay,
      href: "#",
      Badge: GooglePlayBadge,
    },
    {
      id: "app-store",
      label: stores.appStore,
      href: "#",
      Badge: AppStoreBadge,
    },
  ];

  return (
    <div className="mt-7 flex flex-wrap items-center gap-3.5 sm:mt-9 sm:gap-5">
      {items.map(({ id, label, href, Badge }) => (
        <a
          key={id}
          href={href}
          aria-label={label}
          className="block transition duration-200 hover:scale-105 hover:opacity-90"
        >
          <Badge className="block h-auto w-[152px] sm:w-[213px]" />
        </a>
      ))}
    </div>
  );
}
