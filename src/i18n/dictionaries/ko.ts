import type { Dictionary } from "../types";

export const dictionary: Dictionary = {
  nav: {
    home: "홈",
    training: "어학 교육",
    studyAbroad: "유학",
    about: "ALOHA 소개",
    news: "소식",
    contact: "문의",
  },
  common: {
    consult: "상담 신청",
    explore: "지금 살펴보기",
    learnMore: "자세히",
    viewAll: "전체 보기",
    phone: "1900 3309",
    tagline: "More Languages · A Brighter You",
    breadcrumbHome: "홈",
    theme: "라이트/다크 전환",
  },
  footer: {
    blurb: "다음 세대가 더 멀리 나아가도록 돕는 어학 교육 & 유학 컨설팅.",
    colAbout: { title: "ALOHA 소개", links: ["소개", "팀", "채용", "문의"] },
    colTraining: {
      title: "어학 교육",
      links: ["중국어", "영어", "IELTS", "회화"],
    },
    colStudy: { title: "유학", links: ["중국", "한국", "일본", "장학금"] },
    connect: "연결하기",
    copyright: "© 2026 ALOHA Language School. All rights reserved.",
    handTagline: "Better Students · Brighter Futures",
    compactCopyright: "© 2026 ALOHA Language School",
  },

  home: {
    hero: {
      badge: "오늘 배우고 · 내일 더 멀리",
      titleLead: "More Languages",
      titleAccent: "A Brighter You",
      subtitle:
        "언어를 배우면 기회가 넓어집니다. ALOHA와 함께 매일 조금씩 성장하는 여정을 선택하세요.",
      bullets: ["맞춤형 로드맵", "결과 보장", "온라인 & 오프라인"],
      ctaPrimary: "프로그램 살펴보기",
      ctaSecondary: "지금 상담받기",
      hand: "오늘 배우고, 내일 더 멀리",
      statValue: "98%",
      statTitle: "수강생 만족도",
      statDesc: "명확한 결과 약속",
    },
    journey: {
      eyebrow: "당신의 여정",
      title: "무엇을 찾고 계신가요?",
      subtitle: "나에게 맞는 길을 골라 전용 프로그램을 만나보세요.",
      training: { title: "어학 교육", desc: "중국어 · 영어 · HSK · IELTS · 회화" },
      study: { title: "유학", desc: "중국 · 한국 · 일본 · 장학금 · 비자" },
    },
    about: {
      eyebrow: "ALOHA 소개",
      title: "더 멀리 나아가는 세대를 위한 어학원",
      body:
        "ALOHA는 체계적인 교육 시스템을 구축해, 첫걸음부터 학업·업무·생활에서 자신 있게 언어를 사용할 때까지 수강생과 함께합니다.",
      stats: [
        { value: "10+", label: "년의 경험" },
        { value: "20+", label: "전국 캠퍼스" },
        { value: "50,000+", label: "수강생의 신뢰" },
        { value: "98%", label: "수강생 만족도" },
      ],
      cta: "ALOHA 알아보기",
      hand: "Better Students Brighter Futures",
    },
    programs: {
      eyebrow: "주요 프로그램",
      title: "체계적인 과정 – 실질적인 성과",
      viewAll: "전체 프로그램 보기",
      subtitle: "각 프로그램은 목표에 맞춰 설계되어 모든 연령과 학습 요구에 맞습니다.",
      items: [
        { symbol: "中", title: "중국어 HSK 3.0", desc: "새로운 HSK 체계에 맞춘 탄탄한 기초.", badge: "3", accent: "brand" },
        { symbol: "IELTS", title: "영어 IELTS", desc: "4가지 능력을 다듬어 목표 점수 달성.", badge: "6", accent: "brand" },
        { symbol: "话", title: "중국어 회화", desc: "어떤 상황에서도 자신 있게 대화.", badge: "8", accent: "brand" },
        { symbol: "CN", title: "중국 유학", desc: "서류·장학금·비자까지 원스톱 지원.", badge: "10", accent: "accent" },
        { symbol: "KR", title: "한국 유학", desc: "전공 선택, 학교 선택, 명확한 로드맵.", badge: "12", accent: "accent" },
      ],
    },
    why: {
      eyebrow: "수강생이 ALOHA를 선택하는 이유",
      title: "품질이 차이를 만듭니다",
      items: [
        "전문성 높은 강사진",
        "맞춤형 로드맵",
        "소수 정예 클래스",
        "결과 보장",
        "온라인 & 오프라인",
        "전국에 퍼진 캠퍼스",
      ],
    },
    testimonials: {
      eyebrow: "수강생 이야기",
      title: "ALOHA에서 시작된 여정",
      viewAll: "더 많은 이야기",
      items: [
        {
          title: "제로에서 IELTS 6.5+까지",
          quote: "명확한 로드맵과 세심한 선생님 덕분에 ALOHA에서 7개월 만에 IELTS 6.5를 달성했어요.",
          name: "응우옌 민 아인",
          role: "IELTS 수강생",
          accent: "brand",
        },
        {
          title: "HSK 3.0 정복",
          quote: "활기찬 중국어 학습 환경과 이해하기 쉬운 방식으로 HSK 5에 쉽게 도달했습니다.",
          name: "쩐 꽝 후이",
          role: "HSK 수강생",
          accent: "brand",
        },
        {
          title: "중국 유학 장학금 획득",
          quote: "ALOHA가 서류부터 마무리까지 함께해 주어 전액 장학금을 받을 수 있었어요.",
          name: "레 투 짱",
          role: "유학 수강생",
          accent: "accent",
        },
      ],
    },
    locations: {
      eyebrow: "캠퍼스 네트워크",
      title: "매일 더 가까이",
      body: "전국 20개 이상의 캠퍼스가 현대적이고 일관된 학습 환경을 가까이에서 제공합니다.",
      cta: "가까운 캠퍼스 찾기",
      items: [
        { name: "ALOHA 꿰보", area: "박닌" },
        { name: "ALOHA 뜨선", area: "박닌" },
        { name: "ALOHA 투언타인", area: "박닌" },
      ],
      viewAll: "전체 캠퍼스 보기",
    },
    cta: {
      title: "활짝 열린 미래, 준비되셨나요?",
      body: "지금 신청하고 나에게 가장 맞는 학습 플랜 상담을 받아보세요.",
      primary: "언어를 배우고 싶어요",
      secondary: "유학하고 싶어요",
      hand: "More Languages A Brighter You",
    },
  },

  training: {
    hero: {
      eyebrow: "어학 교육",
      title: "목표에 맞는 강좌를 선택하세요",
      subtitle:
        "중국어, 영어, IELTS, HSK, 회화 — 모든 강좌에 체계적인 과정과 명확한 결과 약속이 있습니다.",
      stats: [
        { value: "12+", label: "강좌" },
        { value: "98%", label: "목표 달성" },
      ],
    },
    filters: ["전체", "중국어", "영어", "IELTS", "HSK", "회화"],
    courses: [
      { symbol: "中", badge: "중국어", title: "중국어 HSK 3.0", desc: "새 HSK 체계에 맞춘 탄탄한 기초, 제로에서 회화까지.", meta: "6단계" },
      { symbol: "IELTS", badge: "IELTS", title: "영어 IELTS", desc: "4가지 능력을 다듬어 6~8개월 안에 목표 점수 달성.", meta: "4과정" },
      { symbol: "话", badge: "회화", title: "중국어 회화", desc: "자연스러운 반응으로 일상 어떤 상황에서도 자신 있게 대화.", meta: "3단계" },
      { symbol: "TOEIC", badge: "영어", title: "영어 TOEIC", desc: "업무·졸업을 위한 TOEIC 대비, 실전에 가까운 연습.", meta: "2과정" },
      { symbol: "HSKK", badge: "HSK", title: "HSKK 대비", desc: "말하기에 집중, HSKK 구술 시험에 대비.", meta: "초급 ~ 중급" },
      { symbol: "EN", badge: "회화", title: "영어 회화", desc: "원어민 강사와 소수 정예로 자신 있는 영어 회화.", meta: "4단계" },
    ],
    path: {
      eyebrow: "학습 과정",
      title: "언어를 정복하는 네 단계",
      steps: [
        { title: "레벨 테스트", desc: "수준을 파악하고 학습 목표를 정합니다." },
        { title: "로드맵 설계", desc: "실력과 일정에 맞춘 맞춤형 로드맵." },
        { title: "학습 & 연습", desc: "소수 정예, 세심한 강사, 온라인 & 오프라인." },
        { title: "자격 취득", desc: "결과를 약속하고 달성할 때까지 함께합니다." },
      ],
    },
    cta: {
      title: "어디서 시작해야 할지 모르겠나요?",
      body: "무료 레벨 테스트와 맞춤 플랜 상담을 받아보세요.",
      button: "무료 상담받기",
    },
  },

  studyAbroad: {
    hero: {
      eyebrow: "ALOHA와 함께하는 유학",
      title: "유학의 꿈에 한 걸음 더 가까이",
      subtitle:
        "중국, 한국, 일본 — 학교 선택부터 서류 준비, 장학금 획득, 캠퍼스에 서는 날까지 ALOHA가 전 과정을 함께합니다.",
      ctaPrimary: "유학 상담받기",
      ctaSecondary: "장학금 조건",
      statValue: "100%",
      statTitle: "전액 장학금",
      statDesc: "우수한 지원자에게",
    },
    countries: {
      eyebrow: "목적지",
      title: "유학할 나라를 선택하세요",
      items: [
        {
          flag: "中国",
          title: "중국 유학",
          desc: "CSC 장학금, 최상위 학교, 합리적인 비용, 베트남에서 가까움.",
          bullets: ["최대 100% 장학금", "서류 & 비자 지원"],
        },
        {
          flag: "한국",
          title: "한국 유학",
          desc: "일하며 공부, 인기 전공, 활기찬 환경, 정착 기회.",
          bullets: ["아르바이트 지원", "전공 & 학교 선택"],
        },
        {
          flag: "日本",
          title: "일본 유학",
          desc: "최고 수준의 교육, 규율, 다양한 장학금과 커리어 기회.",
          bullets: ["출국 전 어학 교육", "유학 비자 동행"],
        },
      ],
    },
    process: {
      eyebrow: "유학 절차",
      title: "다섯 단계, 명확한 하나의 여정",
      steps: [
        { title: "방향 상담", desc: "알맞은 나라·전공·학교를 선택합니다." },
        { title: "어학 학습", desc: "요구되는 언어 수준에 도달합니다." },
        { title: "서류 준비", desc: "지원 서류를 완성하고 장학금을 노립니다." },
        { title: "비자 신청", desc: "면접 지도와 비자 신청을 지원합니다." },
        { title: "출국", desc: "현지 생활 정착을 돕습니다." },
      ],
    },
    scholarship: {
      title: "2026 유학 장학금 접수 중",
      body: "정원이 제한되어 있습니다 — 일찍 신청하고 무료 서류 심사와 장학금 상담을 받으세요.",
      button: "지금 신청",
    },
  },

  contact: {
    hero: {
      eyebrow: "상담 신청",
      title: "정보를 남겨주시면 ALOHA가 다시 연락드립니다",
      subtitle:
        "목표와 예산에 맞는 어학 또는 유학 플랜을 무료로 상담해 드립니다.",
    },
    form: {
      title: "신청 정보",
      required: "* 표시 항목은 필수입니다.",
      name: "이름 *",
      namePh: "예: 응우옌 반 A",
      phone: "전화번호 *",
      phonePh: "09xx xxx xxx",
      email: "이메일",
      emailPh: "you@email.com",
      interest: "관심 분야 *",
      interestOptions: ["어학 교육", "유학", "둘 다"],
      program: "프로그램",
      programOptions: [
        "중국어 / HSK",
        "영어 / IELTS",
        "회화",
        "중국 유학",
        "한국 유학",
        "일본 유학",
      ],
      branch: "가까운 캠퍼스",
      branchOptions: [
        "ALOHA 꿰보 – 박닌",
        "ALOHA 뜨선 – 박닌",
        "ALOHA 투언타인 – 박닌",
        "온라인 수강",
      ],
      message: "메시지",
      messagePh: "목표, 시작하고 싶은 시기 등...",
      submit: "신청서 보내기",
      consent: "제출하면 ALOHA의 상담 연락에 동의하는 것으로 간주됩니다.",
      success: "감사합니다! ALOHA가 곧 연락드리겠습니다.",
    },
    benefits: {
      title: "ALOHA에 신청해야 하는 이유",
      items: [
        { title: "무료 1:1 상담", desc: "수준과 목표에 맞춘 개인 로드맵." },
        { title: "입학 전 레벨 체크", desc: "출발점을 정확히 파악합니다." },
        { title: "수업료 혜택 & 장학금", desc: "최신 장학금 정보를 수시로 안내." },
      ],
    },
    hotline: { label: "상담 핫라인", hours: "매일 8:00 – 21:00" },
    office: {
      title: "ALOHA 본사",
      address: "박닌시 신도시 지역, 박닌성",
      emailLabel: "이메일",
      email: "tuvan@aloha.edu.vn",
    },
  },
};
