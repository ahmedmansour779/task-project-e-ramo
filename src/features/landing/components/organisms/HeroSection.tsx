import Image from "next/image";
import heroImage from "@/shared/images/hero-image.jpg";
import { HeroHeading } from "../atoms/HeroHeading";
import { HeroSearchBar } from "../molecules/HeroSearchBar";
import { HeroSearchTabs } from "../molecules/HeroSearchTabs";
import type { HeroContent } from "../../types/hero";

const OVERLAY = "bg-[linear-gradient(180deg,rgba(63,53,51,1)_0%,rgba(76,63,59,0)_100%)]";

export function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section id="home" className="mx-auto w-full max-w-[1375px] px-4 sm:px-8 lg:pb-[53px]">
      <div className="relative flex flex-col items-center px-3 py-8 sm:px-8 sm:py-10 lg:h-[668px] lg:p-0 lg:pt-[105px]">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <Image src={heroImage} alt="" fill priority sizes="(min-width: 1375px) 1312px, 100vw" className="object-cover" />
          <div className={`absolute inset-0 ${OVERLAY}`} />
        </div>
        <HeroHeading line1={content.titleLine1} line2={content.titleLine2} />
        <div className="relative z-10 mt-5 w-full rounded-2xl bg-white shadow-[0_8px_4px_0_var(--shadow-soft)] sm:mt-8 lg:absolute lg:inset-x-0 lg:-bottom-[53px] lg:mx-auto lg:mt-0 lg:w-[82%] lg:max-w-[1079px] lg:rounded-[37px]">
          <div className="px-3 pt-3 sm:px-4 sm:pt-4 lg:px-8 lg:pt-[30px] xl:px-[86px]">
            <HeroSearchTabs tabs={content.tabs} />
          </div>
          <div className="mt-3 rounded-b-2xl bg-raw-fffaf5 p-3 sm:mt-4 sm:p-4 lg:mt-[29px] lg:rounded-b-[37px] lg:px-8 lg:pt-[33px] lg:pb-8 xl:px-[86px]">
            <HeroSearchBar
              placeholder={content.searchPlaceholder}
              nearbyLabel={content.searchNearby}
              submitLabel={content.searchButton}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
