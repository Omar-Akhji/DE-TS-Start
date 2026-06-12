import { Link } from "@tanstack/react-router";
import {
  BarChart,
  BookOpen,
  Headphones,
  MessageCircle,
  PenLine,
  Puzzle,
  type LucideIcon,
} from "lucide-react";
import { AnimateOnScroll } from "../../../shared/ui/AnimateOnScroll.tsx";
import { Card } from "../../../shared/ui/Card.tsx";
import { Hero } from "../../../shared/ui/Hero.tsx";

interface Skill {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
}

const skills: Skill[] = [
  { id: "lesen", title: "Lesen", icon: BookOpen, color: "from-blue-500 to-cyan-400" },
  { id: "hoeren", title: "Hören", icon: Headphones, color: "from-emerald-500 to-green-400" },
  { id: "schreiben", title: "Schreiben", icon: PenLine, color: "from-orange-500 to-red-400" },
  { id: "sprechen", title: "Sprechen", icon: MessageCircle, color: "from-fuchsia-500 to-pink-400" },
];

interface ModelTestsViewProperties {
  level: string;
  initialModelTests: number[];
}

export default function ModelTestsView({ level, initialModelTests }: ModelTestsViewProperties) {
  const modelTests = initialModelTests;

  const stats = [
    { label: "Niveau", value: level.toUpperCase(), icon: <BarChart className="size-full" /> },

    { label: "Module", value: "4", icon: <Puzzle className="size-full" /> },
  ];

  return (
    <div className="relative min-h-screen py-8">
      <main>
        <Hero
          title={`Modelltests ${level.toUpperCase()}`}
          description="Wähle einen Fertigkeitsbereich und einen Modelltest aus."
          category="Prüfungsvorbereitung"
          variant="glass"
          stats={stats}
        />

        <div className="mt-8 mb-12 flex justify-center">
          <AnimateOnScroll
            animation="fade-up"
            delay={400}
          >
            <Link
              to="/pruefung/$level"
              params={{ level }}
              className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-sm transition-colors hover:bg-white/10"
            >
              <span>←</span> Zurück zur Übersicht
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid gap-12">
          {skills.map((skill, skillIndex) => (
            <section key={skill.id}>
              <AnimateOnScroll
                animation="fade-right"
                delay={skillIndex * 100}
              >
                <h2 className="mb-6 flex items-center gap-3 text-xl font-semibold text-white tablet:gap-4 tablet:text-2xl">
                  <span className="flex size-10 items-center justify-center rounded-full border-[3px] border-solid border-yellow bg-mist-900/50 text-yellow shadow-sm tablet:size-12">
                    <skill.icon
                      className="size-5 tablet:size-6"
                      strokeWidth={2}
                    />
                  </span>
                  <span className="text-white">{skill.title}</span>
                </h2>
              </AnimateOnScroll>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
                {modelTests.map((testId, testIndex) => (
                  <AnimateOnScroll
                    key={`${skill.id}-${testId}`}
                    animation="fade-up"
                    delay={(testIndex % 3) * 100}
                    className="h-full"
                  >
                    <Card
                      title={`Modelltest ${testId}`}
                      subtitle="Übung"
                      description={`Vollständiger ${skill.title}-Teil für das ${level.toUpperCase()}-Zertifikat.`}
                      href={`/quiz/${level}/${skill.id}/${testId}`}
                      gradient={`bg-linear-to-br ${skill.color}`}
                      variant="default"
                    />
                  </AnimateOnScroll>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
