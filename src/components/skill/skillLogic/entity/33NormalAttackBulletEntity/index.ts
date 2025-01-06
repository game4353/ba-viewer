import type { z } from "zod";
import { long } from "../../misc";
import { ZTargetSkillEntity } from "../34TargetSkillEntity";

export const ZNormalAttackBulletEntity = ZTargetSkillEntity.extend({
  Speed: long(),
});

export type TZNormalAttackBulletEntity = z.infer<
  typeof ZNormalAttackBulletEntity
>;
