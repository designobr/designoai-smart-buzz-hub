import type { Locale } from '@/i18n/config';

export type ServiceKey = 'social' | 'traffic' | 'seo' | 'design';

export interface HomeCopy {
  nav: { about: string; services: string; method: string; contact: string; login: string; cta: string };
  hero: { title: string; text: string; cta: string };
  platforms: { label: string };
  services: {
    title: string;
    desc: string;
    more: string;
    items: Record<ServiceKey, { title: string; modal: string; bullets: string[] }>;
  };
  cta: { title: string; text: string; button: string; whatsapp: string };
  method: { title: string; desc: string; more: string; steps: { title: string; text: string }[] };
  footer: { instagram: string; whatsapp: string; top: string; rights: string };
  pageCta: string;
  waLabel: string;
  closeLabel: string;
}

export const HOME_COPY: Record<Locale, HomeCopy> = {
  'pt-BR': {
    nav: { about: 'Sobre', services: 'Serviços', method: 'Método', contact: 'Contato', login: 'Entrar', cta: 'Agende uma reunião' },
    hero: {
      title: 'Design e marketing digital para a sua marca crescer',
      text: 'A Designo é uma agência de marketing digital que ajuda empresas a crescer online com gestão de redes sociais, tráfego pago, SEO e design gráfico.',
      cta: 'Agende uma reunião',
    },
    platforms: { label: 'Atuamos nas principais plataformas' },
    services: {
      title: 'Serviços',
      desc: 'Na Designo, reunimos estratégia, conteúdo, tráfego e design para ajudar empresas a crescer online. Conheça o que fazemos:',
      more: 'Saiba mais',
      items: {
        social: {
          title: 'Gestão de Redes Sociais',
          modal: 'Nossa gestão profissional de redes sociais vai muito além de apenas postar conteúdo. Desenvolvemos uma estratégia personalizada que inclui:',
          bullets: ['Planejamento estratégico de conteúdo', 'Criação de posts engajadores', 'Gestão de comunidade', 'Relatórios mensais de performance'],
        },
        traffic: {
          title: 'Tráfego Pago',
          modal: 'Maximize seu ROI com nossas campanhas de tráfego pago estrategicamente otimizadas:',
          bullets: ['Configuração de campanhas', 'Otimização contínua', 'Análise de dados', 'Relatórios de performance'],
        },
        seo: {
          title: 'SEO',
          modal: 'Aumente sua visibilidade orgânica e autoridade online com nossa estratégia completa de SEO:',
          bullets: ['Otimização on-page', 'Construção de links', 'Análise de palavras-chave', 'Monitoramento de rankings'],
        },
        design: {
          title: 'Design Gráfico',
          modal: 'Transforme sua identidade visual com designs profissionais e impactantes:',
          bullets: ['Identidade visual', 'Posts para redes sociais', 'Material impresso', 'Apresentações'],
        },
      },
    },
    cta: {
      title: 'Vamos fazer acontecer',
      text: 'Fale com a nossa equipe e descubra como o marketing digital pode ajudar o seu negócio a crescer online.',
      button: 'Agende uma reunião de apresentação',
      whatsapp: 'Chamar no WhatsApp',
    },
    method: {
      title: 'Método',
      desc: 'Um processo claro do primeiro contato até a entrega, com acompanhamento dos resultados.',
      more: 'Saiba mais',
      steps: [
        { title: 'Diagnóstico', text: 'Entendemos seu negócio, seu público e seus objetivos antes de propor qualquer ação.' },
        { title: 'Estratégia e execução', text: 'Planejamos e executamos conteúdo, campanhas e materiais visuais alinhados à sua marca.' },
        { title: 'Acompanhamento', text: 'Acompanhamos os números e enviamos relatórios para ajustar a rota com base em dados.' },
      ],
    },
    footer: { instagram: 'Instagram', whatsapp: 'WhatsApp', top: 'Voltar ao topo', rights: 'Todos os direitos reservados.' },
    pageCta: 'Ver página completa',
    waLabel: 'Chamar no WhatsApp',
    closeLabel: 'Fechar',
  },
  en: {
    nav: { about: 'About', services: 'Services', method: 'Method', contact: 'Contact', login: 'Sign in', cta: 'Schedule a meeting' },
    hero: {
      title: 'Design and digital marketing to help your brand grow',
      text: 'Designo is a digital marketing agency that helps companies grow online with social media management, paid traffic, SEO and graphic design.',
      cta: 'Schedule a meeting',
    },
    platforms: { label: 'We work on the main platforms' },
    services: {
      title: 'Services',
      desc: 'At Designo, we bring together strategy, content, traffic and design to help companies grow online. Here is what we do:',
      more: 'Learn more',
      items: {
        social: {
          title: 'Social Media Management',
          modal: 'Our professional social media management goes far beyond posting content. We build a personalized strategy that includes:',
          bullets: ['Strategic content planning', 'Engaging post creation', 'Community management', 'Monthly performance reports'],
        },
        traffic: {
          title: 'Paid Traffic',
          modal: 'Maximize your ROI with our strategically optimized paid traffic campaigns:',
          bullets: ['Campaign setup', 'Continuous optimization', 'Data analysis', 'Performance reports'],
        },
        seo: {
          title: 'SEO',
          modal: 'Increase your organic visibility and online authority with our complete SEO strategy:',
          bullets: ['On-page optimization', 'Link building', 'Keyword analysis', 'Rank monitoring'],
        },
        design: {
          title: 'Graphic Design',
          modal: 'Transform your visual identity with professional and impactful designs:',
          bullets: ['Visual identity', 'Social media posts', 'Print material', 'Presentations'],
        },
      },
    },
    cta: {
      title: "Let's make things happen",
      text: 'Talk to our team and find out how digital marketing can help your business grow online.',
      button: 'Schedule an intro meeting',
      whatsapp: 'Chat on WhatsApp',
    },
    method: {
      title: 'Method',
      desc: 'A clear process from first contact to delivery, with ongoing result tracking.',
      more: 'Learn more',
      steps: [
        { title: 'Discovery', text: 'We understand your business, your audience and your goals before proposing any action.' },
        { title: 'Strategy and execution', text: 'We plan and deliver content, campaigns and visual materials aligned with your brand.' },
        { title: 'Tracking', text: 'We follow the numbers and send reports so we can adjust course based on data.' },
      ],
    },
    footer: { instagram: 'Instagram', whatsapp: 'WhatsApp', top: 'Back to top', rights: 'All rights reserved.' },
    pageCta: 'View full page',
    waLabel: 'Chat on WhatsApp',
    closeLabel: 'Close',
  },
  es: {
    nav: { about: 'Sobre', services: 'Servicios', method: 'Método', contact: 'Contacto', login: 'Entrar', cta: 'Programar una reunión' },
    hero: {
      title: 'Diseño y marketing digital para que su marca crezca',
      text: 'Designo es una agencia de marketing digital que ayuda a las empresas a crecer en línea con gestión de redes sociales, tráfico pago, SEO y diseño gráfico.',
      cta: 'Programar una reunión',
    },
    platforms: { label: 'Actuamos en las principales plataformas' },
    services: {
      title: 'Servicios',
      desc: 'En Designo reunimos estrategia, contenido, tráfico y diseño para ayudar a las empresas a crecer en línea. Esto es lo que hacemos:',
      more: 'Más información',
      items: {
        social: {
          title: 'Gestión de Redes Sociales',
          modal: 'Nuestra gestión profesional de redes sociales va mucho más allá de publicar contenido. Desarrollamos una estrategia personalizada que incluye:',
          bullets: ['Planificación estratégica de contenido', 'Creación de publicaciones atractivas', 'Gestión de comunidad', 'Informes mensuales de rendimiento'],
        },
        traffic: {
          title: 'Tráfico Pago',
          modal: 'Maximice su ROI con nuestras campañas de tráfico pago estratégicamente optimizadas:',
          bullets: ['Configuración de campañas', 'Optimización continua', 'Análisis de datos', 'Informes de rendimiento'],
        },
        seo: {
          title: 'SEO',
          modal: 'Aumente su visibilidad orgánica y su autoridad en línea con nuestra estrategia completa de SEO:',
          bullets: ['Optimización on-page', 'Construcción de enlaces', 'Análisis de palabras clave', 'Monitoreo de rankings'],
        },
        design: {
          title: 'Diseño Gráfico',
          modal: 'Transforme su identidad visual con diseños profesionales e impactantes:',
          bullets: ['Identidad visual', 'Publicaciones para redes sociales', 'Material impreso', 'Presentaciones'],
        },
      },
    },
    cta: {
      title: 'Hagamos que suceda',
      text: 'Hable con nuestro equipo y descubra cómo el marketing digital puede ayudar a su negocio a crecer en línea.',
      button: 'Programar una reunión de presentación',
      whatsapp: 'Escribir por WhatsApp',
    },
    method: {
      title: 'Método',
      desc: 'Un proceso claro desde el primer contacto hasta la entrega, con seguimiento de resultados.',
      more: 'Más información',
      steps: [
        { title: 'Diagnóstico', text: 'Entendemos su negocio, su público y sus objetivos antes de proponer cualquier acción.' },
        { title: 'Estrategia y ejecución', text: 'Planificamos y ejecutamos contenido, campañas y materiales visuales alineados con su marca.' },
        { title: 'Seguimiento', text: 'Seguimos los números y enviamos informes para ajustar el rumbo con base en datos.' },
      ],
    },
    footer: { instagram: 'Instagram', whatsapp: 'WhatsApp', top: 'Volver arriba', rights: 'Todos los derechos reservados.' },
    pageCta: 'Ver página completa',
    waLabel: 'Escribir por WhatsApp',
    closeLabel: 'Cerrar',
  },
  fr: {
    nav: { about: 'À propos', services: 'Services', method: 'Méthode', contact: 'Contact', login: 'Connexion', cta: 'Planifier un appel' },
    hero: {
      title: 'Design et marketing digital pour faire grandir votre marque',
      text: 'Designo est une agence de marketing digital qui aide les entreprises à croître en ligne grâce aux réseaux sociaux, au trafic payant, au SEO et au design graphique.',
      cta: 'Planifier un appel',
    },
    platforms: { label: 'Nous intervenons sur les principales plateformes' },
    services: {
      title: 'Services',
      desc: 'Chez Designo, nous réunissons stratégie, contenu, trafic et design pour développer les entreprises en ligne. Découvrez notre offre :',
      more: 'En savoir plus',
      items: {
        social: {
          title: 'Gestion des Réseaux Sociaux',
          modal: 'Notre gestion professionnelle des réseaux sociaux va bien au-delà de la simple publication. Nous créons une stratégie sur mesure :',
          bullets: ['Planification stratégique de contenu', 'Création de publications engageantes', 'Gestion de communauté', 'Rapports mensuels de performance'],
        },
        traffic: {
          title: 'Trafic Payant',
          modal: 'Maximisez votre ROI grâce à nos campagnes de trafic payant optimisées :',
          bullets: ['Configuration des campagnes', 'Optimisation continue', 'Analyse des données', 'Rapports de performance'],
        },
        seo: {
          title: 'SEO',
          modal: 'Augmentez votre visibilité organique et votre autorité en ligne avec notre stratégie SEO complète :',
          bullets: ['Optimisation on-page', 'Création de liens', 'Analyse de mots-clés', 'Suivi des classements'],
        },
        design: {
          title: 'Design Graphique',
          modal: 'Transformez votre identité visuelle avec des créations professionnelles et percutantes :',
          bullets: ['Identité visuelle', 'Visuels pour réseaux sociaux', 'Supports imprimés', 'Présentations'],
        },
      },
    },
    cta: {
      title: 'Passons à l’action',
      text: 'Parlez à notre équipe et découvrez comment le marketing digital peut accélérer la croissance de votre entreprise.',
      button: 'Planifier une réunion de présentation',
      whatsapp: 'Écrire sur WhatsApp',
    },
    method: {
      title: 'Méthode',
      desc: 'Un processus clair du premier contact jusqu’à la livraison, avec suivi continu des résultats.',
      more: 'En savoir plus',
      steps: [
        { title: 'Diagnostic', text: 'Nous comprenons votre entreprise, votre audience et vos objectifs avant toute recommandation.' },
        { title: 'Stratégie et exécution', text: 'Nous planifions et produisons contenus, campagnes et supports visuels alignés à votre marque.' },
        { title: 'Suivi', text: 'Nous analysons les résultats et partageons des rapports clairs pour ajuster la trajectoire.' },
      ],
    },
    footer: { instagram: 'Instagram', whatsapp: 'WhatsApp', top: 'Haut de page', rights: 'Tous droits réservés.' },
    pageCta: 'Voir la page complète',
    waLabel: 'Écrire sur WhatsApp',
    closeLabel: 'Fermer',
  },
};