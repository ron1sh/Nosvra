import type { Metadata } from 'next';

import { CallToAction } from '@/components/sections/cta';
import { Faq } from '@/components/sections/faq';
import { IconTile } from '@/components/ui/icon-tile';
import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionIntro } from '@/components/ui/section';
import { accents } from '@/lib/accents';
import { faqs } from '@/lib/data/catalog';
import { processSteps } from '@/lib/data/process';
import { pad } from '@/lib/utils';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'How we work',
  description:
    'Understand, identify, recommend, build, support. Nosvra diagnoses before it prescribes — most clients receive a written recommendation before committing to anything.',
  path: '/process',
});

const principles = [
  {
    title: 'You get options, not a single quote',
    detail:
      'Every recommendation includes at least two paths, what each costs, and what happens if you do nothing. The cheapest option is always on the list.',
  },
  {
    title: 'Nothing is built in the dark',
    detail:
      'A staging environment exists from week one. You see working software every two weeks, not screenshots in a status report.',
  },
  {
    title: 'The people using it are in the room',
    detail:
      'Managers describe the process they think exists. The person doing it knows the one that actually does. We talk to both.',
  },
  {
    title: 'Scope changes are priced before they happen',
    detail:
      'When something new comes up mid-project, you get the cost and the schedule impact before we start, not on the final invoice.',
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        index="—"
        eyebrow="Our process"
        title="We diagnose before we prescribe"
        lede={
          <p>
            Five steps, and the first three happen before you commit to a build. It is
            slower to start and considerably cheaper to finish.
          </p>
        }
      />

      <Section className="py-16 sm:py-20">
        <div className="container-page">
          <ol className="space-y-4">
            {processSteps.map((step, index) => (
              <Reveal as="li" key={step.name} delay={index * 60}>
                <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                  <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                      <div className="flex items-start gap-4">
                        <IconTile icon={step.icon} accent={step.accent} size="lg" />
                        <div>
                          <p className="font-mono text-2xs text-subtle">
                            Step {pad(step.index)}
                          </p>
                          <h2 className="mt-1 text-xl font-semibold tracking-tight">
                            {step.name}
                          </h2>
                          <p className="text-[0.9375rem] text-muted">{step.qualifier}</p>
                        </div>
                      </div>
                      <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted">
                        {step.summary}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="label-mono">What happens</p>
                      <ul className="mt-4 space-y-2.5">
                        {step.activities.map((activity) => (
                          <li
                            key={activity}
                            className="flex gap-2.5 text-[0.875rem] leading-relaxed text-muted"
                          >
                            <span
                              aria-hidden
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accents[step.accent].fill}`}
                            />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-3 lg:col-start-10">
                      <div
                        className={`rounded-lg border border-border p-5 ${accents[step.accent].wash}`}
                      >
                        <p className="label-mono">You end up with</p>
                        <p className="mt-3 text-[0.875rem] leading-relaxed">
                          {step.deliverable}
                        </p>
                        <p className="mt-4 border-t border-border pt-3 font-mono text-2xs text-subtle">
                          Typically {step.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="inset" className="py-20 sm:py-24">
        <div className="container-page">
          <SectionIntro
            index="01"
            eyebrow="Ground rules"
            title="How we behave while the work is happening"
            lede={
              <p>
                These are the commitments that tend to matter most once a project is
                underway.
              </p>
            }
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal as="li" key={principle.title} delay={index * 60}>
                <div className="h-full rounded-xl border border-border bg-surface p-6">
                  <h3 className="text-[1.0625rem] font-semibold tracking-tight">
                    {principle.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                    {principle.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <Faq
        items={faqs.filter((faq) => faq.category === 'Delivery' || faq.category === 'Working together')}
        index="02"
      />
      <CallToAction />
    </>
  );
}
