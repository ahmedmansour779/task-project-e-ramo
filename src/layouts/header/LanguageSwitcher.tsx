"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Flag, type FlagCode } from "@/components/atoms/Flag";
import type { HeaderSectionProps } from "./types";

const FLAG_CLASS = "h-4 w-6 shrink-0 rounded-[2px]";

function localizedPath(pathname: string, code: string): string {
  const segments = pathname.split("/");
  segments[1] = code;
  return segments.join("/");
}

function MobileOptions({ lang, content, onNavigate }: HeaderSectionProps) {
  const pathname = usePathname();

  return (
    <div className="flex gap-2" role="group" aria-label={content.ariaLabels.language}>
      {content.languageSwitcher.options.map(({ code, label }) => (
        <Link
          key={code}
          href={localizedPath(pathname, code)}
          onClick={onNavigate}
          className={`flex flex-1 items-center justify-center gap-2 rounded-lg border py-2.5 text-sm font-semibold transition-colors duration-200 ${
            code === lang
              ? "border-green bg-green text-off-white"
              : "border-raw-eaecf0 text-write-main hover:border-green"
          }`}
        >
          <Flag code={code as FlagCode} className={FLAG_CLASS} />
          {label}
        </Link>
      ))}
    </div>
  );
}

function DesktopDropdown({ lang, content }: HeaderSectionProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { languageSwitcher, ariaLabels } = content;
  const otherCode: FlagCode = lang === "ar" ? "en" : "ar";

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={ariaLabels.language}
        onClick={() => setOpen((value) => !value)}
        className="flex h-12 items-center gap-2 rounded-lg px-2 text-sm font-semibold text-write-main transition-colors duration-200 hover:text-green"
      >
        <Flag code={otherCode} className={FLAG_CLASS} />
        <span>{languageSwitcher.currentLabel}</span>
        <ChevronDown className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute end-0 top-full z-10 mt-2 min-w-40 overflow-hidden rounded-lg border border-raw-eaecf0 bg-white py-1 shadow-lg"
        >
          {languageSwitcher.options.map(({ code, label }) => (
            <li key={code} role="none">
              <Link
                role="menuitem"
                href={localizedPath(pathname, code)}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-off-white ${
                  code === lang ? "font-bold text-green" : "text-write-main"
                }`}
              >
                <Flag code={code as FlagCode} className={FLAG_CLASS} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function LanguageSwitcher({ variant = "desktop", ...props }: HeaderSectionProps) {
  return variant === "mobile" ? <MobileOptions {...props} /> : <DesktopDropdown {...props} />;
}
