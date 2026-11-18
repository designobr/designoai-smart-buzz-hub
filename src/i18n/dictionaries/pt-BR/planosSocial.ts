const planosSocial = {
  seo: { title: 'Valores do DesignoAI Social Automation', description: 'Um plano base de R$ 599,90 por mês com 1 cliente, até 4 contas e 15 publicações. Adicione clientes e pacotes de publicações conforme a sua necessidade.' },
  hero: { badge: 'Valores', subtitle: 'Um plano base simples e adicionais que você contrata só quando precisar. Monte a assinatura do tamanho da sua operação.' },
  base: {
    tag: 'Plano base', name: 'DesignoAI', period: '/mês', stats: ['cliente', 'contas de redes sociais', 'publicações por mês'],
    groups: [
      { title: 'Planejamento e criação', items: ['Planejamento de conteúdo', 'Criação de posts e roteiros', 'Textos e legendas', 'Hashtags estratégicas', 'Calendário de conteúdo', 'Até 2 solicitações de alteração por conteúdo'] },
      { title: 'Publicação', items: ['Agendamento automático das publicações', 'Instagram', 'Threads', 'YouTube Shorts'] },
    ],
  },
  cta: 'Fale conosco',
  soon: 'Contratação online em breve. Por enquanto, a assinatura é ativada com o nosso time pelo WhatsApp.',
  note: 'Valores em reais, cobrança mensal.',
  addons: {
    title: 'Adicionais', subtitle: 'Amplie a assinatura quando precisar. Cada adicional é cobrado por mês, separado do plano base.',
    client: { title: 'Cliente adicional', description: 'Aumenta em 1 o número de clientes que você gerencia na plataforma.', unit: 'por cliente adicional' },
    posts: { title: 'Publicações adicionais', description: 'Pacotes acumuláveis: contrate mais de um, inclusive de tamanhos diferentes.', pack: '+{n} publicações por mês' },
  },
  builder: {
    title: 'Monte a sua assinatura', subtitle: 'Escolha os adicionais e veja o valor mensal na hora.', clients: 'Clientes adicionais', packs: 'Pacotes de publicações', less: 'Diminuir', more: 'Aumentar',
    resultClients: 'Clientes', resultPosts: 'Publicações por mês', resultTotal: 'Valor mensal', includedBase: 'Plano base incluído', cta: 'Falar sobre esta configuração',
    waMessage: 'Olá! Quero montar uma assinatura do DesignoAI Social Automation: {clientes} cliente(s), {pubs} publicações por mês, {total} por mês.',
  },
  examples: { title: 'Exemplos de assinatura', subtitle: 'Veja como o valor cresce conforme você adiciona clientes e publicações.', headers: ['Configuração', 'Clientes', 'Publicações por mês', 'Valor mensal'], labels: ['Plano base', 'Base + 1 cliente adicional', 'Base + pacote de 10 publicações', 'Base + 1 cliente + 10 publicações', 'Base + 2 clientes + 20 publicações', 'Base + 4 clientes + 50 publicações'] },
  rule: { title: 'Como contamos as publicações', text: 'Um conteúdo publicado ao mesmo tempo em várias redes sociais consome apenas 1 publicação da franquia. A contagem é feita pelo conteúdo criado, e não pelo número de redes.', example: 'Exemplo: o mesmo conteúdo publicado no Instagram, no Threads e no YouTube Shorts conta como 1 publicação, e não como 3.' },
  final: { title: 'Dúvidas sobre a sua configuração?', text: 'Fale com a gente e montamos a assinatura com você.', waMessage: 'Olá! Gostaria de ajuda para montar a assinatura do DesignoAI Social Automation.' },
};

export default planosSocial;
