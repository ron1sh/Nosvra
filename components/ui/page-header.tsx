import type { ReactNode } from 'react';

import { Eyebrow } from '@/components/ui/section';
import { cn } from '@/lib/utils';

/**
 * Inner-page header. Left-aligned with the lede offset to the right so inner
 * pages share the home page's reading edge instead of centring everything.
 */
export function PageHeader({
  index,
  eyebrow,
  title,
  lede,
  aside,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn('border-b border-border', className)}>
      <div className="container-page py-14 sm:py-16 lg:py-20">
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
        <div className="mt-6 grid grid-cols-1 gap-x-10 gap-y-6 lg:grid-cols-12">
          <h1 className="text-pretty text-[2.125rem] font-semibold leading-[1.08] tracking-tightest sm:text-[2.75rem] lg:col-span-7 lg:text-[3.125rem]">
            {title}
          </h1>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-2">
            {lede ? (
              <div className="text-[0.9375rem] leading-relaxed text-muted sm:text-base">
                {lede}
              </div>
            ) : null}
            {aside ? <div className="mt-6">{aside}</div> : null}
          </div>
        </div>
      </div>
    </header>
  );
}
