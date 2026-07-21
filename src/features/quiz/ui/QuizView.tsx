import { useNavigate } from "@tanstack/react-router";
import { useQuiz } from "../lib/use-quiz.ts";
// Types
import type { Question } from "../model/types.ts";
import { QuizQuestion } from "./QuizQuestion.tsx";
import { QuizResult } from "./QuizResult.tsx";
import { QuizStart } from "./QuizStart.tsx";

interface QuizViewProperties {
  level: string;
  skill: string;
  testId: string;
  initialQuestions: Question[];
}

const SKILL_TITLES = new Map([
  ["lesen", "Lesen"],
  ["hoeren", "Hören"],
  ["schreiben", "Schreiben"],
  ["sprechen", "Sprechen"],
]);

export default function QuizView({ level, skill, testId, initialQuestions }: QuizViewProperties) {
  const navigate = useNavigate();
  const questions = initialQuestions;

  const {
    currentQuestionIndex,
    score,
    isFinished,
    isStarted,
    currentQuestion,
    userAnswers,
    startQuiz,
    handleAnswer,
    finishQuiz,
  } = useQuiz(questions);

  if (questions.length === 0) {
    return (
      <div className="py-12 text-center">
        <p>Keine Fragen gefunden.</p>
      </div>
    );
  }

  const goBack = () => {
    void navigate({ to: "/pruefung/$level/modelltests", params: { level } });
  };

  const skillTitle = SKILL_TITLES.get(skill) ?? skill;

  return (
    <main className="relative min-h-dvh py-4">
      <article className="relative z-10 flex w-full flex-col rounded-2xl border border-white/10 bg-card px-4 py-6 shadow-2xl backdrop-blur-xl">
        <header className="mb-4 flex items-center justify-between border-b border-white/10 pb-2">
          <h1 className="text-sm font-semibold tracking-widest text-white/50 uppercase">
            {skillTitle} – Modelltest {testId}
          </h1>
          <div className="font-mono text-[10px] text-white/30">Level: {level.toUpperCase()}</div>
        </header>

        <div className="flex flex-1 flex-col">
          {isStarted ?
            isFinished ?
              <QuizResult
                score={score}
                total={questions.length}
                onRestart={startQuiz}
                onExit={goBack}
              />
            : <div className="flex flex-col gap-4">
                {skill === "lesen" || skill === "hoeren" ?
                  <div className="flex flex-col gap-6">
                    {/* Grouping Logic for Reading/Listening Table Look */}
                    {[...new Set(questions.map((q) => q.teil))].map((teilNumber, teilIndex) => {
                      const allInTeil = questions.filter((q) => q.teil === teilNumber);
                      const example = allInTeil.find((q) => q.id === 0);
                      const group = allInTeil.filter((q) => q.id !== 0);
                      const firstQuestion = allInTeil[0];
                      if (!firstQuestion) return null;
                      const firstIndex = questions.indexOf(firstQuestion);
                      const isGroupedTeil =
                        skill === "lesen" ?
                          teilNumber === 1 || teilNumber === 4
                        : teilNumber === 3 || teilNumber === 4;

                      // Find Context
                      let activeContext: string | undefined = firstQuestion.context;
                      if (!activeContext) {
                        for (let index = firstIndex - 1; index >= 0; index--) {
                          const previousQ = questions.at(index);
                          if (previousQ && previousQ.teil === teilNumber && previousQ.context) {
                            activeContext = previousQ.context;
                            break;
                          }
                        }
                      }

                      return (
                        <section
                          key={teilNumber ?? `teil-${teilIndex}`}
                          className="space-y-8"
                        >
                          <div className={isGroupedTeil ? "space-y-3" : "flex flex-col gap-1"}>
                            {/* 1. Header & Context */}
                            <QuizQuestion
                              key={`header-${teilNumber}-${firstIndex}`}
                              question={
                                isGroupedTeil ? firstQuestion : (
                                  { ...firstQuestion, context: "", audioUrl: "" }
                                )
                              }
                              currentStep={firstIndex + 1}
                              onAnswer={() => {}}
                              skill={skill}
                              variant="header"
                              activeContext={isGroupedTeil ? activeContext : undefined}
                            />

                            {/* 2. Questions */}
                            {isGroupedTeil ?
                              /* Grouped in ONE TABLE (Card) */
                              <div
                                key={`group-${teilNumber}`}
                                className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/10"
                              >
                                {example ?
                                  <div className="border-b border-white/10">
                                    <QuizQuestion
                                      question={example}
                                      currentStep={0}
                                      onAnswer={() => {}}
                                      skill={skill}
                                      variant="example-row"
                                      selectedAnswer={example.correctAnswer}
                                    />
                                  </div>
                                : null}
                                {group.map((q, index) => (
                                  <div
                                    key={q.id}
                                    className={
                                      index < group.length - 1 ? "border-b border-white/5" : ""
                                    }
                                  >
                                    <QuizQuestion
                                      question={q}
                                      currentStep={q.id}
                                      onAnswer={(ans) => handleAnswer(ans, questions.indexOf(q))}
                                      selectedAnswer={userAnswers.at(questions.indexOf(q))}
                                      variant="table-row"
                                      skill={skill}
                                    />
                                  </div>
                                ))}
                              </div>
                            : /* Standard Individual Cards */
                              <div className="space-y-6">
                                {example ?
                                  <QuizQuestion
                                    question={example}
                                    currentStep={0}
                                    onAnswer={() => {}}
                                    skill={skill}
                                    variant="example"
                                    selectedAnswer={example.correctAnswer}
                                  />
                                : null}
                                {group.map((q) => (
                                  <QuizQuestion
                                    key={q.id}
                                    question={q}
                                    currentStep={q.id}
                                    onAnswer={(ans) => handleAnswer(ans, questions.indexOf(q))}
                                    selectedAnswer={userAnswers[questions.indexOf(q)]}
                                    skill={skill}
                                  />
                                ))}
                              </div>
                            }
                          </div>

                          {/* Decorative Separator between Teils */}
                          {(() => {
                            const lastGroupQ = group.at(-1);
                            return (
                                lastGroupQ && questions.indexOf(lastGroupQ) < questions.length - 1
                              ) ?
                                <div
                                  key={`sep-${teilNumber}`}
                                  className="flex justify-center py-10"
                                >
                                  <div className="h-1 w-24 rounded-full bg-linear-to-r from-yellow to-orange shadow-lg shadow-yellow/20" />
                                </div>
                              : null;
                          })()}
                        </section>
                      );
                    })}
                    <div className="mt-4 flex justify-center border-t border-white/10 pt-4">
                      <button
                        type="button"
                        onClick={finishQuiz}
                        className="rounded border border-yellow/50 bg-yellow/10 px-8 py-2 text-sm font-bold text-yellow transition-all hover:bg-yellow hover:text-black"
                      >
                        Prüfung beenden
                      </button>
                    </div>
                  </div>
                : currentQuestion ?
                  <QuizQuestion
                    question={currentQuestion}
                    currentStep={currentQuestionIndex + 1}
                    onAnswer={handleAnswer}
                    selectedAnswer={userAnswers.at(currentQuestionIndex)}
                  />
                : null}
              </div>

          : <QuizStart
              title={`${skillTitle} – Übungsprüfung ${testId}`}
              description={`Bereiten Sie sich auf das Goethe/ÖSD Zertifikat ${level.toUpperCase()} vor. Dieses Modul umfasst ${questions.length} Aufgaben.`}
              questionCount={questions.length}
              duration={skill === "lesen" ? 65 : 40}
              onStart={startQuiz}
            />
          }
        </div>
      </article>
    </main>
  );
}
