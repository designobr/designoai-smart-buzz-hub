const home = {
  hero: {
    eyebrow: 'Studio de marketing et de design',
    title: 'Des marques construites avec clarté, méthode et intelligence.',
    description:
      "Stratégie, identité visuelle et croissance digitale pour les entreprises qui veulent paraître et fonctionner à leur meilleur niveau.",
    ctaPrimary: 'Demander une proposition',
    ctaSecondary: 'Voir les services',
    imageAlt: 'Bureau d\'un studio de design éclairé par la lumière naturelle',
    stats: [
      { k: '500+', v: 'Projets livrés' },
      { k: 'Solutions', v: 'Technologie et innovation' },
      { k: '4.9/5', v: 'Satisfaction moyenne' },
    ],
  },
  clientLogos: {
    eyebrow: 'Secteurs accompagnés',
    segments: [
      'E-commerce', 'Santé', 'Droit', 'Restauration', 'Éducation',
      'Technologie', 'Immobilier', 'Fitness', 'Mode', 'Industrie',
      'Conseil', 'Vétérinaire', 'Esthétique', 'Comptabilité',
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Un ensemble complet, livré avec la même exigence.',
    description: 'Chaque volet de travail est piloté par des spécialistes et intégré à un plan de croissance unique.',
    learnMore: 'En savoir plus',
    seeAll: 'Voir tous les services',
    items: [
      {
        title: 'Création de Contenu',
        description: 'Textes, images et pièces graphiques produits avec une direction éditoriale cohérente.',
        page: 'criacaoConteudo',
      },
      {
        title: 'Analyse de Données',
        description: 'Une lecture claire de la performance, avec des indicateurs qui appuient les décisions.',
        page: 'analiseDados',
      },
      {
        title: 'Design Automatisé',
        description: 'Systèmes visuels évolutifs pour publications, campagnes et supports.',
        page: 'designAutomatizado',
      },
      {
        title: 'Gestion des Réseaux Sociaux',
        description: 'Planification, production et publication avec rythme et cohérence de marque.',
        page: 'gestaoRedesSociais',
      },
      {
        title: 'SEO Intelligent',
        description: 'Architecture, contenu et performance technique pour le référencement naturel.',
        page: 'seoInteligente',
      },
      {
        title: 'Stratégies Personnalisées',
        description: 'Feuilles de route de croissance conçues à partir de votre contexte réel.',
        page: 'estrategiasPersonalizadas',
      },
    ],
  },
  features: {
    eyebrow: 'Pourquoi DesignoAI',
    title: "Un travail de studio, avec la discipline d'une opération.",
    imageAlt1: 'Équipe examinant des mises en page imprimées sur une table blanche',
    imageAlt2: "Téléphone et livret d'identité visuelle sur une surface claire",
    subtitle1: 'Du temps bien investi dans chaque campagne.',
    subtitle2: 'Des résultats mesurables et constants.',
    ctaResources: 'Découvrir les ressources',
    blockOne: [
      { title: 'Opération organisée', description: 'Des processus clairs remplacent le retravail et l\'improvisation.' },
      { title: 'Personnalisation à grande échelle', description: 'Des messages adaptés à chaque segment de votre public.' },
      { title: 'Anticipation des tendances', description: 'Des tendances identifiées avant qu\'elles ne deviennent un coût.' },
    ],
    blockTwo: [
      { title: 'Tableau de bord unique', description: 'Tous vos indicateurs réunis en un seul endroit.' },
      { title: 'Rapports objectifs', description: 'Des synthèses hebdomadaires avec des décisions recommandées.' },
      { title: 'Amélioration continue', description: 'Des cycles courts de test, de révision et d\'ajustement.' },
    ],
  },
  howItWorks: {
    eyebrow: 'Processus',
    title: 'Quatre étapes, sans étape invisible.',
    description: 'Vous suivez chaque phase avec un périmètre, un délai et un responsable définis dès le départ.',
    cta: 'Démarrer un projet',
    steps: [
      { number: '01', title: 'Diagnostic', description: 'Nous analysons le marché, la concurrence et l\'état actuel de votre marque.' },
      { number: '02', title: 'Stratégie', description: 'Nous définissons le positionnement, les priorités et des objectifs mesurables.' },
      { number: '03', title: 'Production', description: 'Nous créons contenu, design et supports au sein d\'un système unique.' },
      { number: '04', title: 'Diffusion', description: 'Nous publions, suivons et ajustons sur la base des données.' },
    ],
  },
  pricing: {
    eyebrow: 'Offres',
    title: 'Des périmètres clairs, un devis sur mesure.',
    description: 'Chaque offre est ajustée à votre situation. Sans frais cachés ni engagement long terme.',
    highlightLabel: 'Complète',
    priceLabel: 'Devis sur mesure',
    ctaQuote: 'Demander un devis',
    ctaDetails: 'Voir les détails',
    ctaCalculator: 'Composez votre périmètre dans le sélecteur de services',
    waQuote: "Bonjour ! Je suis intéressé par l'offre {plan} de DesignoAI. Je souhaite demander un devis.",
    plans: [
      {
        name: 'Start',
        summary: 'Pour les entreprises qui ont besoin d\'une présence visuelle cohérente.',
        features: [
          '12 visuels premium personnalisés',
          'Direction créative assistée par IA',
          'Suggestions de thèmes selon les tendances',
          'Cycle de révision et de validation',
          'Support via WhatsApp',
        ],
      },
      {
        name: 'Plus',
        summary: 'Un volume de production plus important et une planification plus large.',
        features: [
          '18 visuels premium personnalisés',
          'Direction créative assistée par IA',
          'Suggestions de thèmes selon les tendances',
          'Cycle de révision et de validation',
          'Support via WhatsApp',
        ],
      },
      {
        name: 'Fusion',
        summary: 'Marketing digital, supports physiques et automatisation dans une seule offre.',
        highlight: true,
        features: [
          'Gestion des réseaux sociaux (12 publications par mois)',
          'Stories quotidiennes programmées',
          'Design graphique et rédaction',
          'Trafic payant et site web responsive',
          'Carte de visite digitale',
          'Séance photo et vidéo',
          'Rapports de performance',
          'Assistant WhatsApp propulsé par IA',
        ],
      },
    ],
  },
  calculator: {
    eyebrow: 'Sélecteur de services',
    title: 'Composez votre périmètre en une minute.',
    description: 'Sélectionnez une offre et les options souhaitées. Nous envoyons la proposition avec des tarifs fermes.',
    packagesTitle: 'Offres',
    addonsTitle: 'Options',
    summaryTitle: 'Résumé',
    packageLabel: 'Offre',
    addonsLabel: 'Options',
    noSelection: 'Aucun élément sélectionné pour l\'instant. Choisissez une offre pour commencer.',
    itemsSelectedSingular: '{count} élément sélectionné, devis sur mesure',
    itemsSelectedPlural: '{count} éléments sélectionnés, devis sur mesure',
    quoteCta: 'Demander un devis',
    talkPrompt: 'Vous préférez en parler d\'abord ?',
    talkCta: 'Parler à un consultant',
    waIntro: 'Bonjour ! Je souhaite demander un devis pour :',
    waPackageLabel: 'Offre',
    waAddonsLabel: 'Options',
    waClosing: "J'attends le devis personnalisé.",
    waConsultant: 'Bonjour ! Je souhaite parler à un consultant au sujet des services de DesignoAI.',
    packages: [
      { id: 'start', name: 'Offre Start', description: '12 visuels premium personnalisés' },
      { id: 'plus', name: 'Offre Plus', description: '18 visuels premium personnalisés' },
      { id: 'fusion', name: 'Offre Fusion', description: 'Digital, physique et automatisation' },
      { id: 'studio', name: 'DesignoAI Studio', description: 'Production photo assistée par IA' },
    ],
    addons: [
      { id: 'cards', name: 'Impression de cartes de visite' },
      { id: 'catalog', name: 'Catalogue digital interactif' },
      { id: 'reels', name: 'Vidéos Reels supplémentaires' },
      { id: 'landing', name: 'Landing page de campagne' },
      { id: 'consulting', name: 'Conseil stratégique mensuel' },
      { id: 'email', name: 'Création d\'e-mail professionnel' },
      { id: 'gmb', name: 'Fiche Google Business optimisée' },
    ],
  },
  testimonials: {
    eyebrow: 'Témoignages',
    title: 'Ce que disent celles et ceux qui travaillent avec nous.',
    items: [
      {
        content:
          "DesignoAI a complètement réorganisé notre communication. Ce qui prenait des jours se fait maintenant en quelques heures, avec beaucoup plus de cohérence.",
        author: 'Juliana Mendes',
        role: 'Marketing Manager, TechSoft',
      },
      {
        content:
          "La lecture que l'équipe fait de notre public est précise. Nous avons augmenté notre engagement de 230% au premier trimestre.",
        author: 'Ricardo Torres',
        role: 'CEO, Inova Digital',
      },
      {
        content:
          "Nous avons gagné du temps, de la prévisibilité et une marque qui représente enfin le niveau de notre service.",
        author: 'Camila Ferreira',
        role: 'Directrice, Studio Aurora',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Tout est transparent, dès le début.',
    items: [
      {
        q: "Comment démarre un projet ?",
        a: "Nous commençons par un échange de diagnostic, suivi d'une proposition avec périmètre, calendrier et investissement. Une fois la proposition validée, la production démarre sous cinq jours ouvrés.",
      },
      {
        q: "Y a t il un engagement de durée ?",
        a: "Non. Nous fonctionnons avec des cycles mensuels renouvelables. Vous restez parce que les résultats le justifient, pas parce qu'un contrat vous y oblige.",
      },
      {
        q: "Qui s'occupe de mon projet au quotidien ?",
        a: "Chaque client a un responsable de compte et une équipe créative dédiée. Vous parlez toujours à ceux qui exécutent.",
      },
      {
        q: "Travaillez vous avec tous les secteurs ?",
        a: "Nous accompagnons les entreprises de services, du commerce, de la santé, de l'éducation, de la technologie et de l'industrie. Si cela n'a pas de sens pour votre cas, nous vous le disons dès le premier échange.",
      },
      {
        q: "Comment la performance est elle suivie ?",
        a: "Vous recevez des rapports périodiques avec des indicateurs de portée, d'engagement et de conversion, ainsi que des recommandations pour le cycle suivant.",
      },
    ],
  },
  cta: {
    eyebrow: 'Prochaine étape',
    title: 'Prêt à élever le standard de votre marque ?',
    description: "Plus de 500 entreprises ont déjà réorganisé leur présence digitale avec DesignoAI.",
    ctaPrimary: 'Demander une proposition',
    ctaSecondary: 'Parler à un spécialiste',
    waMessage: 'Bonjour ! Je souhaite parler à un spécialiste de DesignoAI.',
  },
};

export default home;
