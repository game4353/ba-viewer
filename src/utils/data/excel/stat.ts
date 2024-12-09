import { cache } from "@/utils/misc";
import type {
  CharacterStatLimitExcelTable,
  CharacterStatsTransExcelTable,
  StatLevelInterpolationExcelTable,
} from "~game/types/flatDataExcel";
import { useExcel, useExcelMapMany, useExcelMapSingle } from ".";

export const useExcelCharacterStatsTrans = cache(() =>
  useExcel<CharacterStatsTransExcelTable>("CharacterStatsTransExcelTable"),
);

export const useExcelStatLevelInterpolation = cache(() =>
  useExcelMapSingle<StatLevelInterpolationExcelTable, "Level">(
    "StatLevelInterpolationExcelTable",
    "Level",
  ),
);

export const useExcelCharacterStatLimit = cache(() =>
  useExcelMapMany<CharacterStatLimitExcelTable, "TacticEntityType">(
    "CharacterStatLimitExcelTable",
    "TacticEntityType",
  ),
);
