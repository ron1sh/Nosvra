'use client';

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/utils';

/**
 * Reveals children on scroll.
 *
 * Content renders visible by default and is only hidden once the effect runs,
 * so users without JavaScript — and crawlers — always see the full page. The
 * observer disconnects after the first reveal; nothing stays subscribed.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<'idle' | 'pending' | 'shown'>('idle');

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setState('shown');
      return;
    }

    setState('pending');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState('shown');
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={state === 'idle' ? undefined : state}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
      className={cn('will-change-[opacity,transform]', className)}
    >
      {children}
    </Tag>
  );
}
