import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Eyebrow, Section } from '@/components/ui/section';
import { Reveal } from '@/components/ui/reveal';
import { opportunityAreas } from '@/lib/data/process';
import { accents } from '@/lib/accents';

export function Philosophy() {
  return (
    <Section className="py-20 sm:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow index="01">Our philosophy</Eyebrow>
            <Reveal>
              <blockquote className="mt-7">
                <p className="text-pretty font-display text-[1.75rem] font-medium leading-[1.2] tracking-tightest sm:text-[2.25rem] lg:text-[2.625rem]">
                  We don’t believe every business needs the same solution.
                </p>
              </blockquote>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                We understand your business first, then recommend what creates the most
                value — even if that means a smaller project than you expected.
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-harbor-700 transition-colors hover:text-harbor-800 dark:text-mint-300 dark:hover:text-mint-200"
              >
                How we think about this work
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
              </Link>
            </Reveal>
          </div>

          {/* Where we look — offset panel, deliberately narrower than the quote */}
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-lg border border-border bg-surface p-6">
              <p className="label-mono">Where we look for opportunities</p>
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
              <p className="mt-6 border-t border-border pt-4 text-[0.8125rem] leading-relaxed text-subtle">
                We look at the whole business, not just the pain point you mentioned first.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
