import { assignTeile, B1_HOEREN_TEILE } from "../lib/exam-structure.ts";
import type { Question } from "../model/types.ts";

const hoeren1Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question:
      "Wegen Umzugs halten wir für Sie im Sommerschlussverkauf ganz besondere Angebote bereit.",
    context:
      "Nummer 1: Sie hören eine Durchsage in einem Möbelhaus. Wir begrüßen Sie, verehrte Kundschaft, in unserem „Country-Einrichtungshaus“...",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil1_1.mp3",
    teil: 1,
    teilTitle: "Teil 1 – Richtig oder Falsch",
    teilInstruction:
      "Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie für die Aufgaben 1 bis 10 die richtige Lösung.",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Welche Abteilungen sind im Angebot?",
    options: [
      "a) Wohnzimmer und Schlafzimmer.",
      "b) Schlafzimmer und Esszimmer.",
      "c) Wohn-, Schlaf- und Kinderzimmer.",
    ],
    correctAnswer: "a) Wohnzimmer und Schlafzimmer.",
    teil: 1,
  },
  {
    id: 3,
    type: "multiple-choice",
    question:
      "Wer Reisen und Musizieren miteinander verbinden möchte, ist bei „musica viva“ an der richtigen Adresse.",
    context:
      "Nummer 2: Sie hören eine Durchsage im Radio. Und hier ein attraktives Angebot für unsere Zuhörer, die auch im Urlaub gern aktiv sind. Der Spezialveranstalter „musica viva“ bietet...",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil1_2.mp3",
    teil: 1,
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Das Programmangebot von „musica viva“ gibt es ...",
    options: ["a) nur in Österreich.", "b) nur in Deutschland.", "c) in mehreren Ländern."],
    correctAnswer: "c) in mehreren Ländern.",
    teil: 1,
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Sei doch so lieb und kümmere dich schon um das Abendessen.",
    context:
      "Nummer 3: Sie hören eine Nachricht auf dem Anrufbeantworter. Hallo, Liebster, ich bin’s. Du, ich muss heute ein bisschen länger arbeiten. Sei doch so lieb und kümmere dich schon um das Abendessen...",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil1_3.mp3",
    teil: 1,
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Wie viele Schalter müssen am Herd eingestellt werden?",
    options: ["a) Drei.", "b) Fünf.", "c) Zwei."],
    correctAnswer: "c) Zwei.",
    teil: 1,
  },
  {
    id: 7,
    type: "multiple-choice",
    question: "In ganz Österreich scheint die meiste Zeit die Sonne.",
    context:
      "Nummer 4: Sie hören den Wetterbericht im Radio. Sie hören nun den Wetterbericht für morgen, den 25.3. In ganz Österreich scheint die meiste Zeit die Sonne.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil1_4.mp3",
    teil: 1,
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Wo ist es am wärmsten?",
    options: ["a) Im Norden.", "b) Im Westen.", "c) Im Osten."],
    correctAnswer: "b) Im Westen.",
    teil: 1,
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Sie sind mit einer Schokoladenfabrik verbunden.",
    context:
      "Nummer 5: Sie hören eine automatische Telefonauskunft. Schokoladenmuseum Waldenbuch, wir danken für Ihren Anruf!",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    audioUrl: "/audio/b1/hoeren/test1/teil1_5.mp3",
    teil: 1,
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Wo braucht man nichts zu bezahlen?",
    options: ["a) In der Ausstellung.", "b) Im Schoko-Laden.", "c) In der Schokowerkstatt."],
    correctAnswer: "b) Im Schoko-Laden.",
    teil: 1,
  },
];

