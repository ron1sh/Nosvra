import type { Metadata } from 'next';

import { contact, site, socials } from '@/lib/data/site';

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
}

/**
 * Single place that builds page metadata: canonical URL, Open Graph and
 * Twitter cards stay consistent because nothing constructs them by hand.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = 'website',
  publishedTime,
}: PageMetaInput): Metadata {
  const url = new URL(path, site.url).toString();

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} — ${site.name}`,
      description,
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.longDescription,
    foundingDate: String(site.founded),
    email: contact.email,
    telephone: contact.phone,
    sameAs: socials.map((social) => social.href),
    areaServed: 'Worldwide',
    knowsAbout: [
      'Web development',
      'Business management systems',
      'Process automation',
      'Product catalog software',
      'Technology consulting',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { '@id': `${site.url}/#organization` },
    inLanguage: 'en',
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: new URL(entry.path, site.url).toString(),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
