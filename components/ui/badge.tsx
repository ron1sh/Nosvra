import type { ElementType, ReactNode } from 'react';

import { accents } from '@/lib/accents';
import { cn } from '@/lib/utils';
import type { AccentKey } from '@/types';

/** Category pill. Takes its colour from the item's own accent. */
export function Badge({
  children,
  accent,
  as: Tag = 'span',
  className,
}: {
  children: ReactNode;
  accent?: AccentKey;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag
      className={cn(
        'inline-flex w-fit items-center rounded-full px-2.5 py-0.5 text-2xs font-medium',
        accent ? accents[accent].chip : 'bg-surface-2 text-muted ring-1 ring-inset ring-border',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Neutral mono tag for technology names, topics and similar metadata.
 * Rendered as whatever element the surrounding markup needs.
 */
export function Tag({
  children,
  as: Element = 'span',
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  return (
    <Element
      className={cn(
        'inline-flex w-fit items-center rounded border border-border bg-surface-2 px-2 py-1 font-mono text-2xs text-muted',
        className,
      )}
    >
      {children}
    </Element>
  );
}
