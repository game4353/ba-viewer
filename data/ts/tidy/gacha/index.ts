import { Excel } from "../../util.js";

export type GachaGroup = {
  ID: number;
  NameKr: string;
  IsRecursive: boolean;
  GroupType: string;
};

export function getGachaGroup(): GachaGroup[] {
  return Excel.table("gachagroupExcel");
}

export type GachaElement = {
  ID: number;
  GachaGroupID: number;
  ParcelType: string;
  ParcelID: number;
  Prob: number;
};

export function getGachaElement(): GachaElement[] {
  return Excel.table("gachaelementExcel");
}
