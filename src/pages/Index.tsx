import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent, type MouseEvent } from 'react';
import { Menu, X } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import LocaleLink from '@/components/LocaleLink';
import { useI18n } from '@/i18n/I18nProvider';
import type { Locale } from '@/i18n/config';
import type { PageKey } from '@/i18n/routes';
import logoBlue from '@/assets/home/logo-blue.png.asset.json';
import managementVideo from '@/assets/designoai-processo-redes-sociais.mp4.asset.json';
import compatibleManagementVideo from '@/assets/designoai-processo-redes-sociais.webm.asset.json';
import managementPoster from '@/assets/designoai-processo-redes-sociais-poster.jpg.asset.json';
import { HOME_COPY, type ServiceKey } from './home/homeCopy';
import { CtaIllustration, HeroIllustration, HomeSprite, ServiceIllustration } from './home/HomeIllustrations';
import './home/home-editorial.css';

const CALENDLY_URL = 'https://calendly.com/suportedesigno/reuniao-de-apresentacao';
const WA_URL = 'https://wa.me/5511947968158';
const PLATFORMS = ['Instagram', 'Facebook', 'TikTok', 'YouTube', 'Google Ads', 'WhatsApp'];

const HEADER_PAGES: { page: PageKey; key: string }[] = [
  { page: 'studio', key: 'nav.links.studio' },
  { page: 'sitesIa', key: 'nav.links.sitesIa' },
  { page: 'aiSdr', key: 'nav.links.aiSdr' },
  { page: 'services', key: 'nav.links.services' },
  { page: 'recursos', key: 'nav.links.recursos' },
  { page: 'planosSocial', key: 'nav.anchors.pricing' },
];

const FOOTER_PAGES: { page: PageKey; key: string }[] = [
  { page: 'sobreNos', key: 'footer.company.sobreNos' },
  { page: 'casosSucesso', key: 'footer.company.casosSucesso' },
  { page: 'blog', key: 'footer.company.blog' },
  { page: 'politicaPrivacidade', key: 'footer.legal.politicaPrivacidade' },
  { page: 'termosUso', key: 'footer.legal.termosUso' },
];

interface ServiceConfig {
  key: ServiceKey;
  variant: 'light' | 'dark';
  delay: string;
  page: PageKey;
  video?: { src: string; compatibleSrc: string; poster: string; labelKey: string };
}

const SERVICES: ServiceConfig[] = [
  {
    key: 'social',
    variant: 'light',
    delay: '0s',
    page: 'gestaoRedesSociais',
    video: {
      src: managementVideo.url,
      compatibleSrc: compatibleManagementVideo.url,
      poster: managementPoster.url,
      labelKey: 'subpages.gestaoRedesSociais.video.videoLabel',
    },
  },
  { key: 'traffic', variant: 'dark', delay: '0.12s', page: 'estrategiasPersonalizadas' },
  { key: 'seo', variant: 'dark', delay: '0s', page: 'seoInteligente' },
  { key: 'design', variant: 'light', delay: '0.12s', page: 'designAutomatizado' },
];

const dStyle = (d: string): CSSProperties => ({ '--d': d } as CSSProperties);

