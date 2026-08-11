const home = {
  hero: {
    eyebrow: 'Estúdio de marketing e design',
    title: 'Marcas construídas com clareza, método e inteligência.',
    description:
      'Estratégia, identidade visual e crescimento digital para empresas que querem parecer e operar no seu melhor nível.',
    ctaPrimary: 'Solicitar proposta',
    ctaSecondary: 'Ver serviços',
    imageAlt: 'Mesa de trabalho de um estúdio de design com luz natural',
    stats: [
      { k: '500+', v: 'Projetos entregues' },
      { k: 'Soluções', v: 'Tecnologia & inovação' },
      { k: '4.9/5', v: 'Satisfação média' },
    ],
  },
  clientLogos: {
    eyebrow: 'Setores atendidos',
    segments: [
      'E-commerce', 'Saúde', 'Advocacia', 'Gastronomia', 'Educação',
      'Tecnologia', 'Imobiliário', 'Fitness', 'Moda', 'Indústria',
      'Consultoria', 'Veterinária', 'Estética', 'Contabilidade',
    ],
  },
  services: {
    eyebrow: 'Serviços',
    title: 'Um conjunto completo, entregue com o mesmo padrão.',
    description:
      'Cada frente de trabalho é conduzida por especialistas e integrada a um único plano de crescimento.',
    learnMore: 'Saber mais',
    seeAll: 'Ver todos os serviços',
    items: [
      {
        title: 'Criação de Conteúdo',
        description: 'Textos, imagens e peças gráficas produzidas com direção editorial consistente.',
        page: 'criacaoConteudo',
      },
      {
        title: 'Análise de Dados',
        description: 'Leitura clara de desempenho, com indicadores que sustentam decisões.',
        page: 'analiseDados',
      },
      {
        title: 'Design Automatizado',
        description: 'Sistemas visuais escaláveis para publicações, campanhas e materiais.',
        page: 'designAutomatizado',
      },
      {
        title: 'Gestão de Redes Sociais',
        description: 'Planejamento, produção e publicação com ritmo e coerência de marca.',
        page: 'gestaoRedesSociais',
      },
      {
        title: 'SEO Inteligente',
        description: 'Arquitetura, conteúdo e performance técnica para busca orgânica.',
        page: 'seoInteligente',
      },
      {
        title: 'Estratégias Personalizadas',
        description: 'Roteiros de crescimento desenhados a partir do seu contexto real.',
        page: 'estrategiasPersonalizadas',
      },
    ],
  },
  features: {
    eyebrow: 'Por que a DesignoAI',
    title: 'Trabalho de estúdio, com a disciplina de uma operação.',
    imageAlt1: 'Equipe revisando layouts impressos sobre uma mesa branca',
    imageAlt2: 'Celular e livreto de identidade visual sobre superfície clara',
    subtitle1: 'Tempo bem investido em cada campanha.',
    subtitle2: 'Resultados mensuráveis e consistentes.',
    ctaResources: 'Conhecer os recursos',
    blockOne: [
      { title: 'Operação organizada', description: 'Processos claros substituem retrabalho e improviso.' },
      { title: 'Personalização em escala', description: 'Mensagens ajustadas a cada segmento do seu público.' },
      { title: 'Leitura antecipada', description: 'Tendências identificadas antes de virarem custo.' },
    ],
    blockTwo: [
      { title: 'Painel único', description: 'Todos os indicadores reunidos em um só lugar.' },
      { title: 'Relatórios objetivos', description: 'Resumos semanais com decisões recomendadas.' },
      { title: 'Melhoria contínua', description: 'Ciclos curtos de teste, revisão e ajuste.' },
    ],
  },
  howItWorks: {
    eyebrow: 'Processo',
    title: 'Quatro etapas, sem etapas invisíveis.',
    description: 'Você acompanha cada fase com escopo, prazo e responsável definidos desde o início.',
    cta: 'Iniciar um projeto',
    steps: [
      { number: '01', title: 'Diagnóstico', description: 'Analisamos mercado, concorrência e o estado atual da sua marca.' },
      { number: '02', title: 'Estratégia', description: 'Definimos posicionamento, prioridades e metas mensuráveis.' },
      { number: '03', title: 'Produção', description: 'Criamos conteúdo, design e materiais dentro de um sistema único.' },
      { number: '04', title: 'Distribuição', description: 'Publicamos, acompanhamos e refinamos com base em dados.' },
    ],
  },
  pricing: {
    eyebrow: 'Planos',
    title: 'Escopos claros, orçamento sob consulta.',
    description: 'Cada plano é ajustado ao seu momento. Sem taxas escondidas e sem contrato de longo prazo.',
    highlightLabel: 'Completo',
    priceLabel: 'Orçamento sob consulta',
    ctaQuote: 'Solicitar orçamento',
    ctaDetails: 'Ver detalhes',
    ctaCalculator: 'Montar seu escopo no seletor de serviços',
    waQuote: 'Olá! Tenho interesse no plano {plan} da DesignoAI. Gostaria de solicitar um orçamento.',
    plans: [
      {
        name: 'Start',
        summary: 'Para negócios que precisam de presença visual consistente.',
        features: [
          '12 artes premium personalizadas',
          'Direção criativa assistida por IA',
          'Sugestão de temas por tendências',
          'Ciclo de revisão e aprovação',
          'Atendimento via WhatsApp',
        ],
      },
      {
        name: 'Plus',
        summary: 'Volume maior de produção e planejamento mais amplo.',
        features: [
          '18 artes premium personalizadas',
          'Direção criativa assistida por IA',
          'Sugestão de temas por tendências',
          'Ciclo de revisão e aprovação',
          'Atendimento via WhatsApp',
        ],
      },
      {
        name: 'Fusion',
        summary: 'Marketing digital, material físico e automação em um só plano.',
        highlight: true,
        features: [
          'Gestão de redes sociais (12 posts/mês)',
          'Stories diários programados',
          'Design gráfico e copywriting',
          'Tráfego pago e site responsivo',
          'Cartão de visita digital',
          'Sessão de fotos e vídeo',
          'Relatórios de desempenho',
          'Assistente de WhatsApp com IA',
        ],
      },
    ],
  },
  calculator: {
    eyebrow: 'Seletor de serviços',
    title: 'Monte seu escopo em um minuto.',
    description: 'Selecione um pacote e os adicionais desejados. Enviamos a proposta com valores fechados.',
    packagesTitle: 'Pacotes',
    addonsTitle: 'Adicionais',
    summaryTitle: 'Resumo',
    packageLabel: 'Pacote',
    addonsLabel: 'Adicionais',
    noSelection: 'Nenhum item selecionado ainda. Escolha um pacote para começar.',
    itemsSelectedSingular: '{count} item selecionado · orçamento sob consulta',
    itemsSelectedPlural: '{count} itens selecionados · orçamento sob consulta',
    quoteCta: 'Solicitar orçamento',
    talkPrompt: 'Prefere conversar antes?',
    talkCta: 'Falar com um consultor',
    waIntro: 'Olá! Gostaria de solicitar um orçamento para:',
    waPackageLabel: 'Pacote',
    waAddonsLabel: 'Adicionais',
    waClosing: 'Aguardo o orçamento personalizado.',
    waConsultant: 'Olá! Gostaria de falar com um consultor sobre os serviços da DesignoAI.',
    packages: [
      { id: 'start', name: 'Pacote Start', description: '12 artes premium personalizadas' },
      { id: 'plus', name: 'Pacote Plus', description: '18 artes premium personalizadas' },
      { id: 'fusion', name: 'Pacote Fusion', description: 'Digital, físico e automação' },
      { id: 'studio', name: 'DesignoAI Studio', description: 'Produção fotográfica assistida por IA' },
    ],
    addons: [
      { id: 'cards', name: 'Impressão de cartões de visita' },
      { id: 'catalog', name: 'Catálogo digital interativo' },
      { id: 'reels', name: 'Vídeos Reels extras' },
      { id: 'landing', name: 'Landing page de campanha' },
      { id: 'consulting', name: 'Consultoria estratégica mensal' },
      { id: 'email', name: 'Criação de e-mail profissional' },
      { id: 'gmb', name: 'Google Meu Negócio otimizado' },
    ],
  },
  testimonials: {
    eyebrow: 'Depoimentos',
    title: 'O que dizem quem trabalha com a gente.',
    items: [
      {
        content:
          'A DesignoAI reorganizou completamente nossa comunicação. O que antes levava dias hoje sai em horas, com muito mais consistência.',
        author: 'Juliana Mendes',
        role: 'Marketing Manager, TechSoft',
      },
      {
        content:
          'A leitura que a equipe faz do nosso público é precisa. Crescemos 230% em engajamento no primeiro trimestre.',
        author: 'Ricardo Torres',
        role: 'CEO, Inova Digital',
      },
      {
        content:
          'Ganhamos tempo, previsibilidade e uma marca que finalmente representa o nível do nosso serviço.',
        author: 'Camila Ferreira',
        role: 'Diretora, Studio Aurora',
      },
    ],
  },
  faq: {
    eyebrow: 'Dúvidas frequentes',
    title: 'Tudo transparente, desde o início.',
    items: [
      {
        q: 'Como funciona o início de um projeto?',
        a: 'Começamos com uma conversa de diagnóstico, seguida de uma proposta com escopo, cronograma e investimento. Aprovada a proposta, a produção inicia em até cinco dias úteis.',
      },
      {
        q: 'Existe contrato de fidelidade?',
        a: 'Não. Trabalhamos com ciclos mensais renováveis. Você permanece porque os resultados justificam, não porque um contrato obriga.',
      },
      {
        q: 'Quem cuida do meu projeto no dia a dia?',
        a: 'Cada cliente tem um responsável de conta e uma equipe fixa de criação. Você fala sempre com quem executa.',
      },
      {
        q: 'Vocês atendem empresas de qualquer segmento?',
        a: 'Atendemos negócios de serviços, varejo, saúde, educação, tecnologia e indústria. Se não fizer sentido para o seu caso, dizemos isso na primeira conversa.',
      },
      {
        q: 'Como o desempenho é acompanhado?',
        a: 'Você recebe relatórios periódicos com indicadores de alcance, engajamento e conversão, além de recomendações para o ciclo seguinte.',
      },
    ],
  },
  cta: {
    eyebrow: 'Próximo passo',
    title: 'Pronto para elevar o padrão da sua marca?',
    description: 'Mais de 500 empresas já reorganizaram sua presença digital com a DesignoAI.',
    ctaPrimary: 'Solicitar proposta',
    ctaSecondary: 'Falar com especialista',
    waMessage: 'Olá! Gostaria de falar com um especialista da DesignoAI.',
  },
};

export default home;
