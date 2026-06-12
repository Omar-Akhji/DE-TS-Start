import { wait } from "../../../shared/lib/wait.ts";
import type { ApiResponse } from "../../../shared/model/api.ts";
import type { VocabItem } from "../model/types.ts";
import { vocabList } from "./data.ts";

const LIST_DELAY_MS = Number(process.env["VOCAB_LIST_DELAY_MS"] ?? 800);
const ITEM_DELAY_MS = Number(process.env["VOCAB_ITEM_DELAY_MS"] ?? 1200);

const vocabMap = new Map(vocabList.map((item) => [String(item.id), item]));

export async function getVocabList(): Promise<ApiResponse<VocabItem[]>> {
  await wait(LIST_DELAY_MS);
  return { data: vocabList, success: true };
}

export async function getVocabById(
  id: string | number,
): Promise<ApiResponse<VocabItem | undefined>> {
  const item = vocabMap.get(String(id));
  await wait(ITEM_DELAY_MS);

  return {
    data: item,
    success: Boolean(item),
    message: item ? undefined : `Vocabulary item with id ${id} not found`,
  };
}
