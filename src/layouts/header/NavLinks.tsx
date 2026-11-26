import Link from "next/link";
import type { HeaderSectionProps, HeaderVariant } from "./types";

interface NavLinksProps extends HeaderSectionProps {
  active: string;
}

const navStyles: Record<HeaderVariant, string> = {
  desktop: "ms-6 hidden items-center gap-4 lg:flex xl:ms-[82px] xl:gap-12",
  mobile: "flex flex-col",
};

const linkStyles: Record<HeaderVariant, string> = {
  desktop: "whitespace-nowrap",
  mobile: "border-b border-raw-eaecf0 py-3",
};

export function NavLinks({ lang, content, active, variant = "desktop", onNavigate }: NavLinksProps) {
  return (
    <nav aria-label={content.ariaLabels.mainNav} className={navStyles[variant]}>
      {content.navItems.map(({ id, href, label }) => (
        <Link
          key={id}
          href={`/${lang}${href}`}
          onClick={onNavigate}
          aria-current={active === id ? "true" : undefined}
          className={`text-base transition-colors duration-200 hover:text-green ${linkStyles[variant]} ${
            active === id ? "font-extrabold text-green" : "font-normal text-subwrite"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
