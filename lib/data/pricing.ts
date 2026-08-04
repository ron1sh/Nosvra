import type { PricingCategoryGroup, SaasPlan } from '@/types';

/* ============================================================================
 * PRICING — Nepali Rupees (NPR), one-time build cost unless noted.
 * Four offerings, each with a few tiers. Every tier lists its own add-ons —
 * that is the only place price varies beyond the tier itself.
 * ==========================================================================*/

export const pricingCategoryGroups: PricingCategoryGroup[] = [
  {
    id: 'business-website',
    name: 'Business website',
    startingPrice: 'From NPR 35,000',
    note: 'Your public front door — from a single page to a full multi-page site.',
    tiers: [
      {
        id: 'personal-landing',
        name: 'Personal / landing page',
        price: 'NPR 35,000',
        priceNote: 'one-time',
        description: 'One page with your info, what you offer, and a way to reach you.',
        features: [
          'Single page, mobile-friendly',
          'Contact form',
          'Basic on-page SEO',
        ],
        addons: [
          { name: 'Extra page', price: '+NPR 5,000' },
          { name: 'Content written for you', price: '+NPR 4,000' },
          { name: 'Logo design', price: '+NPR 6,000' },
        ],
        accent: 'harbor',
        cta: 'Request quote',
      },
      {
        id: 'business-cms',
        name: 'Business website with CMS',
        price: 'NPR 55,000',
        priceNote: 'one-time',
        description: 'A proper multi-page site you can update yourself, no developer needed.',
        features: [
          'Up to 5 pages (home, about, services, gallery, contact)',
          'Edit text and images yourself',
          'Contact form and SEO setup',
          'One round of revisions',
        ],
        addons: [
          { name: 'Extra page', price: '+NPR 5,000' },
          { name: 'Blog section', price: '+NPR 8,000' },
          { name: 'Second language', price: '+NPR 10,000' },
        ],
        accent: 'harbor',
        cta: 'Request quote',
        popular: true,
      },
      {
        id: 'business-booking',
        name: 'Business website + booking/enquiry system',
        price: 'NPR 75,000',
        priceNote: 'one-time',
        description: 'Everything in the CMS tier, plus a built-in way to take bookings or enquiries.',
        features: [
          'Everything in Business website with CMS',
          'Booking or enquiry form with email/SMS alerts',
          'Basic customer record for each enquiry',
          'Editor training session',
        ],
        addons: [
          { name: 'Staff calendar sync', price: '+NPR 10,000' },
          { name: 'Automated reminders', price: '+NPR 6,000' },
        ],
        accent: 'harbor',
        cta: 'Request quote',
      },
    ],
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce',
    startingPrice: 'From NPR 50,000',
    note: 'A store that takes orders — pick how customers check out.',
    tiers: [
      {
        id: 'ecommerce-form',
        name: 'Order via enquiry form',
        price: 'NPR 50,000',
        priceNote: 'one-time',
        description: 'Customers browse products and order through a form — you confirm and collect payment directly.',
        features: [
          'Product listing with photos and prices',
          'Order form, no account needed',
          'Orders sent to your email/WhatsApp',
        ],
        addons: [
          { name: 'Extra 50 products', price: '+NPR 5,000' },
          { name: 'Delivery charge rules', price: '+NPR 5,000' },
        ],
        accent: 'mint',
        cta: 'Request quote',
      },
      {
        id: 'ecommerce-accounts',
        name: 'Full store with customer accounts',
        price: 'NPR 80,000',
        priceNote: 'one-time',
        description: 'Customers create an account, add to cart, and track their order history.',
        features: [
          'Everything in the form tier',
          'Cart, checkout and customer accounts',
          'Order history and status tracking',
          'Discount codes',
        ],
        addons: [
          { name: 'Extra 50 products', price: '+NPR 5,000' },
          { name: 'Stock/inventory tracking', price: '+NPR 12,000' },
        ],
        accent: 'mint',
        cta: 'Request quote',
        popular: true,
      },
      {
        id: 'ecommerce-payments',
        name: 'Full store + online payments',
        price: 'NPR 1,10,000',
        priceNote: 'one-time',
        description: 'Everything in the accounts tier, plus customers pay online at checkout.',
        features: [
          'Everything in Full store with customer accounts',
          'eSewa / Khalti / card payment integration',
          'Automated order and payment confirmation emails',
          'Sales dashboard',
        ],
        addons: [
          { name: 'Multiple payment gateways', price: '+NPR 10,000' },
          { name: 'Subscription/recurring orders', price: '+NPR 15,000' },
        ],
        accent: 'mint',
        cta: 'Request quote',
      },
    ],
  },
  {
    id: 'catalogue',
    name: 'Catalogue website',
    startingPrice: 'NPR 50,000',
    note: 'Your full product range online, with orders sent straight to your WhatsApp.',
    tiers: [
      {
        id: 'catalogue-standard',
        name: 'Catalogue website',
        price: 'NPR 50,000',
        priceNote: 'one-time',
        description: 'A searchable catalogue with no product limit — customers pick a variant and quantity, then send the order to your WhatsApp.',
        features: [
          'No minimum or maximum product count',
          'Product variants (size, colour, etc.)',
          'Pick a variant and quantity, order sent to your WhatsApp',
          'Search, filters and categories',
          'Update products yourself',
        ],
        addons: [
          { name: 'Admin order & stock dashboard', price: '+NPR 15,000' },
          { name: 'Bulk import from spreadsheet', price: '+NPR 6,000' },
          { name: 'Staff accounts', price: '+NPR 6,000' },
        ],
        accent: 'amber',
        cta: 'Request quote',
      },
    ],
  },
  {
    id: 'custom',
    name: 'Custom website',
    startingPrice: 'From NPR 30,000',
    note: 'Anything that doesn’t fit a standard package — scoped to what you actually need.',
    tiers: [
      {
        id: 'custom-build',
        name: 'Custom website',
        price: 'From NPR 30,000',
        priceNote: 'scoped per project',
        description: 'A one-off build for a process, layout or feature set that doesn’t fit a standard package.',
        features: [
          'Short discovery call to scope the work',
          'Fixed price agreed before we start',
          'Design and build to your requirements',
          'Support period included after launch',
        ],
        addons: [
          { name: 'Third-party integration', price: 'From +NPR 15,000' },
          { name: 'Extra feature module', price: 'Quoted separately' },
        ],
        accent: 'violet',
        cta: 'Book a discovery call',
      },
    ],
  },
];

