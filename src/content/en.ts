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
    latestListings: {
      title: "Latest Listings",
      subtitle: "Check our latest listings",
      availableBadge: "Available",
      notAvailableBadge: "Not Available",
      reviewLabel: "Review",
      perLabel: "Per",
      openStatus: "Open",
      closedStatus: "Closed",
      startsFrom: "Starts From :",
      perHour: "/HOUR",
      currency: "SAR",
    },
    about: {
      title: "About Chair Location",
      description:
        "“Chair location” is a website where you can search, find and reserve co-working space, including co-working offices, private offices, meeting rooms, and virtual offices near you. It shows the features and amenities this space can provide. Professionals and businesses can then compare all available co-working spaces to find one with the services and facilities that best suit their requirements.",
      subtitle: "Why Chair Location",
      features: [
        { id: "locations", text: "More Than (4652) Location", icon: "location" },
        { id: "amenities", text: "We Offer All Amenities in Our All Location", icon: "amenities" },
        { id: "support", text: "All Kinda Of Supports 24/7", icon: "support" },
      ],
      actions: {
        viewProducts: "View Products",
        bookNow: "Book Now",
      },
    },
    hero: {
      titleLine1: "Office That Fit You",
      titleLine2: "Creative Way To Work",
      tabs: [
        { id: "shared-space", label: "Shared Space", icon: "shared-space" },
        { id: "private-offices", label: "Private Offices", icon: "private-offices" },
        { id: "meeting-rooms", label: "Meeting Rooms", icon: "meeting-rooms" },
        { id: "virtual-offices", label: "Virtual Offices", icon: "virtual-offices" },
      ],
      searchPlaceholder: "Search Here...",
      searchNearby: "Search Nearby",
      searchButton: "Search",
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
