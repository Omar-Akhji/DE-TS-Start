import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Question } from "../model/types.ts";

interface TeilHeaderProperties {
  teil: number | undefined;
  teilTitle: string | undefined;
  teilInstruction: string | undefined;
}

export function TeilHeader({ teil, teilTitle, teilInstruction }: TeilHeaderProperties) {
  return (
    <header className="mb-6 border-b-2 border-white/10 pb-2">
      <div className="flex items-baseline gap-2">
        <span className="text-base font-bold text-yellow tablet:text-lg">Teil {teil}</span>
        <h2 className="text-xs font-semibold tracking-wide text-white/90 uppercase tablet:text-sm">
          {teilTitle ?? "Modul Lesen"}
        </h2>
      </div>
      {teilInstruction ?
        <p className="mt-1 text-xs leading-tight font-medium text-white/40 italic">
          {teilInstruction}
        </p>
      : null}
    </header>
  );
}

interface ContextCardProperties {
  context: string;
  contextLabel: string;
  question: Question;
  skill?: string | undefined;
  onSelectAd: (ad: { letter: string; content: string }) => void;
}

export function ContextCard({
  context,
  contextLabel,
  question,
  skill,
  onSelectAd,
}: ContextCardProperties) {
  if (skill === "lesen" && question.teil === 3) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {context
            .split(/\n(?=[a-j]\))/)
            .slice(1)
            .map((ad) => {
              const letter = ad.match(/^([a-j])\)/)?.[1];
              if (!letter) return null;

              const content = ad.replace(/^[a-j]\)\s*/, "");

              return (
                <button
                  key={letter}
                  type="button"
                  onClick={() => onSelectAd({ letter, content })}
                  className="group relative min-h-30 cursor-pointer rounded-lg border border-white/10 bg-zinc-950/60 p-5 pt-9 text-left text-white/90 shadow-lg backdrop-blur-md transition-[colors,transform] duration-200 hover:bg-zinc-900/80 focus:ring-2 focus:ring-yellow/50 focus:outline-hidden active:scale-95"
                >
                  <div className="absolute top-0 left-0 rounded-tl-lg rounded-br-lg border-r border-b border-white/10 bg-zinc-900/90 px-2.5 py-1 text-[10px] font-black text-yellow uppercase shadow-sm">
                    {letter}
                  </div>
                  <p className="font-serif text-xs leading-relaxed text-white/80 tablet:text-sm">
                    {content}
                  </p>
                  <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03]" />
                </button>
              );
            })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-zinc-900/40 shadow-lg backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.02]" />
      <div className="relative p-5">
        <div className="mb-3 flex items-center gap-3">
          <h4 className="text-[9px] font-semibold tracking-[0.3em] text-yellow/60 uppercase">
            {contextLabel}
          </h4>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <p className="mb-4 font-serif text-xs leading-relaxed whitespace-pre-line text-white/80 tablet:text-sm">
          {context}
        </p>
        {question.audioUrl ?
          <div className="flex justify-center">
            <audio
              controls
              className="h-10 w-full max-w-md rounded-full bg-zinc-800/50 accent-yellow"
            >
              <source
                src={question.audioUrl}
                type="audio/mpeg"
              />
              <track
                kind="captions"
                srcLang="de"
                label="Deutsche Untertitel"
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        : null}
      </div>
    </div>
  );
}

interface AnswerOptionsProperties {
  options: string[] | undefined;
  selectedAnswer: string | string[] | null | undefined;
  onAnswer: (answer: string | string[]) => void;
  currentStep: number;
  questionText: string;
  questionType?: string | undefined;
  isCompact: boolean;
  isTableRow?: boolean | undefined;
}

