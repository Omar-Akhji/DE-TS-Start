import { VOCAB_GRADIENTS } from "../../../shared/lib/gradients.ts";
import { getGradient } from "../../../shared/lib/utilities.ts";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import { CardWithModal } from "../../../shared/ui/CardWithModal.tsx";
import type { VocabItem } from "../model/types.ts";

export function VocabularySection({ vocabList }: { vocabList: VocabItem[] }) {
  return (
    <section
      className="py-4"
      aria-labelledby="vocab-heading"
    >
      <h2
        id="vocab-heading"
        className="sr-only"
      >
        Vocabulary Topics
      </h2>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4">
        {vocabList.map((item, index) => {
          // Extract section/topic titles for modal preview
          const previewTitles =
            item.sections?.flatMap((section) => section.topics.map((topic) => topic.title)) ?? [];

          return (
            <li
              key={item.id}
              className="h-full"
            >
              <AnimateOnScroll
                animation="fade-up"
                delay={(index % 4) * 100}
                className="h-full"
              >
                <CardWithModal
                  href={`/vokabeln/${item.id}`}
                  title={item.german}
                  category={item.category}
                  description={item.description}
                  subtitle="Deutsch A1"
                  gradient={getGradient(item.id, VOCAB_GRADIENTS)}
                  previewTitles={previewTitles}
                />
              </AnimateOnScroll>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
