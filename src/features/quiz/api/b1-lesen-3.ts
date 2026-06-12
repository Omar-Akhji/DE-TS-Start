import { assignTeile, B1_LESEN_TEILE } from "../lib/exam-structure.ts";
import type { Question } from "../model/types.ts";

const lesen3Teil1: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    question: "Julia hat den Kochkurs allein besucht.",
    context: `Blog: Julias Kochabenteuer

Am Wochenende habe ich zusammen mit meiner Schwester einen Kochkurs besucht. Wir haben einen thailändischen Kurs gewählt, weil wir beide die asiatische Küche lieben. Der Kurs hat drei Stunden gedauert und wir haben drei verschiedene Gerichte zubereitet: eine Suppe, ein Curry und einen Mango-Salat.

Am besten hat mir das grüne Curry geschmeckt, obwohl es ziemlich scharf war. Meine Schwester fand den Mango-Salat am besten. Der Kursleiter, ein Koch aus Bangkok, war sehr geduldig und hat alles gut erklärt.

Ich möchte auf jeden Fall noch einen weiteren Kurs machen – vielleicht japanisch oder indisch!`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Im Kurs haben sie nur ein Gericht gekocht.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Julia plant, weitere Kochkurse zu besuchen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Familie Weber ist dieses Jahr in die Berge gefahren.",
    context: `Blog: Familienurlaub an der Ostsee

Wir haben dieses Jahr unseren Familienurlaub an der Ostsee verbracht. Normalerweise fahren wir in die Berge, aber die Kinder wollten unbedingt ans Meer. Wir haben eine kleine Ferienwohnung in Kühlungsborn gemietet.

Das Wetter war leider nicht immer gut – an drei von sieben Tagen hat es geregnet. Trotzdem hatten wir eine tolle Zeit. Bei Regen sind wir ins Ozeaneum nach Stralsund gefahren. Die Kinder waren begeistert von den Haien und Pinguinen.`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Das Wetter war die ganze Woche gut.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Bei Regen haben sie ein Museum besucht.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
];

const lesen3Teil2: Question[] = [
  {
    id: 7,
    type: "multiple-choice",
    question: "Was können die Bewohner des Mehrgenerationenhauses gemeinsam nutzen?",
    context: `Zusammen leben, zusammen alt werden

In Freiburg gibt es ein besonderes Wohnprojekt: das Mehrgenerationenhaus „Sonnenhof". Hier leben junge Familien, Singles und Senioren unter einem Dach. Jede Partei hat eine eigene Wohnung, aber es gibt auch Gemeinschaftsräume: eine große Küche, einen Garten und einen Spielplatz.

Das Konzept funktioniert gut: Die älteren Bewohner passen manchmal auf die Kinder auf, und die jüngeren helfen bei Einkäufen oder Arztbesuchen. Einmal pro Woche kochen alle zusammen.

Allerdings gibt es auch Konflikte, zum Beispiel wegen Lärm oder unterschiedlicher Vorstellungen von Ordnung. Regelmäßige Hausversammlungen helfen, Probleme gemeinsam zu lösen.`,
    options: ["Schlafzimmer und Badezimmer", "Küche, Garten und Spielplatz", "Nur den Parkplatz"],
    correctAnswer: "Küche, Garten und Spielplatz",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Was machen die Bewohner bei Konflikten?",
    options: [
      "Sie ziehen sofort aus",
      "Sie besprechen Probleme bei Hausversammlungen",
      "Sie rufen die Polizei",
    ],
    correctAnswer: "Sie besprechen Probleme bei Hausversammlungen",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Wie helfen sich die Generationen gegenseitig?",
    options: [
      "Die Älteren zahlen die Miete für die Jüngeren",
      "Ältere passen auf Kinder auf, Jüngere helfen bei Einkäufen",
      "Alle arbeiten zusammen im Büro",
    ],
    correctAnswer: "Ältere passen auf Kinder auf, Jüngere helfen bei Einkäufen",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: 'Was ist „Foodsharing"?',
    context: `Lebensmittel retten statt wegwerfen

In Deutschland werden jedes Jahr etwa 12 Millionen Tonnen Lebensmittel weggeworfen. Die Initiative „Foodsharing" will das ändern. Freiwillige holen übrig gebliebene Lebensmittel von Bäckereien, Supermärkten und Restaurants ab und verteilen sie kostenlos an alle, die sie haben möchten.

Inzwischen gibt es in vielen Städten sogenannte „Fairteiler" – öffentliche Kühlschränke, in die jeder Lebensmittel stellen oder entnehmen kann. Die Organisation zählt mittlerweile über 400.000 Mitglieder in Deutschland, Österreich und der Schweiz.`,
    options: [
      "Ein neues Restaurant-Konzept",
      "Eine Initiative gegen Lebensmittelverschwendung",
      "Ein Online-Supermarkt",
    ],
    correctAnswer: "Eine Initiative gegen Lebensmittelverschwendung",
  },
  {
    id: 11,
    type: "multiple-choice",
    question: 'Was sind „Fairteiler"?',
    options: [
      "Billige Supermärkte",
      "Öffentliche Kühlschränke für kostenlose Lebensmittel",
      "Lieferdienste für Essen",
    ],
    correctAnswer: "Öffentliche Kühlschränke für kostenlose Lebensmittel",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Wie viele Mitglieder hat Foodsharing ungefähr?",
    options: ["40.000", "400.000", "4 Millionen"],
    correctAnswer: "400.000",
  },
];

