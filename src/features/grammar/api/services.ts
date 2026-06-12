import { wait } from "../../../shared/lib/wait.ts";
import type { ApiResponse } from "../../../shared/model/api.ts";
import type { GrammarSection, GrammarTopic } from "../model/types.ts";
import { grammarSections } from "./data.ts";

const SECTIONS_DELAY_MS = Number(process.env["GRAMMAR_SECTIONS_DELAY_MS"] ?? 800);
const SECTION_DELAY_MS = Number(process.env["GRAMMAR_SECTION_DELAY_MS"] ?? 1000);

const grammarMap = new Map(grammarSections.map((s) => [s.id, s]));

export async function getGrammarSections(): Promise<ApiResponse<GrammarSection[]>> {
  await wait(SECTIONS_DELAY_MS);
  return { data: grammarSections, success: true };
}

export async function getGrammarSection(
  sectionId: string,
): Promise<ApiResponse<GrammarSection | undefined>> {
  const section = grammarMap.get(sectionId);
  await wait(SECTION_DELAY_MS);
  return {
    data: section,
    success: Boolean(section),
    message: section ? undefined : `Grammar section ${sectionId} not found`,
  };
}

export async function getGrammarTopic(
  sectionId: string,
  topicId: string,
): Promise<ApiResponse<GrammarTopic | undefined>> {
  const sectionResponse = await getGrammarSection(sectionId);
  if (!sectionResponse.success) {
    return { data: undefined, success: false, message: sectionResponse.message };
  }

  const section = sectionResponse.data;
  const topic = section?.topics.find((t) => t.id === topicId);

  return {
    data: topic,
    success: Boolean(topic),
    message: topic ? undefined : `Grammar topic ${topicId} not found`,
  };
}
