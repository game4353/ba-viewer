import { z } from "zod";
import { ModifierCheckTarget } from "../../enum";

export const ZSkillAbilityModifier$base = z.object({
  CheckTarget: z.nativeEnum(ModifierCheckTarget),
});
