import type { Metadata } from 'next';

import { CallToAction } from '@/components/sections/cta';
import { Faq } from '@/components/sections/faq';
import { PricingCard } from '@/components/pricing/pricing-card';
import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { pricingCategoryGroups, saasIntro, saasNote, saasPlans } from '@/lib/data/pricing';
import { faqs } from '@/lib/data/catalog';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Pricing',
  description:
    'Starting prices in NPR for business websites, ecommerce, catalogue sites and custom builds — with what each tier includes and optional add-ons.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <PageHeader
        index="—"
        eyebrow="Pricing"
        title="Starting prices, in NPR"
        lede={
          <p>
            These are honest starting points, not a menu. The final number depends on
            scope, and we confirm it in writing before any work begins.
          </p>
        }
      />

      {pricingCategoryGroups.map((category, categoryIndex) => (
        <Section
          key={category.id}
          tone={categoryIndex % 2 === 1 ? 'inset' : 'default'}
          className="py-16 sm:py-20"
        >
          <div className="container-page">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
              <div>
                <p className="label-mono">
                  {String(categoryIndex + 1).padStart(2, '0')} — {category.name}
                </p>
                <h2 className="mt-3 text-[1.5rem] font-semibold tracking-tightest sm:text-[1.75rem]">
                  {category.note}
                </h2>
              </div>
              <p className="font-mono text-2xs text-subtle">{category.startingPrice}</p>
            </div>

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.tiers.map((tier, index) => (
                <Reveal as="li" key={tier.id} delay={index * 60}>
                  <PricingCard tier={tier} />
                </Reveal>
              ))}
            </ul>
          </div>
        </Section>
      ))}

      {/* SaaS alternative */}
      <Section tone="raised" className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="label-mono">Prefer to pay monthly?</p>
              <h2 className="mt-3 text-[1.5rem] font-semibold leading-tight tracking-tightest sm:text-[1.875rem]">
                Same site, no upfront cost
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{saasIntro}</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ul className="divide-y divide-border border-y border-border">
                {saasPlans.map((plan) => (
                  <li key={plan.id} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4">
                    <div>
                      <span className="text-[0.9375rem] font-medium">{plan.name}</span>
                      <span className="ml-2 text-[0.8125rem] text-muted">{plan.description}</span>
                    </div>
                    <span className="font-mono text-2xs text-subtle">{plan.price}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.8125rem] text-subtle">{saasNote}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* What changes the price */}
      <Section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-[1.5rem] font-semibold leading-tight tracking-tightest sm:text-[1.875rem]">
                What moves the number up or down
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                No surprises on the final invoice. These are discussed openly before quoting.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
              {[
                {
                  title: 'Content readiness',
                  detail:
                    'If copy, photos and product data are ready, projects finish faster and cost less. If not, we can produce them for a fee.',
                },
                {
                  title: 'Integrations',
                  detail:
                    'Connecting to payment, accounting or messaging systems adds cost proportional to how well those systems are documented.',
                },
                {
                  title: 'Number of pages or products',
                  detail:
                    'Every tier lists a baseline. Going beyond it is priced as a simple add-on, not a renegotiation.',
                },
                {
                  title: 'Revisions',
                  detail:
                    'One or two rounds is included. Extra rounds of changes after that are billed at an hourly rate.',
                },
              ].map((factor) => (
                <li key={factor.title}>
                  <h3 className="text-[0.9375rem] font-semibold">{factor.title}</h3>
                  <p className="mt-1.5 text-[0.875rem] leading-relaxed text-muted">
                    {factor.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Faq
        items={faqs.filter((faq) => faq.category === 'Pricing' || faq.category === 'Support')}
        index="—"
        tone="inset"
      />

      <CallToAction
        title="Want a number for your situation?"
        body="Send a short description of what you need. We will come back with a realistic price and what would need to be true for it to land at the lower end."
      />
    </>
  );
}
