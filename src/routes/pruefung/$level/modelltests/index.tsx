import { createFileRoute } from "@tanstack/react-router";
import { getModelTests } from "../../../../features/pruefung/api/services";
import ModelTestsView from "../../../../features/pruefung/ui/ModelTestsView";
import { Skeleton } from "../../../../shared/ui/Skeleton";
import {
  CardSkeleton,
  HeroSkeleton,
  SectionHeaderSkeleton,
} from "../../../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/pruefung/$level/modelltests/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async ({ params: { level } }) => {
    const { data: modelTests } = await getModelTests(level);
    return { level, modelTests };
  },
  head: () => ({
    meta: [
      { title: "Modelltests | Deutsch Lernen" },
      { name: "description", content: "Übe mit offiziellen Modelltests für deine Deutschprüfung." },
    ],
  }),
  pendingComponent: () => (
    <div className="relative min-h-dvh py-8">
      <main>
        <HeroSkeleton />
        {/* Back link */}
        <div className="mt-8 mb-12 flex justify-center">
          <Skeleton className="h-10 w-52 rounded-full bg-white/5" />
        </div>
        {/* Skill sections */}
        <div className="grid gap-12">
          {["sk-1", "sk-2", "sk-3", "sk-4"].map((secId) => (
            <section key={secId}>
              <SectionHeaderSkeleton />

              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                {["c1", "c2", "c3"].map((cardId) => (
                  <CardSkeleton key={cardId} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  ),
  component: ModelTestsPage,
});

function ModelTestsPage() {
  const { level, modelTests } = Route.useLoaderData();

  return (
    <ModelTestsView
      level={level}
      initialModelTests={modelTests}
    />
  );
}
