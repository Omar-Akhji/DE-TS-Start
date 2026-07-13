import type { ApiResponse } from "../../../shared/model/api.ts";
import type { Question } from "../model/types.ts";
import { quizQuestions } from "./data.ts";

export const getQuestions = (
  level: string,
  skill: string,
  testId: number,
): Promise<ApiResponse<Question[]>> => {
  const lvl = quizQuestions.get(level.toLowerCase());
  const skl = lvl?.get(skill.toLowerCase());
  const data = skl?.get(testId) ?? [];

  return Promise.resolve({ data, success: true });
};
