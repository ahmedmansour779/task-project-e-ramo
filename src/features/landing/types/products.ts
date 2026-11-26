import type { Dictionary } from "@/content";

export type ProductsContent = Dictionary["home"]["products"];
export type ProductCategoryItem = ProductsContent["categories"][number];
