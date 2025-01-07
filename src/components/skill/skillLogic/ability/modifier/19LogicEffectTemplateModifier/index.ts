import { z } from "zod";
import { IncludeType } from "../../../../misc/enum";
import { ZSkillAbilityModifier$base } from "../base";

export const ZLogicEffectTemplateModifier = ZSkillAbilityModifier$base.extend({
  TemplateId: z.string(),
  IncludeType: z.nativeEnum(IncludeType),
});

export type TZLogicEffectTemplateModifier = z.infer<
  typeof ZLogicEffectTemplateModifier
>;
