import type { JobOpening } from '@/types';

/* ============================================================================
 * SAMPLE DATA — careers.
 * Remove the array contents to show the "no current openings" state; the
 * careers page handles an empty list.
 * ==========================================================================*/

export const jobOpenings: JobOpening[] = [
  {
    id: 'senior-frontend-engineer',
    title: 'Senior Frontend Engineer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote (Nepal)',
    experience: '4+ years',
    accent: 'harbor',
    summary:
      'Own the interface layer across client projects and the Catalog platform. You will make decisions about architecture and be around long enough to live with them.',
    responsibilities: [
      'Build and maintain production React and Next.js applications',
      'Set and defend performance and accessibility budgets',
      'Review code and mentor two mid-level engineers',
      'Sit in discovery sessions and translate business processes into interfaces',
    ],
    requirements: [
      'Strong TypeScript and modern React experience',
      'Shipped and maintained a production app for at least a year',
      'Comfortable talking directly to non-technical clients',
      'Cares about the person using the software at 4pm on a Friday',
    ],
    postedOn: '2026-07-14',
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    team: 'Design',
    type: 'Full-time',
    location: 'Remote (Nepal)',
    experience: '3+ years',
    accent: 'violet',
    summary:
      'Design business software that people use all day — internal systems, dashboards and catalogs, not just marketing pages.',
    responsibilities: [
      'Run research sessions with client teams and end users',
      'Design end-to-end flows, not just screens',
      'Extend and maintain our shared design system',
      'Work alongside engineers through implementation',
    ],
    requirements: [
      'Portfolio showing complex interfaces, not only landing pages',
      'Fluent in Figma and comfortable with design tokens',
      'Can explain a design decision in business terms',
      'Interest in accessibility as a design constraint',
    ],
    postedOn: '2026-07-02',
  },
  {
    id: 'backend-engineer',
    title: 'Backend Engineer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote (Nepal)',
    experience: '2+ years',
    accent: 'mint',
    summary:
      'Build the services and data models behind business systems where correctness matters more than novelty.',
    responsibilities: [
      'Design schemas and write migrations for live systems',
      'Build integrations with accounting, messaging and payment providers',
      'Own monitoring and incident response for services you ship',
      'Write the documentation the next engineer will need',
    ],
    requirements: [
      'Solid SQL and relational data modelling',
      'Node.js or Python in production',
      'Understands why a migration on a live table needs a plan',
      'Clear written communication',
    ],
    postedOn: '2026-06-20',
  },
  {
    id: 'delivery-intern',
    title: 'Delivery & Research Intern',
    team: 'Delivery',
    type: 'Internship',
    location: 'Remote (Nepal)',
    experience: 'Final-year students welcome',
    accent: 'amber',
    summary:
      'A six-month paid internship sitting inside real client projects — discovery notes, testing, documentation and support.',
    responsibilities: [
      'Take notes and synthesise findings from discovery sessions',
      'Test releases against the acceptance checklist',
      'Draft user guides and training material',
      'Help triage support requests',
    ],
    requirements: [
      'Careful, organised and curious about how businesses work',
      'Strong written English and Nepali',
      'Available at least four days a week',
    ],
    postedOn: '2026-07-21',
  },
];
