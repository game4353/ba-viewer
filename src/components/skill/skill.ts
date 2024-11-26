import type {
  RecipeIngredientExcel,
  SkillExcel,
} from "@/assets/game/types/flatDataExcel";
import { useExcelSkill } from "@/utils/data/excel/skill";
import { Local } from "@/utils/localize";
import { cache, fail } from "@/utils/misc";
import { undefinedIsError, type Result } from "@/utils/result";
import type { ReadonlyDeep } from "type-fest";

export class CSkill {
  private _level!: number;
  private _obj!: globalThis.ComputedRef<
    Result<ReadonlyDeep<SkillExcel>, Error> | undefined
  >;

  constructor(public group: string) {
    this.level = 1;
  }

  get desc() {
    return Local.useLocalizeSkill(this.obj?.LocalizeSkillId, true);
  }
  get iconPath() {
    return this.obj?.IconName;
  }
  get id() {
    return this.obj?.Id;
  }
  get level() {
    return this._level;
  }
  set level(level: number) {
    this._level = level;
    this._obj = useSkill(this.group, level);
  }
  get name() {
    return Local.useLocalizeSkill(this.obj?.LocalizeSkillId);
  }
  get obj() {
    return this._obj.value?.unwrapOrElse(fail);
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
