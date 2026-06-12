import { assignTeile, B1_LESEN_TEILE } from "../lib/exam-structure.ts";
import type { Question } from "../model/types.ts";

const lesen4Teil1: Question[] = [
  {
    id: 0,
    type: "multiple-choice",
    question: "Kiara ist nicht allein ins Konzert gegangen.",
    context: `Kiara Wenzel
10. März

Hallo TH-Fans,
ich und meine Freundin waren im Tokio-Hotel-Konzert in Erfurt dabei. Wir hatten uns rechtzeitig Karten geholt. Schon viele Wochen vor dem Konzert war ich tierisch happy. Am 6. März stand ich um 5 Uhr morgens auf, ging zu meiner Freundin und gemeinsam fuhren wir nach Erfurt. Als wir so ca. gegen 8 Uhr vor der Thüringenhalle ankamen, waren wir erstaunt, dass zum Glück gerade mal 20 Leute oder so da waren. Das hieß für uns, wir waren mit im ersten Block und damit war uns die erste Reihe sicher.

Nach endlosen Stunden Warten, es war ungefähr um 12, kamen einige Fernsehteams und fragten uns, wen wir am besten finden, wie lange wir schon stehen usw. Die letzte Stunde vor dem Einlass kam uns unendlich lang vor. In dieser Zeit wurde uns erzählt, wie das dann alles abläuft. Nun war es endlich so weit. Eine Dreiviertelstunde vor dem offiziellen Einlass (es war 16.45 Uhr) durften wir mit unseren Bändchen als Erste rein.

Wir sind sofort losgerannt, um unsere Plätze zu sichern. Und tatsächlich: wir waren in der 1. Reihe! Dann wurde es im Saal dunkel. Alle schrien. Nur Bill kam nicht. Wir mussten noch zehn Minuten warten, die uns wie Stunden vorkamen. Aber dann ging es endlich los. Das Konzert war der absolute Hammer. Wir haben die ganze Zeit mitgesungen. Bill stand am Ende genau vor mir und hat meine Hand berührt! Ich werde dieses Konzert nie vergessen.`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 1,
  },
  {
    id: 1,
    type: "multiple-choice",
    question: "Kiara musste lange vor der Konzerthalle warten.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 1,
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Die Band wurde von Fernsehreportern interviewt.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Kiara schaffte es schließlich, ganz vorn zu stehen.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    teil: 1,
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Als es in der Halle dunkel wurde, schrien alle vor Angst.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "Bill kam und schrie am lautesten.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Die Bandmitglieder haben Kiara die Hand gegeben.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
    teil: 1,
  },
];

const lesen4Teil2: Question[] = [
  {
    id: 7,
    type: "multiple-choice",
    question: "In diesem Text geht es darum, ...",
    context: `WebStamp: persönliche Briefmarken
Die Schweizerische Post hatte mit der WebStamp, der elektronischen Briefmarke, eine neue, kreative Idee. WebStamp bietet die Möglichkeit, direkt am PC eigene Briefmarken zu gestalten und auszudrucken. Besonders interessant ist diese innovative Online-Frankier-Lösung für Firmen, da Briefe und Mailings mit individuellen Marken auffallen und beim Empfänger für Interesse sorgen. So sendet man auf und mit der Briefmarke auch eine Mini-Reklame und bleibt den Kunden auf jeden Fall in Erinnerung.

Die Vorteile von WebStamp lassen sich ganz einfach nutzen. Nach der Anmeldung auf der Webseite der Schweizerischen Post kann’s losgehen mit dem Gestalten einer individuellen Briefmarke. Als Sujet ist alles möglich: Fotos, Firmen- und Produktlogos, Grafiken oder sogar Reklamebotschaften. WebStamp funktioniert online und ist kostenlos. Man bezahlt nur das Porto, also den Wert, den die Briefmarke dann hat. Diese neuartigen Briefmarken gelten sowohl im Inland als auch im Ausland.

Da das alles über Computerprogramme läuft, sind auch verschiedene Druckformate möglich, falls man beispielsweise die Empfängeradresse in die eigene WebStamp integrieren möchte. Adressen können direkt aus Excel importiert werden.`,
    options: [
      "a) wie die Schweizerische Post funktioniert.",
      "b) dass die Schweizerische Post eine interessante Webseite hat.",
      "c) dass man eine Briefmarke selbst machen kann.",
    ],
    correctAnswer: "c) dass man eine Briefmarke selbst machen kann.",
    teil: 2,
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "Die WebStamp ...",
    options: [
      "a) hat denselben Preis wie eine normale Briefmarke.",
      "b) gilt nur in der Schweiz.",
      "c) wurde von einer Werbefirma erfunden.",
    ],
    correctAnswer: "a) hat denselben Preis wie eine normale Briefmarke.",
    teil: 2,
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Die Adresse des Empfängers ...",
    options: [
      "a) muss auf der WebStamp stehen.",
      "b) kann man aus dem Excel-Programm übernehmen.",
      "c) wird mit einem extra Programm gedruckt.",
    ],
    correctAnswer: "b) kann man aus dem Excel-Programm übernehmen.",
    teil: 2,
  },
];

