# ALOHA 🌱

Landing site for **ALOHA — language training & study abroad**, built to match the
canvas design: brand green `#128049`, Be Vietnam Pro + Caveat, 1200px content column.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, with
**4-language switching** (Tiếng Việt · English · 日本語 · 한국어).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to a locale
(`/vi`, `/en`, `/ja`, `/ko`) based on your browser language.

## Pages (× 4 locales)

| Route            | Page                          |
| ---------------- | ----------------------------- |
| `/[locale]`         | Home                          |
| `/[locale]/dao-tao` | Language training (đào tạo)    |
| `/[locale]/du-hoc`  | Study abroad (du học)         |
| `/[locale]/dang-ky` | Contact / registration        |

## Architecture (small → large components)

```
src/
├── app/[locale]/          # Locale-routed pages + layout (html lang, fonts, Header)
├── middleware.ts          # Locale redirect + guard
├── i18n/
│   ├── config.ts          # locales, defaultLocale, native names
│   ├── types.ts           # Dictionary contract (all content is typed)
│   ├── get-dictionary.ts  # server-only lazy loader
│   └── dictionaries/      # vi (source) · en · ja · ko
├── components/
│   ├── common/            # atoms: Button, Badge, Icon, Logo, Section, StatCard, …
│   ├── layout/            # Header, Footer, MobileMenu, LanguageSwitcher, nav-items
│   └── sections/          # presentational sections, grouped by page
│       ├── home/          # Hero, JourneyChooser, AboutStats, Programs, WhyAloha, …
│       ├── training/      # TrainingHero, CourseExplorer (filter + grid)
│       ├── study-abroad/  # StudyHero, CountryCards, ScholarshipStrip
│       ├── contact/       # ContactHero, ContactForm, ContactInfo
│       └── shared/        # CtaBand, StepGrid (reused across pages)
├── config/                # site.ts, routes.ts
└── lib/utils.ts           # cn() helper
```

### Design principles

- **Separated & composable** — section components are pure and presentational; they
  receive typed content via props and never touch i18n. Pages load the dictionary and
  compose sections. Adding/removing a section is a one-line change in a page file.
- **One content contract** — every locale must satisfy `Dictionary` in
  [types.ts](src/i18n/types.ts), so a missing translation is a type error, never a
  silent blank.
- **Design tokens** — brand colors, surfaces and fonts live as `@theme` variables in
  [globals.css](src/app/globals.css); components use `bg-brand`, `text-muted`, etc.

## Adding a language

1. Add the code to `locales` in [config.ts](src/i18n/config.ts) + a native name.
2. Create `src/i18n/dictionaries/<code>.ts` implementing `Dictionary`.
3. Register it in [get-dictionary.ts](src/i18n/get-dictionary.ts). Done — it appears in
   the switcher and prerenders automatically.

## Notes

- The contact form is client-side with a success state; wire it to
  `NEXT_PUBLIC_CONTACT_ENDPOINT` for a real backend.
- Section visuals use gradient placeholders (as in the design). Drop real images into
  `public/images/*` and swap the placeholder blocks when ready.
