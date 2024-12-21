import {
  useExcelDbCharacterPotential,
  useExcelDbCharacterPotentialStat,
} from "@/utils/data/excel/character";
import { useExcelRecipeIngredient } from "@/utils/data/excel/recipe";
import { Ok, asResult, filterSingle } from "@/utils/result/result";
import type { PotentialStatBonusRateType } from "~game/types/flatDataExcelDb";
import type { CCharacter } from "../parcel/character/character";

function usePotentialStat(
  cid: number,
  type: PotentialStatBonusRateType,
  level: number,
) {
  const map1 = useExcelDbCharacterPotential();
  const map2 = useExcelDbCharacterPotentialStat();

  return asResult(
    computed(() => {
      const res1 = map1.value
        .andThen((map) => map.getResult(cid))
        .andThen((arr) =>
          filterSingle(arr, (o) => o.PotentialStatBonusRateType === type),
        )
        .andThen((o) => Ok(o.PotentialStatGroupId));
      if (res1.isErr()) return res1;
      const gid = res1.unwrap();
      return map2.value
        .andThen((map) => map.getResult(gid))
        .andThen((arr) => filterSingle(arr, (o) => o.PotentialLevel === level));
    }).value,
  );
}

export function usePotentialStatBonusRate(
  this: CCharacter,
  type: PotentialStatBonusRateType,
  level: number,
) {
  return asResult(
    computed(() =>
      usePotentialStat(this.id, type, level).andThen((o) =>
        Ok(o.StatBonusRate),
      ),
    ).value,
  );
}

export function usePotentialStatRecipeIngredient(
  this: CCharacter,
  type: PotentialStatBonusRateType,
  level: number,
) {
  return asResult(
    computed(() => {
      const stat = usePotentialStat(this.id, type, level);
      const map = useExcelRecipeIngredient();
      return stat.andThen2((o) =>
        map.value.andThen((m) => m.getResult(o.RecipeId)),
      );
    }).value,
  );
}