const lesen3Teil3: Question[] = [
  {
    id: 13,
    type: "matching",
    question: "13. Susanne möchte heute Abend einen spannenden Film sehen.",
    context: `Lesen Sie das Fernsehprogramm a–j. Welche Sendung passt zu welcher Person?

a) 20:15 Uhr - "Tatort: Dunkle Geheimnisse". Der beliebte Krimi aus München. Die Kommissare ermitteln in einem mysteriösen Mordfall. Spannung garantiert!
b) 20:15 Uhr - "Die Höhle der Löwen". Gründer präsentieren ihre innovativen Geschäftsideen und hoffen auf ein Investment von erfolgreichen Unternehmern.
c) 19:30 Uhr - "Wissen macht Ah!". Das clevere Magazin für Kinder und Jugendliche. Heute geht es um den Weltraum und wie Astronauten leben.
d) 21:00 Uhr - "Rund um die Welt". Eine faszinierende Dokumentation über die Natur und Tierwelt in Südamerika. Atemberaubende Bilder aus dem Regenwald.
e) 20:15 Uhr - "Das große Backen". Prominente treten im Backwettbewerb gegeneinander an. Wer zaubert die beste Torte? Mit vielen Tipps zum Nachmachen.
f) 18:00 Uhr - "Sportschau". Die Zusammenfassung aller wichtigen Fußballspiele des Wochenendes, inklusive Interviews mit Spielern und Trainern.
g) 22:30 Uhr - "Late Night Show". Comedy, Musik und prominente Gäste. Perfekt, um den Tag mit einem Lachen ausklingen zu lassen.
h) 20:15 Uhr - "Der Bachelor". Die neue Staffel beginnt! Ein attraktiver Single-Mann sucht unter 20 Frauen seine Traumpartnerin. Romantik und Drama.
i) 19:00 Uhr - "Tagesschau". Die wichtigsten Nachrichten des Tages aus aller Welt. Politik, Wirtschaft und aktuelles Wetter.
j) 20:15 Uhr - "Gute Zeiten, schlechte Zeiten". Die tägliche Seifenoper geht weiter. Wie entscheidet sich Laura? Findet Leon endlich die Wahrheit heraus?`,
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "a",
  },
  {
    id: 14,
    type: "matching",
    question: "14. Max (10 Jahre) interessiert sich sehr für den Weltraum.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "c",
  },
  {
    id: 15,
    type: "matching",
    question: "15. Herr Weber möchte wissen, wie er einen Schokoladenkuchen macht.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "e",
  },
  {
    id: 16,
    type: "matching",
    question: "16. Lisa und Tim suchen eine Sendung über exotische Tiere und Landschaften.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "d",
  },
  {
    id: 17,
    type: "matching",
    question: "17. Frau Müller verpasst keine Folge ihrer Lieblingsserie um 20:15 Uhr.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "j",
  },
  {
    id: 18,
    type: "matching",
    question: "18. Jan sucht Tipps für den Bau eines Regals aus Holz.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "0",
  },
  {
    id: 19,
    type: "matching",
    question: "19. Anna möchte sehen, wie junge Unternehmer ihre Firmen-Ideen vorstellen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "b",
  },
];

