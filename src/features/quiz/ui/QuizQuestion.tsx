import { useRef, useState } from "react";
import type { Question } from "../model/types.ts";
import { AdDetailDialog, AnswerOptions, ContextCard, TeilHeader } from "./QuizQuestionParts.tsx";

type QuizQuestionVariant = "standard" | "table-row" | "header" | "example" | "example-row";

interface QuizQuestionProperties {
  question: Question;
  currentStep: number;
  onAnswer: (answer: string | string[]) => void;
  /** The answer selected by the user (if any) */
  selectedAnswer?: string | string[] | null | undefined;
  /** Context carried forward from the previous question in the same Teil */
  activeContext?: string | undefined;
  /** The skill being tested (lesen, hoeren, etc.) */
  skill?: string | undefined;

  /* Layout Variant */
  variant?: QuizQuestionVariant;
}

export const QuizQuestion = ({
  question,
  currentStep,
  onAnswer,
  selectedAnswer,
  activeContext,
  skill,
  variant = "standard",
}: QuizQuestionProperties) => {
  // Map variant to internal logic flags for backward compatibility or internal cleanliness
  const isHeader = variant === "header";
  const isTableRow = variant === "table-row" || variant === "example-row";
  const isExample = variant === "example" || variant === "example-row";
  const isHideQuestionBody = isHeader;
  const isShowTeilHeader = isHeader;
  const [selectedAd, setSelectedAd] = useState<{ letter: string; content: string } | null>(null);
  const dialogReference = useRef<HTMLDialogElement>(null);

  const handleSelectAd = (ad: { letter: string; content: string }) => {
    setSelectedAd(() => ad);
    dialogReference.current?.showModal();
  };

  const handleCloseAd = () => {
    dialogReference.current?.close();
    setSelectedAd(null);
  };

  const displayContext = question.context ?? activeContext;

  const contextLabel =
    skill === "hoeren" ? "Sie hören:"
    : skill === "lesen" ? "Lesen Sie den Text:"
    : "Text:";

  const isRichtigFalsch =
    question.options?.length === 2
    && question.options[0] === "Richtig"
    && question.options[1] === "Falsch";

  const isJaNein =
    question.options?.length === 2
    && question.options[0] === "Ja"
    && question.options[1] === "Nein";
  const isABC =
    question.options?.length === 3
    && question.options[0] === "a"
    && question.options[1] === "b"
    && question.options[2] === "c";

  const isCompactRow = isRichtigFalsch || isJaNein || (isTableRow && isABC);
  const cleanedQuestionText = question.question.replace(/^\d+\.\s*/, "");

  return (
    <article className={`mx-auto w-full animate-fade-in ${isTableRow ? "" : "space-y-6"}`}>
      {isShowTeilHeader && !isTableRow ?
        <TeilHeader
          teil={question.teil}
          teilTitle={question.teilTitle}
          teilInstruction={question.teilInstruction}
        />
      : null}

      {displayContext && !isTableRow ?
        <div className="relative">
          <ContextCard
            context={displayContext}
            contextLabel={contextLabel}
            question={question}
            skill={skill}
            onSelectAd={handleSelectAd}
          />
        </div>
      : null}

      {isHideQuestionBody ? null : (
        <div
          className={
            isTableRow ? "w-full" : (
              "group relative overflow-hidden rounded-xl border border-white/10 bg-zinc-950/40 backdrop-blur-md transition-colors hover:bg-zinc-900/60"
            )
          }
        >
          <div className={isTableRow ? "px-4 py-3 lg:px-5" : "p-4 lg:p-5"}>
            {isExample ?
              <div className="mb-4 flex items-center justify-between border-b border-yellow/10 pb-3">
                <span className="text-[10px] font-bold tracking-widest text-yellow uppercase tablet:text-xs">
                  Beispiel
                </span>
                {!isTableRow && (
                  <span className="text-[10px] text-yellow/50 italic">Vorgegebenes Beispiel</span>
                )}
              </div>
            : null}
            <AnswerOptions
              options={question.options}
              selectedAnswer={selectedAnswer}
              onAnswer={onAnswer}
              currentStep={currentStep}
              questionText={cleanedQuestionText}
              questionType={question.type}
              isCompact={isCompactRow}
              isTableRow={isTableRow}
            />
          </div>
        </div>
      )}

      <AdDetailDialog
        dialogRef={dialogReference}
        selectedAd={selectedAd}
        onClose={handleCloseAd}
      />
    </article>
  );
};
