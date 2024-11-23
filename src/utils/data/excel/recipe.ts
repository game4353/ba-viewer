import { cache } from "@/util";
import type {
  RecipeExcelTable,
  RecipeIngredientExcelTable,
  RecipeSelectionGroupExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapMany, useExcelMapSingle } from ".";

export const useExcelRecipe = cache(() =>
  useExcelMapSingle<RecipeExcelTable, "Id">("RecipeExcelTable", "Id"),
);

export const useExcelRecipeIngredient = cache(() =>
  useExcelMapSingle<RecipeIngredientExcelTable, "Id">(
    "RecipeIngredientExcelTable",
    "Id",
  ),
);

export const useExcelRecipeSelectionGroup = cache(() =>
  useExcelMapMany<RecipeSelectionGroupExcelTable, "RecipeSelectionGroupId">(
    "RecipeSelectionGroupExcelTable",
    "RecipeSelectionGroupId",
  ),
);
