import type {
  GachaGroupExcelTable,
  GachaElementRecursiveExcelTable,
  GachaElementExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapMany, useExcelMapSingle } from ".";
import { cache } from "@/util";

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
