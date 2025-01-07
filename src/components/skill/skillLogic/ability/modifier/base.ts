import { z } from "zod";
import { ModifierCheckTarget } from "../../../misc/enum";

export const ZSkillAbilityModifier$base = z.object({
  CheckTarget: z.nativeEnum(ModifierCheckTarget),
});
