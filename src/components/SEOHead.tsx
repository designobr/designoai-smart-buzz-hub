import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = 'DesignoAI';
const BASE_URL = 'https://designoai.com.br';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;
const DEFAULT_DESCRIPTION = 'Agência especializada em criação de sites, social media, SEO e automação com IA.';

const SEOHead = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false,
  jsonLd,
}: SEOHeadProps) => {

  const fullTitle = title ? `${title} | ${SITE_NAME}` : 'DesignoAI | Marketing Digital e Criação de Sites';

  const canonicalUrl = `${BASE_URL}${path}`;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DesignoAI',
    url: BASE_URL,
    logo: `${BASE_URL}/star-icon.svg`,
    description: DEFAULT_DESCRIPTION,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-94796-8158',
      contactType: 'customer service',
      areaServed: 'BR',
      availableLanguage: 'Portuguese',
    },
    sameAs: [
      'https://www.instagram.com/designoai',
      'https://www.linkedin.com/company/designoai',
    ],
  };

  return (
    <Helmet>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content="DesignoAI" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / WhatsApp / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DesignoAI - Marketing Digital e Criação de Sites" />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Extra SEO */}
      <meta
        name="robots"
        content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}
      />

      <meta name="theme-color" content="#ffffff" />
      <html lang="pt-BR" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
