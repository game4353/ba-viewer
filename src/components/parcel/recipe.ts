import type { RecipeExcel } from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList } from "~game/excel/RecipeExcelTable.json";

const recipeArr = DataList as RecipeExcel[];
export const recipeDict: Partial<Record<string, RecipeExcel>> =
  Object.fromEntries(recipeArr.map((v) => [v.Id, v]));
