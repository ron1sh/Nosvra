import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { IconTile } from '@/components/ui/icon-tile';
import { Reveal } from '@/components/ui/reveal';
import { Eyebrow, Section } from '@/components/ui/section';
import { industries } from '@/lib/data/catalog';

export function IndustriesStrip() {
  return (
    <Section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Eyebrow index="03">Industries</Eyebrow>
            <h2 className="mt-5 text-[1.75rem] font-semibold leading-[1.15] tracking-tightest sm:text-[2.125rem]">
              We often know your problem before you finish describing it
            </h2>
            <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
              Different sectors, similar bottlenecks. Here’s what we usually find, by
              industry.
            </p>
            <Link
              href="/industries"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-harbor-700 transition-colors hover:text-harbor-800 dark:text-mint-300 dark:hover:text-mint-200"
            >
              Industry detail
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            </Link>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {industries.map((industry, index) => (
                <Reveal
                  as="li"
                  key={industry.slug}
                  delay={index * 45}
                  className="bg-surface p-5 transition-colors hover:bg-surface-2"
                >
                  <div className="flex items-center gap-3">
                    <IconTile icon={industry.icon} accent={industry.accent} size="sm" />
                    <h3 className="text-[0.9375rem] font-medium leading-tight">
                      {industry.name}
                    </h3>
                  </div>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">
                    {industry.commonProblem}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
