import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import { GlassCard } from "../../../shared/ui/GlassCard.tsx";
import { ContentItem } from "./FormattedText.tsx";

interface GrammarTableProperties {
  caption?: string;
  headers: string[];
  rows: (string | { text: string; highlight?: boolean })[][];
}

export const GrammarTable = ({ data }: { data: GrammarTableProperties }) => {
  return (
    <AnimateOnScroll animation="fade-up">
      <GlassCard>
        {data.caption ?
          <div className="border-be border-white/10 bg-white/5 px-6 py-4">
            <h3 className="text-base font-medium text-yellow text-shadow-sm tablet:text-lg">
              {data.caption}
            </h3>
          </div>
        : null}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm tablet:text-base">
            <thead className="bg-white/5 text-[10px] text-white/60 uppercase tablet:text-xs">
              <tr>
                {data.headers.map((header) => (
                  <th
                    key={header}
                    className="px-6 py-4 font-semibold tracking-widest text-orange/80"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.rows.map((row) => {
                const rowKey = row.map((c) => (typeof c === "string" ? c : c.text)).join("|");
                return (
                  <tr
                    key={rowKey}
                    className="transition-colors hover:bg-white/5"
                  >
                    {row.map((cell, index) => {
                      const cellKey = typeof cell === "string" ? cell : cell.text;
                      return (
                        <td
                          key={cellKey}
                          className={`px-6 py-4 ${index === 0 ? "font-medium text-orange" : "text-white/90"}`}
                        >
                          <ContentItem content={cell} />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </AnimateOnScroll>
  );
};
