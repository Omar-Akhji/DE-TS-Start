import { assignTeile, B1_LESEN_TEILE } from "../lib/exam-structure.ts";
import type { Question } from "../model/types.ts";

const lesen2Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Marco hat seine Reise nach Wien selbst organisiert.",
    context: `Blog: Marcos Reisetagebuch

Letztes Wochenende war ich zum ersten Mal in Wien. Meine Freundin Lisa hat alles organisiert – vom Hotel bis zu den Eintrittskarten für die Museen. Am ersten Tag haben wir das Schloss Schönbrunn besichtigt. Es war beeindruckend! Besonders der Garten hat mir gefallen.

Am Abend waren wir in einem typischen Wiener Kaffeehaus. Ich habe eine Sachertorte probiert – die war aber ehrlich gesagt etwas zu süß für meinen Geschmack. Lisa fand sie fantastisch.

Am nächsten Tag hatten wir leider schlechtes Wetter, deshalb sind wir ins Kunsthistorische Museum gegangen. Ich kann Wien wirklich empfehlen, vor allem im Frühling, wenn die Parks so schön grün sind.`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Marco hat die Sachertorte sehr gut geschmeckt.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Am zweiten Tag war das Wetter schlecht.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Anna macht regelmäßig Sport.",
    context: `Blog: Annas Fitness-Tagebuch

Seit drei Monaten gehe ich jeden Morgen vor der Arbeit joggen. Am Anfang war es furchtbar – ich konnte kaum 10 Minuten laufen. Jetzt schaffe ich problemlos 30 Minuten. Mein Ziel ist es, im Herbst an einem 10-km-Lauf teilzunehmen. Mein Kollege Thomas hat mich überredet, mich anzumelden. Er läuft schon seit Jahren Marathon.

Das Beste am Laufen ist, dass ich mich danach so energiegeladen fühle. Außerdem schlafe ich viel besser und bin weniger gestresst.`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Anna will an einem Marathon teilnehmen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Anna schläft seit dem Joggen schlechter.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
];

const lesen2Teil2: Question[] = [
  {
    id: 7,
    type: "multiple-choice",
    question: "Warum wird Homeoffice immer beliebter?",
    context: `Homeoffice: Zukunft der Arbeit?

Eine neue Umfrage zeigt: 65 Prozent der Deutschen möchten auch nach der Pandemie mindestens zwei Tage pro Woche von zu Hause arbeiten. Die Gründe sind vielfältig: Man spart Fahrtzeit, kann die Arbeit flexibler einteilen und hat mehr Zeit für die Familie.

Kritiker warnen jedoch vor der Isolation. Wer immer allein arbeitet, verliert den Kontakt zu den Kollegen. Außerdem fällt es vielen schwer, Arbeit und Freizeit zu trennen. Manche arbeiten im Homeoffice sogar länger als im Büro.

Experten empfehlen ein hybrides Modell: zwei bis drei Tage Homeoffice und den Rest im Büro.`,
    options: [
      "Weil die Büros geschlossen sind",
      "Wegen Flexibilität, Zeitersparnis und mehr Familienzeit",
      "Weil man im Homeoffice mehr verdient",
    ],
    correctAnswer: "Wegen Flexibilität, Zeitersparnis und mehr Familienzeit",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Welche Gefahr sehen Kritiker beim Homeoffice?",
    options: [
      "Man verdient weniger Geld",
      "Man verliert den Kontakt zu Kollegen",
      "Man muss mehr Steuern zahlen",
    ],
    correctAnswer: "Man verliert den Kontakt zu Kollegen",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Was empfehlen Experten?",
    options: [
      "Nur noch im Büro arbeiten",
      "Ein Mischmodell aus Homeoffice und Büro",
      "Jeden Tag im Homeoffice arbeiten",
    ],
    correctAnswer: "Ein Mischmodell aus Homeoffice and Büro",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "Warum fahren immer mehr Deutsche mit dem Fahrrad?",
    context: `Fahrrad statt Auto – ein Trend in deutschen Städten

In vielen deutschen Großstädten steigt die Zahl der Fahrradfahrer. Städte wie München, Berlin und Hamburg bauen ihre Radwege aus. Der Grund: Immer mehr Menschen wollen umweltfreundlich unterwegs sein und gleichzeitig etwas für ihre Gesundheit tun.

Auch die hohen Benzinpreise spielen eine Rolle. Ein gutes Fahrrad kostet einmalig 500 bis 1.000 Euro, während ein Auto jeden Monat mehrere Hundert Euro kostet.

Trotzdem gibt es Probleme: Viele Radwege sind zu schmal oder in schlechtem Zustand. Radfahrer fühlen sich oft unsicher im Straßenverkehr.`,
    options: [
      "Weil Autos verboten sind",
      "Wegen Umweltbewusstsein, Gesundheit und hoher Benzinpreise",
      "Weil Fahrräder kostenlos sind",
    ],
    correctAnswer: "Wegen Umweltbewusstsein, Gesundheit und hoher Benzinpreise",
  },
  {
    id: 11,
    type: "multiple-choice",
    question: "Welches Problem gibt es beim Radfahren in der Stadt?",
    options: [
      "Es gibt zu viele Fahrradfahrer",
      "Die Radwege sind oft zu schmal oder in schlechtem Zustand",
      "Fahrräder sind zu langsam",
    ],
    correctAnswer: "Die Radwege sind oft zu schmal oder in schlechtem Zustand",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Wie viel kostet ein gutes Fahrrad laut dem Text?",
    options: ["100 bis 300 Euro", "500 bis 1.000 Euro", "Mehr als 2.000 Euro"],
    correctAnswer: "500 bis 1.000 Euro",
  },
];

