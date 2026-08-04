import Link from 'next/link';

import { cn } from '@/lib/utils';

/**
 * The mark is an N whose diagonal — the connecting stroke — carries the accent
 * colour. The two stems are the business; the diagonal is what we add.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={cn('h-[22px] w-[22px]', className)}
    >
      <path
        d="M4.25 19.25V4.75"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        className="text-ink-800 dark:text-ink-50"
      />
      <path
        d="M19.75 19.25V4.75"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        className="text-ink-800 dark:text-ink-50"
      />
      <path
        d="M4.25 4.75 19.75 19.25"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        className="text-harbor-600 dark:text-mint-400"
      />
    </svg>
  );
}

export function Logo({
  className,
  href = '/',
  showWordmark = true,
}: {
  className?: string;
  href?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2.5 rounded-sm text-foreground transition-opacity hover:opacity-80',
        className,
      )}
      aria-label="Nosvra — home"
    >
      <LogoMark />
      {showWordmark ? (
        <span className="font-display text-[0.9375rem] font-semibold uppercase tracking-[0.17em]">
          Nosvra
        </span>
      ) : null}
    </Link>
  );
}
