import type { Metadata } from "next";

export const metadataEn: Metadata = {
  title: {
    default: "Chair Location | Home & Office Furniture & Workspaces",
    template: "%s | Chair Location",
  },
  description:
    "Discover ergonomic home and office furniture, shared workspaces, private offices, meeting rooms, and virtual office solutions tailored to your creative way to work at Chair Location.",
  keywords: [
    "Chair Location",
    "Home Furniture",
    "Office Furniture",
    "Ergonomic Chairs",
    "Shared Space",
    "Private Offices",
    "Meeting Rooms",
    "Virtual Offices",
    "Workspace Solutions",
  ],
  applicationName: "Chair Location",
  authors: [{ name: "Chair Location" }, { name: "e-RAMO For Digital Solutions" }],
  creator: "e-RAMO For Digital Solutions",
  publisher: "Chair Location",
  alternates: {
    canonical: "/en",
    languages: {
      en: "/en",
      ar: "/ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG", "ar_SA"],
    siteName: "Chair Location",
    title: "Chair Location | Home & Office Furniture & Workspaces",
    description:
      "Ergonomic home and office furniture and flexible workspace solutions tailored to fit your work style.",
    url: "/en",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Chair Location — Home & Office Furniture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chair Location | Home & Office Furniture & Workspaces",
    description:
      "Ergonomic home and office furniture and flexible workspace solutions.",
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
