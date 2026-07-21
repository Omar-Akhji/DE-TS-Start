import { createFileRoute } from "@tanstack/react-router";
import { Languages } from "lucide-react";
import { getVocabList } from "../../features/vocabulary/api/services";
import { VocabularySection } from "../../features/vocabulary/ui/VocabularySection";
import { AnimateOnScroll } from "../../shared/ui/AnimateOnScroll";
import { PageHeader } from "../../shared/ui/PageHeader";
import { CardSkeleton, PageHeaderSkeleton } from "../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/vokabeln/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async () => {
    const { data: vocabList } = await getVocabList();
    return { vocabList };
  },
  head: () => ({
    meta: [
      { title: "Vokabeln | Deutsch Lernen" },
      {
        name: "description",
        content:
          "Deutsche Vokabeln lernen - Familie, Zahlen, Farben, Tiere und mehr. Interaktive Wortschatzübungen für Anfänger.",
      },
    ],
  }),
  pendingComponent: () => (
    <main className="min-h-dvh">
      <PageHeaderSkeleton />
      <section className="py-4">
        <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 py-4">
          {["s1", "s2", "s3", "s4", "s5", "s6"].map((id) => (
            <li
              key={id}
              className="h-full"
            >
              <CardSkeleton />
            </li>
          ))}
        </ul>
      </section>
    </main>
  ),
  component: VokabelnPage,
});

function VokabelnPage() {
  const { vocabList } = Route.useLoaderData();

  return (
    <AnimateOnScroll
      as="main"
      animation="fade-up"
    >
      <PageHeader
        icon={Languages}
        title="Deutscher Wortschatz"
        subtitle="Thematisch sortierte Vokabellisten für dein A1/B1 Training"
      />
      <VocabularySection vocabList={vocabList} />
    </AnimateOnScroll>
  );
}