export function AnswerOptions({
  options,
  selectedAnswer,
  onAnswer,
  currentStep,
  questionText,
  questionType,
  isCompact,
  isTableRow,
}: AnswerOptionsProperties) {
  if (isCompact) {
    return (
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-baseline gap-3">
          <span className="text-xs font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,191,0,0.3)] tablet:text-sm">
            {currentStep}.
          </span>
          <h3 className="text-xs leading-tight font-semibold text-white/90 tablet:text-sm">
            {questionText}
          </h3>
        </div>
        <div className="flex flex-none gap-2">
          {options?.map((option) => {
            const isSelected = selectedAnswer === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onAnswer(option)}
                className={`${
                  isTableRow ? "min-w-16 py-1.5 text-[9px]" : "min-w-17.5 py-2 text-[10px]"
                } rounded-full border font-bold tracking-tighter uppercase transition-all ${
                  isSelected ?
                    "border-yellow bg-linear-to-br from-yellow to-orange text-black shadow-lg shadow-yellow/20"
                  : "border-white/10 bg-white/5 text-white/40 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (questionType === "matching") {
    return (
      <div className="space-y-4">
        <div className="flex items-baseline gap-3">
          <span className="text-sm font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,191,0,0.3)]">
            {currentStep}.
          </span>
          <h3 className="text-sm leading-tight font-semibold text-white/90">{questionText}</h3>
        </div>
        <div className="grid grid-cols-6 gap-px overflow-hidden rounded-lg border border-white/10 bg-zinc-950/50 backdrop-blur-sm sm:grid-cols-11">
          {options?.map((option) => {
            const isSelected = selectedAnswer === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => onAnswer(option)}
                className={`flex h-10 items-center justify-center text-xs font-black transition-all ${
                  isSelected ?
                    "bg-linear-to-br from-yellow to-orange text-black shadow-inner"
                  : "bg-zinc-950/80 text-white/30 hover:bg-zinc-800 hover:text-white/80"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-bold text-yellow drop-shadow-[0_0_10px_rgba(255,191,0,0.3)]">
          {currentStep}.
        </span>
        <h3 className="text-xs leading-snug font-semibold text-white/90 tablet:text-sm">
          {questionText}
        </h3>
      </div>
      <div className="grid gap-2">
        {options?.map((option) => {
          const isSelected = selectedAnswer === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onAnswer(option)}
              className={`group flex items-center rounded-lg border p-3 text-left transition-all ${
                isSelected ?
                  "border-yellow/40 bg-linear-to-br from-yellow/10 to-orange/10 text-yellow shadow-md"
                : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:bg-white/10"
              }`}
            >
              <span
                className={`text-xs tablet:text-sm ${isSelected ? "font-bold text-white" : "font-medium"}`}
              >
                {option.replace(/^[a-c]\)\s+/i, "")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface AdDetailDialogProperties {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
  selectedAd: { letter: string; content: string } | null;
  onClose: () => void;
}

export function AdDetailDialog({ dialogRef, selectedAd, onClose }: AdDetailDialogProperties) {
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onCloseRef.current();
    };

    dialog.addEventListener("cancel", handleCancel);
    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, [dialogRef]);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Erklärung"
      className="fixed inset-0 m-auto flex h-max max-h-[90vh] w-max max-w-[min(90vw,32rem)] scale-95 scrollbar-none flex-col overflow-hidden rounded-2xl border-2 border-white/10 bg-zinc-950 p-0 text-white opacity-0 shadow-2xl transition-[opacity,transform,overlay,display] duration-250 ease-in-out backdrop:bg-black/80 backdrop:backdrop-blur-sm backdrop:transition-[background-color,backdrop-filter,overlay,display] backdrop:duration-250 open:scale-100 open:opacity-100 starting:open:scale-95 starting:open:opacity-0"
      onClose={onClose}
    >
      {selectedAd ?
        <div className="relative p-6 md:p-8">
          <button
            type="button"
            aria-label="Schließen"
            className="absolute top-4 right-4 flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-white/10 bg-zinc-900 text-white/40 transition-colors hover:text-yellow"
            onClick={onClose}
          >
            <X className="size-4" />
          </button>

          <div className="mb-6 flex justify-start">
            <div className="flex size-12 items-center justify-center rounded-full border-2 border-white/10 bg-linear-to-br from-yellow/10 to-orange/10 shadow-lg shadow-yellow/5">
              <span className="bg-linear-to-br from-yellow to-orange bg-clip-text text-xl font-black text-transparent uppercase">
                {selectedAd.letter}
              </span>
            </div>
          </div>

          <p className="font-serif text-base leading-relaxed font-light text-white/90 tablet:text-lg">
            {selectedAd.content}
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="w-full cursor-pointer rounded-full bg-linear-to-br from-yellow to-orange py-3 text-sm font-bold text-black transition-[filter,transform] duration-200 hover:brightness-110 active:scale-95"
            >
              Verstanden
            </button>
          </div>

          <div className="pointer-events-none absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03]" />
        </div>
      : null}
    </dialog>
  );
}
