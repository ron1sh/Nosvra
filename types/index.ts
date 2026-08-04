import type { LucideIcon } from 'lucide-react';

/**
 * Accent keys map to a fixed set of Tailwind class strings in `lib/accents.ts`.
 * Keeping them as a union (rather than building class names at runtime) means
 * Tailwind can always see the full class list at build time.
 */
export type AccentKey =
  | 'harbor'
  | 'mint'
  | 'violet'
  | 'amber'
  | 'rose'
  | 'emerald'
  | 'orange'
  | 'slate';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  accent: AccentKey;
  icon: LucideIcon;
  deliverables: string[];
  bestFor: string;
  /** Highlighted on the home page services grid. */
  featured?: boolean;
}

export interface Industry {
  slug: string;
  name: string;
  accent: AccentKey;
  icon: LucideIcon;
  commonProblem: string;
  typicalStack: string[];
}

export interface ProcessStep {
  index: number;
  name: string;
  qualifier: string;
  summary: string;
  activities: string[];
  deliverable: string;
  duration: string;
  icon: LucideIcon;
  accent: AccentKey;
}

export interface GrowthStage {
  index: number;
  name: string;
  when: string;
  outcome: string;
  icon: LucideIcon;
  accent: AccentKey;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  bio: string;
  initials: string;
  accent: AccentKey;
  links?: { label: string; href: string }[];
}

export interface TechnologyGroup {
  category: string;
  accent: AccentKey;
  note: string;
  items: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Working together' | 'Pricing' | 'Delivery' | 'Support';
}

export interface JobOpening {
  id: string;
  title: string;
  team: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  location: string;
  experience: string;
  accent: AccentKey;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  postedOn: string;
}

export interface PricingAddon {
  name: string;
  price: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  addons: PricingAddon[];
  accent: AccentKey;
  cta: string;
  popular?: boolean;
}

export interface PricingCategoryGroup {
  id: string;
  name: string;
  startingPrice: string;
  note: string;
  tiers: PricingTier[];
}

export interface SaasPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}
