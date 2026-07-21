import { createFileRoute } from "@tanstack/react-router";
import { getVocabById } from "../../../../features/vocabulary/api/services";
import { FamilyTree } from "../../../../features/vocabulary/ui/FamilyTree";
import { VocabularyTable } from "../../../../features/vocabulary/ui/VocabularyTable";
import { AnimateOnScroll } from "../../../../shared/ui/AnimateOnScroll";
import { BackButton } from "../../../../shared/ui/BackButton";
import { GlassCard } from "../../../../shared/ui/GlassCard";
import { Hero } from "../../../../shared/ui/Hero";
import { HeroSkeleton, TableSkeleton } from "../../../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/vokabeln/$id/$topicId/")({
  gcTime: 0,
  loader: async ({ params: { id, topicId } }) => {
    const { data: item } = await getVocabById(id);
    const topicMap = new Map(
      item?.sections?.flatMap((s) =>
        s.topics.map((t) => [t.id, { topic: t, section: s }] as const),
      ),
    );
    const result = topicMap.get(topicId);
    return { item, topic: result?.topic, section: result?.section };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.item;
    const topic = loaderData?.topic;
    return {
      meta: [
        { title: topic ? `${topic.title} - ${item?.german}` : "Vokabel Thema" },
        { name: "description", content: `Lerne Vokabeln zum Thema ${topic?.title ?? ""}.` },
      ],
    };
  },
  pendingComponent: () => (
    <div className="relative min-h-dvh py-8">
      <main>
        <HeroSkeleton />
        <section className="mt-8">
          <TableSkeleton rows={8} />
        </section>
      </main>
    </div>
  ),
  component: TopicDetailPage,
});

function TopicDetailPage() {
  const { item, topic, section } = Route.useLoaderData();

  if (!item || !topic) {
    return (
      <div className="px-8 py-16 text-center">
        <h1 className="mb-4 text-3xl">Thema nicht gefunden</h1>
        <BackButton />
      </div>
    );
  }

  const isFamilyTree = topic.id === "stammbaum" && Boolean(topic.familyTree);

  return (
    <div className="relative min-h-dvh py-8">
      <main>
        <Hero
          key={`topic-${topic.id}`}
          title={topic.title}
          description={section?.title ?? item.german}
          category={item.category}
        />

        {isFamilyTree ?
          <>
            <AnimateOnScroll
              as="section"
              animation="fade-up"
              className="mt-8"
            >
              <GlassCard className="p-8">
                {topic.familyTree ?
                  <FamilyTree members={topic.familyTree} />
                : null}
              </GlassCard>
            </AnimateOnScroll>

            <AnimateOnScroll
              as="section"
              animation="fade-up"
              delay={200}
              className="mt-8"
            >
              <VocabularyTable words={topic.words ?? []} />
            </AnimateOnScroll>
          </>
        : topic.words && topic.words.length > 0 ?
          <AnimateOnScroll
            as="section"
            animation="fade-up"
            className="mt-8"
          >
            <VocabularyTable words={topic.words} />
          </AnimateOnScroll>
        : <AnimateOnScroll
            as="section"
            animation="fade-up"
            className="mt-8"
          >
            <GlassCard className="p-8">
              <div className="text-center text-text-muted">
                <p>Noch keine Vokabeln für {topic.title} eingetragen.</p>
              </div>
            </GlassCard>
          </AnimateOnScroll>
        }
      </main>
    </div>
  );
}
