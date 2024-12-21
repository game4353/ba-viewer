import { useExcelCharacterGear } from "@/utils/data/excel/character";
import { useExcelRecipeIngredient } from "@/utils/data/excel/recipe";
import { cache } from "@/utils/misc";
import { Ok, asResult, filterSingle } from "@/utils/result/result";
import type { ReadonlyDeep } from "type-fest";
import { ParcelType, type CharacterGearExcel } from "~game/types/flatDataExcel";
import { AParcel } from "../class";
import { recipeToIngredient } from "../recipe/recipe";

export class CCharacterGear extends AParcel<ReadonlyDeep<CharacterGearExcel>> {
  type = ParcelType.CharacterGear as const;

  get recipe() {
    const rid = this.obj.RecipeId;
    return asResult(
      useExcelRecipeIngredient().value.andThen((map) =>
        rid === 0 ? Ok(null) : map.getResult(rid),
      ),
    );
  }

  get ingredients() {
    return recipeToIngredient([this.obj.RecipeId]);
  }
}

export const useCharacterGear = cache((characterId: number, tier: number) =>
  computed(() =>
    asResult(
      useExcelCharacterGear()
        .value.andThen((map) => map.getResult(characterId))
        .andThen((arr) =>
          filterSingle(
            arr,
            (characterGearExcel) => characterGearExcel.Tier === tier,
          ),
        )
        .map((excel) => new CCharacterGear(excel)),
    ),
  ),
);
