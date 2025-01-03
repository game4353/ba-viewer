import { zFlag } from "@/utils/types";
import { z } from "zod";
import { SkillAbilitySchema } from "../ability/schema";
import {
  ProjectileTypes,
  ShapeType,
  SpawnDirectionTypes,
  SpawnPositionTypes,
  TargetEntityType,
  TargetSideId,
} from "../enum";
import { bool, int, long, Vector2 } from "../misc";
import { AreaEntitySchema } from "./0AreaEntity";
import { TargetBounceProjectileEntity } from "./19ProjectileEntity";
import { CharacterEntity } from "./37SummonEntity";
import { AreaSpawner } from "./45AreaSpawner";
import { SkillEntitySpawner } from "./46SkillEntitySpawner";
import { SkillEntity } from "./_base";
import * as LevelNontargetProjectileEntityData from "./LevelNontargetProjectileEntityData";

const FixedFrameProjectileEntity = SkillEntity.extend({
  DestinationType: z.nativeEnum(SpawnPositionTypes),
  DestinationWorldPosition: Vector2,
  DestinationPositionOffset: Vector2,
  DestinationPositionRandomOffsetRange: int(),
  DestinationOffsetDirectionType: z.nativeEnum(SpawnDirectionTypes),
  ReduceDamageRatePerHit: long(),
  MaxReducedDamageRate: long(),
  ProjectileType: z.nativeEnum(ProjectileTypes),
  ShapeType: z.nativeEnum(ShapeType),
  Width: long(),
  Height: long(),
  FrameToHit: long(),
  FireDelayFrame: int(),
  IsStickToTargetAfterHit: bool(),
  Abilities: SkillAbilitySchema.array().optional(),
  SplashDelayFrame: int(),
  SplashAreaEntityData: AreaEntitySchema.optional(),
  AreaSpawnerData: AreaSpawner.optional(),
  SkillEntitySpawnerData: SkillEntitySpawner.optional(),
});

const FixedFrameTargetProjectileEntity = FixedFrameProjectileEntity;
const FixedFrameExtraHitTargetProjectileEntity =
  FixedFrameTargetProjectileEntity.extend({
    ExtraHitCheckTargetSide: zFlag(TargetSideId),
    ExtraHitCheckTargetEntityType: zFlag(TargetEntityType),
    Piercing: bool(),
    MaxExtraHitCount: int(),
  });
const FixedFrameNontargetProjectileEntity = FixedFrameProjectileEntity.extend({
  AngleOffset: int(),
  ExpireDistance: long(),
  Piercing: bool(),
  BounceCondition: z.nativeEnum(
    LevelNontargetProjectileEntityData.NontargetBounceCondition,
  ),
  BounceEntity: SkillEntity.optional(),
});

const FixedFrameNontargetDestructibleProjectileEntity =
  FixedFrameNontargetProjectileEntity.extend({
    CharacterEntityForStat: CharacterEntity,
    DestroyedSpawnEntity: SkillEntitySpawner,
  });

const FixedFrameTargetBounceProjectileEntity =
  FixedFrameTargetProjectileEntity.extend({
    BounceRadius: long(),
    AllowBounceTargetDuplication: bool(),
    BounceProjectileEntity: TargetBounceProjectileEntity.optional(),
  });

export const FixedFrameProjectileEntityList = [
  FixedFrameProjectileEntity.extend({
    $type: z.literal("FixedFrameProjectileEntity"),
  }), // x // 21
  FixedFrameTargetProjectileEntity.extend({
    $type: z.literal("FixedFrameTargetProjectileEntity"),
  }), // 1 // 22
  FixedFrameExtraHitTargetProjectileEntity.extend({
    $type: z.literal("FixedFrameExtraHitTargetProjectileEntity"),
  }), // 2 // 24
  FixedFrameTargetBounceProjectileEntity.extend({
    $type: z.literal("FixedFrameTargetBounceProjectileEntity"),
  }), // 3 // 30
  FixedFrameNontargetProjectileEntity.extend({
    $type: z.literal("FixedFrameNontargetProjectileEntity"),
  }), // 4 // 25
  FixedFrameNontargetDestructibleProjectileEntity.extend({
    $type: z.literal("FixedFrameNontargetDestructibleProjectileEntity"),
  }), // 5 // 26
] as const;
export const FixedFrameProjectileEntitySchema = z.discriminatedUnion("$type", [
  ...FixedFrameProjectileEntityList,
]);
