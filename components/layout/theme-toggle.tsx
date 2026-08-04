'use client';

import { Moon, Sun } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'nosvra-theme';

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
];

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.setAttribute('data-theme', theme);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    setTheme(stored ?? 'light');
    setMounted(true);
  }, []);

  const choose = useCallback((next: Theme) => {
    setTheme(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }, []);

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-lg border border-border bg-surface p-0.5',
        className,
      )}
    >
      {options.map(({ value, label, icon: Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`${label} theme`}
            title={`${label} theme`}
            onClick={() => choose(value)}
            className={cn(
              'inline-flex h-7 w-7 items-center justify-center rounded-[6px] transition-colors',
              active
                ? 'bg-surface-2 text-foreground shadow-sm ring-1 ring-inset ring-border'
                : 'text-subtle hover:text-foreground',
            )}
          >
            <Icon className="h-[15px] w-[15px]" strokeWidth={1.75} aria-hidden />
          </button>
        );
      })}
    </div>
  );
}
