import { cache } from "@/utils/misc";
import type { GoodsExcelTable } from "~game/types/flatDataExcel";
import { useExcelMapSingle } from ".";

export const useExcelGoods = cache(() =>
  useExcelMapSingle<GoodsExcelTable, "Id">("GoodsExcelTable", "Id"),
);
