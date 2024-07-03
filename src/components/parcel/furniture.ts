import type { FurnitureExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/FurnitureExcelTable.json";
import { Localize } from "@/utils/localize";
import type { IParcel } from "./parcel";

const furnitureArr = DataList as FurnitureExcel[];

export class CFurniture implements IParcel {
  type = "Furniture" as const;
  obj: FurnitureExcel;
  constructor(obj: FurnitureExcel) {
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
  get category() {
    return this.obj.Category;
  }
}

export const furnitureDict: Partial<Record<string, CFurniture>> =
  Object.fromEntries(furnitureArr.map((v) => [v.Id, new CFurniture(v)]));
