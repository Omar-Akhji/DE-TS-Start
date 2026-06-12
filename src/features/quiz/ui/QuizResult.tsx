import { PartyPopper, Sparkles, ThumbsUp, Zap } from "lucide-react";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";

interface QuizResultProperties {
  score: number;
  total: number;
  onRestart: () => void;
  onExit: () => void;
}

export const QuizResult = ({ score, total, onRestart, onExit }: QuizResultProperties) => {
  const percentage = Math.round((score / total) * 100);

  const getResultMessage = () => {
    if (percentage === 100) {
      return (
        <span className="flex items-center justify-center gap-2">
          Perfekt! <PartyPopper className="size-5 text-yellow tablet:size-6" />
        </span>
      );
    }
    if (percentage >= 80) {
      return (
        <span className="flex items-center justify-center gap-2">
          Sehr gut gemacht! <Sparkles className="size-5 text-yellow tablet:size-6" />
        </span>
      );
    }
    if (percentage >= 60) {
      return (
        <span className="flex items-center justify-center gap-2">
          Gut! <ThumbsUp className="size-5 text-yellow tablet:size-6" />
        </span>
      );
    }
    return (
      <span className="flex items-center justify-center gap-2">
        Weiter üben! <Zap className="size-5 text-yellow tablet:size-6" />
      </span>
    );
  };

  return (
    <section className="p-8 text-center">
      <AnimateOnScroll animation="fade-up">
        <h2 className="mb-2 text-3xl font-semibold text-shadow-sm">Ergebnis</h2>
      </AnimateOnScroll>
      <AnimateOnScroll
        animation="fade-up"
        delay={100}
      >
        <div className="mb-8 text-lg opacity-90 tablet:text-xl">{getResultMessage()}</div>
      </AnimateOnScroll>
      {/* Score Circle */}
      <AnimateOnScroll
        animation="zoom-in"
        delay={200}
      >
        <div className="relative mx-auto mb-8 flex size-40 items-center justify-center">
          <svg className="h-full w-full -rotate-90 transform">
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#f1c40f"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={440}
              strokeDashoffset={440 - (440 * percentage) / 100}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-shadow-sm">{percentage}%</span>
            <span className="text-sm opacity-70">
              {score} / {total}
            </span>
          </div>
        </div>
      </AnimateOnScroll>
      {/* Actions */}
      <AnimateOnScroll
        animation="fade-up"
        delay={300}
      >
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="cursor-pointer rounded-full border border-white/40 px-6 py-2 transition-colors hover:bg-white/10"
            onClick={onExit}
          >
            Beenden
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full bg-linear-to-br from-yellow to-orange px-8 py-3 font-semibold text-black shadow-xl shadow-yellow/20 transition-all hover:scale-105 hover:brightness-110"
            onClick={onRestart}
          >
            Nochmal
          </button>
        </div>
      </AnimateOnScroll>
    </section>
  );
};
