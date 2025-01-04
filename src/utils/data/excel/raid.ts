import { cache } from "@/utils/misc";
import type {
  EliminateRaidSeasonManageExcelTable,
  EliminateRaidStageExcelTable,
  RaidSeasonManageExcelTable,
  RaidStageExcelTable,
} from "~game/excelType";
import { useExcelMapMany, useExcelMapSingle } from ".";

export const useExcelRaidSeasonManage = cache(() =>
  useExcelMapSingle<RaidSeasonManageExcelTable, "SeasonId">(
    "RaidSeasonManageExcelTable",
    "SeasonId",
  ),
);

export const useExcelRaidStage = cache(() =>
  useExcelMapMany<RaidStageExcelTable, "RaidBossGroup">(
    "RaidStageExcelTable",
    "RaidBossGroup",
  ),
);

export const useExcelEliminateRaidSeasonManage = cache(() =>
  useExcelMapSingle<EliminateRaidSeasonManageExcelTable, "SeasonId">(
    "EliminateRaidSeasonManageExcelTable",
    "SeasonId",
  ),
);

export const useExcelEliminateRaidStage = cache(() =>
  useExcelMapMany<EliminateRaidStageExcelTable, "RaidBossGroup">(
    "EliminateRaidStageExcelTable",
    "RaidBossGroup",
  ),
);
