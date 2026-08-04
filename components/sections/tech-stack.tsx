import { Reveal } from '@/components/ui/reveal';
import { Tag } from '@/components/ui/badge';
import { Section, SectionIntro } from '@/components/ui/section';
import { accents } from '@/lib/accents';
import { technologyGroups } from '@/lib/data/catalog';

export function TechStack() {
  return (
    <Section tone="raised" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionIntro
          index="05"
          eyebrow="Technology"
          title="Boring technology, chosen on purpose"
          lede={
            <p>
              We pick tools your next developer will recognise. A stack nobody else can
              maintain is a liability dressed up as an advantage.
            </p>
          }
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {technologyGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 60}>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden
                  className={`h-2.5 w-2.5 rounded-[3px] ${accents[group.accent].fill}`}
                />
                <h3 className="text-[0.9375rem] font-semibold tracking-tight">
                  {group.category}
                </h3>
              </div>
              <p className="mt-3 text-[0.8125rem] leading-relaxed text-muted">{group.note}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Tag as="li" key={item}>
                    {item}
                  </Tag>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
