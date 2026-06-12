import { assignTeile, B1_HOEREN_TEILE } from "../lib/exam-structure.ts";
import type { Question } from "../model/types.ts";

export const b1Hoeren8: Question[] = assignTeile(
  [
    {
      id: 30,
      type: "multiple-choice",
      question: "Hören Modelltest 8 (Bitte Audio & Text extrahieren)",
      context: `## Teil 1 ...`,
      options: ["Richtig", "Falsch"],
      correctAnswer: "Richtig",
      teil: 1,
    },
  ],
  B1_HOEREN_TEILE,
);
