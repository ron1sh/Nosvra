import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { contact } from '@/lib/data/site';

export const runtime = 'edge';

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  phone?: string;
  interest?: string;
  budget?: string;
  timeline?: string;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = String(payload.name ?? '').trim();
  const email = String(payload.email ?? '').trim();
  const message = String(payload.message ?? '').trim();

  if (name.length < 2 || !isValidEmail(email) || message.length < 20) {
    return NextResponse.json({ error: 'Missing or invalid required fields.' }, { status: 400 });
  }

  const company = String(payload.company ?? '').trim();
  const phone = String(payload.phone ?? '').trim();
  const interest = String(payload.interest ?? '').trim();
  const budget = String(payload.budget ?? '').trim();
  const timeline = String(payload.timeline ?? '').trim();

  const subject = interest ? `New enquiry from ${name} — ${interest}` : `New enquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Company: ${company || '—'}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `Interest: ${interest || '—'}`,
    `Budget: ${budget || '—'}`,
    `Timeline: ${timeline || '—'}`,
    '',
    message,
  ].join('\n');

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL ?? 'Nosvra Website <onboarding@resend.dev>',
    to: process.env.CONTACT_TO_EMAIL ?? contact.salesEmail,
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
