import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Languages } from "lucide-react";
import { getVocabById } from "../../../features/vocabulary/api/services";
import { VOCAB_GRADIENTS } from "../../../shared/lib/gradients";
import { getGradient } from "../../../shared/lib/utilities";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll";
import { BackButton } from "../../../shared/ui/BackButton";
import { GlassCard } from "../../../shared/ui/GlassCard";
import { Hero } from "../../../shared/ui/Hero";
import { Skeleton } from "../../../shared/ui/Skeleton";
import { HeroSkeleton } from "../../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/vokabeln/$id/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async ({ params: { id } }) => {
    const { data: item } = await getVocabById(id);
    return { item };
  },
  head: ({ loaderData }) => {
    const item = loaderData?.item;
    return {
      meta: [
        { title: item ? `${item.german} - Vokabeln` : "Vokabel Lektion" },
        { name: "description", content: item?.description ?? "Lerne wichtige deutsche Vokabeln." },
      ],
    };
  },
  pendingComponent: () => (
    <div className="relative min-h-screen py-8">
      <main>
        <HeroSkeleton />
        <div className="grid gap-12">
          {["m1", "m2"].map((id) => (
            <section key={id}>
              <div className="mb-8 flex flex-col items-start gap-4 rounded-2xl bg-white/10 p-6 md:flex-row md:items-center md:justify-between">
                <Skeleton className="h-8 w-48 bg-white/15" />
                <Skeleton className="h-6 w-20 rounded-full bg-white/10" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {["c1", "c2", "c3"].map((cid) => (
                  <div
                    key={cid}
                    className="rounded-2xl border border-white/10 bg-card p-5"
                  >
                    <Skeleton className="mb-2 h-7 w-3/4 bg-white/8" />
                    <Skeleton className="h-4 w-32 bg-white/5" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  ),
  component: VokabelnDetailPage,
});

function VokabelnDetailPage() {
  const { item } = Route.useLoaderData();

  if (!item) {
    return (
      <div className="px-8 py-16 text-center">
        <h1 className="mb-4 text-3xl">Lektion nicht gefunden</h1>
        <p className="mb-8 text-text-muted">Die gewünschte Vokabellektion existiert nicht.</p>
        <BackButton />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-8">
      <main>
        <Hero
          key={`vocab-${item.id}`}
          title={item.german}
          description={item.description ?? "Vokabeln und Ausdrücke"}
          category={item.category}
          stats={[
            {
              label: "Themen",
              value: (
                <span className="rounded-full border border-yellow/30 bg-yellow/10 px-3 py-1 text-sm font-medium text-yellow">
                  {String(
                    item.sections?.reduce((accumulator, sec) => accumulator + sec.topics.length, 0)
                      ?? item.words?.length
                      ?? 0,
                  ) + " Themen"}
                </span>
              ),
            },
            { label: "Niveau", value: "A1", icon: <Languages size={18} /> },
          ]}
        />

        {item.sections && item.sections.length > 0 ?
          <div className="grid gap-12">
            {item.sections.map((section, index) => (
              <AnimateOnScroll
                as="section"
                animation="fade-up"
                delay={index * 100}
                key={section.id}
                aria-labelledby={`section-${section.id}`}
              >
                <div
                  className="mb-8 flex flex-col items-start gap-4 rounded-2xl p-6 md:flex-row md:items-center md:justify-between"
                  style={{ background: getGradient(index, VOCAB_GRADIENTS) }}
                >
                  <h2
                    id={`section-${section.id}`}
                    className="m-0 text-2xl font-semibold tracking-wide text-white uppercase"
                  >
                    {section.title}
                  </h2>
                  <div className="rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    {section.topics.length} Themen
                  </div>
                </div>

                {section.topics.length > 0 ?
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {section.topics.map((topic) => (
                      <Link
                        key={topic.id}
                        to="/vokabeln/$id/$topicId"
                        params={{ id: item.id.toString(), topicId: topic.id }}
                        className="group block no-underline"
                      >
                        <GlassCard
                          className="p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-(--color-primary) group-hover:shadow-lg"
                          rounded="2xl"
                        >
                          <h3 className="mb-2 text-lg font-semibold text-text group-hover:text-yellow">
                            {topic.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-text-muted">
                            <ArrowRight
                              size={14}
                              className="text-secondary"
                            />
                            <span>Details ansehen</span>
                          </div>
                        </GlassCard>
                      </Link>
                    ))}
                  </div>
                : <div className="rounded-xl border border-dashed border-(--glass-border) p-6 text-center text-text-muted">
                    Noch keine Themen in diesem Bereich.
                  </div>
                }
              </AnimateOnScroll>
            ))}
          </div>
        : <AnimateOnScroll
            as="section"
            animation="fade-up"
            className="mb-12"
          >
            <h2 className="mb-8 flex items-center gap-4 text-[1.75rem] font-semibold text-text">
              <span className="flex size-12 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm">
                <BookOpen
                  size={24}
                  strokeWidth={2}
                />
              </span>
              Wortliste
            </h2>

            {item.words && item.words.length > 0 ?
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {item.words.map((word) => (
                  <article
                    key={`${word.german}-${word.arabic}`}
                    className="group"
                  >
                    <GlassCard
                      className="p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-(--color-primary) group-hover:shadow-lg"
                      rounded="2xl"
                    >
                      <div className="mb-2 flex items-baseline justify-between">
                        <h3 className="text-lg font-semibold text-text">{word.german}</h3>
                      </div>
                      <p className="font-arabic mb-3 text-xl font-medium text-white">
                        {word.arabic}
                      </p>
                      <p className="text-sm text-text-muted italic">&quot;{word.example}&quot;</p>
                    </GlassCard>
                  </article>
                ))}
              </div>
            : <div className="rounded-xl border border-dashed border-(--glass-border) p-8 text-center text-text-muted">
                <p>Noch keine Vokabeln eingetragen.</p>
              </div>
            }
          </AnimateOnScroll>
        }
      </main>
    </div>
  );
}
