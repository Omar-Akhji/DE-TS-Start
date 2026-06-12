import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Languages } from "lucide-react";
import { getGrammarSection, getGrammarTopic } from "../../../../features/grammar/api/services";
import { GrammarContentBlocks } from "../../../../features/grammar/ui/GrammarContentBlocks";
import { GrammarTable } from "../../../../features/grammar/ui/GrammarTable";
import { getGradient } from "../../../../shared/lib/utilities";
import { BackButton } from "../../../../shared/ui/BackButton";
import { GlassCard } from "../../../../shared/ui/GlassCard";
import { Hero } from "../../../../shared/ui/Hero";
import { Skeleton } from "../../../../shared/ui/Skeleton";
import { HeroSkeleton, SectionHeaderSkeleton } from "../../../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/grammatik/$section/$topicId/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async ({ params: { section, topicId } }) => {
    const [sectionResponse, topicResponse] = await Promise.all([
      getGrammarSection(section),
      getGrammarTopic(section, topicId),
    ]);
    return { currentSection: sectionResponse.data, currentTopic: topicResponse.data };
  },
  head: ({ loaderData }) => {
    const currentTopic = loaderData?.currentTopic;
    return {
      meta: [
        { title: currentTopic ? `${currentTopic.title} - Grammatik` : "Grammatik Thema" },
        { name: "description", content: currentTopic?.description ?? "Lerne deutsche Grammatik." },
      ],
    };
  },
  pendingComponent: () => (
    <div className="relative min-h-screen py-8">
      <main>
        <HeroSkeleton />
        <div className="grid gap-12">
          {["sec-1", "sec-2"].map((secId) => (
            <section key={secId}>
              <SectionHeaderSkeleton />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {["card-1", "card-2", "card-3"].map((cardId) => (
                  <div
                    key={cardId}
                    className="group relative block overflow-hidden rounded-xl border border-white/10 bg-card p-5"
                  >
                    <Skeleton className="mb-2 h-6 w-3/4 bg-white/8" />
                    <div className="flex items-center gap-2">
                      <Skeleton className="size-3.5 bg-white/5" />
                      <Skeleton className="h-4 w-28 bg-white/5" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  ),
  component: GrammatikDetailPage,
});

function GrammatikDetailPage() {
  const { currentSection, currentTopic } = Route.useLoaderData();

  if (!currentTopic || !currentSection) {
    return (
      <div className="px-8 py-16 text-center">
        <h1 className="mb-4 text-3xl">Thema nicht gefunden</h1>
        <p className="mb-8 text-text-muted">Das gewünschte Grammatikthema existiert nicht.</p>
        <BackButton />
      </div>
    );
  }

  return (
    <div
      key="grammar-detail-v2-forced-spacing"
      className="relative min-h-screen py-8"
    >
      <main>
        <Hero
          title={currentTopic.title}
          description={currentTopic.description}
          category={currentTopic.category}
          stats={[
            {
              label: "Thema",
              value: (
                <span className="rounded-full border border-yellow/30 bg-yellow/10 px-3 py-1 text-sm font-medium text-yellow">
                  {currentTopic.number}
                </span>
              ),
            },
            { label: "Niveau", value: "B1", icon: <Languages size={18} /> },
          ]}
        />

        {currentTopic.hasTable && currentTopic.tableData ?
          <section className="mb-16">
            <GrammarTable data={currentTopic.tableData} />
          </section>
        : null}

        {currentTopic.content || currentTopic.usage ?
          <section className="mb-16">
            <GrammarContentBlocks
              blocks={currentTopic.content ?? []}
              usage={currentTopic.usage}
            />
          </section>
        : null}

        {currentTopic.subtopics ?
          <section className="mb-16">
            <h2 className="mb-12 flex items-center gap-3 text-xl font-semibold text-text tablet:gap-4 tablet:text-2xl">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-12">
                <BookOpen
                  className="size-5 tablet:size-6"
                  strokeWidth={2}
                />
              </span>
              Unterthemen
            </h2>
            <div className="grid gap-10">
              {currentTopic.subtopics.map((subtopic, index) => (
                <article key={subtopic.id}>
                  <GlassCard rounded="2xl">
                    <header
                      className="flex flex-row items-center gap-4 p-5"
                      style={{ background: getGradient(index + 1, currentSection.gradients) }}
                    >
                      <span className="rounded-md bg-white/20 px-2.5 py-1 text-xs font-bold text-white">
                        {subtopic.number}
                      </span>
                      <h3 className="m-0 text-lg text-white tablet:text-xl">{subtopic.title}</h3>
                    </header>
                    <div className="p-6">
                      <p className="m-0 mb-8 leading-relaxed text-text-muted">
                        {subtopic.description}
                      </p>
                      {subtopic.hasTable && subtopic.tableData ?
                        <div className="mb-12">
                          <GrammarTable data={subtopic.tableData} />
                        </div>
                      : null}
                      {subtopic.content || subtopic.usage || subtopic.tips ?
                        <GrammarContentBlocks
                          blocks={subtopic.content ?? []}
                          usage={subtopic.usage}
                          tips={subtopic.tips}
                        />
                      : null}
                    </div>
                  </GlassCard>
                </article>
              ))}
            </div>
          </section>
        : null}

        {currentTopic.tips ?
          <section className="mb-16">
            <GrammarContentBlocks
              blocks={[]}
              tips={currentTopic.tips}
            />
          </section>
        : null}
      </main>
    </div>
  );
}
