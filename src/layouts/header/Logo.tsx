import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/images/logo.png";
import type { Locale } from "@/content";

export function Logo({ lang }: { lang: Locale }) {
  return (
    <Link href={`/${lang}`} aria-label="Home" className="relative block h-[59px] w-[67px] shrink-0 overflow-hidden">
      <Image
        src={logo}
        alt="Chair Location"
        width={107}
        height={107}
        priority
        className="absolute max-w-none"
        style={{ left: -19.94, top: -20.57 }}
      />
    </Link>
  );
}
