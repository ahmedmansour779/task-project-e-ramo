import Image from "next/image";
import { Logo } from "@/components/atoms/Logo";
import type { FooterProps } from "./types";

export function FooterBrand({ lang, content }: FooterProps) {
  return (
    <div className="flex flex-col gap-8">
      <Logo lang={lang} width={126} />
      <ul className="grid w-[63px] grid-cols-2 gap-x-[15px] gap-y-5 ms-8">
        {content.socialLinks.map(({ id, label, href }) => (
          <li key={id}>
            <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="block transition-opacity duration-200 hover:opacity-70">
              <Image src={`/images/footer/${id}.svg`} alt="" width={24} height={24} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
