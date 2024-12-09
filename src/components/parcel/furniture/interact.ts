import { useFurnitureInteractMap } from "@/utils/data/excel/cafe";
import type { ReadonlyDeep } from "type-fest";
import type { FurnitureExcel } from "~game/types/flatDataExcel";

export const useFurnitureInteractCid = (key: string) =>
  computed(() =>
    useFurnitureInteractMap().value.andThen((map) => map.getResult(key)),
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
