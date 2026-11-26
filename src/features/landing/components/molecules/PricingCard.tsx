import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import type { Locale } from "@/content";
import {
  CheckCircleIcon,
  PlanBasicIcon,
  PlanEnterpriseIcon,
  PlanPopularIcon,
  PopularBadgeIcon,
} from "@/shared/icons";
import type { PricingPlanItem } from "../../types/sections";

const PLAN_ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  basic: PlanBasicIcon,
  popular: PlanPopularIcon,
  enterprise: PlanEnterpriseIcon,
};

interface PricingCardProps {
  lang: Locale;
  plan: PricingPlanItem;
  currency: string;
  periodLabel: string;
  whatsIncluded: string;
  isAnnual: boolean;
}

export function PricingCard({
  lang,
  plan,
  currency,
  periodLabel,
  whatsIncluded,
  isAnnual,
}: PricingCardProps) {
  const Icon = PLAN_ICONS[plan.icon] ?? PlanBasicIcon;
  const featured = plan.isFeatured;
  const activePrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <article
      className={`flex h-full flex-col justify-between p-6 shadow-[0_2px_12px_0_var(--shadow-card)] sm:p-8 ${
        featured
          ? "rounded-3xl bg-green text-off-white xl:-mt-6 xl:pb-10"
          : "rounded-2xl border border-raw-eff0f6 bg-white text-write-main"
      }`}
    >
      <div>
        {featured && plan.badge && (
          <div className="mb-5 flex h-10 items-center justify-center gap-2 rounded-[10px] bg-white/20 px-3 text-xs font-medium text-white sm:text-sm">
            <PopularBadgeIcon className="size-5 shrink-0" />
            <span className="truncate">{plan.badge}</span>
          </div>
        )}

        <div className="flex items-center gap-4">
          <div
            className={`flex size-[64px] shrink-0 items-center justify-center rounded-2xl sm:size-[72px] ${
              featured
                ? "bg-white/15 text-off-white"
                : "bg-raw-f4f1ed text-green"
            }`}
          >
            <Icon className="size-8 sm:size-9" />
          </div>
          <div className="min-w-0">
            <p
              className={`text-start text-sm font-medium sm:text-base ${
                featured ? "text-raw-d8d2c6" : "text-neutral-600"
              }`}
            >
              {plan.audience}
            </p>
            <h3
              className={`truncate text-start text-xl font-bold sm:text-2xl ${
                featured ? "text-off-white" : "text-write-main"
              }`}
            >
              {plan.name}
            </h3>
          </div>
        </div>

        <p
          className={`mt-5 text-start text-sm leading-[26px] ${
            featured ? "text-raw-d8d2c6" : "text-neutral-600"
          }`}
        >
          {plan.description}
        </p>

        <div className="mt-5 flex flex-wrap items-baseline gap-1.5">
          <span
            className={`text-2xl font-bold sm:text-[28px] ${
              featured ? "text-off-white" : "text-write-main"
            }`}
          >
            {currency}
          </span>
          <span
            className={`text-4xl font-bold leading-none sm:text-[50px] ${
              featured ? "text-off-white" : "text-write-main"
            }`}
          >
            {activePrice}
          </span>
          <span
            className={`text-base sm:text-lg ${
              featured ? "text-raw-d8d2c6" : "text-neutral-600"
            }`}
          >
            {periodLabel}
          </span>
        </div>

        <h4
          className={`mt-6 text-start text-base font-bold sm:text-lg ${
            featured ? "text-off-white" : "text-write-main"
          }`}
        >
          {whatsIncluded}
        </h4>

        <ul className="mt-4 flex flex-col gap-3.5">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5">
              <CheckCircleIcon featured={featured} className="size-5 shrink-0" />
              <span
                className={`text-start text-sm sm:text-[15px] ${
                  featured ? "text-off-white" : "text-write-main"
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={`/${lang}/register`}
        className={`mt-8 flex h-14 w-full items-center justify-center rounded-full px-6 text-base font-bold transition-opacity duration-200 hover:opacity-90 sm:h-[62px] sm:text-lg ${
          featured
            ? "bg-off-white text-green"
            : "bg-green text-white"
        }`}
      >
        {plan.ctaLabel}
      </Link>
    </article>
  );
}
