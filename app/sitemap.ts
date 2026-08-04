import type { MetadataRoute } from 'next';

import { site } from '@/lib/data/site';

const staticRoutes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/process', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/industries', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.6, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((route) => ({
    url: new URL(route.path, site.url).toString(),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
