import { z } from "zod";
import { SkillToTargetDistributeType, SpawnDirectionTypes } from "../../enum";
import { Vector2 } from "../../misc";
import { ZSkillEntityTimeline } from "../../timeline/schema";
import { ZNewSkillAction } from "../NewSkillAction/NewSkillAction";
import { ExtraFrameData, NormalAttackPhase } from "./phaseData/phaseData";

// 1
export const ZNormalAttackSkillAction = ZNewSkillAction.extend({
  ExclusiveIngInvokerDirectionOverride: z.nativeEnum(SpawnDirectionTypes),
  ExclusiveIngInvokerDirectionOverrideWorldPosition: Vector2,
  DistributeType: z.nativeEnum(SkillToTargetDistributeType),
  AnimationFrames: ExtraFrameData.array(),
  ShotFrames: ZSkillEntityTimeline.array(),
  PhaseData: NormalAttackPhase,
});