/* ============================================================================
 * SAAS ALTERNATIVE — same product, paid monthly instead of upfront.
 * ==========================================================================*/

export const saasIntro =
  'Don’t want to pay the full amount upfront? Get the same site as a monthly subscription instead — we build it, host it, and keep it running, and you pay monthly rather than one lump sum. Exact terms depend on the package, so let’s talk.';

export const saasPlans: SaasPlan[] = [
  {
    id: 'saas-business',
    name: 'Business website',
    price: 'From NPR 2,500/mo',
    description: 'Same as the Business website tiers, paid monthly instead of upfront.',
    features: ['No upfront cost', 'Hosting and updates included', 'Cancel with notice'],
  },
  {
    id: 'saas-ecommerce',
    name: 'Ecommerce',
    price: 'From NPR 4,000/mo',
    description: 'Same as the Ecommerce tiers, paid monthly instead of upfront.',
    features: ['No upfront cost', 'Hosting and updates included', 'Cancel with notice'],
  },
  {
    id: 'saas-catalogue',
    name: 'Catalogue website',
    price: 'From NPR 3,500/mo',
    description: 'Same as the Catalogue website tier, paid monthly instead of upfront.',
    features: ['No upfront cost', 'Hosting and updates included', 'Cancel with notice'],
  },
];

export const saasNote = 'Custom projects are quoted individually — ask us about a subscription option.';
