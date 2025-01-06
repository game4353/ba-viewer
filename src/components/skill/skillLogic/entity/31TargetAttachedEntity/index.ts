import { z } from "zod";
import { SkillAbilitySchema } from "../../ability/schema";
import { ZSkillEntity } from "../_base";

export const ZTargetAttachedEntity = ZSkillEntity.extend({
  Abilities: SkillAbilitySchema.nullable().array().optional(),
});

export type TZTargetAttachedEntity = z.infer<typeof ZTargetAttachedEntity>;
