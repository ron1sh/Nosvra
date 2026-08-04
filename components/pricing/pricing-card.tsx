import { Check, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { accents } from '@/lib/accents';
import { cn } from '@/lib/utils';
import type { PricingTier } from '@/types';

/**
 * Reads a single `PricingTier`. To change what is sold, edit
 * `lib/data/pricing.ts` — this component never needs touching.
 */
export function PricingCard({ tier }: { tier: PricingTier }) {
  const tone = accents[tier.accent];

  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-xl border bg-surface p-6 transition-all duration-300 hover:shadow-lift sm:p-7',
        tier.popular ? 'border-border-strong shadow-card' : 'border-border hover:border-border-strong',
      )}
    >
      {tier.popular ? (
        <span
          className={cn(
            'absolute -top-2.5 left-6 rounded-full px-2.5 py-0.5 text-2xs font-medium',
            tone.chip,
            'bg-surface',
          )}
        >
          Most requested
        </span>
      ) : null}

      <header>
        <h3 className="text-[1.0625rem] font-semibold tracking-tight">{tier.name}</h3>
        <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{tier.description}</p>
      </header>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-[1.75rem] font-semibold tracking-tightest">
          {tier.price}
        </span>
        {tier.priceNote ? (
          <span className="text-[0.8125rem] text-subtle">{tier.priceNote}</span>
        ) : null}
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <p className="label-mono">What’s included</p>
        <ul className="mt-3.5 space-y-2.5">
          {tier.features.map((feature) => (
            <li key={feature} className="flex gap-2.5 text-[0.875rem] leading-relaxed">
              <Check
                className={cn('mt-[3px] h-3.5 w-3.5 shrink-0', tone.text)}
                strokeWidth={2.25}
                aria-hidden
              />
              <span className="text-muted">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {tier.addons.length > 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-border bg-surface-2 p-4">
          <p className="label-mono">Optional add-ons</p>
          <ul className="mt-3 space-y-2">
            {tier.addons.map((addon) => (
              <li
                key={addon.name}
                className="flex items-baseline justify-between gap-3 text-[0.8125rem]"
              >
                <span className="flex items-baseline gap-1.5 text-muted">
                  <Plus className="h-3 w-3 shrink-0 translate-y-0.5 text-subtle" strokeWidth={2} aria-hidden />
                  {addon.name}
                </span>
                <span className="shrink-0 font-mono text-2xs text-foreground">
                  {addon.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-auto pt-6">
        <Button
          href={`/contact?package=${tier.id}`}
          variant={tier.popular ? 'primary' : 'secondary'}
          className="w-full"
        >
          {tier.cta}
        </Button>
      </div>
    </article>
  );
}
