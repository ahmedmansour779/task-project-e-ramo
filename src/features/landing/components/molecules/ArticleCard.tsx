import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { Locale } from "@/content";
import { ReadMoreArrowIcon } from "@/shared/icons";
import type { ArticleItem } from "../../types/sections";

interface ArticleCardProps {
  lang: Locale;
  article: ArticleItem;
  image: StaticImageData;
  readMoreLabel: string;
}

export function ArticleCard({
  lang,
  article,
  image,
  readMoreLabel,
}: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative h-[220px] w-full overflow-hidden rounded-xl sm:h-[240px]">
        <Image
          src={image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 392px, (min-width: 768px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 text-sm font-semibold">
        <span className="text-raw-b0968f">{article.category}</span>
        <span className="text-raw-879aaf">{article.date}</span>
      </div>

      <h3 className="mt-2 line-clamp-2 text-start text-xl font-bold leading-8 text-raw-101828 sm:text-2xl">
        {article.title}
      </h3>

      <p className="mt-2 line-clamp-3 text-start text-sm leading-6 text-raw-4e657f sm:text-base">
        {article.excerpt}
      </p>

      <div className="mt-auto pt-5">
        <Link
          href={`/${lang}#contact-us`}
          className="inline-flex items-center gap-2 text-base font-bold text-green transition-opacity duration-200 hover:opacity-80"
        >
          <span>{readMoreLabel}</span>
          <ReadMoreArrowIcon className="size-5 rtl:rotate-180" />
        </Link>
      </div>
    </article>
  );
}
