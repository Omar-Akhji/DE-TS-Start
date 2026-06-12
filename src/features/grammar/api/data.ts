import type { GrammarSection, GrammarTopic } from "../model/types.ts";

// Verben Section
const verbenGradients = [
  "linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)",
  "linear-gradient(135deg, #f8835f 0%, #e67e22 100%)",
  "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
  "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
  "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
  "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
];

const verbenTopics: GrammarTopic[] = [
  {
    id: "grundverben",
    number: "1",
    title: "Grundverben",
    category: "Verben",
    description: "Die wichtigsten Hilfs- und Modalverben im Deutschen",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "haben-sein-werden-gebrauch",
        number: "1.1",
        title: "haben – sein – werden (Gebrauch)",
        description: "Verwendung als Vollverb und Hilfsverb",
        content: [
          {
            title: "Als Vollverb",
            items: [
              "**haben**: etw. besitzen, etw. fühlen (Wir haben ein Ferienhaus in den Bergen. Können wir essen? Ich habe so großen Hunger!)",
              "**sein**: Zustand (Es ist kalt. Ich bin Arzt.)",
              "**werden**: Veränderung (Ich möchte Tierärztin werden. Kannst du bitte das Fenster schließen? Es wird kalt.)",
            ],
          },
          {
            title: "Als Hilfsverb",
            items: [
              "**haben + Partizip Perfekt**: Perfekt (Er hat lange im Ausland gearbeitet.)",
              "**sein + Partizip Perfekt**: Perfekt (Ich bin letzten Sommer nach Italien gefahren.)",
              "**werden + Infinitiv**: Futur („Jetzt warte ich schon eine halbe Stunde!“ „Er wird sicher gleich kommen.“)",
              "**werden + Partizip Perfekt**: Passiv („Was wird denn hier gebaut?“ „Eine neue Straße, glaube ich.“)",
              "**werden (Konj. II) + Infinitiv**: Konjunktiv II (Hans würde gerne Medizin studieren, aber leider sind seine Noten nicht gut genug.)",
            ],
          },
        ],
      },
      {
        id: "haben-sein-werden-konjugation",
        number: "1.2",
        title: "haben – sein – werden (Konjugation)",
        description: "Formen in Präsens, Präteritum, Perfekt und Plusquamperfekt",
        hasTable: true,
        tableData: {
          caption: "Präsens / Präteritum",
          headers: ["Person", "haben (Präs/Prät)", "sein (Präs/Prät)", "werden (Präs/Prät)"],
          rows: [
            ["ich", "habe / hatte", "bin / war", "werde / wurde"],
            ["du", "hast / hattest", "bist / warst", "wirst / wurdest"],
            ["er/sie/es", "hat / hatte", "ist / war", "wird / wurde"],
            ["wir", "haben / hatten", "sind / waren", "werden / wurden"],
            ["ihr", "habt / hattet", "seid / wart", "werdet / wurdet"],
            ["sie/Sie", "haben / hatten", "sind / waren", "werden / wurden"],
          ],
        },
        content: [
          {
            title: "Perfekt",
            items: [
              "**haben**: habe gehabt (stilistisch besser: hatte)",
              "**sein**: bin gewesen (stilistisch besser: war)",
              "**werden**: bin geworden",
            ],
          },
          {
            title: "Plusquamperfekt",
            items: ["**haben**: hatte gehabt", "**sein**: war gewesen", "**werden**: war geworden"],
          },
        ],
      },
      {
        id: "modalverben-gebrauch",
        number: "1.3",
        title: "Modalverben",
        description: "Bedeutung und Verwendung der Modalverben",
        content: [
          {
            title: "können",
            items: [
              "**Fähigkeit**: Könnt ihr Tennis spielen?",
              "**Möglichkeit**: Wo kann man hier die Eintrittskarten kaufen?",
              "**Erlaubnis**: Sie können gern an meinem PC arbeiten.",
              "**Bitte**: Könnten Sie mir bitte kurz helfen?",
            ],
          },
          {
            title: "dürfen",
            items: [
              "**Erlaubnis**: Darf man hier parken?",
              "**Verbot**: Sie dürfen hier nicht rauchen.",
              "**höfliche Bitte**: Dürfte ich Sie um einen Gefallen bitten?",
            ],
          },
          {
            title: "müssen",
            items: [
              "**Pflicht, Auftrag, Befehl**: Sie müssen hier bitte noch unterschreiben.",
              "**innere Verpflichtung**: Ich muss am Wochenende für meine Prüfung lernen.",
            ],
          },
          {
            title: "sollen",
            items: [
              "**Rat, Empfehlung**: Monika hat gesagt, dass wir in Berlin unbedingt ins Historische Museum gehen sollen.",
              "**Rat, Empfehlung (höflich)**: Die Ärztin hat gesagt, ich sollte (Konj. II) weniger Fleisch essen.",
              "**Bitte, Erwartung an jemanden**: Sie sollen bitte Frau Dr. Berger zurückrufen.",
            ],
          },
          {
            title: "wollen",
            items: [
              "**fester Plan, Absicht, Ziel**: Wir wollen an Silvester nach Lissabon fahren.",
            ],
          },
          {
            title: "mögen (Konj. II: möcht-)",
            items: [
              "**Wunsch**: Ich möchte bitte einen Orangensaft und eine Pizza.",
              "**Plan, Absicht**: Ich möchte im Januar noch einen Deutschkurs machen. Gestern wollte ich nicht ins Kino gehen, weil ich zu müde war.",
              "**als Vollverb**: Ich mag Juliane sehr gern. Grünen Tee mag ich nicht so gern.",
            ],
          },
        ],
        tips: [
          "Hier steht **können** häufig allein: Kannst du Italienisch? Kannst du Judo?",
          "**(nicht) dürfen** = bezieht sich meist auf eine hierarchische Ordnung; eine Person (Eltern, Chef ...) oder ein Gesetz erlaubt oder verbietet etwas",
          "**nicht müssen** = nicht brauchen zu (Vielen Dank, aber Sie brauchen mir nicht zu helfen.)",
          "Präteritum von **möcht-** wird mit **wollen** gebildet (wollte).",
        ],
      },
      {
        id: "modalverben-konjugation",
        number: "1.4",
        title: "Modalverben (Konjugation)",
        description: "Präsens und Präteritum der Modalverben",
        hasTable: true,
        tableData: {
          caption: "Präsens der Modalverben",
          headers: ["Person", "können", "dürfen", "müssen", "sollen", "wollen", "möchten", "mögen"],
          rows: [
            ["ich", "kann", "darf", "muss", "soll", "will", "möchte", "mag"],
            ["du", "kannst", "darfst", "musst", "sollst", "willst", "möchtest", "magst"],
            ["er/sie/es", "kann", "darf", "muss", "soll", "will", "möchte", "mag"],
            ["wir", "können", "dürfen", "müssen", "sollen", "wollen", "möchten", "mögen"],
            ["ihr", "könnt", "dürft", "müsst", "sollt", "wollt", "möchtet", "mögt"],
            ["sie/Sie", "können", "dürfen", "müssen", "sollen", "wollen", "möchten", "mögen"],
          ],
        },
        tips: [
          "Die Endungen der Modalverben im Präteritum sind identisch mit den Endungen der regelmäßigen Verben im Präteritum (-te, -test, -te, -ten, -tet, -ten).",
          "Das Perfekt der Modalverben wird nur selten gebraucht. Hier ist das Präteritum stilistisch besser (Ich musste um 23 Uhr nach Hause fahren).",
          "Das Plusquamperfekt der Modalverben ist heutzutage ungebräuchlich.",
        ],
      },
    ],
  },
  {
    id: "tempora",
    number: "2",
    title: "Tempora",
    category: "Verben",
    description: "Alle Zeitformen im Deutschen",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "praesens",
        number: "2.1",
        title: "Präsens",
        description: "Gebrauch und Formen",
        content: [
          {
            title: "Gebrauch",
            items: [
              "**Gegenwart**: „Was macht ihr denn da?“ „Wir kochen.“",
              "**zeitlos gültige Aussage**: Berlin ist die größte Stadt Deutschlands.",
              "**Zukunft (Präsens + Zeitangabe)**: Morgen fahren wir nach Heidelberg.",
            ],
          },
          {
            title: "Besonderheiten",
            items: [
              "Verben mit **-t** oder **-d** am Ende des Stammes haben ein extra **-e-**: du arbeitest, er arbeitet.",
              "Bei Verben mit **-s, -ß, -z** fällt das **-s-** der Endung in der 2. Person Singular weg: du heißt.",
              "Bei starken Verben mit **Vokalwechsel** ändert sich der Vokal in der 2. und 3. Person Singular (z.B. geben -> du gibst, schlafen -> du schläfst).",
            ],
          },
        ],
        hasTable: true,
        tableData: {
          caption: "Regelmäßige Verbendungen im Präsens",
          headers: ["Pronomen", "Endung", "Beispiel (fragen)"],
          rows: [
            ["ich", "-e", "frage"],
            ["du", "-st", "fragst"],
            ["er/sie/es", "-t", "fragt"],
            ["wir", "-en", "fragen"],
            ["ihr", "-t", "fragt"],
            ["sie/Sie", "-en", "fragen"],
          ],
        },
      },
      {
        id: "perfekt",
        number: "2.2",
        title: "Perfekt",
        description: "Vergangenheit im Gespräch oder in Dialogen",
        content: [
          {
            title: "Verwendung mit haben (haben + Partizip Perfekt)",
            items: [
              "Die meisten Verben (Ich habe keinen Parkplatz gefunden.)",
              "Alle reflexiven Verben (Wir haben uns noch nicht entschieden.)",
            ],
          },
          {
            title: "Verwendung mit sein (sein + Partizip Perfekt)",
            items: [
              "Intransitive Verben der **Ortsveränderung**: gehen, ankommen, abfahren, fliegen (Wir sind in die Berge gefahren.)",
              "Intransitive Verben der **Zustandsveränderung**: einschlafen, wachsen, werden, aufstehen (Ich bin aufgewacht.)",
              "**bleiben**, **sein** (Ich bin zu Hause geblieben. Meine Nachbarin ist bei mir gewesen.)",
            ],
          },
          {
            title: "Partizip Perfekt Bildung",
            items: [
              "**Regelmäßige Verben**: ge- + Stamm + -t (gekauft, zugemacht)",
              "**Unregelmäßige Verben**: ge- + Stamm + -en (gegangen, abgefahren)",
              "**Mischverben**: ge- + Stamm + -t (gedacht, gebracht, gewusst)",
            ],
          },
        ],
        tips: [
          "Verben mit **be-, emp-, ent-, er-, ge-, miss-, ver-, zer-** sowie Verben auf **-ieren** bilden das Partizip Perfekt ohne -ge- (verkauft, studiert, verglichen).",
        ],
      },
      {
        id: "praeteritum",
        number: "2.3",
        title: "Präteritum",
        description: "Vergangenheit in schriftlichen und mündlichen Berichten",
        content: [
          {
            title: "Gebrauch",
            items: [
              "in schriftlichen Berichten oder Erzählungen (Die Bundeskanzlerin eröffnete die Ausstellung...)",
              "oft in mündlichen, sachlichen Berichten oder Monologen",
              "immer bei **Modalverben** (Ich musste länger im Büro bleiben.)",
              "bei **sein** und **haben** (Ich hatte am Samstag leider keine Zeit.)",
            ],
          },
          {
            title: "Besonderheiten der Bildung",
            items: [
              "Verben mit **-t** oder **-d** am Ende des Stammes haben ein extra **-e-**: Ich wartete, du wartetest.",
            ],
          },
        ],
        hasTable: true,
        tableData: {
          caption: "Regelmäßige & Unregelmäßige Verben im Präteritum",
          headers: ["Pronomen", "Endung (sagen)", "Endung (gehen)"],
          rows: [
            ["ich", "-t-e (sagte)", "- (ging)"],
            ["du", "-t-est (sagtest)", "-st (gingst)"],
            ["er/sie/es", "-t-e (sagte)", "- (ging)"],
            ["wir", "-t-en (sagten)", "-en (gingen)"],
            ["ihr", "-t-et (sagtet)", "-t (gingt)"],
            ["sie/Sie", "-t-en (sagten)", "-en (gingen)"],
          ],
        },
      },
      {
        id: "plusquamperfekt",
        number: "2.4",
        title: "Plusquamperfekt",
        description: "Vorvergangenheit",
        content: [
          {
            title: "Gebrauch",
            items: [
              "Die Handlung im Plusquamperfekt passiert **vor** einer anderen Handlung in der Vergangenheit (meist Präteritum oder Perfekt).",
              "Beispiel: **Nachdem er den Zug verpasst hatte**, fuhr er ins Hotel zurück.",
            ],
          },
          {
            title: "Formen",
            items: [
              "Präteritum von **haben** oder **sein** + Partizip Perfekt",
              "Beispiel: ich hatte gesprochen / ich war gefahren",
            ],
          },
        ],
        tips: [
          "In der gesprochenen Sprache wird statt Präteritum oft Perfekt für die später passierte Handlung verwendet.",
        ],
      },
      {
        id: "zukunft",
        number: "2.5",
        title: "Zukunft",
        description: "Zukunftsformen: Präsens und Futur I",
        content: [
          {
            title: "Präsens als Zukunft",
            items: [
              "**Präsens + Zeitangabe**: (Gehen wir morgen Abend ins Kino? -> Morgen Abend besuche ich meine Eltern.)",
            ],
          },
          {
            title: "Futur I Gebrauch",
            items: [
              "**Versprechen, Absicht, Plan**: (Ich werde dich bestimmt besuchen!)",
              "**Vermutung**: (Er wird wohl krank sein.)",
            ],
          },
          {
            title: "Futur I Formen",
            items: [
              "werden + Infinitiv am Satzende",
              "Beispiel: ich **werde** besuchen, du **wirst** besuchen, es **wird** besuchen",
            ],
          },
        ],
      },
    ],
    tips: [
      "Im **gesprochenen** Deutsch benutzt man meist das **Perfekt** für die Vergangenheit, im **geschriebenen** Deutsch das **Präteritum**.",
      "Zukunft wird im Deutschen sehr oft einfach mit **Präsens + Zeitangabe** ausgedrückt (Morgen fahre ich nach Berlin).",
    ],
  },
  {
    id: "reflexive",
    number: "3",
    title: "Reflexive Verben",
    category: "Verben",
    description: "Verben mit Reflexivpronomen: Gebrauch und Formen",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "reflexive-gebrauch",
        number: "3.1",
        title: "Gebrauch",
        description: "Wann und wie man reflexive Verben verwendet",
        content: [
          {
            title: "Regeln",
            items: [
              "**Immer reflexiv**: sich ausruhen, sich beeilen, sich erholen, sich verlieben",
              "**Reflexiv und nicht-reflexiv**: waschen (Julia wäscht sich / Julia wäscht ihren Pullover)",
              "**Reziprok**: sich lieben, sich streiten (Susanne und Johannes lieben sich)",
              "**Reziprok mit -einander**: miteinander sprechen, voneinander hören",
            ],
          },
        ],
      },
      {
        id: "reflexive-position",
        number: "3.2",
        title: "Satzposition",
        description: "Stellung des Reflexivpronomens im Satz",
        content: [
          {
            title: "Hierarchien",
            items: [
              "**Hauptsatz**: nach dem Verb oder nach Personalpronomen im Nominativ (Wir müssen uns jetzt beeilen! / Jetzt müssen wir uns beeilen!)",
              "**Nebensatz**: nach dem Konnektor oder nach Personalpronomen im Nominativ (Ich weiß, dass sich die Kinder beeilen / ... dass wir uns beeilen)",
              "**Infinitivsatz**: 1. Position (Es ist schwierig, sich um so viele Leute kümmern zu müssen.)",
            ],
          },
        ],
      },
      {
        id: "reflexive-pronomen",
        number: "3.3",
        title: "Reflexivpronomen",
        description: "Deklination im Akkusativ und Dativ",
        hasTable: true,
        tableData: {
          headers: ["Pronomen", "Akkusativ", "Dativ"],
          rows: [
            ["ich", "mich", "mir"],
            ["du", "dich", "dir"],
            ["er/sie/es", "sich", "sich"],
            ["wir", "uns", "uns"],
            ["ihr", "euch", "euch"],
            ["sie/Sie", "sich", "sich"],
          ],
        },
      },
    ],
    tips: [
      "Das Reflexivpronomen ist identisch mit dem Personalpronomen – Ausnahme ist die 3. Person: sich.",
      "Wenn es nur eine Ergänzung gibt, steht das Reflexivpronomen im Akkusativ: Ich wasche **mich**.",
      "Wenn das Verb eine Ergänzung im Akkusativ hat, steht das Reflexivpronomen im Dativ: Ich wasche **mir** die Hände.",
    ],
  },
  {
    id: "trennbar",
    number: "4",
    title: "Trennbare und untrennbare Verben",
    category: "Verben",
    description: "Präfixe und ihre Regeln",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "trennbar-praefixe",
        number: "4.1",
        title: "Trennbare Präfixe",
        description: "Verben, die im Hauptsatz getrennt werden",
        content: [
          {
            title: "Häufige Präfixe",
            items: [
              "**ab-, an-, auf-, aus-, bei-, ein-, fest-, her-, hin-, los-, mit-, nach-, vor-, weg-, weiter-, zu-, zurück-, zusammen-**",
              "Verben werden im Hauptsatz getrennt: Ich nehme Ihr Angebot an.",
            ],
          },
        ],
      },
      {
        id: "untrennbar-praefixe",
        number: "4.2",
        title: "Untrennbare Präfixe",
        description: "Verben, die immer zusammenbleiben",
        content: [
          {
            title: "Häufige Präfixe",
            items: [
              "**be-, emp-, ent-, er-, ge-, miss-, ver-, zer-**",
              "Verben bleiben immer zusammen: Nächstes Jahr übernimmt mein Mann die Firma.",
            ],
          },
        ],
      },
      {
        id: "besonder-praefixe",
        number: "4.3",
        title: "Besondere Präfixe",
        description: "Präfixe, die trennbar oder untrennbar sein können",
        content: [
          {
            title: "Regeln",
            items: [
              "Einige Präfixe können beides sein (z.B. um-, über-, unter-, durch-)",
              "**Konkrete Bedeutung (trennbar)**: Wir steigen in Stuttgart um.",
              "**Abstrakte Bedeutung (untrennbar)**: Ich überlege mir das bis morgen.",
            ],
          },
        ],
      },
      {
        id: "wichtige-verben-ab1",
        number: "4.4",
        title: "Wichtige Verben für A1-B1",
        description: "Häufig verwendete Verben mit Präfixen",
        content: [
          {
            title: "Beispiele",
            items: [
              "**Trennbar (um-)**: umsteigen, umziehen, umtauschen",
              "**Untrennbar (unter-)**: untersuchen, unterrichten, unterschreiben, unterstützen, unterscheiden",
              "**Untrennbar (über-)**: überlegen, übernehmen, überreden, überzeugen, überweisen, überholen, übernachten, überraschen, übersetzen",
            ],
          },
        ],
      },
    ],
    tips: [
      "Trennbare Präfixe sind immer **betont** (ANrufen), untrennbare Präfixe sind **unbetont** (verSTEHen).",
      "Im Nebensatz werden trennbare Verben **nicht getrennt**: Ich weiß, dass er morgen **ankommt**.",
    ],
  },
  {
    id: "verb-praepositionen",
    number: "5",
    title: "Verben mit Präpositionen",
    category: "Verben",
    description: "Feste Verb-Präposition-Verbindungen und Fragestellung",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "verb-praep-gebrauch",
        number: "5.1",
        title: "Gebrauch",
        description: "Wie man Verben mit Präpositionen verbindet",
        content: [
          {
            title: "Regeln",
            items: [
              "**Präposition + Nomen/Pronomen**: Ich warte auf Susanne. Ich warte seit 20 Minuten auf sie.",
              "**Frage nach Sache**: wo(r)- + Präposition (Worüber ärgerst du dich?)",
              "**Frage nach Person**: Präposition + wen/wem (Auf wen wartest du?)",
              "**Verweis (da(r)- + Präposition)**: Ich habe mich sehr darüber gefreut. Ich freue mich schon darauf, dass meine Schwester kommt.",
            ],
          },
        ],
      },
      {
        id: "verb-praep-kasus",
        number: "5.2",
        title: "Kasus-Regeln",
        description: "Welchen Kasus die jeweiligen Präpositionen verlangen",
        content: [
          {
            title: "Kategorien",
            items: [
              "**Präpositionen + Dativ**: aus, bei, mit, nach, seit, von, zu (sprechen mit + Dat)",
              "**Präpositionen + Akkusativ**: durch, für, gegen, ohne, um (sich kümmern um + Akk)",
              "**Wechselpräpositionen**: in, an, auf, unter, über, vor, hinter, neben, zwischen (teilnehmen an + Dat / sich erinnern an + Akk)",
            ],
          },
        ],
      },
    ],
    tips: [
      "Beginnt die Präposition mit einem Vokal, wird ein -r- eingefügt: wo**r**-über, da**r**-auf.",
      "Bei Wechselpräpositionen muss der Kasus bei Verben mit Präpositionen mitgelernt werden. Die meisten stehen mit Akkusativ.",
    ],
  },
  {
    id: "infinitiv",
    number: "6",
    title: "Infinitiv mit und ohne zu",
    category: "Verben",
    description: "Wann verwendet man „zu“ vor dem Infinitiv?",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "inf-mit-zu",
        number: "6.1",
        title: "Infinitiv mit zu",
        description: "Wann „zu“ obligatorisch ist",
        content: [
          {
            title: "Regeln",
            items: [
              "**Nomen + haben**: (Angst/Zeit/Lust haben) Ich habe Angst zu gehen.",
              "**Es ist ... + Adjektiv**: Es ist wichtig, sich gesund zu ernähren.",
              "**Verben der Hoffnung/Bitte**: Ich hoffe, ihn bald wieder zu sehen.",
            ],
          },
        ],
      },
      {
        id: "inf-ohne-zu",
        number: "6.2",
        title: "Infinitiv ohne zu",
        description: "Ausnahmen ohne „zu“",
        content: [
          {
            title: "Regeln",
            items: [
              "**Futur I**: Ich werde dich besuchen.",
              "**Konjunktiv II (würde)**: Ich würde jetzt gern spielen.",
              "**Modalverben**: Ich möchte nichts essen.",
              "**Spezielle Verben**: lassen, hören, sehen, bleiben, gehen, helfen, lernen (Ich sehe ihn kommen. Bleiben Sie sitzen!)",
            ],
          },
        ],
      },
      {
        id: "inf-absicht",
        number: "6.3",
        title: "Absichtssätze (Infinitiv mit zu)",
        description: "Spezielle Satzkonstruktionen",
        content: [
          {
            title: "Regeln",
            items: [
              "**um ... zu**: Ziel/Zweck (Ich lerne Deutsch, um in Deutschland zu arbeiten).",
              "**ohne ... zu**: Fehlende Begleitumstände (Er geht weg, ohne ein Wort zu sagen).",
              "**statt ... zu**: Alternative (Er sieht fern, statt zu lernen).",
            ],
          },
        ],
      },
    ],
    tips: [
      "Wenn das Subjekt in Hauptsatz and Nebensatz gleich ist, ist ein Infinitivsatz meist stilistisch besser als ein dass-Satz.",
    ],
  },
  {
    id: "imperativ",
    number: "7",
    title: "Imperativ",
    category: "Verben",
    description: "Befehlsform für Aufforderungen und Bitten",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "imp-gebrauch",
        number: "7.1",
        title: "Gebrauch",
        description: "Wann man den Imperativ verwendet",
        content: [
          {
            title: "Regeln",
            items: [
              "**Aufforderung**: Beeil dich bitte!",
              "**Bitte**: Legen Sie die Schlüssel bitte dorthin.",
              "**Befehl**: Geht schneller!",
            ],
          },
        ],
      },
      {
        id: "imp-formen",
        number: "7.2",
        title: "Imperativ-Formen",
        description: "Konjugation für du, ihr und Sie",
        hasTable: true,
        tableData: {
          headers: ["Form", "gehen", "essen", "sein"],
          rows: [
            ["du", "Geh!", "Iss!", "Sei!"],
            ["ihr", "Geht!", "Esst!", "Seid!"],
            ["Sie", "Gehen Sie!", "Essen Sie!", "Seien Sie!"],
          ],
        },
      },
    ],
    tips: [
      "Bei Verben mit Umlaut **ä** in der 2. Person Singular fällt dieser im Imperativ weg: du läufst -> Lauf!",
      "Verben auf **-eln, -ern** behalten das **-e-**: Klingle zweimal!",
    ],
  },
  {
    id: "konjunktiv",
    number: "8",
    title: "Konjunktiv II",
    category: "Verben",
    description: "Wünsche, Höflichkeit und irreale Bedingungen",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "konj2-gebrauch",
        number: "8.1",
        title: "Gebrauch",
        description: "Wann man den Konjunktiv II verwendet",
        content: [
          {
            title: "Regeln",
            items: [
              "**Höflichkeit**: Würden Sie mir bitte ein Wasser bringen?",
              "**Wunsch**: Wenn ich doch im Garten liegen könnte!",
              "**Ratschlag**: An deiner Stelle würde ich nicht so viel Kaffee trinken.",
              "**Vergleich (als ob)**: Er sieht aus, als ob er traurig wäre.",
            ],
          },
        ],
      },
      {
        id: "konj2-gegenwart",
        number: "8.2",
        title: "Gegenwart (Präsens)",
        description: "Formen in der Gegenwart",
        content: [
          {
            title: "Regeln",
            items: [
              "**würde + Infinitiv**: Ich würde gern nach Hause fahren.",
              "**Besonders häufige Formen**: wäre (sein), hätte (haben), könnte (können), müsste (müssen), sollte (sollen), wollte (wollen), möchte (mögen).",
            ],
          },
        ],
      },
      {
        id: "konj2-vergangen",
        number: "8.3",
        title: "Vergangenheit (Plusquamperfekt)",
        description: "Irreale Bedingungen in der Vergangenheit",
        content: [
          {
            title: "Regeln",
            items: [
              "**hätte / wäre + Partizip II**: Ich wäre gern mitgekommen. (Irrealer Wunsch)",
              "**Irrealer Bedingungssatz**: Wenn ich Zeit gehabt hätte, wäre ich gekommen.",
              "**Mit Modalverben**: hätte + Infinitiv + Infinitiv (Du hättest mich fragen können.)",
            ],
          },
        ],
      },
    ],
    tips: [
      "**wollen** und **sollen** haben keinen Umlaut im Konjunktiv II.",
      "Für alle Vergangenheitsformen (Perfekt, Präteritum, Plusquamperfekt) gibt es im Konjunktiv II nur eine Form: **hätte / wäre + Partizip II**.",
    ],
  },
  {
    id: "passiv",
    number: "9",
    title: "Passiv (Vorgangs- & Zustandspassiv)",
    category: "Verben",
    description: "Wenn die Handlung wichtiger ist als der Täter",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "passiv-vorgang",
        number: "9.1",
        title: "Vorgangspassiv",
        description: "Wenn etwas passiert",
        content: [
          {
            title: "Formen",
            items: [
              "**Präsens**: Die Tür **wird** geschlossen.",
              "**Präteritum**: Die Tür **wurde** geschlossen.",
              "**Perfekt**: Die Tür **ist** geschlossen **worden**.",
              "**Modalverben**: Das Haus **muss** renoviert **werden**.",
            ],
          },
        ],
      },
      {
        id: "passiv-zustand",
        number: "9.2",
        title: "Zustandspassiv",
        description: "Das Resultat einer Handlung",
        content: [
          {
            title: "Regeln",
            items: [
              "**Form**: sein + Partizip II",
              "**Bedeutung**: Drückt den Zustand nach einer Handlung aus.",
              "**Beispiel**: Die Tür **ist** geschlossen. (Zustand) vs. Die Tür wird geschlossen. (Vorgang)",
            ],
          },
        ],
      },
      {
        id: "passiv-taeter",
        number: "9.3",
        title: "Handelnde Person",
        description: "von / durch",
        content: [
          {
            title: "Regeln",
            items: [
              "**von + Dativ**: Personen oder Institutionen (Vom Arzt operiert).",
              "**durch + Akkusativ**: Mittel, Instrumente oder abstrakte Ursachen (Durch Zufall gefunden).",
            ],
          },
        ],
      },
    ],
    tips: [
      "Das unpersönliche „man“ im Aktivsatz fällt im Passiv weg.",
      "In Sätzen ohne Subjekt steht oft das Platzhalter-„Es“ auf Position 1 (Es wurde getanzt).",
    ],
  },
  {
    id: "partizip",
    number: "10",
    title: "Partizip I & II",
    category: "Verben",
    description: "Partizipien als Adjektive und in Partizipialkonstruktionen",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "partizip-typen",
        number: "10.1",
        title: "Partizip I und II",
        description: "Grundlegende Unterschiede",
        hasTable: true,
        tableData: {
          headers: ["Typ", "Bildung", "Beispiel", "Bedeutung"],
          rows: [
            ["Partizip I", "Infinitiv + d", "laufend, singend", "aktiv, gleichzeitig"],
            ["Partizip II", "ge- + Stamm + t/en", "gelaufen, gesungen", "passiv, abgeschlossen"],
          ],
        },
      },
      {
        id: "partizip-adjektiv",
        number: "10.2",
        title: "Partizip als Adjektiv",
        description: "Verwendung vor dem Nomen",
        content: [
          {
            title: "Beispiele",
            items: [
              "Partizip I: der laufende Mann (der Mann, der läuft)",
              "Partizip II: das geöffnete Fenster (das Fenster, das geöffnet wurde)",
            ],
          },
        ],
      },
      {
        id: "partizipial-konst",
        number: "10.3",
        title: "Partizipialkonstruktionen",
        description: "Verkürzte Sätze",
        content: [
          {
            title: "Struktur",
            items: [
              "Erweitert: Der am Bahnhof wartende Mann...",
              "Ersetzt Relativsatz: Der Mann, der am Bahnhof wartet...",
            ],
          },
        ],
      },
    ],
    tips: [
      "Partizipialkonstruktionen findet man vor allem in der **Schriftsprache** und in wissenschaftlichen Texten.",
      "Im gesprochenen Deutsch verwendet man stattdessen meistens **Relativsätze**.",
    ],
  },
  {
    id: "verben-kasus",
    number: "11",
    title: "Verben mit Dativ & Akkusativ",
    category: "Verben",
    description: "Welches Objekt verlangen welche Verben?",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "verben-kasus-ueberblick",
        number: "11.1",
        title: "Kasus-Überblick",
        description: "Verben nach Kasus-Gruppen",
        hasTable: true,
        tableData: {
          headers: ["Kasus", "Verben", "Beispiel"],
          rows: [
            ["nur Akkusativ", "haben, brauchen, sehen, hören", "Ich sehe den Mann."],
            ["nur Dativ", "helfen, danken, gefallen, gehören", "Ich helfe dir."],
            ["Dativ + Akkusativ", "geben, schenken, zeigen, erklären", "Ich gebe dir das Buch."],
          ],
        },
      },
      {
        id: "verben-dativ-wichtig",
        number: "11.2",
        title: "Wichtige Dativ-Verben",
        description: "Häufig verwendete Verben mit Dativ-Ergänzung",
        content: [
          {
            title: "Beispiele",
            items: [
              "helfen: Ich helfe meiner Mutter.",
              "danken: Ich danke dir.",
              "gefallen: Das Buch gefällt mir.",
              "gehören: Das Buch gehört mir.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Merkhilfe: **Wem?** → Dativ (helfen, danken, gefallen, gehören, schmecken, passen).",
      "Wenn es **zwei Objekte** gibt: Person = Dativ, Sache = Akkusativ (Ich gebe **dem Mann** **den Schlüssel**).",
    ],
  },
  {
    id: "konjunktiv-i",
    number: "12",
    title: "Konjunktiv I (Indirekte Rede)",
    category: "Verben",
    description: "Wiedergabe von Aussagen anderer Personen",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "konj1-bildung",
        number: "12.1",
        title: "Konjunktiv I Bildung",
        description: "Formen für verschiedene Personen",
        hasTable: true,
        tableData: {
          headers: ["Pronomen", "sein", "haben", "kommen"],
          rows: [
            ["ich", "sei", "habe", "komme"],
            ["du", "seist", "habest", "kommest"],
            ["er/sie/es", "sei", "habe", "komme"],
            ["wir", "seien", "haben", "kommen"],
            ["ihr", "seiet", "habet", "kommet"],
            ["sie/Sie", "seien", "haben", "kommen"],
          ],
        },
      },
      {
        id: "konj1-verwendung",
        number: "12.2",
        title: "Verwendung",
        description: "Direkte vs. Indirekte Rede",
        content: [
          {
            title: "Beispiele",
            items: [
              'Direkt: Er sagt: „Ich bin krank."',
              "Indirekt: Er sagt, er sei krank.",
              'Direkt: Sie sagte: „Ich habe keine Zeit."',
              "Indirekt: Sie sagte, sie habe keine Zeit.",
            ],
          },
          {
            title: "Zeitverschiebung",
            items: [
              "**Gegenwart**: Er sagt, er **sei** krank. (Konj. I Präsens)",
              "**Vergangenheit**: Er sagt, er **sei** krank **gewesen**. (Konj. I Perfekt)",
              "**Zukunft**: Er sagt, er **werde** morgen kommen. (Konj. I Futur)",
            ],
          },
        ],
      },
      {
        id: "konj1-ersatzregel",
        number: "12.3",
        title: "Ersatzregel (Konj. II statt Konj. I)",
        description: "Wann man Konjunktiv II als Ersatz benutzt",
        content: [
          {
            title: "Regeln",
            items: [
              "Wenn die Form des Konjunktiv I **identisch mit dem Indikativ** ist, benutzt man stattdessen den **Konjunktiv II**.",
              '**Beispiel**: „sie haben" (Indikativ) = „sie haben" (Konj. I) → Ersatz: „sie **hätten**" (Konj. II)',
              '**Beispiel**: „wir kommen" (Indikativ) = „wir kommen" (Konj. I) → Ersatz: „wir **kämen**" (Konj. II)',
              "Bei **sein** ist der Konjunktiv I in allen Formen erkennbar (sei, seist, sei, seien ...), daher kein Ersatz nötig.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Der Konjunktiv I wird vor allem in der **Schriftsprache** (Nachrichten, Berichte) benutzt.",
      'In der **gesprochenen Sprache** verwendet man meist „dass"-Sätze oder den Konjunktiv II statt des Konjunktiv I.',
    ],
  },
  {
    id: "funktionsverben",
    number: "13",
    title: "Funktionsverbgefüge",
    category: "Verben",
    description: "Nomen-Verb-Verbindungen mit spezieller Bedeutung",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "funktions-wichtig",
        number: "13.1",
        title: "Wichtige Funktionsverbgefüge",
        description: "Häufige Verbindungen und ihre einfachen Entsprechungen",
        hasTable: true,
        tableData: {
          headers: ["Funktionsverbgefüge", "Einfaches Verb", "Beispiel"],
          rows: [
            ["eine Frage stellen", "fragen", "Er stellt eine Frage."],
            ["Kritik üben", "kritisieren", "Sie übt Kritik an dem Plan."],
            ["zur Verfügung stellen", "bereitstellen", "Wir stellen Ihnen ein Auto zur Verfügung."],
            ["zur Verfügung stehen", "vorhanden sein", "Das Auto steht Ihnen zur Verfügung."],
            ["in Betrieb nehmen", "starten", "Die Maschine wird in Betrieb genommen."],
            ["eine Entscheidung treffen", "entscheiden", "Wir müssen eine Entscheidung treffen."],
            ["einen Antrag stellen", "beantragen", "Sie stellt einen Antrag auf Urlaub."],
            ["Bescheid geben/sagen", "informieren", "Geben Sie mir bitte Bescheid."],
            ["in Frage kommen", "möglich sein", "Das kommt nicht in Frage."],
            ["in Anspruch nehmen", "nutzen/beanspruchen", "Sie nimmt den Service in Anspruch."],
            ["Rücksicht nehmen", "berücksichtigen", "Nimm bitte Rücksicht auf die Nachbarn."],
            ["Abschied nehmen", "sich verabschieden", "Wir nehmen Abschied von unseren Freunden."],
          ],
        },
      },
    ],
    tips: [
      "Funktionsverbgefüge klingen **formeller** als die einfachen Verben – sie sind typisch für **offizielle Texte, Nachrichten und Geschäftssprache**.",
      "Das Nomen im Funktionsverbgefüge trägt die **Hauptbedeutung**, das Verb ist fast leer.",
    ],
  },
  {
    id: "lassen",
    number: "14",
    title: "Das Verb „lassen“",
    category: "Verben",
    description: "Verschiedene Bedeutungen von lassen",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "lassen-bedeutung",
        number: "14.1",
        title: "Bedeutungen",
        description: "Vom Auftrag bis zur Erlaubnis",
        content: [
          {
            title: "Regeln",
            items: [
              "**Etwas nicht mehr tun**: Er lässt das Rauchen.",
              "**Etwas an einem Ort lassen**: Ich lasse meinen Schirm im Auto.",
              "**Auftrag/Service**: Ich lasse mein Auto reparieren. (Ich mache es nicht selbst)",
              "**Erlaubnis**: Die Mutter lässt die Kinder fernsehen.",
              "**Möglichkeit (sich lassen + Inf)**: Das Problem lässt sich lösen. (= Das Problem kann gelöst werden)",
            ],
          },
        ],
      },
      {
        id: "lassen-formen",
        number: "14.2",
        title: "Formen",
        description: "Konjugation in verschiedenen Zeitformen",
        content: [
          {
            title: "Regeln",
            items: [
              "**Präsens**: ich lasse, du lässt, er lässt...",
              "**Präteritum**: ich ließ, du ließest...",
              "**Perfekt**: ich habe gelassen (Vollverb) / ich habe ... lassen (mit zweitem Infinitiv)",
            ],
          },
        ],
      },
    ],
    tips: [
      "**Sich lassen + Infinitiv** ist eine elegante Alternative zum Passiv mit **können**: Das lässt sich machen = Das kann gemacht werden.",
    ],
  },
  {
    id: "unregelmaessige-verben",
    number: "15",
    title: "Unregelmäßige Verben (Liste)",
    category: "Verben",
    description: "Wichtige unregelmäßige Verben und ihre Formen",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "liste-unregelmaessig",
        number: "15.1",
        title: "Häufige unregelmäßige Verben",
        description: "Infinitiv, Präsens (3.P.), Präteritum and Perfekt",
        hasTable: true,
        tableData: {
          headers: ["Infinitiv", "Präsens (3.P.)", "Präteritum", "Perfekt (Partizip II)"],
          rows: [
            ["anfangen", "fängt an", "fing an", "hat angefangen"],
            ["backen", "backt/bäckt", "buk/backte", "hat gebacken"],
            ["befehlen", "befiehlt", "befahl", "hat befohlen"],
            ["beginnen", "beginnt", "begann", "hat begonnen"],
            ["beißen", "beißt", "biss", "hat gebissen"],
            ["betrügen", "betrügt", "betrog", "hat betrogen"],
            ["biegen", "biegt", "bog", "ist/hat gebogen"],
            ["bieten", "bietet", "bot", "hat geboten"],
            ["binden", "bindet", "band", "hat gebunden"],
            ["bitten", "bittet", "bat", "hat gebeten"],
            ["bleiben", "bleibt", "blieb", "ist geblieben"],
            ["braten", "brät", "briet", "hat gebraten"],
            ["brechen", "bricht", "brach", "ist/hat gebrochen"],
            ["brennen", "brennt", "brannte", "hat gebrannt"],
            ["bringen", "bringt", "brachte", "hat gebracht"],
            ["denken", "denkt", "dachte", "hat gedacht"],
            ["dürfen", "darf", "durfte", "hat gedurft/dürfen"],
            ["empfehlen", "empfiehlt", "empfahl", "hat empfohlen"],
            ["essen", "isst", "aß", "hat gegessen"],
            ["fahren", "fährt", "fuhr", "ist/hat gefahren"],
            ["fallen", "fällt", "fiel", "ist gefallen"],
            ["fangen", "fängt", "fing", "hat gefangen"],
            ["finden", "findet", "fand", "hat gefunden"],
            ["fliegen", "fliegt", "flog", "ist/hat geflogen"],
            ["fressen", "frisst", "fraß", "hat gefressen"],
            ["geben", "gibt", "gab", "hat gegeben"],
            ["gehen", "geht", "ging", "ist gegangen"],
            ["gelingen", "gelingt", "gelang", "ist gelungen"],
            ["gelten", "gilt", "galt", "hat gegolten"],
            ["genießen", "genießt", "genoss", "hat genossen"],
            ["geschehen", "geschieht", "geschah", "ist geschehen"],
            ["gewinnen", "gewinnt", "gewann", "hat gewonnen"],
            ["gießen", "gießt", "goss", "hat gegossen"],
            ["haben", "hat", "hatte", "hat gehabt"],
            ["halten", "hält", "hielt", "hat gehalten"],
            ["hängen", "hängt", "hing", "hat gehangen"],
            ["heben", "hebt", "hob", "hat gehoben"],
            ["heißen", "heißt", "hieß", "hat geheißen"],
            ["helfen", "hilft", "half", "hat geholfen"],
            ["kennen", "kennt", "kannte", "hat gekannt"],
            ["kommen", "kommt", "kam", "ist gekommen"],
            ["können", "kann", "konnte", "hat gekonnt/können"],
            ["laden", "lädt", "lud", "hat geladen"],
            ["lassen", "lässt", "ließ", "hat gelassen"],
            ["laufen", "läuft", "lief", "ist gelaufen"],
            ["leiden", "leidet", "litt", "hat gelitten"],
            ["leihen", "leiht", "lieh", "hat geliehen"],
            ["lesen", "liest", "las", "hat gelesen"],
            ["liegen", "liegt", "lag", "hat/ist gelegen"],
            ["lügen", "lügt", "log", "hat gelogen"],
            ["nehmen", "nimmt", "nahm", "hat genommen"],
            ["nennen", "nennt", "nannte", "hat genannt"],
            ["pfeifen", "pfeift", "pfiff", "hat gepfiffen"],
            ["raten", "rät", "riet", "hat geraten"],
            ["reißen", "reißt", "riss", "ist/hat gerissen"],
            ["reiten", "reitet", "ritt", "ist/hat geritten"],
            ["rennen", "rennt", "rannte", "ist gerannt"],
            ["riechen", "riecht", "roch", "hat gerochen"],
            ["rufen", "ruft", "rief", "hat gerufen"],
            ["scheinen", "scheint", "schien", "hat geschienen"],
            ["schieben", "schiebt", "schob", "hat geschoben"],
            ["schießen", "schießt", "schoss", "hat geschossen"],
            ["schlafen", "schläft", "schlief", "hat geschlafen"],
            ["schlagen", "schlägt", "schlug", "hat geschlagen"],
            ["schließen", "schließt", "schloss", "hat geschlossen"],
            ["schneiden", "schneidet", "schnitt", "hat geschnitten"],
            ["schreiben", "schreibt", "schrieb", "hat geschrieben"],
            ["schreien", "schreit", "schrie", "hat geschrien"],
            ["schweigen", "schweigt", "schwieg", "hat geschwiegen"],
            ["schwimmen", "schwimmt", "schwamm", "ist/hat geschwommen"],
            ["sehen", "sieht", "sah", "hat gesehen"],
            ["sein", "ist", "war", "ist gewesen"],
            ["senden", "sendet", "sandte/sendete", "hat gesandt/gesendet"],
            ["singen", "singt", "sang", "hat gesungen"],
            ["sinken", "sinkt", "sank", "ist gesunken"],
            ["sitzen", "sitzt", "saß", "hat/ist gesessen"],
            ["sollen", "soll", "sollte", "hat gesollt/sollen"],
            ["sprechen", "spricht", "sprach", "hat gesprochen"],
            ["springen", "springt", "sprang", "ist gesprungen"],
            ["stehen", "steht", "stand", "hat/ist gestanden"],
            ["stehlen", "stiehlt", "stahl", "hat gestohlen"],
            ["steigen", "steigt", "stieg", "ist gestiegen"],
            ["sterben", "stirbt", "starb", "ist gestorben"],
            ["stoßen", "stößt", "stieß", "hat/ist gestoßen"],
            ["streiten", "streitet", "stritt", "hat gestritten"],
            ["tragen", "trägt", "trug", "hat getragen"],
            ["treffen", "trifft", "traf", "hat getroffen"],
            ["treiben", "treibt", "trieb", "hat/ist getrieben"],
            ["treten", "tritt", "trat", "ist/hat getreten"],
            ["trinken", "trinkt", "trank", "hat getrunken"],
            ["tun", "tut", "tat", "hat getan"],
            ["verderben", "verdirbt", "verdarb", "ist/hat verdorben"],
            ["vergessen", "vergisst", "vergaß", "hat vergessen"],
            ["vergleichen", "vergleicht", "verglich", "hat verglichen"],
            ["verlieren", "verliert", "verlor", "hat verloren"],
            ["verzeihen", "verzeiht", "verzieh", "hat verziehen"],
            ["wachsen", "wächst", "wuchs", "ist gewachsen"],
            ["waschen", "wäscht", "wusch", "hat gewaschen"],
            ["werden", "wird", "wurde", "ist geworden"],
            ["werfen", "wirft", "warf", "hat geworfen"],
            ["wiegen", "wiegt", "wog", "hat gewogen"],
            ["wissen", "weiß", "wusste", "hat gewusst"],
            ["wollen", "will", "wollte", "hat gewollt/wollen"],
            ["ziehen", "zieht", "zog", "hat/ist gezogen"],
            ["schaffen", "schafft", "schuf", "hat geschaffen"],
            ["schmelzen", "schmilzt", "schmolz", "ist/hat geschmolzen"],
            ["streichen", "streicht", "strich", "hat gestrichen"],
            ["schwören", "schwört", "schwor", "hat geschworen"],
            ["stinken", "stinkt", "stank", "hat gestunken"],
            ["verbieten", "verbietet", "verbot", "hat verboten"],
            ["vermeiden", "vermeidet", "vermied", "hat vermieden"],
            ["verschwinden", "verschwindet", "verschwand", "ist verschwunden"],
            ["weisen", "weist", "wies", "hat gewiesen"],
            ["zwingen", "zwingt", "zwang", "hat gezwungen"],
          ],
        },
      },
    ],
    tips: [
      "Die wichtigsten unregelmäßigen Verben sollte man **auswendig** lernen – es gibt leider keine Regel für den Vokalwechsel.",
      "Viele **Mischverben** haben einen regelmäßigen Stamm im Partizip, aber einen **Vokalwechsel**: denken → ge**dach**t, bringen → ge**brach**t.",
    ],
  },
  {
    id: "positionsverben",
    number: "16",
    title: "Positionsverben",
    category: "Verben",
    description: "Wo? (Position) vs. Wohin? (Richtung) – stehen/stellen, liegen/legen ...",
    gradients: verbenGradients,
    subtopics: [
      {
        id: "pos-paare",
        number: "16.1",
        title: "Die Verbpaare",
        description: "Position (Dativ) und Richtung (Akkusativ)",
        hasTable: true,
        tableData: {
          caption: "Wo? (Dativ) ↔ Wohin? (Akkusativ)",
          headers: ["Wo? (Position, Dativ)", "Wohin? (Richtung, Akkusativ)"],
          rows: [
            [
              "**stehen** – Der Teller steht auf **dem** Tisch.",
              "**stellen** – Ich stelle den Teller auf **den** Tisch.",
            ],
            [
              "**liegen** – Das Buch liegt auf **dem** Regal.",
              "**legen** – Ich lege das Buch auf **das** Regal.",
            ],
            [
              "**sitzen** – Das Kind sitzt auf **dem** Stuhl.",
              "**setzen** – Ich setze das Kind auf **den** Stuhl.",
            ],
            [
              "**hängen** (hing, hat gehangen) – Das Bild hängt an **der** Wand.",
              "**hängen** (hängte, hat gehängt) – Ich hänge das Bild an **die** Wand.",
            ],
            [
              "**stecken** – Der Schlüssel steckt in **dem** Schloss.",
              "**stecken** – Ich stecke den Schlüssel in **das** Schloss.",
            ],
          ],
        },
      },
      {
        id: "pos-regeln",
        number: "16.2",
        title: "Regeln",
        description: "Wie man die richtigen Verben und den Kasus wählt",
        content: [
          {
            title: "Merkhilfe",
            items: [
              "**Wo?** (Ort/Position) → **Dativ** – intransitives Verb (stehen, liegen, sitzen, hängen)",
              "**Wohin?** (Richtung/Bewegung) → **Akkusativ** – transitives Verb (stellen, legen, setzen, hängen)",
              "Die Positionsverben werden immer mit **Wechselpräpositionen** (in, an, auf, unter, über, vor, hinter, neben, zwischen) verwendet.",
            ],
          },
        ],
      },
    ],
    tips: [
      "**hängen** ist besonders: Es hat zwei verschiedene Konjugationen! Intransitiv (hing/gehangen) vs. transitiv (hängte/gehängt).",
      'Im Alltag verwenden viele Deutsche **tun** statt der speziellen Verben: „Tu das mal dahin." Das ist aber umgangssprachlich.',
    ],
  },
];

