import { useExcelEquipment } from "@/utils/data/excel/parcel";
import { Local } from "@/utils/localize";
import type { ReadonlyDeep } from "type-fest";
import { ParcelType, type EquipmentExcel } from "~game/types/flatDataExcel";
import type { IParcel } from "../parcel";

export class CEquipment implements IParcel {
  type = ParcelType.Equipment as const;

  constructor(public obj: ReadonlyDeep<EquipmentExcel>) {}
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

export function useEquipment(id: number) {
  const table = useExcelEquipment();
  return computed(() =>
    table.value
      ?.andThen((map) => map.getResult(id))
      .map((c) => new CEquipment(c)),
  );
}
