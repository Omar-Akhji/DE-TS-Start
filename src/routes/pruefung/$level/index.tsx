import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  ClipboardList,
  Clock,
  FileEdit,
  Lightbulb,
  MessageCircle,
} from "lucide-react";
import { getExamLevel } from "../../../features/pruefung/api/services";
import { PRUEFUNG_GRADIENTS } from "../../../shared/lib/gradients";
import { getGradient } from "../../../shared/lib/utilities";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll";
import { BackButton } from "../../../shared/ui/BackButton";
import { Hero } from "../../../shared/ui/Hero";
import { Skeleton } from "../../../shared/ui/Skeleton";
import {
  HeroSkeleton,
  SectionHeaderSkeleton,
  TableSkeleton,
} from "../../../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/pruefung/$level/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async ({ params: { level } }) => {
    const { data: currentExam } = await getExamLevel(level);
    return { currentExam };
  },
  pendingComponent: () => (
    <div className="relative min-h-dvh py-8">
      <main>
        <HeroSkeleton />
        <div className="mb-12 flex justify-center">
          <Skeleton className="h-14 w-64 rounded-full bg-white/5" />
        </div>
        <section className="mb-12">
          <SectionHeaderSkeleton />
          <div className="grid gap-6">
            {["m1", "m2", "m3", "m4"].map((id) => (
              <article
                key={id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-card"
              >
                <div className="flex flex-col items-start gap-4 bg-white/5 p-5 md:flex-row md:items-center md:justify-between">
                  <Skeleton className="h-7 w-32 bg-white/15" />
                  <div className="flex gap-4">
                    <Skeleton className="h-5 w-20 bg-white/10" />
                    <Skeleton className="h-5 w-24 bg-white/10" />
                  </div>
                </div>
                <div className="p-6">
                  <Skeleton className="mb-4 h-4 w-full bg-white/5" />
                  <TableSkeleton
                    rows={3}
                    columns={4}
                    noWrapper
                  />
                  <div className="mt-6 flex flex-col gap-6">
                    <div className="space-y-2 rounded-xl border border-white/10 bg-white/5 p-4">
                      <Skeleton className="h-4 w-20 bg-white/8" />
                      <Skeleton className="h-3 w-full bg-white/5" />
                      <Skeleton className="h-3 w-4/5 bg-white/5" />
                    </div>
                    <Skeleton className="h-12 w-56 rounded-full bg-white/10 md:self-start" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  ),
  head: ({ loaderData }) => {
    const currentExam = loaderData?.currentExam;
    return {
      meta: [
        { title: currentExam ? `${currentExam.title} - Prüfung` : "Prüfungsstufe" },
        {
          name: "description",
          content: currentExam?.description ?? "Bereite dich auf deine Deutschprüfung vor.",
        },
      ],
    };
  },
  component: PruefungDetailPage,
});

function PruefungDetailPage() {
  const { currentExam } = Route.useLoaderData();

  if (!currentExam) {
    return (
      <div className="px-8 py-16 text-center">
        <h1 className="mb-4 text-3xl">Prüfung nicht gefunden</h1>
        <p className="mb-8 text-text-muted">Die gewünschte Prüfungsstufe existiert nicht.</p>
        <BackButton />
      </div>
    );
  }

  return (
    <div className="relative min-h-dvh py-8">
      <main>
        <Hero
          key="hero-clean-v2"
          title={currentExam.title}
          description={currentExam.description}
          category={currentExam.level}
          variant="glass"
          stats={[
            { label: "Dauer", value: currentExam.totalDuration, icon: <Clock size={18} /> },
            {
              label: "Bestehen",
              value: currentExam.passingScore,
              icon: <CheckCircle2 size={18} />,
            },
          ]}
        />

        <div className="mb-12 flex justify-center">
          <AnimateOnScroll
            animation="fade-up"
            delay={400}
          >
            <Link
              to="/pruefung/$level/modelltests"
              params={{ level: currentExam.level }}
              className="group flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-xl font-bold text-white backdrop-blur-md hover:bg-white/10 hover:text-white"
            >
              <FileEdit
                className="text-yellow"
                size={24}
              />
              Modelltests Starten
            </Link>
          </AnimateOnScroll>
        </div>

        <section className="mb-12">
          <AnimateOnScroll animation="fade-right">
            <h2 className="mb-8 flex items-center gap-3 text-xl font-semibold text-text tablet:gap-4 tablet:text-[1.75rem]">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-12">
                <ClipboardList
                  className="size-5 tablet:size-6"
                  strokeWidth={2}
                />
              </span>
              Prüfungsstruktur
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-6">
            {currentExam.sections.map((section, index) => (
              <AnimateOnScroll
                key={section.id}
                animation="fade-up"
                delay={index * 100}
              >
                <article className="overflow-hidden rounded-2xl border border-(--glass-border) bg-card">
                  <div
                    className="flex flex-col items-start gap-4 p-5 md:flex-row md:items-center md:justify-between"
                    style={{ background: getGradient(index, PRUEFUNG_GRADIENTS) }}
                  >
                    <h3 className="m-0 text-xl font-semibold text-white">{section.title}</h3>
                    <div className="flex gap-4 text-sm text-white/90">
                      <span>{section.duration}</span>
                      <span>{section.points} Punkte</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-text-muted">{section.description}</p>
                    <table className="mb-4 w-full border-collapse text-sm">
                      <caption className="sr-only">Prüfungsstruktur Übersicht</caption>
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3"
                          >
                            Teil
                          </th>
                          <th
                            scope="col"
                            className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3"
                          >
                            Aufgabentyp
                          </th>
                          <th
                            scope="col"
                            className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3"
                          >
                            Items
                          </th>
                          <th
                            scope="col"
                            className="border-b border-(--glass-border) p-2 text-left text-xs font-semibold tracking-wide text-text-muted uppercase md:p-3"
                          >
                            Punkte
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.parts.map((part) => (
                          <tr key={part.name}>
                            <td className="border-b border-(--glass-border) p-2 text-text md:p-3">
                              {part.name}
                            </td>
                            <td className="border-b border-(--glass-border) p-2 text-text md:p-3">
                              {part.taskType}
                            </td>
                            <td className="border-b border-(--glass-border) p-2 text-text md:p-3">
                              {part.items}
                            </td>
                            <td className="border-b border-(--glass-border) p-2 text-text md:p-3">
                              {part.points}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="mt-6 flex flex-col gap-6">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <h4 className="m-0 mb-3 flex items-center gap-2 text-sm font-semibold text-text">
                          <Lightbulb
                            size={16}
                            className="text-yellow"
                          />{" "}
                          Tipps
                        </h4>
                        <ul className="m-0 list-disc space-y-1 pl-5">
                          {section.tips.map((tip) => (
                            <li
                              key={tip}
                              className="text-sm text-text-muted"
                            >
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {(section.id.includes("sprechen") || section.id.includes("schreiben")) && (
                        <Link
                          to="/pruefung/$level/$module"
                          params={{
                            level: currentExam.level,
                            module: section.id.split("-", 2)[1] as "sprechen" | "schreiben",
                          }}
                          className="group md:is-auto flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-amber-400 to-orange-500 px-8 py-3.5 font-bold text-zinc-950 shadow-lg shadow-amber-500/20 transition-[transform,filter] inline-full hover:scale-[1.02] hover:brightness-110 active:scale-95 md:self-start"
                        >
                          <MessageCircle
                            size={20}
                            className="transition-transform group-hover:rotate-12"
                          />
                          Lernmodus öffnen
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
