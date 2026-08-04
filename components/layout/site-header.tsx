'use client';

import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/layout/logo';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import { contact } from '@/lib/data/site';
import { primaryNav } from '@/lib/data/navigation';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on navigation and lock scroll while it is open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-shadow duration-300',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70'
          : 'border-b border-transparent bg-background/60 backdrop-blur-sm',
      )}
    >
      <div className="container-page">
        <div className="flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Logo />
            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                      className={cn(
                        'relative inline-flex h-9 items-center rounded-md px-3 text-sm transition-colors',
                        isActive(item.href)
                          ? 'text-foreground'
                          : 'text-muted hover:text-foreground',
                      )}
                    >
                      {item.label}
                      {isActive(item.href) ? (
                        <span
                          aria-hidden
                          className="absolute inset-x-3 -bottom-px h-px bg-harbor-600 dark:bg-mint-400"
                        />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={`tel:${contact.phoneHref}`}
              className="hidden items-center gap-1.5 rounded-md px-2 py-1 font-mono text-2xs text-muted transition-colors hover:text-foreground xl:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
              {contact.phone}
            </a>
            <ThemeToggle className="hidden sm:inline-flex" />
            <Button href="/contact" size="sm" className="hidden sm:inline-flex">
              Start a conversation
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            </Button>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-foreground lg:hidden"
            >
              {open ? (
                <X className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
              ) : (
                <Menu className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
              )}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-border bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page py-6">
            <ul className="divide-y divide-border">
              {primaryNav.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-baseline gap-4 py-4 text-lg font-medium tracking-tight"
                  >
                    <span className="label-mono w-6">{String(index + 1).padStart(2, '0')}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="flex items-baseline gap-4 py-4 text-lg font-medium tracking-tight"
                >
                  <span className="label-mono w-6">06</span>
                  Careers
                </Link>
              </li>
            </ul>

            <div className="mt-8 space-y-4">
              <Button href="/contact" size="lg" className="w-full">
                Start a conversation
              </Button>
              <div className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-3">
                <span className="text-sm text-muted">Theme</span>
                <ThemeToggle />
              </div>
              <a
                href={`tel:${contact.phoneHref}`}
                className="flex items-center gap-2 font-mono text-xs text-muted"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
                {contact.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