function burstSparks(x: number, y: number) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const colors = ['#0080F8', '#5CC8FF', '#9AD3FF', '#1b1b1b'];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement('span');
    s.className = 'designo-home-spark';
    s.style.left = `${x - 7}px`;
    s.style.top = `${y - 7}px`;
    s.style.background = colors[i % colors.length] ?? '#0080F8';
    document.body.appendChild(s);
    const angle = (Math.PI * 2 * i) / 12 + Math.random() * 0.4;
    const dist = 50 + Math.random() * 60;
    s.animate(
      [
        { transform: 'translate(0,0) scale(0.4) rotate(0deg)', opacity: 1 },
        { transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px) scale(1.2) rotate(${120 + Math.random() * 120}deg)`, opacity: 0 },
      ],
      { duration: 800 + Math.random() * 300, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    ).onfinish = () => s.remove();
  }
}

const Index = () => {
  const { locale, switchLocale, t } = useI18n();
  const copy = HOME_COPY[locale] ?? HOME_COPY['pt-BR'];
  const rootRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const heroArtRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const [activeService, setActiveService] = useState<ServiceKey | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openService = useCallback((key: ServiceKey) => {
    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    setActiveService(key);
    requestAnimationFrame(() => requestAnimationFrame(() => setModalOpen(true)));
  }, []);

  const closeService = useCallback(() => {
    modalVideoRef.current?.pause();
    setModalOpen(false);
    window.setTimeout(() => {
      setActiveService(null);
      lastFocusedRef.current?.focus();
    }, 350);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === 'Escape') setMobileMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!activeService) return;
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === 'Escape') closeService(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [activeService, closeService]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onPointerDown = (e: PointerEvent) => {
      const host = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-ripple]');
      if (!host) return;
      const rect = host.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2.4;
      const dot = document.createElement('span');
      dot.className = 'ripple';
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      dot.style.left = `${e.clientX - rect.left - size / 2}px`;
      dot.style.top = `${e.clientY - rect.top - size / 2}px`;
      host.appendChild(dot);
      dot.addEventListener('animationend', () => dot.remove());
    };
    root.addEventListener('pointerdown', onPointerDown);

    const revealItems = root.querySelectorAll('.reveal');
    let io: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -6% 0px' },
      );
      revealItems.forEach((el) => io?.observe(el));
    } else {
      revealItems.forEach((el) => el.classList.add('in'));
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      headerRef.current?.classList.toggle('stuck', y > 60);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      if (!reduceMotion && heroArtRef.current) {
        heroArtRef.current.style.transform = `translate3d(0, ${Math.min(y, 700) * 0.1}px, 0)`;
      }
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    onScroll();

    return () => {
      root.removeEventListener('pointerdown', onPointerDown);
      io?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleServiceClick = (key: ServiceKey, e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    burstSparks(e.clientX || rect.left + 60, e.clientY || rect.top + 60);
    window.setTimeout(() => openService(key), 320);
  };

  const handleServiceKey = (key: ServiceKey, e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const r = e.currentTarget.getBoundingClientRect();
      burstSparks(r.left + r.width / 2, r.top + r.height / 2);
      window.setTimeout(() => openService(key), 320);
    }
  };

  const scrollToContact = () => {
    window.setTimeout(() => {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    }, 260);
  };

  const activeModalData = activeService ? copy.services.items[activeService] : null;
  const activeServiceConfig = activeService ? SERVICES.find((s) => s.key === activeService) ?? null : null;

  return (
    <div className="designo-home" ref={rootRef}>
      <SEOHead
        path="/"
        description="Estúdio de marketing e design com IA: estratégia, identidade visual, conteúdo, tráfego pago e criação de sites para marcas que querem crescer."
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'DesignoAI',
          url: 'https://designoai.com.br',
          description: 'Estúdio de marketing e design que combina método editorial e inteligência artificial.',
          telephone: '+55-11-94796-8158',
          priceRange: '$$',
          address: { '@type': 'PostalAddress', addressCountry: 'BR' },
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        }}
      />
      <HomeSprite />
      <div className="progress" ref={progressRef} aria-hidden="true" />

      <div className="page">
        <header className="site-header" ref={headerRef}>
          <a href="#home" className="brand" aria-label="Designo, início">
            <img src={logoBlue.url} alt="Designo" width={116} height={28} />
          </a>

          <nav className="nav-links" aria-label="Principal">
            {HEADER_PAGES.map((item) => (
              <LocaleLink key={item.page} page={item.page}>
                {t(item.key)}
              </LocaleLink>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="/app/login" className="nav-login">{copy.nav.login}</a>
            <label className="lang">
              <span className="sr-only">Idioma</span>
              <select value={locale} onChange={(e) => switchLocale(e.target.value as Locale)}>
                <option value="pt-BR">PT</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
            </label>
            <a className="btn btn-outline btn-sm" data-ripple href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <span>{copy.nav.cta}</span>
            </a>
            <button
              type="button"
              className="nav-menu-btn"
              aria-label={mobileMenuOpen ? t('nav.aria.closeMenu') : t('nav.aria.openMenu')}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
            >
              {mobileMenuOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="mobile-menu" aria-label="Menu de páginas">
              {HEADER_PAGES.map((item) => (
                <LocaleLink key={item.page} page={item.page} onClick={() => setMobileMenuOpen(false)}>
                  <span>{t(item.key)}</span>
                  <span aria-hidden="true">↗</span>
                </LocaleLink>
              ))}
              <div className="mobile-menu-actions">
                <a className="btn btn-dark btn-sm" data-ripple href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                  <span>{copy.nav.cta}</span>
                </a>
                <a className="btn btn-outline btn-sm" href="/app/login" onClick={() => setMobileMenuOpen(false)}>
                  <span>{copy.nav.login}</span>
                </a>
              </div>
            </nav>
          )}
        </header>

        <main>
          <section className="hero" id="home">
            <div>
              <h1 className="reveal">{copy.hero.title}</h1>
              <p className="reveal" style={dStyle('0.12s')}>{copy.hero.text}</p>
              <div className="reveal" style={dStyle('0.24s')}>
                <a className="btn btn-dark" data-ripple href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <span>{copy.hero.cta}</span> <span className="arr" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            <div className="hero-art reveal" style={dStyle('0.2s')} ref={heroArtRef} aria-hidden="true">
              <HeroIllustration />
            </div>
          </section>

          <section className="strip" id="sobre">
            <p className="strip-label reveal">{copy.platforms.label}</p>
            <div className="strip-row">
              {PLATFORMS.map((name, i) => (
                <span key={name} className={`mark m${i + 1} reveal`} style={dStyle(`${i * 0.06}s`)}>{name}</span>
              ))}
            </div>
          </section>

          <section className="services" id="servicos">
            <div className="head reveal">
              <h2><span className="hl">{copy.services.title}</span></h2>
              <p>{copy.services.desc}</p>
            </div>
            <div className="svc-grid">
              {SERVICES.map(({ key, variant, delay }) => (
                <article
                  key={key}
                  className={`svc svc-${variant} reveal`}
                  style={dStyle(delay)}
                  data-ripple
                  tabIndex={0}
                  role="button"
                  aria-haspopup="dialog"
                  onClick={(e) => handleServiceClick(key, e)}
                  onKeyDown={(e) => handleServiceKey(key, e)}
                >
                  <h3 className="svc-title"><span className="hl">{copy.services.items[key].title}</span></h3>
                  <div className="svc-art" aria-hidden="true"><ServiceIllustration service={key} /></div>
                  <span className="svc-more">
                    <span className="go"><svg viewBox="0 0 24 24"><use href="#i-arrow" /></svg></span>
                    <span>{copy.services.more}</span>
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className="cta reveal" id="contato">
            <div>
              <h2>{copy.cta.title}</h2>
              <p>{copy.cta.text}</p>
              <div className="cta-btns">
                <a className="btn btn-dark" data-ripple href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <span>{copy.cta.button}</span> <span className="arr" aria-hidden="true">↗</span>
                </a>
                <a className="btn btn-outline" data-ripple href={WA_URL} target="_blank" rel="noopener noreferrer">
                  <span>{copy.cta.whatsapp}</span>
                </a>
              </div>
            </div>
            <div className="cta-art" aria-hidden="true"><CtaIllustration /></div>
          </section>

          <section className="method" id="metodo">
            <div className="head reveal">
              <h2><span className="hl">{copy.method.title}</span></h2>
              <p>{copy.method.desc}</p>
            </div>
            <div className="steps reveal" style={dStyle('0.1s')}>
              {copy.method.steps.map((step, i) => (
                <article key={step.title} className="step" data-ripple onClick={scrollToContact}>
                  <span className="n">0{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <span className="lnk">
                    <span>{copy.method.more}</span>
                    <svg viewBox="0 0 24 24"><use href="#i-arrow" /></svg>
                  </span>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className="footer">
          <a href="#home" className="brand" aria-label="Designo, voltar ao topo">
            <img src={logoBlue.url} alt="Designo" width={100} height={24} />
          </a>
          <div className="foot-links">
            {FOOTER_PAGES.map((item) => (
              <LocaleLink key={item.page} page={item.page}>{t(item.key)}</LocaleLink>
            ))}
            <a href="https://www.instagram.com/designobr" target="_blank" rel="noopener noreferrer">{copy.footer.instagram}</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer">{copy.footer.whatsapp}</a>
            <a href="#home">{copy.footer.top}</a>
          </div>
          <p className="copy">© {new Date().getFullYear()} Designo. {copy.footer.rights}</p>
        </footer>
      </div>

      {activeModalData && activeServiceConfig && (
        <div className={`modal ${modalOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <div className="modal-backdrop" onClick={closeService} />
          <div className={`modal-card ${activeServiceConfig.video ? 'modal-card--video' : ''}`}>
            <button ref={closeBtnRef} className="modal-close" type="button" onClick={closeService} aria-label={copy.closeLabel}>
              &times;
            </button>
            <div className="modal-body">
              <div>
                <h3 id="modalTitle"><span className="hl">{activeModalData.title}</span></h3>
                <p>{activeModalData.modal}</p>
                <ul>{activeModalData.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="modal-actions">
                  <LocaleLink className="btn btn-dark" data-ripple page={activeServiceConfig.page} onClick={closeService}>
                    <span>{copy.pageCta}</span> <span className="arr" aria-hidden="true">↗</span>
                  </LocaleLink>
                  <a className="btn btn-outline" data-ripple href={WA_URL} target="_blank" rel="noopener noreferrer">
                    <span>{copy.waLabel}</span>
                  </a>
                </div>
              </div>
              {activeServiceConfig.video && (
                <figure className="modal-video">
                  <video
                    ref={modalVideoRef}
                    poster={activeServiceConfig.video.poster}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={t(activeServiceConfig.video.labelKey)}
                  >
                    <source src={activeServiceConfig.video.src} type='video/mp4; codecs="avc1.640028, mp4a.40.2"' />
                    <source src={activeServiceConfig.video.compatibleSrc} type="video/webm" />
                    <a href={activeServiceConfig.video.src}>{t(activeServiceConfig.video.labelKey)}</a>
                  </video>
                </figure>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
