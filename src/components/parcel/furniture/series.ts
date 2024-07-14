import type { FurnitureGroupExcel } from "~game/types/flatDataExcel";
import { Localize } from "@/utils/localize";
// @ts-ignore
import { DataList } from "~game/excel/FurnitureGroupExcelTable.json";

const furnitureGroupArr = DataList as FurnitureGroupExcel[];

export class CFurnitureGroup {
  obj: FurnitureGroupExcel;
  constructor(obj: FurnitureGroupExcel) {
    this.obj = obj;
  }
  get groupDesc() {
    return Localize.etc(this.obj.GroupNameLocalize, "desc");
  }
  get groupName() {
    return Localize.etc(this.obj.GroupNameLocalize, "name");
  }
  get id() {
    return this.obj.Id;
  }
  get name() {
    return Localize.etc(this.obj.LocalizeEtcId, "name");
  }
}

export const furnitureGroupDict: Partial<Record<string, CFurnitureGroup>> =
  Object.fromEntries(
    furnitureGroupArr.map((v) => [v.Id, new CFurnitureGroup(v)]),
  );
