import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

import { LogoMark } from '@/components/layout/logo';
import { footerNav } from '@/lib/data/navigation';
import { contact, site, socials } from '@/lib/data/site';

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-2">
      <div className="container-page py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-[0.9375rem] font-semibold uppercase tracking-[0.17em]">
                Nosvra
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              We help businesses grow through the right technology. We start by
              understanding how you work — the software comes second.
            </p>

            <address className="mt-7 space-y-3 not-italic">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0 text-subtle" strokeWidth={1.75} aria-hidden />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phoneHref}`}
                className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-subtle" strokeWidth={1.75} aria-hidden />
                {contact.phone}
              </a>
            </address>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:grid-cols-4">
            {footerNav.map((group) => (
              <nav key={group.label} aria-label={group.label}>
                <h2 className="label-mono">{group.label}</h2>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xs text-subtle">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-2xs text-subtle transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
