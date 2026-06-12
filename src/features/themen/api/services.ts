import { wait } from "../../../shared/lib/wait.ts";
import type { ApiResponse } from "../../../shared/model/api.ts";
import { themenData } from "./data.ts";

const THEMEN_DELAY_MS = Number(process.env["THEMEN_DELAY_MS"] ?? 1200);

export async function getThemen(): Promise<ApiResponse<typeof themenData>> {
  await wait(THEMEN_DELAY_MS);
  return { data: themenData, success: true };
}
