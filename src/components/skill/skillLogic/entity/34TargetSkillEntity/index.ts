import { SkillAbilitySchema } from "../../ability/schema";
import { ZSkillEntity } from "../_base";

export const ZTargetSkillEntity = ZSkillEntity.extend({
  Abilities: SkillAbilitySchema.array(),
});
