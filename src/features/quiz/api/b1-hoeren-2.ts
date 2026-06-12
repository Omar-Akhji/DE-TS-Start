import { assignTeile, B1_HOEREN_TEILE } from "../lib/exam-structure.ts";
import type { Question } from "../model/types.ts";

const hoeren2Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Die Rednerin empfiehlt den Park am Fluss.",
    context:
      "Text 1: Hallo, ich bin gerade am Hauptbahnhof angekommen. Gibt es hier in der Nähe einen schönen Park? – Ja, geh einfach geradeaus und dann links. Der Stadtpark ist nur 5 Minuten entfernt. Den Park am Fluss würde ich nicht empfehlen, der ist gerade wegen Bauarbeiten gesperrt.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Wie weit ist der Stadtpark entfernt?",
    options: ["2 Minuten", "5 Minuten", "15 Minuten"],
    correctAnswer: "5 Minuten",
    teil: 1,
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Der Supermarkt hat heute Nachmittag geöffnet.",
    context:
      "Text 2: Liebe Kundinnen und Kunden, heute am Feiertag hat unser Markt von 8:00 bis 13:00 Uhr geöffnet. Ab morgen gelten wieder die normalen Öffnungszeiten. Vergessen Sie nicht: Diese Woche gibt es 20 Prozent Rabatt auf alle Milchprodukte.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Was gibt es diese Woche im Angebot?",
    options: ["Obst und Gemüse", "Milchprodukte", "Brot und Kuchen"],
    correctAnswer: "Milchprodukte",
    teil: 1,
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Frau Lehmann ruft an, weil sie einen Termin absagen möchte.",
    context:
      "Text 3: Guten Tag, hier ist Lehmann. Ich habe morgen um 10 Uhr einen Termin bei Doktor Schmidt. Leider muss ich den Termin verschieben, weil mein Sohn krank geworden ist. Könnten Sie mir einen neuen Termin nächste Woche geben? Am besten nachmittags.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Wann hätte Frau Lehmann gern den neuen Termin?",
    options: ["Morgen früh", "Diese Woche abends", "Nächste Woche nachmittags"],
    correctAnswer: "Nächste Woche nachmittags",
    teil: 1,
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "Die S-Bahn Linie 3 fährt heute nicht.",
    context:
      "Text 4: Achtung, eine Durchsage der Berliner Verkehrsbetriebe. Wegen einer technischen Störung fällt die S-Bahn-Linie 3 zwischen Alexanderplatz und Friedrichstraße heute aus. Bitte benutzen Sie die U-Bahn-Linie 6 als Alternative.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 1,
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Was sollen die Fahrgäste als Alternative nehmen?",
    options: ["Einen Bus", "Die U-Bahn-Linie 6", "Ein Taxi"],
    correctAnswer: "Die U-Bahn-Linie 6",
    teil: 1,
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Die Bibliothek bietet einen kostenlosen Workshop an.",
    context:
      "Text 5: Die Stadtbibliothek lädt alle Interessierten zum Digitalworkshop ein. Diesen Samstag von 14 bis 16 Uhr lernen Sie, wie man sichere Passwörter erstellt und sich im Internet schützt. Die Teilnahme ist kostenlos, aber eine Anmeldung ist erforderlich.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 1,
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Was muss man tun, um am Workshop teilzunehmen?",
    options: ["Nichts, man kann einfach kommen", "Sich anmelden", "Eine Gebühr zahlen"],
    correctAnswer: "Sich anmelden",
    teil: 1,
  },
];

