import { HeartHandshake } from 'lucide-react';

import { IconTile } from '@/components/ui/icon-tile';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionIntro } from '@/components/ui/section';
import { accents } from '@/lib/accents';
import { valueProps } from '@/lib/data/process';

export function WhyUs({
  lede = 'There are cheaper developers and there are larger agencies. What we offer is a straight answer about what your business actually needs.',
}: {
  lede?: string;
}) {
  return (
    <Section className="py-20 sm:py-24">
      <div className="container-page">
        <SectionIntro
          index="04"
          eyebrow="Why work with us"
          title="A partnership built on listening, not selling"
          lede={<p>{lede}</p>}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {valueProps.map((value, index) => (
            <Reveal key={value.id} delay={index * 70}>
              <article
                className={`flex h-full flex-col rounded-xl border border-border p-6 sm:p-7 ${accents[value.accent].wash}`}
              >
                <IconTile icon={value.icon} accent={value.accent} />
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{value.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                  {value.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Commitment — set apart by width and type, not by another card */}
        <Reveal delay={100}>
          <div className="mt-4 rounded-xl border border-border bg-surface p-7 sm:p-9">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-1">
                <IconTile icon={HeartHandshake} accent="harbor" size="lg" />
              </div>
              <div className="lg:col-span-7 lg:col-start-3">
                <p className="label-mono">Our commitment</p>
                <p className="mt-4 text-pretty font-display text-xl font-medium leading-snug tracking-tight sm:text-[1.5rem]">
                  We’re not here to sell you a one-time project. We’re here to grow with
                  your business, for as long as you’ll have us.
                </p>
              </div>
              <div className="lg:col-span-3 lg:col-start-10">
                <p className="text-[0.875rem] leading-relaxed text-muted">
                  Practical advice, honest recommendations, and technology that actually
                  earns its place in your business.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
