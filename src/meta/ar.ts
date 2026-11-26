import type { Metadata } from "next";

export const metadataAr: Metadata = {
  title: {
    default: "تشير لوكيشن | أثاث منزلي ومكتبي ومساحات عمل متكاملة",
    template: "%s | تشير لوكيشن",
  },
  description:
    "اكتشف أحدث تشكيلات الأثاث المنزلي والمكتبي المريح، ومساحات العمل المشتركة، والمكاتب الخاصة، وغرف الاجتماعات، والمكاتب الافتراضية المصممة لأسلوب عملك الإبداعي مع تشير لوكيشن.",
  keywords: [
    "تشير لوكيشن",
    "Chair Location",
    "أثاث منزلي",
    "أثاث مكتبي",
    "كراسي مكتب",
    "مساحات عمل مشتركة",
    "مكاتب خاصة",
    "غرف اجتماعات",
    "مكاتب افتراضية",
  ],
  applicationName: "تشير لوكيشن - Chair Location",
  authors: [{ name: "Chair Location" }, { name: "e-RAMO For Digital Solutions" }],
  creator: "e-RAMO For Digital Solutions",
  publisher: "Chair Location",
  alternates: {
    canonical: "/ar",
    languages: {
      en: "/en",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    siteName: "تشير لوكيشن | Chair Location",
    title: "تشير لوكيشن | أثاث منزلي ومكتبي ومساحات عمل متكاملة",
    description:
      "أثاث منزلي ومكتبي عصري ومساحات عمل مرنة تناسب أسلوب عملك.",
    url: "/ar",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "تشير لوكيشن — أثاث منزلي ومكتبي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تشير لوكيشن | أثاث منزلي ومكتبي ومساحات عمل متكاملة",
    description:
      "أثاث منزلي ومكتبي عصري ومساحات عمل مرنة تناسب أسلوب عملك.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
