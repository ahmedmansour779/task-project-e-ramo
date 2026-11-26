import Link from "next/link";
import type { Locale } from "@/content";
import { PriceTagIcon } from "@/shared/icons";
import type { ProductCategoryItem, ProductsContent } from "../../types/products";

interface ProductWorkspaceDetailsProps {
  lang: Locale;
  category: ProductCategoryItem;
  priceStartingFrom: ProductsContent["priceStartingFrom"];
  actions: ProductsContent["actions"];
}

export function ProductWorkspaceDetails({
  lang,
  category,
  priceStartingFrom,
  actions,
}: ProductWorkspaceDetailsProps) {
  return (
    <div className="flex w-full flex-col lg:max-w-[518px]">
      <h2 className="text-start font-bold tracking-[0.03em] text-write-main">
        <span className="block text-3xl leading-tight sm:text-5xl lg:text-[62px] lg:leading-[56px]">
          {category.title}
        </span>
        <span className="mt-1 block text-xl font-medium sm:text-2xl lg:text-[32px] lg:leading-[50px]">
          {category.subtitle}
        </span>
      </h2>

      <p className="mt-4 text-start text-sm font-semibold leading-6 text-write-main sm:text-base">
        {category.description}
      </p>

      <ul className="mt-6 flex flex-col gap-4 sm:gap-5">
        {category.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5">
            <span className="size-3 shrink-0 rounded-full bg-brown" />
            <span className="text-start text-sm text-write-main sm:text-base">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 sm:mt-11">
        <div className="w-[185px] border-t-[0.5px] border-brown" />
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <PriceTagIcon className="size-6 shrink-0" />
          <span className="text-sm text-write-main sm:text-base">
            {priceStartingFrom}
          </span>
          <strong className="text-base font-semibold text-write-main sm:text-lg">
            {category.price}
          </strong>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-5">
        <Link
          href={`/${lang}/booking`}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-green px-6 text-base font-bold text-off-white transition-opacity duration-200 hover:opacity-90 sm:h-14 sm:w-[190px]"
        >
          {actions.bookNow}
        </Link>
        <Link
          href={`/${lang}#contact-us`}
          className="flex h-12 w-full items-center justify-center rounded-xl border border-lighter-green px-6 text-base font-bold text-lighter-green transition-colors duration-200 hover:bg-lighter-green hover:text-off-white sm:h-14 sm:w-[190px]"
        >
          {actions.learnMore}
        </Link>
      </div>
    </div>
  );
}