const lesen2Teil3: Question[] = [
  {
    id: 13,
    type: "matching",
    question:
      "13. Familie Berger sucht einen Urlaub am Meer, bei dem auch ihr Hund willkommen ist.",
    context: `Lesen Sie die Anzeigen a–j. Welche Anzeige passt zu welcher Situation?

a) Ferienwohnung "Alpenblick": Erholung pur in den Bergen! Ideal für Wanderer und Naturliebhaber. Hunde sind bei uns herzlich willkommen. Keine Nebenkosten.
b) Familienhotel "Sonnenschein" an der Ostsee: Direkt am Strand gelegen. Mit großer Poollandschaft und Kinderbetreuung. Haustiere sind leider nicht gestattet.
c) Sprachreise nach Südspanien: Verbinden Sie Urlaub mit Lernen! Vormittags Spanischkurs, nachmittags Ausflüge ans Meer. Unterbringung bei Gastfamilien.
d) Action & Adventure Camp! Wildwasser-Rafting, Klettern und Mountainbiken für Jugendliche (14-18 Jahre) in Österreich. Inklusive Zeltlager und Vollverpflegung.
e) Ferienhaus "Strandkrabbe" an der Nordsee: Gemütliches Haus für bis zu 6 Personen, nur 100m vom Hundestrand entfernt. Eingezäunter Garten, ideal für Ihren Vierbeiner!
f) Entspannungs-Wochenende im Schwarzwald: 2 Übernachtungen im 4-Sterne-Wellnesshotel mit Massage und Sauna-Nutzung. Perfekt für Paare.
g) Städtereise Berlin: Erleben Sie die Hauptstadt! 3 Tage inkl. Übernachtung im zentralen Hostel, Ticket für den Nahverkehr und Museumspass. Speziell für Studenten!
h) Fahrrad-Rundfahrt am Bodensee: Organisierte 7-Tage-Tour inkl. Gepäcktransport und Hotelübernachtungen. Lernen Sie die Region aktiv kennen!
i) Sommercamp für 8-12 Jährige auf dem Bauernhof: Tiere füttern, reiten und Natur erleben. Ohne Eltern! Betreuung rund um die Uhr.
j) Luxuskreuzfahrt im Mittelmeer: 14 Tage auf dem Traumschiff. 5-Sterne-Essen, Shows am Abend und Landausflüge in historische Städte.`,
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "e",
  },
  {
    id: 14,
    type: "matching",
    question: "14. Thomas und Sarah suchen ein entspanntes Wochenende ohne Kinder.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "f",
  },
  {
    id: 15,
    type: "matching",
    question: "15. Lukas (16) möchte in den Ferien Sport machen und andere Jugendliche treffen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "d",
  },
  {
    id: 16,
    type: "matching",
    question: "16. Herr und Frau Meyer wollen eine Reise machen, ohne ihr Gepäck selbst zu tragen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "h",
  },
  {
    id: 17,
    type: "matching",
    question:
      "17. Elena (20) studiert Architektur und möchte in den Ferien alte Gebäude besichtigen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "0",
  },
  {
    id: 18,
    type: "matching",
    question:
      "18. Familie Schmidt sucht ein sonniges Hotel am Strand, wo die Kinder betreut werden.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "b",
  },
  {
    id: 19,
    type: "matching",
    question: "19. Mia möchte im Urlaub eine neue Sprache lernen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "c",
  },
];

