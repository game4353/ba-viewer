import type {
  CafeInteractionExcel,
  FurnitureExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d3 } from "~game/excel/CafeInteractionExcelTable.json";
import { unreachable } from "@/utils/misc";

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
  excel: FurnitureExcel,
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
