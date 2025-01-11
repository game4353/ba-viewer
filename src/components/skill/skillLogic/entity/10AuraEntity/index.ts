import { zFlag } from "@/utils/types";
import { z } from "zod";
import { bool, int, long } from "../../../misc";
import { MovingAreaOptions } from "../../../misc/enum";
import { SkillAbilitySchema } from "../../ability/schema";
import { ZSkillEntity } from "../_base";
import * as LevelAuraEntityData from "../LevelAuraEntityData";

export const ZAuraEntity = ZSkillEntity.extend({
  AttachSpawnTarget: bool(),
  RotateEntityDirectionEveryFrame: bool(),
  ApplyOffsetRotateEntityDirection: bool(),
  RemoveEntityIfAttachSpawnTargetDie: bool(),
  Duration: int(),
  Interval: int(),
  RemoveEntityIfSameEntitySpawn: zFlag(
    LevelAuraEntityData.SameAuraCheckCondition,
  ),
  RemoveEntityIfSkillCancel: bool(),
  MovingAreaOption: zFlag(MovingAreaOptions),
  AreaAbilities: SkillAbilitySchema.array().optional(),
});
export type TZAuraEntity = z.infer<typeof ZAuraEntity>;

export const ZCircleAuraEntity = ZAuraEntity.extend({
  Radius: long(),
});
export type TZCircleAuraEntity = z.infer<typeof ZCircleAuraEntity>;

export const ZObbAuraEntity = ZAuraEntity.extend({
  Width: long(),
  Height: long(),
  AngleOffset: long(),
});
export type TZObbAuraEntity = z.infer<typeof ZObbAuraEntity>;
