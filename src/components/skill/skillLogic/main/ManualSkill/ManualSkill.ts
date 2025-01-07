import { z } from "zod";
import { ManualSkillTypes } from "../../../misc/enum";
import { SkillAbilitySchema } from "../../ability/schema";
import { ZSkillLogic } from "../general";

// 0
export const ZManualSkill = ZSkillLogic.extend({
  Abilities: SkillAbilitySchema.array(),
  ManualSkillType: z.nativeEnum(ManualSkillTypes),
});
