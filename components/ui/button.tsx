import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost' | 'quiet';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-[-0.01em] transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-ink-800 text-white shadow-sm hover:bg-ink-700 active:bg-ink-900 dark:bg-mint-400 dark:text-ink-950 dark:hover:bg-mint-300',
  secondary:
    'border border-border bg-surface text-foreground shadow-sm hover:border-border-strong hover:bg-surface-2 dark:bg-surface dark:hover:bg-surface-2',
  ghost:
    'text-foreground hover:bg-surface-2 dark:hover:bg-white/5',
  quiet:
    'text-muted hover:text-foreground',
};

const sizes: Record<Size, string> = {
  sm: 'h-8 px-3 text-[0.8125rem]',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-[0.9375rem]',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
