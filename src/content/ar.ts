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
    subscribe: {
      heading: "اشترك في نشرتنا البريدية",
      subtitle:
        "نرسل كل أسبوعين آخر التحديثات ومجموعة مختارة من الأفكار ومساحات العمل التي ألهمتنا.",
      emailPlaceholder: "اكتب بريدك الإلكتروني هنا...",
      buttonLabel: "اشتراك",
      validationError: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
      successMessage: "تم اشتراكك في نشرتنا البريدية بنجاح!",
    },
    trusted: {
      heading: "تحظى تشير لوكيشن بثقة كبرى الشركات الرائدة حول العالم.",
      subtitle:
        "نفخر بشراكتنا مع نخبة من المؤسسات والشركات الرائدة لتوفير مساحات عمل عصرية ومرنة تلبي تطلعات فرقها.",
      partners: [
        { id: "partner-1", name: "المراعي", logoKey: "almarai" },
        { id: "partner-2", name: "أرامكو", logoKey: "aramco" },
        { id: "partner-3", name: "إس تي سي", logoKey: "stc" },
        { id: "partner-4", name: "نيوم", logoKey: "neom" },
        { id: "partner-5", name: "سابك", logoKey: "sabic" },
        { id: "partner-6", name: "روشن", logoKey: "roshn" },
        { id: "partner-7", name: "جرير", logoKey: "jarir" },
        { id: "partner-8", name: "كريم", logoKey: "careem" },
      ],
    },
    contactUs: {
      heading: "تواصل معنا",
      subtitle: "نحن هنا دائماً لمساعدتك",
      formHeading: "يرجى تعبئة الحقول التالية",
      details: {
        phone: "+966 11 520 4800",
        email: "hello@chairlocation.com",
        address: "طريق الملك فهد، حي العليا، الرياض",
      },
      placeholders: {
        fullName: "الاسم الكامل...",
        email: "البريد الإلكتروني...",
        phone: "رقم الجوال...",
        city: "المدينة...",
        message: "نص الرسالة...",
      },
      submitButton: "إرسال",
      validationError:
        "يرجى تعبئة جميع الحقول المطلوبة وإدخال بريد إلكتروني صحيح.",
      successMessage: "شكراً لك! تم إرسال رسالتك بنجاح وسنتواصل معك قريباً.",
    },
    articles: {
      heading: "أحدث مقالاتنا",
      subtitle: "ابقَ على اطلاع دائم بأحدث الرؤى والمقالات الملهمة",
      readMoreLabel: "اقرأ المزيد",
      prevLabel: "المقال السابق",
      nextLabel: "المقال التالي",
      items: [
        {
          id: "article-1",
          title: "كيف تختار مساحة العمل المشتركة الأنسب لفريقك",
          excerpt:
            "في عالم الأعمال الحديث، تمثل بيئة العمل المرنة أكثر من مجرد مكتب؛ فهي منصة متكاملة تعزز الإنتاجية وتدعم التعاون الإبداعي وتمكّن الشركات من النمو بثقة.",
          category: "محمد مو",
          date: "20 أبريل 2024",
          imageKey: "article-1",
        },
        {
          id: "article-2",
          title: "مستقبل المكاتب المرنة والعمل الهجين للشركات",
          excerpt:
            "تتيح حلول المكاتب الهجينة للشركات تقليل التكاليف التشغيلية ومنح الموظفين حرية اختيار مواقع العمل القريبة من العملاء أو المنزل بكفاءة عالية.",
          category: "محمد مو",
          date: "20 أبريل 2024",
          imageKey: "article-2",
        },
        {
          id: "article-3",
          title: "أمان البيانات والبنية التقنية في مساحات العمل الحديثة",
          excerpt:
            "تعتمد مساحات العمل المتطورة على شبكات مشفرة عالية السرعة وأنظمة دخول ذكية لحماية بيانات الشركات وضمان استمرارية الأعمال بأعلى معايير الأمان.",
          category: "محمد مو",
          date: "20 أبريل 2024",
          imageKey: "article-3",
        },
        {
          id: "article-4",
          title: "تصميم مساحات عمل مريحة ترفع التركيز والإنتاجية",
          excerpt:
            "تسهم المقاعد المكتبية المريحة والإضاءة الطبيعية وقاعات الاجتماعات المعزولة صوتياً في خلق تجربة عمل يومية صحية ومحفزة للفرق الإبداعية.",
          category: "محمد مو",
          date: "14 مايو 2024",
          imageKey: "article-4",
        },
      ],
    },
    pricing: {
      eyebrow: "الأسعار",
      heading: "أسعار بسيطة وشفافة",
      subtitle:
        "اختر الباقة المرنة التي تناسب احتياجات عملك أو فريقك مع شفافية كاملة ومزايا متكاملة بدون أي التزامات معقدة.",
      billing: {
        monthly: "شهري",
        annually: "سنوي",
        toggleAriaLabel: "التبديل بين الفوترة الشهرية والسنوية",
        monthlyPeriod: "/شهرياً",
        annuallyPeriod: "/سنوياً",
      },
      sidebar: {
        optionsTitle: "اختر من الخيارات المتاحة أدناه.",
        categories: [
          { id: "shared-space", label: "مساحة مشتركة", icon: "shared-space" },
          { id: "meeting-rooms", label: "غرف اجتماعات", icon: "meeting-rooms" },
          { id: "private-offices", label: "مكاتب خاصة", icon: "private-offices" },
          { id: "virtual-offices", label: "مكاتب افتراضية", icon: "virtual-offices" },
        ],
        helpTitle: "هل تواجه أي مشكلة؟",
        helpSubtitle: "تواصل معنا في أي وقت ومن أي مكان وسنسعد بخدمتك.",
        availableLabel: "متاحون 24/7",
        contactLinkLabel: "تواصل معنا",
      },
      whatsIncluded: "ما تشمله الباقة",
      currency: "ريال",
      plans: [
        {
          id: "basic",
          icon: "basic",
          audience: "للأفراد",
          name: "الأساسية",
          badge: "",
          monthlyPrice: 99,
          annualPrice: 990,
          description:
            "باقة مثالية للمستقلين ورواد الأعمال الباحثين عن مساحة عمل هادئة ومرنة.",
          features: [
            "10 ساعات أسبوعياً",
            "25 ساعة في المساحة المشتركة شهرياً",
            "ساعة مجانية في مكتب خاص",
            "حتى 3 أعضاء في الفريق",
          ],
          ctaLabel: "ابدأ الآن",
          isFeatured: false,
        },
        {
          id: "popular",
          icon: "popular",
          audience: "للشركات المتوسطة",
          name: "الأعمال",
          badge: "الباقة الأكثر طلباً (الأعلى مبيعاً)",
          monthlyPrice: 199,
          annualPrice: 1990,
          description:
            "حل متكامل للفرق المتنامية يشمل قاعات الاجتماعات والدعم المخصص والمزايا المتقدمة.",
          features: [
            "جميع مزايا التقارير والتحليلات",
            "حتى مليون زيارة مسجلة",
            "دعم فني متميز ذو أولوية",
            "حتى 10 أعضاء في الفريق",
          ],
          ctaLabel: "ابدأ الآن",
          isFeatured: true,
        },
        {
          id: "enterprise",
          icon: "enterprise",
          audience: "للشركات الكبرى",
          name: "المؤسسات",
          badge: "",
          monthlyPrice: 399,
          annualPrice: 3990,
          description:
            "باقة شاملة مصممة للمؤسسات الكبرى التي تتطلب سعة عالية ودعماً مخصصاً على مدار الساعة.",
          features: [
            "جميع مزايا التقارير والتحليلات",
            "حتى 5 ملايين زيارة مسجلة",
            "مدير حساب ودعم مخصص",
            "حتى 50 عضواً في الفريق",
          ],
          ctaLabel: "ابدأ الآن",
          isFeatured: false,
        },
      ],
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