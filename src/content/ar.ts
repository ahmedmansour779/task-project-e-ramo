import type { Dictionary } from "./en";

export const ar: Dictionary = {
  home: {
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