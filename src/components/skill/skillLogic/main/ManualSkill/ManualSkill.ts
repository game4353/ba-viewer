import { z } from "zod";
import { SkillAbilitySchema } from "../../ability/schema";
import { ManualSkillTypes } from "../../enum";
import { ZSkillLogic } from "../general";

// 0
export const ZManualSkill = ZSkillLogic.extend({
  Abilities: SkillAbilitySchema.array(),
  ManualSkillType: z.nativeEnum(ManualSkillTypes),
});