const lesen3Teil4: Question[] = [
  {
    id: 20,
    type: "multiple-choice",
    question: "Angela ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    context: `Diskussion: „Soziale Medien – Fluch oder Segen?"

Angela: Ich nutze soziale Medien täglich und finde sie großartig. Ich kann mit Freunden in Kontakt bleiben, die weit weg wohnen. Ohne Instagram hätte ich den Kontakt zu vielen verloren.

Markus: Soziale Medien machen süchtig und unglücklich. Studien zeigen, dass junge Menschen, die viel Zeit auf Social Media verbringen, häufiger depressiv sind. Ich halte mich bewusst fern.

Sabine: Für mich sind soziale Medien wichtig für die Arbeit. Als Grafikdesignerin zeige ich dort meine Werke und finde neue Kunden. Privat nutze ich sie aber kaum.

Jörg: Ich finde soziale Medien gefährlich, besonders für Kinder. Man weiß nie, wer sich hinter einem Profil versteckt. Da brauchen wir strengere Regeln.

Nicole: Ich liebe soziale Medien! Man kann so viel Neues lernen – Rezepte, Sprachen, Handwerkskunst. Man muss nur die richtigen Kanäle finden.

Bernd: Social Media ist reine Zeitverschwendung. Statt stundenlang durch Feeds zu scrollen, sollte man lieber ein Buch lesen oder Sport treiben.

Heike: Ich nutze Facebook vor allem, um mich über lokale Veranstaltungen zu informieren. Das finde ich sehr praktisch. Problematisch ist nur, wenn man zu viel persönliche Informationen teilt.`,
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Markus ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Sabine ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Jörg ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 24,
    type: "multiple-choice",
    question: "Nicole ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Bernd ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Heike ist dafür, dass man soziale Medien in der Freizeit nutzt.",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
];

const lesen3Teil5: Question[] = [
  {
    id: 27,
    type: "multiple-choice",
    question: "Können Gäste ihre Autos überall auf dem Campingplatz parken?",
    context: `Campingplatz „Am Waldsee“ – Auszug aus der Platzordnung

1. Die Rezeption ist von 8:00 bis 20:00 Uhr geöffnet. Bitte melden Sie sich bei Ankunft sofort an.
2. Fahrzeuge dürfen nur auf den gekennzeichneten Gästeparkplätzen außerhalb des Zeltbereichs abgestellt werden. Das Fahren auf dem Gelände ist nur im Schritttempo erlaubt.
3. Von 22:00 Uhr bis 7:00 Uhr herrscht absolute Nachtruhe. Radios und Fernseher sind auf Zimmerlautstärke zu stellen.
4. Offenes Feuer ist auf dem gesamten Platz strengstens untersagt. Zum Grillen nutzen Sie bitte ausschließlich die dafür vorgesehenen Grillplätze am Rand des Campingplatzes.
5. Hunde sind willkommen, müssen aber auf dem Platz stets an der kurzen Leine geführt werden. Das Mitbringen von Hunden an den Badestrand ist nicht gestattet.`,
    options: [
      "Nein, nur auf den markierten Parkplätzen.",
      "Ja, solange sie langsam fahren.",
      "Nein, Autos sind komplett verboten.",
    ],
    correctAnswer: "Nein, nur auf den markierten Parkplätzen.",
  },
  {
    id: 28,
    type: "multiple-choice",
    question: "Was gilt für die Nachtruhe?",
    options: [
      "Man darf keine Musik mehr hören.",
      "Sie beginnt um 20:00 Uhr.",
      "Man darf Musik nur sehr leise hören.",
    ],
    correctAnswer: "Man darf Musik nur sehr leise hören.",
  },
  {
    id: 29,
    type: "multiple-choice",
    question: "Darf man auf dem Campingplatz grillen?",
    options: [
      "Ja, aber nur an speziellen Grillplätzen.",
      "Ja, überall wenn man vorsichtig ist.",
      "Nein, Feuer ist komplett verboten.",
    ],
    correctAnswer: "Ja, aber nur an speziellen Grillplätzen.",
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Wo dürfen Hunde nicht hin?",
    options: ["Auf den Campingplatz.", "An den Badestrand.", "Aus dem Auto heraus."],
    correctAnswer: "An den Badestrand.",
  },
];

export const b1Lesen3: Question[] = assignTeile(
  [...lesen3Teil1, ...lesen3Teil2, ...lesen3Teil3, ...lesen3Teil4, ...lesen3Teil5],
  B1_LESEN_TEILE,
);
