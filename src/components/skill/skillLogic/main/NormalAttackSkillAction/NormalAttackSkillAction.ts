import { z } from "zod";
import { SkillToTargetDistributeType, SpawnDirectionTypes } from "../../enum";
import { ExtraFrameData, NormalAttackPhase, Vector2 } from "../../misc";
import { SkillEntityTimeline } from "../../timeline/schema";
import { ZNewSkillAction } from "../NewSkillAction/NewSkillAction";

// 1
export const ZNormalAttackSkillAction = ZNewSkillAction.extend({
  $type: z.literal("NormalAttackSkillAction"),
  ExclusiveIngInvokerDirectionOverride: z.nativeEnum(SpawnDirectionTypes),
  ExclusiveIngInvokerDirectionOverrideWorldPosition: Vector2,
  DistributeType: z.nativeEnum(SkillToTargetDistributeType),
  AnimationFrames: ExtraFrameData.array(),
  ShotFrames: SkillEntityTimeline.array(),
  PhaseData: NormalAttackPhase,
});
