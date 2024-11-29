import type {
  RecipeIngredientExcel,
  SkillExcel,
} from "@/assets/game/types/flatDataExcel";
import {
  useExcelRecipe,
  useExcelRecipeIngredient,
} from "@/utils/data/excel/recipe";
import { useExcelSkill } from "@/utils/data/excel/skill";
import { Local } from "@/utils/localize";
import { cache } from "@/utils/misc";
import { Ok, undefinedIsError, type Err, type Result } from "@/utils/result";
import type { ReadonlyDeep } from "type-fest";

export class CSkill {
  private _level!: number;
  private _obj!: globalThis.ComputedRef<
    Result<ReadonlyDeep<SkillExcel>, Error>
  >;

  constructor(public group: string) {
    this.level = 1;
  }

  get desc() {
    return this.obj
      .map((v) => v.LocalizeSkillId)
      .andThen2((id) => Local.useLocalizeSkill(id, true).value);
  }
  get iconPath() {
    return this.obj.map((v) => v.IconName);
  }
  get id() {
    return this.obj.map((v) => v.Id);
  }
  get level() {
    return this._level;
  }
  set level(level: number) {
    this._level = level;
    this._obj = useSkill(this.group, level);
  }
  get name() {
    return this.obj
      .map((v) => v.LocalizeSkillId)
      .andThen2((id) => Local.useLocalizeSkill(id).value);
  }
  get obj() {
    return this._obj.value;
  }
  useLevelUpIngredient(targetLevel: number) {
    return computed(() => {
      const res = [];
      for (let lv = this._level; lv < targetLevel; lv++) {
        const rid = useSkill(this.group, lv).value?.map(
          (skill) => skill.RequireLevelUpMaterial,
        );
        if (rid?.isOk() !== true) {
          res.push(rid);
          continue;
        }
        const iid = useExcelRecipe()
          .value?.andThen((map) => map.getResult(rid.unwrap()))
          .map((excel) => excel.RecipeIngredientId);
        if (iid?.isOk() !== true) {
          res.push(iid);
          continue;
        }
        const excel = useExcelRecipeIngredient().value?.andThen((map) =>
          map.getResult(iid.unwrap()),
        );
        res.push(excel);
      }
      const err = res.find((v): v is Err<Error> => v!.isErr());
      if (err !== undefined) return err;
      return Ok(
        res.map((r) => r!.unwrap() as ReadonlyDeep<RecipeIngredientExcel>),
      );
    });
  }
}

export const useSkill = cache((group: string, level: number) => {
  const table = useExcelSkill();
  return computed(() =>
    table.value
      ?.andThen((map) => map.getResult(group))
      .andThen((arr) =>
        undefinedIsError(arr.find((v) => v.Level === Number(level))),
      ),
  );
});
