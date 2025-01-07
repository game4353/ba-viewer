import {
  BulletType,
  School,
  SquadType,
  StatType,
  TacticRange,
  TacticRole,
  TerrainAdaptationStat,
  WeaponType,
} from "@/assets/game/excelType";
import { zFlag } from "@/utils/types";
import { z } from "zod";
import { int } from "..";
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
} from "../enum";

const CountConstraint = z.object({
  Count: int(),
  DiffOperator: z.nativeEnum(DiffOperatorType),
});
const SchoolConstraint = z.object({
  School: z.nativeEnum(School),
  IncludeType: z.nativeEnum(IncludeType),
});
const WeaponConstraint = z.object({
  Weapon: z.nativeEnum(WeaponType),
  IncludeType: z.nativeEnum(IncludeType),
});
const SquadTypeConstraint = z.object({
  SquadType: z.nativeEnum(SquadType),
  IncludeType: z.nativeEnum(IncludeType),
});
const AdaptationConstraint = z.object({
  AdaptationType: z.nativeEnum(StatType),
  AdaptationValues: z.nativeEnum(TerrainAdaptationStat).array().optional(),
  IncludeType: z.nativeEnum(IncludeType),
});
const BulletConstraint = z.object({
  BulletType: z.nativeEnum(BulletType),
  IncludeType: z.nativeEnum(IncludeType),
});
const TacticRangeConstraint = z.object({
  TacticRanges: z.nativeEnum(TacticRange).array().optional(),
  IncludeType: z.nativeEnum(IncludeType),
});
const TagConstraint = z.object({
  IncludeType: z.nativeEnum(IncludeType),
  TagNamesInt: int().array().optional(),
});
const HPRateConstraint = z.object({
  ConstraintType: z.nativeEnum(HPRateConstraintType),
  HPRate: int(),
});
const TacticRoleConstraint = z.object({
  TacticRole: z.nativeEnum(TacticRole).array().optional(),
  IncludeType: z.nativeEnum(IncludeType),
});
const EchelonConstraint = z.object({
  IsEmpty: z.boolean(),
  CountConstraint: CountConstraint,
  SchoolConstraint: SchoolConstraint,
  WeaponConstraint: WeaponConstraint,
});

export const ZEssentialCandidateRule = z.object({
  TargetSide: zFlag(TargetSideId),
  TargetingType: z.nativeEnum(TargetingType),
  ApplyEntityType: zFlag(TargetEntityType),
  MaxTargetCount: z.number(),
});
export type TZEssentialCandidateRule = z.infer<typeof ZEssentialCandidateRule>;

export const ZTargetSortRule = z.object({
  SortCriteria: z.nativeEnum(TargetSortCriteria),
  SortStat: z.nativeEnum(StatType),
  SortParameter: z.string().optional(),
  OrderBy: z.nativeEnum(TargetSortOrder),
});
export type TZTargetSortRule = z.infer<typeof ZTargetSortRule>;

export const ZOptionalCandidateRule = z.object({
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
export type TZOptionalCandidateRule = z.infer<typeof ZOptionalCandidateRule>;

export const ZPassiveTriggerData = z.object({
  Event: z.nativeEnum(PassiveTriggerEvent),
  Parameters: z.string().optional(),
  ConditionExpression: z.string().optional(),
  TriggerRate: z.number(),
  EchelonConstraint: EchelonConstraint,
});

export const ZTargetFindRule = z.object({
  Sort: ZTargetSortRule,
  EssentialCandidate: ZEssentialCandidateRule,
  OptionalCandidate: ZOptionalCandidateRule,
});

// const ZTargetCandidateRule = z.object({
//   IsValid: z.boolean(),
//   TargetingType: z.nativeEnum(TargetingType),
//   ApplyEntityType: zFlag(TargetEntityType),
//   MaxCount: z.number(),
//   TargetSide: zFlag(TargetSideId),
//   AliveState: zFlag(AliveState),
//   SchoolConstraint: SchoolConstraint,
//   WeaponConstraint: WeaponConstraint,
//   SquadTypeConstraint: SquadTypeConstraint,
//   AdaptationConstraint: AdaptationConstraint,
//   BulletConstraint: BulletConstraint,
//   TacticRangeConstraint: TacticRangeConstraint,
//   TagConstraint: TagConstraint,
//   HPRateConstraint: HPRateConstraint,
//   TacticRoleConstraint: TacticRoleConstraint,
//   CoverState: z.nativeEnum(CoverState),
//   NeedSearchTarget: z.boolean(),
// });
