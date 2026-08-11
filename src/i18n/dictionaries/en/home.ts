const home = {
  hero: {
    eyebrow: 'Marketing and design studio',
    title: 'Brands built with clarity, method and intelligence.',
    description:
      'Strategy, visual identity and digital growth for companies that want to look and operate at their best level.',
    ctaPrimary: 'Request a proposal',
    ctaSecondary: 'See services',
    imageAlt: 'Design studio desk lit by natural light',
    stats: [
      { k: '500+', v: 'Projects delivered' },
      { k: 'Solutions', v: 'Technology & innovation' },
      { k: '4.9/5', v: 'Average satisfaction' },
    ],
  },
  clientLogos: {
    eyebrow: 'Industries we serve',
    segments: [
      'E-commerce', 'Healthcare', 'Law', 'Food & Beverage', 'Education',
      'Technology', 'Real Estate', 'Fitness', 'Fashion', 'Manufacturing',
      'Consulting', 'Veterinary', 'Aesthetics', 'Accounting',
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'A complete set of services, delivered to the same standard.',
    description: 'Every workstream is led by specialists and integrated into a single growth plan.',
    learnMore: 'Learn more',
    seeAll: 'See all services',
    items: [
      {
        title: 'Content Creation',
        description: 'Copy, images and graphic pieces produced with consistent editorial direction.',
        page: 'criacaoConteudo',
      },
      {
        title: 'Data Analysis',
        description: 'Clear performance readings, with indicators that support decisions.',
        page: 'analiseDados',
      },
      {
        title: 'Automated Design',
        description: 'Scalable visual systems for posts, campaigns and materials.',
        page: 'designAutomatizado',
      },
      {
        title: 'Social Media Management',
        description: 'Planning, production and publishing with rhythm and brand coherence.',
        page: 'gestaoRedesSociais',
      },
      {
        title: 'Smart SEO',
        description: 'Architecture, content and technical performance for organic search.',
        page: 'seoInteligente',
      },
      {
        title: 'Custom Strategies',
        description: 'Growth roadmaps designed around your real context.',
        page: 'estrategiasPersonalizadas',
      },
    ],
  },
  features: {
    eyebrow: 'Why DesignoAI',
    title: 'Studio craft, with the discipline of an operation.',
    imageAlt1: 'Team reviewing printed layouts on a white table',
    imageAlt2: 'Phone and brand identity booklet on a light surface',
    subtitle1: 'Time well invested in every campaign.',
    subtitle2: 'Measurable and consistent results.',
    ctaResources: 'Explore resources',
    blockOne: [
      { title: 'Organized operation', description: 'Clear processes replace rework and improvisation.' },
      { title: 'Personalization at scale', description: 'Messages adjusted to each segment of your audience.' },
      { title: 'Early insight', description: 'Trends identified before they become costs.' },
    ],
    blockTwo: [
      { title: 'Single dashboard', description: 'All your indicators gathered in one place.' },
      { title: 'Objective reports', description: 'Weekly summaries with recommended decisions.' },
      { title: 'Continuous improvement', description: 'Short cycles of testing, review and adjustment.' },
    ],
  },
  howItWorks: {
    eyebrow: 'Process',
    title: 'Four stages, no hidden steps.',
    description: 'You follow every phase with scope, timeline and owner defined from the start.',
    cta: 'Start a project',
    steps: [
      { number: '01', title: 'Diagnosis', description: 'We analyze the market, competitors and the current state of your brand.' },
      { number: '02', title: 'Strategy', description: 'We define positioning, priorities and measurable goals.' },
      { number: '03', title: 'Production', description: 'We create content, design and materials within a single system.' },
      { number: '04', title: 'Distribution', description: 'We publish, monitor and refine based on data.' },
    ],
  },
  pricing: {
    eyebrow: 'Plans',
    title: 'Clear scopes, quotes on request.',
    description: 'Every plan is tailored to your moment. No hidden fees and no long term contract.',
    highlightLabel: 'Complete',
    priceLabel: 'Quote on request',
    ctaQuote: 'Request a quote',
    ctaDetails: 'See details',
    ctaCalculator: 'Build your scope in the service selector',
    waQuote: 'Hello! I am interested in the {plan} plan from DesignoAI. I would like to request a quote.',
    plans: [
      {
        name: 'Start',
        summary: 'For businesses that need a consistent visual presence.',
        features: [
          '12 custom premium designs',
          'AI assisted creative direction',
          'Trend based theme suggestions',
          'Review and approval cycle',
          'WhatsApp support',
        ],
      },
      {
        name: 'Plus',
        summary: 'Higher production volume and broader planning.',
        features: [
          '18 custom premium designs',
          'AI assisted creative direction',
          'Trend based theme suggestions',
          'Review and approval cycle',
          'WhatsApp support',
        ],
      },
      {
        name: 'Fusion',
        summary: 'Digital marketing, physical materials and automation in a single plan.',
        highlight: true,
        features: [
          'Social media management (12 posts/month)',
          'Scheduled daily stories',
          'Graphic design and copywriting',
          'Paid traffic and responsive website',
          'Digital business card',
          'Photo and video session',
          'Performance reports',
          'AI powered WhatsApp assistant',
        ],
      },
    ],
  },
  calculator: {
    eyebrow: 'Service selector',
    title: 'Build your scope in one minute.',
    description: 'Select a package and any add-ons you need. We send you a proposal with fixed pricing.',
    packagesTitle: 'Packages',
    addonsTitle: 'Add-ons',
    summaryTitle: 'Summary',
    packageLabel: 'Package',
    addonsLabel: 'Add-ons',
    noSelection: 'No item selected yet. Choose a package to get started.',
    itemsSelectedSingular: '{count} item selected, quote on request',
    itemsSelectedPlural: '{count} items selected, quote on request',
    quoteCta: 'Request a quote',
    talkPrompt: 'Prefer to talk first?',
    talkCta: 'Talk to a consultant',
    waIntro: 'Hello! I would like to request a quote for:',
    waPackageLabel: 'Package',
    waAddonsLabel: 'Add-ons',
    waClosing: 'Looking forward to the personalized quote.',
    waConsultant: 'Hello! I would like to talk to a consultant about DesignoAI services.',
    packages: [
      { id: 'start', name: 'Start Package', description: '12 custom premium designs' },
      { id: 'plus', name: 'Plus Package', description: '18 custom premium designs' },
      { id: 'fusion', name: 'Fusion Package', description: 'Digital, physical and automation' },
      { id: 'studio', name: 'DesignoAI Studio', description: 'AI assisted photo production' },
    ],
    addons: [
      { id: 'cards', name: 'Business card printing' },
      { id: 'catalog', name: 'Interactive digital catalog' },
      { id: 'reels', name: 'Extra Reels videos' },
      { id: 'landing', name: 'Campaign landing page' },
      { id: 'consulting', name: 'Monthly strategic consulting' },
      { id: 'email', name: 'Professional email design' },
      { id: 'gmb', name: 'Optimized Google Business Profile' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What people who work with us say.',
    items: [
      {
        content:
          'DesignoAI completely reorganized our communication. What used to take days now takes hours, with much more consistency.',
        author: 'Juliana Mendes',
        role: 'Marketing Manager, TechSoft',
      },
      {
        content:
          'The team reads our audience with precision. We grew 230% in engagement in the first quarter.',
        author: 'Ricardo Torres',
        role: 'CEO, Inova Digital',
      },
      {
        content:
          'We gained time, predictability and a brand that finally represents the level of our service.',
        author: 'Camila Ferreira',
        role: 'Director, Studio Aurora',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Fully transparent, from day one.',
    items: [
      {
        q: 'How does a project get started?',
        a: 'We start with a diagnosis conversation, followed by a proposal with scope, timeline and investment. Once approved, production starts within five business days.',
      },
      {
        q: 'Is there a loyalty contract?',
        a: 'No. We work with renewable monthly cycles. You stay because the results justify it, not because a contract requires it.',
      },
      {
        q: 'Who handles my project day to day?',
        a: 'Every client has an account owner and a fixed creative team. You always talk to the people doing the work.',
      },
      {
        q: 'Do you work with businesses in any industry?',
        a: 'We serve services, retail, healthcare, education, technology and manufacturing businesses. If it does not make sense for your case, we say so in the first conversation.',
      },
      {
        q: 'How is performance tracked?',
        a: 'You receive periodic reports with reach, engagement and conversion indicators, plus recommendations for the next cycle.',
      },
    ],
  },
  cta: {
    eyebrow: 'Next step',
    title: 'Ready to raise your brand standard?',
    description: 'More than 500 companies have already reorganized their digital presence with DesignoAI.',
    ctaPrimary: 'Request a proposal',
    ctaSecondary: 'Talk to a specialist',
    waMessage: 'Hello! I would like to talk to a DesignoAI specialist.',
  },
};

export default home;
