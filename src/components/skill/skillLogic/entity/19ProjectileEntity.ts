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
import { CharacterEntity } from "./37SummonEntity";
import { AreaSpawner } from "./45AreaSpawner";
import { SkillEntitySpawner } from "./46SkillEntitySpawner";
import { SkillEntity } from "./_base";
import * as LevelNontargetProjectileEntityData from "./LevelNontargetProjectileEntityData";

const ProjectileEntity = SkillEntity.extend({
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

export const ZTargetProjectileEntity = ProjectileEntity;
export type TZTargetProjectileEntity = z.infer<typeof ZTargetProjectileEntity>;

const ExtraHitTargetProjectileEntity = ZTargetProjectileEntity.extend({
  ExtraHitCheckTargetSide: zFlag(TargetSideId),
  ExtraHitCheckTargetEntityType: zFlag(TargetEntityType),
  Piercing: bool(),
  MaxExtraHitCount: int(),
});
const NontargetProjectileEntity = ProjectileEntity.extend({
  AngleOffset: z.number(),
  ExpireDistance: z.number(),
  Piercing: z.boolean(),
  BounceCondition: z.nativeEnum(
    LevelNontargetProjectileEntityData.NontargetBounceCondition,
  ),
  BounceEntity: SkillEntity.optional(),
});

const NontargetDestructibleProjectileEntity = NontargetProjectileEntity.extend({
  CharacterEntityForStat: CharacterEntity,
  DestroyedSpawnEntity: SkillEntitySpawner,
});

type TargetBounceProjectileEntityType = z.infer<
  typeof ZTargetProjectileEntity
> & {
  BounceRadius: number;
  AllowBounceTargetDuplication: boolean;
  BounceProjectileEntity?: TargetBounceProjectileEntityType;
};
const TargetBounceProjectileEntity_sub: z.ZodType<TargetBounceProjectileEntityType> =
  ZTargetProjectileEntity.extend({
    BounceRadius: long(),
    AllowBounceTargetDuplication: bool(),
    BounceProjectileEntity: z
      .lazy(() => TargetBounceProjectileEntity_sub)
      .optional(),
  });
export const TargetBounceProjectileEntity = ZTargetProjectileEntity.extend({
  BounceRadius: long(),
  AllowBounceTargetDuplication: bool(),
  BounceProjectileEntity: TargetBounceProjectileEntity_sub.optional(),
});

export const ProjectileEntityList = [
  ProjectileEntity.extend({
    $type: z.literal("ProjectileEntity"),
  }), // x // 19
  ZTargetProjectileEntity.extend({
    $type: z.literal("TargetProjectileEntity"),
  }), // 1 // 20
  TargetBounceProjectileEntity.extend({
    $type: z.literal("TargetBounceProjectileEntity"),
  }), // 2 // 29
  ExtraHitTargetProjectileEntity.extend({
    $type: z.literal("ExtraHitTargetProjectileEntity"),
  }), // 3 // 23
  NontargetProjectileEntity.extend({
    $type: z.literal("NontargetProjectileEntity"),
  }), // 4 // 27
  NontargetDestructibleProjectileEntity.extend({
    $type: z.literal("NontargetDestructibleProjectileEntity"),
  }), // 5 // 28
  // NontargetDestructibleOnRailsProjectileEntity, // 6 // 50
] as const;
export const ProjectileEntitySchema = z.discriminatedUnion("$type", [
  ...ProjectileEntityList,
]);
