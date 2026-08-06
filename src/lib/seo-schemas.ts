const BASE_URL = 'https://designoai.com.br';

const provider = {
  '@type': 'Organization',
  name: 'DesignoAI',
  url: BASE_URL,
};

export const serviceSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${BASE_URL}${path}`,
  serviceType: name,
  provider,
  areaServed: { '@type': 'Country', name: 'Brasil' },
});

export const blogSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name,
  description,
  url: `${BASE_URL}${path}`,
  inLanguage: 'pt-BR',
  publisher: provider,
});
