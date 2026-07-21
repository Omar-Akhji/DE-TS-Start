import { createFileRoute } from "@tanstack/react-router";
import { ClipboardList } from "lucide-react";
import { getExamLevels } from "../../features/pruefung/api/services";
import { PruefungSection } from "../../features/pruefung/ui/PruefungSection";
import { AnimateOnScroll } from "../../shared/ui/AnimateOnScroll";
import { PageHeader } from "../../shared/ui/PageHeader";
import { CardSkeleton, PageHeaderSkeleton } from "../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/pruefung/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async () => {
    const { data: examLevels } = await getExamLevels();
    return { examLevels };
  },
  pendingComponent: () => (
    <main className="min-h-dvh">
      <PageHeaderSkeleton />
      <ul className="m-0 grid list-none grid-cols-1 gap-8 p-0 laptop:grid-cols-2">
        {["p1", "p2"].map((id) => (
          <li
            key={id}
            className="h-full"
          >
            <CardSkeleton variant="large" />
          </li>
        ))}
      </ul>
    </main>
  ),
  head: () => ({
    meta: [
      { title: "Prüfungstraining | Deutsch Lernen" },
      {
        name: "description",
        content:
          "B1/B2 Prüfungsvorbereitung - Modelltests, Lesen, Hören, Schreiben, Sprechen. Trainiere für deine Deutschprüfung.",
      },
    ],
  }),
  component: PruefungPage,
});

function PruefungPage() {
  const { examLevels } = Route.useLoaderData();

  return (
    <AnimateOnScroll
      as="main"
      animation="fade-up"
    >
      <PageHeader
        icon={ClipboardList}
        title="Prüfungstraining"
        subtitle="Strukturierte Vorbereitung auf die Goethe & ÖSD Zertifikate B1 und B2"
      />
      <PruefungSection examLevels={examLevels} />
    </AnimateOnScroll>
  );
}
