import { createFileRoute } from "@tanstack/react-router";
import { getQuestions } from "../../../../../features/quiz/api/services";
import QuizView from "../../../../../features/quiz/ui/QuizView";
import { Skeleton } from "../../../../../shared/ui/Skeleton";

export const Route = createFileRoute("/quiz/$level/$skill/$testId/")({
  gcTime: 0,
  pendingMs: 0,
  loader: async ({ params: { level, skill, testId } }) => {
    const { data: questions } = await getQuestions(level, skill, Number.parseInt(testId));
    return { level, skill, testId, questions };
  },
  head: () => ({
    meta: [
      { title: "Quiz | Deutsch Lernen" },
      {
        name: "description",
        content:
          "Teste dein Wissen mit interaktiven Quizfragen zu Lesen, Hören, Schreiben und Sprechen.",
      },
    ],
  }),
  pendingComponent: () => (
    <div className="relative min-h-screen py-4">
      <div className="relative z-10 flex min-h-125 w-full flex-col rounded-2xl border border-white/10 bg-card px-4 py-6 shadow-2xl backdrop-blur-xl">
        <header className="mb-4 flex items-center justify-between border-b border-white/10 pb-2">
          <Skeleton className="h-5 w-48 bg-white/5" />
          <Skeleton className="h-3 w-16 bg-white/5" />
        </header>

        <div className="flex flex-1 flex-col">
          <section className="mx-auto w-full max-w-lg p-8 text-center">
            {/* Exam badge */}
            <div className="mx-auto mb-6 flex justify-center">
              <Skeleton className="h-8 w-56 rounded-full border border-white/10 bg-white/5" />
            </div>
            {/* Title */}
            <Skeleton className="mx-auto mb-3 h-9 w-64 bg-white/8" />
            {/* Description */}
            <Skeleton className="mx-auto mb-2 h-5 w-full bg-white/5" />
            <Skeleton className="mx-auto mb-8 h-5 w-4/5 bg-white/5" />
            {/* Exam info cards */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              {["info-1", "info-2"].map((id) => (
                <div
                  key={id}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <Skeleton className="mx-auto mb-2 h-8 w-12 bg-white/10" />
                  <Skeleton className="mx-auto h-3 w-24 bg-white/5" />
                </div>
              ))}
            </div>
            {/* Start Button */}
            <Skeleton className="h-14 w-full rounded-full bg-white/10" />
          </section>
        </div>
      </div>
    </div>
  ),
  component: QuizPage,
});

function QuizPage() {
  const { level, skill, testId, questions } = Route.useLoaderData();

  return (
    <QuizView
      level={level}
      skill={skill}
      testId={testId}
      initialQuestions={questions}
    />
  );
}
