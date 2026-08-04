import { ChevronRight } from 'lucide-react';

import { Reveal } from '@/components/ui/reveal';
import { growthStages } from '@/lib/data/process';
import { pad } from '@/lib/utils';
import type { AccentKey } from '@/types';

/**
 * The signature section.
 *
 * It is dark in both themes on purpose — a single deliberate break in the
 * page's rhythm, carried over from the pitch deck where this argument also
 * gets its own dark slide. Everything else on the page stays quiet so this
 * one can be loud.
 */

const railGlyph: Partial<Record<AccentKey, string>> = {
  harbor: 'text-harbor-300',
  mint: 'text-mint-300',
  violet: 'text-violet-300',
  orange: 'text-orange-300',
  amber: 'text-amber-300',
};

const railDot: Partial<Record<AccentKey, string>> = {
  harbor: 'bg-harbor-400',
  mint: 'bg-mint-400',
  violet: 'bg-violet-400',
  orange: 'bg-orange-400',
  amber: 'bg-amber-400',
};

export function GrowthPath() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-ink-100 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="font-mono text-2xs uppercase tracking-[0.18em] text-mint-400">
            The growth path
          </p>
          <h2 className="mt-5 text-[1.875rem] font-semibold leading-[1.15] tracking-tightest text-white sm:text-[2.375rem] lg:text-[2.75rem]">
            Growing with your business
          </h2>
          <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-200 sm:text-base">
            Most clients arrive at stage one and stay for years. Each stage builds on the
            last, so nothing gets thrown away — and you only move when the business is
            ready, not when we are.
          </p>
        </div>

        {/* Rail — horizontal on desktop, vertical on mobile */}
        <div className="mt-14">
          <ol className="grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-4">
            {growthStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Reveal
                  as="li"
                  key={stage.name}
                  delay={index * 90}
                  className="relative flex gap-4 lg:block"
                >
                  {/* Vertical connector (mobile) */}
                  {index < growthStages.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute left-[19px] top-12 h-[calc(100%+2rem)] w-px bg-white/10 lg:hidden"
                    />
                  ) : null}

                  <div className="relative shrink-0">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-inset ring-white/10">
                      <Icon
                        className={`h-[18px] w-[18px] ${railGlyph[stage.accent] ?? 'text-white'}`}
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </span>
                  </div>

                  {/* Horizontal connector (desktop) */}
                  <div className="hidden lg:block">
                    <div className="mt-5 flex items-center gap-2">
                      <span
                        aria-hidden
                        className={`h-1.5 w-1.5 rounded-full ${railDot[stage.accent] ?? 'bg-white'}`}
                      />
                      <span aria-hidden className="h-px flex-1 bg-white/10" />
                      {index < growthStages.length - 1 ? (
                        <ChevronRight
                          aria-hidden
                          className="h-3.5 w-3.5 shrink-0 text-white/25"
                          strokeWidth={2}
                        />
                      ) : null}
                    </div>
                  </div>

                  <div className="min-w-0 lg:mt-5">
                    <p className="font-mono text-2xs text-white/35">{pad(stage.index)}</p>
                    <h3 className="mt-1.5 text-base font-semibold tracking-tight text-white">
                      {stage.name}
                    </h3>
                    <p className="mt-2.5 text-[0.8125rem] leading-relaxed text-ink-300">
                      <span className="text-white/50">When: </span>
                      {stage.when}
                    </p>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-200">
                      {stage.outcome}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <p className="mt-14 border-t border-white/10 pt-6 text-sm text-ink-300">
          Each stage builds on the last — you never have to start over.
        </p>
      </div>
    </section>
  );
}
