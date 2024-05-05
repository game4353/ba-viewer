import assert from "assert";
import type { GoodsExcel } from "../type.js";
import { Parcel } from "../parcel/index.js";
import { Excel } from "../../util.js";

export function getGoods(): GoodsExcel[] {
  return Excel.table("GoodsExcel");
}

export function goodObj(id: number) {
  const good = getGoods().find((x) => x.Id === id);
  assert(good != null);

  const cost = good.ConsumeParcelAmount.map((v, i) => ({
    obj: Parcel.convert(good.ConsumeParcelType[i], good.ConsumeParcelId[i]),
    amount: v,
  }));

  const gain = good.ParcelAmount.map((v, i) => ({
    obj: Parcel.convert(good.ParcelType[i], good.ParcelId[i]),
    amount: v,
  }));

  return {
    cost,
    gain,
  };
}
