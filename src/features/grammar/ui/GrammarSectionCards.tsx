import {
  BookOpen,
  Clock,
  FileText,
  LayoutList,
  Link,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { getGradient } from "../../../shared/lib/utilities.ts";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import { Card } from "../../../shared/ui/Card.tsx";
import type { GrammarSection } from "../model/types.ts";

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  FileText,
  Link,
  LayoutList,
  Clock,
  MessageCircle,
};

interface GrammarSectionCardsProperties {
  section: GrammarSection;
}

export function GrammarSectionCards({ section }: GrammarSectionCardsProperties) {
  const IconComponent = section.icon ? ICON_MAP[section.icon] : null;

  return (
    <section
      className="mbe-16"
      aria-labelledby={`${section.id}-heading`}
    >
      <AnimateOnScroll animation="fade-right">
        <h2
          id={`${section.id}-heading`}
          className="mbe-8 flex items-center gap-3 text-2xl text-text text-shadow-sm tablet:text-3xl"
        >
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-12"
            aria-hidden="true"
          >
            {IconComponent ?
              <IconComponent
                className="size-5 tablet:size-6"
                strokeWidth={2}
              />
            : null}
          </span>
          {section.title}
        </h2>
      </AnimateOnScroll>

      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 p-0">
        {section.topics.map((topic, index) => (
          <li
            key={topic.id}
            className="h-full"
          >
            <AnimateOnScroll
              animation="fade-up"
              delay={(index % 3) * 100}
              className="h-full"
            >
              <Card
                href={`/grammatik/${section.id}/${topic.id}`}
                title={topic.title}
                category={topic.number}
                subtitle={topic.category}
                description={topic.description}
                gradient={getGradient(index, section.gradients)}
              />
            </AnimateOnScroll>
          </li>
        ))}
      </ul>
    </section>
  );
}
