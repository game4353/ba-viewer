import { cache } from "@/util";
import type {
  GuideMissionExcelTable,
  GuideMissionSeasonExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapMany, useExcelMapSingle } from ".";

export const useExcelGuideMission = cache(() =>
  useExcelMapMany<GuideMissionExcelTable, "SeasonId">(
    "GuideMissionExcelTable",
    "SeasonId",
  ),
);

export const useExcelGuideMissionSeason = cache(() =>
  useExcelMapSingle<GuideMissionSeasonExcelTable, "Id">(
    "GuideMissionSeasonExcelTable",
    "Id",
  ),
);
