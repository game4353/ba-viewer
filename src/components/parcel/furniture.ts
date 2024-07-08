import type {
  CafeInteractionExcel,
  FurnitureExcel,
  FurnitureGroupExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/FurnitureExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/FurnitureGroupExcelTable.json";
// @ts-ignore
import { DataList as d3 } from "~game/excel/CafeInteractionExcelTable.json";
import { Localize } from "@/utils/localize";
import type { IParcel } from "./parcel";
import { unreachable } from "@/utils/misc";

const furnitureArr = d1 as FurnitureExcel[];
const furnitureGroupArr = d2 as FurnitureGroupExcel[];
const cafeInteractionArr = d3 as CafeInteractionExcel[];
const cafeInteractionDict: Partial<Record<string, number>> = Object.fromEntries(
  cafeInteractionArr
    .map((v) => v.CafeCharacterState.map((i) => [i, v.CharacterId]))
    .flat(),
);
function getInteractCid(key: string) {
  const cid = cafeInteractionDict[key];
  if (cid == null) unreachable(`Unknown cafe interaction key: ${key}`);
  return cid;
}

class CFurnitureGroup {
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

const furnitureGroupDict: Partial<Record<string, CFurnitureGroup>> =
  Object.fromEntries(
    furnitureGroupArr.map((v) => [v.Id, new CFurnitureGroup(v)]),
  );

export class CFurniture implements IParcel {
  type = "Furniture" as const;
  obj: FurnitureExcel;
  group?: CFurnitureGroup;
  constructor(obj: FurnitureExcel) {
    this.obj = obj;
    this.group = furnitureGroupDict[this.obj.SetGroudpId];
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
  get interactReq() {
    return this.obj.CafeCharacterStateReq.map(getInteractCid);
  }
  get interactAdd() {
    return this.obj.CafeCharacterStateAdd.map(getInteractCid);
  }
  get interactMake() {
    return this.obj.CafeCharacterStateMake.map(getInteractCid);
  }
  get interactOnly() {
    return this.obj.CafeCharacterStateOnly.map(getInteractCid);
  }
  getInteract(type: "Req" | "Add" | "Make" | "Only" | "All") {
    switch (type) {
      case "Req":
        return this.interactReq;
      case "Add":
        return this.interactAdd;
      case "Make":
        return this.interactMake;
      case "Only":
        return this.interactOnly;
      default:
        return [
          ...this.interactReq,
          ...this.interactAdd,
          ...this.interactMake,
          ...this.interactOnly,
        ];
    }
  }
}

export const furnitureDict: Partial<Record<string, CFurniture>> =
  Object.fromEntries(furnitureArr.map((v) => [v.Id, new CFurniture(v)]));
