import { ClipboardList } from "lucide-react";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";

interface QuizStartProperties {
  title: string;
  description: string;
  questionCount: number;
  duration: number;
  onStart: () => void;
}

export const QuizStart = ({
  title,
  description,
  questionCount,
  duration,
  onStart,
}: QuizStartProperties) => {
  return (
    <section className="mx-auto p-8 text-center max-inline-lg">
      {/* Exam badge */}
      <AnimateOnScroll animation="fade-up">
        <div className="mx-auto mbe-6 inline-flex items-center gap-2 rounded-full border border-yellow/30 bg-yellow/10 px-4 py-1.5 text-sm font-medium text-yellow">
          <ClipboardList size={16} /> Goethe / ÖSD Zertifikat
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll
        animation="fade-up"
        delay={100}
      >
        <h2 className="mbe-3 text-3xl font-semibold text-shadow-sm">{title}</h2>
      </AnimateOnScroll>

      <AnimateOnScroll
        animation="fade-up"
        delay={200}
      >
        <p className="mbe-8 text-base leading-relaxed text-mist-500">{description}</p>
      </AnimateOnScroll>

      {/* Exam info cards */}
      <dl className="mbe-8 grid grid-cols-2 gap-4">
        <AnimateOnScroll
          animation="zoom-in"
          delay={300}
          className="h-full"
        >
          <div className="h-full rounded-xl border border-white/10 bg-mist-900/50 p-4 shadow-sm">
            <dd className="m-0 text-2xl font-bold text-yellow">{questionCount}</dd>
            <dt className="text-xs tracking-wider text-mist-500 uppercase">Fragen (Gesamt)</dt>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll
          animation="zoom-in"
          delay={400}
          className="h-full"
        >
          <div className="h-full rounded-xl border border-white/10 bg-mist-900/50 p-4 shadow-sm">
            <dd className="m-0 text-2xl font-bold text-yellow">{duration}</dd>
            <dt className="text-xs tracking-wider text-mist-500 uppercase">Minuten (Prüfung)</dt>
          </div>
        </AnimateOnScroll>
      </dl>

      <AnimateOnScroll
        animation="fade-up"
        delay={500}
      >
        <button
          type="button"
          className="cursor-pointer rounded-full bg-linear-to-r from-yellow to-orange px-8 py-4 text-lg font-bold text-black shadow-xl shadow-yellow/20 transition-[transform,filter] inline-full hover:scale-[1.02] hover:brightness-110"
          onClick={onStart}
        >
          Prüfung Starten
        </button>
      </AnimateOnScroll>
    </section>
  );
};
