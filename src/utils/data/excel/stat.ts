import { cache } from "@/utils/misc";
import type {
  CharacterStatLimitExcelTable,
  CharacterStatsTransExcelTable,
  StatLevelInterpolationExcel,
} from "~game/excelType";
import { useExcel, useExcelDbMapSingle, useExcelMapMany } from ".";

export const useExcelCharacterStatsTrans = cache(() =>
  useExcel<CharacterStatsTransExcelTable>("CharacterStatsTransExcelTable"),
);

export const useExcelStatLevelInterpolation = cache(() =>
  useExcelDbMapSingle<StatLevelInterpolationExcel, "Level">(
    "StatLevelInterpolation",
    "Level",
  ),
);

export const useExcelCharacterStatLimit = cache(() =>
  useExcelMapMany<CharacterStatLimitExcelTable, "TacticEntityType">(
    "CharacterStatLimitExcelTable",
    "TacticEntityType",
  ),
);
