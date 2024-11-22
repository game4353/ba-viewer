import type {
  CurrencyExcelTable,
  EquipmentExcelTable,
  FurnitureExcelTable,
  ItemExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapSingle } from ".";
import { cache } from "@/util";

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
