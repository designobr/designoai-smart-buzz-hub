import Reveal from '@/components/Reveal';

const testimonials = [
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
];

const Testimonials = () => (
  <section className="section border-t border-border">
    <div className="container-editorial">
      <Reveal>
        <div className="max-w-3xl">
          <p className="eyebrow">Depoimentos</p>
          <h2 className="display-2 mt-6 text-foreground">O que dizem quem trabalha com a gente.</h2>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 0.06}>
            <figure className="card-surface card-surface-hover flex h-full flex-col p-10">
              <blockquote className="flex-1 text-lg tracking-[-0.02em] text-foreground">
                “{t.content}”
              </blockquote>
              <figcaption className="mt-10 border-t border-border pt-6">
                <p className="text-sm font-semibold text-foreground">{t.author}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
