import { zFlag } from "@/utils/types";
import { z } from "zod";
import { StatType } from "~game/excelType";
import {
  AliveState,
  CoverState,
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
export const OptionalCandidateRule = z.object({
  // TODO
  AliveState: zFlag(AliveState),
  // SchoolConstraint: SchoolConstraint,
  // WeaponConstraint: WeaponConstraint,
  // SquadTypeConstraint: SquadTypeConstraint,
  // AdaptationConstraint: AdaptationConstraint,
  // BulletConstraint: BulletConstraint,
  // TacticRangeConstraint: TacticRangeConstraint,
  // TagConstraint: TagConstraint,
  CoverState: z.nativeEnum(CoverState),
  // HPRateConstraint: HPRateConstraint,
  // TacticRoleConstraint: TacticRoleConstraint,
});
export const TargetCandidateRule = z.object({
  // TODO
  IsValid: z.boolean(),
  TargetingType: z.nativeEnum(TargetingType),
  ApplyEntityType: zFlag(TargetEntityType),
  MaxCount: z.number(),
  TargetSide: zFlag(TargetSideId),
  AliveState: zFlag(AliveState),
  // SchoolConstraint: SchoolConstraint,
  // WeaponConstraint: WeaponConstraint,
  // SquadTypeConstraint: SquadTypeConstraint,
  // AdaptationConstraint: AdaptationConstraint,
  // BulletConstraint: BulletConstraint,
  // TacticRangeConstraint: TacticRangeConstraint,
  // TagConstraint: TagConstraint,
  // HPRateConstraint: HPRateConstraint,
  // TacticRoleConstraint: TacticRoleConstraint,
  CoverState: z.nativeEnum(CoverState),
  NeedSearchTarget: z.boolean(),
});

export const EchelonConstraint = z.object({
  // TODO
  IsEmpty: z.boolean(),
  // CountConstraint: CountConstraint,
  // SchoolConstraint: SchoolConstraint,
  // WeaponConstraint: WeaponConstraint,
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
