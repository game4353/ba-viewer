import { zFlag } from "@/utils/types";
import { z } from "zod";
import {
  BulletType,
  School,
  SquadType,
  StatType,
  TacticRange,
  TacticRole,
  TerrainAdaptationStat,
  WeaponType,
} from "~game/excelType";
import {
  AliveState,
  CoverState,
  DiffOperatorType,
  HPRateConstraintType,
  IncludeType,
  PassiveTriggerEvent,
  TargetEntityType,
  TargetSideId,
  TargetSortCriteria,
  TargetSortOrder,
  TargetingType,
} from "./enum";

export const bool = () => z.boolean();
export const float = () => z.number();
export const int = () => z.number().int();
export const long = () => z.number().int();

export const Vector2 = z.object({
  x: z.number(),
  y: z.number(),
});
export function formatVec2(vec: z.infer<typeof Vector2>) {
  return `(${vec.x}, ${vec.y})`;
}

export const TargetSortRule = z.object({
  SortCriteria: z.nativeEnum(TargetSortCriteria),
  SortStat: z.nativeEnum(StatType),
  SortParameter: z.string().optional(),
  OrderBy: z.nativeEnum(TargetSortOrder),
});
export type TargetSortRuleType = z.infer<typeof TargetSortRule>;
export const EssentialCandidateRule = z.object({
  TargetSide: zFlag(TargetSideId),
  TargetingType: z.nativeEnum(TargetingType),
  ApplyEntityType: zFlag(TargetEntityType),
  MaxTargetCount: z.number(),
});

export const CountConstraint = z.object({
  Count: int(),
  DiffOperator: z.nativeEnum(DiffOperatorType),
});
export const SchoolConstraint = z.object({
  School: z.nativeEnum(School),
  IncludeType: z.nativeEnum(IncludeType),
});
export const WeaponConstraint = z.object({
  Weapon: z.nativeEnum(WeaponType),
  IncludeType: z.nativeEnum(IncludeType),
});
export const SquadTypeConstraint = z.object({
  SquadType: z.nativeEnum(SquadType),
  IncludeType: z.nativeEnum(IncludeType),
});
export const AdaptationConstraint = z.object({
  AdaptationType: z.nativeEnum(StatType),
  AdaptationValues: z.nativeEnum(TerrainAdaptationStat).array().optional(),
  IncludeType: z.nativeEnum(IncludeType),
});
export const BulletConstraint = z.object({
  BulletType: z.nativeEnum(BulletType),
  IncludeType: z.nativeEnum(IncludeType),
});
export const TacticRangeConstraint = z.object({
  TacticRanges: z.nativeEnum(TacticRange).array().optional(),
  IncludeType: z.nativeEnum(IncludeType),
});
export const TagConstraint = z.object({
  IncludeType: z.nativeEnum(IncludeType),
  TagNamesInt: int().array().optional(),
});
export const HPRateConstraint = z.object({
  ConstraintType: z.nativeEnum(HPRateConstraintType),
  HPRate: int(),
});
export const TacticRoleConstraint = z.object({
  TacticRole: z.nativeEnum(TacticRole).array().optional(),
  IncludeType: z.nativeEnum(IncludeType),
});

export const OptionalCandidateRule = z.object({
  AliveState: zFlag(AliveState),
  SchoolConstraint: SchoolConstraint,
  WeaponConstraint: WeaponConstraint,
  SquadTypeConstraint: SquadTypeConstraint,
  AdaptationConstraint: AdaptationConstraint,
  BulletConstraint: BulletConstraint,
  TacticRangeConstraint: TacticRangeConstraint,
  TagConstraint: TagConstraint,
  CoverState: z.nativeEnum(CoverState),
  HPRateConstraint: HPRateConstraint,
  TacticRoleConstraint: TacticRoleConstraint,
});
export const TargetCandidateRule = z.object({
  IsValid: z.boolean(),
  TargetingType: z.nativeEnum(TargetingType),
  ApplyEntityType: zFlag(TargetEntityType),
  MaxCount: z.number(),
  TargetSide: zFlag(TargetSideId),
  AliveState: zFlag(AliveState),
  SchoolConstraint: SchoolConstraint,
  WeaponConstraint: WeaponConstraint,
  SquadTypeConstraint: SquadTypeConstraint,
  AdaptationConstraint: AdaptationConstraint,
  BulletConstraint: BulletConstraint,
  TacticRangeConstraint: TacticRangeConstraint,
  TagConstraint: TagConstraint,
  HPRateConstraint: HPRateConstraint,
  TacticRoleConstraint: TacticRoleConstraint,
  CoverState: z.nativeEnum(CoverState),
  NeedSearchTarget: z.boolean(),
});
export const EchelonConstraint = z.object({
  IsEmpty: z.boolean(),
  CountConstraint: CountConstraint,
  SchoolConstraint: SchoolConstraint,
  WeaponConstraint: WeaponConstraint,
});
export const PassiveTriggerData = z.object({
  Event: z.nativeEnum(PassiveTriggerEvent),
  Parameters: z.string().optional(),
  ConditionExpression: z.string().optional(),
  TriggerRate: z.number(),
  EchelonConstraint: EchelonConstraint,
});
export const TargetFindRule = z.object({
  Sort: TargetSortRule,
  EssentialCandidate: EssentialCandidateRule,
  OptionalCandidate: OptionalCandidateRule,
});

export class InfoBuilder<T> {
  arr: string[] = [];
  constructor(private data: T) {}

  add<K extends keyof T>(
    key: K,
    dft: T[K],
    toVal = (val: T[K]) => String(val),
    toKey = (key: K) => String(key) + ": ",
  ) {
    const val = this.data[key];
    if (val !== dft) this.arr.push(toKey(key) + toVal(val));
  }
}
