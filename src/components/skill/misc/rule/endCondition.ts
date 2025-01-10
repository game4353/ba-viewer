import { EndCondition } from "@/assets/game/excelType";
import { noDefault } from "@/utils/misc";

export function endCondition(
  cond: EndCondition,
  arg1: string | number,
  arg2: string = "",
) {
  switch (cond) {
    case EndCondition.None:
      return undefined;
    case EndCondition.Duration:
      return arg1 === "-1" ? undefined : `${Number(arg1) / 1000}秒まで`;
    case EndCondition.ReloadCount:
      return `リロード${arg1}回まで`;
    case EndCondition.AmmoCount:
    case EndCondition.AmmoHit:
    case EndCondition.HitCount:
    case EndCondition.UseExSkillCount:
      return `${EndCondition[cond]} ${arg1} ${arg2}`;
    default:
      return noDefault(cond);
  }
}
