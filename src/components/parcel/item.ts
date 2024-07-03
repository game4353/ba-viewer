import type { ItemExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/ItemExcelTable.json";
import { Localize } from "@/utils/localize";
import type { IParcel } from "./parcel";

export const itemArr = DataList as ItemExcel[];

export class CItem implements IParcel {
  type = "Item" as const;
  obj: ItemExcel;
  constructor(obj: ItemExcel) {
    this.obj = obj;
  }
  get desc() {
    return Localize.etc(this.obj.LocalizeEtcId, "desc");
  }
  get iconPath() {
    return this.obj.Icon;
  }
  get id() {
    return this.obj.Id;
  }
  get name() {
    return Localize.etc(this.obj.LocalizeEtcId, "name");
  }
  get rarity() {
    return this.obj.Rarity;
  }
}

export const itemDict: Partial<Record<string, CItem>> = Object.fromEntries(
  itemArr.map((v) => [v.Id, new CItem(v)]),
);