// Nomen Section
const nomenGradients = [
  "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
  "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
  "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
  "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
  "linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)",
  "linear-gradient(135deg, #f8835f 0%, #e67e22 100%)",
  "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
  "linear-gradient(135deg, #e91e63 0%, #c2185b 100%)",
];

const nomenTopics = [
  {
    id: "genus",
    number: "1",
    title: "Genus (Artikel)",
    category: "Nomen",
    description: "Regeln für der, die und das",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "genus-maskulin",
        number: "1.1",
        title: "Maskulinum (der)",
        description: "Wann man „der“ verwendet",
        content: [
          {
            title: "Regeln",
            items: [
              "**Personen/Tiere (männl.)**: der Lehrer, der Hund",
              "**Zeit**: der Mittwoch, der Mai, der Sommer, der Morgen",
              "**Wetter/Himmelsrichtungen**: der Schnee, der Süden",
              "**Berufsbezeichnungen (männl.)**: der Mechaniker, der Arzt",
              "**Alkohol**: der Wein (Ausnahme: das Bier)",
              "**Endungen -ling, -ismus**: der Liebling, der Tourismus",
              "**Endungen -or, -us**: der Motor, der Rhythmus, der Fokus",
              "**Endungen -er (bei Geräten)**: der Computer, der Drucker",
            ],
          },
        ],
      },
      {
        id: "genus-feminin",
        number: "1.2",
        title: "Femininum (die)",
        description: "Wann man „die“ verwendet",
        content: [
          {
            title: "Regeln",
            items: [
              "**Personen/Tiere (weibl.)**: die Mutter, die Ärztin (Ausnahme: das Mädchen)",
              "**Berufsbezeichnungen (weibl.)**: die Ärztin, die Lehrerin",
              "**Blumen**: die Rose, die Tulpe",
              "**Endungen -ung, -heit, -keit, -schaft**: die Zeitung, die Gesundheit, die Möglichkeit, die Freundschaft",
              "**Endungen -ion, -ur, -ik**: die Nation, die Kultur, die Musik",
              "**Endungen -tät, -ie, -anz, -enz**: die Universität, die Demokratie, die Toleranz, die Existenz",
              "**Die meisten Nomen auf -e**: die Dose, die Lampe (Ausnahmen: der Käse, der Name)",
            ],
          },
        ],
      },
      {
        id: "genus-neutrum",
        number: "1.3",
        title: "Neutrum (das)",
        description: "Wann man „das“ verwendet",
        content: [
          {
            title: "Regeln",
            items: [
              "**Substantivierungen von Verben**: das Essen, das Trinken",
              "**Endungen -chen, -lein** (Diminutiv): das Mädchen, das Tischlein, das Häuschen",
              "**Endungen -um, -ment, -nis**: das Zentrum, das Dokument, das Ergebnis",
              "**Vorsilbe Ge-**: das Gebäude, das Getränk, das Gespräch, das Gebirge",
              "**Fremdwörter auf -ma, -o**: das Thema, das Kino, das Büro",
            ],
          },
        ],
      },
    ],
    tips: [
      "Lernen Sie Nomen immer zusammen mit dem Artikel!",
      "Fast alle Nomen auf -e sind feminin (die Dose). Ausnahmen: der Käse, der Name.",
    ],
  },
  {
    id: "plural",
    number: "2",
    title: "Plural",
    category: "Nomen",
    description: "Die fünf Pluraltypen im Deutschen",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "plural-typen",
        number: "2.1",
        title: "Die 5 Pluraltypen",
        description: "Übersicht der verschiedenen Endungen",
        content: [
          {
            title: "Regeln",
            items: [
              "**Typ 1 (- / -¨)**: Meist Nomen auf -er, -el, -en; immer -chen, -lein (der Lehrer -> die Lehrer, der Apfel -> die Äpfel)",
              "**Typ 2 (-e / -¨e)**: Oft Maskulina, einsilbige Feminina/Neutra (der Fisch -> die Fische, die Kuh -> die Kühe)",
              "**Typ 3 (-er / -¨er)**: Oft einsilbige Neutra, einige Maskulina (das Kind -> die Kinder, das Glas -> die Gläser)",
              "**Typ 4 (-n / -en / -nen)**: Viele Feminina, alle auf -e; immer -ung, -heit, -keit (die Dose -> die Dosen, die Studentin -> die Studentinnen)",
              "**Typ 5 (-s)**: Nomen auf -a, -i, -o and Internationalismen (das Sofa -> die Sofas, das Hotel -> die Hotels)",
            ],
          },
        ],
      },
    ],
    tips: [
      "Es gibt **keine feste Regel** für den Plural – man muss den Plural zusammen mit dem Nomen lernen.",
      "Im **Wörterbuch** steht der Plural immer hinter dem Nomen: der Tisch, **-e** = die Tische.",
    ],
  },
  {
    id: "n-deklination",
    number: "3",
    title: "n-Deklination",
    category: "Nomen",
    description: "Besondere Deklination für maskuline Nomen",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "n-dekl-gruppen",
        number: "3.1",
        title: "Wer gehört zur n-Deklination?",
        description: "Kategorien der betroffenen Nomen",
        content: [
          {
            title: "Regeln",
            items: [
              "**Lebewesen (mask.) auf -e**: der Kollege, der Kunde, der Junge",
              "**Nationalitäten (mask.) auf -e**: der Russe, der Franzose, der Pole",
              "**Tiere (mask.) auf -e**: der Hase, der Affe",
              "**Endungen (aus Latein/Griech.)**: -ant, -ent, -ist, -oge, -at (der Student, der Tourist, der Pädagoge, der Diplomat)",
              "**Sonderfälle (+s im Genitiv)**: der Name, der Gedanke, der Glaube, der Buchstabe",
            ],
          },
        ],
      },
      {
        id: "n-dekl-beispiel",
        number: "3.2",
        title: "Deklinationstabelle",
        description: "Beispiel: der Junge",
        hasTable: true,
        tableData: {
          headers: ["Kasus", "Singular", "Plural"],
          rows: [
            ["Nominativ", "der Junge", "die Jungen"],
            ["Akkusativ", "den Jungen", "die Jungen"],
            ["Dativ", "dem Jungen", "den Jungen"],
            ["Genitiv", "des Jungen", "der Jungen"],
          ],
        },
      },
    ],
    tips: [
      "Nomen der n-Deklination enden in **allen Fällen** (außer Nominativ Singular) auf **-n** oder **-en**.",
      "Typisch: der Kunde → de**n** Kunde**n**, de**m** Kunde**n**, de**s** Kunde**n**.",
    ],
  },
  {
    id: "kasus-nomen",
    number: "4",
    title: "Kasus (Die vier Fälle)",
    category: "Nomen",
    description: "Nominativ, Akkusativ, Dativ und Genitiv",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "kasus-verwendung",
        number: "4.1",
        title: "Verwendung",
        description: "Welcher Fall für welche Funktion?",
        content: [
          {
            title: "Regeln",
            items: [
              "**Nominativ**: Wer oder was? (Subjekt)",
              "**Akkusativ**: Wen oder was? (Direktes Objekt / nur eine Ergänzung)",
              "**Dativ**: Wem? (Person bei zwei Objekten / spezielle Verben wie helfen, gefallen)",
              "**Genitiv**: Wessen? (Besitz oder Zugehörigkeit)",
            ],
          },
        ],
      },
      {
        id: "kasus-artikel",
        number: "4.2",
        title: "Bestimmter Artikel im Kasus",
        description: "Deklination der Artikel",
        hasTable: true,
        tableData: {
          headers: ["Kasus", "Maskulin", "Feminin", "Neutral", "Plural"],
          rows: [
            ["Nominativ", "der", "die", "das", "die"],
            ["Akkusativ", "den", "die", "das", "die"],
            ["Dativ", "dem", "der", "dem", "den (n)*"],
            ["Genitiv", "des (s)**", "der", "des (s)**", "der"],
          ],
        },
      },
    ],
    tips: [
      "*(n): Im Dativ Plural haben fast alle Nomen ein -n (Ausnahme: Plural-s).",
      "**(s): Im Genitiv maskulin/neutral haben Nomen die Endung -s oder -es.",
    ],
  },
  {
    id: "artikelwoerter",
    number: "5",
    title: "Artikelwörter",
    category: "Nomen",
    description: "Bestimmte, unbestimmte und Possessivartikel",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "artikel-verwendung",
        number: "5.1",
        title: "Verwendung",
        description: "Wann man welchen Artikeltyp wählt",
        content: [
          {
            title: "Regeln",
            items: [
              "**Bestimmter Artikel**: Signalisiert Bekanntes (Das ist die Katze vom Nachbarn).",
              "**Unbestimmter Artikel**: Neue Informationen (Angela hat eine neue Wohnung).",
              "**Possessivartikel**: Sagt, wem etwas gehört (Das ist mein Fahrrad).",
            ],
          },
        ],
      },
      {
        id: "nullartikel",
        number: "5.2",
        title: "Nullartikel (Kein Artikel)",
        description: "Wann man gar keinen Artikel benutzt",
        content: [
          {
            title: "Regeln",
            items: [
              "**Namen/Städte/Länder**: Susanne wohnt in Berlin (Ausnahme: in der Schweiz).",
              "**Berufe/Nationalitäten**: Er ist Franzose. Sie ist Ingenieurin.",
              "**Mengen/Material**: Milch kaufen, aus Plastik.",
              "**Gefühle**: Hast du Angst?",
            ],
          },
        ],
      },
    ],
    tips: [
      "Der unbestimmte Artikel hat keine Pluralform (Nullartikel).",
      "Possessivartikel in der 3. Person: **sein** (bei mask./neut. Besitzer) vs. **ihr** (bei fem. Besitzer).",
    ],
  },
  {
    id: "adjektivdeklination",
    number: "6",
    title: "Adjektivdeklination",
    category: "Nomen",
    description: "Endungen der Adjektive vor dem Nomen",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "adj-dekl-typen",
        number: "6.1",
        title: "Drei Deklinationstypen",
        description: "Übersicht der verschiedenen Endungsmuster",
        content: [
          {
            title: "Regeln",
            items: [
              "**Typ 1 (Bestimmter Artikel)**: Endung fast immer **-en** (außer Nom Sg & Akk Sg fem/neut: **-e**).",
              "**Typ 2 (Unbestimmter Artikel)**: Nominativ-Endungen wie bestimmter Artikel (ein neuer Film, eine schöne Frau, ein gutes Buch).",
              "**Typ 3 (Starke Deklination / Nullartikel)**: Das Adjektiv übernimmt das Kasus-Signal des Artikels (frischer Kaffee, deutsches Bier).",
            ],
          },
        ],
      },
      {
        id: "adj-dekl-besonder",
        number: "6.2",
        title: "Besonderheiten & Partizipien",
        description: "Spezialfälle und Adjektivierung",
        content: [
          {
            title: "Regeln",
            items: [
              "**Adjektive auf -el / -er**: Das e vor l/r fällt bei der Deklination weg (dunkel -> ein dunkles Zimmer, teuer -> ein teures Auto).",
              "**Partizip I als Adjektiv**: Aktiv, gleichzeitig (das singende Kind).",
              "**Partizip II als Adjektiv**: Passiv, abgeschlossen (das gekochte Ei).",
            ],
          },
        ],
      },
      {
        id: "adj-dekl-beispiel",
        number: "6.3",
        title: "Beispiel: Typ 1 (Bestimmter Artikel)",
        description: "Deklinationstabelle für den bestimmten Artikel",
        hasTable: true,
        tableData: {
          headers: ["Kasus", "Maskulin", "Feminin", "Neutral", "Plural"],
          rows: [
            ["Nominativ", "der neue", "die schöne", "das gute", "die schönen"],
            ["Akkusativ", "den neuen", "die schöne", "das gute", "die schönen"],
            ["Dativ", "dem neuen", "der schönen", "dem guten", "den schönen"],
            ["Genitiv", "des neuen", "der schönen", "des neuen", "der schönen"],
          ],
        },
      },
      {
        id: "adj-dekl-typ2",
        number: "6.4",
        title: "Beispiel: Typ 2 (Unbestimmter Artikel)",
        description: "Deklinationstabelle für den unbestimmten Artikel",
        hasTable: true,
        tableData: {
          headers: ["Kasus", "Maskulin", "Feminin", "Neutral"],
          rows: [
            ["Nominativ", "ein neuer", "eine schöne", "ein gutes"],
            ["Akkusativ", "einen neuen", "eine schöne", "ein gutes"],
            ["Dativ", "einem neuen", "einer schönen", "einem guten"],
            ["Genitiv", "eines neuen", "einer schönen", "eines guten"],
          ],
        },
      },
      {
        id: "adj-dekl-typ3",
        number: "6.5",
        title: "Beispiel: Typ 3 (Ohne Artikel)",
        description: "Deklinationstabelle ohne Artikel (starke Deklination)",
        hasTable: true,
        tableData: {
          headers: ["Kasus", "Maskulin", "Feminin", "Neutral", "Plural"],
          rows: [
            ["Nominativ", "frischer Kaffee", "kalte Milch", "deutsches Bier", "kleine Kinder"],
            ["Akkusativ", "frischen Kaffee", "kalte Milch", "deutsches Bier", "kleine Kinder"],
            ["Dativ", "frischem Kaffee", "kalter Milch", "deutschem Bier", "kleinen Kindern"],
            ["Genitiv", "frischen Kaffees", "kalter Milch", "deutschen Bieres", "kleiner Kinder"],
          ],
        },
      },
    ],
  },
  {
    id: "komparation",
    number: "7",
    title: "Komparation",
    category: "Nomen",
    description: "Steigerung der Adjektive",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "komp-stufen",
        number: "7.1",
        title: "Steigerungsstufen",
        description: "Positiv, Komparativ und Superlativ",
        content: [
          {
            title: "Regeln",
            items: [
              "**Positiv**: schnell (so schnell wie)",
              "**Komparativ**: schneller (schneller als)",
              "**Superlativ**: am schnellsten / der schnellste",
            ],
          },
        ],
      },
      {
        id: "komp-sonder",
        number: "7.2",
        title: "Sonderformen",
        description: "Unregelmäßige Steigerungen",
        content: [
          {
            title: "Beispiele",
            items: [
              "**gut** – besser – am besten",
              "**viel** – mehr – am meisten",
              "**gern** – lieber – am liebsten",
              "**nah** – näher – am nächsten",
              "**hoch** – höher – am höchsten",
            ],
          },
        ],
      },
    ],
    tips: [
      "Umlaut bei vielen einsilbigen Adjektiven: warm – wärmer – am wärmsten.",
      "Superlativ auf **-est** nach d, t, s, ß, sch, x, z: hübsch – hübscher – am hübschesten.",
    ],
  },
  {
    id: "pronomen",
    number: "8",
    title: "Pronomen",
    category: "Nomen",
    description: "Personal-, Indefinit- und Possessivpronomen",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "pron-personal",
        number: "8.1",
        title: "Personalpronomen",
        description: "Bezug auf Personen und Sachen",
        content: [
          {
            title: "Kasus-Formen",
            items: [
              "**ich, du, er, sie, es, wir, ihr, sie, Sie** (Nominativ)",
              "**mich, dich, ihn, sie, es, uns, euch, sie, Sie** (Akkusativ)",
              "**mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen** (Dativ)",
            ],
          },
        ],
      },
      {
        id: "pron-indefinit",
        number: "8.2",
        title: "Indefinitpronomen",
        description: "Unbestimmte Mengen und Personen",
        content: [
          {
            title: "Regeln",
            items: [
              "**Personen**: jemand, niemand, man (Jemand hat angerufen. Man darf hier nicht parken.)",
              "**Sachen**: etwas, nichts, alles (Ich habe etwas Tolles gesehen. Er weiß alles.)",
              "**Ersatz für Nomen**: Hast du ein Fahrrad? – Ja, ich habe **eins** / Nein, ich habe **keins**.",
              "**Plural**: Hast du Eier? – Ja, ich habe **welche**.",
            ],
          },
        ],
      },
      {
        id: "pron-demo",
        number: "8.3",
        title: "Demonstrativpronomen",
        description: "Hinweis auf etwas Bestimmtes",
        content: [
          {
            title: "Regeln",
            items: [
              "**dieser / diese / dieses**: Hinweis auf etwas Nahes oder bereits Erwähntes (Dieser Wein schmeckt gut, jener nicht).",
              "**derselbe / dieselbe / dasselbe**: Die identische Person/Sache (Wir haben denselben Lehrer).",
            ],
          },
        ],
      },
      {
        id: "pron-posses",
        number: "8.4",
        title: "Possessivpronomen",
        description: "Ersatz für Nomen mit Besitzbezug",
        content: [
          {
            title: "Regeln",
            items: [
              "Ersatz für Nomen: Ist das dein Schlüssel? – Ja, das ist **meiner**.",
              "Endungen wie bei Indefinitpronomen.",
            ],
          },
        ],
      },
      {
        id: "pron-frage",
        number: "8.5",
        title: "Fragepronomen",
        description: "Welchen? Was für ein?",
        content: [
          {
            title: "Regeln",
            items: [
              "**welcher / welche / welches**: Frage nach einer bestimmten Sache aus einer Gruppe.",
              "**was für ein-**: Frage nach einem Typ oder einer Sorte.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Personalpronomen im **Dativ** und **Akkusativ** muss man auswendig lernen – besonders die **3. Person** (ihn/ihm, sie/ihr, es/ihm).",
      "**Höflichkeitsform Sie** (+ Ihnen) wird immer großgeschrieben.",
    ],
  },
  {
    id: "komposita",
    number: "9",
    title: "Komposita (Zusammengesetzte Nomen)",
    category: "Nomen",
    description: "Wie man im Deutschen neue Nomen zusammensetzt",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "komp-regeln",
        number: "9.1",
        title: "Grundregeln",
        description: "Aufbau und Genus von Komposita",
        content: [
          {
            title: "Regeln",
            items: [
              "Das **letzte Wort** bestimmt den Artikel und die Grundbedeutung (der Apfel + der Baum = **der** Apfelbaum).",
              "Die vorangehenden Wörter beschreiben oder spezifizieren das letzte Wort.",
              "Im Deutschen werden Komposita immer **zusammengeschrieben** (anders als im Englischen).",
            ],
          },
        ],
      },
      {
        id: "komp-typen",
        number: "9.2",
        title: "Typen von Komposita",
        description: "Welche Wortarten kombiniert werden können",
        hasTable: true,
        tableData: {
          headers: ["Typ", "Beispiel", "Erklärung"],
          rows: [
            ["Nomen + Nomen", "die Haustür", "das Haus + die Tür"],
            ["Verb + Nomen", "das Esszimmer", "essen + das Zimmer"],
            ["Adjektiv + Nomen", "das Hochhaus", "hoch + das Haus"],
            ["Adverb + Nomen", "die Wiederwahl", "wieder + die Wahl"],
            ["Präposition + Nomen", "der Vorname", "vor + der Name"],
          ],
        },
      },
      {
        id: "komp-fuge",
        number: "9.3",
        title: "Fugeelemente",
        description: "Bindeelemente zwischen den Wörtern",
        content: [
          {
            title: "Häufige Fugeelemente",
            items: [
              "**-s-**: die Geburt + der Tag = der Geburt**s**tag, die Arbeit + der Platz = der Arbeit**s**platz",
              "**-n-/-en-**: die Orange + der Saft = der Orange**n**saft, die Straße + der Name = der Straße**n**name",
              "**-er-**: das Kind + der Garten = der Kind**er**garten",
              "**-e-**: der Hund + die Hütte = die Hund**e**hütte",
              "**ohne Fugeelement**: der Schuh + das Geschäft = das Schuhgeschäft",
            ],
          },
        ],
      },
    ],
    tips: [
      "Komposita können theoretisch **endlos lang** sein: Donau**dampf**schiff**fahrt**gesellschaft.",
      "Beim Lesen: Teilen Sie das Wort von **rechts nach links** in seine Bestandteile auf.",
    ],
  },
  {
    id: "nominalisierung",
    number: "10",
    title: "Nominalisierung",
    category: "Nomen",
    description: "Verben und Adjektive als Nomen verwenden",
    gradients: nomenGradients,
    subtopics: [
      {
        id: "nom-verben",
        number: "10.1",
        title: "Nominalisierung von Verben",
        description: "Verben werden zu Nomen",
        content: [
          {
            title: "Regeln",
            items: [
              "**Infinitiv als Nomen** (immer Neutrum): lesen → **das** Lesen, essen → **das** Essen, schwimmen → **das** Schwimmen",
              "**Suffixe -ung** (immer Feminin): übersetzen → die Übersetz**ung**, bezahlen → die Bezahl**ung**",
              "**Suffixe -er** (immer Maskulin): lesen → der Les**er**, fahren → der Fahr**er**",
              "**Vorsilbe Ge-** (oft Neutrum): fühlen → das Ge**fühl**, sprechen → das Ge**spräch**",
            ],
          },
        ],
      },
      {
        id: "nom-adj",
        number: "10.2",
        title: "Nominalisierung von Adjektiven",
        description: "Adjektive werden zu Nomen",
        content: [
          {
            title: "Regeln",
            items: [
              "**Suffixe -heit** (immer Feminin): krank → die Krank**heit**, gesund → die Gesund**heit**",
              "**Suffixe -keit** (immer Feminin): möglich → die Möglich**keit**, freundlich → die Freundlich**keit**",
              "**Suffixe -nis** (Feminin/Neutrum): finster → die Finster**nis**, ergebnis → das Ergeb**nis**",
              "**Suffixe -schaft** (immer Feminin): bereit → die Bereit**schaft**, freund → die Freund**schaft**",
            ],
          },
        ],
      },
      {
        id: "nom-adj-als-nomen",
        number: "10.3",
        title: "Adjektive als Nomen (Personen)",
        description: "Adjektive bezeichnen Personen und werden wie Adjektive dekliniert",
        content: [
          {
            title: "Regeln",
            items: [
              "Adjektive als Nomen werden **großgeschrieben** und **wie Adjektive dekliniert**.",
              "**Mit bestimmtem Artikel**: der Deutsche, die Deutsche, die Deutschen",
              "**Mit unbestimmtem Artikel**: ein Deutscher, eine Deutsche (Endung wie Adjektivdeklination!)",
              "**Beispiele**: der/die Bekannte, der/die Verwandte, der/die Jugendliche, der/die Erwachsene, der/die Angestellte",
            ],
          },
        ],
      },
    ],
    tips: [
      "Nach **etwas, nichts, viel, wenig, alles** wird das nominalisierte Adjektiv großgeschrieben und hat die Endung **-es**: etwas Schönes, nichts Neues, alles Gute.",
    ],
  },
];

