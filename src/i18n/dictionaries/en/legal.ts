const legal = {
  termosUso: {
    seo: {
      title: 'Terms of Use',
      description: 'Learn about the terms and conditions governing the use of the DesignoAI platform.',
    },
    title: 'Terms of Use',
    subtitle: 'Learn about the terms and conditions governing the use of the DesignoAI platform.',
    badge: ' Terms',
    lastUpdated: 'Last updated: June 10, 2025',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: 'By accessing and using the DesignoAI platform, you agree to comply with and be bound by the following terms and conditions of use. If you do not agree with any part of these terms, you should not use our services.',
      },
      {
        title: '2. Use of the Platform',
        list: [
          'You must be at least 18 years old to use our services',
          'You are responsible for keeping your account confidential',
          'You must not use the platform for illegal activities',
          'You must provide accurate and up to date information',
        ],
      },
      {
        title: '3. Intellectual Property',
        content: 'All platform content is the property of DesignoAI or its licensors. Content you create using our platform remains your property.',
      },
      {
        title: '4. Limitation of Liability',
        content: 'DesignoAI will not be liable for any direct, indirect, incidental, special or consequential damages resulting from the use of our services. We provide our services "as is".',
      },
      {
        title: '5. Changes to the Terms',
        content: 'We reserve the right to modify these terms at any time. Changes will take effect immediately upon publication. It is your responsibility to periodically review these terms.',
      },
    ],
    contact: {
      title: 'Contact',
      text: 'If you have questions about these Terms of Use:',
      email: 'contato@designoai.com.br',
    },
  },
  politicaPrivacidade: {
    seo: {
      title: 'Privacy Policy',
      description: 'Your privacy matters to us. Learn how we collect, use and protect your information.',
    },
    title: 'Privacy Policy',
    subtitle: 'Your privacy matters to us. Learn how we collect, use and protect your information.',
    badge: ' Privacy',
    lastUpdated: 'Last updated: June 10, 2025',
    sections: {
      info: {
        title: '1. Information We Collect',
        intro: 'We collect information that you provide to us directly and automatically when you use our services:',
        provided: {
          title: 'Information Provided:',
          items: ['Name and contact information', 'Account and profile information', 'Content you create', 'Communications with us'],
        },
        automatic: {
          title: 'Automatic Information:',
          items: ['Platform usage data', 'Device information', 'IP address and location', 'Cookies and similar technologies'],
        },
      },
      usage: {
        title: '2. How We Use Your Information',
        intro: 'We use your information to:',
        items: [
          'Provide and improve our services',
          'Personalize your experience on the platform',
          'Process transactions and payments',
          'Send important communications',
          'Analyze platform usage',
          'Comply with legal obligations',
        ],
      },
      sharing: {
        title: '3. Information Sharing',
        intro: 'We do not sell your personal information. We may share it only:',
        items: ['With your explicit consent', 'With service providers', 'To comply with legal obligations', 'To protect our rights and safety'],
      },
      security: {
        title: '4. Data Security',
        intro: 'We implement technical and organizational security measures to protect your information.',
        technical: {
          title: 'Technical Security:',
          items: ['Data encryption', 'Firewalls and detection', 'Restricted access', 'Continuous monitoring'],
        },
        organizational: {
          title: 'Organizational Security:',
          items: ['Employee training', 'Access policies', 'Regular audits', 'Confidentiality agreements'],
        },
      },
      rights: {
        title: '5. Your Rights',
        intro: 'You have the following rights:',
        items: [
          { label: 'Access:', desc: 'Request copies of your information' },
          { label: 'Rectification:', desc: 'Correct inaccurate information' },
          { label: 'Deletion:', desc: 'Request the deletion of your information' },
          { label: 'Portability:', desc: 'Receive your data in a structured format' },
          { label: 'Objection:', desc: 'Object to processing' },
        ],
      },
    },
    contact: {
      title: 'Get in Touch',
      text: 'To exercise your rights or clarify questions:',
      email: 'contato@designoai.com.br',
      whatsapp: 'WhatsApp: +55 11 94796-8158',
    },
  },
  cookies: {
    seo: {
      title: 'Cookie Policy',
      description: 'Understand how we use cookies and similar technologies to improve your experience.',
    },
    title: 'Cookie Policy',
    subtitle: 'Understand how we use cookies and similar technologies to improve your experience.',
    badge: ' Cookies',
    lastUpdated: 'Last updated: June 10, 2025',
    whatIs: {
      title: 'What Are Cookies?',
      p1: 'Cookies are small text files stored on your device when you visit a website. They help us improve your experience.',
      p2: 'Cookies can be "persistent" or "session" cookies. Persistent cookies remain until they expire. Session cookies are deleted when you close your browser.',
    },
    types: {
      title: 'Types of Cookies',
      items: [
        { title: 'Essential Cookies', description: 'Necessary for the basic operation of the site. They include authentication, security and navigation.' },
        { title: 'Analytics Cookies', description: 'Help us understand how visitors interact with the site by collecting anonymous information.' },
        { title: 'Functional Cookies', description: 'Allow the site to remember your preferences and settings for a personalized experience.' },
        { title: 'Marketing Cookies', description: 'Used to display relevant ads and measure the effectiveness of advertising campaigns.' },
      ],
    },
    specific: {
      title: 'Specific Cookies',
      headers: { name: 'Name', purpose: 'Purpose', duration: 'Duration', type: 'Type' },
      rows: [
        { name: 'session_id', purpose: 'Authentication', duration: 'Session', type: 'Essential' },
        { name: 'user_preferences', purpose: 'Settings', duration: '1 year', type: 'Functional' },
        { name: '_ga', purpose: 'Google Analytics', duration: '2 years', type: 'Analytics' },
        { name: 'marketing_consent', purpose: 'Consent', duration: '1 year', type: 'Marketing' },
      ],
    },
    contact: {
      title: 'Contact',
      text: 'If you have questions about our Cookie Policy:',
      email: 'contato@designoai.com.br',
      whatsapp: 'WhatsApp: +55 11 94796-8158',
    },
  },
};

export default legal;
