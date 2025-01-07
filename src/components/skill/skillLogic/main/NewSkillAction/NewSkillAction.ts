import {
  ZEssentialCandidateRule,
  ZOptionalCandidateRule,
  ZTargetSortRule,
} from "@/components/skill/misc/rule";
import { z } from "zod";
import { Vector2 } from "../../../misc";
import { SpawnDirectionTypes } from "../../../misc/enum";
import { AutoUseRule } from "../../ability/schema";
import { RootMotionMoveBaseSchema } from "../../entity/RootMotionMove";
import { SkillEntitySchema } from "../../entity/schema";
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
  TargetSortRule: ZTargetSortRule,
  EssentialCandidateRule: ZEssentialCandidateRule,
  OptionalCandidateRule: ZOptionalCandidateRule,
  AutoUseRule: AutoUseRule,
  Duration: z.number(),
});
