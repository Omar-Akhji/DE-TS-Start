import type { ExamLevel, RedemittelCategory } from "../model/types.ts";

export const examLevelB2: ExamLevel = {
  id: "b2",
  level: "B2",
  title: "Goethe-Zertifikat B2",
  category: "Prüfung",
  description: "Strukturierte Vorbereitung auf das Goethe-Zertifikat B2",
  totalDuration: "ca. 3 Stunden",
  passingScore: "60% (60 von 100 Punkten pro Modul)",
  sections: [
    {
      id: "b2-lesen",
      title: "Lesen",
      duration: "65 Minuten",
      points: 100,
      description: "Anspruchsvolle Texte verstehen",
      parts: [
        { name: "Teil 1", taskType: "Zuordnung (Aussagen)", items: 4, points: 20 },
        { name: "Teil 2", taskType: "Multiple Choice (Artikel)", items: 6, points: 20 },
        { name: "Teil 3", taskType: "Zuordnung (Lesermeinungen)", items: 6, points: 20 },
        { name: "Teil 4", taskType: "Multiple Choice (Kommentar)", items: 6, points: 20 },
        { name: "Teil 5", taskType: "Zuordnung (Anzeigen)", items: 8, points: 20 },
      ],
      tips: [
        "Globales, selektives und detailliertes Lesen trainieren",
        "Schlüsselwörter markieren",
        "Zeitmanagement: ca. 12 Min. pro Teil",
        "Aufgabenstellung genau lesen",
      ],
    },
    {
      id: "b2-hoeren",
      title: "Hören",
      duration: "40 Minuten",
      points: 100,
      description: "Anspruchsvolle Hörtexte verstehen",
      parts: [
        { name: "Teil 1", taskType: "Zuordnung (Aussagen)", items: 5, points: 25 },
        { name: "Teil 2", taskType: "Multiple Choice (Interview)", items: 6, points: 25 },
        { name: "Teil 3", taskType: "Richtig/Falsch (Diskussion)", items: 6, points: 25 },
        { name: "Teil 4", taskType: "Multiple Choice (Vortrag)", items: 8, points: 25 },
      ],
      tips: [
        "Auf Sprecherabsicht achten",
        "Argumentationsstruktur verfolgen",
        "Meinungen von Fakten unterscheiden",
        "Ironie und Untertöne erkennen",
      ],
    },
    {
      id: "b2-schreiben",
      title: "Schreiben",
      duration: "75 Minuten",
      points: 100,
      description: "Formelle Texte und argumentative Beiträge",
      parts: [
        { name: "Aufgabe 1", taskType: "Forumsbeitrag (Argumentation)", items: 1, points: 60 },
        {
          name: "Aufgabe 2",
          taskType: "Formelle Nachricht (Beschwerde/Anfrage)",
          items: 1,
          points: 40,
        },
      ],
      tips: [
        "Klare Struktur: Einleitung, Hauptteil, Schluss",
        "These, Argument, Beispiel, Schlussfolgerung",
        "Komplexität",
        "Formellen Stil",
      ],
    },
    {
      id: "b2-sprechen",
      title: "Sprechen",
      duration: "15 Minuten (+ 15 Min. Vorbereitung)",
      points: 100,
      description: "Paarprüfung: Präsentation und Diskussion",
      parts: [
        { name: "Teil 1", taskType: "Präsentation (Thema mit Pro/Contra)", items: 1, points: 50 },
        { name: "Teil 2", taskType: "Diskussion mit Partner", items: 1, points: 50 },
      ],
      tips: ["Strukturiert argumentieren", "Gegenargumente", "Redemittel", "Flüssig sprechen"],
    },
  ],
};

export const redemittelB2: RedemittelCategory = {
  "Schreiben 1: Forumsbeitrag": [
    {
      label: "1 · Einleitung",
      phrases: [
        'Das Thema "..." ist heutzutage von großer Bedeutung.',
        "Immer mehr Menschen beschäftigen sich mit der Frage,...",
        "In meinem Beitrag möchte ich die Frage diskutieren, ob...",
      ],
    },
    {
      label: "2 · Argumentation",
      phrases: [
        "Einerseits... andererseits...",
        "Dafür/Dagegen spricht, dass...",
        "Ein weiteres Argument ist...",
        "Hinzu kommt, dass...",
        "Man darf nicht vergessen, dass...",
      ],
    },
    {
      label: "3 · Beispiele",
      phrases: [
        "Das zeigt sich zum Beispiel daran, dass...",
        "Ein gutes Beispiel dafür ist...",
        "Dies kann man an folgendem Beispiel verdeutlichen:...",
      ],
    },
    {
      label: "4 · Schluss",
      phrases: [
        "Zusammenfassend lässt sich sagen, dass...",
        "Abschließend möchte ich betonen, dass...",
        "Alles in allem bin ich der Meinung, dass...",
      ],
    },
  ],
  "Schreiben 2: Formelle Nachricht": [
    { label: "1 · Anrede", phrases: ["Sehr geehrte Damen und Herren,"] },
  ],
  "Sprechen 2: Diskussion": [
    {
      label: "Diskussion führen",
      phrases: [
        "Was meinst du dazu?",
        "Ich verstehe deinen Standpunkt, aber...",
        "Das ist ein interessanter Punkt, jedoch...",
        "Könntest du das näher erläutern?",
      ],
    },
  ],
};
