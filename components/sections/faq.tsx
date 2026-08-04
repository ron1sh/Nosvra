import { Plus } from 'lucide-react';

import { Reveal } from '@/components/ui/reveal';
import { Section, SectionIntro } from '@/components/ui/section';
import { faqCategories, faqs } from '@/lib/data/catalog';
import type { FaqItem } from '@/types';

/**
 * Native <details> elements: keyboard accessible, searchable by the browser's
 * find-in-page, and they ship no JavaScript at all.
 */
export function Faq({
  items = faqs,
  index = '09',
  tone = 'default',
}: {
  items?: FaqItem[];
  index?: string;
  tone?: 'default' | 'inset' | 'raised';
}) {
  const categories = faqCategories.filter((category) =>
    items.some((item) => item.category === category),
  );

  return (
    <Section tone={tone} className="py-20 sm:py-24">
      <div className="container-page">
        <SectionIntro
          index={index}
          eyebrow="Questions"
          title="The things people ask before we start"
          lede={
            <p>
              If your question is not here, ask it directly — we answer these the same way
              on a call.
            </p>
          }
        />

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <h3 className="label-mono lg:col-span-3 lg:pt-4">{category}</h3>
              <div className="lg:col-span-9">
                <ul className="border-t border-border">
                  {items
                    .filter((item) => item.category === category)
                    .map((item, itemIndex) => (
                      <Reveal as="li" key={item.id} delay={itemIndex * 40}>
                        <details className="group border-b border-border">
                          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 text-[0.9375rem] font-medium leading-snug transition-colors hover:text-harbor-700 dark:hover:text-mint-300">
                            {item.question}
                            <Plus
                              aria-hidden
                              className="mt-0.5 h-4 w-4 shrink-0 text-subtle transition-transform duration-300 group-open:rotate-45"
                              strokeWidth={1.75}
                            />
                          </summary>
                          <p className="max-w-prose pb-5 pr-10 text-[0.875rem] leading-relaxed text-muted">
                            {item.answer}
                          </p>
                        </details>
                      </Reveal>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
