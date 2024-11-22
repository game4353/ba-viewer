import type { FavorLevelRewardExcel } from "@/assets/game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/FavorLevelRewardExcelTable.json";
import type { CCharacter } from "../parcel/character/character";

const favorArr = DataList as FavorLevelRewardExcel[];
const favorDict: Partial<Record<string, FavorLevelRewardExcel>> =
  Object.fromEntries(
    favorArr.map((v) => [`${v.CharacterId}|${v.FavorLevel}`, v]),
  );

export function bondExcel(this: CCharacter, bond: number) {
  const key = `${this.id}|${bond}`;
  return favorDict[key];
}
