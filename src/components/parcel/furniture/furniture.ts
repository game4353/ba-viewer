import { useExcelFurniture } from "@/utils/data/excel/parcel";
import { isDefined } from "@/utils/misc";
import type { ComputedResult, Result } from "@/utils/result/result";
import type { ReadonlyDeep } from "type-fest";
import { toHiragana, toKatakana } from "wanakana";
import { ParcelType, type FurnitureExcel } from "~game/types/flatDataExcel";
import { AFilterableParcel, type CTag } from "../tag";
import { useFurnitureInteract } from "./interact";
import { useFurnitureGroup, type CFurnitureGroup } from "./series";
import {
  FurnitureTagCategoryGroup,
  FurnitureTagInteractionGroup,
  FurnitureTagRarityGroup,
  FurnitureTagSubCategoryGroup,
} from "./tag";

export class CFurniture extends AFilterableParcel<
  ReadonlyDeep<FurnitureExcel>
> {
  type = ParcelType.Furniture as const;

  group: globalThis.ComputedRef<Result<CFurnitureGroup, Error> | undefined>;
  search: ComputedResult<string[], Error>;
  tags: CTag<Object>[];
  constructor(public obj: ReadonlyDeep<FurnitureExcel>) {
    super(obj);
    this.group = useFurnitureGroup(this.obj.SetGroudpId);
    this.search = computed(() =>
      this.name.value.map((name) => [toHiragana(name), toKatakana(name)]),
    );
    this.tags = [
      FurnitureTagInteractionGroup.getTag(this.isInteractive),
      FurnitureTagRarityGroup.getTag(obj.Rarity),
      FurnitureTagCategoryGroup.getTag(obj.Category),
      FurnitureTagSubCategoryGroup.getTag(obj.SubCategory),
    ].filter(isDefined);
    this.initTags();
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
    return useFurnitureInteract(type, this.obj);
  }
  get isInteractive() {
    return this.getInteract("All").length > 0;
  }
}

export function useFurniture(id: number) {
  const table = useExcelFurniture();
  return computed(() =>
    table.value
      .andThen((map) => map.getResult(id))
      .map((c) => new CFurniture(c)),
  );
}

export function useFurnitureIds() {
  const table = useExcelFurniture();
  return computed(() => table.value.map((map) => Array.from(map.keys())));
}
