# 🪑 Chair Location — Home & Office Furniture Platform

A modern, pixel-perfect, fully bilingual (**English & Arabic**) landing page for **Chair Location**, showcasing home and office furniture collections, shared workspaces, private offices, meeting rooms, and virtual office solutions.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**, engineered with a clean **Feature-Based Architecture** and **Atomic Design** principles.

---

## ✨ Key Features

- **Bilingual Support & Full RTL/LTR Symmetry:**
  - Dynamic locale routing (`/en` for LTR and `/ar` for RTL).
  - Centralized, strongly-typed content dictionaries (`src/content/en.ts` & `src/content/ar.ts`).
  - Logical CSS properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`) for seamless directional mirroring.
- **Pixel-Perfect Responsive UI:**
  - Faithfully translated from Figma designs across desktop, tablet, and mobile viewports.
  - Smooth scroll-triggered sticky navigation header and responsive slide-over mobile drawer.
- **Smooth Animations & Interactive UI:**
  - Powered by **Framer Motion** (`motion/react`) for fluid entrance animations and transitions.
  - Interactive workspace category search tabs and location-based search bar.
- **Scalable & Clean Codebase:**
  - Strictly typed with TypeScript and organized into small, single-responsibility modules with barrel exports (`index.ts`).

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4, `clsx`, `tailwind-merge`, `tw-animate-css` |
| **Animations** | Framer Motion (`motion/react`) |
| **Forms & Validation** | React Hook Form, Zod, `@hookform/resolvers` |
| **Data & State** | TanStack Query, Zustand, Axios |
| **UI & Icons** | Lucide React, Swiper, Sonner, Custom Inline SVG Components |
| **Typography** | Google Fonts (`Cairo`, `DM Sans`, `Open Sans`) |

---

## 📁 Project Architecture

The project follows a **Feature-Based Architecture** combined with **Atomic Design** to ensure maintainability, separation of concerns, and easy scalability:

```text
src/
├── app/
│   ├── [lang]/               # Locale-based dynamic routing (en / ar)
│   │   ├── layout.tsx        # Root locale layout (dir, fonts, Header, Footer)
│   │   └── page.tsx          # Main landing page entry
│   └── globals.css           # Tailwind CSS v4 config, font variables & Figma color tokens
├── components/
│   ├── atoms/                # Shared primitive UI elements
│   ├── guards/               # Route/component guards
│   └── ui/                   # Reusable base UI primitives
├── content/
│   ├── en.ts                 # English content dictionary
│   ├── ar.ts                 # Arabic content dictionary
│   └── index.ts              # Dictionary resolver & TypeScript types
├── features/
│   └── landing/              # Landing page domain feature
│       ├── components/
│       │   ├── atoms/        # Smallest landing components (e.g., HeroHeading)
│       │   ├── molecules/    # Composite components (e.g., HeroSearchTabs, HeroSearchBar)
│       │   └── organisms/    # Full page sections (e.g., HeroSection)
│       ├── data/             # Static/structured feature data
│       ├── hooks/            # Custom feature hooks
│       ├── schemas/          # Zod validation schemas
│       ├── services/         # API integration layer
│       ├── types/            # Feature-specific TypeScript interfaces
│       └── index.ts          # Feature barrel exports
├── layouts/
│   ├── header/               # Modular sticky Header, NavLinks, LanguageSwitcher & MobileSidebar
│   ├── footer/               # Modular responsive Footer, Brand, Links & App Download
│   └── index.ts              # Layout barrel exports
├── lib/                      # Utility functions & configurations
├── providers/                # Context & query providers
└── shared/
    ├── icons/                # Custom inline SVG components (App Store, Google Play, etc.)
    └── images/               # Optimized local visual assets
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** `>= 20.x`
- **pnpm** `>= 9.x`

### Installation & Local Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```

3. **Open in browser:**
   - English (LTR): [http://localhost:3000/en](http://localhost:3000/en)
   - Arabic (RTL): [http://localhost:3000/ar](http://localhost:3000/ar)

### Production Build

```bash
pnpm build
pnpm start
```

---

## 👨‍💻 Author

**Ahmed Mansour** — Front-End Developer (React.js / Next.js / TypeScript)  
Developed as a technical assessment for **e-RAMO For Digital Solutions**.