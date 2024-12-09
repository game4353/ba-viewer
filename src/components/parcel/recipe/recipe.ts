import { useExcelRecipeIngredient } from "@/utils/data/excel/recipe";
import { Result, asResult } from "@/utils/result";

export function recipeToIngredient(recipeIds: number[]) {
  return asResult(
    useExcelRecipeIngredient().value.andThen((map) =>
      Result.all(
        recipeIds.filter((id) => id > 0).map((id) => map.getResult(id)),
      ),
    ),
  );
}
