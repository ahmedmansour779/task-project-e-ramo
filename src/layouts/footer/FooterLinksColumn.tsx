import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/content";
import { localizeHref } from "@/lib/localizeHref";

interface FooterLink {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

interface FooterLinksColumnProps {
  lang: Locale;
  title: string;
  links: FooterLink[];
}

function LinkMarker({ icon }: { icon?: string }) {
  if (icon) {
    return <Image src={`/images/footer/${icon}.svg`} alt="" width={16} height={16} className="opacity-80" />;
  }
  return <span className="size-[5px] shrink-0 rounded-full bg-lighter-green" />;
}

export function FooterLinksColumn({ lang, title, links }: FooterLinksColumnProps) {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold text-green lg:text-2xl">{title}</h3>
      <ul className="flex flex-col gap-5 lg:gap-8">
        {links.map(({ id, label, href, icon }) => (
          <li key={id}>
            <Link
              href={localizeHref(lang, href)}
              className={`flex items-center text-base text-subwrite transition-colors duration-200 hover:text-green ${icon ? "gap-1" : "gap-1.5"}`}
            >
              <LinkMarker icon={icon} />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
