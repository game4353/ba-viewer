import { cache } from "@/utils/misc";
import type {
  EliminateRaidSeasonManageExcelTable,
  EliminateRaidStageExcelTable,
  GroundExcel,
  RaidSeasonManageExcelTable,
  RaidStageExcelTable,
} from "~game/excelType";
import { useExcelDbMapSingle, useExcelMapMany, useExcelMapSingle } from ".";

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

export const useExcelGround = cache(() =>
  useExcelDbMapSingle<GroundExcel, "Id">("Ground", "Id"),
);
