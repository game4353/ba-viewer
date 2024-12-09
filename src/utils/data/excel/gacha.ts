import { cache } from "@/utils/misc";
import type {
  GachaElementExcelTable,
  GachaElementRecursiveExcelTable,
  GachaGroupExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapMany, useExcelMapSingle } from ".";

export const useExcelGachaGroup = cache(() =>
  useExcelMapSingle<GachaGroupExcelTable, "ID">("GachaGroupExcelTable", "ID"),
);

export const useExcelGachaElementRecursive = cache(() =>
  useExcelMapMany<GachaElementRecursiveExcelTable, "GachaGroupID">(
    "GachaElementRecursiveExcelTable",
    "GachaGroupID",
  ),
);

export const useExcelGachaElement = cache(() =>
  useExcelMapMany<GachaElementExcelTable, "GachaGroupID">(
    "GachaElementExcelTable",
    "GachaGroupID",
  ),
);
