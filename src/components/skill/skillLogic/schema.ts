import { z } from "zod";
import { ZManualSkill } from "./main/ManualSkill/ManualSkill";
import { ZNewSkillAction } from "./main/NewSkillAction/NewSkillAction";
import { ZNormalAttackSkillAction } from "./main/NormalAttackSkillAction/NormalAttackSkillAction";
import { ZPassiveSkill } from "./main/PassiveSkill/PassiveSkill";
import { ZTimelineSkillAction } from "./main/TimelineSkillAction/TimelineSkillAction";

export const SkillLogicSchema = z.discriminatedUnion("$type", [
  ZManualSkill,
  ZNormalAttackSkillAction,
  ZTimelineSkillAction,
  ZPassiveSkill,
  ZNewSkillAction,
]);

export type SkillLogicType = z.infer<typeof SkillLogicSchema>;
