import Link from "next/link";
import { User } from "lucide-react";
import type { HeaderSectionProps, HeaderVariant } from "./types";

const wrapperStyles: Record<HeaderVariant, string> = {
  desktop: "flex items-center gap-3",
  mobile: "flex flex-col gap-3",
};

const widthStyles: Record<HeaderVariant, { createAccount: string; login: string }> = {
  desktop: { createAccount: "w-[118px] xl:w-[146.88px]", login: "w-[100px] xl:w-[146.88px]" },
  mobile: { createAccount: "w-full", login: "w-full" },
};

export function AuthActions({ lang, content, variant = "desktop", onNavigate }: HeaderSectionProps) {
  const { actions } = content;
  const widths = widthStyles[variant];

  return (
    <div className={wrapperStyles[variant]}>
      <Link
        href={`/${lang}/register`}
        onClick={onNavigate}
        className={`flex h-12 items-center justify-center rounded-lg bg-green text-[13px] font-semibold text-off-white transition-opacity duration-200 hover:opacity-90 ${widths.createAccount}`}
      >
        {actions.createAccount}
      </Link>
      <Link
        href={`/${lang}/login`}
        onClick={onNavigate}
        className={`flex h-12 items-center justify-center gap-2 rounded-lg border border-green text-sm font-semibold text-green transition-colors duration-200 hover:bg-green hover:text-off-white ${widths.login}`}
      >
        <User className="size-5" aria-hidden="true" />
        {actions.login}
      </Link>
    </div>
  );
}
