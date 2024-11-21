import type {
  RecipeExcelTable,
  RecipeIngredientExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapSingle } from ".";
import { cache } from "@/util";

export const useExcelRecipe = cache(() =>
  useExcelMapSingle<RecipeExcelTable, "Id">("RecipeExcelTable", "Id"),
);

export const useExcelRecipeIngredient = cache(() =>
  useExcelMapSingle<RecipeIngredientExcelTable, "Id">(
    "RecipeIngredientExcelTable",
    "Id",
  ),
);
