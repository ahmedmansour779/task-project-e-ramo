"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AuthActions } from "./AuthActions";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { NavLinks } from "./NavLinks";
import type { HeaderSectionProps } from "./types";

interface MobileSidebarProps extends HeaderSectionProps {
  active: string;
  open: boolean;
  onClose: () => void;
}

export function MobileSidebar({ lang, content, active, open, onClose }: MobileSidebarProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  const shared = { lang, content, variant: "mobile", onNavigate: onClose } as const;

  return (
    <div className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`} inert={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        className={`absolute inset-y-0 end-0 flex w-[300px] max-w-[85vw] flex-col gap-6 overflow-y-auto bg-white p-5 shadow-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href={`/${lang}`} onClick={onClose} className="text-lg font-extrabold text-green">
            Chair Location
          </Link>
          <button
            type="button"
            aria-label={content.ariaLabels.closeMenu}
            onClick={onClose}
            className="flex size-10 items-center justify-center rounded-lg text-write-main transition-colors duration-200 hover:bg-off-white"
          >
            <X className="size-6" />
          </button>
        </div>
        <NavLinks {...shared} active={active} />
        <LanguageSwitcher {...shared} />
        <div className="mt-auto">
          <AuthActions {...shared} />
        </div>
      </aside>
    </div>
  );
}
