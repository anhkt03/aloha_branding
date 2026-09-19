/**
 * The full content contract. Every locale dictionary must satisfy this,
 * so adding a language can never silently drop a string.
 */

export interface LinkLabel {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface Dictionary {
  /* ---- shared chrome ---- */
  nav: {
    home: string;
    training: string;
    studyAbroad: string;
    about: string;
    news: string;
    contact: string;
  };
  common: {
    consult: string; // "Đăng ký tư vấn"
    explore: string; // "Khám phá ngay →"
    learnMore: string; // "Tìm hiểu →"
    viewAll: string; // "Xem tất cả →"
    phone: string; // "1900 3309"
    tagline: string; // "More Languages · A Brighter You"
    breadcrumbHome: string;
    theme: string; // aria-label for the light/dark toggle
  };
  footer: {
    blurb: string;
    colAbout: { title: string; links: string[] };
    colTraining: { title: string; links: string[] };
    colStudy: { title: string; links: string[] };
    connect: string;
    copyright: string;
    handTagline: string;
    compactCopyright: string;
  };

  /* ---- home page ---- */
  home: {
    hero: {
      badge: string;
      titleLead: string;
      titleAccent: string;
      subtitle: string;
      bullets: string[];
      ctaPrimary: string;
      ctaSecondary: string;
      hand: string;
      statValue: string;
      statTitle: string;
      statDesc: string;
    };
    journey: {
      eyebrow: string;
      title: string;
      subtitle: string;
      training: { title: string; desc: string };
      study: { title: string; desc: string };
    };
    about: {
      eyebrow: string;
      title: string;
      body: string;
      stats: { value: string; label: string }[];
      cta: string;
      hand: string;
    };
    programs: {
      eyebrow: string;
      title: string;
      viewAll: string;
      subtitle: string;
      items: { symbol: string; title: string; desc: string; badge: string; accent: "brand" | "accent" }[];
    };
    why: {
      eyebrow: string;
      title: string;
      items: string[];
    };
    testimonials: {
      eyebrow: string;
      title: string;
      viewAll: string;
      items: { title: string; quote: string; name: string; role: string; accent: "brand" | "accent" }[];
    };
    locations: {
      eyebrow: string;
      title: string;
      body: string;
      cta: string;
      items: { name: string; area: string }[];
      viewAll: string;
    };
    cta: {
      title: string;
      body: string;
      primary: string;
      secondary: string;
      hand: string;
    };
  };

  /* ---- training page ---- */
  training: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      stats: { value: string; label: string }[];
    };
    filters: string[];
    courses: {
      symbol: string;
      badge: string;
      title: string;
      desc: string;
      meta: string;
    }[];
    path: {
      eyebrow: string;
      title: string;
      steps: FeatureItem[];
    };
    cta: {
      title: string;
      body: string;
      button: string;
    };
  };

  /* ---- study-abroad page ---- */
  studyAbroad: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      statValue: string;
      statTitle: string;
      statDesc: string;
    };
    countries: {
      eyebrow: string;
      title: string;
      items: { flag: string; title: string; desc: string; bullets: string[] }[];
    };
    process: {
      eyebrow: string;
      title: string;
      steps: FeatureItem[];
    };
    scholarship: {
      title: string;
      body: string;
      button: string;
    };
  };

  /* ---- contact page ---- */
  contact: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    form: {
      title: string;
      required: string;
      name: string;
      namePh: string;
      phone: string;
      phonePh: string;
      email: string;
      emailPh: string;
      interest: string;
      interestOptions: string[];
      program: string;
      programOptions: string[];
      branch: string;
      branchOptions: string[];
      message: string;
      messagePh: string;
      submit: string;
      consent: string;
      success: string;
    };
    benefits: {
      title: string;
      items: FeatureItem[];
    };
    hotline: { label: string; hours: string };
    office: { title: string; address: string; emailLabel: string; email: string };
  };
}
