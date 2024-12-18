import { AParcel } from "@/components/parcel/class";
import { useExcelCurrency } from "@/utils/data/excel/parcel";
import type { ReadonlyDeep } from "type-fest";
import { ParcelType, type CurrencyExcel } from "~game/types/flatDataExcel";

export class CCurrency extends AParcel<ReadonlyDeep<CurrencyExcel>> {
  type = ParcelType.Currency as const;
}

export function useCurrency(id: number) {
  const table = useExcelCurrency();
  return computed(() =>
    table.value
      ?.andThen((map) => map.getResult(id))
      .map((c) => new CCurrency(c)),
  );
}
