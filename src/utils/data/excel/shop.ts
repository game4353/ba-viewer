import type { GoodsExcelTable } from "~game/types/flatDataExcel";
import { useExcelMapSingle } from ".";
import { cache } from "@/util";

export const useExcelGoods = cache(() =>
  useExcelMapSingle<GoodsExcelTable, "Id">("GoodsExcelTable", "Id"),
);
