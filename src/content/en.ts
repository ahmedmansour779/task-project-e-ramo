export const en = {
  home: {
    header: {
      navItems: [
        { id: "home", label: "Home", href: "#home" },
        { id: "about", label: "About", href: "#about" },
        { id: "products", label: "Products", href: "#products" },
        { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
        { id: "contact-us", label: "Contact Us", href: "#contact-us" },
        { id: "membership", label: "Membership", href: "#membership" },
      ],
      languageSwitcher: {
        currentLabel: "English",
        options: [
          { code: "ar", label: "العربية" },
          { code: "en", label: "English" },
        ],
      },
      actions: {
        createAccount: "Create Account",
        login: "Login",
      },
      ariaLabels: {
        mainNav: "Main navigation",
        language: "Change language",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
    },
  },
};

export type Dictionary = typeof en;
