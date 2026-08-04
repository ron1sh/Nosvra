import type { TeamMember } from '@/types';

/* ============================================================================
 * SAMPLE DATA — the founding team.
 * Names, bios and photographs are placeholders. Replace with the real team.
 * ==========================================================================*/

export const team: TeamMember[] = [
  {
    id: 'aarav',
    name: 'Aarav Bhandari', // SAMPLE
    role: 'Founder & Principal Consultant',
    focus: 'Discovery, technical strategy',
    bio: 'Spent a decade building operations software before starting Nosvra. Runs every discovery phase personally and is usually the one telling clients to spend less.',
    initials: 'AB',
    accent: 'harbor',
    links: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/company/nosvra' }],
  },
  {
    id: 'sneha',
    name: 'Sneha Maharjan', // SAMPLE
    role: 'Lead Product Designer',
    focus: 'Interface design, research',
    bio: 'Designs for the person who will use the system eight hours a day, not the person approving the budget. Believes most software fails at the third screen.',
    initials: 'SM',
    accent: 'violet',
    links: [{ label: 'Dribbble', href: 'https://dribbble.com/nosvra' }],
  },
  {
    id: 'bikash',
    name: 'Bikash Gurung', // SAMPLE
    role: 'Engineering Lead',
    focus: 'Architecture, platform',
    bio: 'Builds and maintains the Catalog platform, and reviews every architecture decision. Has strong, well-argued opinions about database migrations.',
    initials: 'BG',
    accent: 'mint',
    links: [{ label: 'GitHub', href: 'https://github.com/nosvra' }],
  },
];
