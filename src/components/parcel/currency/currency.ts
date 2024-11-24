import { useExcelCurrency } from "@/utils/data/excel/parcel";
import { Local } from "@/utils/localize";
import type { ReadonlyDeep } from "type-fest";
import { ParcelType, type CurrencyExcel } from "~game/types/flatDataExcel";
import type { IParcel } from "../parcel";

export class CCurrency implements IParcel {
  type = ParcelType.Currency as const;

  constructor(public obj: ReadonlyDeep<CurrencyExcel>) {}
  get desc() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId, true);
  }
  get iconPath() {
    return this.obj.Icon;
  }
  get id() {
    return this.obj.ID;
  }
  get name() {
    return Local.useLocalizeEtc(this.obj.LocalizeEtcId);
  }
  get rarity() {
    return this.obj.Rarity;
  }
}

export function useCurrency(id: number) {
  const table = useExcelCurrency();
  return computed(() =>
    table.value
      ?.andThen((map) => map.getResult(id))
      .map((c) => new CCurrency(c)),
  );
}
