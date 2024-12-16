import { cache } from "@/utils/misc";
import type {
  GroundExcelTable,
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

export const useExcelGround = cache(() =>
  useExcelMapSingle<GroundExcelTable, "Id">("GroundExcelTable", "Id"),
);
