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
    downloadApp: {
      title: "استكشف تطبيق تشير لوكيشن",
      description:
        "يمنحك العمل الهجين حرية العمل بالقرب من عملائك أو زملائك أو منزلك بكل مرونة وسهولة.",
      stores: {
        googlePlay: "احصل عليه من Google Play",
        appStore: "حمّله من App Store",
      },
      mockupAlt: "معاينة تطبيق تشير لوكيشن للهواتف الذكية",
    },
    hybridWorking: {
      title: "العمل الهجين يناسب أسلوب حياتك",
      description:
        "يمنحك العمل الهجين حرية العمل بالقرب من عملائك أو زملائك أو منزلك، كما أنه أكثر صداقة للبيئة وتوفيراً للتكاليف. ومع أكثر من 4,000 موقع حول العالم، نضع بين يديك أفضل الحلول لتحقيق أقصى استفادة منه.",
      cards: [
        { id: "hybrid-1", alt: "قاعة اجتماعات وتعاون عصرية مجهزة بالكامل" },
        { id: "hybrid-2", alt: "مساحة عمل مفتوحة ومضيئة مزينة بالنباتات الطبيعية" },
        { id: "hybrid-3", alt: "تصميم داخلي لمكتب هجين عصري بمقاعد مرنة" },
      ],
      ctaLabel: "اعرف المزيد",
    },
    howItWorks: {
      titlePrefix: "كيف ",
      titleHighlight: "نعمل",
      titleSuffix: "",
      subtitle: "سوق مساحات العمل المشتركة والمكاتب المرنة | ابحث واحجز اليوم",
      steps: [
        {
          id: "step-1",
          number: "1",
          title: "احجز أو تواصل أو اتصل",
          description:
            "احجز مساحتك المفضلة فوراً عبر الموقع أو تواصل مباشرة مع إدارة المكان لتأكيد كافة تفاصيل حجزك بكل سهولة.",
        },
        {
          id: "step-2",
          number: "2",
          title: "استعرض تفاصيل الموقع",
          description:
            "اطلع على المرافق المتاحة والصور والأسعار والتقييمات لمقارنة مساحات العمل واختيار الأنسب لمتطلباتك.",
        },
        {
          id: "step-3",
          number: "3",
          title: "ابحث عن المواقع",
          description:
            "استكشف مئات المكاتب المشتركة والمكاتب الخاصة وقاعات الاجتماعات القريبة منك في ثوانٍ معدودة.",
        },
      ],
    },
    products: {
      priceStartingFrom: "يبدأ السعر من:",
      actions: {
        bookNow: "احجز الآن",
        learnMore: "اعرف المزيد",
      },
      categories: [
        {
          id: "shared-space",
          tabLabel: "مساحة مشتركة",
          icon: "shared-space",
          title: "مساحة مشتركة",
          subtitle: "(مساحة عمل تشاركية)",
          description:
            "استأجر العدد الذي تحتاجه من المكاتب في مساحة عمل مشتركة وحيوية، شاملة عنوان العمل وخيارات التخزين الآمنة.",
          features: [
            "مساحة عمل دائمة مخصصة لك طوال المدة التي تحتاجها",
            "احجز مكتباً بالساعة أو باليوم في أي موقع يناسبك",
            "بيئة مجهزة بالكامل لخدمتك وراحتك طوال اليوم",
            "مكاتب مرنة متاحة للاستخدام متى شئت وفي أي مكان",
          ],
          price: "1250 ج.م",
        },
        {
          id: "private-offices",
          tabLabel: "مكاتب خاصة",
          icon: "private-offices",
          title: "مكاتب خاصة",
          subtitle: "(أجنحة مكتبية مخصصة للفرق)",
          description:
            "مكاتب خاصة مؤثثة بالكامل ومزودة بأقفال آمنة تناسب الفرق بمختلف أحجامها، مع إنترنت فائق السرعة وخدمات استقبال متكاملة.",
          features: [
            "دخول آمن وخاص لفريقك على مدار الساعة 24/7",
            "تخطيط مكتبي قابل للتخصيص مع أثاث مكتبي مريح",
            "رصيد مجاني شهري لحجز غرف وقاعات الاجتماعات",
            "عنوان عمل رسمي مع خدمة استلام وإدارة البريد",
          ],
          price: "3400 ج.م",
        },
        {
          id: "meeting-rooms",
          tabLabel: "غرف اجتماعات",
          icon: "meeting-rooms",
          title: "غرف اجتماعات",
          subtitle: "(قاعات اجتماعات عند الطلب)",
          description:
            "احجز قاعات اجتماعات ومؤتمرات مجهزة بالكامل بالساعة أو باليوم لعروض العملاء وورش العمل واجتماعات الفرق.",
          features: [
            "شاشات عرض ذكية 4K وأنظمة متطورة للاجتماعات المرئية",
            "إنترنت لاسلكي فائق السرعة وعزل صوتي احترافي",
            "خدمات ضيافة وقهوة مختصة وتموين داخل القاعة",
            "حجز فوري ومرن بالساعة أو ليوم عمل كامل",
          ],
          price: "450 ج.م",
        },
        {
          id: "virtual-offices",
          tabLabel: "مكاتب افتراضية",
          icon: "virtual-offices",
          title: "مكاتب افتراضية",
          subtitle: "(حضور مهني للأعمال عن بُعد)",
          description:
            "أسس عنواناً تجارياً مرموقاً لشركتك مع خدمات استلام وإعادة توجيه البريد والرد على المكالمات وإمكانية استخدام مساحات العمل.",
          features: [
            "عنوان تجاري متميز لتسجيل الشركات والأعمال",
            "خدمة احترافية لاستلام البريد وإعادة توجيهه",
            "رقم هاتف محلي مخصص مع موظف استقبال للرد",
            "دخول مرن لمساحات العمل المشتركة عند الحاجة",
          ],
          price: "950 ج.م",
        },
      ],
    },
    latestListings: {
      title: "أحدث الإعلانات",
      subtitle: "تصفح أحدث مساحات العمل المتاحة لدينا",
      availableBadge: "متاح",
      notAvailableBadge: "غير متاح",
      reviewLabel: "تقييم",
      perLabel: "أفراد",
      openStatus: "مفتوح",
      closedStatus: "مغلق",
      startsFrom: "يبدأ من :",
      perHour: "/ساعة",
      currency: "ريال",
    },
    about: {
      title: "عن تشير لوكيشن",
      description:
        "«تشير لوكيشن» هو موقع يتيح لك البحث عن مساحات العمل المشتركة والعثور عليها وحجزها، بما في ذلك المكاتب المشتركة، والمكاتب الخاصة، وغرف الاجتماعات، والمكاتب الافتراضية القريبة منك. كما يعرض المزايا والمرافق التي توفرها كل مساحة، ليتمكن المحترفون والشركات من مقارنة جميع مساحات العمل المتاحة واختيار الأنسب لاحتياجاتهم من حيث الخدمات والتجهيزات.",
      subtitle: "لماذا تشير لوكيشن",
      features: [
        { id: "locations", text: "أكثر من (4652) موقع", icon: "location" },
        { id: "amenities", text: "نوفر جميع المرافق والخدمات في كافة مواقعنا", icon: "amenities" },
        { id: "support", text: "جميع أنواع الدعم الفني على مدار الساعة 24/7", icon: "support" },
      ],
      actions: {
        viewProducts: "عرض المنتجات",
        bookNow: "احجز الآن",
      },
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