import type {
  GachaGroupExcelTable,
  GachaElementRecursiveExcelTable,
  GachaElementExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapMany, useExcelMapSingle } from ".";

export const useExcelGachaGroup = () =>
  useExcelMapSingle<GachaGroupExcelTable>("GachaGroupExcelTable", "ID");

export const useExcelGachaElementRecursive = () =>
  useExcelMapMany<GachaElementRecursiveExcelTable>(
    "GachaElementRecursiveExcelTable",
    "GachaGroupID",
  );

export const useExcelGachaElement = () =>
  useExcelMapMany<GachaElementExcelTable>(
    "GachaElementExcelTable",
    "GachaGroupID",
  );
