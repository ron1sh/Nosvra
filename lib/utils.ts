/** Tiny class-name joiner. Deliberately dependency-free. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

/** `01`, `02`, … used by the mono index labels throughout the site. */
export function pad(n: number): string {
  return n.toString().padStart(2, '0');
}
