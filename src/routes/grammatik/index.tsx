import { createFileRoute } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";
import { getGrammarSection } from "../../features/grammar/api/services";
import { GrammarSectionCards } from "../../features/grammar/ui/GrammarSectionCards";
import { AnimateOnScroll } from "../../shared/ui/AnimateOnScroll";
import { PageHeader } from "../../shared/ui/PageHeader";
import { PageHeaderSkeleton, SectionCardSkeleton } from "../../shared/ui/SkeletonLayouts";

const GRAMMAR_SECTION_IDS = [
  "verben",
  "nomen",
  "praepositionen",
  "satz",
  "adverbien",
  "partikeln",
] as const;

export const Route = createFileRoute("/grammatik/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async () => {
    const sections = await Promise.all(GRAMMAR_SECTION_IDS.map((id) => getGrammarSection(id)));
    return {
      sections: sections.map((s) => s.data).filter((s): s is NonNullable<typeof s> => s != null),
    };
  },
  head: () => ({
    meta: [
      { title: "Grammatik | Deutsch Lernen" },
      {
        name: "description",
        content:
          "Deutsche Grammatik lernen - Verben, Nomen, Präpositionen, Satzstrukturen. Übersichtliche Erklärungen für alle Niveaus.",
      },
    ],
  }),
  pendingComponent: () => (
    <main className="min-h-dvh">
      <PageHeaderSkeleton />
      {["g1", "g2", "g3", "g4", "g5", "g6"].map((id) => (
        <SectionCardSkeleton key={id} />
      ))}
    </main>
  ),
  component: GrammatikPage,
});

function GrammatikPage() {
  const { sections } = Route.useLoaderData();

  return (
    <AnimateOnScroll
      as="main"
      animation="fade-up"
    >
      <PageHeader
        icon={BookOpen}
        title="Deutsche Grammatik"
        subtitle="Übersichtliche Erklärungen und Strukturen für dein B1/B2 Training"
      />
      {sections.map((section) => (
        <GrammarSectionCards
          key={section.id}
          section={section}
        />
      ))}
    </AnimateOnScroll>
  );
}