const lesen4Teil3: Question[] = [
  {
    id: 0,
    type: "matching",
    question:
      "Ilse lebt auf einem Bauernhof. Sie hat einen Hund, zwei Katzen, Kaninchen und sogar ein Pferd. Trotzdem hätte sie gern auch noch einen Esel.",
    context: `Anzeigen:
a) Dringend gesucht: Frauchen u./od. Herrchen für Cockerspaniel. Tel. 089/3095486
b) Eselfohlen Diana zu verkaufen. Tel. 07631-7192
c) Arme Katze „Blacky“, 4j., Wer nimmt sie liebevoll auf?
d) Gesucht wird der Graupapagei „Burli“. ☎ 01/290 60 43
e) Graupapageienbabys zu verkaufen. Tel. 02166/930305
f) Nehme Ihren Hund / Ihre Katze während Ihres Urlaubs in Pflege! Tel. 08084/529763
g) ARCHE NOAH - TIERKLINIK Salzburg: Wir versorgen Kleintiere liebevoll während Ihres Urlaubs!
h) Nehme Ihren Hund in Pflege (Wohnung). Tel. 01 73-28 85 11 99
i) Suche Aquarium kostenlos mit Zubehör. ☎ 07631 / 18357
j) Fisch- & Korallentag. Verkauf von Fischen, Pflanzen, Zubehör.`,
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "b",
    teil: 3,
  },
  {
    id: 13,
    type: "matching",
    question:
      "13. Susanne möchte im Urlaub verreisen und weiß nicht, wer in dieser Zeit auf ihre kleine, weiße Maus aufpassen kann.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "g",
    teil: 3,
  },
  {
    id: 14,
    type: "matching",
    question:
      "14. Thomas ist Single und hält sich einen Dackel. Die Nachbarn haben sich beschwert, weil der Hund in der Wohnung laut wird, wenn Thomas tagsüber im Büro ist.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "h",
    teil: 3,
  },
  {
    id: 15,
    type: "matching",
    question:
      "15. Die Familie Schmidt hat einen großen Garten and eine Bernhardiner-Hündin. Damit ihr Haustier nicht allein ist, wären sie bereit, einen zweiten Hund aufzunehmen. Er soll aber nicht so groß sein.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "a",
    teil: 3,
  },
  {
    id: 16,
    type: "matching",
    question:
      "16. Herr Albrecht muss aus beruflichen Gründen umziehen und kann seinen Hund nicht mitnehmen. Er sucht ein neues Zuhause für ihn.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "0",
    teil: 3,
  },
  {
    id: 17,
    type: "matching",
    question: "17. Eva möchte für ihr neues, großes Aquarium einige Fische kaufen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "j",
    teil: 3,
  },
  {
    id: 18,
    type: "matching",
    question:
      "18. Karl will sich eine Katze anschaffen. Er mag diese Tiere, weil sie nicht viel Pflege brauchen und sehr selbstständig sind.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "c",
    teil: 3,
  },
  {
    id: 19,
    type: "matching",
    question: "19. Frau Bach mag Vögel, sie sucht zurzeit einen Papagei.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "e",
    teil: 3,
  },
];

