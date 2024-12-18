import { AParcel } from "@/components/parcel/class";
import { useExcelItem } from "@/utils/data/excel/parcel";
import type { ReadonlyDeep } from "type-fest";
import { ParcelType, type ItemExcel } from "~game/types/flatDataExcel";

export class CItem extends AParcel<ReadonlyDeep<ItemExcel>> {
  type = ParcelType.Item as const;
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
