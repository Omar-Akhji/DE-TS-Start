import { createFileRoute, redirect } from "@tanstack/react-router";
import { getExamLevel, getRedemittel } from "../../../../features/pruefung/api/services";
import { ModuleStudyView } from "../../../../features/pruefung/ui/ModuleStudyView";
import { getThemen } from "../../../../features/themen/api/services";
import { AnimateOnScroll } from "../../../../shared/ui/AnimateOnScroll";
import { Skeleton } from "../../../../shared/ui/Skeleton";
import { HeroSkeleton } from "../../../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/pruefung/$level/$module/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async ({ params: { level, module: moduleName } }) => {
    if (moduleName !== "sprechen" && moduleName !== "schreiben") {
      throw redirect({ to: "/pruefung/$level", params: { level } });
    }

    const [examResponse, redemittelResponse, themenResponse] = await Promise.all([
      getExamLevel(level),
      getRedemittel(level),
      getThemen(),
    ]);

    const currentExam = examResponse.data;
    if (!currentExam) throw redirect({ to: "/pruefung", params: {} });

    return {
      level,
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
      moduleName: moduleName as "sprechen" | "schreiben",
      currentExam,
      redemittel: redemittelResponse.data,
      themen: themenResponse.data,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Modul - Vorbereitung" }] };
    }
    const moduleTitle =
      loaderData.moduleName.charAt(0).toUpperCase() + loaderData.moduleName.slice(1);
    return {
      meta: [
        { title: `${loaderData.currentExam.level} ${moduleTitle} - Vorbereitung` },
        {
          name: "description",
          content: `Struktur-Checkliste und Themen für den ${moduleTitle}-Teil der ${loaderData.currentExam.level} Prüfung.`,
        },
      ],
    };
  },
  pendingComponent: () => (
    <div className="relative min-h-screen py-8">
      <main className="space-y-12 pb-20">
        <HeroSkeleton />

        <div className="space-y-16">
          {/* Exam Parts */}
          {["part-1", "part-2", "part-3"].map((partId) => (
            <section
              key={partId}
              className="space-y-8"
            >
              {/* Part Header */}
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-6 w-16 rounded-lg bg-white/10" />
                    <Skeleton className="h-8 w-48 bg-white/8" />
                  </div>
                  <Skeleton className="h-5 w-96 max-w-full bg-white/5" />
                </div>
                <Skeleton className="h-10 w-24 rounded-full bg-white/5" />
              </div>

              {/* Structure Checkbox Card */}
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg">
                <div className="border-b border-white/10 bg-white/5 px-6 py-4">
                  <Skeleton className="h-6 w-48 bg-white/10" />
                </div>
                <div className="divide-y divide-white/10">
                  {["step-1", "step-2", "step-3", "step-4"].map((stepId) => (
                    <div
                      key={stepId}
                      className="flex items-center justify-between px-6 py-5"
                    >
                      <div className="flex items-center gap-4">
                        <Skeleton className="size-6 rounded-full bg-white/10" />
                        <Skeleton className="h-5 w-64 bg-white/5" />
                      </div>
                      <Skeleton className="size-5 rounded bg-white/10" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* Topics Integration Section */}
          <section className="border-t border-white/10 pt-12">
            <div className="mb-10">
              <Skeleton className="mb-2 h-10 w-80 bg-white/10" />
              <Skeleton className="h-6 w-full max-w-2xl bg-white/5" />
            </div>
            {/* ThemenSection Skeleton Grid */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {["topic-1", "topic-2", "topic-3", "topic-4", "topic-5", "topic-6"].map((topicId) => (
                <div
                  key={topicId}
                  className="h-48 rounded-2xl border border-white/10 bg-white/5 shadow-md"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  ),
  component: ModulePage,
});

function ModulePage() {
  const { level, moduleName, currentExam, redemittel, themen } = Route.useLoaderData();

  return (
    <AnimateOnScroll
      as="main"
      animation="fade-up"
    >
      <ModuleStudyView
        level={level}
        module={moduleName}
        examData={currentExam}
        redemittel={redemittel}
        initialThemen={themen}
      />
    </AnimateOnScroll>
  );
}
