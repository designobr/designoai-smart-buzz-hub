const planosSocial = {
  seo: { title: 'Valores de DesignoAI Social Automation', description: 'Un plan base de R$ 149,90 al mes con 1 cliente, hasta 4 cuentas y 15 publicaciones. Añade clientes y paquetes de publicaciones según lo necesites.' },
  hero: { badge: 'Valores', subtitle: 'Un plan base simple y complementos que contratas solo cuando los necesitas. Arma una suscripción a la medida de tu operación.' },
  base: {
    tag: 'Plan base', name: 'DesignoAI', period: '/mes', stats: ['cliente', 'cuentas de redes sociales', 'publicaciones al mes'],
    groups: [
      { title: 'Planificación y creación', items: ['Planificación de contenido', 'Creación de posts y guiones', 'Textos y descripciones', 'Hashtags estratégicos', 'Calendario de contenido', 'Hasta 2 solicitudes de cambio por contenido'] },
      { title: 'Publicación', items: ['Programación automática de las publicaciones', 'Instagram', 'Threads', 'YouTube Shorts'] },
    ],
  },
  cta: 'Contáctanos',
  soon: 'La contratación en línea llegará pronto. Por ahora, la suscripción se activa con nuestro equipo por WhatsApp.',
  note: 'Valores en reales brasileños, cobro mensual.',
  addons: {
    title: 'Complementos', subtitle: 'Amplía la suscripción cuando lo necesites. Cada complemento se cobra por mes, aparte del plan base.',
    client: { title: 'Cliente adicional', description: 'Aumenta en 1 el número de clientes que gestionas en la plataforma.', unit: 'por cliente adicional' },
    posts: { title: 'Publicaciones adicionales', description: 'Paquetes acumulables: contrata más de uno, incluso de tamaños distintos.', pack: '+{n} publicaciones al mes' },
  },
  builder: {
    title: 'Arma tu suscripción', subtitle: 'Elige los complementos y mira el valor mensual al instante.', clients: 'Clientes adicionales', packs: 'Paquetes de publicaciones', less: 'Disminuir', more: 'Aumentar',
    resultClients: 'Clientes', resultPosts: 'Publicaciones al mes', resultTotal: 'Valor mensual', includedBase: 'Plan base incluido', cta: 'Hablar de esta configuración',
    waMessage: '¡Hola! Quiero armar una suscripción de DesignoAI Social Automation: {clientes} cliente(s), {pubs} publicaciones al mes, {total} al mes.',
  },
  examples: { title: 'Ejemplos de suscripción', subtitle: 'Mira cómo crece el valor al añadir clientes y publicaciones.', headers: ['Configuración', 'Clientes', 'Publicaciones al mes', 'Valor mensual'], labels: ['Plan base', 'Base + 1 cliente adicional', 'Base + paquete de 10 publicaciones', 'Base + 1 cliente + 10 publicaciones', 'Base + 2 clientes + 20 publicaciones', 'Base + 4 clientes + 50 publicaciones'] },
  rule: { title: 'Cómo contamos las publicaciones', text: 'Un contenido publicado al mismo tiempo en varias redes sociales consume solo 1 publicación de la franquicia. La cuenta se hace por el contenido creado, no por el número de redes.', example: 'Ejemplo: el mismo contenido publicado en Instagram, Threads y YouTube Shorts cuenta como 1 publicación, no como 3.' },
  final: { title: '¿Dudas sobre tu configuración?', text: 'Habla con nosotros y armamos la suscripción contigo.', waMessage: '¡Hola! Quisiera ayuda para armar la suscripción de DesignoAI Social Automation.' },
};

export default planosSocial;
