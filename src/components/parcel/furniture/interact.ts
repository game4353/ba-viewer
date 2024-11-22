import type {
  CafeInteractionExcel,
  FurnitureExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { unreachable } from "@/utils/misc";
import type { ReadonlyDeep } from "type-fest";
import { DataList as d3 } from "~game/excel/CafeInteractionExcelTable.json";

const cafeInteractionArr = d3 as CafeInteractionExcel[];
const cafeInteractionDict: Partial<Record<string, number>> = Object.fromEntries(
  cafeInteractionArr
    .map((v) => v.CafeCharacterState.map((i) => [i, v.CharacterId]))
    .flat(),
);
function getFurnitureInteractCid(key: string) {
  const cid = cafeInteractionDict[key];
  if (cid == null) unreachable(`Unknown cafe interaction key: ${key}`);
  return cid;
}

export function furnitureInteract(
  type: "Req" | "Add" | "Make" | "Only" | "All",
  excel: ReadonlyDeep<FurnitureExcel>,
) {
  switch (type) {
    case "Req":
      return excel.CafeCharacterStateReq.map(getFurnitureInteractCid);
    case "Add":
      return excel.CafeCharacterStateAdd.map(getFurnitureInteractCid);
    case "Make":
      return excel.CafeCharacterStateMake.map(getFurnitureInteractCid);
    case "Only":
      return excel.CafeCharacterStateOnly.map(getFurnitureInteractCid);
    default:
      return [
        ...excel.CafeCharacterStateReq,
        ...excel.CafeCharacterStateAdd,
        ...excel.CafeCharacterStateMake,
        ...excel.CafeCharacterStateOnly,
      ].map(getFurnitureInteractCid);
  }
}
