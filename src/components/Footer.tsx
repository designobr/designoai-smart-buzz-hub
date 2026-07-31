import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const solutions = [
  { to: '/ai-sdr', label: 'AI SDR' },
  { to: '/social-media', label: 'Social Media' },
  { to: '/criacao-conteudo', label: 'Criação de Conteúdo' },
  { to: '/seo-inteligente', label: 'SEO Inteligente' },
  { to: '/email-marketing', label: 'Email Marketing' },
  { to: '/analise-dados', label: 'Análise de Dados' },
];

const company = [
  { to: '/sobre-nos', label: 'Sobre Nós' },
  { to: '/carreiras', label: 'Carreiras' },
  { to: '/blog', label: 'Blog' },
  { to: '/casos-sucesso', label: 'Casos de Sucesso' },
  { to: '/parcerias', label: 'Parcerias' },
];

const legal = [
  { to: '/termos-uso', label: 'Termos de Uso' },
  { to: '/politica-privacidade', label: 'Privacidade' },
  { to: '/cookies', label: 'Cookies' },
];

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const submit = () => {
    if (!email) return;
    toast({ title: 'Inscrição confirmada', description: 'Você receberá nossas novidades por e-mail.' });
    setEmail('');
  };

  return (
    <footer className="border-t border-border">
      <div className="container-editorial py-20 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-[17px] font-bold tracking-[-0.03em] text-foreground">
              Designo<span className="text-muted-foreground">AI</span>
            </p>
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">
              Estúdio de marketing e design que combina método editorial e tecnologia para construir
              marcas duradouras.
            </p>

            <div className="mt-10 max-w-sm">
              <label htmlFor="newsletter" className="eyebrow">
                Newsletter
              </label>
              <div className="mt-4 flex items-center gap-3">
                <input
                  id="newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder="seu@email.com"
                  className="field h-12 rounded-pill"
                />
                <button
                  type="button"
                  onClick={submit}
                  aria-label="Inscrever-se na newsletter"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-primary text-primary-foreground transition-transform duration-[220ms] hover:-translate-y-0.5"
                >
                  <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="eyebrow">Soluções</p>
              <ul className="mt-6 space-y-4">
                {solutions.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Empresa</p>
              <ul className="mt-6 space-y-4">
                {company.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Contato</p>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="mailto:contato@designoai.com.br"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" strokeWidth={2} />
                    contato@designoai.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5511947968158"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2} />
                    +55 11 94796-8158
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/designoai.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
                  >
                    <Instagram className="h-4 w-4" strokeWidth={2} />
                    @designoai.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">© 2026 DesignoAI. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-6">
            {legal.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
