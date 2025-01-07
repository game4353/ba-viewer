import { bool, int, long } from "@/components/skill/misc";
import { zFlag } from "@/utils/types";
import { z } from "zod";
import {
  AreaTransformTypes,
  MovingAreaOptions,
  TargetEntityType,
} from "../../../misc/enum";
import { SkillAbilitySchema, ZLevelOneTimeAbility } from "../../ability/schema";
import { ZSkillEntity } from "../_base";

const AreaCollisionProperty = z.object({
  TransformType: z.nativeEnum(AreaTransformTypes),
  TransformCount: z.number(),
});

// 0
const ZAreaEntity = ZSkillEntity.extend({
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

// 1
const ZCircleAreaEntity = ZAreaEntity.extend({
  Radius: z.number(),
});

// 2
const ZObbAreaEntity = ZAreaEntity.extend({
  Width: z.number(),
  Height: z.number(),
  AngleOffset: z.number(),
});

// 3
const ZFanAreaEntity = ZAreaEntity.extend({
  Radius: z.number(),
  Degree: z.number(),
  AngleOffset: z.number(),
});

// 4
const ZDonutAreaEntity = ZFanAreaEntity.extend({
  ExcludeRadius: z.number(),
});

// 52
const ZBreathAreaEntity = ZFanAreaEntity.extend({
  BarrierTransferAbilities: SkillAbilitySchema.array().optional(),
  ExcludeRadius: long(),
  RemoveWhenHit: bool(),
  EntityType: z.nativeEnum(TargetEntityType),
  NumberOfTargetsRequired: int(),
  ApplyAbilitiesToTargets: ZLevelOneTimeAbility,
  ParticleEffectName: z.string(),
});

export const AreaEntityList = [
  ZAreaEntity.extend({
    $type: z.literal("AreaEntity"),
  }), // 0
  ZCircleAreaEntity.extend({
    $type: z.literal("CircleAreaEntity"),
  }), // 1
  ZObbAreaEntity.extend({
    $type: z.literal("ObbAreaEntity"),
  }), // 2
  ZFanAreaEntity.extend({
    $type: z.literal("FanAreaEntity"),
  }), // 3
  ZDonutAreaEntity.extend({
    $type: z.literal("DonutAreaEntity"),
  }), // 4
  ZBreathAreaEntity.extend({
    $type: z.literal("BreathAreaEntity"),
  }), // 52
] as const;
export const AreaEntitySchema = z.discriminatedUnion("$type", [
  ...AreaEntityList,
]);
