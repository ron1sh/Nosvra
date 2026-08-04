import type { Metadata } from 'next';

import { CallToAction } from '@/components/sections/cta';
import { Badge } from '@/components/ui/badge';
import { IconTile } from '@/components/ui/icon-tile';
import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { industries } from '@/lib/data/catalog';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Industries',
  description:
    'Wholesale, manufacturing, healthcare, education, logistics, hospitality, construction and professional services — the bottlenecks we most often find, by sector.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        index="—"
        eyebrow="Industries"
        title="Different sectors, remarkably similar bottlenecks"
        lede={
          <p>
            We are not specialists in one vertical. We are specialists in the handful of
            problems that show up in all of them — and in noticing which one you have.
          </p>
        }
      />

      <Section className="py-16 sm:py-20">
        <div className="container-page">
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {industries.map((industry, index) => (
              <Reveal as="li" key={industry.slug} delay={index * 50}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 sm:p-7">
                  <div className="flex items-center gap-3.5">
                    <IconTile icon={industry.icon} accent={industry.accent} size="lg" />
                    <h2 className="text-lg font-semibold tracking-tight">{industry.name}</h2>
                  </div>

                  <div className="mt-6">
                    <p className="label-mono">What we usually find</p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                      {industry.commonProblem}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="label-mono">Typical building blocks</p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {industry.typicalStack.map((item) => (
                        <Badge as="li" accent={industry.accent} key={item}>
                          {item}
                        </Badge>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>

          <p className="mt-10 max-w-xl text-[0.875rem] leading-relaxed text-subtle">
            Sector not listed? The first conversation is the same either way — we start by
            asking how work moves through your business, and that question travels well.
          </p>
        </div>
      </Section>

      <CallToAction
        title="Tell us what your week looks like"
        body="The bottleneck is usually visible within an hour of describing a normal working week. Start there and we will do the rest."
      />
    </>
  );
}
