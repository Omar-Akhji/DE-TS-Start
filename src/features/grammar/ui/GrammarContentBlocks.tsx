import { Lightbulb } from "lucide-react";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import type { GrammarSectionContent } from "../model/types.ts";
import { ContentItem } from "./FormattedText.tsx";

interface GrammarContentBlocksProperties {
  blocks: GrammarSectionContent[];
  usage?: { speaker: string; text: string }[] | undefined;
  tips?: string[] | undefined;
}

export const GrammarContentBlocks = ({ blocks, usage, tips }: GrammarContentBlocksProperties) => {
  return (
    <div className="flex flex-col gap-8">
      {usage ?
        <AnimateOnScroll animation="fade-up">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow tablet:text-xl">Gebrauch</h3>
            <div className="space-y-4 rounded-3xl border border-yellow/10 bg-white/3 p-6 backdrop-blur-md">
              {usage.map((dialogue) => (
                <div
                  key={`usage-${dialogue.speaker}-${dialogue.text.slice(0, 20)}`}
                  className="flex gap-4"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-yellow/20 text-xs font-bold text-yellow tablet:size-10 tablet:text-sm">
                    {dialogue.speaker}
                  </div>
                  <div className="rounded-2xl rounded-ss-none bg-white/5 px-4 py-2 text-white/90">
                    <ContentItem content={dialogue.text} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      : null}
      {blocks.map((block) => (
        <AnimateOnScroll
          key={block.title}
          animation="fade-up"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow tablet:text-xl">{block.title}</h3>
            <div className="grid gap-3">
              {block.items.map((item) => {
                const itemKey = typeof item === "string" ? item : item.text;
                return (
                  <div
                    key={`${block.title}-${itemKey.slice(0, 40)}`}
                    className="rounded-e-xl border-s-[6px] border-yellow bg-white/5 p-4 text-white/90 backdrop-blur-sm transition-all hover:translate-x-1 hover:bg-white/8"
                    style={{ borderStartStartRadius: 0, borderEndStartRadius: 0 }}
                  >
                    <ContentItem content={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </AnimateOnScroll>
      ))}
      {tips ?
        <AnimateOnScroll
          animation="zoom-in"
          delay={200}
        >
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange tablet:text-xl">Tipps</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {tips.map((tip) => (
                <div
                  key={`tip-${tip.slice(0, 30)}`}
                  className="flex items-start gap-2 rounded-xl border border-orange/20 bg-orange/5 p-4 text-orange brightness-125"
                >
                  <Lightbulb className="size-4 shrink-0 tablet:size-5" />
                  <ContentItem content={tip} />
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      : null}
    </div>
  );
};
