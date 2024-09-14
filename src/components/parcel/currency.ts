import type { CurrencyExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/CurrencyExcelTable.json";
import { Localize } from "@/utils/localize";
import type { IParcel } from "./parcel";

const currencyArr = DataList as CurrencyExcel[];

export class CCurrency implements IParcel {
  type = "Currency" as const;
  obj: CurrencyExcel;
  constructor(obj: CurrencyExcel) {
    this.obj = obj;
  }
  get desc() {
    return Localize.etc(this.obj.LocalizeEtcId, "desc");
  }
  get iconPath() {
    return this.obj.Icon;
  }
  get id() {
    return this.obj.ID;
  }
  get name() {
    return Localize.etc(this.obj.LocalizeEtcId, "name");
  }
  get rarity() {
    return this.obj.Rarity;
  }
}

export const currencyDict: Partial<Record<string, CCurrency>> =
  Object.fromEntries(currencyArr.map((v) => [v.ID, new CCurrency(v)]));
