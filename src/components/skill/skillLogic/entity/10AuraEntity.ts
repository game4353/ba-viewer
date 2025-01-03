import { zFlag } from "@/utils/types";
import { z } from "zod";
import { SkillAbilitySchema } from "../ability/schema";
import { MovingAreaOptions } from "../enum";
import { SkillEntity } from "./_base";
import * as LevelAuraEntityData from "./LevelAuraEntityData";

const AuraEntity = SkillEntity.extend({
  $type: z.literal("AuraEntity"),
  AttachSpawnTarget: z.boolean(),
  RotateEntityDirectionEveryFrame: z.boolean(),
  ApplyOffsetRotateEntityDirection: z.boolean(),
  RemoveEntityIfAttachSpawnTargetDie: z.boolean(),
  Duration: z.number(),
  Interval: z.number(),
  RemoveEntityIfSameEntitySpawn: zFlag(
    LevelAuraEntityData.SameAuraCheckCondition,
  ),
  RemoveEntityIfSkillCancel: z.boolean(),
  MovingAreaOption: zFlag(MovingAreaOptions),
  AreaAbilities: SkillAbilitySchema.array().optional(),
});

const CircleAuraEntity = AuraEntity.extend({
  $type: z.literal("CircleAuraEntity"),
  Radius: z.number(),
});

const ObbAuraEntity = AuraEntity.extend({
  $type: z.literal("ObbAuraEntity"),
  Width: z.number(),
  Height: z.number(),
  AngleOffset: z.number(),
});

export const AuraEntityList = [
  CircleAuraEntity, // 1
  ObbAuraEntity, // 2
] as const;
export const AuraEntitySchema = z.discriminatedUnion("$type", [
  ...AuraEntityList,
]);
