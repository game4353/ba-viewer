import { z } from "zod";
import {
  EssentialCandidateRule,
  OptionalCandidateRule,
  TargetSortRule,
  Vector2,
} from "../../../misc";
import { AutoUseRule } from "../../ability/schema";
import { RootMotionMoveBaseSchema } from "../../entity/RootMotionMove";
import { SkillEntitySchema } from "../../entity/schema";
import { SpawnDirectionTypes } from "../../enum";
import { ZSkillLogic } from "../general";

// 4
export const ZNewSkillAction = ZSkillLogic.extend({
  Range: z.number(),
  Angle: z.number(),
  MinRange: z.number(),
  CheckCanUseSkillPoint: z.boolean(),
  IsWeaponMountAfterSkill: z.boolean(),
  InvokerDirection: z.nativeEnum(SpawnDirectionTypes),
  InvokerDirectionWorldPosition: Vector2,
  RootMotionMoveData: RootMotionMoveBaseSchema.optional(),
  SkipAttackEnterAfterRootMotion: z.boolean(),
  MainEntityData: SkillEntitySchema.optional(),
  TargetSortRule: TargetSortRule,
  EssentialCandidateRule: EssentialCandidateRule,
  OptionalCandidateRule: OptionalCandidateRule,
  AutoUseRule: AutoUseRule,
  Duration: z.number(),
});