const hoeren1Teil2: Question[] = [
  {
    id: 11,
    type: "multiple-choice",
    question: "Wer fährt mit ins Camp?",
    context:
      "Teil 2: Sie sind auf dem Eltern-Informationsabend für eine Schülerreise in ein Feriencamp. Guten Abend, liebe Eltern! Schön, dass Sie so zahlreich zu unserem Informationsabend erschienen sind...",
    options: [
      "a) Der Direktor der Schule.",
      "b) Der Techniker der Schule.",
      "c) Lehrer der Schule.",
    ],
    correctAnswer: "c) Lehrer der Schule.",
    audioUrl: "/audio/b1/hoeren/test1/teil2.mp3",
    teil: 2,
    teilTitle: "Teil 2 – Multiple Choice",
    teilInstruction:
      "Sie hören einen Text. Sie hören den Text einmal. Wählen Sie für die Aufgaben 11 bis 15 die richtige Lösung a, b oder c.",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Was ist den Eltern bereits bekannt?",
    options: [
      "a) Wann die Schüler abfliegen und ankommen.",
      "b) Was jeden Tag auf dem Programm steht.",
      "c) Wie das Feriencamp aussieht.",
    ],
    correctAnswer: "a) Wann die Schüler abfliegen und ankommen.",
    teil: 2,
  },
  {
    id: 13,
    type: "multiple-choice",
    question: "Die Kinder und ihre Begleiter fahren mit dem Bus ...",
    options: ["a) nach Brandenburg.", "b) nach Papstdorf.", "c) nach Dresden."],
    correctAnswer: "b) nach Papstdorf.",
    teil: 2,
  },
  {
    id: 14,
    type: "multiple-choice",
    question: "Wie viele Kinder wohnen in einem Bungalow?",
    options: ["a) Acht.", "b) Vier.", "c) Zwei."],
    correctAnswer: "a) Acht.",
    teil: 2,
  },
  {
    id: 15,
    type: "multiple-choice",
    question: "Die Kinder essen ...",
    options: ["a) jeden Tag in Gaststätten.", "b) dreimal am Tag.", "c) an einem Kiosk."],
    correctAnswer: "b) dreimal am Tag.",
    teil: 2,
  },
];

const hoeren1Teil3: Question[] = [
  {
    id: 16,
    type: "multiple-choice",
    question: "Selina will wegen ihrer Geburtstagsparty in die Stadt fahren.",
    context:
      "Teil 3: Sie warten an einer Bushaltestelle und hören, wie sich zwei Jugendliche über eine Geburtstagsparty unterhalten.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    audioUrl: "/audio/b1/hoeren/test1/teil3.mp3",
    teil: 3,
    teilTitle: "Teil 3 – Richtig oder Falsch",
    teilInstruction:
      "Sie hören ein Gespräch. Sie hören das Gespräch einmal. Wählen Sie für die Aufgaben 16 bis 22 die richtige Lösung.",
  },
  {
    id: 17,
    type: "multiple-choice",
    question: "Selina will bei sich zu Hause keine Party machen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 18,
    type: "multiple-choice",
    question: "Selinas Eltern sind gegen die Party.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 3,
  },
  {
    id: 19,
    type: "multiple-choice",
    question: "Für Selinas Berufswunsch ist die Reise nach England wichtig.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Jan hat dieselbe Meinung wie Selinas Eltern.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Selina mag Pascal nicht.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 3,
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Pascals Party hat viel Geld gekostet.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 3,
  },
];

const hoeren1Teil4: Question[] = [
  {
    id: 23,
    type: "matching",
    question: "Die Auswahl an Projekten ist alles andere als gering.",
    context:
      "Teil 4: Eine Moderatorin diskutiert mit Iris Berger und Kai Weser über „Workcamps“.\n\na) Moderatorin\nb) Iris Berger\nc) Kai Weser",
    options: ["a", "b", "c"],
    correctAnswer: "a",
    audioUrl: "/audio/b1/hoeren/test1/teil4.mp3",
    teil: 4,
    teilTitle: "Teil 4 – Wer sagt was?",
    teilInstruction:
      "Sie hören eine Diskussion. Sie hören die Diskussion zweimal. Wählen Sie für die Aufgaben 23 bis 30: Wer sagt das?",
  },
  {
    id: 24,
    type: "matching",
    question: "Iris durfte nach Griechenland, weil es dort ein großes Freizeitangebot gibt.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 25,
    type: "matching",
    question: "Kai wollte in Ecuador auch seine Spanischkenntnisse verbessern.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 26,
    type: "matching",
    question: "Freiwilligenarbeit in einem Lebenslauf macht immer einen guten Eindruck.",
    options: ["a", "b", "c"],
    correctAnswer: "a",
    teil: 4,
  },
  {
    id: 27,
    type: "matching",
    question: "Iris hat versucht, Helfer und Sponsoren zu werben.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
  {
    id: 28,
    type: "matching",
    question: "Kai findet es wichtig, die Bevölkerung über den Umweltschutz aufzuklären.",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 29,
    type: "matching",
    question: "Kai war überrascht von den Lebensbedingungen in Ecuador (Kulturschock).",
    options: ["a", "b", "c"],
    correctAnswer: "c",
    teil: 4,
  },
  {
    id: 30,
    type: "matching",
    question: "Am Ende hat man das Gefühl, etwas für einen guten Zweck getan zu haben.",
    options: ["a", "b", "c"],
    correctAnswer: "b",
    teil: 4,
  },
];

export const b1Hoeren1: Question[] = assignTeile(
  [...hoeren1Teil1, ...hoeren1Teil2, ...hoeren1Teil3, ...hoeren1Teil4],
  B1_HOEREN_TEILE,
);
