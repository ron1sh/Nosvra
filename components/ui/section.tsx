import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

/**
 * The eyebrow is the site's main structural device — a mono label with an
 * index, echoing the numbering used throughout the company pitch deck.
 */
export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('label-mono flex items-center gap-2.5', className)}>
      {index ? (
        <>
          <span className="text-harbor-600 dark:text-mint-400">{index}</span>
          <span aria-hidden className="h-px w-6 bg-border-strong" />
        </>
      ) : null}
      <span>{children}</span>
    </p>
  );
}

export function Section({
  id,
  children,
  className,
  tone = 'default',
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'raised' | 'inset';
}) {
  return (
    <section
      id={id}
      className={cn(
        'relative',
        tone === 'raised' && 'border-y border-border bg-surface',
        tone === 'inset' && 'border-y border-border bg-surface-2',
        className,
      )}
    >
      {children}
    </section>
  );
}

/**
 * Deliberately not centred. Section intros are left-aligned with the lede
 * offset into the second column so the page has a consistent reading edge.
 */
export function SectionIntro({
  index,
  eyebrow,
  title,
  lede,
  action,
  align = 'split',
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  action?: ReactNode;
  align?: 'split' | 'stack';
  className?: string;
}) {
  return (
    <div className={cn('mb-12 sm:mb-14', className)}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <div
        className={cn(
          'mt-5',
          align === 'split'
            ? 'grid grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-12 lg:items-end'
            : 'max-w-2xl space-y-5',
        )}
      >
        <h2
          className={cn(
            'text-pretty text-[1.75rem] font-semibold leading-[1.15] tracking-tightest sm:text-[2.125rem] lg:text-[2.5rem]',
            align === 'split' && 'lg:col-span-6',
          )}
        >
          {title}
        </h2>
        {lede ? (
          <div
            className={cn(
              'text-[0.9375rem] leading-relaxed text-muted sm:text-base',
              align === 'split' && 'lg:col-span-5 lg:col-start-8',
            )}
          >
            {lede}
          </div>
        ) : null}
        {action ? (
          <div className={cn(align === 'split' && 'lg:col-span-12')}>{action}</div>
        ) : null}
      </div>
    </div>
  );
}
