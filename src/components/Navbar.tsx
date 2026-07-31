import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ActionButton from '@/components/ActionButton';

const primaryLinks = [
  { to: '/studio', label: 'Studio' },
  { to: '/sites-ia', label: 'Sites IA' },
  { to: '/ai-sdr', label: 'AI SDR' },
  { to: '/services', label: 'Serviços' },
  { to: '/recursos', label: 'Recursos' },
];

const anchorLinks = [
  { href: '/#how-it-works', label: 'Processo' },
  { href: '/#pricing', label: 'Planos' },
  { href: '/#contact', label: 'Contato' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const openWhatsApp = () =>
    window.open(
      'https://wa.me/5511947968158?text=' +
        encodeURIComponent('Olá! Gostaria de conversar sobre um projeto com a DesignoAI.'),
      '_blank'
    );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background transition-colors duration-[220ms] ${
        scrolled ? 'border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <div className="container-editorial">
        <div className="flex h-[72px] items-center justify-between">
          <Link to="/" className="text-[17px] font-bold tracking-[-0.03em] text-foreground">
            Designo<span className="text-muted-foreground">AI</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {primaryLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm transition-colors duration-[220ms] ${
                  pathname === l.to ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {l.label}
              </Link>
            ))}
            {anchorLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ActionButton variant="quiet" size="sm" onClick={openWhatsApp}>
              Falar com consultor
            </ActionButton>
            <ActionButton size="sm" onClick={openWhatsApp}>
              Solicitar proposta
            </ActionButton>
          </div>

          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center rounded-pill border border-border text-foreground lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5" strokeWidth={2} /> : <Menu className="h-5 w-5" strokeWidth={2} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="container-editorial py-6">
              <div className="grid gap-1">
                {primaryLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="py-3 text-base text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                {anchorLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="py-3 text-base text-muted-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                <ActionButton onClick={openWhatsApp}>Solicitar proposta</ActionButton>
                <ActionButton variant="secondary" onClick={openWhatsApp}>
                  Falar com consultor
                </ActionButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
