import type { SkillExcel } from "@/assets/game/types/flatDataExcel";
import { assert } from "@/utils/misc";
// @ts-ignore
import { DataList } from "~game/excel/SkillExcelTable.json";
import { Local } from "@/utils/localize";

const skillArr = DataList as SkillExcel[];
const skillDict = Object.groupBy(skillArr, (v) => v.GroupId);

export function getSkill(group: string, level: number) {
  const arr = skillDict[group];
  const skill = arr?.at(level - 1);
  if (skill?.Level === level) return skill;
  return arr?.find((v) => v.Level === level);
}

export class CSkill {
  private _level!: number;
  public rawExcel!: SkillExcel;

  constructor(public group: string) {
    this.level = 1;
  }

  get desc() {
    return Local.skill(this.rawExcel.LocalizeSkillId, true);
  }
  get iconPath() {
    return this.rawExcel.IconName;
  }
  get id() {
    return this.rawExcel.Id;
  }
  get level() {
    return this._level;
  }
  set level(level: number) {
    this._level = level;
    this.rawExcel = assert(
      getSkill(this.group, this.level),
      `Unable to find skill group "${this.group}" at level ${this.level}`,
    );
  }
  get name() {
    return Local.skill(this.rawExcel.LocalizeSkillId);
  }
}
