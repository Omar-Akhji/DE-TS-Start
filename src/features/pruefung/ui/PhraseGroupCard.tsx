import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { PhraseGroup } from "../model/types.ts";

export function PhraseGroupCard({
  group,
  isChecklistItem = false,
}: {
  group: PhraseGroup;
  isChecklistItem?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`group transition-all duration-300 ${
        isChecklistItem ? "bg-transparent" : (
          "overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]"
        )
      }`}
    >
      {/* Header - Always Visible */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        className={`flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-6 py-3.5 text-left transition-colors select-none focus:outline-none ${
          isChecklistItem ?
            "hover:bg-white/5 focus-visible:bg-white/10"
          : "hover:bg-white/5 focus-visible:bg-white/10"
        }`}
      >
        <div className="flex items-center gap-4">
          {/\d+/.test(group.label) ?
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/20 text-[10px] font-black text-amber-400 backdrop-blur-md">
              {group.label.match(/\d+/)?.[0]}
            </span>
          : null}
          <h4
            className={`text-sm font-bold transition-colors tablet:text-[15px] ${
              isChecklistItem ?
                "text-zinc-200 group-hover:text-amber-400"
              : "text-white group-hover:text-amber-400"
            }`}
          >
            {group.label.replace(/^.*?\d+\s*[·–:]\s*/, "")}
          </h4>
          {group.badge ?
            <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-400 uppercase">
              {group.badge}
            </span>
          : null}
        </div>
        <div className="flex items-center gap-4">
          <div className={`transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
            <ChevronDown
              className={`size-4 tablet:size-5 ${isChecklistItem ? "text-amber-400/50" : "text-white/30"}`}
            />
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-500 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`p-6 ${
            isChecklistItem ?
              "border-t border-white/10 bg-white/2"
            : "border-t border-white/5 bg-black/20"
          }`}
        >
          <RenderPhrases phrases={group.phrases} />
        </div>
      </div>
    </div>
  );
}

function RenderPhrases({ phrases }: { phrases: (string | PhraseGroup)[] }) {
  const strings = phrases.filter((p): p is string => typeof p === "string");
  if (strings.length === 0) return null;

  const groups: { title: string | null; items: string[] }[] = [];
  let currentGroup: { title: string | null; items: string[] } = { title: null, items: [] };

  for (const string_ of strings) {
    if (string_.startsWith("---") && string_.endsWith("---")) {
      if (currentGroup.items.length > 0 || currentGroup.title) {
        groups.push(currentGroup);
      }
      currentGroup = { title: string_.replaceAll("---", "").trim(), items: [] };
    } else {
      currentGroup.items.push(string_);
    }
  }
  if (currentGroup.items.length > 0 || currentGroup.title) {
    groups.push(currentGroup);
  }

  return (
    <div className="space-y-6">
      {groups.map((group, gIndex) => (
        <div
          key={group.title ?? gIndex}
          className="space-y-3"
        >
          {group.title ?
            <h5 className="px-1 text-[11px] font-semibold tracking-widest text-zinc-500 uppercase">
              {group.title}
            </h5>
          : null}
          <div className="rounded-xl border border-white/5 bg-black/20 p-4">
            <div className="space-y-4">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <div className="flex size-6 shrink-0 items-center justify-center">
                    <div className="size-1.5 rounded-full bg-amber-400/30" />
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-line text-zinc-300 tablet:text-[15px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
