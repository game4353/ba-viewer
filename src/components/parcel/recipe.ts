import type {
  RecipeExcel,
  RecipeIngredientExcel,
} from "~game/types/flatDataExcel";
// @ts-ignore
import { DataList as d1 } from "~game/excel/RecipeExcelTable.json";
// @ts-ignore
import { DataList as d2 } from "~game/excel/RecipeIngredientExcelTable.json";

const recipeArr = d1 as RecipeExcel[];
export const recipeDict: Partial<Record<string, RecipeExcel>> =
  Object.fromEntries(recipeArr.map((v) => [v.Id, v]));

const ingredientArr = d2 as RecipeIngredientExcel[];
export const ingredientDict: Partial<Record<string, RecipeIngredientExcel>> =
  Object.fromEntries(ingredientArr.map((v) => [v.Id, v]));
