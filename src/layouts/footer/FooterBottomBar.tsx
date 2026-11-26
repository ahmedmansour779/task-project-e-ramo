import Link from "next/link";
import { localizeHref } from "@/lib/localizeHref";
import type { FooterProps } from "./types";

function CopyrightText({ text }: { text: string }) {
  return (
    <p className="text-sm text-subwrite md:text-base md:text-end">
      {text.split("**").map((part, index) =>
        index % 2 === 1 ? <strong key={part} className="font-bold">{part}</strong> : part,
      )}
    </p>
  );
}

export function FooterBottomBar({ lang, content }: FooterProps) {
  return (
    <div className="flex flex-col gap-4 pt-4 pb-10 md:flex-row md:items-center md:justify-between">
      <ul className="flex flex-wrap gap-x-8 gap-y-2">
        {content.legalLinks.map(({ id, label, href }) => (
          <li key={id}>
            <Link
              href={localizeHref(lang, href)}
              className="text-sm text-subwrite underline transition-colors duration-200 hover:text-green md:text-base"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <CopyrightText text={content.copyright} />
    </div>
  );
}
