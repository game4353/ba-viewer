import type {
  RecipeExcel,
  RecipeExcelTable,
  RecipeIngredientExcelTable,
} from "~game/types/flatDataExcel";
import { useExcelMapSingle, type MapResult } from ".";
import type { Result } from "@/utils/result";

export const useExcelRecipe = (): globalThis.ComputedRef<
  Result<MapResult<number, RecipeExcel>, Error> | undefined
> => useExcelMapSingle<RecipeExcelTable>("RecipeExcelTable", "Id") as any;

export const useExcelRecipeIngredient = () =>
  useExcelMapSingle<RecipeIngredientExcelTable>(
    "RecipeIngredientExcelTable",
    "Id",
  );
