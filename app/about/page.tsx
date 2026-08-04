import type { Metadata } from 'next';

import { CallToAction } from '@/components/sections/cta';
import { WhyUs } from '@/components/sections/why-us';
import { PageHeader } from '@/components/ui/page-header';
import { Section } from '@/components/ui/section';
import { accents } from '@/lib/accents';
import { opportunityAreas } from '@/lib/data/process';
import { site } from '@/lib/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description:
    'Nosvra is a software development and technology consultancy. We start by understanding your business, then recommend the technology that creates the most value.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="—"
        eyebrow="About Nosvra"
        title="A technology partner that starts with your business, not its own catalogue of services"
        lede={
          <p>
            {site.name} exists on a simple frustration: businesses were being sold
            software before anyone had asked what they actually did all day. We’re a new,
            small team building that alternative from the ground up.
          </p>
        }
        aside={
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5">
            <div>
              <dt className="label-mono">Team</dt>
              <dd className="mt-1 text-sm">{site.headcount}</dd>
            </div>
            <div>
              <dt className="label-mono">Working</dt>
              <dd className="mt-1 text-sm">Remotely, for clients anywhere</dd>
            </div>
          </dl>
        }
      />

      {/* Story */}
      <Section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-[1.625rem] font-semibold leading-tight tracking-tightest sm:text-[2rem]">
                Most businesses know they can improve — they’re just not sure what to
                improve first
              </h2>
              <div className="mt-6 max-w-prose space-y-5 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                <p>
                  That sentence is where nearly every conversation we have starts.
                  Somebody knows something is wrong — orders are slipping, the phone
                  rings with questions the website should answer, or a spreadsheet has
                  quietly become a full-time job for one person.
                </p>
                <p>
                  What they usually don’t have is a clear picture of which of those things
                  is costing the most. So we do the unglamorous part first: understand how
                  the work actually happens before we talk about software — and sometimes
                  the recommendation is smaller and cheaper than what you came in asking
                  for.
                </p>
                <p className="text-foreground">
                  Technology should solve the right problem, not just add more of it.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="rounded-xl border border-border bg-surface p-6">
                <p className="label-mono">Where we look</p>
                <ul className="mt-5 space-y-3.5">
                  {opportunityAreas.map((area) => (
                    <li key={area.name} className="flex items-baseline gap-3">
                      <span
                        aria-hidden
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accents[area.accent].fill}`}
                      />
                      <span className="text-sm">
                        <span className="font-medium">{area.name}</span>
                        <span className="text-muted"> — {area.note}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <WhyUs />

      <CallToAction
        title="Come and tell us what isn’t working"
        body="The first conversation costs nothing and usually clarifies more than it sells. Bring the problem, not the solution."
      />
    </>
  );
}
