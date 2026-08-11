import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/i18n/I18nProvider';
import { BASE_URL, HTML_LANG, LOCALES, OG_LOCALE, DEFAULT_LOCALE } from '@/i18n/config';
import { allLocalizedPaths, pathFor, type PageKey } from '@/i18n/routes';

interface SEOHeadProps {
  title?: string;
  description?: string;
  /** Optional explicit path; normally derived from the current page + locale. */
  path?: string;
  page?: PageKey;
  image?: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const SEOHead = ({
  title,
  description,
  path,
  page,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}: SEOHeadProps) => {
  const { t, locale, pageKey } = useI18n();

  const activePage = page || pageKey;
  const siteName = t('seo.siteName');
  const resolvedDescription = description || t('seo.defaultDescription');
  const fullTitle = title ? `${title} | ${siteName}` : t('seo.defaultTitle');

  const relativePath = activePage ? pathFor(activePage, locale) : path || pathFor('home', locale);
  const canonicalUrl = `${BASE_URL}${relativePath === '/' ? '' : relativePath}`;

  const alternates = activePage ? allLocalizedPaths(activePage) : null;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DesignoAI',
    url: BASE_URL,
    logo: `${BASE_URL}/android-chrome-512x512.png`,
    description: t('seo.orgDescription'),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-94796-8158',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: ['Portuguese', 'English', 'Spanish', 'French'],
    },
    sameAs: ['https://www.instagram.com/designoai.br'],
  };

  return (
    <Helmet>
      <html lang={HTML_LANG[locale]} />
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <meta name="author" content="DesignoAI" />
      <link rel="canonical" href={canonicalUrl} />

      {alternates &&
        alternates.map((alt) => (
          <link
            key={alt.locale}
            rel="alternate"
            hrefLang={HTML_LANG[alt.locale]}
            href={`${BASE_URL}${alt.path === '/' ? '' : alt.path}`}
          />
        ))}
      {alternates && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${BASE_URL}${
            pathFor(activePage as PageKey, DEFAULT_LOCALE) === '/'
              ? ''
              : pathFor(activePage as PageKey, DEFAULT_LOCALE)
          }`}
        />
      )}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={t('seo.imageAlt')} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={OG_LOCALE[locale]} />
      {LOCALES.filter((l) => l !== locale).map((l) => (
        <meta key={l} property="og:locale:alternate" content={OG_LOCALE[l]} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={image} />

      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <meta name="theme-color" content="#ffffff" />

      <script type="application/ld+json">{JSON.stringify(jsonLd || defaultJsonLd)}</script>
    </Helmet>
  );
};

export default SEOHead;
