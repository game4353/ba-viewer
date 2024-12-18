import type { SkillExcel } from "@/assets/game/types/flatDataExcel";
import { useExcelSkill } from "@/utils/data/excel/skill";
import { Local } from "@/utils/i18n/localize";
import { cache, range } from "@/utils/misc";
import { Result, asResult, filterSingle } from "@/utils/result";
import type { ReadonlyDeep } from "type-fest";
import { recipeToIngredient } from "../parcel/recipe/recipe";

export class CSkill {
  constructor(public obj: ReadonlyDeep<SkillExcel>) {}

  get desc() {
    return Local.useLocalizeSkill(this.obj.LocalizeSkillId, true);
  }
  get iconPath() {
    return this.obj.IconName;
  }
  get id() {
    return this.obj.Id;
  }
  get name() {
    return Local.useLocalizeSkill(this.obj.LocalizeSkillId);
  }

  useLevelUpIngredient(targetLevel: number) {
    return asResult(
      useSkillRecipes(this.obj.GroupId, this.obj.Level, targetLevel).andThen(
        recipeToIngredient,
      ),
    );
  }
}

/** returns [min lv, max lv] */
export const useSkillLvs = cache((group: string) =>
  computed(() =>
    asResult(
      useExcelSkill()
        .value?.andThen((map) => map.getResult(group))
        .map((arr) => arr.map((o) => o.Level))
        .map((lvs) => [Math.min(...lvs), Math.max(...lvs)] as const),
    ),
  ),
);

export const useSkill = cache((group: string, level: number) =>
  computed(() =>
    asResult(
      useExcelSkill()
        .value?.andThen((map) => map.getResult(group))
        .andThen((arr) => filterSingle(arr, (v) => v.Level === level))
        .map((excel) => new CSkill(excel)),
    ),
  ),
);

function useSkillRecipes(group: string, lv: number, target: number) {
  return asResult(
    Result.all(
      [...range(lv, target, 1)].map((v) => useSkill(group, v).value),
    ).map((skills) => skills.map((skill) => skill.obj.RequireLevelUpMaterial)),
  );
}
