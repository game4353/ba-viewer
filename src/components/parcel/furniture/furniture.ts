import { useExcelFurniture } from "@/utils/data/excel/parcel";
import { Local } from "@/utils/localize";
import { fail, toEnum } from "@/utils/misc";
import type { ReadonlyDeep } from "type-fest";
import { toHiragana, toKatakana } from "wanakana";
import {
  FurnitureCategory,
  FurnitureSubCategory,
  ParcelType,
  Rarity,
  type FurnitureExcel,
} from "~game/types/flatDataExcel";
import type { IParcel } from "../parcel";
import type { CTag, IFilterable } from "../tag";
import { furnitureInteract } from "./interact";
import { furnitureGroupDict, type CFurnitureGroup } from "./series";
import {
  FurnitureTagCategoryGroup,
  FurnitureTagInteractionGroup,
  FurnitureTagRarityGroup,
  FurnitureTagSubCategoryGroup,
} from "./tag";

export class CFurniture implements IFilterable, IParcel {
  type = ParcelType.Furniture as const;

  group?: CFurnitureGroup;
  search: globalThis.ComputedRef<string[]>;
  tags: CTag<Object>[];
  hideCount: number = 0;
  constructor(public obj: ReadonlyDeep<FurnitureExcel>) {
    this.group = furnitureGroupDict[this.obj.SetGroudpId];
    this.search = computed(() => {
      const name = this.name.value?.unwrapOrElse(fail);
      if (name == null) return [];
      return [toHiragana(name), toKatakana(name)];
    });
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
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId, true);
  }
  get iconPath() {
    return this.obj.Icon;
  }
  get id() {
    return this.obj.Id;
  }
  get name() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId);
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

export function useFurniture(id: number) {
  const table = useExcelFurniture();
  return computed(() =>
    table.value
      ?.andThen((map) => map.getResult(id))
      .map((c) => new CFurniture(c)),
  );
}

export function useFurnitureIds() {
  const table = useExcelFurniture();
  return computed(() => table.value?.map((map) => Array.from(map.keys())));
}
