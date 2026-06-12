import { assignTeile, B1_LESEN_TEILE } from "../lib/exam-structure.ts";
import type { Question } from "../model/types.ts";

const lesen1Teil1: Question[] = [
  {
    id: 0,
    type: "multiple-choice",
    question: "Clemens ist zwölf Jahre alt.",
    context: `Mein Name ist Clemens. Ich bin 12 Jahre alt und mein Vater ist Diplomat. Alle drei bis vier Jahre ziehen wir deshalb in ein anderes Land. Ich wurde in Deutschland geboren, aber schon als ich zwei Wochen alt war, bin ich mit meiner Mutter nach Beirut geflogen. Das ist die Hauptstadt des Libanon. Aus den ersten Jahren weiß ich nicht mehr viel.

Das erste Land, an das ich mich erinnere, ist Portugal. Wir hatten ein pinkfarbenes Haus mit einem großen Garten. Am Wochenende waren wir oft an einem wunderschönen Strand nördlich von Lissabon. Das Meer, eigentlich muss ich sagen „der Ozean“, war dort herrlich blau und ich habe sehr gern im Sand gespielt.

Englisch musste ich schon ganz früh lernen. Ich bin in Portugal in einen internationalen Kindergarten gegangen. Alle Kinder kamen dort aus anderen Ländern. Deshalb wurde Englisch gesprochen.

Als ich fünf Jahre alt war, sind wir dann nach Berlin gezogen. Am Anfang hat es mir dort gar nicht gefallen – einfach zu kalt, fand ich. Und kein Meer und keine großen schwarzen Oliven zum Frühstück. Aber dann gewöhnt man sich wieder an das Neue und plötzlich wurde Deutschland zu meiner Heimat. Ich dachte: Jetzt bleiben wir hier für immer. Falsch gedacht. Immerhin sieben Jahre sind wir in Berlin geblieben, dann mussten wir wieder die Koffer packen.

Seit einem halben Jahr lebe ich mit meiner Familie in New York. Jetzt bin ich froh darüber, dass ich Englisch sprechen kann. New York ist eine der aufregendsten Städte der Welt. Es ist in den meisten Dingen ganz anders als Berlin: In manche Stadtviertel gehen die Leute nur, um zu arbeiten, in anderen leben sie, und in manche gehen sie gar nicht – weil sie zu gefährlich sind.

Mittlerweile habe ich gemerkt, dass es einfach Zeit braucht, sich an ein neues Land zu gewöhnen. Irgendwann wird sich sicherlich auch New York für mich wie Heimat anfühlen. Manchmal denke ich, es wäre toll, immer nur an einem Ort zu leben. Doch wenn ich es mir recht überlege, ist es schon ziemlich aufregend, die Welt kennenzulernen.`,
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 1,
    type: "multiple-choice",
    question: "Clemens zieht mit seiner Familie oft in ein anderes Land um.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 2,
    type: "multiple-choice",
    question: "Clemens kann sich kaum noch an die Zeit im Libanon erinnern.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 3,
    type: "multiple-choice",
    question: "Clemens' Haus in Portugal lag am Meer.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 4,
    type: "multiple-choice",
    question: "Clemens besuchte einen englischsprachigen Kindergarten.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
  {
    id: 5,
    type: "multiple-choice",
    question: "In Berlin wohnte Clemens bis zu seinem siebten Lebensjahr.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Falsch",
  },
  {
    id: 6,
    type: "multiple-choice",
    question: "Clemens meint, es gibt große Unterschiede zwischen Berlin und New York.",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
  },
];

const lesen1Teil2: Question[] = [
  {
    id: 7,
    type: "multiple-choice",
    question: "Tongchun ...",
    context: `Ni Hao, Mama!
Wenn Tongchun Jiang von seiner „Mama“ schwärmt, denken die anderen Studenten manchmal, der Student rede von seiner Mutter in Shanghai. Dabei meint er Rita Jakobson aus Offenburg, bei der er jeden Sonntag auf dem Sofa sitzt und Sandkuchen isst.

Rita und Gerald Jakobson machen bei dem Projekt „Senioren für ausländische Studenten“ mit und sind so etwas wie Leiheltern – für Tongchun aus China und drei andere Gaststudenten.

Was die Jakobsons mit ihren Schützlingen machen, könnte man einen Crashkurs nennen – in der Kunst des schrecklich normalen deutschen Familienlebens. Sie unternehmen Wanderungen. Sie sitzen im Wohnzimmer und spielen Karten. Und sie fragen Tongchun alles, was Eltern studierende Kinder nun einmal fragen: Wie läuft es an der Uni? Was machen die Noten? „Wenn ich eine gute Note bekomme, rufe ich zuerst Mama an“, sagt Tongchun.

Für die Jakobsons ist der Informatikstudent aus Shanghai ein Sohn auf Zeit. „Als unsere eigenen Kinder aus dem Haus waren, wollten wir uns um andere kümmern. Dazu gehört alles, vom Wäschewaschen bis hin zum gemeinsamen Silvesterfeiern“, sagt Rita Jakobson.

Dass Offenburger Senioren auf Gaststudenten attraktiver wirken als Szenepartys in Berlin, zeigen die Statistiken. Am Anfang des Aufenthalts wollen nur 20 Prozent der Gaststudenten nach ihrem Abschluss in Deutschland bleiben. Am Ende sind es 80 Prozent. Das sagt alles.`,
    options: [
      "a) findet seine Mitstudenten in Shanghai sehr nett.",
      "b) reist jede Woche zu seiner Familie nach China.",
      "c) hat in Deutschland so etwas wie eine Ersatzfamilie gefunden.",
    ],
    correctAnswer: "c) hat in Deutschland so etwas wie eine Ersatzfamilie gefunden.",
  },
  {
    id: 8,
    type: "multiple-choice",
    question: "In diesem Projekt geht es darum, ...",
    options: [
      "a) dass Rentner für ausländische Studenten kochen.",
      "b) dass ältere Menschen ausländischen Studenten helfen, sich in Deutschland wohlzufühlen.",
      "c) dass ausländischen Studenten bei älteren Deutschen wohnen.",
    ],
    correctAnswer:
      "b) dass ältere Menschen ausländischen Studenten helfen, sich in Deutschland wohlzufühlen.",
  },
  {
    id: 9,
    type: "multiple-choice",
    question: "Rita Jakobson berichtet, ...",
    options: [
      "a) dass sie früher selbst im Ausland studiert hat.",
      "b) dass die ausländischen Studenten oft Probleme mit ihren Gasteltern haben.",
      "c) dass sie durch das Projekt selbst viel Neues kennenlernt.",
    ],
    correctAnswer: "c) dass sie durch das Projekt selbst viel Neues kennenlernt.",
  },
  {
    id: 10,
    type: "multiple-choice",
    question: "In diesem Text geht es darum, ...",
    context: `WebStamp: persönliche Briefmarken
Die Schweizerische Post bietet jetzt den WebStamp, der elektronischen Briefmarke, eine neue, kreative Idee. WebStamp bietet die Möglichkeit, direkt am PC eigene Briefmarken zu gestalten und auszudrucken. Besonders interessant ist diese innovative Online-Frankier-Lösung für Firmen, da Briefe und Mailings mit individuellen Marken auffallen und beim Empfänger für Interesse sorgen. So sendet man auf und mit der Briefmarke auch eine Mini-Reklame und bleibt den Kunden auf jeden Fall in Erinnerung.

Die Vorteile von WebStamp lassen sich ganz einfach nutzen. Nach der Anmeldung auf der Webseite der Schweizerischen Post kann’s losgehen mit dem Gestalten einer individuellen Briefmarke. Die Benutzung selbst ist kostenlos. Man bezahlt nur das Porto, also den Wert, den die Briefmarke dann hat. Eine 1-Franken-Briefmarke kostet demnach auch nur einen Franken. Diese neuartigen Briefmarken gelten sowohl im Inland als auch im Ausland.

Da das alles über Computerprogramme läuft, sind auch verschiedene Druckformate möglich, falls man beispielsweise die Empfängeradresse in die eigene WebStamp integrieren möchte. Adressen können direkt aus Excel importiert werden.

Genaue Informationen und Ideen zur Gestaltung erhält man in der Info-Broschüre der Schweizerischen Post unter www.post.ch/webstamp.`,
    options: [
      "a) wie die Schweizerische Post funktioniert.",
      "b) dass die Schweizerische Post eine neue Idee hatte.",
      "c) wie man Briefe schneller verschickt.",
    ],
    correctAnswer: "b) dass die Schweizerische Post eine neue Idee hatte.",
  },
  {
    id: 11,
    type: "multiple-choice",
    question: "Die WebStamp ...",
    options: [
      "a) kostet auf jeden Fall mehr als eine normale Briefmarke.",
      "b) kann man selbst am Computer machen.",
      "c) ist nur für Firmen interessant.",
    ],
    correctAnswer: "b) kann man selbst am Computer machen.",
  },
  {
    id: 12,
    type: "multiple-choice",
    question: "Die Adresse des Empfängers ...",
    options: [
      "a) kann direkt aus Excel übernommen werden.",
      "b) muss man immer von Hand auf den Brief schreiben.",
      "c) wird von einem extra Programm gedruckt.",
    ],
    correctAnswer: "a) kann direkt aus Excel übernommen werden.",
  },
];

const lesen1Teil3: Question[] = [
  {
    id: 0,
    type: "matching",
    question: "Herr Meyer möchte sich einen Hund kaufen. Er sucht ein Tier, das nicht zu groß ist.",
    context: `Lesen Sie die Situationen 13-19 und die Anzeigen a-j. Welche Anzeige passt zu welcher Situation?
Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie 0.

a) Dringend gesucht: Frauchen u./od. Herrchen, die armem, rotem Cockerspaniel (Rüde, kastriert, 5 1/2 J.) nach dem Tod seines Frauchens ein neues Zuhause (mit Garten) geben. Tel. 089/3095486

b) Eselfohlen Diana, braun, geboren 21.6. zu verkaufen. Fam. Diethelm, D-70307 Stuttgart, Tel. 0173/5087342

c) Arme Katze „Blacky“, 4j., überaus gutmütig, wurde von ihren Leuten bei der Übersiedlung einfach zurückgelassen! Wer nimmt sie liebevoll auf? Tel. 0 38 62/32 681

d) Gesucht wird der Graupapagei „Burli“, der am 1. Juni aus Wien 21. Bezirk entflogen ist! Er ist sehr zutraulich. Tel. 01/290 60 43. Bel. 2000,-

e) Graupapageienbabys, liebevoll v. Hd. aufgezogen zu verkaufen, Tel. 02166/930305

f) Nehme Ihren Hund / Ihre Katze während Ihres Urlaubs in Pflege! Tel. 08084/529763

g) für Ihr Tier! ARCHE NOAH - Die etwas „andere“ TIERKLINIK, 5020 Salzburg. Sie wollen Ihren Urlaub ohne Sorgen um das Haustier genießen? Wir versorgen Kleintiere liebevoll während dieser Zeit!

h) Nehme Ihren Hund in Pflege bei Urlaub oder am Tag. Nur Hunde, die für die Wohnung geeignet sind. Tel. 01 73-28 85 11 99

i) Nehme/Suche gebrauchtes oder neues Aquarium kostenlos, 30 l – 320 l mit Zubehör ☎ 07631 / 18357

j) 05.03. Fisch- & Korallentag, 11–16 Uhr Schauaquarium Mundenhof. Verkauf von Fischen, Pflanzen, Garnelen, Korallen- ablekern, Makroalgen u. Zubehör`,
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "a",
  },
  {
    id: 13,
    type: "matching",
    question:
      "13. Susanne möchte im Urlaub verreisen und weiß nicht, wer in dieser Zeit auf ihre kleine, weiße Maus aufpassen kann.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "g",
  },
  {
    id: 14,
    type: "matching",
    question:
      "14. Thomas ist Single und hält sich einen Dackel. Die Nachbarn haben sich beschwert, weil der Hund in der Wohnung laut wird, wenn Thomas tagsüber im Büro ist. Er möchte das Problem lösen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "h",
  },
  {
    id: 15,
    type: "matching",
    question:
      "15. Die Familie Schmidt hat einen großen Garten und eine Bernhardiner-Hündin. Damit ihr Haustier nicht allein ist, wären sie bereit, einen zweiten Hund aufzunehmen. Er soll aber nicht so groß sein.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "a",
  },
  {
    id: 16,
    type: "matching",
    question:
      "16. Herr Albrecht muss aus beruflichen Gründen umziehen und kann seinen Hund nicht mitnehmen. Er sucht ein neues Zuhause für ihn.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "0",
  },
  {
    id: 17,
    type: "matching",
    question: "17. Eva möchte für ihr neues, großes Aquarium noch einige Fische kaufen.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "j",
  },
  {
    id: 18,
    type: "matching",
    question:
      "18. Karl will sich eine Katze anschaffen. Er mag diese Tiere, weil sie nicht viel Pflege brauchen und sehr selbstständig sind.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "c",
  },
  {
    id: 19,
    type: "matching",
    question: "19. Frau Bach mag Vögel, sie sucht zurzeit einen Papagei.",
    options: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "0"],
    correctAnswer: "e",
  },
];

