import { cache } from "@/utils/misc";
import type {
  RaidSeasonManageExcelTable,
  RaidStageExcelTable,
} from "~game/types/flatDataExcel";
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
