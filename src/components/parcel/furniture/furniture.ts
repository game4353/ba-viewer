import {
  FurnitureCategory,
  FurnitureSubCategory,
  Rarity,
  type FurnitureExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/FurnitureExcelTable.json";
import { Localize } from "@/utils/localize";
import type { IParcel } from "../parcel";
import { toHiragana, toKatakana } from "wanakana";
import { furnitureGroupDict, type CFurnitureGroup } from "./series";
import { furnitureInteract } from "./interact";
import type { CTag, IFilterable } from "../tag";
import {
  FurnitureTagCategoryGroup,
  FurnitureTagInteractionGroup,
  FurnitureTagRarityGroup,
  FurnitureTagSubCategoryGroup,
} from "./tag";
import { toEnum } from "@/utils/misc";

const furnitureArr = d1 as FurnitureExcel[];

export class CFurniture implements IFilterable, IParcel {
  type = "Furniture" as const;
  obj: FurnitureExcel;
  group?: CFurnitureGroup;
  name: string;
  search: string[];
  tags: CTag<Object>[];
  hideCount: number = 0;
  constructor(obj: FurnitureExcel) {
    this.obj = obj;
    this.group = furnitureGroupDict[this.obj.SetGroudpId];
    this.name = Localize.etc(this.obj.LocalizeEtcId, "name");
    this.search = [toHiragana(this.name), toKatakana(this.name)];
    this.tags = [
      FurnitureTagInteractionGroup.getTag(this.isInteractive),
      FurnitureTagRarityGroup.getTag(toEnum(Rarity, obj.Rarity)),
      FurnitureTagCategoryGroup.getTag(toEnum(FurnitureCategory, obj.Category)),
      FurnitureTagSubCategoryGroup.getTag(
        toEnum(FurnitureSubCategory, obj.SubCategory),
      ),
    ];
    this.tags.forEach((v) => v.add(this));
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
  get rarity() {
    return this.obj.Rarity;
  }
  get category() {
    return this.obj.Category;
  }
  get interactReq() {
    return this.getInteract("Req");
  }
  get interactAdd() {
    return this.getInteract("Add");
  }
  get interactMake() {
    return this.getInteract("Make");
  }
  get interactOnly() {
    return this.getInteract("Only");
  }
  getInteract(type: "Req" | "Add" | "Make" | "Only" | "All") {
    return furnitureInteract(type, this.obj);
  }
  get isInteractive() {
    return this.getInteract("All").length > 0;
  }
}

export const furnitureDict: Partial<Record<string, CFurniture>> =
  Object.fromEntries(furnitureArr.map((v) => [v.Id, new CFurniture(v)]));
