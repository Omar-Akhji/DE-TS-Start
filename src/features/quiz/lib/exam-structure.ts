import type { Question } from "../model/types.ts";

interface TeilDefinition {
  teil: number;
  title: string;
  instruction: string;
  count: number;
}

/** Standard B1 Lesen structure (5 Teile, 30 questions total) — per official Goethe Modellsatz */
export const B1_LESEN_TEILE: TeilDefinition[] = [
  {
    teil: 1,
    title: "Blog / Artikel",
    instruction:
      "Lesen Sie den Text und die Aufgaben 1 bis 6 dazu. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
    count: 6,
  },
  {
    teil: 2,
    title: "Zeitung / Presse",
    instruction:
      "Lesen Sie die Texte aus der Zeitung und die Aufgaben 7 bis 12 dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
    count: 6,
  },
  {
    teil: 3,
    title: "Anzeigen / Matching",
    instruction:
      "Lesen Sie die Situationen 13 bis 19 und die Anzeigen a bis j. Wählen Sie: Welche Anzeige passt zu welcher Situation? Für eine Situation gibt es keine passende Anzeige. In diesem Fall wählen Sie 0.",
    count: 7,
  },
  {
    teil: 4,
    title: "Diskussion / Meinungen",
    instruction:
      "Lesen Sie die Texte 20 bis 26. Wählen Sie: Ist die Person dafür oder dagegen? Wählen Sie Ja oder Nein.",
    count: 7,
  },
  {
    teil: 5,
    title: "Hausordnung / Regeln",
    instruction:
      "Lesen Sie die Aufgaben 27 bis 30 und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
    count: 4,
  },
];

/** Standard B1 Hören structure (4 Teile, 30 questions total) — per official Goethe Modellsatz */
export const B1_HOEREN_TEILE: TeilDefinition[] = [
  {
    teil: 1,
    title: "Kurze Ansagen",
    instruction:
      "Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.",
    count: 10,
  },

  {
    teil: 2,
    title: "Präsentation",
    instruction:
      "Sie hören nun einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c.",
    count: 5,
  },
  {
    teil: 3,
    title: "Gespräch",
    instruction:
      "Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen Richtig oder Falsch?",
    count: 7,
  },
  {
    teil: 4,
    title: "Diskussion",
    instruction:
      "Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was?",
    count: 8,
  },
];

/**
 * Assigns Teil metadata to a flat array of questions based on the exam structure.
 * The first question of each Teil gets the title and instruction.
 * All questions in the Teil get the teil number.
 */
export function assignTeile(questions: Question[], teile: TeilDefinition[]): Question[] {
  const result: Question[] = [...questions];
  let currentIndex = 0;

  for (const teil of teile) {
    let assignedCount = 0;
    let isFirstInTeil = true;

    while (assignedCount < teil.count && currentIndex < result.length) {
      const q = result.at(currentIndex);
      if (q) {
        q.teil = teil.teil;

        if (isFirstInTeil) {
          q.teilTitle = teil.title;
          q.teilInstruction = teil.instruction;
          isFirstInTeil = false;
        }

        if (q.id !== 0) {
          assignedCount++;
        }
      }
      currentIndex++;
    }
  }
  return result;
}
