import type { AccentKey } from '@/types';

interface AccentTokens {
  /** Tinted square that sits behind an icon. */
  tile: string;
  /** Icon / small-text colour on a neutral surface. */
  text: string;
  /** Hairline border, used for active states and rails. */
  border: string;
  /** Solid fill for dots, bars and progress rails. */
  fill: string;
  /** Low-opacity wash for panel backgrounds. */
  wash: string;
  /** Small pill used for categories and tags. */
  chip: string;
}

/**
 * Every accent is written out in full so Tailwind's content scanner sees the
 * literal class names. Never build these strings by interpolation.
 */
export const accents: Record<AccentKey, AccentTokens> = {
  harbor: {
    tile: 'bg-harbor-50 text-harbor-700 ring-1 ring-inset ring-harbor-100 dark:bg-harbor-500/10 dark:text-harbor-300 dark:ring-harbor-400/20',
    text: 'text-harbor-700 dark:text-harbor-300',
    border: 'border-harbor-300 dark:border-harbor-500/40',
    fill: 'bg-harbor-600 dark:bg-harbor-400',
    wash: 'bg-harbor-50/70 dark:bg-harbor-500/[0.07]',
    chip: 'bg-harbor-50 text-harbor-700 ring-1 ring-inset ring-harbor-200/70 dark:bg-harbor-500/10 dark:text-harbor-300 dark:ring-harbor-400/25',
  },
  mint: {
    tile: 'bg-mint-50 text-mint-700 ring-1 ring-inset ring-mint-100 dark:bg-mint-400/10 dark:text-mint-300 dark:ring-mint-400/20',
    text: 'text-mint-700 dark:text-mint-300',
    border: 'border-mint-300 dark:border-mint-400/40',
    fill: 'bg-mint-500 dark:bg-mint-400',
    wash: 'bg-mint-50/70 dark:bg-mint-400/[0.07]',
    chip: 'bg-mint-50 text-mint-700 ring-1 ring-inset ring-mint-200/70 dark:bg-mint-400/10 dark:text-mint-300 dark:ring-mint-400/25',
  },
  violet: {
    tile: 'bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-100 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-400/20',
    text: 'text-violet-700 dark:text-violet-300',
    border: 'border-violet-300 dark:border-violet-500/40',
    fill: 'bg-violet-600 dark:bg-violet-400',
    wash: 'bg-violet-50/70 dark:bg-violet-500/[0.07]',
    chip: 'bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-200/70 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-400/25',
  },
  amber: {
    tile: 'bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-100 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-400/20',
    text: 'text-amber-700 dark:text-amber-300',
    border: 'border-amber-300 dark:border-amber-500/40',
    fill: 'bg-amber-500 dark:bg-amber-400',
    wash: 'bg-amber-50/70 dark:bg-amber-500/[0.07]',
    chip: 'bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200/70 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-400/25',
  },
  rose: {
    tile: 'bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-100 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-400/20',
    text: 'text-rose-700 dark:text-rose-300',
    border: 'border-rose-300 dark:border-rose-500/40',
    fill: 'bg-rose-500 dark:bg-rose-400',
    wash: 'bg-rose-50/70 dark:bg-rose-500/[0.07]',
    chip: 'bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-200/70 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-400/25',
  },
  emerald: {
    tile: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/20',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-300 dark:border-emerald-500/40',
    fill: 'bg-emerald-500 dark:bg-emerald-400',
    wash: 'bg-emerald-50/70 dark:bg-emerald-500/[0.07]',
    chip: 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200/70 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/25',
  },
  orange: {
    tile: 'bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-100 dark:bg-orange-500/10 dark:text-orange-300 dark:ring-orange-400/20',
    text: 'text-orange-700 dark:text-orange-300',
    border: 'border-orange-300 dark:border-orange-500/40',
    fill: 'bg-orange-500 dark:bg-orange-400',
    wash: 'bg-orange-50/70 dark:bg-orange-500/[0.07]',
    chip: 'bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-200/70 dark:bg-orange-500/10 dark:text-orange-300 dark:ring-orange-400/25',
  },
  slate: {
    tile: 'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200/70 dark:bg-slate-400/10 dark:text-slate-300 dark:ring-slate-400/20',
    text: 'text-slate-700 dark:text-slate-300',
    border: 'border-slate-300 dark:border-slate-500/40',
    fill: 'bg-slate-500 dark:bg-slate-400',
    wash: 'bg-slate-100/70 dark:bg-slate-400/[0.06]',
    chip: 'bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200/70 dark:bg-slate-400/10 dark:text-slate-300 dark:ring-slate-400/25',
  },
};

export function accent(key: AccentKey): AccentTokens {
  return accents[key];
}
