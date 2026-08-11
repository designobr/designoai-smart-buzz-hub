const home = {
  hero: {
    eyebrow: 'Estudio de marketing y diseño',
    title: 'Marcas construidas con claridad, método e inteligencia.',
    description:
      'Estrategia, identidad visual y crecimiento digital para empresas que quieren verse y operar en su mejor nivel.',
    ctaPrimary: 'Solicitar propuesta',
    ctaSecondary: 'Ver servicios',
    imageAlt: 'Mesa de trabajo de un estudio de diseño con luz natural',
    stats: [
      { k: '500+', v: 'Proyectos entregados' },
      { k: 'Soluciones', v: 'Tecnología e innovación' },
      { k: '4.9/5', v: 'Satisfacción promedio' },
    ],
  },
  clientLogos: {
    eyebrow: 'Sectores atendidos',
    segments: [
      'E-commerce', 'Salud', 'Abogacía', 'Gastronomía', 'Educación',
      'Tecnología', 'Inmobiliario', 'Fitness', 'Moda', 'Industria',
      'Consultoría', 'Veterinaria', 'Estética', 'Contabilidad',
    ],
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Un conjunto completo, entregado con el mismo estándar.',
    description: 'Cada frente de trabajo está a cargo de especialistas e integrado en un único plan de crecimiento.',
    learnMore: 'Saber más',
    seeAll: 'Ver todos los servicios',
    items: [
      {
        title: 'Creación de Contenido',
        description: 'Textos, imágenes y piezas gráficas producidas con dirección editorial consistente.',
        page: 'criacaoConteudo',
      },
      {
        title: 'Análisis de Datos',
        description: 'Lectura clara de desempeño, con indicadores que respaldan decisiones.',
        page: 'analiseDados',
      },
      {
        title: 'Diseño Automatizado',
        description: 'Sistemas visuales escalables para publicaciones, campañas y materiales.',
        page: 'designAutomatizado',
      },
      {
        title: 'Gestión de Redes Sociales',
        description: 'Planificación, producción y publicación con ritmo y coherencia de marca.',
        page: 'gestaoRedesSociais',
      },
      {
        title: 'SEO Inteligente',
        description: 'Arquitectura, contenido y rendimiento técnico para la búsqueda orgánica.',
        page: 'seoInteligente',
      },
      {
        title: 'Estrategias Personalizadas',
        description: 'Hojas de ruta de crecimiento diseñadas a partir de tu contexto real.',
        page: 'estrategiasPersonalizadas',
      },
    ],
  },
  features: {
    eyebrow: 'Por qué DesignoAI',
    title: 'Trabajo de estudio, con la disciplina de una operación.',
    imageAlt1: 'Equipo revisando diseños impresos sobre una mesa blanca',
    imageAlt2: 'Celular y folleto de identidad visual sobre superficie clara',
    subtitle1: 'Tiempo bien invertido en cada campaña.',
    subtitle2: 'Resultados medibles y consistentes.',
    ctaResources: 'Conocer los recursos',
    blockOne: [
      { title: 'Operación organizada', description: 'Procesos claros sustituyen el retrabajo y la improvisación.' },
      { title: 'Personalización a escala', description: 'Mensajes ajustados a cada segmento de tu público.' },
      { title: 'Lectura anticipada', description: 'Tendencias identificadas antes de que se conviertan en costo.' },
    ],
    blockTwo: [
      { title: 'Panel único', description: 'Todos los indicadores reunidos en un solo lugar.' },
      { title: 'Informes objetivos', description: 'Resúmenes semanales con decisiones recomendadas.' },
      { title: 'Mejora continua', description: 'Ciclos cortos de prueba, revisión y ajuste.' },
    ],
  },
  howItWorks: {
    eyebrow: 'Proceso',
    title: 'Cuatro etapas, sin pasos invisibles.',
    description: 'Sigues cada fase con alcance, plazo y responsable definidos desde el inicio.',
    cta: 'Iniciar un proyecto',
    steps: [
      { number: '01', title: 'Diagnóstico', description: 'Analizamos el mercado, la competencia y el estado actual de tu marca.' },
      { number: '02', title: 'Estrategia', description: 'Definimos posicionamiento, prioridades y metas medibles.' },
      { number: '03', title: 'Producción', description: 'Creamos contenido, diseño y materiales dentro de un sistema único.' },
      { number: '04', title: 'Distribución', description: 'Publicamos, monitoreamos y ajustamos con base en datos.' },
    ],
  },
  pricing: {
    eyebrow: 'Planes',
    title: 'Alcances claros, presupuesto bajo consulta.',
    description: 'Cada plan se ajusta a tu momento. Sin tarifas ocultas y sin contrato de largo plazo.',
    highlightLabel: 'Completo',
    priceLabel: 'Presupuesto bajo consulta',
    ctaQuote: 'Solicitar presupuesto',
    ctaDetails: 'Ver detalles',
    ctaCalculator: 'Arma tu alcance en el selector de servicios',
    waQuote: 'Hola! Me interesa el plan {plan} de DesignoAI. Me gustaría solicitar un presupuesto.',
    plans: [
      {
        name: 'Start',
        summary: 'Para negocios que necesitan presencia visual consistente.',
        features: [
          '12 artes premium personalizadas',
          'Dirección creativa asistida por IA',
          'Sugerencia de temas por tendencias',
          'Ciclo de revisión y aprobación',
          'Atención vía WhatsApp',
        ],
      },
      {
        name: 'Plus',
        summary: 'Mayor volumen de producción y planificación más amplia.',
        features: [
          '18 artes premium personalizadas',
          'Dirección creativa asistida por IA',
          'Sugerencia de temas por tendencias',
          'Ciclo de revisión y aprobación',
          'Atención vía WhatsApp',
        ],
      },
      {
        name: 'Fusion',
        summary: 'Marketing digital, material físico y automatización en un solo plan.',
        highlight: true,
        features: [
          'Gestión de redes sociales (12 publicaciones al mes)',
          'Historias diarias programadas',
          'Diseño gráfico y copywriting',
          'Tráfico pago y sitio web responsivo',
          'Tarjeta de presentación digital',
          'Sesión de fotos y video',
          'Informes de desempeño',
          'Asistente de WhatsApp con IA',
        ],
      },
    ],
  },
  calculator: {
    eyebrow: 'Selector de servicios',
    title: 'Arma tu alcance en un minuto.',
    description: 'Selecciona un paquete y los adicionales que desees. Enviamos la propuesta con valores cerrados.',
    packagesTitle: 'Paquetes',
    addonsTitle: 'Adicionales',
    summaryTitle: 'Resumen',
    packageLabel: 'Paquete',
    addonsLabel: 'Adicionales',
    noSelection: 'Aún no hay ningún elemento seleccionado. Elige un paquete para comenzar.',
    itemsSelectedSingular: '{count} elemento seleccionado, presupuesto bajo consulta',
    itemsSelectedPlural: '{count} elementos seleccionados, presupuesto bajo consulta',
    quoteCta: 'Solicitar presupuesto',
    talkPrompt: 'Prefieres conversar antes?',
    talkCta: 'Hablar con un consultor',
    waIntro: 'Hola! Me gustaría solicitar un presupuesto para:',
    waPackageLabel: 'Paquete',
    waAddonsLabel: 'Adicionales',
    waClosing: 'Quedo a la espera del presupuesto personalizado.',
    waConsultant: 'Hola! Me gustaría hablar con un consultor sobre los servicios de DesignoAI.',
    packages: [
      { id: 'start', name: 'Paquete Start', description: '12 artes premium personalizadas' },
      { id: 'plus', name: 'Paquete Plus', description: '18 artes premium personalizadas' },
      { id: 'fusion', name: 'Paquete Fusion', description: 'Digital, físico y automatización' },
      { id: 'studio', name: 'DesignoAI Studio', description: 'Producción fotográfica asistida por IA' },
    ],
    addons: [
      { id: 'cards', name: 'Impresión de tarjetas de presentación' },
      { id: 'catalog', name: 'Catálogo digital interactivo' },
      { id: 'reels', name: 'Videos Reels adicionales' },
      { id: 'landing', name: 'Landing page de campaña' },
      { id: 'consulting', name: 'Consultoría estratégica mensual' },
      { id: 'email', name: 'Creación de correo profesional' },
      { id: 'gmb', name: 'Google Mi Negocio optimizado' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen quienes trabajan con nosotros.',
    items: [
      {
        content:
          'DesignoAI reorganizó por completo nuestra comunicación. Lo que antes tomaba días hoy sale en horas, con mucha más consistencia.',
        author: 'Juliana Mendes',
        role: 'Marketing Manager, TechSoft',
      },
      {
        content:
          'La lectura que el equipo hace de nuestro público es precisa. Crecimos 230% en engagement en el primer trimestre.',
        author: 'Ricardo Torres',
        role: 'CEO, Inova Digital',
      },
      {
        content:
          'Ganamos tiempo, previsibilidad y una marca que finalmente representa el nivel de nuestro servicio.',
        author: 'Camila Ferreira',
        role: 'Directora, Studio Aurora',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Todo transparente, desde el inicio.',
    items: [
      {
        q: 'Cómo funciona el inicio de un proyecto?',
        a: 'Empezamos con una conversación de diagnóstico, seguida de una propuesta con alcance, cronograma e inversión. Aprobada la propuesta, la producción inicia en hasta cinco días hábiles.',
      },
      {
        q: 'Existe contrato de permanencia?',
        a: 'No. Trabajamos con ciclos mensuales renovables. Te quedas porque los resultados lo justifican, no porque un contrato lo obligue.',
      },
      {
        q: 'Quién se encarga de mi proyecto en el día a día?',
        a: 'Cada cliente tiene un responsable de cuenta y un equipo fijo de creación. Siempre hablas con quien ejecuta.',
      },
      {
        q: 'Atienden empresas de cualquier sector?',
        a: 'Atendemos negocios de servicios, retail, salud, educación, tecnología e industria. Si no tiene sentido para tu caso, te lo decimos en la primera conversación.',
      },
      {
        q: 'Cómo se monitorea el desempeño?',
        a: 'Recibes informes periódicos con indicadores de alcance, engagement y conversión, además de recomendaciones para el siguiente ciclo.',
      },
    ],
  },
  cta: {
    eyebrow: 'Próximo paso',
    title: 'Listo para elevar el estándar de tu marca?',
    description: 'Más de 500 empresas ya reorganizaron su presencia digital con DesignoAI.',
    ctaPrimary: 'Solicitar propuesta',
    ctaSecondary: 'Hablar con especialista',
    waMessage: 'Hola! Me gustaría hablar con un especialista de DesignoAI.',
  },
};

export default home;
