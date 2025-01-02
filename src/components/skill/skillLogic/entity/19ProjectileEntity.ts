import { z } from "zod";
import { SkillAbilitySchema } from "../ability/schema";
import {
  ProjectileTypes,
  ShapeType,
  SpawnDirectionTypes,
  SpawnPositionTypes,
} from "../enum";
import { Vector2 } from "../misc";
import { AreaEntitySchema } from "./0AreaEntity";
import { AreaSpawner } from "./45AreaSpawner";
import { SkillEntitySpawner } from "./46SkillEntitySpawner";
import { SkillEntity } from "./_base";
import * as LevelNontargetProjectileEntityData from "./LevelNontargetProjectileEntityData";

const ProjectileEntity = SkillEntity.extend({
  $type: z.literal("ProjectileEntity"),
  DestinationType: z.nativeEnum(SpawnPositionTypes),
  DestinationWorldPosition: Vector2,
  DestinationPositionOffset: Vector2,
  DestinationPositionRandomOffsetRange: z.number(),
  DestinationOffsetDirectionType: z.nativeEnum(SpawnDirectionTypes),
  ReduceDamageRatePerHit: z.number(),
  MaxReducedDamageRate: z.number(),
  ProjectileType: z.nativeEnum(ProjectileTypes),
  ShapeType: z.nativeEnum(ShapeType),
  Width: z.number(),
  Height: z.number(),
  Speed: z.number(),
  FireDelayFrame: z.number(),
  IsStickToTargetAfterHit: z.boolean(),
  Abilities: SkillAbilitySchema.array().optional(),
  SplashDelayFrame: z.number(),
  SplashAreaEntityData: AreaEntitySchema.optional(),
  AreaSpawnerData: AreaSpawner.optional(),
  SkillEntitySpawnerData: SkillEntitySpawner.optional(),
});

const TargetProjectileEntity = ProjectileEntity.extend({
  $type: z.literal("TargetProjectileEntity"),
});

const NontargetProjectileEntity = ProjectileEntity.extend({
  $type: z.literal("NontargetProjectileEntity"),
  AngleOffset: z.number(),
  ExpireDistance: z.number(),
  Piercing: z.boolean(),
  BounceCondition: z.nativeEnum(
    LevelNontargetProjectileEntityData.NontargetBounceCondition,
  ),
  BounceEntity: SkillEntity.optional(),
});

export const ProjectileEntityList = [
  TargetProjectileEntity, // 1
  // TargetBounceProjectileEntity, // 2
  // ExtraHitTargetProjectileEntity, // 3
  NontargetProjectileEntity, // 4
  // NontargetDestructibleProjectileEntity, // 5
  // NontargetDestructibleOnRailsProjectileEntity, // 6
] as const;
export const ProjectileEntitySchema = z.discriminatedUnion("$type", [
  ...ProjectileEntityList,
]);
