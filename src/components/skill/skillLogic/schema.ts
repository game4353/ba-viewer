import { z } from "zod";
import { ZManualSkill } from "./main/ManualSkill/ManualSkill";
import { ZNewSkillAction } from "./main/NewSkillAction/NewSkillAction";
import { ZNormalAttackSkillAction } from "./main/NormalAttackSkillAction/NormalAttackSkillAction";
import { ZPassiveSkill } from "./main/PassiveSkill/PassiveSkill";
import { ZTimelineSkillAction } from "./main/TimelineSkillAction/TimelineSkillAction";

export const SkillLogicSchema = z.discriminatedUnion("$type", [
  ZManualSkill.extend({
    $type: z.literal("ManualSkill"),
  }),
  ZNormalAttackSkillAction.extend({
    $type: z.literal("NormalAttackSkillAction"),
  }),
  ZTimelineSkillAction.extend({
    $type: z.literal("TimelineSkillAction"),
  }),
  ZPassiveSkill.extend({
    $type: z.literal("PassiveSkill"),
  }),
  ZNewSkillAction.extend({
    $type: z.literal("NewSkillAction"),
  }),
]);

export type SkillLogicType = z.infer<typeof SkillLogicSchema>;
