import type { StaticImageData } from "next/image";
import latestImage from "@/shared/images/latest-image.jpg";

export interface LocalizedListingFields {
  title: string;
  description: string;
  category: string;
  currency: string;
  period: string;
}

export interface ListingItem {
  id: string;
  isAvailable: boolean;
  isOpen: boolean;
  isFavorite: boolean;
  rating: number;
  reviewsCount: number;
  capacity: number;
  price: number;
  image: StaticImageData;
  en: LocalizedListingFields;
  ar: LocalizedListingFields;
}

export const latestListings: ListingItem[] = [
  {
    id: "listing-1",
    isAvailable: true,
    isOpen: true,
    isFavorite: true,
    rating: 4.9,
    reviewsCount: 162,
    capacity: 12,
    price: 20,
    image: latestImage,
    en: {
      title: "Spot Co-Working Space",
      description:
        "Chair location is a website where you can search, find and reserve co-working space, including co-working offices, private offices, and meeting rooms.",
      category: "Shared Area",
      currency: "SAR",
      period: "/HOUR",
    },
    ar: {
      title: "سبوت لمساحات العمل المشتركة",
      description:
        "تشير لوكيشن هو موقع يتيح لك البحث والعثور وحجز مساحات العمل المشتركة، بما في ذلك المكاتب المشتركة والمكاتب الخاصة وغرف الاجتماعات.",
      category: "مساحة مشتركة",
      currency: "ريال",
      period: "/ساعة",
    },
  },
  {
    id: "listing-2",
    isAvailable: false,
    isOpen: false,
    isFavorite: false,
    rating: 4.9,
    reviewsCount: 162,
    capacity: 12,
    price: 20,
    image: latestImage,
    en: {
      title: "Spot Co-Working Space",
      description:
        "Chair location is a website where you can search, find and reserve co-working space, including co-working offices, private offices, and meeting rooms.",
      category: "Meeting Room",
      currency: "SAR",
      period: "/HOUR",
    },
    ar: {
      title: "سبوت لقاعات الاجتماعات",
      description:
        "تشير لوكيشن هو موقع يتيح لك البحث والعثور وحجز مساحات العمل المشتركة، بما في ذلك المكاتب المشتركة والمكاتب الخاصة وغرف الاجتماعات.",
      category: "غرفة اجتماعات",
      currency: "ريال",
      period: "/ساعة",
    },
  },
  {
    id: "listing-3",
    isAvailable: true,
    isOpen: false,
    isFavorite: false,
    rating: 4.9,
    reviewsCount: 162,
    capacity: 12,
    price: 20,
    image: latestImage,
    en: {
      title: "Spot Co-Working Space",
      description:
        "Chair location is a website where you can search, find and reserve co-working space, including co-working offices, private offices, and meeting rooms.",
      category: "Private Office",
      currency: "SAR",
      period: "/HOUR",
    },
    ar: {
      title: "سبوت للمكاتب الخاصة",
      description:
        "تشير لوكيشن هو موقع يتيح لك البحث والعثور وحجز مساحات العمل المشتركة، بما في ذلك المكاتب المشتركة والمكاتب الخاصة وغرف الاجتماعات.",
      category: "مكتب خاص",
      currency: "ريال",
      period: "/ساعة",
    },
  },
  {
    id: "listing-4",
    isAvailable: true,
    isOpen: true,
    isFavorite: false,
    rating: 4.8,
    reviewsCount: 124,
    capacity: 8,
    price: 35,
    image: latestImage,
    en: {
      title: "Horizon Virtual Hub",
      description:
        "Flexible virtual office address, mail handling, and on-demand meeting spaces designed for modern remote teams and growing businesses.",
      category: "Virtual Office",
      currency: "SAR",
      period: "/HOUR",
    },
    ar: {
      title: "هورايزن للمكاتب الافتراضية",
      description:
        "عنوان مكتبي افتراضي مرن مع خدمات إدارة البريد وقاعات اجتماعات عند الطلب، مصمم للفرق عن بُعد والشركات المتنامية.",
      category: "مكتب افتراضي",
      currency: "ريال",
      period: "/ساعة",
    },
  },
  {
    id: "listing-5",
    isAvailable: false,
    isOpen: true,
    isFavorite: true,
    rating: 4.9,
    reviewsCount: 198,
    capacity: 16,
    price: 25,
    image: latestImage,
    en: {
      title: "Oasis Creative Studio",
      description:
        "Bright open-plan shared workspace equipped with ergonomic seating, high-speed fiber internet, and complimentary specialty coffee.",
      category: "Shared Area",
      currency: "SAR",
      period: "/HOUR",
    },
    ar: {
      title: "أواسيس للاستوديو الإبداعي",
      description:
        "مساحة عمل مشتركة مفتوحة ومضيئة مجهزة بمقاعد مريحة وإنترنت فائق السرعة وضيافة قهوة مختصة مجانية طوال اليوم.",
      category: "مساحة مشتركة",
      currency: "ريال",
      period: "/ساعة",
    },
  },
];
