import type { CharacterTranscendenceExcel } from "@/assets/game/types/flatDataExcel";
// @ts-ignore
import { DataList as d3 } from "~game/excel/CharacterTranscendenceExcelTable.json";
import type { CCharacter } from "../parcel/character";
import { ingredientDict } from "../parcel/recipe";

const transcendenceArr = d3 as CharacterTranscendenceExcel[];
const transcendenceDict: Partial<Record<string, CharacterTranscendenceExcel>> =
  Object.fromEntries(transcendenceArr.map((v) => [v.CharacterId, v]));

export function transcendenceBonusRate(
  this: CCharacter,
  type: "Attack" | "HP" | "Heal",
  star: number,
) {
  const key = `StatBonusRate${type}` as const;
  const excel = transcendenceDict[this.id];
  if (excel == null) return null;
  const arr = excel[key];
  const b = arr.reduce((a, v, i) => a + (i < star ? v : 0));
  return 1 + b / 10000;
}
export function transcendenceRecipeIngredient(this: CCharacter, star: number) {
  const rid = transcendenceDict[this.id]!.RecipeId[star];
  return ingredientDict[rid ?? ""];
}