const lesen4Teil4: Question[] = [
  {
    id: 0,
    type: "multiple-choice",
    question: "Henriette",
    context: `Diskussion über Kettenmails:
Henriette: Wenn du eine Mail bekommst, sie an alle weiterzuschicken – dann lass es bleiben. Du machst dich nur unbeliebt.
Alexandra: Kettenmails sind für mich einfach ein Teil der Kommunikation. Wenn die Mail lustig ist, schicke ich sie weiter.
Nils: Ich lösche Kettenmails sofort. Werbefirmen sammeln so Adressen für Spam.
Stefan: Ich prüfe Notrufe nach, würde sie aber nicht weiterschicken, um andere nicht zu ärgern.
Charlotte: Ich habe bei einem Rezept-Spiel mitgemacht und freue mich auf die Rezepte.
Victor: Zeitverschwendung! Man sollte lieber richtige Mails an Freunde schreiben.
Wiebke: Man sollte Interessantes immer an alle weiterleiten. Das ist das Gute am Internet.
Katta: Psychoterror! Ich will bei keiner Kettenmail mehr mitmachen.`,
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
    teil: 4,
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Alexandra",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
    teil: 4,
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Nils",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
    teil: 4,
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Stefan",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
    teil: 4,
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Charlotte",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
    teil: 4,
  },
  {
    id: 24,
    type: "multiple-choice",
    question: "Victor",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
    teil: 4,
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Wiebke",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
    teil: 4,
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Katta",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
    teil: 4,
  },
];

const lesen4Teil5: Question[] = [
  {
    id: 27,
    type: "multiple-choice",
    question: "Führungen ...",
    context: `Deutsches Museum:
Öffnungszeiten: Täglich 9.00 bis 17.00 Uhr.
Mitgliedschaft: 52,- € Jahresbeitrag für Familien.
Führungen: In Deutsch und Fremdsprachen. Anmeldung 6 Wochen vorher. Führungen für Einzelpersonen kostenlos.
Verkehr: Alle S-Bahnen (Isartor), U1/U2 (Fraunhoferstraße), Tram 17/18.`,
    options: [
      "a) sind für Schulklassen gratis.",
      "b) sollten vorher telefonisch gemeldet werden.",
      "c) finden nicht nur auf Deutsch statt.",
    ],
    correctAnswer: "c) finden nicht nur auf Deutsch statt.",
    teil: 5,
  },
  {
    id: 28,
    type: "multiple-choice",
    question: "Wer Mitglied ist, ...",
    options: [
      "a) ist auf jeden Fall erwachsen.",
      "b) braucht keinen Eintritt zu bezahlen.",
      "c) darf nicht allein das Museum besuchen.",
    ],
    correctAnswer: "b) braucht keinen Eintritt zu bezahlen.",
    teil: 5,
  },
  {
    id: 29,
    type: "multiple-choice",
    question: "Im Museum kann man ...",
    options: [
      "a) als Behinderter alle Ausstellungen besichtigen.",
      "b) auch Bücher kaufen.",
      "c) nur warm essen.",
    ],
    correctAnswer: "b) auch Bücher kaufen.",
    teil: 5,
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Das Museum erreicht man ...",
    options: ["a) am besten mit dem Auto.", "b) mit dem Bus Linie 17.", "c) mit jeder S-Bahn."],
    correctAnswer: "c) mit jeder S-Bahn.",
    teil: 5,
  },
];

export const b1Lesen4: Question[] = assignTeile(
  [...lesen4Teil1, ...lesen4Teil2, ...lesen4Teil3, ...lesen4Teil4, ...lesen4Teil5],
  B1_LESEN_TEILE,
);
