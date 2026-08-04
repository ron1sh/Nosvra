import { ArrowRight, Mail, MessageSquare, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { contact } from '@/lib/data/site';

export function CallToAction({
  title = 'Let’s have a conversation',
  body = 'Tell us what is slowing the business down and we’ll come back with a recommendation — including the option of doing nothing yet.',
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink-900 py-20 text-ink-100 sm:py-24">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <p className="font-mono text-2xs uppercase tracking-[0.18em] text-mint-400">
              Get in touch
            </p>
            <h2 className="mt-5 text-[1.875rem] font-semibold leading-[1.12] tracking-tightest text-white sm:text-[2.5rem]">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-200 sm:text-base">
              {body}
            </p>
            <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:items-center">
              <Button
                href="/contact"
                size="lg"
                className="bg-mint-400 text-ink-950 hover:bg-mint-300 dark:bg-mint-400"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </Button>
              <Button
                href="/pricing"
                size="lg"
                variant="secondary"
                className="border-white/15 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08] dark:bg-white/[0.04]"
              >
                See indicative pricing
              </Button>
            </div>
            <p className="mt-4 text-2xs text-ink-400">{contact.responseTime}</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 py-4 text-sm text-ink-200 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-mint-400" strokeWidth={1.75} aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-3 py-4 text-sm text-ink-200 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-mint-400" strokeWidth={1.75} aria-hidden />
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 py-4 text-sm text-ink-200">
                <MessageSquare
                  className="h-4 w-4 shrink-0 text-mint-400"
                  strokeWidth={1.75}
                  aria-hidden
                />
                {contact.officeHours}
              </li>
            </ul>
            <p className="mt-5 text-2xs leading-relaxed text-ink-400">
              No pressure, just practical advice. If we are not the right fit we will say
              so and point you somewhere better.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
