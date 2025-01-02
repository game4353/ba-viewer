import { z } from "zod";
import { PassiveSkillTargetType } from "../../enum";
import { PassiveTriggerData, TargetFindRule } from "../../misc";
import { ExSkillEntityTimeline } from "../../timeline/schema";
import { ZSkillLogic } from "../general";

// 3
export const ZPassiveSkill = ZSkillLogic.extend({
  $type: z.literal("PassiveSkill"),
  Duration: z.number(),
  MaxTriggerCount: z.number(),
  CoolTimeNotTrigger: z.number(),
  TryCount: z.number(),
  ResetTryCountUseSkill: z.boolean(),
  TriggerCondition: PassiveTriggerData,
  TriggerSourceFindRule: TargetFindRule,
  SkillTargetType: z.nativeEnum(PassiveSkillTargetType),
  EntityTimeline: ExSkillEntityTimeline.array(),
});
