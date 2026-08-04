import { ArrowRight, CreditCard, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { IconTile } from '@/components/ui/icon-tile';
import { Reveal } from '@/components/ui/reveal';

const paymentOptions = [
  {
    id: 'one-time',
    title: 'Pay once, own it',
    detail: 'A single upfront payment for the build. No recurring fees, no strings attached.',
    icon: CreditCard,
    accent: 'harbor' as const,
  },
  {
    id: 'subscription',
    title: 'Or subscribe instead',
    detail:
      'Prefer not to pay upfront? Get the same website, ecommerce store, or catalogue as a monthly subscription — pick the product, we build it, host it, and keep it running.',
    icon: RefreshCcw,
    accent: 'mint' as const,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-y-14 pb-16 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-x-12 lg:pb-24 lg:pt-24">
          {/* Statement */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label-mono">Business technology solutions</p>
              <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tightest sm:text-[3.25rem] lg:text-[3.75rem]">
                Helping businesses grow through the{' '}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10">right</span>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-1.5 z-0 h-3 bg-mint-300/50 dark:bg-mint-400/25"
                  />
                </span>{' '}
                technology.
              </h1>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-[1.0625rem]">
                We don’t start by selling websites. We start by understanding how your
                business runs, then recommend the technology that creates the most value.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-9 flex flex-col gap-3 xs:flex-row xs:items-center">
                <Button href="/contact" size="lg">
                  Book a free consultation
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </Button>
                <Button href="/pricing" size="lg" variant="secondary">
                  See pricing
                </Button>
              </div>
              <p className="mt-4 text-2xs text-subtle">
                No obligation. Prefer not to pay upfront?{' '}
                <Link href="/pricing" className="underline underline-offset-2 hover:text-foreground">
                  Subscribe to your site instead
                </Link>
                .
              </p>
            </Reveal>
          </div>

          {/* Payment panel — how you pay for it, stated as content */}
          <Reveal delay={220} className="lg:col-span-5 lg:pt-3">
            <div className="rounded-xl border border-border bg-surface shadow-card">
              <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
                <p className="label-mono">However you’d like to pay</p>
                <span className="font-mono text-2xs text-subtle">2 ways</span>
              </div>
              <ul className="divide-y divide-border">
                {paymentOptions.map((option) => (
                  <li key={option.id} className="flex gap-3.5 px-5 py-4">
                    <IconTile icon={option.icon} accent={option.accent} size="sm" />
                    <div className="min-w-0">
                      <p className="text-[0.9375rem] font-medium leading-snug">
                        {option.title}
                      </p>
                      <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted">
                        {option.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border bg-surface-2 px-5 py-3.5">
                <p className="text-[0.8125rem] text-muted">
                  Same build quality either way — just a different way to pay for it.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
