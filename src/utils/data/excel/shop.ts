import { cache } from "@/utils/misc";
import type {
  GoodsExcelTable,
  ShopExcelTable,
  ShopRecruitExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapSingle } from ".";

export const useExcelGoods = cache(() =>
  useExcelMapSingle<GoodsExcelTable, "Id">("GoodsExcelTable", "Id"),
);

export const useExcelShop = cache(() =>
  useExcelMapSingle<ShopExcelTable, "Id">("ShopExcelTable", "Id"),
);

export const useExcelShopRecruit = cache(() =>
  useExcelMapSingle<ShopRecruitExcelTable, "Id">("ShopRecruitExcelTable", "Id"),
);
