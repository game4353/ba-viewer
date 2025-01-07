import { zFlag } from "@/utils/types";
import { z } from "zod";
import { AreaTransformTypes, MovingAreaOptions } from "../../misc/enum";
import { SkillAbilitySchema } from "../ability/schema";
import { ZSkillEntity } from "./_base";

const AreaCollisionProperty = z.object({
  TransformType: z.nativeEnum(AreaTransformTypes),
  TransformCount: z.number(),
});

const AreaEntity = ZSkillEntity.extend({
  $type: z.literal("AreaEntity"),
  AttachTarget: z.boolean(),
  AllowDuplicateHit: z.boolean(),
  RemoveEntityIfSkillCancel: z.boolean(),
  Duration: z.number(),
  RotateEntityDirectionEveryFrame: z.boolean(),
  ApplyOffsetRotateEntityDirection: z.boolean(),
  MovingAreaOption: zFlag(MovingAreaOptions),
  HitFrames: z.number().array().optional(),
  CollisionProperty: AreaCollisionProperty,
  CheckBlockHit: z.boolean(),
  AreaAbilities: SkillAbilitySchema.array().optional(),
  HitCheckCouplingKey: z.string().optional(),
});

const FanAreaEntity = AreaEntity.extend({
  $type: z.literal("FanAreaEntity"),
  Radius: z.number(),
  Degree: z.number(),
  AngleOffset: z.number(),
});

const ObbAreaEntity = AreaEntity.extend({
  $type: z.literal("ObbAreaEntity"),
  Width: z.number(),
  Height: z.number(),
  AngleOffset: z.number(),
});

const CircleAreaEntity = AreaEntity.extend({
  $type: z.literal("CircleAreaEntity"),
  Radius: z.number(),
});

const DonutAreaEntity = FanAreaEntity.extend({
  $type: z.literal("DonutAreaEntity"),
  ExcludeRadius: z.number(),
});

export const AreaEntityList = [
  CircleAreaEntity, // 1
  ObbAreaEntity, // 2
  FanAreaEntity, // 3
  DonutAreaEntity, // 4
  // BreathAreaEntity, // 52
] as const;
export const AreaEntitySchema = z.discriminatedUnion("$type", [
  ...AreaEntityList,
]);
