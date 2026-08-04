import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

import { CallToAction } from '@/components/sections/cta';
import { GrowthPath } from '@/components/sections/growth-path';
import { TechStack } from '@/components/sections/tech-stack';
import { Button } from '@/components/ui/button';
import { IconTile } from '@/components/ui/icon-tile';
import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { accents } from '@/lib/accents';
import { services } from '@/lib/data/services';
import { pad } from '@/lib/utils';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Services',
  description:
    'Websites, catalog software, business management systems, automation, custom software, analytics and support — with an honest recommendation about which you need.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="—"
        eyebrow="Services"
        title="Seven things we build. Rarely more than two at once."
        lede={
          <p>
            The list matters less than the sequencing. Most businesses need one of these
            now and another in eighteen months — doing both today usually wastes money.
          </p>
        }
        aside={
          <Button href="/pricing" variant="secondary" size="sm">
            See indicative pricing
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
          </Button>
        }
      />

      {/* Jump list — a real index, not decoration */}
      <div className="border-b border-border bg-surface-2">
        <div className="container-page">
          <nav aria-label="Services" className="flex gap-x-6 gap-y-2 overflow-x-auto py-4">
            {services.map((service, index) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-[0.8125rem] text-muted transition-colors hover:text-foreground"
              >
                <span className="font-mono text-2xs text-subtle">{pad(index + 1)}</span>
                {service.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <Section className="py-16 sm:py-20">
        <div className="container-page">
          <ul className="space-y-4">
            {services.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={index * 40}>
                <article
                  id={service.slug}
                  className="scroll-mt-24 rounded-xl border border-border bg-surface p-6 sm:p-8"
                >
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                      <div className="flex items-start gap-4">
                        <IconTile icon={service.icon} accent={service.accent} size="lg" />
                        <div>
                          <p className="font-mono text-2xs text-subtle">{pad(index + 1)}</p>
                          <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-[1.375rem]">
                            {service.name}
                          </h2>
                        </div>
                      </div>
                      <p
                        className={`mt-4 text-[0.9375rem] font-medium ${accents[service.accent].text}`}
                      >
                        {service.tagline}
                      </p>
                      <p className="mt-3 max-w-prose text-[0.9375rem] leading-relaxed text-muted">
                        {service.summary}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="label-mono">What the engagement includes</p>
                      <ul className="mt-4 space-y-2.5">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2.5 text-[0.875rem] leading-relaxed text-muted"
                          >
                            <Check
                              className={`mt-[3px] h-3.5 w-3.5 shrink-0 ${accents[service.accent].text}`}
                              strokeWidth={2.25}
                              aria-hidden
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-3">
                      <div
                        className={`rounded-lg border border-border p-5 ${accents[service.accent].wash}`}
                      >
                        <p className="label-mono">Usually right for</p>
                        <p className="mt-3 text-[0.875rem] leading-relaxed">{service.bestFor}</p>
                        <Link
                          href={`/contact?interest=${service.slug}`}
                          className="mt-5 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium transition-colors hover:opacity-80"
                        >
                          Ask about this
                          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <GrowthPath />
      <TechStack />

      <CallToAction
        title="Not sure which of these you need?"
        body="That is the normal starting point, and it is exactly what the first conversation is for. Describe the symptom and we will work backwards from it."
      />
    </>
  );
}