const lesen1Teil4: Question[] = [
  {
    id: 0,
    type: "multiple-choice",
    question: "Henriette",
    context: `In einer Online-Zeitung lesen Sie Kommentare zu einem Artikel über Kettenmails.
Würde die Person bei einer Kettenmail mitmachen?

Beispiel (Henriette, 24, Magdeburg): Wenn du eine Mail geschickt bekommst, in der du aufgefordert wirst, sie an alle Freunde weiterzuschicken – dann lass es bleiben. Du machst dich nur unbeliebt. Denn bei solchen Kettenmails handelt es sich fast immer um blöde Späße. Oft haben diese Mails sogar Viren und machen etwas am PC kaputt. (Nein)

Alexandra, 28, Ludwigshafen: Kettenmails sind für mich einfach ein Teil der Kommunikation mit anderen. Mir ist es noch nie passiert, dass eine Kettenmail etwas kaputt gemacht hat. Ich mache auch nicht immer, was da steht, z.B. an mindestens 10 Personen schicken oder so. Ich sehe das einfach als einen Teil meiner Kommunikation und wenn die Mail lustig oder interessant ist, schicke ich sie auch weiter. Ich sehe keinen Grund, der dagegen spricht.

Nils, 41, Hamburg: Wenn ich etwas bekomme, das auch nur entfernt an eine Kettenmail erinnert, lösche ich es sofort. Da kann man sich nie sicher sein, ob da nicht irgendeine Werbefirma dahinter steht und auf diese Weise versucht, möglichst viele E-Mail-Adressen zu sammeln. Die Adressen können dann für Werbe-Mails oder Spams benutzt werden. Dann wird man nachher nur mit Werbung bombardiert.

Stefan, 30, Freistadt: Die Frage ist immer, was da eigentlich drin steht. Wenn es ein Aufruf in der Not ist, z.B. um Blut zu spenden, würde ich es auf jeden Fall einmal nachprüfen. Bei diesen Mails müsste dann auch stehen, wo man sich telefonisch erkundigen kann. Da ruft man an und informiert sich. Ich mache also immer erstmal eine Mail auf. Aber ehrlich gesagt würde ich sie nicht weiterschicken, denn vielleicht ärgert man die anderen damit nur.

Charlotte, 48, Göttingen: Vor ein paar Tagen habe ich mal so eine Mail bekommen. Es ging um Rezepte. Ich sollte ein Rezept an jemanden schicken und dann die Mail an zehn Freunde. Vorher habe ich einen Namen von der Liste der Mitspielenden gestrichen und mich selbst dazu geschrieben. Nun werde ich ganz viele Rezepte von mir Unbekannten erhalten. Zwei Rezepte habe ich schon und ich freue mich auf die nächsten.

Victor, 26, Zürich: Die E-Mail ist nicht für Spiele erfunden worden, sondern um die Kommunikation zu erleichtern. Deshalb kann ich nicht verstehen, dass es Leute gibt, die bei einer Kettenmail mitmachen. So eine Zeitverschwendung! Da könnte man doch etwas Besseres mit dem Computer anfangen, zum Beispiel häufiger an Freunde schreiben.

Wiebke, 18, Gelsenkirchen: Ich freue mich immer über Post, egal ob nur an mich oder an viele, ob zum Weiterschicken oder nicht. Allgemein bin ich der Meinung, dass man Wichtiges und Interessantes grundsätzlich immer an alle weiterleiten muss. Das ist doch das Gute am Internet und das gilt auch für Kettenmails.

Katta, 34, Wien: Das schrecklichste sind diese Kettenmails, in denen steht, dass man ganz viel Unglück haben wird, wenn man nicht sofort alles an 10 Freunde weiterschickt. Nein, so einen Psychoterror kann ich nicht unterstützen! Mir hat das alle Kettenmails vergrault, ich will bei keiner mehr mitmachen.`,
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 20,
    type: "multiple-choice",
    question: "Alexandra",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 21,
    type: "multiple-choice",
    question: "Nils",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 22,
    type: "multiple-choice",
    question: "Wiebke",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 23,
    type: "multiple-choice",
    question: "Stefan",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 24,
    type: "multiple-choice",
    question: "Charlotte",
    options: ["Ja", "Nein"],
    correctAnswer: "Ja",
  },
  {
    id: 25,
    type: "multiple-choice",
    question: "Victor",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
  {
    id: 26,
    type: "multiple-choice",
    question: "Katta",
    options: ["Ja", "Nein"],
    correctAnswer: "Nein",
  },
];

const lesen1Teil5: Question[] = [
  {
    id: 27,
    type: "multiple-choice",
    question: "Führungen ...",
    context: `Deutsches Museum
Öffnungszeiten: Geöffnet täglich 9.00 bis 17.00 Uhr; Einlass bis 16.00 Uhr.
Eintrittspreise: Erwachsene 8,50 €, Ermäßigt 7,00 €, Schüler und Studenten 3,00 €. Planetarium zusätzlich 2,00 €. Eintritt für Mitglieder und Kinder unter 6 Jahren frei.

Werden Sie Mitglied! Mit einem Jahresbeitrag von 52,- € können Sie mit einer Begleitperson und zwei Kindern (oder allen eigenen Kindern) unter 16 Jahren jederzeit das Deutsche Museum besuchen.

Führungen: Schulklassenführungen, Übersichtsführungen, Fachführungen in Deutsch und Fremdsprachen. Anmeldung schriftlich bitte sechs Wochen vorher. Führungen und Vorführungen für Einzelpersonen und Familien sind kostenlos (außer Planetarium und Übersichtsführung).

Behindertengerechter Zugang: Rollstuhlfahrer können fast alle Ausstellungen über Rampen und Aufzüge erreichen. Das Personal hilft Ihnen gerne.

Gastronomie: Restaurant (1. OG), Cafeteria (EG, Verzehr von Mitgebrachtem möglich).
Museum Shop: Großer Sortiment an technik- und wissenschaftsgeschichtlicher Literatur.`,
    options: [
      "a) sind für Schulklassen gratis.",
      "b) sollten vorher telefonisch gemeldet werden.",
      "c) finden nicht nur auf Deutsch statt.",
    ],
    correctAnswer: "c) finden nicht nur auf Deutsch statt.",
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
  },
  {
    id: 30,
    type: "multiple-choice",
    question: "Das Museum erreicht man ...",
    options: ["a) am besten mit dem Auto.", "b) mit dem Bus Linie 17.", "c) mit der S-Bahn."],
    correctAnswer: "c) mit der S-Bahn.",
  },
];

export const b1Lesen1: Question[] = assignTeile(
  [...lesen1Teil1, ...lesen1Teil2, ...lesen1Teil3, ...lesen1Teil4, ...lesen1Teil5],
  B1_LESEN_TEILE,
);
