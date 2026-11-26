export const en = {
  home: {
    footer: {
      mainPagesTitle: "Main Pages",
      mainPages: [
        { id: "home", label: "Home", href: "#home" },
        { id: "about", label: "About", href: "#about" },
        { id: "how-it-works", label: "How It Works", href: "#how-it-works" },
        { id: "contact-us", label: "Contact Us", href: "#contact-us" },
        { id: "membership", label: "Membership", href: "#membership" },
      ],
      productsTitle: "Products",
      products: [
        { id: "shared-space", label: "Shared Space", href: "#products", icon: "shared-space" },
        { id: "private-offices", label: "Private Offices", href: "#products", icon: "private-offices" },
        { id: "meeting-rooms", label: "Meeting Rooms", href: "#products", icon: "meeting-rooms" },
        { id: "virtual-offices", label: "Virtual Offices", href: "#products", icon: "virtual-offices" },
      ],
      downloadTitle: "Download the Chair Location App",
      socialLinks: [
        { id: "facebook", label: "Facebook", href: "#" },
        { id: "youtube", label: "YouTube", href: "#" },
        { id: "linkedin", label: "LinkedIn", href: "#" },
        { id: "x", label: "X", href: "#" },
      ],
      legalLinks: [
        { id: "privacy", label: "Privacy & Policy", href: "/privacy-policy" },
        { id: "terms", label: "Terms & Conditions", href: "/terms" },
      ],
      copyright: "All Copyrights Chair Location | Developed by **e-RAMO For Digital Solutions**",
    },
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
