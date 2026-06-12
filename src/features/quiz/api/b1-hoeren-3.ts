import { assignTeile, B1_HOEREN_TEILE } from "../lib/exam-structure.ts";
import type { Question } from "../model/types.ts";

const hoeren3Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Die Frau hat ihren Schlüssel verloren.",
    context:
      "Text 1: Hallo, ich bin es. Ich stehe vor der Tür, aber ich habe meinen Schlüssel im Büro vergessen. Kannst du mir bitte aufmachen? Ich bin in fünf Minuten da.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Wo ist der Schlüssel?",
    options: ["Zu Hause", "Im Büro", "Im Auto"],
    correctAnswer: "Im Büro",
    teil: 1,
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Das Konzert findet wie geplant statt.",
    context:
      "Text 2: Liebe Konzertbesucher, aufgrund des starken Regens wird das Open-Air-Konzert heute Abend in die Stadthalle verlegt. Ihre Tickets behalten ihre Gültigkeit. Einlass ab 19:00 Uhr.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Wohin wird das Konzert verlegt?",
    options: ["In ein Restaurant", "In die Stadthalle", "Auf nächste Woche"],
    correctAnswer: "In die Stadthalle",
    teil: 1,
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Der Anrufer möchte einen Kuchen bestellen.",
    context:
      "Text 3: Guten Tag, hier ist die Bäckerei Müller. Sie haben gestern eine Torte für Samstag bestellt. Leider können wir die Erdbeertorte nicht machen, weil wir keine frischen Erdbeeren bekommen haben. Dürfen wir Ihnen stattdessen eine Himbeertorte anbieten?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Warum ruft die Bäckerei an?",
    options: [
      "Die Bestellung ist fertig",
      "Eine Zutat ist nicht verfügbar",
      "Die Bäckerei ist am Samstag geschlossen",
    ],
    correctAnswer: "Eine Zutat ist nicht verfügbar",
    teil: 1,
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "Der Deutschkurs beginnt pünktlich.",
    context:
      "Text 4: Liebe Kursteilnehmer, heute beginnt der Unterricht 15 Minuten später, also um 9:15 Uhr, weil unsere Lehrerin im Stau steht. Bitte warten Sie im Aufenthaltsraum.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Warum beginnt der Kurs später?",
    options: [
      "Der Raum ist noch nicht frei",
      "Die Lehrerin steht im Stau",
      "Es gibt technische Probleme",
    ],
    correctAnswer: "Die Lehrerin steht im Stau",
    teil: 1,
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Man kann den Fahrradverleih nur am Wochenende nutzen.",
    context:
      "Text 5: Herzlich willkommen in unserem Hotel! Unseren Gästen steht ein kostenloser Fahrradverleih zur Verfügung. Montag bis Sonntag von 7:00 bis 21:00 Uhr. Bitte melden Sie sich an der Rezeption an.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Wo meldet man sich für den Fahrradverleih an?",
    options: ["Im Restaurant", "An der Rezeption", "Im Fitnessraum"],
    correctAnswer: "An der Rezeption",
    teil: 1,
  },
];

const hoeren3Teil2: Question[] = [
  {
    id: 11,
    type: "multiple-choice",
    question: "Was ist das Thema der Führung?",
    context:
      "Monolog: Ein Stadtführer zeigt einer Gruppe die Altstadt von Heidelberg und erklärt die Geschichte der Stadt, die berühmte Universität und das Schloss.",
    options: [
      "Die Geschichte von Heidelberg",
      "Deutsche Küche",
      "Moderne Architektur in Deutschland",
    ],
    correctAnswer: "Die Geschichte von Heidelberg",
    teil: 2,
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Wie alt ist die Universität Heidelberg ungefähr?",
    options: ["200 Jahre", "Über 600 Jahre", "100 Jahre"],
    correctAnswer: "Über 600 Jahre",
    teil: 2,
  },
  {
    id: 13,
    type: "multiple-choice",
    question: "Was passierte mit dem Schloss im 17. Jahrhundert?",
    options: ["Es wurde gebaut", "Es wurde zerstört", "Es wurde ein Museum"],
    correctAnswer: "Es wurde zerstört",
    teil: 2,
  },
  {
    id: 14,
    type: "multiple-choice",
    question: "Wie lange dauert die Führung insgesamt?",
    options: ["Eine Stunde", "Zwei Stunden", "Drei Stunden"],
    correctAnswer: "Zwei Stunden",
    teil: 2,
  },
  {
    id: 15,
    type: "multiple-choice",
    question: "Wo endet die Stadtführung?",
    options: ["Am Bahnhof", "Am Marktplatz", "Am Schloss"],
    correctAnswer: "Am Marktplatz",
    teil: 2,
  },
];

const hoeren3Teil3: Question[] = [
  {
    id: 16,
    type: "multiple-choice",
    question: "Eva und Jan sprechen über ihre Wohnsituation.",
    context:
      "Gespräch zwischen Eva und Jan. Eva überlegt, von der Stadt aufs Land zu ziehen. Jan ist vor einem Jahr aufs Land gezogen und erzählt von seinen Erfahrungen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "Jan bereut seinen Umzug aufs Land.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 3,
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "Eva findet die Mieten in der Stadt zu hoch.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "Jan hat auf dem Land schnell Freunde gefunden.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 3,
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Eva macht sich Sorgen wegen der schlechten Verkehrsanbindung.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Jan fährt jeden Tag mit dem Auto zur Arbeit.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Eva will sich nächste Woche Häuser auf dem Land anschauen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
];

const hoeren3Teil4: Question[] = [
  {
    id: 23,
    type: "matching",
    question: "23. Hatte als Kind Musikunterricht.",
    context:
      "Lesen Sie die Aufgaben 23 bis 30. Wer sagt was?\n\nDiskussion im Radio: Moderatorin Frau Berger spricht mit Herrn Wolf (Musiklehrer) und Frau Lang (Mutter von drei Kindern) über musikalische Erziehung.\n\na) Moderatorin (Frau Berger)\nb) Musiklehrer (Herr Wolf)\nc) Mutter (Frau Lang)",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 24,
    type: "matching",
    question: "24. Findet, dass jedes Kind ein Instrument lernen sollte.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 25,
    type: "matching",
    question: "25. Meint, dass Musikunterricht zu teuer sein kann.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 26,
    type: "matching",
    question: "26. Schlägt vor, kostenlose Musikkurse in der Schule anzubieten.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 27,
    type: "matching",
    question: "27. Erzählt, dass ein Kind schnell das Interesse verlor.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 28,
    type: "matching",
    question: "28. Spricht über Musik und bessere Schulnoten.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 29,
    type: "matching",
    question: "29. Kinder sollten selbst entscheiden, ob sie spielen.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 30,
    type: "matching",
    question: "30. Erwähnt Studien über Musik und das Gehirn.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
];

export const b1Hoeren3: Question[] = assignTeile(
  [...hoeren3Teil1, ...hoeren3Teil2, ...hoeren3Teil3, ...hoeren3Teil4],
  B1_HOEREN_TEILE,
);
