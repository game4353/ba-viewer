import type { z } from "zod";
import { SkillAbilitySchema } from "../../ability/schema";
import { ZSkillEntity } from "../_base";

export const ZTargetSkillEntity = ZSkillEntity.extend({
  Abilities: SkillAbilitySchema.array(),
});

export type TZTargetSkillEntity = z.infer<typeof ZTargetSkillEntity>;
