import { zFlag } from "@/utils/types";
import { z } from "zod";
import { SkillAbilitySchema } from "../ability/schema";
import { TargetEntityType } from "../enum";
import { int } from "../misc";
import { AreaEntityList } from "./0AreaEntity";
import { ZAuraEntity, ZCircleAuraEntity, ZObbAuraEntity } from "./10AuraEntity";
import { ProjectileEntityList, ZProjectileEntity } from "./19ProjectileEntity";
import { FixedFrameProjectileEntityList } from "./21FixedFrameProjectileEntity";
import { ZNormalAttackBulletEntity } from "./33NormalAttackBulletEntity";
import { ZTargetSkillEntity } from "./34TargetSkillEntity";
import { SummonEntityList } from "./37SummonEntity";
import { AreaSpawner } from "./45AreaSpawner";
import { SkillEntitySpawner } from "./46SkillEntitySpawner";
import { ZSkillEntity } from "./_base";

// 31
const TargetAttachedEntity = ZSkillEntity.extend({
  $type: z.literal("TargetAttachedEntity"),
  Abilities: SkillAbilitySchema.nullable().array().optional(),
});

const RandomProjectileEntity = z.object({
  SpawnProb: int(),
  ProjectileData: ZProjectileEntity,
});
// 47
const RandomProjectileEntitySpawner = ZSkillEntity.extend({
  EntityList: RandomProjectileEntity.array(),
});

// 62
const RootMotionMove = ZSkillEntity.extend({
  $type: z.literal("RootMotionMove"),
  CheckCollisionType: zFlag(TargetEntityType),
  IgnoreMovableCheckInMove: z.boolean(),
});

export const SkillEntitySchema = z.discriminatedUnion("$type", [
  ...AreaEntityList, // 0
  ZAuraEntity.extend({
    $type: z.literal("AuraEntity"),
  }), // 10
  ZCircleAuraEntity.extend({
    $type: z.literal("CircleAuraEntity"),
  }), // 11
  ZObbAuraEntity.extend({
    $type: z.literal("ObbAuraEntity"),
  }), // 12
  ...ProjectileEntityList, // 19, 20, 23, 27~29, 50
  ...FixedFrameProjectileEntityList, // 21, 22, 24~26, 30
  TargetAttachedEntity, // 31
  ZNormalAttackBulletEntity.extend({
    $type: z.literal("NormalAttackBulletEntity"),
  }), // 33
  ZTargetSkillEntity.extend({
    $type: z.literal("TargetSkillEntity"),
  }), // 34
  ...SummonEntityList, // 37~42, 49, 51
  AreaSpawner.extend({
    $type: z.literal("AreaSpawner"),
  }), // 45
  SkillEntitySpawner.extend({
    $type: z.literal("SkillEntitySpawner"),
  }), // 46
  RandomProjectileEntitySpawner.extend({
    $type: z.literal("RandomProjectileEntitySpawner"),
  }), // 47
  RootMotionMove, // 62
]);

export type SkillEntityType = z.infer<typeof SkillEntitySchema>;
