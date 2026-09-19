import type { Dictionary } from "../types";

export const dictionary: Dictionary = {
  nav: {
    home: "ホーム",
    training: "語学トレーニング",
    studyAbroad: "留学",
    about: "ALOHAについて",
    news: "ニュース",
    contact: "お問い合わせ",
  },
  common: {
    consult: "無料相談を予約",
    explore: "今すぐ見る",
    learnMore: "詳しく",
    viewAll: "すべて見る",
    phone: "1900 3309",
    tagline: "More Languages · A Brighter You",
    breadcrumbHome: "ホーム",
    theme: "ライト/ダークを切り替え",
  },
  footer: {
    blurb: "次の世代がより遠くへ羽ばたくための語学トレーニングと留学サポート。",
    colAbout: { title: "ALOHAについて", links: ["概要", "チーム", "採用情報", "お問い合わせ"] },
    colTraining: {
      title: "語学トレーニング",
      links: ["中国語", "英語", "IELTS", "会話"],
    },
    colStudy: { title: "留学", links: ["中国", "韓国", "日本", "奨学金"] },
    connect: "つながる",
    copyright: "© 2026 ALOHA Language School. All rights reserved.",
    handTagline: "Better Students · Brighter Futures",
    compactCopyright: "© 2026 ALOHA Language School",
  },

  home: {
    hero: {
      badge: "今日学び · 明日へ羽ばたく",
      titleLead: "More Languages",
      titleAccent: "A Brighter You",
      subtitle:
        "語学を学べばチャンスが広がります。ALOHAと一緒に、毎日少しずつ成長できる旅を選びましょう。",
      bullets: ["個別ロードマップ", "成果へのコミット", "オンライン & 対面"],
      ctaPrimary: "プログラムを見る",
      ctaSecondary: "今すぐ相談",
      hand: "今日学び、明日へ羽ばたく",
      statValue: "98%",
      statTitle: "受講生の満足度",
      statDesc: "明確な成果コミット",
    },
    journey: {
      eyebrow: "あなたの旅",
      title: "何をお探しですか？",
      subtitle: "あなたに合った道を選んで、専用のプログラムを見つけましょう。",
      training: { title: "語学トレーニング", desc: "中国語 · 英語 · HSK · IELTS · 会話" },
      study: { title: "留学", desc: "中国 · 韓国 · 日本 · 奨学金 · ビザ" },
    },
    about: {
      eyebrow: "ALOHAについて",
      title: "遠くへ羽ばたく世代のための語学スクール",
      body:
        "ALOHAは体系的なトレーニング制度を築き、最初の一歩から、学業・仕事・生活で自信を持って言語を使えるようになるまで、受講生に寄り添います。",
      stats: [
        { value: "10+", label: "年の実績" },
        { value: "20+", label: "全国の校舎" },
        { value: "50,000+", label: "受講生の信頼" },
        { value: "98%", label: "受講生の満足度" },
      ],
      cta: "ALOHAを知る",
      hand: "Better Students Brighter Futures",
    },
    programs: {
      eyebrow: "注目のプログラム",
      title: "体系的な道のり – 実感できる成果",
      viewAll: "すべてのプログラムを見る",
      subtitle: "各プログラムは目標に合わせて設計され、あらゆる年齢と学習ニーズに対応します。",
      items: [
        { symbol: "中", title: "中国語 HSK 3.0", desc: "新しいHSK基準に沿った確かな基礎。", badge: "3", accent: "brand" },
        { symbol: "IELTS", title: "英語 IELTS", desc: "4技能を磨き、目標スコアを達成。", badge: "6", accent: "brand" },
        { symbol: "话", title: "中国語 会話", desc: "どんな場面でも自信を持って話せる。", badge: "8", accent: "brand" },
        { symbol: "CN", title: "中国留学", desc: "出願・奨学金・ビザをまるごとサポート。", badge: "10", accent: "accent" },
        { symbol: "KR", title: "韓国留学", desc: "学部選び、学校選び、明確なロードマップ。", badge: "12", accent: "accent" },
      ],
    },
    why: {
      eyebrow: "選ばれる理由",
      title: "品質が違いを生む",
      items: [
        "高い専門性の講師",
        "個別ロードマップ",
        "少人数クラス",
        "成果へのコミット",
        "オンライン & 対面",
        "全国に広がる校舎",
      ],
    },
    testimonials: {
      eyebrow: "受講生のストーリー",
      title: "ALOHAから始まった旅",
      viewAll: "もっと見る",
      items: [
        {
          title: "ゼロからIELTS 6.5+へ",
          quote: "明確なロードマップと熱心な先生のおかげで、ALOHAで7か月学びIELTS 6.5を達成しました。",
          name: "グエン・ミン・アン",
          role: "IELTS受講生",
          accent: "brand",
        },
        {
          title: "HSK 3.0を制覇",
          quote: "活気ある中国語学習環境と分かりやすい指導法で、無理なくHSK 5に到達できました。",
          name: "チャン・クアン・フイ",
          role: "HSK受講生",
          accent: "brand",
        },
        {
          title: "中国留学の奨学金を獲得",
          quote: "ALOHAは出願から完了まで伴走してくれ、全額奨学金を勝ち取れました。",
          name: "レ・トゥ・チャン",
          role: "留学受講生",
          accent: "accent",
        },
      ],
    },
    locations: {
      eyebrow: "校舎ネットワーク",
      title: "毎日、あなたのそばに",
      body: "全国に20以上の校舎を展開し、近代的で統一された学習環境をお近くにお届けします。",
      cta: "近くの校舎を探す",
      items: [
        { name: "ALOHA クエヴォー", area: "バクニン" },
        { name: "ALOHA トゥーソン", area: "バクニン" },
        { name: "ALOHA トゥアンタン", area: "バクニン" },
      ],
      viewAll: "すべての校舎を見る",
    },
    cta: {
      title: "広がる未来へ、準備はいいですか？",
      body: "今すぐ登録して、あなたに最適な学習プランの相談を受けましょう。",
      primary: "語学を学びたい",
      secondary: "留学したい",
      hand: "More Languages A Brighter You",
    },
  },

  training: {
    hero: {
      eyebrow: "語学トレーニング",
      title: "目標に合ったコースを選ぶ",
      subtitle:
        "中国語、英語、IELTS、HSK、会話 — どのコースにも体系的な道のりと明確な成果コミットがあります。",
      stats: [
        { value: "12+", label: "コース" },
        { value: "98%", label: "目標達成" },
      ],
    },
    filters: ["すべて", "中国語", "英語", "IELTS", "HSK", "会話"],
    courses: [
      { symbol: "中", badge: "中国語", title: "中国語 HSK 3.0", desc: "新HSK基準に沿った確かな基礎、ゼロから会話まで。", meta: "6レベル" },
      { symbol: "IELTS", badge: "IELTS", title: "英語 IELTS", desc: "4技能を磨き、6〜8か月で目標スコアを達成。", meta: "4コース" },
      { symbol: "话", badge: "会話", title: "中国語 会話", desc: "自然な反応で、日常のどんな場面でも自信を持って会話。", meta: "3レベル" },
      { symbol: "TOEIC", badge: "英語", title: "英語 TOEIC", desc: "仕事・卒業向けのTOEIC対策、本番に近い演習。", meta: "2コース" },
      { symbol: "HSKK", badge: "HSK", title: "HSKK 対策", desc: "スピーキング重視、HSKK口頭試験に備える。", meta: "初級〜中級" },
      { symbol: "EN", badge: "会話", title: "英語 会話", desc: "ネイティブ講師と少人数クラスで自信ある英会話。", meta: "4レベル" },
    ],
    path: {
      eyebrow: "学習の道のり",
      title: "語学を制覇する4ステップ",
      steps: [
        { title: "レベルチェック", desc: "レベルを測り、学習目標を定めます。" },
        { title: "ロードマップ設計", desc: "能力とスケジュールに合わせた個別ロードマップ。" },
        { title: "学習 & 練習", desc: "少人数、熱心な講師、オンライン & 対面。" },
        { title: "資格を取得", desc: "成果へのコミット、達成まで伴走します。" },
      ],
    },
    cta: {
      title: "どこから始めるか迷っていますか？",
      body: "無料のレベルテストと個別プランの相談を受けましょう。",
      button: "無料相談を受ける",
    },
  },

  studyAbroad: {
    hero: {
      eyebrow: "ALOHAと留学",
      title: "留学の夢へ、もう一歩近づく",
      subtitle:
        "中国、韓国、日本 — 学校選びから書類作成、奨学金獲得、キャンパスに立つ日まで、ALOHAがまるごと伴走します。",
      ctaPrimary: "留学の相談をする",
      ctaSecondary: "奨学金の条件",
      statValue: "100%",
      statTitle: "全額奨学金",
      statDesc: "優秀な出願者に",
    },
    countries: {
      eyebrow: "留学先",
      title: "留学する国を選ぶ",
      items: [
        {
          flag: "中国",
          title: "中国留学",
          desc: "CSC奨学金、トップ校、手頃な費用、ベトナムから近い。",
          bullets: ["最大100%の奨学金", "出願 & ビザサポート"],
        },
        {
          flag: "한국",
          title: "韓国留学",
          desc: "学びながら働ける、人気学部、活気ある環境、定住のチャンス。",
          bullets: ["アルバイト支援", "学部 & 学校選び"],
        },
        {
          flag: "日本",
          title: "日本留学",
          desc: "一流の教育、規律、多彩な奨学金とキャリアのチャンス。",
          bullets: ["渡航前の語学研修", "留学ビザの伴走"],
        },
      ],
    },
    process: {
      eyebrow: "留学のプロセス",
      title: "5ステップ、明確な一つの旅",
      steps: [
        { title: "方向づけ相談", desc: "最適な国・学部・学校を選びます。" },
        { title: "語学学習", desc: "必要な語学レベルに到達します。" },
        { title: "書類準備", desc: "出願書類を整え、奨学金を狙います。" },
        { title: "ビザ申請", desc: "面接指導とビザ申請をサポート。" },
        { title: "出発", desc: "渡航先での生活をサポートします。" },
      ],
    },
    scholarship: {
      title: "2026年度の留学奨学金、受付中",
      body: "枠には限りがあります — 早めの登録で、無料の書類審査と奨学金相談を。",
      button: "今すぐ登録",
    },
  },

  contact: {
    hero: {
      eyebrow: "無料相談を予約",
      title: "情報を残せば、ALOHAから折り返します",
      subtitle:
        "あなたの目標と予算に合った語学・留学プランを無料でご相談いただけます。",
    },
    form: {
      title: "登録情報",
      required: "* の項目は必須です。",
      name: "お名前 *",
      namePh: "例：グエン・ヴァン・A",
      phone: "電話番号 *",
      phonePh: "09xx xxx xxx",
      email: "メール",
      emailPh: "you@email.com",
      interest: "ご興味 *",
      interestOptions: ["語学トレーニング", "留学", "両方"],
      program: "プログラム",
      programOptions: [
        "中国語 / HSK",
        "英語 / IELTS",
        "会話",
        "中国留学",
        "韓国留学",
        "日本留学",
      ],
      branch: "お近くの校舎",
      branchOptions: [
        "ALOHA クエヴォー – バクニン",
        "ALOHA トゥーソン – バクニン",
        "ALOHA トゥアンタン – バクニン",
        "オンライン受講",
      ],
      message: "メッセージ",
      messagePh: "目標、開始したい時期など...",
      submit: "登録を送信",
      consent: "送信することで、ALOHAからの相談連絡に同意したものとみなされます。",
      success: "ありがとうございます！ALOHAより早急にご連絡します。",
    },
    benefits: {
      title: "ALOHAで登録する理由",
      items: [
        { title: "無料の1対1相談", desc: "レベルと目標に合わせた個別ロードマップ。" },
        { title: "入学前レベルチェック", desc: "出発点を正確に把握します。" },
        { title: "学費優待 & 奨学金", desc: "最新の奨学金枠を随時ご案内。" },
      ],
    },
    hotline: { label: "相談ホットライン", hours: "毎日 8:00 – 21:00" },
    office: {
      title: "ALOHA 本部",
      address: "バクニン市 新都市エリア、バクニン省",
      emailLabel: "メール",
      email: "tuvan@aloha.edu.vn",
    },
  },
};
