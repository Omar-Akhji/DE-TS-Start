import { useState, useTransition, type ReactNode } from "react";
import {
  Activity,
  ArrowUp,
  Briefcase,
  Cpu,
  GraduationCap,
  LayoutGrid,
  Leaf,
  Lightbulb,
  Palmtree,
  Users,
  Utensils,
} from "lucide-react";
import { cn } from "../../../shared/lib/utilities.ts";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import { getCategoryClasses, THEMEN_CATEGORY_COLORS } from "../lib/category-config.ts";
import type { Thema } from "../model/types.ts";
import { ThemaCard } from "./ThemaCard.tsx";

const categoryConfig = new Map<string, { label: string; icon: ReactNode; color: string }>([
  [
    "essen",
    {
      label: "Essen & Trinken",
      icon: <Utensils size={24} />,
      color: THEMEN_CATEGORY_COLORS["essen"] ?? "",
    },
  ],
  [
    "tech",
    {
      label: "Technik & Medien",
      icon: <Cpu size={24} />,
      color: THEMEN_CATEGORY_COLORS["tech"] ?? "",
    },
  ],
  [
    "gesellschaft",
    {
      label: "Gesellschaft",
      icon: <Users size={24} />,
      color: THEMEN_CATEGORY_COLORS["gesellschaft"] ?? "",
    },
  ],
  [
    "bildung",
    {
      label: "Bildung & Beruf",
      icon: <GraduationCap size={24} />,
      color: THEMEN_CATEGORY_COLORS["bildung"] ?? "",
    },
  ],
  [
    "gesundheit",
    {
      label: "Gesundheit",
      icon: <Activity size={24} />,
      color: THEMEN_CATEGORY_COLORS["gesundheit"] ?? "",
    },
  ],
  [
    "freizeit",
    {
      label: "Freizeit & Reisen",
      icon: <Palmtree size={24} />,
      color: THEMEN_CATEGORY_COLORS["freizeit"] ?? "",
    },
  ],
  [
    "umwelt",
    { label: "Umwelt", icon: <Leaf size={24} />, color: THEMEN_CATEGORY_COLORS["umwelt"] ?? "" },
  ],
  [
    "arbeit",
    {
      label: "Arbeitswelt",
      icon: <Briefcase size={24} />,
      color: THEMEN_CATEGORY_COLORS["arbeit"] ?? "",
    },
  ],
]);

interface ThemenSectionProperties {
  isEmbedded?: boolean;
  initialThemen: Thema[];
}

