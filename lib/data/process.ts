import {
  Briefcase,
  ClipboardList,
  Ear,
  Globe,
  Hammer,
  Hand,
  Headset,
  LayoutList,
  LineChart,
  Route,
  Search,
  ShoppingCart,
  Sprout,
  Target,
  UserX,
  Warehouse,
  Zap,
} from 'lucide-react';

import type { AccentKey, GrowthStage, ProcessStep } from '@/types';

/* ============================================================================
 * The five-step engagement model, straight from the deck:
 * Understand → Identify → Recommend → Build → Support.
 * ==========================================================================*/

export const processSteps: ProcessStep[] = [
  {
    index: 1,
    name: 'Understand',
    qualifier: 'your business',
    summary:
      'We sit with the people doing the work and learn how orders, customers and information actually move — including the parts that live in someone’s head.',
    activities: [
      'Interviews with owners and front-line staff',
      'Walkthrough of current tools and spreadsheets',
      'Review of existing website and enquiries',
    ],
    deliverable: 'A written summary of how your business runs today',
    duration: '3–5 days',
    icon: Search,
    accent: 'harbor',
  },
  {
    index: 2,
    name: 'Identify',
    qualifier: 'challenges',
    summary:
      'We separate the annoying from the expensive. Most businesses have a dozen problems and two that are genuinely costing money — those are the ones worth solving first.',
    activities: [
      'Time and cost estimate per manual task',
      'Gaps in visibility, operations and reporting',
      'Ranking by cost, effort and risk',
    ],
    deliverable: 'A prioritised list of opportunities with rough numbers',
    duration: '2–4 days',
    icon: Target,
    accent: 'violet',
  },
  {
    index: 3,
    name: 'Recommend',
    qualifier: 'solutions',
    summary:
      'You get options, not a single quote. What we would do first, what can wait, what you should not spend money on yet, and what it costs to leave things as they are.',
    activities: [
      'Two or three costed paths forward',
      'Honest build-versus-buy comparison',
      'Phasing so budget follows proof',
    ],
    deliverable: 'A recommendation document you own, obligation-free',
    duration: '3–5 days',
    icon: ClipboardList,
    accent: 'amber',
  },
  {
    index: 4,
    name: 'Build',
    qualifier: 'the solution',
    summary:
      'Delivery in short cycles with something usable at the end of each one. You see progress in a real environment rather than in a status report.',
    activities: [
      'Two-week cycles with a working demo',
      'Staging environment from day one',
      'Testing, accessibility and performance budgets',
    ],
    deliverable: 'Working software, documentation and training',
    duration: '4–16 weeks',
    icon: Hammer,
    accent: 'rose',
  },
  {
    index: 5,
    name: 'Support',
    qualifier: 'and improve',
    summary:
      'We stay on. Monitoring, updates and a monthly conversation about what the numbers are saying and what deserves attention next.',
    activities: [
      'Monitoring, backups and security updates',
      'Monthly review of usage and outcomes',
      'A standing pool of improvement hours',
    ],
    deliverable: 'An agreed service level and a named contact',
    duration: 'Ongoing',
    icon: Headset,
    accent: 'emerald',
  },
];

/* ============================================================================
 * The growth path — the site's signature section. Each stage builds on the
 * last, which is the whole argument: you never have to start over.
 * ==========================================================================*/

export const growthStages: GrowthStage[] = [
  {
    index: 1,
    name: 'Website',
    when: 'Customers cannot find or verify you',
    outcome: 'A credible presence that answers questions without you',
    icon: Globe,
    accent: 'harbor',
  },
  {
    index: 2,
    name: 'Catalog',
    when: 'Your product list changes faster than your site',
    outcome: 'Products you update yourself, in minutes',
    icon: LayoutList,
    accent: 'mint',
  },
  {
    index: 3,
    name: 'Business systems',
    when: 'Orders and stock live in spreadsheets and chat',
    outcome: 'One place where the numbers agree with each other',
    icon: Briefcase,
    accent: 'violet',
  },
  {
    index: 4,
    name: 'Automation',
    when: 'Your team retypes the same information weekly',
    outcome: 'Hours returned to work that needs a person',
    icon: Zap,
    accent: 'orange',
  },
  {
    index: 5,
    name: 'Analytics',
    when: 'Decisions rest on instinct alone',
    outcome: 'A weekly scoreboard you actually trust',
    icon: LineChart,
    accent: 'amber',
  },
];

/* ============================================================================
 * The problem, as the deck frames it.
 * ==========================================================================*/

export interface ProblemSignal {
  id: string;
  title: string;
  detail: string;
  icon: typeof UserX;
  accent: AccentKey;
}

export const problemSignals: ProblemSignal[] = [
  {
    id: 'discovery',
    title: 'Customers don’t know about you',
    detail:
      'People search for what you sell and find a competitor, a marketplace listing, or a social page last updated two years ago.',
    icon: UserX,
    accent: 'harbor',
  },
  {
    id: 'orders',
    title: 'Orders are difficult to manage',
    detail:
      'Enquiries arrive across four channels. Someone copies them into a spreadsheet. Sometimes one is missed.',
    icon: ShoppingCart,
    accent: 'violet',
  },
  {
    id: 'inventory',
    title: 'Inventory takes too much time',
    detail:
      'Stock counts are a weekend job, and the number on the shelf rarely matches the number in the file.',
    icon: Warehouse,
    accent: 'amber',
  },
  {
    id: 'manual',
    title: 'Everything is done manually',
    detail:
      'The same information is typed three times into three places, and the business only runs when a specific person is at their desk.',
    icon: Hand,
    accent: 'rose',
  },
];

/* ============================================================================
 * Why work with us — the commitment slides.
 * ==========================================================================*/

export interface ValueProp {
  id: string;
  title: string;
  detail: string;
  icon: typeof Ear;
  accent: AccentKey;
}

export const valueProps: ValueProp[] = [
  {
    id: 'listen',
    title: 'We listen first',
    detail:
      'Every recommendation starts with understanding your business. If a conversation ends with us saying you don’t need anything yet, that is a good outcome.',
    icon: Ear,
    accent: 'harbor',
  },
  {
    id: 'practical',
    title: 'Practical over trendy',
    detail:
      'We recommend what works for your situation and budget. We are happy to talk you out of the more expensive option when it does not earn its place.',
    icon: Route,
    accent: 'violet',
  },
  {
    id: 'growth',
    title: 'Built for growth',
    detail:
      'Every solution is designed so the next stage is an addition, not a rebuild. Your first project should still be useful five years from now.',
    icon: Sprout,
    accent: 'emerald',
  },
  {
    id: 'partnership',
    title: 'Long-term partnership',
    detail:
      'We are not here for a one-time project. Ongoing support, honest advice, and a team that remembers why your system was built the way it was.',
    icon: Headset,
    accent: 'amber',
  },
];

/* ============================================================================
 * Where we look for opportunities (deck slide 6).
 * ==========================================================================*/

export const opportunityAreas: { name: string; note: string; accent: AccentKey }[] = [
  { name: 'Customer experience', note: 'How it feels to buy from you', accent: 'harbor' },
  { name: 'Operations', note: 'How work moves through the business', accent: 'violet' },
  { name: 'Product management', note: 'How your catalog stays accurate', accent: 'mint' },
  { name: 'Online visibility', note: 'Whether you are found at all', accent: 'orange' },
  { name: 'Automation', note: 'What a machine should be doing', accent: 'rose' },
  { name: 'Reporting', note: 'What you know at the end of a week', accent: 'amber' },
];
