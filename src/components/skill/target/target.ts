import type { StatType } from "@/assets/game/types/flatDataExcel";

enum TargetSortCriteria {
  None,
  CurrentHP,
  MaxHP,
  HPRate,
  Distance,
  AttackPower,
  DefensePower,
  BuffCount,
  DebuffCount,
  CrowdControlCount,
  LogicEffectTemplateCount,
  Stat,
  SummonedTime,
  All,
}
enum TargetSortOrder {
  None,
  Highest,
  Lowest,
  Random,
}
export interface TargetSortRule {
  $type: "MX.Logic.Skills.TargetSortRule, BlueArchive";
  SortCriteria: keyof typeof TargetSortCriteria;
  SortStat: StatType;
  SortParameter?: string;
  OrderBy: keyof typeof TargetSortOrder;
}
