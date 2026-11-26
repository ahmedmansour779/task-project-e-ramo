import type { Dictionary } from "@/content";

export type PricingContent = Dictionary["home"]["pricing"];
export type PricingPlanItem = PricingContent["plans"][number];

export type ArticlesContent = Dictionary["home"]["articles"];
export type ArticleItem = ArticlesContent["items"][number];

export type ContactUsContent = Dictionary["home"]["contactUs"];

export type TrustedContent = Dictionary["home"]["trusted"];
export type PartnerItem = TrustedContent["partners"][number];

export type SubscribeContent = Dictionary["home"]["subscribe"];
