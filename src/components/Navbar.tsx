import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import ActionButton from '@/components/ActionButton';
import LocaleLink from '@/components/LocaleLink';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useI18n } from '@/i18n/I18nProvider';
import type { PageKey } from '@/i18n/routes';

const primaryLinks: { page: PageKey; key: string }[] = [
  { page: 'studio', key: 'nav.links.studio' },
  { page: 'sitesIa', key: 'nav.links.sitesIa' },
  { page: 'aiSdr', key: 'nav.links.aiSdr' },
  { page: 'services', key: 'nav.links.services' },
  { page: 'recursos', key: 'nav.links.recursos' },
];

const anchors = [
  { hash: '#how-it-works', key: 'nav.anchors.process' },
  { hash: '#pricing', key: 'nav.anchors.pricing' },
  { hash: '#contact', key: 'nav.anchors.contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { t, path } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const openWhatsApp = () =>
    window.open('https://wa.me/5511947968158?text=' + encodeURIComponent(t('common.wa.default')), '_blank');

  const homePath = path('home');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background transition-colors duration-[220ms] ${
        scrolled ? 'border-b border-border' : 'border-b border-transparent'
      }`}
    >
      <div className="container-editorial">
        <div className="flex h-[72px] items-center justify-between">
          <LocaleLink
            page="home"
            aria-label={t('nav.aria.home')}
            className="text-[17px] font-bold tracking-[-0.03em] text-foreground"
          >
            Designo<span className="text-muted-foreground">AI</span>
          </LocaleLink>

          <nav className="hidden items-center gap-8 lg:flex">
            {primaryLinks.map((l) => (
              <LocaleLink
                key={l.page}
                page={l.page}
                className={`text-sm transition-colors duration-[220ms] ${
                  pathname === path(l.page)
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(l.key)}
              </LocaleLink>
            ))}
            {anchors.map((l) => (
              <Link
                key={l.hash}
                to={`${homePath}${l.hash}`}
                className="text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
              >
                {t(l.key)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
            <ActionButton variant="quiet" size="sm" onClick={openWhatsApp}>
              {t('common.cta.talkToConsultant')}
            </ActionButton>
            <ActionButton size="sm" onClick={openWhatsApp}>
              {t('common.cta.requestProposal')}
            </ActionButton>
          </div>

          <button
            type="button"
            aria-label={open ? t('nav.aria.closeMenu') : t('nav.aria.openMenu')}
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
                  <LocaleLink
                    key={l.page}
                    page={l.page}
                    className="py-3 text-base text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {t(l.key)}
                  </LocaleLink>
                ))}
                {anchors.map((l) => (
                  <Link
                    key={l.hash}
                    to={`${homePath}${l.hash}`}
                    className="py-3 text-base text-muted-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {t(l.key)}
                  </Link>
                ))}
              </div>
              <div className="mt-6 grid gap-3">
                <LanguageSwitcher variant="block" />
                <ActionButton onClick={openWhatsApp}>{t('common.cta.requestProposal')}</ActionButton>
                <ActionButton variant="secondary" onClick={openWhatsApp}>
                  {t('common.cta.talkToConsultant')}
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
