export interface Question {
  id: number;
  question: string;
  options?: string[];
  correctAnswer: string | string[]; // string for single choice, string[] for drag-drop
  type?: "multiple-choice" | "drag-drop" | "fill-gap" | "matching";
  context?: string;
  gapText?: string;
  /** Which Teil this question belongs to (e.g. 1, 2, 3, 4, 5) */
  teil?: number;
  /** Display title for the Teil (e.g. "Teil 1 – Richtig oder Falsch") */

  teilTitle?: string;
  /** Exam instruction for the Teil (e.g. "Lesen Sie den Text und die Aufgaben 1 bis 6...") */
  teilInstruction?: string;
  /** URL for audio playback in listening tasks */
  audioUrl?: string;
}

export type QuizData = Map<string, Map<string, Map<number, Question[]>>>;
