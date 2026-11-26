import { FooterAppDownload } from "./FooterAppDownload";
import { FooterBottomBar } from "./FooterBottomBar";
import { FooterBrand } from "./FooterBrand";
import { FooterLinksColumn } from "./FooterLinksColumn";
import type { FooterProps } from "./types";

const DIVIDER = "border-t-[0.5px] border-brown/50";

export function Footer({ lang, content }: FooterProps) {
  const fontClass = lang === "en" ? "font-open-sans" : "font-cairo";

  return (
    <footer className={`mt-auto bg-raw-f3f5f6 ${fontClass}`}>
      <div className="mx-auto w-full max-w-[1375px] px-4 pt-7 sm:px-8 lg:px-8">
        <div className={DIVIDER} />
        <div className="grid grid-cols-1 gap-10 pt-8 pb-12 sm:grid-cols-2 lg:grid-cols-[315fr_342fr_350fr_305fr] lg:pt-[34px]">
          <FooterBrand lang={lang} content={content} />
          <FooterLinksColumn lang={lang} title={content.mainPagesTitle} links={content.mainPages} />
          <FooterLinksColumn lang={lang} title={content.productsTitle} links={content.products} />
          <FooterAppDownload title={content.downloadTitle} />
        </div>
        <div className={DIVIDER}>
          <FooterBottomBar lang={lang} content={content} />
        </div>
      </div>
    </footer>
  );
}
