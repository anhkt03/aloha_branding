import type { Dictionary } from "../types";

export const dictionary: Dictionary = {
  nav: {
    home: "Home",
    training: "Language Training",
    studyAbroad: "Study Abroad",
    about: "About ALOHA",
    news: "News",
    contact: "Contact",
  },
  common: {
    consult: "Book a consult",
    explore: "Explore now",
    learnMore: "Learn more",
    viewAll: "View all",
    phone: "1900 3309",
    tagline: "More Languages · A Brighter You",
    breadcrumbHome: "Home",
    theme: "Toggle light/dark theme",
  },
  footer: {
    blurb: "Language training & study-abroad guidance helping the next generation reach further.",
    colAbout: { title: "About ALOHA", links: ["Overview", "Our team", "Careers", "Contact"] },
    colTraining: {
      title: "Language Training",
      links: ["Chinese", "English", "IELTS", "Conversation"],
    },
    colStudy: { title: "Study Abroad", links: ["China", "Korea", "Japan", "Scholarships"] },
    connect: "Connect",
    copyright: "© 2026 ALOHA Language School. All rights reserved.",
    handTagline: "Better Students · Brighter Futures",
    compactCopyright: "© 2026 ALOHA Language School",
  },

  home: {
    hero: {
      badge: "Learn today · Reach further tomorrow",
      titleLead: "More Languages",
      titleAccent: "A Brighter You",
      subtitle:
        "Learning a language opens doors. With ALOHA, choose the journey that makes you a little better every day.",
      bullets: ["Personalized roadmap", "Outcome guarantee", "Online & offline"],
      ctaPrimary: "Explore programs",
      ctaSecondary: "Get advice now",
      hand: "Learn today, reach far tomorrow",
      statValue: "98%",
      statTitle: "Happy learners",
      statDesc: "Clear outcome commitment",
    },
    journey: {
      eyebrow: "YOUR JOURNEY",
      title: "What are you looking for?",
      subtitle: "Pick the path that fits you and discover programs built just for you.",
      training: { title: "Language Training", desc: "Chinese · English · HSK · IELTS · Conversation" },
      study: { title: "Study Abroad", desc: "China · Korea · Japan · Scholarships · Visa" },
    },
    about: {
      eyebrow: "ABOUT ALOHA",
      title: "A language school built for a generation reaching further",
      body:
        "ALOHA builds a structured training system, walking beside every learner from the very first steps to confidently using a language in study, work and life.",
      stats: [
        { value: "10+", label: "Years of experience" },
        { value: "20+", label: "Campuses nationwide" },
        { value: "50,000+", label: "Learners trust us" },
        { value: "98%", label: "Happy learners" },
      ],
      cta: "Learn about ALOHA",
      hand: "Better Students Brighter Futures",
    },
    programs: {
      eyebrow: "FEATURED PROGRAMS",
      title: "Structured paths – Real results",
      viewAll: "View all programs",
      subtitle: "Each program is designed around a goal, fitting every age and learning need.",
      items: [
        { symbol: "中", title: "Chinese HSK 3.0", desc: "A solid foundation on the new HSK framework.", badge: "3", accent: "brand" },
        { symbol: "IELTS", title: "English IELTS", desc: "Sharpen all four skills and hit your target band.", badge: "6", accent: "brand" },
        { symbol: "话", title: "Chinese Conversation", desc: "Speak with confidence in any situation.", badge: "8", accent: "brand" },
        { symbol: "CN", title: "Study in China", desc: "Full support for applications, scholarships and visas.", badge: "10", accent: "accent" },
        { symbol: "KR", title: "Study in Korea", desc: "Pick your major, pick your school, clear roadmap.", badge: "12", accent: "accent" },
      ],
    },
    why: {
      eyebrow: "WHY LEARNERS CHOOSE ALOHA",
      title: "Quality makes the difference",
      items: [
        "Highly qualified teachers",
        "Personalized roadmap",
        "Small class sizes",
        "Outcome guarantee",
        "Online & offline",
        "Campuses everywhere",
      ],
    },
    testimonials: {
      eyebrow: "LEARNER STORIES",
      title: "Journeys that began at ALOHA",
      viewAll: "More stories",
      items: [
        {
          title: "From zero to IELTS 6.5+",
          quote: "Thanks to a clear roadmap and dedicated teachers, I hit IELTS 6.5 after 7 months at ALOHA.",
          name: "Nguyen Minh Anh",
          role: "IELTS learner",
          accent: "brand",
        },
        {
          title: "Conquering HSK 3.0",
          quote: "A lively Chinese learning environment with easy-to-follow methods — I reached HSK 5 with ease.",
          name: "Tran Quang Huy",
          role: "HSK learner",
          accent: "brand",
        },
        {
          title: "A scholarship to study in China",
          quote: "ALOHA stayed with me from application to completion, and I landed a full scholarship.",
          name: "Le Thu Trang",
          role: "Study-abroad learner",
          accent: "accent",
        },
      ],
    },
    locations: {
      eyebrow: "OUR CAMPUSES",
      title: "Closer to you every day",
      body: "Over 20 campuses across the country bring a modern, consistent learning environment near you.",
      cta: "Find a campus near you",
      items: [
        { name: "ALOHA Que Vo", area: "Bac Ninh" },
        { name: "ALOHA Tu Son", area: "Bac Ninh" },
        { name: "ALOHA Thuan Thanh", area: "Bac Ninh" },
      ],
      viewAll: "View all campuses",
    },
    cta: {
      title: "Ready for a wide-open future?",
      body: "Sign up now for advice on the learning path that fits you best.",
      primary: "I want to learn a language",
      secondary: "I want to study abroad",
      hand: "More Languages A Brighter You",
    },
  },

  training: {
    hero: {
      eyebrow: "LANGUAGE TRAINING",
      title: "Choose the course that matches your goal",
      subtitle:
        "Chinese, English, IELTS, HSK and conversation — every course has a structured path and a clear outcome commitment.",
      stats: [
        { value: "12+", label: "Courses" },
        { value: "98%", label: "Reach their goal" },
      ],
    },
    filters: ["All", "Chinese", "English", "IELTS", "HSK", "Conversation"],
    courses: [
      { symbol: "中", badge: "Chinese", title: "Chinese HSK 3.0", desc: "A solid foundation on the new HSK framework, from zero to conversation.", meta: "6 levels" },
      { symbol: "IELTS", badge: "IELTS", title: "English IELTS", desc: "Sharpen all four skills and hit your target band in 6–8 months.", meta: "4 paths" },
      { symbol: "话", badge: "Conversation", title: "Chinese Conversation", desc: "Natural reflexes and confident talk in any everyday situation.", meta: "3 levels" },
      { symbol: "TOEIC", badge: "English", title: "English TOEIC", desc: "TOEIC prep for work and graduation, close to the real test.", meta: "2 paths" },
      { symbol: "HSKK", badge: "HSK", title: "HSKK Prep", desc: "Focused on speaking, ready for the HSKK oral exam.", meta: "Beginner – Intermediate" },
      { symbol: "EN", badge: "Conversation", title: "English Conversation", desc: "Confident English with native teachers and small classes.", meta: "4 levels" },
    ],
    path: {
      eyebrow: "LEARNING PATH",
      title: "Four steps to master a language",
      steps: [
        { title: "Placement test", desc: "Assess your level and define your learning goal." },
        { title: "Design the path", desc: "A personalized roadmap for your ability and schedule." },
        { title: "Learn & practice", desc: "Small classes, dedicated teachers, online & offline." },
        { title: "Earn the certificate", desc: "An outcome commitment — we stay until you reach it." },
      ],
    },
    cta: {
      title: "Not sure where to start?",
      body: "Get a free placement test and a personalized path consultation.",
      button: "Get a free consult",
    },
  },

  studyAbroad: {
    hero: {
      eyebrow: "STUDY ABROAD WITH ALOHA",
      title: "One step closer to your study-abroad dream",
      subtitle:
        "China, Korea, Japan — ALOHA supports the whole way, from choosing a school and preparing files to winning scholarships and setting foot on campus.",
      ctaPrimary: "Get study-abroad advice",
      ctaSecondary: "Scholarship criteria",
      statValue: "100%",
      statTitle: "Full scholarship",
      statDesc: "For outstanding profiles",
    },
    countries: {
      eyebrow: "DESTINATIONS",
      title: "Choose your study destination",
      items: [
        {
          flag: "中国",
          title: "Study in China",
          desc: "CSC scholarships, top-tier schools, reasonable costs, close to Vietnam.",
          bullets: ["Scholarships up to 100%", "Application & visa support"],
        },
        {
          flag: "한국",
          title: "Study in Korea",
          desc: "Work while you study, hot majors, a dynamic setting, a path to settle.",
          bullets: ["Part-time job support", "Choose major & school"],
        },
        {
          flag: "日本",
          title: "Study in Japan",
          desc: "A leading education, discipline, diverse scholarships and career chances.",
          bullets: ["Language training before departure", "Student visa support"],
        },
      ],
    },
    process: {
      eyebrow: "STUDY-ABROAD PROCESS",
      title: "Five steps, one clear journey",
      steps: [
        { title: "Orientation", desc: "Choose the right country, major and school." },
        { title: "Learn the language", desc: "Reach the required language level." },
        { title: "Prepare the file", desc: "Complete the application and chase scholarships." },
        { title: "Apply for a visa", desc: "Interview guidance and visa application." },
        { title: "Set off", desc: "Support settling in your host country." },
      ],
    },
    scholarship: {
      title: "2026 study-abroad scholarships are now open",
      body: "Seats are limited — apply early for a free profile review and scholarship advice.",
      button: "Apply now",
    },
  },

  contact: {
    hero: {
      eyebrow: "BOOK A CONSULT",
      title: "Leave your details and ALOHA will call you back",
      subtitle:
        "Free advice on a language or study-abroad path that fits your goals and budget.",
    },
    form: {
      title: "Registration details",
      required: "Fields marked * are required.",
      name: "Full name *",
      namePh: "e.g. Nguyen Van A",
      phone: "Phone number *",
      phonePh: "09xx xxx xxx",
      email: "Email",
      emailPh: "you@email.com",
      interest: "I'm interested in *",
      interestOptions: ["Language Training", "Study Abroad", "Both"],
      program: "Program",
      programOptions: [
        "Chinese / HSK",
        "English / IELTS",
        "Conversation",
        "Study in China",
        "Study in Korea",
        "Study in Japan",
      ],
      branch: "Campus near you",
      branchOptions: [
        "ALOHA Que Vo – Bac Ninh",
        "ALOHA Tu Son – Bac Ninh",
        "ALOHA Thuan Thanh – Bac Ninh",
        "Study Online",
      ],
      message: "Message",
      messagePh: "Your goal, when you'd like to start...",
      submit: "Send my registration",
      consent: "By submitting, you agree to let ALOHA contact you for advice.",
      success: "Thank you! ALOHA will reach out to you very soon.",
    },
    benefits: {
      title: "Why register with ALOHA?",
      items: [
        { title: "Free 1-on-1 consult", desc: "A personal roadmap for your level and goal." },
        { title: "Placement assessment", desc: "An accurate read of your starting point." },
        { title: "Tuition deals & scholarships", desc: "The latest scholarship openings, kept current." },
      ],
    },
    hotline: { label: "Advice hotline", hours: "8:00 – 21:00 daily" },
    office: {
      title: "ALOHA headquarters",
      address: "New Urban Area, Bac Ninh City, Bac Ninh Province",
      emailLabel: "Email",
      email: "tuvan@aloha.edu.vn",
    },
  },
};
