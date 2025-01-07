import { z } from "zod";
import { ZArmorConditionModifier } from "./0ArmorConditionModifier";
import { ZCountLogicEffectTemplateModifier } from "./11CountLogicEffectTemplateModifier";
import { ZLogicEffectTemplateModifier } from "./19LogicEffectTemplateModifier";

export const ZSkillAbilityModifier = z.discriminatedUnion("$type", [
  ZArmorConditionModifier.extend({
    $type: z.literal("ArmorConditionModifier"),
  }), // 0
  ZCountLogicEffectTemplateModifier.extend({
    $type: z.literal("CountLogicEffectTemplateModifier"),
  }), // 11
  ZLogicEffectTemplateModifier.extend({
    $type: z.literal("LogicEffectTemplateModifier"),
  }), // 19
]);

export type TZSkillAbilityModifier = z.infer<typeof ZSkillAbilityModifier>;
