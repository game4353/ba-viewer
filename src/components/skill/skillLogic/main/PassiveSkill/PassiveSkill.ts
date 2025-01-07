import { z } from "zod";
import { PassiveTriggerData, TargetFindRule } from "../../../misc";
import { PassiveSkillTargetType } from "../../enum";
import { ZExSkillEntityTimeline } from "../../timeline/schema";
import { ZSkillLogic } from "../general";

// 3
export const ZPassiveSkill = ZSkillLogic.extend({
  Duration: z.number(),
  MaxTriggerCount: z.number(),
  CoolTimeNotTrigger: z.number(),
  TryCount: z.number(),
  ResetTryCountUseSkill: z.boolean(),
  TriggerCondition: PassiveTriggerData,
  TriggerSourceFindRule: TargetFindRule,
  SkillTargetType: z.nativeEnum(PassiveSkillTargetType),
  EntityTimeline: ZExSkillEntityTimeline.array(),
});
