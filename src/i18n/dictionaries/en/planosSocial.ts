const planosSocial = {
  seo: { title: 'DesignoAI Social Automation pricing', description: 'A base plan at R$ 149.90 per month with 1 client, up to 4 accounts and 15 posts. Add clients and post packs as you need them.' },
  hero: { badge: 'Pricing', subtitle: 'A simple base plan and add-ons you only get when you need them. Build a subscription that fits your operation.' },
  base: {
    tag: 'Base plan', name: 'DesignoAI', period: '/month', stats: ['client', 'social accounts', 'posts per month'],
    groups: [
      { title: 'Planning and creation', items: ['Content planning', 'Post and script creation', 'Copy and captions', 'Strategic hashtags', 'Content calendar', 'Up to 2 change requests per piece'] },
      { title: 'Publishing', items: ['Automatic post scheduling', 'Instagram', 'Threads', 'YouTube Shorts'] },
    ],
  },
  cta: 'Contact us',
  soon: 'Online checkout is coming soon. For now, the subscription is activated with our team on WhatsApp.',
  note: 'Prices in Brazilian reais, billed monthly.',
  addons: {
    title: 'Add-ons', subtitle: 'Expand your subscription when you need to. Each add-on is billed monthly, separately from the base plan.',
    client: { title: 'Additional client', description: 'Raises by 1 the number of clients you manage on the platform.', unit: 'per additional client' },
    posts: { title: 'Additional posts', description: 'Stackable packs: get more than one, including different sizes.', pack: '+{n} posts per month' },
  },
  builder: {
    title: 'Build your subscription', subtitle: 'Pick your add-ons and see the monthly price instantly.', clients: 'Additional clients', packs: 'Post packs', less: 'Decrease', more: 'Increase',
    resultClients: 'Clients', resultPosts: 'Posts per month', resultTotal: 'Monthly price', includedBase: 'Base plan included', cta: 'Talk about this setup',
    waMessage: 'Hello! I would like to build a DesignoAI Social Automation subscription: {clientes} client(s), {pubs} posts per month, {total} per month.',
  },
  examples: { title: 'Subscription examples', subtitle: 'See how the price grows as you add clients and posts.', headers: ['Setup', 'Clients', 'Posts per month', 'Monthly price'], labels: ['Base plan', 'Base + 1 additional client', 'Base + 10-post pack', 'Base + 1 client + 10 posts', 'Base + 2 clients + 20 posts', 'Base + 4 clients + 50 posts'] },
  rule: { title: 'How posts are counted', text: 'A piece of content published at the same time on several social networks uses only 1 post from your allowance. We count the content created, not the number of networks.', example: 'Example: the same content published on Instagram, Threads and YouTube Shorts counts as 1 post, not 3.' },
  final: { title: 'Questions about your setup?', text: 'Talk to us and we will build the subscription with you.', waMessage: 'Hello! I would like help building a DesignoAI Social Automation subscription.' },
};

export default planosSocial;
