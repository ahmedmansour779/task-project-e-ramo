"use client";

import { useCallback, useState } from "react";
import { Menu } from "lucide-react";
import { AuthActions } from "./AuthActions";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileSidebar } from "./MobileSidebar";
import { NavLinks } from "./NavLinks";
import type { HeaderSectionProps } from "./types";
import { useHeaderScroll } from "./useHeaderScroll";
import { Logo } from "@/components/atoms/Logo";

const FIXED_BAR =
  "fixed inset-x-0 top-0 z-50 h-[86px] bg-white/95 shadow-sm backdrop-blur-md transition-transform duration-300 ease-out";
const STATIC_BAR = "absolute inset-x-0 top-0 h-[86px]";

export function Header({ lang, content }: HeaderSectionProps) {
  const { isFixed, isShown, active } = useHeaderScroll(content.navItems);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const barClass = isFixed ? `${FIXED_BAR} ${isShown ? "translate-y-0" : "-translate-y-full"}` : STATIC_BAR;
  const fontClass = lang === "en" ? "font-open-sans" : "font-cairo";
  const shared = { lang, content };

  return (
    <header className={`relative z-40 h-[86px] ${fontClass}`}>
      <div className={barClass}>
        <div className="mx-auto flex h-full w-full max-w-[1375px] items-center px-4 sm:px-8 lg:px-6 xl:px-8">
          <Logo lang={lang} width={0} />
          <Logo lang={lang} width={67} />
          <NavLinks {...shared} active={active} />
          <div className="ms-auto hidden items-center gap-3 lg:flex">
            <LanguageSwitcher {...shared} />
            <AuthActions {...shared} />
          </div>
          <button
            type="button"
            aria-label={content.ariaLabels.openMenu}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(true)}
            className="ms-auto flex size-11 items-center justify-center rounded-lg text-green transition-colors duration-200 hover:bg-off-white lg:hidden"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>
      <MobileSidebar {...shared} active={active} open={drawerOpen} onClose={closeDrawer} />
    </header>
  );
}
