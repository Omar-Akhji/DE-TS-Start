import type { ExamLevel, RedemittelData } from "../model/types.ts";
import { examLevelB1, redemittelB1 } from "./data-b1.ts";
import { examLevelB2, redemittelB2 } from "./data-b2.ts";

export const examLevels: ExamLevel[] = [examLevelB1, examLevelB2];

export const redemittelData: RedemittelData = { b1: redemittelB1, b2: redemittelB2 };
