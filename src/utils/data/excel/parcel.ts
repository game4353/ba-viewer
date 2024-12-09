import { cache } from "@/utils/misc";
import type {
  CurrencyExcelTable,
  EquipmentExcelTable,
  EquipmentLevelExcelTable,
  EquipmentStatExcelTable,
  FurnitureExcelTable,
  FurnitureGroupExcelTable,
  ItemExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapSingle } from ".";

export const useExcelCurrency = cache(() =>
  useExcelMapSingle<CurrencyExcelTable, "ID">("CurrencyExcelTable", "ID"),
);

export const useExcelEquipment = cache(() =>
  useExcelMapSingle<EquipmentExcelTable, "Id">("EquipmentExcelTable", "Id"),
);

export const useExcelItem = cache(() =>
  useExcelMapSingle<ItemExcelTable, "Id">("ItemExcelTable", "Id"),
);

export const useExcelFurniture = cache(() =>
  useExcelMapSingle<FurnitureExcelTable, "Id">("FurnitureExcelTable", "Id"),
);

export const useExcelFurnitureGroup = cache(() =>
  useExcelMapSingle<FurnitureGroupExcelTable, "Id">(
    "FurnitureGroupExcelTable",
    "Id",
  ),
);

export const useExcelEquipmentLevel = cache(() =>
  useExcelMapSingle<EquipmentLevelExcelTable, "Level">(
    "EquipmentLevelExcelTable",
    "Level",
  ),
);
export const useExcelEquipmentStat = cache(() =>
  useExcelMapSingle<EquipmentStatExcelTable, "EquipmentId">(
    "EquipmentStatExcelTable",
    "EquipmentId",
  ),
);
