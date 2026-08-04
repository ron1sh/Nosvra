import {
  BarChart3,
  Blocks,
  Briefcase,
  Globe,
  LayoutList,
  LifeBuoy,
  Zap,
} from 'lucide-react';

import type { Service } from '@/types';

/* ============================================================================
 * Services. Copy is derived from the Nosvra pitch deck; pricing for each of
 * these lives in `pricing.ts` so commercial changes never touch this file.
 * ==========================================================================*/

export const services: Service[] = [
  {
    slug: 'professional-websites',
    name: 'Professional websites',
    tagline: 'A trusted front door that works while you sleep',
    summary:
      'Most businesses lose customers before the first conversation — people search, find nothing convincing, and move on. We build fast, credible sites that answer the questions buyers actually ask.',
    accent: 'harbor',
    icon: Globe,
    deliverables: [
      'Content and structure workshop',
      'Design system and page templates',
      'Copy support and image direction',
      'On-page SEO and analytics setup',
      'Editor training and handover',
    ],
    bestFor: 'Businesses with no site, or one that no longer reflects the work.',
    featured: true,
  },
  {
    slug: 'catalog-saas',
    name: 'Catalog software',
    tagline: 'Publish and manage a product catalog without a developer',
    summary:
      'Our own platform for businesses that live and die by their product list. Launch a searchable online catalog in days, update it yourself, and grow from ten products to ten thousand without a rebuild.',
    accent: 'mint',
    icon: LayoutList,
    deliverables: [
      'Catalog structure and category modelling',
      'Bulk product import from spreadsheets',
      'Search, filters and enquiry capture',
      'Role-based access for your team',
      'Hosting, backups and updates included',
    ],
    bestFor: 'Distributors, wholesalers, retailers and manufacturers.',
    featured: true,
  },
  {
    slug: 'business-systems',
    name: 'Business management systems',
    tagline: 'Software shaped around how your team already works',
    summary:
      'Orders in a notebook, stock in a spreadsheet, invoices in someone’s inbox. We replace the patchwork with one system that matches your process instead of forcing you into someone else’s.',
    accent: 'violet',
    icon: Briefcase,
    deliverables: [
      'Process mapping with the people doing the work',
      'Orders, inventory, customers and invoicing',
      'Permissions and audit trails',
      'Data migration from existing tools',
      'Staff onboarding and documentation',
    ],
    bestFor: 'Teams of 5–100 outgrowing spreadsheets and off-the-shelf tools.',
    featured: true,
  },
  {
    slug: 'automation',
    name: 'Process automation',
    tagline: 'Take the repetitive work off your team’s desk',
    summary:
      'Every business has a task someone re-types every week. We find the ones that cost the most hours, automate them carefully, and leave a human in the loop wherever judgement is required.',
    accent: 'orange',
    icon: Zap,
    deliverables: [
      'Time audit of recurring manual tasks',
      'Integrations between existing tools',
      'Scheduled reports and notifications',
      'Document and invoice generation',
      'Failure alerts and manual overrides',
    ],
    bestFor: 'Operations teams losing days to copy-and-paste work.',
  },
  {
    slug: 'custom-software',
    name: 'Custom software',
    tagline: 'When nothing off the shelf actually fits',
    summary:
      'Purpose-built applications for the part of your business that is genuinely different from everyone else’s. Scoped in stages so you see working software early and can change direction cheaply.',
    accent: 'rose',
    icon: Blocks,
    deliverables: [
      'Discovery and technical feasibility review',
      'Architecture and data modelling',
      'Staged delivery with working milestones',
      'Automated testing and CI',
      'Deployment, monitoring and handover docs',
    ],
    bestFor: 'Businesses whose competitive edge lives in their process.',
  },
  {
    slug: 'analytics-reporting',
    name: 'Analytics & reporting',
    tagline: 'Decisions based on numbers, not impressions',
    summary:
      'Pull the numbers already scattered across your tools into one place, then turn them into the three or four figures your weekly meeting actually needs.',
    accent: 'amber',
    icon: BarChart3,
    deliverables: [
      'Definition of the metrics that matter',
      'Data consolidation and cleaning',
      'Operational dashboards',
      'Scheduled email and PDF reports',
      'Training on reading the numbers',
    ],
    bestFor: 'Owners flying on instinct who want a scoreboard.',
  },
  {
    slug: 'care-and-support',
    name: 'Care & support',
    tagline: 'Launch day is the start, not the finish',
    summary:
      'Updates, monitoring, security patches, small improvements and someone who answers the phone. The unglamorous work that keeps everything else earning its place.',
    accent: 'emerald',
    icon: LifeBuoy,
    deliverables: [
      'Uptime and performance monitoring',
      'Security patching and dependency updates',
      'Daily off-site backups with restore tests',
      'A monthly pool of improvement hours',
      'Named contact with agreed response times',
    ],
    bestFor: 'Anyone running software they cannot afford to have go down.',
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
