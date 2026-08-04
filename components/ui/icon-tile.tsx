import type { LucideIcon } from 'lucide-react';

import { accents } from '@/lib/accents';
import { cn } from '@/lib/utils';
import type { AccentKey } from '@/types';

/**
 * Tinted icon container. The tint comes from the item's own accent, so a
 * services grid reads as a set of distinct categories rather than one colour
 * repeated eight times.
 */
export function IconTile({
  icon: Icon,
  accent,
  size = 'md',
  className,
}: {
  icon: LucideIcon;
  accent: AccentKey;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const box = {
    sm: 'h-8 w-8 rounded-[7px]',
    md: 'h-10 w-10 rounded-lg',
    lg: 'h-12 w-12 rounded-[10px]',
  }[size];

  const glyph = {
    sm: 'h-4 w-4',
    md: 'h-[1.15rem] w-[1.15rem]',
    lg: 'h-5 w-5',
  }[size];

  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center', box, accents[accent].tile, className)}
    >
      <Icon className={glyph} strokeWidth={1.75} aria-hidden />
    </span>
  );
}
