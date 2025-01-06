import { cache } from "@/utils/misc";
import type {
  CampaignChapterExcelTable,
  CampaignChapterRewardExcelTable,
  CampaignStageExcelTable,
  CampaignStageRewardExcelTable,
  CampaignStrategyObjectExcelTable,
  CampaignUnitExcelTable,
  GroundExcel,
  GroundModuleRewardExcel,
  SchoolDungeonRewardExcel,
  SchoolDungeonStageExcel,
  TimeAttackDungeonExcelTable,
  TimeAttackDungeonGeasExcelTable,
  TimeAttackDungeonRewardExcelTable,
  TimeAttackDungeonSeasonManageExcelTable,
  WeekDungeonExcelTable,
  WeekDungeonRewardExcelTable,
} from "~game/excelType";
import {
  useExcelDbMapMany,
  useExcelDbMapSingle,
  useExcelMapMany,
  useExcelMapSingle,
} from ".";

export const useExcelGround = cache(() =>
  useExcelDbMapSingle<GroundExcel, "Id">("Ground", "Id"),
);

export const useExcelGroundModuleReward = cache(() =>
  useExcelDbMapMany<GroundModuleRewardExcel, "GroupId">(
    "GroundModuleReward",
    "GroupId",
  ),
);

export const useExcelSchoolDungeonStage = cache(() =>
  useExcelDbMapSingle<SchoolDungeonStageExcel, "StageId">(
    "SchoolDungeonStage",
    "StageId",
  ),
);

export const useExcelSchoolDungeonReward = cache(() =>
  useExcelDbMapMany<SchoolDungeonRewardExcel, "GroupId">(
    "SchoolDungeonReward",
    "GroupId",
  ),
);

export const useExcelCampaignStage = cache(() =>
  useExcelMapSingle<CampaignStageExcelTable, "Id">(
    "CampaignStageExcelTable",
    "Id",
  ),
);

export const useExcelCampaignStageReward = cache(() =>
  useExcelMapMany<CampaignStageRewardExcelTable, "GroupId">(
    "CampaignStageRewardExcelTable",
    "GroupId",
  ),
);

export const useExcelCampaignUnit = cache(() =>
  useExcelMapSingle<CampaignUnitExcelTable, "Id">(
    "CampaignUnitExcelTable",
    "Id",
  ),
);

export const useExcelCampaignStrategyObject = cache(() =>
  useExcelMapSingle<CampaignStrategyObjectExcelTable, "Id">(
    "CampaignStrategyObjectExcelTable",
    "Id",
  ),
);

export const useExcelCampaignChapter = cache(() =>
  useExcelMapSingle<CampaignChapterExcelTable, "Id">(
    "CampaignChapterExcelTable",
    "Id",
  ),
);

export const useExcelCampaignChapterReward = cache(() =>
  useExcelMapSingle<CampaignChapterRewardExcelTable, "Id">(
    "CampaignChapterRewardExcelTable",
    "Id",
  ),
);

export const useExcelWeekDungeon = cache(() =>
  useExcelMapSingle<WeekDungeonExcelTable, "StageId">(
    "WeekDungeonExcelTable",
    "StageId",
  ),
);

export const useExcelWeekDungeonReward = cache(() =>
  useExcelMapMany<WeekDungeonRewardExcelTable, "GroupId">(
    "WeekDungeonRewardExcelTable",
    "GroupId",
  ),
);

export const useExcelTimeAttackDungeon = cache(() =>
  useExcelMapSingle<TimeAttackDungeonExcelTable, "Id">(
    "TimeAttackDungeonExcelTable",
    "Id",
  ),
);

export const useExcelTimeAttackDungeonGeas = cache(() =>
  useExcelMapSingle<TimeAttackDungeonGeasExcelTable, "Id">(
    "TimeAttackDungeonGeasExcelTable",
    "Id",
  ),
);

export const useExcelTimeAttackDungeonReward = cache(() =>
  useExcelMapSingle<TimeAttackDungeonRewardExcelTable, "Id">(
    "TimeAttackDungeonRewardExcelTable",
    "Id",
  ),
);

export const useExcelTimeAttackDungeonSeasonManage = cache(() =>
  useExcelMapSingle<TimeAttackDungeonSeasonManageExcelTable, "Id">(
    "TimeAttackDungeonSeasonManageExcelTable",
    "Id",
  ),
);
