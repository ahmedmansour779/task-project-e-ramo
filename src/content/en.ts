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
    subscribe: {
      heading: "Subscribe To Our Newsletter",
      subtitle:
        "Every couple of weeks we send out an update and a few things that have inspired us.",
      emailPlaceholder: "Write Your Mail Here...",
      buttonLabel: "Subscribe",
      validationError: "Please enter a valid email address.",
      successMessage: "You have subscribed to our newsletter successfully!",
    },
    trusted: {
      heading: "Chair Location Is Trusted By The World’s Largest Companies.",
      subtitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      partners: [
        { id: "partner-1", name: "Almarai", logoKey: "almarai" },
        { id: "partner-2", name: "Aramco", logoKey: "aramco" },
        { id: "partner-3", name: "STC", logoKey: "stc" },
        { id: "partner-4", name: "NEOM", logoKey: "neom" },
        { id: "partner-5", name: "SABIC", logoKey: "sabic" },
        { id: "partner-6", name: "ROSHN", logoKey: "roshn" },
        { id: "partner-7", name: "Jarir", logoKey: "jarir" },
        { id: "partner-8", name: "Careem", logoKey: "careem" },
      ],
    },
    contactUs: {
      heading: "Contact Us",
      subtitle: "We Are Here For Your Help",
      formHeading: "Please fill the upcoming fields",
      details: {
        phone: "+966 11 520 4800",
        email: "hello@chairlocation.com",
        address: "King Fahd Road, Olaya District, Riyadh",
      },
      placeholders: {
        fullName: "Full Name...",
        email: "E-mail...",
        phone: "Phone Number...",
        city: "City...",
        message: "Message Text...",
      },
      submitButton: "Send",
      validationError:
        "Please complete all required fields with a valid email address.",
      successMessage: "Thank you! Your message has been sent successfully.",
    },
    articles: {
      heading: "Our Recent Articles",
      subtitle: "Stay Informed with Our Latest Insights",
      readMoreLabel: "Read More",
      prevLabel: "Previous article",
      nextLabel: "Next article",
      items: [
        {
          id: "article-1",
          title: "Blog Title Here",
          excerpt:
            "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a tool for processing transactions. It represents a dynamic platform with the capacity to revolutionize the way businesses operate.",
          category: "Mohamed MO",
          date: "20 Apr 2024",
          imageKey: "article-1",
        },
        {
          id: "article-2",
          title: "Blog Title Here",
          excerpt:
            "In the realm of modern business operations, a Point of Sale (POS) system serves as more than just a tool for processing transactions. It represents a dynamic platform with the capacity to revolutionize the way businesses operate.",
          category: "Mohamed MO",
          date: "20 Apr 2024",
          imageKey: "article-2",
        },
        {
          id: "article-3",
          title: "Blog Title Here",
          excerpt:
            "One of the primary functions of a POS system is to process transactions and handle sensitive customer data, such as credit card information. Advanced POS systems utilize encryption technology to protect this data.",
          category: "Mohamed MO",
          date: "20 Apr 2024",
          imageKey: "article-3",
        },
        {
          id: "article-4",
          title: "Designing Ergonomic Hybrid Workspaces",
          excerpt:
            "Flexible office layouts and ergonomic seating empower distributed teams to collaborate comfortably, boost daily focus, and scale workspace capacity effortlessly.",
          category: "Mohamed MO",
          date: "14 May 2024",
          imageKey: "article-4",
        },
      ],
    },
    pricing: {
      eyebrow: "PRICING",
      heading: "Simple, transparent pricing",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit massa volutpat.",
      billing: {
        monthly: "Monthly",
        annually: "Annually",
        toggleAriaLabel: "Toggle annual billing",
        monthlyPeriod: "/monthly",
        annuallyPeriod: "/annually",
      },
      sidebar: {
        optionsTitle: "Select From The Upcoming Options.",
        categories: [
          { id: "shared-space", label: "Shared Space", icon: "shared-space" },
          { id: "meeting-rooms", label: "Meeting Rooms", icon: "meeting-rooms" },
          { id: "private-offices", label: "Private Offices", icon: "private-offices" },
          { id: "virtual-offices", label: "Virtual Offices", icon: "virtual-offices" },
        ],
        helpTitle: "Do you face Any Problems ?",
        helpSubtitle: "Contact us Any time Anyplace we will be Happy.",
        availableLabel: "Available 24/7",
        contactLinkLabel: "Contact Us",
      },
      whatsIncluded: "What’s included",
      currency: "SAR",
      plans: [
        {
          id: "basic",
          icon: "basic",
          audience: "For individuals",
          name: "Basic",
          badge: "",
          monthlyPrice: 99,
          annualPrice: 990,
          description:
            "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
          features: [
            "10 Hours / Week",
            "25 Hours in Shared area / Month",
            "Free 1 hour private office",
            "Up to 3 team members",
          ],
          ctaLabel: "Get started",
          isFeatured: false,
        },
        {
          id: "popular",
          icon: "popular",
          audience: "For mid companies",
          name: "Enterprise",
          badge: "Popular Plan (Best Sales)",
          monthlyPrice: 199,
          annualPrice: 1990,
          description:
            "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
          features: [
            "All analytics features",
            "Up to (1Million) tracked visits",
            "Premium support",
            "Up to 10 team members",
          ],
          ctaLabel: "Get started",
          isFeatured: true,
        },
        {
          id: "enterprise",
          icon: "enterprise",
          audience: "For big companies",
          name: "Enterprise",
          badge: "",
          monthlyPrice: 399,
          annualPrice: 3990,
          description:
            "Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing elit.",
          features: [
            "All analytics features",
            "Up to (5 Million) tracked visits",
            "Dedicated support",
            "Up to 50 team members",
          ],
          ctaLabel: "Get started",
          isFeatured: false,
        },
      ],
    },
    downloadApp: {
      title: "Explore The Chair Location App",
      description:
        "Hybrid working offers you the freedom to work closer to clients, colleagues or home.",
      stores: {
        googlePlay: "Get it on Google Play",
        appStore: "Download on the App Store",
      },
      mockupAlt: "Chair Location mobile application preview",
    },
    hybridWorking: {
      title: "Hybrid working can work for you",
      description:
        "Hybrid working offers you the freedom to work closer to clients, colleagues or home. It's also greener and more cost-effective. With over 4,000 locations globally, nobody is better placed than Regus to help you make the best of it.",
      cards: [
        { id: "hybrid-1", alt: "Modern executive meeting and collaboration room" },
        { id: "hybrid-2", alt: "Bright open-plan workspace with natural greenery" },
        { id: "hybrid-3", alt: "Contemporary hybrid office interior with flexible seating" },
      ],
      ctaLabel: "Learn More",
    },
    howItWorks: {
      titlePrefix: "How ",
      titleHighlight: "It ",
      titleSuffix: "Works",
      subtitle: "Coworking & Flexible Office Marketplace | Search & Book Today",
      steps: [
        {
          id: "step-1",
          number: "1",
          title: "Book, Reach or Call",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: "step-2",
          number: "2",
          title: "View Location Info",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
        {
          id: "step-3",
          number: "3",
          title: "Search Locations",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        },
      ],
    },
    products: {
      priceStartingFrom: "Price Starting From:",
      actions: {
        bookNow: "Book Now",
        learnMore: "Learn More",
      },
      categories: [
        {
          id: "shared-space",
          tabLabel: "Shared Space",
          icon: "shared-space",
          title: "Shared Space",
          subtitle: "(CO Work Space)",
          description:
            "Rent as many desks as you need in a dynamic, shared office space. Business Address and storage options included.",
          features: [
            "Reserved permanent workspace as long as you need",
            "Book a desk by the hour or day in anyplace",
            "A well-prepared place for your service and comfort",
            "Hot desk as often as you need in any place",
          ],
          price: "1250 EGP",
        },
        {
          id: "private-offices",
          tabLabel: "Private Offices",
          icon: "private-offices",
          title: "Private Offices",
          subtitle: "(Dedicated Team Suites)",
          description:
            "Fully furnished, lockable private offices tailored to teams of any size, complete with high-speed internet and reception support.",
          features: [
            "24/7 secure private access for your entire team",
            "Customizable office layout and ergonomic furniture",
            "Complimentary meeting room credits every month",
            "Dedicated mail handling and business address",
          ],
          price: "3400 EGP",
        },
        {
          id: "meeting-rooms",
          tabLabel: "Meeting Rooms",
          icon: "meeting-rooms",
          title: "Meeting Rooms",
          subtitle: "(On-Demand Boardrooms)",
          description:
            "Book fully equipped conference and boardrooms by the hour or day for client pitches, workshops, and team sessions.",
          features: [
            "Smart 4K displays and video conferencing hardware",
            "High-speed Wi-Fi and acoustic soundproofing",
            "On-site hospitality, coffee, and catering options",
            "Instant hourly or full-day flexible booking",
          ],
          price: "450 EGP",
        },
        {
          id: "virtual-offices",
          tabLabel: "Virtual Offices",
          icon: "virtual-offices",
          title: "Virtual Offices",
          subtitle: "(Remote Business Presence)",
          description:
            "Establish a prestigious business address with mail forwarding, dedicated call answering, and on-demand workspace access.",
          features: [
            "Prime commercial address for company registration",
            "Professional mail receipt and forwarding service",
            "Dedicated local phone number and receptionist",
            "Flexible day-pass access to shared workspaces",
          ],
          price: "950 EGP",
        },
      ],
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
