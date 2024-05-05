import { goodObj } from "../goods/index.js";
import type {
  EventContentSeasonExcel,
  EventContentShopExcel,
} from "../type.js";
import { Localize } from "../localize/index.js";
import type { TidyParcelItem } from "../parcel/index.js";
import { Excel, fatal } from "../../util.js";

export function getEventContentSeason(): EventContentSeasonExcel[] {
  return Excel.table("EventContentSeasonExcel");
}

export function getEventContentShop(): EventContentShopExcel[] {
  return Excel.table("EventContentShopExcel");
}

export type TidyEventShop = {
  name: string;
  goods: Array<{
    cost: Array<{
      obj: TidyParcelItem;
      amount: number;
    }>;
    gain: Array<{
      obj: TidyParcelItem;
      amount: number;
    }>;
  }>;
  amount: number;
};

export function tidyEventShop() {
  const output: Record<number, Record<string, TidyEventShop[]>> = {};
  getEventContentShop().forEach((o) => {
    const id = o.EventContentId;
    if (!(id in output)) output[id] = {};
    const type = o.CategoryType.toString();
    if (!(type in output[id])) output[id][type] = [];
    output[id][type].push({
      name:
        Localize.transEtc(o.LocalizeEtcId)?.NameJp ??
        fatal(`Unknown localize etc id: ${o.LocalizeEtcId}`),
      goods: o.GoodsId.map(goodObj),
      amount: o.PurchaseCountLimit,
    });
  });
  return output;
}
