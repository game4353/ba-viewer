import { z } from "zod";
import { int } from "../../../../misc";
import { IncludeType } from "../../../enum";
import { ZSkillAbilityModifier$base } from "../base";

export const ZCountLogicEffectTemplateModifier =
  ZSkillAbilityModifier$base.extend({
    TemplateId: z.string(),
    CountMin: int(),
    CountMax: int(),
    IncludeType: z.nativeEnum(IncludeType),
  });

export type TZCountLogicEffectTemplateModifier = z.infer<
  typeof ZCountLogicEffectTemplateModifier
>;
