const planosSocial = {
  seo: { title: 'Tarifs DesignoAI Social Automation', description: 'Une offre de base à 149,90 R$ par mois avec 1 client, jusqu’à 4 comptes et 15 publications. Ajoutez des clients et des packs de publications selon vos besoins.' },
  hero: { badge: 'Tarifs', subtitle: 'Une offre de base simple et des options que vous ajoutez seulement quand vous en avez besoin. Composez un abonnement à la taille de votre activité.' },
  base: {
    tag: 'Offre de base', name: 'DesignoAI', period: '/mois', stats: ['client', 'comptes de réseaux sociaux', 'publications par mois'],
    groups: [
      { title: 'Planification et création', items: ['Planification de contenu', 'Création de posts et de scripts', 'Textes et légendes', 'Hashtags stratégiques', 'Calendrier de contenu', 'Jusqu’à 2 demandes de modification par contenu'] },
      { title: 'Publication', items: ['Programmation automatique des publications', 'Instagram', 'Threads', 'YouTube Shorts'] },
    ],
  },
  cta: 'Contactez-nous',
  soon: 'La souscription en ligne arrive bientôt. Pour l’instant, l’abonnement est activé avec notre équipe sur WhatsApp.',
  note: 'Prix en reais brésiliens, facturation mensuelle.',
  addons: {
    title: 'Options', subtitle: 'Étendez votre abonnement quand vous en avez besoin. Chaque option est facturée au mois, séparément de l’offre de base.',
    client: { title: 'Client supplémentaire', description: 'Augmente de 1 le nombre de clients que vous gérez sur la plateforme.', unit: 'par client supplémentaire' },
    posts: { title: 'Publications supplémentaires', description: 'Packs cumulables : prenez-en plusieurs, y compris de tailles différentes.', pack: '+{n} publications par mois' },
  },
  builder: {
    title: 'Composez votre abonnement', subtitle: 'Choisissez vos options et voyez le prix mensuel tout de suite.', clients: 'Clients supplémentaires', packs: 'Packs de publications', less: 'Diminuer', more: 'Augmenter',
    resultClients: 'Clients', resultPosts: 'Publications par mois', resultTotal: 'Prix mensuel', includedBase: 'Offre de base incluse', cta: 'Parler de cette configuration',
    waMessage: 'Bonjour ! Je souhaite composer un abonnement DesignoAI Social Automation : {clientes} client(s), {pubs} publications par mois, {total} par mois.',
  },
  examples: { title: 'Exemples d’abonnement', subtitle: 'Voyez comment le prix évolue quand vous ajoutez des clients et des publications.', headers: ['Configuration', 'Clients', 'Publications par mois', 'Prix mensuel'], labels: ['Offre de base', 'Base + 1 client supplémentaire', 'Base + pack de 10 publications', 'Base + 1 client + 10 publications', 'Base + 2 clients + 20 publications', 'Base + 4 clients + 50 publications'] },
  rule: { title: 'Comment nous comptons les publications', text: 'Un contenu publié en même temps sur plusieurs réseaux sociaux ne consomme qu’1 publication de votre quota. Le décompte porte sur le contenu créé, pas sur le nombre de réseaux.', example: 'Exemple : le même contenu publié sur Instagram, Threads et YouTube Shorts compte pour 1 publication, et non 3.' },
  final: { title: 'Des questions sur votre configuration ?', text: 'Parlez-nous et nous composons l’abonnement avec vous.', waMessage: 'Bonjour ! Je souhaite de l’aide pour composer l’abonnement DesignoAI Social Automation.' },
};

export default planosSocial;
