import { CheckCircle2, Clock } from "lucide-react";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import { Hero } from "../../../shared/ui/Hero.tsx";
import type { Thema } from "../../themen/model/types.ts";
import { ThemenSection } from "../../themen/ui/ThemenSection.tsx";
import type { ExamLevel, RedemittelCategory } from "../model/types.ts";
import { EmailVisualFrame } from "./EmailVisualFrame.tsx";
import { PhraseGroupCard } from "./PhraseGroupCard.tsx";

interface ModuleStudyViewProperties {
  level: string;
  module: "sprechen" | "schreiben";
  examData: ExamLevel;
  redemittel: RedemittelCategory;
  initialThemen: Thema[];
}

export function ModuleStudyView({
  level,
  module,
  examData,
  redemittel,
  initialThemen,
}: ModuleStudyViewProperties) {
  const section = examData.sections.find((s) => s.id === `${level.toLowerCase()}-${module}`);

  if (!section) return <div>Modul nicht gefunden</div>;

  // Filter redemittel for this module
  const filteredRedemittel = Object.entries(redemittel).filter(([category]) => {
    const cat = category.toLowerCase();
    const isVocab =
      cat.includes("konnektoren") || cat.includes("zeitausdrücke") || cat.includes("wortschatz");

    return module === "sprechen" ?
        cat.includes("sprechen") || isVocab
      : cat.includes("schreiben") || isVocab;
  });

  return (
    <div className="space-y-12 pbe-20">
      <Hero
        title={`${examData.level} ${section.title}`}
        description={section.description}
        category="Lernmodus"
        variant="glass"
        stats={[
          { label: "Dauer", value: section.duration, icon: <Clock size={18} /> },
          { label: "Punkte", value: `${section.points} Pkt.`, icon: <CheckCircle2 size={18} /> },
        ]}
      />

      <div className="space-y-16">
        {section.parts.map((part) => {
          const partNumber = part.name.match(/\d+/)?.[0];
          const partRedemittel = filteredRedemittel.filter(([category]) =>
            category.toLowerCase().includes(`${section.title.toLowerCase()} ${partNumber}`),
          );

          return (
            <section
              key={part.name}
              className="relative space-y-8"
            >
              <AnimateOnScroll animation="fade-right">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="rounded-lg bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-400 backdrop-blur-md">
                        {part.name}
                      </span>
                      <h2 className="text-2xl font-semibold text-white">{part.taskType}</h2>
                    </div>
                    {part.description ?
                      <p className="text-zinc-400">{part.description}</p>
                    : null}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 backdrop-blur-sm">
                      <CheckCircle2
                        size={16}
                        className="text-amber-400"
                      />
                      {part.points} Pkt.
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <div className="space-y-12">
                {partRedemittel.map(([category, groups], index) => (
                  <AnimateOnScroll
                    key={category}
                    animation="fade-up"
                    delay={index * 100}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="h-0.75 flex-1 rounded-full bg-white/10" />
                        <h3 className="text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase">
                          {category.split(":").pop()?.trim()}
                        </h3>
                        <div className="h-0.75 flex-1 rounded-full bg-white/10" />
                      </div>

                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <div className="border-b border-white/10 bg-white/5 px-6 py-3">
                          <h3 className="flex items-center gap-2 text-sm font-semibold tracking-widest text-amber-400 uppercase">
                            <CheckCircle2
                              size={16}
                              className="text-amber-400"
                            />
                            Struktur-Checkliste
                          </h3>
                        </div>
                        <div className="divide-y divide-white/10">
                          {groups.flatMap((group) => {
                            const processedGroups =
                              group.phrases.some((p) => typeof p !== "string") ?
                                group.phrases.flatMap((p) => {
                                  if (typeof p === "string") return [];
                                  return [{ ...p, label: `${group.label}: ${p.label}` }];
                                })
                              : [group];

                            return processedGroups.map((processedGroup) => (
                              <PhraseGroupCard
                                key={processedGroup.label}
                                group={processedGroup}
                                isChecklistItem
                              />
                            ));
                          })}
                        </div>
                      </div>

                      {/* Email Visual Structure Frame */}
                      {module === "schreiben"
                        && (part.taskType.toLowerCase().includes("e-mail")
                          || part.taskType.toLowerCase().includes("schreiben")) && (
                          <AnimateOnScroll
                            animation="fade-up"
                            delay={200}
                          >
                            <div className="mt-8">
                              <EmailVisualFrame
                                type={
                                  part.taskType.toLowerCase().includes("informell") ?
                                    "informal"
                                  : "formal"
                                }
                                recipient={
                                  part.taskType.toLowerCase().includes("informell") ?
                                    "Jan (Freund)"
                                  : "Frau Müller (Vermieterin)"
                                }
                                subject={
                                  part.taskType.toLowerCase().includes("informell") ?
                                    "Unser Treffen am Wochenende"
                                  : "Wichtige Nachricht bezüglich meiner Wohnung"
                                }
                                sections={
                                  part.taskType.toLowerCase().includes("informell") ?
                                    [
                                      {
                                        label: "Anrede",
                                        text: "Lieber Jan,",
                                        description: "Vorname + Komma",
                                        color: "text-amber-400",
                                      },
                                      {
                                        label: "Einleitung",
                                        text: "wie geht es dir? Ich hoffe, bei dir ist alles okay.",
                                        description: "Kleingeschrieben nach Komma",
                                        color: "text-blue-400",
                                      },
                                      {
                                        label: "Hauptteil",
                                        text: "Ich schreibe dir, weil ich unser Treffen am Samstag leider verschieben muss...",
                                        description: "Grund des Schreibens",
                                        color: "text-fuchsia-400",
                                      },
                                      {
                                        label: "Schluss",
                                        text: "Hast du vielleicht am Sonntag Zeit? Melde dich bitte bald!",
                                        description: "Vorschlag/Frage",
                                        color: "text-emerald-400",
                                      },
                                      {
                                        label: "Grußformel",
                                        text: "Viele Grüße,\nOmar",
                                        description: "Kein Satzzeichen am Ende",
                                        color: "text-pink-400",
                                      },
                                    ]
                                  : [
                                      {
                                        label: "Anrede",
                                        text: "Sehr geehrte Frau Müller,",
                                        description: "Nachname + Komma",
                                        color: "text-amber-400",
                                      },
                                      {
                                        label: "Einleitung",
                                        text: "ich schreibe Ihnen, da es in meiner Wohnung ein Problem gibt.",
                                        description: "Höfliche Einleitung",
                                        color: "text-blue-400",
                                      },
                                      {
                                        label: "Hauptteil",
                                        text: "Seit zwei Tagen funktioniert die Heizung im Wohnzimmer nicht mehr...",
                                        description: "Sachliche Beschreibung",
                                        color: "text-fuchsia-400",
                                      },
                                      {
                                        label: "Schluss",
                                        text: "Ich wäre Ihnen dankbar, wenn Sie bald einen Handwerker schicken könnten.",
                                        description: "Bitte um Antwort/Aktion",
                                        color: "text-emerald-400",
                                      },
                                      {
                                        label: "Grußformel",
                                        text: "Mit freundlichen Grüßen,\nOmar Akhji",
                                        description: "Formeller Abschluss",
                                        color: "text-pink-400",
                                      },
                                    ]
                                }
                              />
                            </div>
                          </AnimateOnScroll>
                        )}
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Topics Integration */}
      <section className="border-t border-white/10 pt-12">
        <div className="mb-10">
          <AnimateOnScroll animation="fade-up">
            <h2 className="mb-2 bg-linear-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-semibold text-transparent">
              Prüfungsthemen (Teil 2)
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll
            animation="fade-up"
            delay={100}
          >
            <p className="max-w-2xl text-lg text-zinc-400">
              Meistere die 58 wichtigsten Prüfungsthemen mit pro/kontra Argumenten und gezieltem
              Wortschatz.
            </p>
          </AnimateOnScroll>
        </div>
        <ThemenSection
          isEmbedded
          initialThemen={initialThemen}
        />
      </section>
    </div>
  );
}
