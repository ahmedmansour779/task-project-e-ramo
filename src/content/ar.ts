import type { Dictionary } from "./en";

export const ar: Dictionary = {
  home: {
    footer: {
      mainPagesTitle: "الصفحات الرئيسية",
      mainPages: [
        { id: "home", label: "الرئيسية", href: "#home" },
        { id: "about", label: "من نحن", href: "#about" },
        { id: "how-it-works", label: "كيف نعمل", href: "#how-it-works" },
        { id: "contact-us", label: "تواصل معنا", href: "#contact-us" },
        { id: "membership", label: "العضويات", href: "#membership" },
      ],
      productsTitle: "المنتجات",
      products: [
        { id: "shared-space", label: "مساحة مشتركة", href: "#products", icon: "shared-space" },
        { id: "private-offices", label: "مكاتب خاصة", href: "#products", icon: "private-offices" },
        { id: "meeting-rooms", label: "قاعات اجتماعات", href: "#products", icon: "meeting-rooms" },
        { id: "virtual-offices", label: "مكاتب افتراضية", href: "#products", icon: "virtual-offices" },
      ],
      downloadTitle: "حمّل تطبيق Chair Location",
      socialLinks: [
        { id: "facebook", label: "فيسبوك", href: "#" },
        { id: "youtube", label: "يوتيوب", href: "#" },
        { id: "linkedin", label: "لينكدإن", href: "#" },
        { id: "x", label: "إكس", href: "#" },
      ],
      legalLinks: [
        { id: "privacy", label: "سياسة الخصوصية", href: "/privacy-policy" },
        { id: "terms", label: "الشروط والأحكام", href: "/terms" },
      ],
      copyright: "جميع الحقوق محفوظة لـ Chair Location | تطوير **e-RAMO للحلول الرقمية**",
    },
    hero: {
      titleLine1: "المكتب الذي يناسبك",
      titleLine2: "طريقة إبداعية للعمل",
      tabs: [
        { id: "shared-space", label: "مساحة مشتركة", icon: "shared-space" },
        { id: "private-offices", label: "مكاتب خاصة", icon: "private-offices" },
        { id: "meeting-rooms", label: "غرف اجتماعات", icon: "meeting-rooms" },
        { id: "virtual-offices", label: "مكاتب افتراضية", icon: "virtual-offices" },
      ],
      searchPlaceholder: "ابحث هنا...",
      searchNearby: "ابحث بالقرب منك",
      searchButton: "بحث",
    },
    header: {
      navItems: [
        { id: "home", label: "الرئيسية", href: "#home" },
        { id: "about", label: "من نحن", href: "#about" },
        { id: "products", label: "المنتجات", href: "#products" },
        { id: "how-it-works", label: "كيف نعمل", href: "#how-it-works" },
        { id: "contact-us", label: "تواصل معنا", href: "#contact-us" },
        { id: "membership", label: "العضويات", href: "#membership" },
      ],
      languageSwitcher: {
        currentLabel: "العربية",
        options: [
          { code: "ar", label: "العربية" },
          { code: "en", label: "English" },
        ],
      },
      actions: {
        createAccount: "إنشاء حساب",
        login: "تسجيل الدخول",
      },
      ariaLabels: {
        mainNav: "القائمة الرئيسية",
        language: "تغيير اللغة",
        openMenu: "فتح القائمة",
        closeMenu: "إغلاق القائمة",
      },
    },
  },
};