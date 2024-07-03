import type { EquipmentExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/EquipmentExcelTable.json";
import { Localize } from "@/utils/localize";
import type { IParcel } from "./parcel";

const equipmentArr = DataList as EquipmentExcel[];

export class CEquipment implements IParcel {
  type = "Equipment" as const;
  obj: EquipmentExcel;
  constructor(obj: EquipmentExcel) {
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

export const equipmentDict: Partial<Record<string, CEquipment>> =
  Object.fromEntries(equipmentArr.map((v) => [v.Id, new CEquipment(v)]));
