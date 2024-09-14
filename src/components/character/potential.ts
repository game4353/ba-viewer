import type {
  CharacterPotentialExcel,
  CharacterPotentialStatExcel,
  PotentialStatBonusRateType,
} from "@/assets/game/types/flatDataExcelDb";
// @ts-ignore
import { default as a1 } from "~game/db/ExcelDB/CharacterPotential.json";
// @ts-ignore
import { default as a2 } from "~game/db/ExcelDB/CharacterPotentialStat.json";
import type { CCharacter } from "../parcel/character";
import { ingredientDict } from "../parcel/recipe";

const potentialArr: CharacterPotentialExcel[] = (a1 as any[]).map(
  (v) => v.Bytes,
);
const potentialDict = Object.fromEntries(
  potentialArr.map((v) => [`${v.Id}|${v.PotentialStatBonusRateType}`, v]),
);
const potentialStatArr: CharacterPotentialStatExcel[] = (a2 as any[]).map(
  (v) => v.Bytes,
);
const potentialStatDict = Object.fromEntries(
  potentialStatArr.map((v) => [
    `${v.PotentialStatGroupId}|${v.PotentialLevel}`,
    v,
  ]),
);

function potentialStat(
  cid: number,
  type: PotentialStatBonusRateType,
  level: number,
): CharacterPotentialStatExcel | undefined {
  const key = `${cid}|${type}`;
  const gid = potentialDict[key]?.PotentialStatGroupId;
  const key2 = `${gid}|${level}`;
  return potentialStatDict[key2];
}
export function potentialStatBonusRate(
  this: CCharacter,
  type: PotentialStatBonusRateType,
  level: number,
) {
  const stat = potentialStat(this.id, type, level);
  return stat?.StatBonusRate;
}
export function potentialStatRecipeIngredient(
  this: CCharacter,
  type: PotentialStatBonusRateType,
  level: number,
) {
  const stat = potentialStat(this.id, type, level);
  const rid = stat?.RecipeId;
  return ingredientDict[rid ?? ""];
}
