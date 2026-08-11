import { useState } from 'react';
import { Instagram, Mail, Phone, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import LocaleLink from '@/components/LocaleLink';
import { useI18n } from '@/i18n/I18nProvider';
import type { PageKey } from '@/i18n/routes';

const solutions: { page: PageKey; key: string }[] = [
  { page: 'aiSdr', key: 'footer.solutions.aiSdr' },
  { page: 'socialMedia', key: 'footer.solutions.socialMedia' },
  { page: 'criacaoConteudo', key: 'footer.solutions.criacaoConteudo' },
  { page: 'seoInteligente', key: 'footer.solutions.seoInteligente' },
  { page: 'emailMarketing', key: 'footer.solutions.emailMarketing' },
  { page: 'analiseDados', key: 'footer.solutions.analiseDados' },
];

const company: { page: PageKey; key: string }[] = [
  { page: 'sobreNos', key: 'footer.company.sobreNos' },
  { page: 'carreiras', key: 'footer.company.carreiras' },
  { page: 'blog', key: 'footer.company.blog' },
  { page: 'casosSucesso', key: 'footer.company.casosSucesso' },
  { page: 'parcerias', key: 'footer.company.parcerias' },
];

const legal: { page: PageKey; key: string }[] = [
  { page: 'termosUso', key: 'footer.legal.termosUso' },
  { page: 'politicaPrivacidade', key: 'footer.legal.politicaPrivacidade' },
  { page: 'cookies', key: 'footer.legal.cookies' },
];

const Footer = () => {
  const { toast } = useToast();
  const { t } = useI18n();
  const [email, setEmail] = useState('');

  const submit = () => {
    if (!email) return;
    toast({
      title: t('footer.newsletter.successTitle'),
      description: t('footer.newsletter.successDescription'),
    });
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
            <p className="mt-5 max-w-sm text-sm text-muted-foreground">{t('footer.tagline')}</p>

            <div className="mt-10 max-w-sm">
              <label htmlFor="newsletter" className="eyebrow">
                {t('footer.newsletter.label')}
              </label>
              <div className="mt-4 flex items-center gap-3">
                <input
                  id="newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && submit()}
                  placeholder={t('footer.newsletter.placeholder')}
                  className="field h-12 rounded-pill"
                />
                <button
                  type="button"
                  onClick={submit}
                  aria-label={t('footer.newsletter.aria')}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-primary text-primary-foreground transition-transform duration-[220ms] hover:-translate-y-0.5"
                >
                  <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 lg:col-span-8">
            <div>
              <p className="eyebrow">{t('footer.headings.solutions')}</p>
              <ul className="mt-6 space-y-4">
                {solutions.map((l) => (
                  <li key={l.page}>
                    <LocaleLink
                      page={l.page}
                      className="text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
                    >
                      {t(l.key)}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">{t('footer.headings.company')}</p>
              <ul className="mt-6 space-y-4">
                {company.map((l) => (
                  <li key={l.page}>
                    <LocaleLink
                      page={l.page}
                      className="text-sm text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
                    >
                      {t(l.key)}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">{t('footer.headings.contact')}</p>
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
          <p className="text-xs text-muted-foreground">{t('footer.copyright')}</p>
          <div className="flex flex-wrap gap-6">
            {legal.map((l) => (
              <LocaleLink
                key={l.page}
                page={l.page}
                className="text-xs text-muted-foreground transition-colors duration-[220ms] hover:text-foreground"
              >
                {t(l.key)}
              </LocaleLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
