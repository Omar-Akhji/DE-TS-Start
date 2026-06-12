import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CheckCircle2, Clock, GraduationCap, Trophy } from "lucide-react";
import { AnimateOnScroll } from "../shared/ui/AnimateOnScroll";
import { Card } from "../shared/ui/Card";
import { Hero } from "../shared/ui/Hero";
import { HomeSkeleton } from "../shared/ui/SkeletonLayouts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deutsch Lernen | Deine Plattform für Erfolg" },
      {
        name: "description",
        content:
          "Lerne Deutsch effektiv mit interaktiven Vokabeln, Grammatik-Lektionen und gezielter Prüfungsvorbereitung für das B1 & B2 Zertifikat.",
      },
    ],
  }),
  pendingComponent: () => <HomeSkeleton />,
  component: Home,
});

function Home() {
  return (
    <AnimateOnScroll
      as="main"
      animation="fade-up"
      className="container mx-auto px-4 py-8"
    >
      <header className="mbe-16">
        <Hero
          category="A1 - B2"
          title="Meistere die deutsche Sprache"
          description="Die umfassende Plattform für dein Deutsch-Training. Von den Grundlagen bis zum B1 & B2 Zertifikat – alles an einem Ort."
          variant="glass"
          stats={[
            {
              label: "Vokabeln",
              value: "3.000+",
              icon: (
                <BookOpen
                  size={18}
                  className="text-yellow"
                />
              ),
            },
            {
              label: "Lektionen",
              value: "120+",
              icon: (
                <GraduationCap
                  size={18}
                  className="text-yellow"
                />
              ),
            },
            {
              label: "Niveau",
              value: "B1 & B2",
              icon: (
                <Trophy
                  size={18}
                  className="text-yellow"
                />
              ),
            },
          ]}
        />
      </header>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8">
        <AnimateOnScroll
          animation="fade-up"
          delay={200}
        >
          <Card
            href="/vokabeln"
            title="Vokabeln"
            subtitle="Wortschatz"
            category="A1-B2"
            description="Thematisch sortierte Wortschatzlisten für Alltag und Beruf. Mit interaktiven Karten lernen."
            gradient="linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)"
            icon="V"
          />
        </AnimateOnScroll>
        <AnimateOnScroll
          animation="fade-up"
          delay={300}
        >
          <Card
            href="/grammatik"
            title="Grammatik"
            subtitle="Regeln & Struktur"
            category="B1-B2"
            description="Klar strukturierte Regeln, Tabellen und Anwendungsbeispiele für alle wichtigen Grammatikthemen."
            gradient="linear-gradient(135deg, #f8835f 0%, #e67e22 100%)"
            icon="G"
          />
        </AnimateOnScroll>
        <AnimateOnScroll
          animation="fade-up"
          delay={400}
        >
          <Card
            href="/pruefung"
            title="Prüfungstraining"
            subtitle="Modelltests"
            category="B1-B2 Ready"
            description="Simulationen und Tipps für die B1 & B2 Prüfung (Goethe/ÖSD). Texte schreiben und Sprechen üben."
            gradient="linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)"
            icon="P"
          />
        </AnimateOnScroll>
      </div>

      <section className="mbs-20">
        <AnimateOnScroll
          animation="fade-up"
          delay={500}
        >
          <Hero
            title="Goethe & ÖSD Zertifikate"
            description="Strukturierte Vorbereitung auf das B1 & B2 Zertifikat"
            variant="glass"
            stats={[
              {
                label: "B1 Dauer",
                value: "B1: ca. 3,5h",
                icon: (
                  <Clock
                    size={18}
                    className="text-yellow"
                  />
                ),
              },
              {
                label: "B2 Dauer",
                value: "B2: ca. 3,0h",
                icon: (
                  <Clock
                    size={18}
                    className="text-yellow"
                  />
                ),
              },
              {
                label: "Bestehen",
                value: "60% (Pro Modul)",
                icon: (
                  <CheckCircle2
                    size={18}
                    className="text-yellow"
                  />
                ),
              },
            ]}
          />
        </AnimateOnScroll>
      </section>

      <section className="mbs-24 text-center">
        <AnimateOnScroll
          animation="blur-in"
          delay={500}
        >
          <h2 className="mbe-6 text-shadow-sm">
            Bereit für den <span className="title-gradient">nächsten Schritt</span>?
          </h2>
          <p className="mx-auto mbe-8 max-w-2xl text-mist-500">
            Egal ob du gerade erst anfängst oder dich auf eine Prüfung vorbereitest – wir haben die
            richtigen Werkzeuge für dich.
          </p>
        </AnimateOnScroll>
      </section>
    </AnimateOnScroll>
  );
}