export function ThemenSection({ isEmbedded, initialThemen }: ThemenSectionProperties) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const groupedThemen = new Map<string, Thema[]>();
  for (const cat of categoryConfig.keys()) {
    const themes = initialThemen.filter((t) => t.cat === cat);
    if (themes.length > 0) {
      groupedThemen.set(cat, themes);
    }
  }

  const filteredGroups =
    activeCategory ?
      new Map([[activeCategory, groupedThemen.get(activeCategory) ?? []]])
    : groupedThemen;

  const handleCategoryChange = (id: string | null) => {
    startTransition(() => {
      setActiveCategory(id);
    });
  };

  return (
    <main className={`space-y-16 py-8 ${isEmbedded ? "" : "min-h-screen"}`}>
      {!isEmbedded && (
        <header className="mx-auto max-w-2xl space-y-4 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-semibold text-transparent tablet:text-4xl">
              Sprechen & Schreiben Themen
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll
            animation="fade-up"
            delay={100}
          >
            <p className="text-base text-zinc-400 tablet:text-lg">
              Bereite dich auf das Goethe & ÖSD Zertifikat B1 vor. Hier findest du 58 Themen mit
              Pro- und Contra-Argumenten für deine Präsentation oder deinen Diskussionsbeitrag.
            </p>
          </AnimateOnScroll>
        </header>
      )}

      {/* Internal Navigation Bar */}
      <nav
        className="rounded-2xl border border-white/5 bg-zinc-950/50 p-4 shadow-xl backdrop-blur-md"
        aria-label="Themen Kategorien"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => handleCategoryChange(null)}
            className={`flex items-center gap-2 rounded-full px-4 pbs-2 pbe-2 text-sm font-medium transition-all ${
              activeCategory === null ?
                "bg-amber-500 text-black shadow-lg"
              : "bg-white/5 text-zinc-400 hover:bg-white/10"
            } ${isPending && activeCategory !== null ? "opacity-50" : ""}`}
          >
            <span
              className={`scale-75 transition-transform ${
                activeCategory === null ? "" : "opacity-70 group-hover:opacity-100"
              }`}
            >
              <LayoutGrid size={24} />
            </span>
            Alle{" "}
          </button>
          {[...categoryConfig.entries()].map(([id, config]) => (
            <button
              key={id}
              type="button"
              onClick={() => handleCategoryChange(id)}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 pbs-2 pbe-2 text-sm font-medium transition-all",
                activeCategory === id ?
                  cn(
                    "text-black shadow-lg shadow-black/20",
                    getCategoryClasses(id)
                      .split(" ")
                      .find((c: string) => c.startsWith("bg-")),
                  )
                : "bg-white/5 text-zinc-400 hover:bg-white/10",
                isPending && activeCategory !== id ? "opacity-50" : "",
              )}
            >
              <span
                className={cn(
                  "scale-75 transition-transform group-hover:scale-110",
                  activeCategory === id ? "text-black" : (
                    getCategoryClasses(id)
                      .split(" ")
                      .find((c: string) => c.startsWith("text-"))
                  ),
                )}
              >
                {config.icon}
              </span>
              {config.label}
            </button>
          ))}
        </div>
      </nav>

      <div
        className={`space-y-24 transition-opacity duration-300 ${isPending ? "opacity-40" : "opacity-100"}`}
      >
        {[...filteredGroups.entries()].map(([catId, themes]) => {
          const config = categoryConfig.get(catId);
          if (!config) return null;

          const catClasses = getCategoryClasses(catId);

          return (
            <section
              key={catId}
              id={catId}
              className="scroll-mbs-32"
            >
              <div className="mb-10 flex items-center gap-4">
                <div
                  className={cn(
                    "flex size-12 shrink-0 items-center justify-center rounded-full border-3 shadow-inner tablet:size-14",
                    catClasses.split(" ").find((c: string) => c.startsWith("border-")),
                    catClasses.split(" ").find((c: string) => c.startsWith("text-")),
                  )}
                >
                  {/* Clone the icon to apply responsive sizing */}
                  {config.icon && typeof config.icon === "object" && "props" in config.icon ?
                    <span className="flex size-6 items-center justify-center tablet:size-7">
                      {config.icon}
                    </span>
                  : config.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white capitalize tablet:text-2xl">
                    {config.label}
                  </h3>
                  <p className="text-xs text-zinc-400 tablet:text-sm">
                    {themes.length} Themen zur Vorbereitung
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
                {themes.map((thema, index) => (
                  <AnimateOnScroll
                    key={thema.id}
                    animation="fade-up"
                    delay={(index % 3) * 100}
                  >
                    <ThemaCard thema={thema} />
                  </AnimateOnScroll>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <AnimateOnScroll
        animation="zoom-in"
        delay={200}
      >
        <aside className="mt-20 rounded-3xl border border-amber-500/20 bg-linear-to-br from-yellow/20 to-orange/20 p-8 backdrop-blur-sm">
          <h3 className="mb-4 flex items-center gap-3 text-xl font-semibold text-white tablet:text-2xl">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border-3 border-amber-400 text-amber-400 tablet:size-10">
              <Lightbulb className="size-5 tablet:size-6" />
            </span>
            Prüfungstipp für Sprechen Teil 2
          </h3>
          <ul className="grid gap-4 text-zinc-300 md:grid-cols-2">
            <li className="flex gap-3">
              <span className="font-bold text-amber-400">1.</span>
              Stell das Thema kurz vor und begründe deine Wahl.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-amber-400">2.</span>
              Berichte von deinen persönlichen Erfahrungen (Ich-Perspektive).
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-amber-400">3.</span>
              Beschreibe die Situation in deinem Heimatland.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-amber-400">4.</span>
              Nenne mindestens zwei Vorteile und zwei Nachteile.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-amber-400">5.</span>
              Äußere deine eigene Meinung klar am Ende.
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-amber-400">6.</span>
              Bedanke dich am Ende und bitte um Fragen.
            </li>
          </ul>
        </aside>
      </AnimateOnScroll>

      {/* Scroll to Top */}
      <button
        type="button"
        onClick={() => globalThis.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-8 bottom-8 z-50 flex size-14 items-center justify-center rounded-full bg-amber-500 text-black shadow-2xl transition-all hover:scale-110 active:scale-95"
      >
        <ArrowUp size={28} />
      </button>
    </main>
  );
}
