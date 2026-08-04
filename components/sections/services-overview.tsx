import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { IconTile } from '@/components/ui/icon-tile';
import { Reveal } from '@/components/ui/reveal';
import { Section, SectionIntro } from '@/components/ui/section';
import { services } from '@/lib/data/services';
import { accents } from '@/lib/accents';

/* --------------------------------------------------------------------------
 * Miniature diagrams. Each one shows what the service produces rather than
 * decorating the card — a browser frame, a catalog table, an order pipeline.
 * ------------------------------------------------------------------------*/

function BrowserMock() {
  return (
    <div className="overflow-hidden rounded-t-md border-x border-t border-border bg-surface-2">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-rose-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <span className="ml-2 h-3 flex-1 rounded-sm bg-border" />
      </div>
      <div className="space-y-2 p-4">
        <div className="h-2.5 w-2/5 rounded-sm bg-harbor-500/60" />
        <div className="h-2 w-4/5 rounded-sm bg-border" />
        <div className="h-2 w-3/5 rounded-sm bg-border" />
        <div className="flex gap-2 pt-2">
          <div className="h-5 w-20 rounded bg-ink-700/80 dark:bg-mint-400/70" />
          <div className="h-5 w-16 rounded border border-border" />
        </div>
      </div>
    </div>
  );
}

function CatalogMock() {
  const rows = [
    { name: 'Galvanised pipe · 20mm', tone: 'w-[42%]', stock: 'In stock' },
    { name: 'Steel hinge · heavy', tone: 'w-[34%]', stock: 'In stock' },
    { name: 'Anchor bolt · M12', tone: 'w-[48%]', stock: 'Low' },
    { name: 'Cement board · 8mm', tone: 'w-[38%]', stock: 'In stock' },
  ];

  return (
    <div className="overflow-hidden rounded-md border border-border bg-surface-2">
      <div className="flex items-center justify-between border-b border-border px-3 py-2">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle">
          Products
        </span>
        <span className="font-mono text-[0.625rem] text-subtle">4,200</span>
      </div>
      <ul className="divide-y divide-border">
        {rows.map((row) => (
          <li key={row.name} className="flex items-center gap-3 px-3 py-2">
            <span className="h-5 w-5 shrink-0 rounded-sm bg-mint-400/25" />
            <span className="flex-1 truncate text-[0.6875rem] text-muted">{row.name}</span>
            <span
              className={`font-mono text-[0.625rem] ${
                row.stock === 'Low' ? 'text-amber-600 dark:text-amber-400' : 'text-subtle'
              }`}
            >
              {row.stock}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PipelineMock() {
  const stages = ['Enquiry', 'Quoted', 'In production', 'Dispatched'];
  return (
    <div className="flex items-center gap-2">
      {stages.map((stage, index) => (
        <div key={stage} className="flex items-center gap-2">
          <div className="rounded border border-border bg-surface-2 px-2.5 py-1.5">
            <span className="font-mono text-[0.625rem] text-muted">{stage}</span>
          </div>
          {index < stages.length - 1 ? (
            <span aria-hidden className="h-px w-3 bg-border-strong sm:w-5" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function ServicesOverview() {
  const [websites, catalog, systems, ...rest] = services;

  return (
    <Section id="services" tone="inset" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionIntro
          index="02"
          eyebrow="Our solutions"
          title="Three things we build most, plus four more as needed"
          lede={
            <p>
              Every engagement starts with one question — what would actually move the
              needle? Usually, it’s one of these.
            </p>
          }
        />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Professional websites */}
          {websites ? (
            <Reveal className="lg:col-span-5">
              <article className="group flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-strong hover:shadow-lift sm:p-7">
                <div>
                  <IconTile icon={websites.icon} accent={websites.accent} size="lg" />
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{websites.name}</h3>
                  <p className="mt-1 text-sm font-medium text-harbor-700 dark:text-harbor-300">
                    {websites.tagline}
                  </p>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
                    {websites.summary}
                  </p>
                </div>
                <div className="mt-7 -mb-7 sm:-mb-8">
                  <BrowserMock />
                </div>
              </article>
            </Reveal>
          ) : null}

          {/* Catalog software — the core product, given the wider card */}
          {catalog ? (
            <Reveal delay={80} className="lg:col-span-7">
              <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border-strong hover:shadow-lift sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <IconTile icon={catalog.icon} accent={catalog.accent} size="lg" />
                  <span className={`rounded-full px-2.5 py-1 text-2xs font-medium ${accents.mint.chip}`}>
                    Our own platform
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">{catalog.name}</h3>
                <p className="mt-1 text-sm font-medium text-mint-700 dark:text-mint-300">
                  {catalog.tagline}
                </p>
                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:items-start">
                  <div>
                    <p className="text-[0.9375rem] leading-relaxed text-muted">
                      {catalog.summary}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {['Live catalog in days, not months', 'Update products without code', 'Grows from 10 to 10,000 items'].map(
                        (point) => (
                          <li key={point} className="flex items-start gap-2 text-[0.8125rem] text-muted">
                            <span aria-hidden className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mint-500" />
                            {point}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <CatalogMock />
                </div>
              </article>
            </Reveal>
          ) : null}

          {/* Business systems — full width horizontal card */}
          {systems ? (
            <Reveal delay={120} className="lg:col-span-12">
              <article className="grid grid-cols-1 gap-6 rounded-xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-border-strong sm:p-7 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <IconTile icon={systems.icon} accent={systems.accent} />
                    <h3 className="text-xl font-semibold tracking-tight">{systems.name}</h3>
                  </div>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">
                    {systems.summary}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:col-start-7">
                  <p className="label-mono mb-3">A typical order, tracked</p>
                  <div className="overflow-x-auto pb-1">
                    <PipelineMock />
                  </div>
                </div>
                <div className="lg:col-span-2 lg:col-start-11 lg:text-right">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 transition-colors hover:text-violet-800 dark:text-violet-300 dark:hover:text-violet-200"
                  >
                    All services
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                  </Link>
                </div>
              </article>
            </Reveal>
          ) : null}
        </div>

        {/* The remaining services, compact — not every offering needs a big card */}
        <Reveal delay={80}>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((service) => (
              <li key={service.slug}>
                <Link
                  href="/services"
                  className="flex h-full items-start gap-3.5 rounded-lg border border-border bg-surface px-4 py-4 transition-colors hover:border-border-strong hover:bg-surface-2"
                >
                  <IconTile icon={service.icon} accent={service.accent} size="sm" />
                  <span className="min-w-0">
                    <span className="block text-[0.9375rem] font-medium leading-snug">
                      {service.name}
                    </span>
                    <span className="mt-0.5 block text-[0.8125rem] leading-relaxed text-muted">
                      {service.tagline}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-10">
          <Button href="/services" variant="secondary">
            Compare all services
            <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
          </Button>
        </div>
      </div>
    </Section>
  );
}
