import { z } from "zod";
import { Vector2 } from "../../../misc";
import {
  SkillToTargetDistributeType,
  SpawnDirectionTypes,
} from "../../../misc/enum";
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