// Präpositionen Section
const praepositionenGradients = [
  "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
  "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
  "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
  "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
  "linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)",
];

const praepositionenTopics = [
  {
    id: "lokale-praep",
    number: "1",
    title: "Lokale Präpositionen",
    category: "Präpositionen",
    description: "Wo? Wohin? Woher?",
    gradients: praepositionenGradients,
    subtopics: [
      {
        id: "lokal-wohin",
        number: "1.1",
        title: "Wohin? (Richtung)",
        description: "Bewegung zu einem Ziel",
        content: [
          {
            title: "Häufige Präpositionen",
            items: [
              "**nach**: Städte, Länder ohne Artikel, Richtungen (nach Berlin, nach Hause, nach links)",
              "**in (+ Akk)**: Räume, Gebäude, Länder mit Artikel (ins Kino, in die Schweiz, in den Wald)",
              "**zu**: Personen, Ziele in der Stadt, Geschäfte (zu Maria, zum Bahnhof, zur Post)",
              "**an (+ Akk)**: Wasser, Grenzen (ans Meer, an den Strand, an die Tür)",
              "**auf (+ Akk)**: Plätze, Inseln, Berge, Behörden (auf den Markt, auf die Insel, auf die Post)",
            ],
          },
        ],
      },
      {
        id: "lokal-wo",
        number: "1.2",
        title: "Wo? (Ort)",
        description: "Position an einem Ort",
        content: [
          {
            title: "Häufige Präpositionen",
            items: [
              "**in (+ Dat)**: Räume, Länder, Städte (im Kino, in Berlin, in der Schweiz)",
              "**bei**: Personen, Firmen, Nähe (bei BMW, bei Frankfurt, beim Arzt)",
              "**an (+ Dat)**: Rand, Wasser (am Fenster, am Meer, an der Ampel)",
              "**auf (+ Dat)**: Fläche, Insel (auf dem Tisch, auf der Insel)",
            ],
          },
        ],
      },
      {
        id: "lokal-woher",
        number: "1.3",
        title: "Woher? (Herkunft)",
        description: "Bewegung von einem Ursprung",
        content: [
          {
            title: "Häufige Präpositionen",
            items: [
              "**aus**: Aus dem Inneren (aus dem Haus, aus Berlin, aus der Schweiz)",
              "**von**: Von einem Ort/Person (vom Bahnhof, vom Arzt, von zu Hause)",
            ],
          },
        ],
      },
    ],
    tips: [
      "**nach Hause** (wohin) vs. **zu Hause** (wo).",
      "Kurzformen: am, im, ans, ins, zum, zur, vom, beim.",
    ],
  },
  {
    id: "temporale-praep",
    number: "2",
    title: "Temporale Präpositionen",
    category: "Präpositionen",
    description: "Wann? Wie lange? Wie oft?",
    gradients: praepositionenGradients,
    subtopics: [
      {
        id: "temp-wann",
        number: "2.1",
        title: "Wann? (Zeitpunkt)",
        description: "Spezifische Zeitpunkte im Kalender",
        content: [
          {
            title: "Häufige Präpositionen",
            items: [
              "**an (+ Dat)**: Tage, Datum, Tageszeiten (am Montag, am 1. Mai, am Abend - Ausnahme: in der Nacht)",
              "**in (+ Dat)**: Wochen, Monate, Jahreszeiten, Zukunft (in einer Woche, im Mai, im Sommer, in 5 Minuten)",
              "**um (+ Akk)**: Uhrzeit (um 8 Uhr)",
              "**gegen (+ Akk)**: Ungenaue Zeit (gegen Mittag, gegen 8 Uhr)",
              "**vor / nach (+ Dat)**: Vorher/Nachher (vor dem Essen, nach der Arbeit)",
            ],
          },
        ],
      },
      {
        id: "temp-dauer",
        number: "2.2",
        title: "Zeitdauer",
        description: "Wie lange etwas dauert",
        content: [
          {
            title: "Regeln",
            items: [
              "**seit (+ Dat)**: Beginn in der Vergangenheit, dauert noch an (seit einem Jahr).",
              "**ab (+ Dat)**: Beginn in der Gegenwart/Zukunft (ab Montag).",
              "**von ... bis (+ Dat)**: Zeitraum (von 8 bis 16 Uhr).",
              "**für (+ Akk)**: Zeitraum in der Zukunft (für zwei Wochen).",
            ],
          },
        ],
      },
      {
        id: "temp-gleich",
        number: "2.3",
        title: "Gleichzeitigkeit",
        description: "Aktionen, die zur gleichen Zeit stattfinden",
        content: [
          {
            title: "Regeln",
            items: [
              "**während (+ Gen/Dat)**: Während einer Aktion (während der Fahrt).",
              "**bei (+ Dat)**: Beim Tun (beim Essen).",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "kasus-praep",
    number: "3",
    title: "Kasus-Regeln",
    category: "Präpositionen",
    description: "Übersicht der Präpositionen nach Kasus",
    gradients: praepositionenGradients,
    subtopics: [
      {
        id: "kasus-praep-tabelle",
        number: "3.1",
        title: "Präpositionen und ihre Fälle",
        description: "Zusammenfassung der Kasus-Zugehörigkeit",
        hasTable: true,
        tableData: {
          headers: ["Fall", "Präpositionen"],
          rows: [
            ["Akkusativ", "durch, für, gegen, ohne, um, bis, entlang"],
            ["Dativ", "aus, bei, mit, nach, seit, von, zu, ab, gegenüber"],
            ["Wechsel (Akk/Dat)", "in, an, auf, unter, über, vor, hinter, neben, zwischen"],
            ["Genitiv", "wegen, trotz, während, innerhalb, außerhalb, statt"],
          ],
        },
      },
    ],
    tips: ["**Akkusativ**: Wohin? (Bewegung)", "**Dativ**: Wo? (Zustand/Position)"],
  },
  {
    id: "genitiv-praep",
    number: "4",
    title: "Genitiv-Präpositionen",
    category: "Präpositionen",
    description: "Präpositionen, die den Genitiv verlangen",
    gradients: praepositionenGradients,
    subtopics: [
      {
        id: "genitiv-praep-haupt",
        number: "4.1",
        title: "Die 4 wichtigsten Präpositionen",
        description: "Häufig verwendete Genitiv-Präpositionen",
        content: [
          {
            title: "Regeln",
            items: [
              "**wegen**: Grund (Wegen des schlechten Wetters bleiben wir zu Hause).",
              "**während**: Zeit (Während der Fahrt darf man nicht mit dem Fahrer sprechen).",
              "**trotz**: Gegensatz (Trotz der Kälte trägt er keinen Mantel).",
              "**statt / anstatt**: Alternative (Ich nehme den Bus statt meines Autos).",
            ],
          },
        ],
      },
      {
        id: "genitiv-praep-weitere",
        number: "4.2",
        title: "Weitere Genitiv-Präpositionen",
        description: "Ergänzende Präpositionen der gehobenen Sprache",
        content: [
          {
            title: "Regeln",
            items: [
              "**innerhalb / außerhalb**: Ort/Zeit (innerhalb der Stadt, außerhalb der Sprechzeiten).",
              "**aufgrund**: Grund (formeller als wegen).",
              "**mithilfe**: Instrumentell (mithilfe eines Wörterbuchs).",
            ],
          },
        ],
      },
    ],
    tips: [
      "In der gesprochenen Sprache wird bei **wegen** und **während** oft der Dativ verwendet (wegen dem Wetter), aber im schriftlichen Deutsch ist der Genitiv korrekt.",
    ],
  },
  {
    id: "wechsel-praep",
    number: "5",
    title: "Wechselpräpositionen",
    category: "Präpositionen",
    description: "Die 9 Präpositionen mit Dativ ODER Akkusativ",
    gradients: praepositionenGradients,
    subtopics: [
      {
        id: "wechsel-9",
        number: "5.1",
        title: "Die 9 Wechselpräpositionen",
        description: "Wo? (Dativ) vs. Wohin? (Akkusativ)",
        hasTable: true,
        tableData: {
          caption: "Wo? (Dativ) ↔ Wohin? (Akkusativ)",
          headers: ["Präposition", "Wo? (Dativ)", "Wohin? (Akkusativ)"],
          rows: [
            ["an", "Das Bild hängt an **der** Wand.", "Ich hänge das Bild an **die** Wand."],
            [
              "auf",
              "Der Schlüssel liegt auf **dem** Tisch.",
              "Ich lege den Schlüssel auf **den** Tisch.",
            ],
            [
              "hinter",
              "Der Hund sitzt hinter **dem** Sofa.",
              "Der Hund läuft hinter **das** Sofa.",
            ],
            ["in", "Die Katze sitzt in **dem** Karton.", "Die Katze klettert in **den** Karton."],
            ["neben", "Ich sitze neben **dir**.", "Setz dich neben **mich**."],
            [
              "über",
              "Das Foto hängt über **dem** Schreibtisch.",
              "Ich hänge das Foto über **den** Schreibtisch.",
            ],
            [
              "unter",
              "Der Hund schläft unter **der** Decke.",
              "Der Hund kriecht unter **die** Decke.",
            ],
            ["vor", "Das Paket steht vor **der** Tür.", "Stell das Paket vor **die** Tür."],
            [
              "zwischen",
              "Das Kind steht zwischen **den** Eltern.",
              "Das Kind setzt sich zwischen **die** Eltern.",
            ],
          ],
        },
      },
      {
        id: "wechsel-merkhilfe",
        number: "5.2",
        title: "Merkhilfe",
        description: "Wie man sich die Regel merkt",
        content: [
          {
            title: "Regeln",
            items: [
              "**Wo?** → Dativ (Position, Zustand): Ich **bin** im Kino.",
              "**Wohin?** → Akkusativ (Richtung, Bewegung): Ich **gehe** ins Kino.",
              '**Merksatz**: „Wo ich bin, ist Dativ – wohin ich geh, ist Akkusativ."',
            ],
          },
        ],
      },
    ],
    tips: [
      "Kurzformen: **in dem** = im, **in das** = ins, **an dem** = am, **an das** = ans.",
      "Bei **Verben der Ruhe** (sein, stehen, sitzen, liegen, hängen) → immer **Dativ**.",
      "Bei **Verben der Bewegung** (gehen, stellen, setzen, legen, hängen) → immer **Akkusativ**.",
    ],
  },
  {
    id: "modale-kausale-praep",
    number: "6",
    title: "Modale & Kausale Präpositionen",
    category: "Präpositionen",
    description: "Art und Weise, Grund und Gegengrund",
    gradients: praepositionenGradients,
    subtopics: [
      {
        id: "modal-praep",
        number: "6.1",
        title: "Modale Präpositionen (Wie?)",
        description: "Art und Weise, Begleitung, Mittel",
        content: [
          {
            title: "Regeln",
            items: [
              "**mit (+ Dat)**: Begleitung, Mittel (Ich fahre mit dem Zug. Ich schreibe mit einem Bleistift).",
              "**ohne (+ Akk)**: Abwesenheit (Er geht ohne seinen Bruder. Kaffee ohne Milch).",
              "**gegen (+ Akk)**: Gegensatz, Richtung (Ich bin gegen den Vorschlag. Wir fahren gegen die Wand).",
              "**für (+ Akk)**: Zweck, Person (Das Geschenk ist für dich. Für mich einen Kaffee, bitte).",
              "**als**: Funktion/Rolle (Er arbeitet als Arzt. Ich habe Berlin als Tourist besucht).",
            ],
          },
        ],
      },
      {
        id: "kausal-praep",
        number: "6.2",
        title: "Kausale Präpositionen (Warum?)",
        description: "Gründe und Gegenargumente",
        content: [
          {
            title: "Regeln",
            items: [
              "**wegen (+ Gen)**: Grund (Wegen des Regens bleibe ich zu Hause).",
              "**aus (+ Dat)**: Innerer Grund, Gefühl (Aus Angst hat er nicht gefragt. Aus Liebe).",
              "**vor (+ Dat)**: Gefühl als Ursache (Ich zittere vor Kälte. Sie weint vor Freude).",
              "**trotz (+ Gen)**: Gegengrund (Trotz des Regens gehe ich spazieren).",
            ],
          },
        ],
      },
    ],
    tips: [
      "Unterschied: **mit** (Dativ) = zusammen mit / **ohne** (Akkusativ) = nicht zusammen mit.",
      "**wegen** verlangt im schriftlichen Deutsch den **Genitiv**, in der Umgangssprache oft den Dativ.",
    ],
  },
];

// Satz Section
const satzGradients = [
  "linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",
  "linear-gradient(135deg, #3498db 0%, #2980b9 100%)",
  "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
  "linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",
  "linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)",
  "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
];

const satzTopics: GrammarTopic[] = [
  {
    id: "fragesatz",
    number: "1",
    category: "Satz",
    title: "Fragesatz & Imperativ",
    description: "Satzbau bei Fragen und Aufforderungen",
    gradients: satzGradients,
    subtopics: [
      {
        id: "frage-formen",
        number: "1.1",
        title: "Frageformen",
        description: "W-Fragen, Ja/Nein-Fragen and Imperativ",
        content: [
          {
            title: "Regeln",
            items: [
              "**W-Frage**: Fragewort an Position 1, Verb an **Position 2** (Wer bist du?).",
              "**Ja/Nein-Frage**: Verb an **Position 1** (Kommst du morgen?).",
              "**Imperativ**: Verb an **Position 1** (Komm bitte her!).",
            ],
          },
        ],
      },
    ],
    tips: [
      "Merkhilfe: W-Frage = Verb auf **Position 2**, Ja/Nein-Frage = Verb auf **Position 1**.",
    ],
  },
  {
    id: "hauptsatz",
    number: "2",
    category: "Satz",
    title: "Hauptsatz (Aussagesatz)",
    description: "Verbposition und Satzglieder im Hauptsatz",
    gradients: satzGradients,
    subtopics: [
      {
        id: "haupt-gold-regel",
        number: "2.1",
        title: "Die goldene Regel",
        description: "Verbposition im Hauptsatz",
        content: [
          {
            title: "Regeln",
            items: [
              "Das konjugierte Verb steht immer an **Position 2**.",
              "An Position 1 kann das Subjekt oder eine andere Information (Zeit, Ort) stehen.",
              "Zweiteilige Verben (trennbare Verben, Perfekt, Modalverben): Der zweite Teil steht am **Satzende**.",
            ],
          },
        ],
      },
      {
        id: "haupt-mittelfeld",
        number: "2.2",
        title: "Reihenfolge im Mittelfeld (TE-KA-MO-LO)",
        description: "Struktur der Satzglieder",
        content: [
          {
            title: "TE-KA-MO-LO Schema",
            items: [
              "**TE**mporal (Wann?): heute",
              "**KA**usal (Warum?): wegen des Regens",
              "**MO**dal (Wie?): mit dem Auto",
              "**LO**kal (Wo/Wohin?): nach Hause",
              "Beispiel: Ich fahre **heute** (Te) **wegen des Termins** (Ka) **schnell** (Mo) **nach Berlin** (Lo).",
            ],
          },
        ],
      },
    ],
    tips: [
      "Pronomen stehen vor Nomen: Ich schenke **es** (Pron.) **meiner Mutter** (Nomen).",
      "Dativ vor Akkusativ (bei Nomen): Ich gebe **dem Mann** (Dat) **den Schlüssel** (Akk).",
    ],
  },
  {
    id: "nebensatz",
    number: "3",
    category: "Satz",
    title: "Nebensatz",
    description: "Satzbau mit Konjunktionen und Relativpronomen",
    gradients: satzGradients,
    subtopics: [
      {
        id: "ns-allgemein",
        number: "3.1",
        title: "Allgemeine Regel",
        description: "Das konjugierte Verb steht am Ende.",
        content: [
          {
            title: "Struktur",
            items: [
              "Ein Nebensatz wird durch eine Konjunktion (weil, dass, wenn ...) eingeleitet.",
              "Das konjugierte Verb rutscht ganz ans **Satzende**.",
            ],
          },
        ],
      },
      {
        id: "relativsatz",
        number: "3.2",
        title: "Relativsatz",
        description: "Nomen genauer beschreiben",
        content: [
          {
            title: "Bildung",
            items: [
              "Bezieht sich auf ein Nomen im Hauptsatz.",
              "Relativpronomen (der, die, das ...) richtet sich in Genus/Numerus nach dem Nomen, Kasus nach seiner Funktion im NS.",
            ],
          },
          {
            title: "Mit Präpositionen",
            items: [
              "Die Präposition steht vor dem Relativpronomen.",
              "**Beispiel**: Der Freund, **mit dem** ich telefoniert habe. Die Firma, **bei der** ich arbeite.",
            ],
          },
          {
            title: "Relativsatz mit wo / wohin / woher",
            items: [
              "**wo**: Bei Orten (Die Stadt, **wo** ich lebe, ist sehr schön).",
              "**wohin**: Bei Richtung (Das Land, **wohin** wir fahren, ist warm).",
              "**woher**: Bei Herkunft (Die Stadt, **woher** er kommt, ist klein).",
            ],
          },
          {
            title: "Relativsatz mit was",
            items: [
              "Nach **alles, etwas, nichts, das**: Alles, **was** ich weiß. Das ist etwas, **was** mich freut.",
              "Nach **dem Superlativ**: Das ist das Beste, **was** ich je gesehen habe.",
              "Bezug auf einen ganzen Satz: Er kam zu spät, **was** mich geärgert hat.",
            ],
          },
        ],
        hasTable: true,
        tableData: {
          caption: "Relativpronomen",
          headers: ["Kasus", "Maskulin", "Feminin", "Neutral", "Plural"],
          rows: [
            ["Nominativ", "der", "die", "das", "die"],
            ["Akkusativ", "den", "die", "das", "die"],
            ["Dativ", "dem", "der", "dem", "denen"],
            ["Genitiv", "dessen", "deren", "dessen", "deren"],
          ],
        },
      },
      {
        id: "ts-nebensatz",
        number: "3.3",
        title: "Temporale Nebensätze",
        description: "Wann etwas passiert ist/passiert",
        content: [
          {
            title: "Häufige Konjunktionen",
            items: [
              "**wenn**: Wiederholte Aktionen in der Gegenwart/Vergangenheit (Immer wenn er kam, kauften wir Pizza). Einmalige Aktion in der Zukunft.",
              "**als**: Einmalige Aktion in der Vergangenheit (Als ich 10 Jahre alt war, fing ich an, Klavier zu spielen).",
              "**bevor / nachdem**: Vorzeitigkeit/Nachzeitigkeit (Bevor ich ins Kino gehe, esse ich etwas. Nachdem er gegessen hatte, ging er spazieren).",
              "**während**: Gleichzeitigkeit (Während ich koche, höre ich Musik).",
              "**seit / seitdem**: Beginn in der Vergangenheit bis jetzt (Seit ich in Deutschland wohne, lerne ich Deutsch).",
              "**bis**: Endpunkt einer Aktion (Ich warte hier, bis du kommst).",
              "**sobald**: Unmittelbare Folge (Sobald ich fertig bin, rufe ich dich an).",
            ],
          },
        ],
      },
      {
        id: "kc-nebensatz",
        number: "3.4",
        title: "Kausale & Konditionale Nebensätze",
        description: "Warum? Unter welcher Bedingung?",
        content: [
          {
            title: "Kausal (Grund)",
            items: [
              "**weil**: Antwortet auf Warum? (Ich bleibe zu Hause, weil ich krank bin).",
              "**da**: Oft am Satzanfang, bekannter Grund (Da ich kein Geld habe, bleibe ich zu Hause).",
            ],
          },
          {
            title: "Konditional (Bedingung)",
            items: [
              "**wenn**: (Wenn du Zeit hast, gehen wir ins Kino).",
              "**falls**: Geringere Wahrscheinlichkeit (Falls es regnet, nehmen wir den Bus).",
            ],
          },
        ],
      },
      {
        id: "fk-nebensatz",
        number: "3.5",
        title: "Finale & Konsekutive Nebensätze",
        description: "Wozu? Mit welcher Folge?",
        content: [
          {
            title: "Final (Ziel/Zweck)",
            items: [
              "**damit**: Wenn Subjekte unterschiedlich sind (Ich gebe dir Geld, damit du Brot kaufst).",
              "**um...zu**: Wenn Subjekte gleich sind (Ich lerne Deutsch, um in Deutschland zu arbeiten).",
            ],
          },
          {
            title: "Konsekutiv (Folge)",
            items: [
              "**sodass**: (Es regnete stark, sodass wir nass wurden).",
              "**so ... dass**: (Der Film war so langweilig, dass ich eingeschlafen bin).",
            ],
          },
        ],
      },
      {
        id: "km-nebensatz",
        number: "3.6",
        title: "Konzessive & Modale Nebensätze",
        description: "Trotz was? Wie?",
        content: [
          {
            title: "Konzessiv (Gegengrund)",
            items: ["**obwohl**: (Obwohl es regnet, gehe ich spazieren)."],
          },
          {
            title: "Modal (Art und Weise)",
            items: [
              "**indem**: (Er hat viel Geld gespart, indem er weniger ausgegeben hat).",
              "**dadurch dass**: Ähnlich wie indem (Dadurch dass sie viel lernte, bestand sie die Prüfung).",
            ],
          },
        ],
      },
      {
        id: "ob-indirekt",
        number: "3.7",
        title: "Indirekte Fragen / ob-Sätze",
        description: "Fragen im Nebensatz",
        content: [
          {
            title: "Regeln",
            items: [
              "**ob**: Ersetzt Ja/Nein-Fragen im Nebensatz (Kommst du? → Ich weiß nicht, **ob** du kommst).",
              "**Indirekte W-Frage**: Das Fragewort leitet den Nebensatz ein (Wo wohnst du? → Ich frage mich, **wo** du wohnst).",
              "Das Verb steht am **Satzende** (wie bei allen Nebensätzen).",
            ],
          },
          {
            title: "Beispiele",
            items: [
              "Könnten Sie mir sagen, **ob** der Zug pünktlich kommt?",
              "Ich möchte wissen, **wann** der Kurs anfängt.",
              "Weißt du, **wie viel** das kostet?",
            ],
          },
        ],
      },
    ],
    tips: [
      "Hauptregel: Im Nebensatz steht das konjugierte Verb **immer am Ende**.",
      "**wenn** (Gegenwart/Zukunft + wiederholte Vergangenheit) vs. **als** (einmalige Vergangenheit).",
    ],
  },
  {
    id: "satzverbindungen",
    number: "4",
    category: "Satz",
    title: "Satzverbindungen",
    description: "Konnektoren und ihre Positionen",
    gradients: satzGradients,
    subtopics: [
      {
        id: "konnektoren-typen",
        number: "4.1",
        title: "Konnektoren-Typen",
        description: "Übersicht der Satzverbindungen nach Positionen",
        hasTable: true,
        tableData: {
          headers: ["Typ", "Position", "Beispiele", "Verbposition"],
          rows: [
            ["Koordinierend", "0", "und, aber, denn, oder, sondern", "Position 2"],
            ["Subordinierend", "NS", "weil, dass, wenn, obwohl, als", "Satzende"],
            [
              "Adverbial",
              "1",
              "deshalb, trotzdem, dann, danach",
              "Position 2 (direkt nach Konnektor)",
            ],
          ],
        },
      },
      {
        id: "doppelkonnektoren",
        number: "4.2",
        title: "Zweiteilige Konnektoren (Doppelkonnektoren)",
        description: "Beziehungen zwischen Satzteilen ausdrücken",
        content: [
          {
            title: "Häufige Beispiele",
            items: [
              "**sowohl ... als auch**: Aufzählung (Ich lerne sowohl Deutsch als auch Englisch).",
              "**nicht nur ... sondern auch**: Steigerung (Er ist nicht nur klug, sondern auch nett).",
              "**entweder ... oder**: Alternative (Entweder wir gehen ins Kino oder wir bleiben zu Hause).",
              "**weder ... noch**: Doppelte Negation (Ich trinke weder Kaffee noch Tee).",
              "**zwar ... aber**: Gegensatz (Er ist zwar reich, aber er ist nicht glücklich).",
            ],
          },
        ],
      },
      {
        id: "prop-konnektoren",
        number: "4.3",
        title: "Proportionale Konnektoren",
        description: "Je ... desto / umso",
        content: [
          {
            title: "Regeln",
            items: [
              "**je ... desto / umso**: Parallelität (Je mehr ich lerne, desto besser verstehe ich es).",
              "Verwendung: je + Nebensatz (Verb am Ende), desto + Hauptsatz (Verb nach desto + Adj).",
            ],
          },
        ],
      },
    ],
    tips: [
      "Konnektoren der Position 0 (und, aber, denn, oder, sondern) lassen das Verb auf Position 2.",
      "Bei **je...desto** steht das Verb im zweiten Teil direkt nach dem Adjektiv (Desto schneller **lerne** ich).",
    ],
  },
];

// Adverbien Section
const adverbienGradients = [
  "linear-gradient(135deg, #00b894 0%, #00cec9 100%)",
  "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)",
  "linear-gradient(135deg, #fd79a8 0%, #e84393 100%)",
  "linear-gradient(135deg, #fdcb6e 0%, #f39c12 100%)",
];

const adverbienTopics = [
  {
    id: "temporal",
    number: "1",
    title: "Temporaladverbien",
    category: "Adverbien",
    description: "Wann? Wie lange? Wie oft?",
    gradients: adverbienGradients,
    subtopics: [
      {
        id: "adv-temp-wann",
        number: "1.1",
        title: "Zeitpunkt (Wann?)",
        description: "Von heute bis damals",
        content: [
          {
            title: "Beispiele",
            items: [
              "heute, morgen, gestern, vorgestern, übermorgen",
              "gerade, jetzt, sofort, bald, damals, vorhin",
            ],
          },
        ],
      },
      {
        id: "adv-temp-oft",
        number: "1.2",
        title: "Häufigkeit (Wie oft?)",
        description: "Von immer bis nie",
        content: [
          {
            title: "Beispiele",
            items: [
              "immer, fast immer, meistens",
              "oft, manchmal, ab und zu",
              "selten, fast nie, nie",
            ],
          },
        ],
      },
      {
        id: "adv-temp-folge",
        number: "1.3",
        title: "Reihenfolge",
        description: "Abläufe strukturieren",
        content: [{ title: "Beispiele", items: ["zuerst, dann, danach, schließlich, zuletzt"] }],
      },
    ],
    tips: [
      "Häufigkeits-Skala: **immer** → fast immer → meistens → oft → manchmal → selten → fast nie → **nie**.",
    ],
  },
  {
    id: "lokal",
    number: "2",
    title: "Lokaladverbien",
    category: "Adverbien",
    description: "Wo? Wohin? Woher?",
    gradients: adverbienGradients,
    subtopics: [
      {
        id: "adv-lokal-wo",
        number: "2.1",
        title: "Ort (Wo?)",
        description: "Position an einem Ort",
        content: [
          {
            title: "Beispiele",
            items: [
              "hier, da, dort",
              "oben, unten, vorn, hinten, links, rechts",
              "draußen, drinnen, drüben, überall, nirgends",
            ],
          },
        ],
      },
      {
        id: "adv-lokal-wohin",
        number: "2.2",
        title: "Richtung (Wohin?)",
        description: "Bewegung zu einem Ziel",
        content: [
          {
            title: "Beispiele",
            items: [
              "hierher, dorthin",
              "rauf, runter, rein, raus, rüber",
              "vorwärts, rückwärts, aufwärts",
            ],
          },
        ],
      },
    ],
    tips: [
      "Adverbien stehen allein, Präpositionen stehen bei einem Nomen.",
      "**Beispiel**: Ich gehe nach draußen (Adv). Ich gehe in den Garten (Präp).",
    ],
  },
  {
    id: "modal-kausal",
    number: "3",
    title: "Modal- & Kausaladverbien",
    category: "Adverbien",
    description: "Wie? Warum?",
    gradients: adverbienGradients,
    subtopics: [
      {
        id: "adv-modal",
        number: "3.1",
        title: "Modal (Wie?)",
        description: "Art und Weise or Einstellung",
        content: [
          {
            title: "Beispiele",
            items: [
              "gern, lieber, am liebsten",
              "vielleicht, wahrscheinlich, sicher",
              "leider, hoffentlich",
            ],
          },
        ],
      },
      {
        id: "adv-kausal",
        number: "3.2",
        title: "Kausal (Warum?)",
        description: "Gründe und Folgen",
        content: [{ title: "Beispiele", items: ["deshalb, darum, deswegen, folglich"] }],
      },
    ],
    tips: [
      "Modaladverbien wie **vielleicht, wahrscheinlich, sicher** drücken den **Grad der Sicherheit** aus.",
      "Kausaladverbien (**deshalb, darum, deswegen**) sind austauschbar und haben die gleiche Bedeutung.",
    ],
  },
  {
    id: "konjunktional",
    number: "4",
    title: "Konjunktionaladverbien",
    category: "Adverbien",
    description: "Adverbien, die Sätze verbinden",
    gradients: adverbienGradients,
    subtopics: [
      {
        id: "adv-konj-typen",
        number: "4.1",
        title: "Typen und Position",
        description: "Wie Konjunktionaladverbien im Satz stehen",
        content: [
          {
            title: "Regeln",
            items: [
              "Konjunktionaladverbien stehen auf **Position 1** und das Verb folgt direkt auf **Position 2**.",
              "**Kausal (Grund)**: deshalb, darum, deswegen (Ich war müde, **deshalb** bin ich früh ins Bett gegangen).",
              "**Konzessiv (Gegengrund)**: trotzdem, dennoch (Es regnet, **trotzdem** geht er spazieren).",
              "**Konsekutiv (Folge)**: also, folglich, infolgedessen (Er hat die Prüfung bestanden, **also** feiert er).",
              "**Adversativ (Gegensatz)**: allerdings, jedoch (Das Essen ist gut, **allerdings** etwas teuer).",
              "**Additiv (Ergänzung)**: außerdem, zudem, darüber hinaus (Er spricht Deutsch, **außerdem** kann er Französisch).",
              "**Temporal (Zeit)**: danach, dann, anschließend, zuvor (Zuerst esse ich, **danach** gehe ich spazieren).",
            ],
          },
        ],
      },
    ],
    tips: [
      "Nicht verwechseln: **weil/obwohl** (Nebensatz → Verb am Ende) vs. **deshalb/trotzdem** (Hauptsatz → Verb auf Pos. 2).",
    ],
  },
  {
    id: "pronominaladverbien",
    number: "5",
    title: "Pronominaladverbien",
    category: "Adverbien",
    description: "da(r)- und wo(r)- Formen für Sachen",
    gradients: adverbienGradients,
    subtopics: [
      {
        id: "adv-da",
        number: "5.1",
        title: "da(r)- + Präposition",
        description: "Verweis auf Sachen (nicht Personen)",
        content: [
          {
            title: "Regeln",
            items: [
              "Ersetzt **Präposition + Sache**: Ich interessiere mich für den Film. → Ich interessiere mich **dafür**.",
              "Wenn die Präposition mit einem Vokal beginnt, wird **-r-** eingefügt: da**r**auf, da**r**über, da**r**in.",
              "**Häufige Formen**: dafür, dagegen, damit, daran, darauf, darüber, daraus, darin, davon, dazu.",
            ],
          },
        ],
      },
      {
        id: "adv-wo",
        number: "5.2",
        title: "wo(r)- + Präposition",
        description: "Fragen nach Sachen",
        content: [
          {
            title: "Regeln",
            items: [
              "Fragt nach **Präposition + Sache**: **Wofür** interessierst du dich? – Für Musik.",
              "Mit Vokal: wo**r**auf, wo**r**über, wo**r**in.",
              "**Häufige Formen**: wofür, wogegen, womit, woran, worauf, worüber, woraus, worin, wovon, wozu.",
            ],
          },
        ],
      },
    ],
    tips: [
      "Bei **Personen** verwendet man **Präposition + Pronomen**: Für **wen** interessierst du dich? – Für **ihn**. (NICHT: wofür / dafür)",
    ],
  },
];

// Partikeln Section
const partikelnGradients = [
  "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
  "linear-gradient(135deg, #4834d4 0%, #686de0 100%)",
  "linear-gradient(135deg, #22a6b3 0%, #7ed6df 100%)",
  "linear-gradient(135deg, #f9ca24 0%, #f0932b 100%)",
];

const partikelnTopics = [
  {
    id: "modalpartikeln",
    number: "1",
    title: "Modalpartikeln",
    category: "Partikeln",
    description: "Gefühle und Einstellungen in der gesprochenen Sprache",
    gradients: partikelnGradients,
    subtopics: [
      {
        id: "part-modal",
        number: "1.1",
        title: "Häufige Partikeln",
        description: "Nuancen in der Konversation",
        content: [
          {
            title: "Beispiele",
            items: [
              "**denn**: Was machst du **denn** hier? (Interesse/Überraschung)",
              "**doch**: Das ist **doch** toll! (Bekräftigung) / Komm **doch** mit! (Aufforderung verstärken)",
              "**mal**: Komm **mal** her. (macht Sätze freundlicher/unverbindlicher)",
              "**ja**: Das weißt du **ja**. (Bekanntes) / Das ist **ja** furchtbar! (Überraschung)",
              "**eigentlich**: Was ist **eigentlich** passiert? (Interesse)",
              "**halt / eben**: Das ist **halt** so. (Resignation, Akzeptanz)",
              "**ruhig**: Du kannst **ruhig** fragen. (Ermutigung)",
              "**schon**: Das wird **schon** klappen. (Zuversicht)",
              "**wohl**: Er ist **wohl** krank. (Vermutung)",
              "**bloß**: Mach das **bloß** nicht! (Warnung, Angst)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "negation",
    number: "2",
    title: "Negation",
    category: "Partikeln",
    description: "Verneinung mit nicht oder kein",
    gradients: partikelnGradients,
    subtopics: [
      {
        id: "part-neg-nicht-kein",
        number: "2.1",
        title: "nicht vs. kein",
        description: "Wann man welche Verneinung nutzt",
        content: [
          {
            title: "Regeln",
            items: [
              "**kein**: Verneint Nomen mit unbestimmtem Artikel oder ohne Artikel (Ich habe **kein** Auto).",
              "**nicht**: Verneint Verben, Adjektive, Adverbien, Nomen mit bestimmtem Artikel (Ich schlafe **nicht**. Das ist **nicht** mein Auto).",
            ],
          },
        ],
      },
      {
        id: "part-neg-position",
        number: "2.2",
        title: "Position von nicht",
        description: "Wo steht nicht im Satz?",
        content: [
          {
            title: "Regeln",
            items: [
              "**Vor** Adjektiven: Das Essen ist **nicht** gut.",
              "**Vor** Adverbien: Er fährt **nicht** schnell.",
              "**Vor** Präpositionalphrasen: Ich fahre **nicht** nach Berlin.",
              "**Am Satzende** (wenn ein Verb verneint wird): Ich schlafe **nicht**.",
              "**Vor** dem zweiten Verbteil: Ich habe das Buch **nicht** gelesen.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fokus-grad",
    number: "3",
    title: "Fokus- & Gradpartikeln",
    category: "Partikeln",
    description: "Hervorhebung und Intensität",
    gradients: partikelnGradients,
    subtopics: [
      {
        id: "part-fokus",
        number: "3.1",
        title: "Fokus",
        description: "Hervorhebung von Satzteilen",
        content: [{ title: "Beispiele", items: ["nur, auch, sogar, selbst, besonders"] }],
      },
      {
        id: "part-grad",
        number: "3.2",
        title: "Grad",
        description: "Intensität ausdrücken",
        content: [
          {
            title: "Beispiele",
            items: ["sehr, ziemlich, total, völlig, etwas, ein bisschen", "kaum, fast"],
          },
        ],
      },
    ],
    tips: [
      "**nur** schränkt ein (Ich habe **nur** 5 Euro), **sogar** verstärkt (Er spricht **sogar** Chinesisch).",
      "Gradpartikeln stehen immer **vor** dem Wort, das sie verstärken: **sehr** gut, **ziemlich** teuer.",
    ],
  },
];

// Export all sections
export const grammarSections: GrammarSection[] = [
  {
    id: "verben",
    title: "Verben",
    icon: "BookOpen",
    topics: verbenTopics,
    gradients: verbenGradients,
  },
  { id: "nomen", title: "Nomen", icon: "FileText", topics: nomenTopics, gradients: nomenGradients },
  {
    id: "praepositionen",
    title: "Präpositionen",
    icon: "Link",
    topics: praepositionenTopics,
    gradients: praepositionenGradients,
  },
  { id: "satz", title: "Satz", icon: "LayoutList", topics: satzTopics, gradients: satzGradients },
  {
    id: "adverbien",
    title: "Adverbien",
    icon: "Clock",
    topics: adverbienTopics,
    gradients: adverbienGradients,
  },
  {
    id: "partikeln",
    title: "Partikeln",
    icon: "MessageCircle",
    topics: partikelnTopics,
    gradients: partikelnGradients,
  },
];
