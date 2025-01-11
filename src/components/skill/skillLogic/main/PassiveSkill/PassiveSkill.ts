import {
  ZPassiveTriggerData,
  ZTargetFindRule,
} from "@/components/skill/misc/rule";
import { z } from "zod";
import { PassiveSkillTargetType } from "../../../misc/enum";
import { ZExSkillEntityTimeline } from "../../timeline/schema";
import { ZSkillLogic } from "../general";

// 3
export const ZPassiveSkill = ZSkillLogic.extend({
  Duration: z.number(),
  MaxTriggerCount: z.number(),
  CoolTimeNotTrigger: z.number(),
  TryCount: z.number(),
  ResetTryCountUseSkill: z.boolean(),
  TriggerCondition: ZPassiveTriggerData,
  TriggerSourceFindRule: ZTargetFindRule,
  SkillTargetType: z.nativeEnum(PassiveSkillTargetType),
  EntityTimeline: ZExSkillEntityTimeline.array(),
});
