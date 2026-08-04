import type { NavGroup, NavItem } from '@/types';

export const primaryNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

export const footerNav: NavGroup[] = [
  {
    label: 'What we do',
    items: [
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Industries', href: '/industries' },
      { label: 'Our process', href: '/process' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Nosvra', href: '/about' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    label: 'Get in touch',
    items: [
      { label: 'Start a project', href: '/contact' },
      { label: 'Request a quote', href: '/contact?intent=quote' },
      { label: 'Support', href: '/contact?intent=support' },
    ],
  },
];
