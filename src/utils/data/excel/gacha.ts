import type {
  GachaGroupExcelTable,
  GachaElementRecursiveExcelTable,
  GachaElementExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapMany, useExcelMapSingle } from ".";

export const useExcelGachaGroup = () =>
  useExcelMapSingle<GachaGroupExcelTable, "ID">("GachaGroupExcelTable", "ID");

export const useExcelGachaElementRecursive = () =>
  useExcelMapMany<GachaElementRecursiveExcelTable, "GachaGroupID">(
    "GachaElementRecursiveExcelTable",
    "GachaGroupID",
  );

export const useExcelGachaElement = () =>
  useExcelMapMany<GachaElementExcelTable, "GachaGroupID">(
    "GachaElementExcelTable",
    "GachaGroupID",
  );
