import { useExcelEmblem } from "@/utils/data/excel/parcel";
import { asResult } from "@/utils/result";
import type { ReadonlyDeep } from "type-fest";
import { ParcelType, type EmblemExcel } from "~game/types/flatDataExcel";
import { AParcel } from "../class";

export class CEmblem extends AParcel<ReadonlyDeep<EmblemExcel>> {
  type = ParcelType.Emblem as const;

  get iconPath() {
    return this.obj.IconPath;
  }
}

export function useEmblem(id: number) {
  return asResult(
    useExcelEmblem()
      .value.andThen((map) => map.getResult(id))
      .map((c) => new CEmblem(c)),
  );
}
