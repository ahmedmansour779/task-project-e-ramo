"use client";

import { useEffect, useState } from "react";
import type { HeaderContent } from "./types";

const SHOW_DELAY_MS = 20;
const ACTIVE_OFFSET_PX = 120;

export function useHeaderScroll(navItems: HeaderContent["navItems"]) {
  const [isFixed, setIsFixed] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [active, setActive] = useState(navItems[0]?.id ?? "home");

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight;
      setIsFixed(pastHero);
      if (!pastHero) setIsShown(false);

      let current = navItems[0]?.id ?? "home";
      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET_PX) current = id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  useEffect(() => {
    if (!isFixed) return;
    const id = window.setTimeout(() => setIsShown(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(id);
  }, [isFixed]);

  return { isFixed, isShown, active };
}
