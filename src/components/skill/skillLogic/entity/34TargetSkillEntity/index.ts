import { SkillAbilitySchema } from "../../ability/schema";
import { SkillEntity } from "../_base";

export const ZTargetSkillEntity = SkillEntity.extend({
  Abilities: SkillAbilitySchema.array(),
});
