import { CallToAction } from '@/components/sections/cta';
import { Faq } from '@/components/sections/faq';
import { Hero } from '@/components/sections/hero';
import { IndustriesStrip } from '@/components/sections/industries-strip';
import { Philosophy } from '@/components/sections/philosophy';
import { ServicesOverview } from '@/components/sections/services-overview';
import { WhyUs } from '@/components/sections/why-us';
import { JsonLd } from '@/components/ui/json-ld';
import { faqs } from '@/lib/data/catalog';
import { faqSchema } from '@/lib/seo';

/**
 * Section order follows the argument the pitch deck makes:
 * problem → philosophy → solutions → industries → trust → ask.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ServicesOverview />
      <IndustriesStrip />
      <WhyUs lede="There are cheaper developers and larger agencies. What we offer is a straight answer about what you actually need." />
      <Faq items={faqs.slice(0, 3)} index="05" tone="inset" />
      <CallToAction body="Tell us what’s slowing the business down — we’ll come back with a clear recommendation." />
      <JsonLd data={faqSchema(faqs.slice(0, 3))} />
    </>
  );
}
