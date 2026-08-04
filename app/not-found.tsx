import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { primaryNav } from '@/lib/data/navigation';
import { contact } from '@/lib/data/site';

export default function NotFound() {
  return (
    <div className="container-page py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="font-mono text-2xs uppercase tracking-[0.18em] text-harbor-600 dark:text-mint-400">
            Error 404
          </p>
          <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.08] tracking-tightest sm:text-[3rem]">
            That page isn’t here
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            The link may be out of date, or the page may have moved. Nothing is broken on
            your end.
          </p>
          <div className="mt-8 flex flex-col gap-3 xs:flex-row">
            <Button href="/" size="lg">
              Back to the homepage
            </Button>
            <Button href="/contact" size="lg" variant="secondary">
              Tell us what you were looking for
            </Button>
          </div>
          <p className="mt-6 text-2xs text-subtle">
            Or email{' '}
            <a href={`mailto:${contact.email}`} className="link-underline">
              {contact.email}
            </a>{' '}
            and we’ll point you to the right place.
          </p>
        </div>

        <nav aria-label="Site sections" className="lg:col-span-4 lg:col-start-9">
          <p className="label-mono">Try one of these</p>
          <ul className="mt-5 divide-y divide-border border-y border-border">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3.5 text-sm text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                  <span aria-hidden className="text-subtle">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