const hoeren2Teil2: Question[] = [
  {
    id: 11,
    type: "multiple-choice",
    question: "Worüber spricht die Frau?",
    context:
      'Monolog: Eine Mitarbeiterin des Stadtmuseums erklärt den Besuchern die Geschichte des Gebäudes und das aktuelle Ausstellungsprogramm. Sie spricht über die Sonderausstellung „Leben in der Stadt 1900–2000" und gibt praktische Hinweise.',
    options: ["Über einen Sprachkurs", "Über ein Museum and seine Ausstellung", "Über ein Konzert"],
    correctAnswer: "Über ein Museum and seine Ausstellung",
    teil: 2,
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Wie alt ist das Museumsgebäude?",
    options: ["50 Jahre", "Etwa 150 Jahre", "300 Jahre"],
    correctAnswer: "Etwa 150 Jahre",
    teil: 2,
  },
  {
    id: 13,
    type: "multiple-choice",
    question: "Was zeigt die Sonderausstellung?",
    options: [
      "Moderne Kunst",
      "Das Leben in der Stadt von 1900 bis 2000",
      "Dinosaurier und Fossilien",
    ],
    correctAnswer: "Das Leben in der Stadt von 1900 bis 2000",
    teil: 2,
  },
  {
    id: 14,
    type: "multiple-choice",
    question: "Wo befindet sich das Café im Museum?",
    options: ["Im Erdgeschoss", "Im ersten Stock", "Im Keller"],
    correctAnswer: "Im Erdgeschoss",
    teil: 2,
  },
  {
    id: 15,
    type: "multiple-choice",
    question: "Was darf man in der Ausstellung nicht tun?",
    options: ["Notizen machen", "Fotografieren mit Blitz", "Fragen stellen"],
    correctAnswer: "Fotografieren mit Blitz",
    teil: 2,
  },
];

const hoeren2Teil3: Question[] = [
  {
    id: 16,
    type: "multiple-choice",
    question: "Stefan und Laura planen eine gemeinsame Reise.",
    context:
      "Gespräch zwischen Stefan und Laura. Sie sprechen über ihre Urlaubspläne für den Sommer und versuchen, einen gemeinsamen Plan zu finden.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "Laura möchte ans Meer fahren.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "Stefan findet Strandurlaub langweilig.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "Sie einigen sich auf eine Kreuzfahrt.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 3,
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Laura hat Angst vor dem Fliegen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 3,
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Sie wollen maximal 1.500 Euro pro Person ausgeben.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Am Ende entscheiden sie sich für Kroatien.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
];

const hoeren2Teil4: Question[] = [
  {
    id: 23,
    type: "matching",
    question: "23. Hat schon Erfahrung mit vegetarischer Ernährung.",
    context:
      "Lesen Sie die Aufgaben 23 bis 30. Wer sagt was?\n\nDiskussion im Radio: Moderator Herr Fischer spricht mit Frau Sommer (Ärztin) und Herrn Meier (Koch) über vegetarische Ernährung.\n\na) Moderator (Herr Fischer)\nb) Ärztin (Frau Sommer)\nc) Koch (Herr Meier)",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 24,
    type: "matching",
    question: "24. Spricht über die gesundheitlichen Vorteile.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 25,
    type: "matching",
    question: "25. Meint, dass vegetarisches Essen nicht langweilig sein muss.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 26,
    type: "matching",
    question: "26. Warnt vor möglichem Nährstoffmangel.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 27,
    type: "matching",
    question: "27. Erwähnt, dass die Nachfrage nach vegetarischen Gerichten steigt.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 28,
    type: "matching",
    question: "28. Empfiehlt, regelmäßig Bluttests machen zu lassen.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 29,
    type: "matching",
    question: "29. Hat in seinem Lokal die Speisekarte geändert.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 30,
    type: "matching",
    question: "30. Fragt am Ende nach einem konkreten Rezept-Tipp.",
    options: ["a", "b", "c"],
    correctAnswer: "a",
    teil: 4,
  },
];

export const b1Hoeren2: Question[] = assignTeile(
  [...hoeren2Teil1, ...hoeren2Teil2, ...hoeren2Teil3, ...hoeren2Teil4],
  B1_HOEREN_TEILE,
);
