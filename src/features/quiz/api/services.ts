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

/** Generate static params for all quiz routes without leaking raw data */
export const getQuizStaticParams = (): { level: string; skill: string; testId: string }[] => {
  const parameters: { level: string; skill: string; testId: string }[] = [];

  for (const [level, lvlData] of quizQuestions.entries()) {
    for (const [skill, skillData] of lvlData.entries()) {
      for (const testId of skillData.keys()) {
        parameters.push({ level, skill, testId: String(testId) });
      }
    }
  }

  return parameters;
};
