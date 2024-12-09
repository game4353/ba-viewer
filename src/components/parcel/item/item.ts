import { useExcelItem } from "@/utils/data/excel/parcel";
import { Local } from "@/utils/localize";
import type { ReadonlyDeep } from "type-fest";
import { ParcelType, type ItemExcel } from "~game/types/flatDataExcel";
import type { IParcel } from "../parcel";

export class CItem implements IParcel {
  type = ParcelType.Item as const;

  constructor(public obj: ReadonlyDeep<ItemExcel>) {}
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
}

export function useItem(id: number) {
  const table = useExcelItem();
  return computed(() =>
    table.value?.andThen((map) => map.getResult(id)).map((c) => new CItem(c)),
  );
}

export function useItemIds() {
  const table = useExcelItem();
  return computed(() => table.value?.map((map) => Array.from(map.keys())));
}
