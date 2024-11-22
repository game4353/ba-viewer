import { useExcelCharacterTranscendence } from "@/utils/data/excel/character";
import { useExcelRecipeIngredient } from "@/utils/data/excel/recipe";
import { Err, Ok } from "~/utils/result";
import type { CCharacter } from "../parcel/character/character";

export function useTranscendenceBonusRate(
  this: CCharacter,
  type: "Attack" | "HP" | "Heal",
  star: number,
) {
  const key = `StatBonusRate${type}` as const;
  const table = useExcelCharacterTranscendence();
  return computed(() =>
    table.value?.andThen((map) => {
      const b = map
        .get(this.id)
        ?.[key].reduce((a, v, i) => a + (i < star ? v : 0));
      return b == null
        ? Err(
            new Error(
              `Unable to find CharacterTranscendenceExcel '${this.id}'.`,
            ),
          )
        : Ok(1 + b / 10000);
    }),
  );
}

export function useTranscendenceRecipeIngredient(
  this: CCharacter,
  star: number,
) {
  const transcendenceMap = useExcelCharacterTranscendence();
  const ingredientMap = useExcelRecipeIngredient();
  return computed(
    () =>
      transcendenceMap.value &&
      ingredientMap.value &&
      transcendenceMap.value
        .andThen((map) => map.getResult(this.id))
        .andThen((rids) => {
          const rid = rids.RecipeId?.[star];
          return rid == null
            ? Err(
                new Error(
                  `Unable to index '${star}'-th RecipeId of CharacterTranscendenceExcel '${this.id}'.`,
                ),
              )
            : Ok(rid);
        })
        .andThen((rid) =>
          ingredientMap.value!.andThen((map) => map.getResult(rid)),
        ),
  );
}
