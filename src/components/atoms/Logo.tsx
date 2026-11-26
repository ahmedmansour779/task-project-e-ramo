import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/images/logo.png";
import type { Locale } from "@/content";

const CROP = { scaleX: 0.6283333, scaleY: 0.5486667, offsetX: 0.187, offsetY: 0.1913333 };

interface LogoProps {
  lang: Locale;
  width: number;
}

export function Logo({ lang, width }: LogoProps) {
  const full = width / CROP.scaleX;

  return (
    <Link
      href={`/${lang}`}
      aria-label="Home"
      className="relative block shrink-0 overflow-hidden"
      style={{ width, height: full * CROP.scaleY }}
    >
      <Image
        src={logo}
        alt="Chair Location"
        width={Math.round(full)}
        height={Math.round(full)}
        priority
        className="absolute max-w-none"
        style={{ left: -full * CROP.offsetX, top: -full * CROP.offsetY }}
      />
    </Link>
  );
}
