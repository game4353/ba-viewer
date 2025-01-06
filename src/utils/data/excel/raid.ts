import { cache } from "@/utils/misc";
import type {
  EliminateRaidSeasonManageExcelTable,
  EliminateRaidStageExcelTable,
  MultiFloorRaidRewardExcel,
  MultiFloorRaidSeasonManageExcel,
  MultiFloorRaidStageExcel,
  MultiFloorRaidStatChangeExcel,
  RaidSeasonManageExcelTable,
  RaidStageExcelTable,
} from "~game/excelType";
import {
  useExcelDbMapMany,
  useExcelDbMapSingle,
  useExcelMapMany,
  useExcelMapSingle,
} from ".";

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

export const useExcelMultiFloorRaidSeasonManage = cache(() =>
  useExcelDbMapSingle<MultiFloorRaidSeasonManageExcel, "SeasonId">(
    "MultiFloorRaidSeasonManage",
    "SeasonId",
  ),
);

export const useExcelMultiFloorRaidStage = cache(() =>
  useExcelDbMapMany<MultiFloorRaidStageExcel, "BossGroupId">(
    "MultiFloorRaidStage",
    "BossGroupId",
  ),
);

export const useExcelMultiFloorRaidStatChange = cache(() =>
  useExcelDbMapSingle<MultiFloorRaidStatChangeExcel, "StatChangeId">(
    "MultiFloorRaidStatChange",
    "StatChangeId",
  ),
);

export const useExcelMultiFloorRaidReward = cache(() =>
  useExcelDbMapMany<MultiFloorRaidRewardExcel, "RewardGroupId">(
    "MultiFloorRaidReward",
    "RewardGroupId",
  ),
);
