import { assignTeile, B1_HOEREN_TEILE } from "../lib/exam-structure.ts";
import type { Question } from "../model/types.ts";

export const b1Hoeren7: Question[] = assignTeile(
  [
    {
      id: 26,
      type: "multiple-choice",
      question: "Hören Modelltest 7 (Bitte Audio & Text extrahieren)",
      context: `...`,
      options: ["Richtig", "Falsch"],
      correctAnswer: "Richtig",
      teil: 1,
    },
  ],
  B1_HOEREN_TEILE,
);
