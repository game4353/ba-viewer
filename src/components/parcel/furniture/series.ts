import { useExcelFurnitureGroup } from "@/utils/data/excel/parcel";
import { Local } from "@/utils/i18n/localize";
import type { ReadonlyDeep } from "type-fest";
import type { FurnitureGroupExcel } from "~game/types/flatDataExcel";

export class CFurnitureGroup {
  constructor(public obj: ReadonlyDeep<FurnitureGroupExcel>) {}
  get groupDesc() {
    return Local.useLocalizeEtc(this.obj.GroupNameLocalize, true);
  }
  get groupName() {
    return Local.useLocalizeEtc(this.obj.GroupNameLocalize);
  }
  get id() {
    return this.obj.Id;
  }
  get name() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId);
  }
}

export function useFurnitureGroup(id: number) {
  const table = useExcelFurnitureGroup();
  return computed(() =>
    table.value
      ?.andThen((map) => map.getResult(id))
      .map((c) => new CFurnitureGroup(c)),
  );
}
