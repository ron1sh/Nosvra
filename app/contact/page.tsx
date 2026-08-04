import { Clock, Mail, Phone } from 'lucide-react';
import { Suspense } from 'react';
import type { Metadata } from 'next';

import { ContactForm } from '@/components/contact/contact-form';
import { PageHeader } from '@/components/ui/page-header';
import { SampleBadge } from '@/components/ui/sample-badge';
import { Section } from '@/components/ui/section';
import { contact, socials } from '@/lib/data/site';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description:
    'Start a conversation with Nosvra. Describe the problem in your own words — we reply within one business day with practical advice, not a sales sequence.',
  path: '/contact',
});

const expectations = [
  {
    step: '01',
    title: 'You send a short description',
    detail: 'The symptom is enough. You do not need to know what the solution is.',
  },
  {
    step: '02',
    title: 'We reply within one business day',
    detail: 'Usually with two or three questions, sometimes with an answer straight away.',
  },
  {
    step: '03',
    title: 'A 30-minute call, free',
    detail: 'We ask how your business runs. You ask whatever you want about how we work.',
  },
  {
    step: '04',
    title: 'A written recommendation',
    detail: 'What we would do first, what it costs, and what you could reasonably ignore.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="—"
        eyebrow="Contact"
        title="Tell us what isn’t working"
        lede={
          <p>
            You don’t need to know the solution already. Describe the problem in your own
            words and we’ll work backwards from there. {contact.responseTime}
          </p>
        }
      />

      <Section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Suspense
                fallback={
                  <div className="h-96 animate-pulse rounded-xl border border-border bg-surface-2" />
                }
              >
                <ContactForm />
              </Suspense>
            </div>

            <aside className="space-y-4 lg:col-span-4 lg:col-start-9">
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex items-center gap-2">
                  <p className="label-mono">Direct</p>
                  <SampleBadge />
                </div>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-start gap-3 text-sm transition-colors hover:text-harbor-700 dark:hover:text-mint-300"
                    >
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-subtle" strokeWidth={1.75} aria-hidden />
                      <span>
                        {contact.email}
                        <span className="mt-0.5 block text-2xs text-subtle">
                          General enquiries
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${contact.salesEmail}`}
                      className="flex items-start gap-3 text-sm transition-colors hover:text-harbor-700 dark:hover:text-mint-300"
                    >
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-subtle" strokeWidth={1.75} aria-hidden />
                      <span>
                        {contact.salesEmail}
                        <span className="mt-0.5 block text-2xs text-subtle">
                          New projects and quotes
                        </span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${contact.phoneHref}`}
                      className="flex items-start gap-3 text-sm transition-colors hover:text-harbor-700 dark:hover:text-mint-300"
                    >
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-subtle" strokeWidth={1.75} aria-hidden />
                      <span>
                        {contact.phone}
                        <span className="mt-0.5 block text-2xs text-subtle">
                          WhatsApp {contact.whatsapp}
                        </span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-subtle" strokeWidth={1.75} aria-hidden />
                    {contact.officeHours}
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-surface p-6">
                <p className="label-mono">Elsewhere</p>
                <ul className="mt-4 space-y-2.5">
                  {socials.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-baseline justify-between gap-3 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {social.label}
                        <span className="font-mono text-2xs text-subtle">{social.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </Section>

      <Section tone="inset" className="py-16 sm:py-20">
        <div className="container-page">
          <p className="label-mono">What happens next</p>
          <ol className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expectations.map((item) => (
              <li key={item.step} className="border-t border-border pt-4">
                <span className="font-mono text-2xs text-harbor-600 dark:text-mint-400">
                  {item.step}
                </span>
                <h2 className="mt-2 text-[0.9375rem] font-semibold leading-snug tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-2 text-[0.875rem] leading-relaxed text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    </>
  );
}
