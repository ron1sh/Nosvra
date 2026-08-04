'use client';

import { AlertCircle, Check, Loader2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState, type FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { contact } from '@/lib/data/site';
import { pricingCategoryGroups } from '@/lib/data/pricing';
import { services } from '@/lib/data/services';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const budgets = [
  'Not sure yet',
  'Under NPR 50,000',
  'NPR 50,000 – 1,00,000',
  'NPR 1,00,000 – 3,00,000',
  'NPR 3,00,000 +',
];

const timelines = ['As soon as possible', 'Within 1–3 months', 'Later this year', 'Just exploring'];

const fieldClass =
  'w-full rounded-md border border-border bg-surface px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle transition-colors focus:border-harbor-400 focus:outline-none focus:ring-2 focus:ring-harbor-500/25 dark:focus:border-mint-400 dark:focus:ring-mint-400/20';

const labelClass = 'block text-[0.8125rem] font-medium';

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get('package');
  const intent = searchParams.get('intent');

  const allTiers = useMemo(
    () => pricingCategoryGroups.flatMap((category) => category.tiers),
    [],
  );

  const initialInterest = useMemo(() => {
    if (!preselected) return '';
    const match = allTiers.find((tier) => tier.id === preselected);
    return match ? match.name : '';
  }, [preselected, allTiers]);

  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const nextErrors: Record<string, string> = {};
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (name.length < 2) nextErrors.name = 'Please tell us your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'A valid email, please.';
    if (message.length < 20) {
      nextErrors.message = 'A sentence or two about the problem helps us reply usefully.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');

    try {
      const company = String(data.get('company') ?? '').trim();
      const phone = String(data.get('phone') ?? '').trim();
      const interest = String(data.get('interest') ?? '').trim();
      const budget = String(data.get('budget') ?? '').trim();
      const timeline = String(data.get('timeline') ?? '').trim();

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, company, phone, interest, budget, timeline }),
      });

      if (!response.ok) throw new Error('Request failed');

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-border bg-surface p-8 text-center">
        <span className="mx-auto inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/20">
          <Check className="h-5 w-5" strokeWidth={2} aria-hidden />
        </span>
        <h2 className="mt-5 text-lg font-semibold tracking-tight">Message sent</h2>
        <p className="mx-auto mt-2 max-w-sm text-[0.9375rem] leading-relaxed text-muted">
          Thanks — that’s on its way to us. We reply within one business day. If you
          don’t hear back, email us directly at {contact.salesEmail}.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus('idle')}
          type="button"
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name <span className="text-rose-600 dark:text-rose-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={cn(fieldClass, 'mt-1.5', errors.name && 'border-rose-400')}
          />
          {errors.name ? (
            <p id="name-error" className="mt-1.5 text-2xs text-rose-600 dark:text-rose-400">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={cn(fieldClass, 'mt-1.5')}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-rose-600 dark:text-rose-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={cn(fieldClass, 'mt-1.5', errors.email && 'border-rose-400')}
          />
          {errors.email ? (
            <p id="email-error" className="mt-1.5 text-2xs text-rose-600 dark:text-rose-400">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={cn(fieldClass, 'mt-1.5')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="interest" className={labelClass}>
            What are you interested in?
          </label>
          <select
            id="interest"
            name="interest"
            defaultValue={initialInterest}
            className={cn(fieldClass, 'mt-1.5')}
          >
            <option value="">I’m not sure yet</option>
            <optgroup label="Services">
              {services.map((service) => (
                <option key={service.slug} value={service.name}>
                  {service.name}
                </option>
              ))}
            </optgroup>
            <optgroup label="Packages">
              {allTiers.map((tier) => (
                <option key={tier.id} value={tier.name}>
                  {tier.name}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className={labelClass}>
            Rough budget
          </label>
          <select id="budget" name="budget" className={cn(fieldClass, 'mt-1.5')}>
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className={labelClass}>
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          defaultValue={intent === 'quote' ? 'Within 1–3 months' : undefined}
          className={cn(fieldClass, 'mt-1.5')}
        >
          {timelines.map((timeline) => (
            <option key={timeline}>{timeline}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          What’s slowing the business down?{' '}
          <span className="text-rose-600 dark:text-rose-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="You don’t need technical detail — describe the problem in your own words."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          className={cn(fieldClass, 'mt-1.5 resize-y', errors.message && 'border-rose-400')}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-2xs text-rose-600 dark:text-rose-400">
            {errors.message}
          </p>
        ) : (
          <p id="message-hint" className="mt-1.5 text-2xs text-subtle">
            The more specific the symptom, the more useful our first reply.
          </p>
        )}
      </div>

      {status === 'error' ? (
        <p className="flex items-start gap-2 rounded-md border border-rose-200 bg-rose-50 p-3 text-[0.8125rem] text-rose-700 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-300">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
          That didn’t send. Try again, or email us directly and we’ll pick it up.
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} aria-hidden />
              Sending
            </>
          ) : (
            'Send enquiry'
          )}
        </Button>
        <p className="text-2xs text-subtle">
          We reply within one business day. No mailing list, no follow-up sequence.
        </p>
      </div>
    </form>
  );
}
