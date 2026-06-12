import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import { GlassCard } from "../../../shared/ui/GlassCard.tsx";
import type { Word } from "../model/types.ts";

interface VocabularyTableProperties {
  words: Word[];
  englishLabel?: string;
}

export function VocabularyTable({ words, englishLabel = "English" }: VocabularyTableProperties) {
  if (words.length === 0) return null;

  return (
    <AnimateOnScroll animation="fade-up">
      <GlassCard className="@container">
        <div className="scrollbar-thin overflow-x-auto px-4 pb-4">
          <table className="border-collapse text-left inline-full">
            <caption className="sr-only">Vokabelliste</caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-be border-(--glass-border) px-2 pbs-2 font-semibold text-mist-500 @md:px-4 @md:pbs-4"
                >
                  Deutsch
                </th>
                <th
                  scope="col"
                  className="border-be border-(--glass-border) px-2 pbs-2 font-semibold text-mist-500 @md:px-4 @md:pbs-4"
                >
                  {englishLabel}
                </th>
                <th
                  scope="col"
                  className="font-arabic border-be border-(--glass-border) px-2 pbs-2 font-semibold text-mist-500 @md:px-4 @md:pbs-4"
                >
                  العربية
                </th>
              </tr>
            </thead>
            <tbody>
              {words.map((word) => (
                <tr
                  key={`${word.german}-${word.arabic}`}
                  className="border-be border-white/5 last:border-0"
                >
                  <td className="px-2 pbs-2 font-semibold text-orange @md:px-4 @md:pbs-4">
                    {word.german}
                  </td>
                  <td className="px-2 pbs-2 @md:px-4 @md:pbs-4">
                    <data
                      className="font-mono text-base font-bold text-yellow @md:text-lg"
                      value={word.english ?? word.example}
                    >
                      {word.english ?? word.example}
                    </data>
                  </td>
                  <td className="font-arabic px-2 pbs-2 text-base text-mist-500 @md:px-4 @md:pbs-4 @md:text-lg">
                    {word.arabic}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </AnimateOnScroll>
  );
}