const lesen2Teil4: Question[] = [
  {
    id: 20,
    type: "multiple-choice",
    question: "Felix ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    context: `Diskussion: „Brauchen wir mehr Sportunterricht in der Schule?"

Felix: Definitiv ja! Kinder bewegen sich viel zu wenig. Mehr Sport in der Schule wäre die beste Lösung. Drei Stunden pro Woche reichen nicht aus.

Katharina: Ich bin dagegen. Der Stundenplan ist schon voll genug. Wenn man mehr Sport einführt, muss man andere Fächer kürzen. Mathematik und Sprachen sind wichtiger.

Robert: Sport ist genauso wichtig wie jedes andere Fach. Bewegung hilft beim Lernen und reduziert Stress. Ich bin absolut dafür.

Helena: Die Kinder können doch nach der Schule Sport machen. Dafür braucht man keinen extra Unterricht. Es gibt genug Sportvereine.

Michael: Viele Familien können sich keinen Sportverein leisten. In der Schule hat jedes Kind die gleichen Chancen. Deshalb bin ich für mehr Sportunterricht.

Laura: Ich finde, die Qualität ist wichtiger als die Quantität. Statt mehr Stunden brauchen wir bessere Sportlehrer und modernere Sporthallen.

Stefan: Mehr Bewegung in der Schule? Auf jeden Fall! Die Statistiken zeigen, dass immer mehr Kinder übergewichtig sind.`,
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Katharina ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Robert ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Helena ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 24,
    type: "multiple-choice",
    question: "Michael ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Laura ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Stefan ist dafür, dass in Schulen mehr Sport unterrichtet wird.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
];

const lesen2Teil5: Question[] = [
  {
    id: 27,
    type: "multiple-choice",
    question: "Wer darf mit einem 6-jährigen Kind ins Schwimmbad gehen?",
    context: `Freibad Sonnenstein – Auszug aus der Badeordnung

1. Das Freibad ist von Mitte Mai bis Mitte September bei gutem Wetter täglich von 9:00 bis 20:00 Uhr geöffnet. Der letzte Einlass ist um 19:15 Uhr.
2. Kinder unter 7 Jahren ist der Zutritt nur in Begleitung einer Aufsichtsperson (mindestens 16 Jahre alt) gestattet.
3. Vor dem Betreten der Schwimmbecken ist das Duschen aus hygienischen Gründen Pflicht.
4. Das Springen vom Beckenrand ist gefährlich und daher verboten. Nutzen Sie bitte ausschließlich die dafür vorgesehenen Sprungtürme im separaten Sprungbecken.
5. Eigene Speisen und Getränke dürfen gerne mitgebracht und auf der Liegewiese verzehrt werden. Aus Sicherheitsgründen sind Glasflaschen und Glasbehälter jedoch auf dem gesamten Gelände strengstens verboten.
6. Tiere dürfen nicht ins Freibad mitgebracht werden. Ausnahme: Gekennzeichnete Blindenhunde.`,
    options: [
      "Niemand, das Kind muss draußen bleiben.",
      "Jede Person, die mindestens 16 Jahre alt ist.",
      "Ausschließlich die Eltern des Kindes.",
    ],
    correctAnswer: "Jede Person, die mindestens 16 Jahre alt ist.",
  },
  {
    id: 28,
    type: "multiple-choice",
    question: "Was stimmt bezüglich der Öffnungszeiten?",
    options: [
      "Man kann bis 20:00 Uhr ins Schwimmbad gehen.",
      "Man kann noch um 19:30 Uhr eine Eintrittskarte kaufen.",
      "Man kann ab 19:15 Uhr nicht mehr ins Bad.",
    ],
    correctAnswer: "Man kann ab 19:15 Uhr nicht mehr ins Bad.",
  },
  {
    id: 29,
    type: "multiple-choice",
    question: "Wo darf man ins Wasser springen?",
    options: [
      "Von jedem Beckenrand.",
      "Nur im Bereich für Kinder.",
      "Nur von den Sprungtürmen im Sprungbecken.",
    ],
    correctAnswer: "Nur von den Sprungtürmen im Sprungbecken.",
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Was ist im Freibad nicht erlaubt?",
    options: [
      "Essen von zu Hause mitzubringen.",
      "Glasflaschen mitzubringen.",
      "Sich auf die Liegewiese zu setzen.",
    ],
    correctAnswer: "Glasflaschen mitzubringen.",
  },
];

export const b1Lesen2: Question[] = assignTeile(
  [...lesen2Teil1, ...lesen2Teil2, ...lesen2Teil3, ...lesen2Teil4, ...lesen2Teil5],
  B1_LESEN_TEILE,
);
