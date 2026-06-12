import { PRUEFUNG_GRADIENTS } from "../../../shared/lib/gradients.ts";
import { getGradient } from "../../../shared/lib/utilities.ts";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import { Card } from "../../../shared/ui/Card.tsx";
import type { ExamLevel } from "../model/types.ts";

export function PruefungSection({ examLevels }: { examLevels: ExamLevel[] }) {
  return (
    <section className="py-4">
      <ul className="m-0 grid list-none grid-cols-1 gap-8 py-4 laptop:grid-cols-2">
        {examLevels.map((exam, index) => (
          <li
            key={exam.id}
            className="h-full"
          >
            <AnimateOnScroll
              animation="fade-up"
              delay={(index % 2) * 150}
              className="h-full"
            >
              <Card
                href={`/pruefung/${exam.id}`}
                title={exam.title}
                icon={exam.level}
                category={exam.category}
                subtitle={exam.totalDuration}
                description={exam.description}
                gradient={getGradient(index, PRUEFUNG_GRADIENTS)}
                stats={[
                  { label: "Module", value: String(exam.sections.length) },
                  { label: "Bestehen", value: exam.passingScore.split(" ", 1)[0] ?? "" },
                ]}
                variant="large"
              />
            </AnimateOnScroll>
          </li>
        ))}
      </ul>
    </section>
  );
}
