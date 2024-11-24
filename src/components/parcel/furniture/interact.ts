import { cache } from "@/util";
import { useExcel } from "@/utils/data/excel";
import { fail } from "@/utils/misc";
import type { ReadonlyDeep } from "type-fest";
import type {
  CafeInteractionExcelTable,
  FurnitureExcel,
} from "~game/types/flatDataExcel";

const table = useExcel<CafeInteractionExcelTable>("CafeInteractionExcelTable");
const useFurnitureInteractCid = cache((key: string) =>
  computed(() => {
    const cids = table.value
      ?.unwrapOrElse(fail)
      ?.DataList.filter((v) => v.CafeCharacterState.includes(key))
      .map((v) => v.CharacterId);
    if (cids && cids.length !== 1) console.error(cids);
    return cids?.[0];
  }),
);

export function useFurnitureInteract(
  type: "Req" | "Add" | "Make" | "Only" | "All",
  excel: ReadonlyDeep<FurnitureExcel>,
) {
  switch (type) {
    case "Req":
      return excel.CafeCharacterStateReq.map(useFurnitureInteractCid);
    case "Add":
      return excel.CafeCharacterStateAdd.map(useFurnitureInteractCid);
    case "Make":
      return excel.CafeCharacterStateMake.map(useFurnitureInteractCid);
    case "Only":
      return excel.CafeCharacterStateOnly.map(useFurnitureInteractCid);
    default:
      return [
        ...excel.CafeCharacterStateReq,
        ...excel.CafeCharacterStateAdd,
        ...excel.CafeCharacterStateMake,
        ...excel.CafeCharacterStateOnly,
      ].map(useFurnitureInteractCid);
  }
}
