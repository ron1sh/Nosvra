import { PLACEHOLDER_MODE } from '@/lib/data/site';
import { cn } from '@/lib/utils';

/**
 * Marks demonstration content. Set `PLACEHOLDER_MODE = false` in
 * `lib/data/site.ts` once real content is in place and every one of these
 * disappears from the site.
 */
export function SampleBadge({ label = 'Sample', className }: { label?: string; className?: string }) {
  if (!PLACEHOLDER_MODE) return null;

  return (
    <span
      title="Placeholder content — replace before launch"
      className={cn(
        'inline-flex items-center rounded border border-dashed border-border-strong bg-surface-2 px-1.5 py-0.5 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle',
        className,
      )}
    >
      {label}
    </span>
  );
}
