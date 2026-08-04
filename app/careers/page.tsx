import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/ui/page-header';
import { Reveal } from '@/components/ui/reveal';
import { SampleBadge } from '@/components/ui/sample-badge';
import { Section, SectionIntro } from '@/components/ui/section';
import { accents } from '@/lib/accents';
import { jobOpenings } from '@/lib/data/content';
import { contact } from '@/lib/data/site';
import { formatDate } from '@/lib/utils';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Careers',
  description:
    'Open roles at Nosvra — engineering, design and delivery. Small team, real client contact, and software people actually use all day.',
  path: '/careers',
});

const workingHere = [
  {
    title: 'You talk to clients',
    detail:
      'No account manager sits between you and the person using what you build. It makes the work harder and considerably more interesting.',
  },
  {
    title: 'Projects end',
    detail:
      'Most of our work ships in weeks, not years. You see the outcome, and you are still around when it goes wrong.',
  },
  {
    title: 'Learning budget and time',
    detail:
      'A yearly budget for courses, books and conferences, plus one Friday a month for work that has no client attached.',
  },
  {
    title: 'Honest hours',
    detail:
      'Deadlines are planned, not sprinted at. If we misjudge a schedule that is our estimating problem to fix, not your weekend.',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        index="—"
        eyebrow="Careers"
        title="Small team, real responsibility, no layers between you and the work"
        lede={
          <p>
            We hire slowly and keep people a long time. If none of the roles below fit but
            the work sounds right, write to us anyway.
          </p>
        }
        aside={
          <div className="flex flex-wrap items-center gap-3 border-t border-border pt-5">
            <span className="label-mono">
              {jobOpenings.length} open {jobOpenings.length === 1 ? 'role' : 'roles'}
            </span>
            <SampleBadge label="Sample listings" />
          </div>
        }
      />

      <Section className="py-16 sm:py-20">
        <div className="container-page">
          {jobOpenings.length === 0 ? (
            <div className="rounded-xl border border-dashed border-border-strong bg-surface-2 p-10 text-center">
              <h2 className="text-lg font-semibold tracking-tight">
                No open roles right now
              </h2>
              <p className="mx-auto mt-2 max-w-md text-[0.9375rem] leading-relaxed text-muted">
                We still read speculative applications, and we keep good ones on file.
              </p>
              <Button href={`mailto:${contact.careersEmail}`} className="mt-6">
                Write to us anyway
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {jobOpenings.map((job, index) => (
                <Reveal as="li" key={job.id} delay={index * 60}>
                  <article className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                      <div className="lg:col-span-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge accent={job.accent}>{job.team}</Badge>
                          <span className="font-mono text-2xs text-subtle">{job.type}</span>
                        </div>
                        <h2 className="mt-4 text-xl font-semibold tracking-tight">
                          {job.title}
                        </h2>
                        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                          {job.summary}
                        </p>
                        <dl className="mt-5 space-y-2 text-[0.8125rem] text-muted">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 shrink-0 text-subtle" strokeWidth={1.75} aria-hidden />
                            <dt className="sr-only">Location</dt>
                            <dd>{job.location}</dd>
                          </div>
                          <div className="flex items-center gap-2">
                            <dt className="label-mono">Experience</dt>
                            <dd>{job.experience}</dd>
                          </div>
                          <div className="flex items-center gap-2">
                            <dt className="label-mono">Posted</dt>
                            <dd>{formatDate(job.postedOn)}</dd>
                          </div>
                        </dl>
                      </div>

                      <div className="lg:col-span-3">
                        <p className="label-mono">What you would do</p>
                        <ul className="mt-3.5 space-y-2">
                          {job.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2.5 text-[0.875rem] leading-relaxed text-muted"
                            >
                              <span
                                aria-hidden
                                className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accents[job.accent].fill}`}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:col-span-3">
                        <p className="label-mono">What we look for</p>
                        <ul className="mt-3.5 space-y-2">
                          {job.requirements.map((item) => (
                            <li
                              key={item}
                              className="flex gap-2.5 text-[0.875rem] leading-relaxed text-muted"
                            >
                              <span
                                aria-hidden
                                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-border-strong"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:col-span-1 lg:flex lg:items-start lg:justify-end">
                        <Button
                          href={`mailto:${contact.careersEmail}?subject=${encodeURIComponent(job.title)}`}
                          size="sm"
                          variant="secondary"
                        >
                          Apply
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                        </Button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section tone="inset" className="py-20 sm:py-24">
        <div className="container-page">
          <SectionIntro
            index="01"
            eyebrow="Working here"
            title="What the job is actually like"
            lede={
              <p>
                An honest description beats a list of perks. Here is what people who join
                us notice in the first month.
              </p>
            }
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {workingHere.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 60}>
                <div className="h-full rounded-xl border border-border bg-surface p-6">
                  <h3 className="text-[1.0625rem] font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 rounded-xl border border-border bg-surface p-7">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="text-lg font-semibold tracking-tight">
                  How hiring works here
                </h2>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                  A conversation, a paid short exercise based on real work, then a session
                  with the team you would join. Three steps, roughly two weeks, and we tell
                  you where you stand at every stage.
                </p>
              </div>
              <div className="lg:col-span-3 lg:col-start-10">
                <Button href={`mailto:${contact.careersEmail}`} variant="secondary" className="w-full">
                  {contact.careersEmail}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
