import {
  Building2,
  Factory,
  GraduationCap,
  HardHat,
  Stethoscope,
  Store,
  Truck,
  UtensilsCrossed,
} from 'lucide-react';

import type { FaqItem, Industry, TechnologyGroup } from '@/types';

/* ============================================================================
 * Industries we work in. Each entry names the problem we most often find there
 * rather than describing the sector back to the reader.
 * ==========================================================================*/

export const industries: Industry[] = [
  {
    slug: 'wholesale-distribution',
    name: 'Wholesale & distribution',
    accent: 'mint',
    icon: Store,
    commonProblem:
      'A price list that goes out of date the day it is emailed, and retailers who call to ask what is in stock.',
    typicalStack: ['Catalog software', 'Tiered pricing', 'Stock sync', 'Enquiry capture'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    accent: 'violet',
    icon: Factory,
    commonProblem:
      'Production status spread across spreadsheets, with one person holding the whole picture in their head.',
    typicalStack: ['Order management', 'Work-in-progress tracking', 'Dispatch', 'Reporting'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & clinics',
    accent: 'harbor',
    icon: Stethoscope,
    commonProblem:
      'A paper diary at reception, no reminders, and a queue at the door every morning.',
    typicalStack: ['Appointment booking', 'SMS reminders', 'Patient records', 'Reporting'],
  },
  {
    slug: 'education',
    name: 'Education',
    accent: 'rose',
    icon: GraduationCap,
    commonProblem:
      'Admissions numbers reported four different ways, reconciled by hand every Monday.',
    typicalStack: ['Admissions tracking', 'Automated reporting', 'Parent portals', 'Websites'],
  },
  {
    slug: 'logistics',
    name: 'Logistics & freight',
    accent: 'amber',
    icon: Truck,
    commonProblem:
      'A support line dominated by one question that the customer could answer themselves.',
    typicalStack: ['Customer portals', 'Tracking', 'Notifications', 'Document delivery'],
  },
  {
    slug: 'hospitality',
    name: 'Food & hospitality',
    accent: 'orange',
    icon: UtensilsCrossed,
    commonProblem:
      'Orders taken in direct messages, and no reliable way to know what next week looks like.',
    typicalStack: ['Online ordering', 'Subscriptions', 'Menu management', 'Demand reporting'],
  },
  {
    slug: 'construction',
    name: 'Construction & trades',
    accent: 'slate',
    icon: HardHat,
    commonProblem:
      'Quotes rebuilt from scratch each time, and site progress that only exists in WhatsApp.',
    typicalStack: ['Quoting tools', 'Site reporting', 'Document control', 'Client portals'],
  },
  {
    slug: 'professional-services',
    name: 'Professional services',
    accent: 'emerald',
    icon: Building2,
    commonProblem:
      'A credible reputation offline and almost no evidence of it when someone searches.',
    typicalStack: ['Websites', 'Case studies', 'Enquiry routing', 'SEO'],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

/* ============================================================================
 * Technology. Listed as choices with reasons — a stack list without reasoning
 * is just a logo wall.
 * ==========================================================================*/

export const technologyGroups: TechnologyGroup[] = [
  {
    category: 'Interface',
    accent: 'harbor',
    note: 'Server-rendered by default, so pages are fast on modest phones and slow connections.',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Astro'],
  },
  {
    category: 'Services & APIs',
    accent: 'violet',
    note: 'Boring, well-understood backends. We optimise for the team who maintains it next.',
    items: ['Node.js', 'NestJS', 'Python', 'FastAPI', 'GraphQL', 'REST'],
  },
  {
    category: 'Data',
    accent: 'mint',
    note: 'Relational unless there is a reason not to be. Migrations are reviewed like code.',
    items: ['PostgreSQL', 'Prisma', 'Redis', 'MySQL', 'SQLite'],
  },
  {
    category: 'Infrastructure',
    accent: 'amber',
    note: 'Deploy on a Friday and sleep fine. Every environment is reproducible.',
    items: ['Vercel', 'AWS', 'Docker', 'Cloudflare', 'GitHub Actions', 'Terraform'],
  },
  {
    category: 'Integrations',
    accent: 'orange',
    note: 'The plumbing between systems that were never meant to speak to each other.',
    items: ['Stripe', 'Twilio', 'Resend', 'Google Workspace', 'Xero', 'Zapier'],
  },
  {
    category: 'Quality',
    accent: 'emerald',
    note: 'Tests, budgets and audits run in CI, not as a pre-launch scramble.',
    items: ['Playwright', 'Vitest', 'Lighthouse CI', 'Sentry', 'axe'],
  },
];

/* ============================================================================
 * FAQ — grouped, rendered with native <details> so no JavaScript ships for it.
 * ==========================================================================*/

export const faqs: FaqItem[] = [
  {
    id: 'where-to-start',
    category: 'Working together',
    question: 'We are not sure what we need. Is that a problem?',
    answer:
      'It is the normal starting point. Most conversations begin with a symptom — enquiries are slow, orders get missed — not a solution. Our first job is to work out what is actually costing you money, which sometimes turns out to be smaller and cheaper than expected.',
  },
  {
    id: 'discovery-cost',
    category: 'Working together',
    question: 'Do you charge for the first conversation?',
    answer:
      'No. The first call and the follow-up recommendation are free. If a project needs deeper investigation before anyone can quote responsibly, we propose a paid discovery phase and tell you the cost up front. You own the output either way.',
  },
  {
    id: 'small-business',
    category: 'Working together',
    question: 'Are we too small to work with you?',
    answer:
      'Probably not. A number of our clients started with a single landing page. What matters is whether technology can make a measurable difference to your business right now — if it cannot, we will say so.',
  },
  {
    id: 'how-priced',
    category: 'Pricing',
    question: 'How is a project priced?',
    answer:
      'Websites and catalog work are fixed-price against a written scope. Custom software starts with a paid discovery phase that ends in a fixed-price proposal, because quoting bespoke software without investigation is guesswork.',
  },
  {
    id: 'payment-terms',
    category: 'Pricing',
    question: 'What are your payment terms?',
    answer:
      'Typically 40% to start, 40% at an agreed midpoint, and 20% on handover. Longer projects are invoiced monthly against delivered milestones. Care plans are billed monthly and can be cancelled with 30 days notice.',
  },
  {
    id: 'ongoing-cost',
    category: 'Pricing',
    question: 'What does it cost to run once it is built?',
    answer:
      'We give you the running cost before you commit — hosting, domains, third-party services and any platform fee. For most business websites it is modest. For custom software it depends on usage, and we model it honestly rather than optimistically.',
  },
  {
    id: 'timeline',
    category: 'Delivery',
    question: 'How long does a project take?',
    answer:
      'A landing page is one to two weeks. A five-page website is two to four. Catalog work is two to three weeks. Custom systems run eight to twenty weeks depending on scope. Every proposal includes dates, and we tell you early if one is at risk.',
  },
  {
    id: 'involvement',
    category: 'Delivery',
    question: 'How much of our time will this take?',
    answer:
      'Expect a few hours in discovery, then roughly an hour every two weeks to review a working demo. Content is usually the bottleneck, so we help structure it and can write it if you prefer.',
  },
  {
    id: 'ownership',
    category: 'Delivery',
    question: 'Who owns the code and the data?',
    answer:
      'You do, on final payment — including source code, designs and content. Custom work is delivered to a repository you control. Catalog platform clients own their data and can export it in full at any time.',
  },
  {
    id: 'after-launch',
    category: 'Support',
    question: 'What happens after launch?',
    answer:
      'Every project includes a support period at no extra cost. After that most clients move to a care plan covering monitoring, updates, backups and a monthly pool of improvement hours. It is optional, not a lock-in.',
  },
  {
    id: 'existing-site',
    category: 'Support',
    question: 'Can you take over a site someone else built?',
    answer:
      'Often, yes. We start with a short technical review to establish what is there, what is a risk, and what it will cost to maintain. Occasionally the honest answer is that rebuilding is cheaper than inheriting.',
  },
  {
    id: 'response-times',
    category: 'Support',
    question: 'How quickly do you respond when something breaks?',
    answer:
      'Care plan clients get a response within one business day as standard, with a same-day option available. Anything that takes a live system down is treated as urgent regardless of plan.',
  },
];

export const faqCategories = Array.from(new Set(faqs.map((faq) => faq.category)));
