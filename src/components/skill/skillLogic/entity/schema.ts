import { z } from "zod";
import { AreaEntityList } from "./0AreaEntity";
import { ZAuraEntity, ZCircleAuraEntity, ZObbAuraEntity } from "./10AuraEntity";
import {
  ProjectileEntityList,
  ZRandomProjectileEntitySpawner,
} from "./19ProjectileEntity";
import { FixedFrameProjectileEntityList } from "./21FixedFrameProjectileEntity";
import { ZTargetAttachedEntity } from "./31TargetAttachedEntity";
import { ZNormalAttackBulletEntity } from "./33NormalAttackBulletEntity";
import { ZTargetSkillEntity } from "./34TargetSkillEntity";
import { SummonEntityList, ZSummonGroupSpawner } from "./37SummonEntity";
import { ZAreaSpawner } from "./45AreaSpawner";
import { ZSkillEntitySpawner } from "./46SkillEntitySpawner";
import { URootMotionMoveBase } from "./60RootMotionMoveBase";
import { ZSkillEntity } from "./_base";

export const SkillEntitySchema = z.discriminatedUnion("$type", [
  ...AreaEntityList, // 0~4, 52
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
  ZTargetAttachedEntity.extend({
    $type: z.literal("TargetAttachedEntity"),
  }), // 31
  // ForceMoveTargetEntityDAO // 32
  ZNormalAttackBulletEntity.extend({
    $type: z.literal("NormalAttackBulletEntity"),
  }), // 33
  ZTargetSkillEntity.extend({
    $type: z.literal("TargetSkillEntity"),
  }), // 34
  ...SummonEntityList, // 37~42, 49, 51, 63
  ZSkillEntity.extend({
    $type: z.literal("SummonTSSEntity"),
  }), // 43
  // BeamEntity // 44
  ZAreaSpawner.extend({
    $type: z.literal("AreaSpawner"),
  }), // 45
  ZSkillEntitySpawner.extend({
    $type: z.literal("SkillEntitySpawner"),
  }), // 46
  ZRandomProjectileEntitySpawner.extend({
    $type: z.literal("RandomProjectileEntitySpawner"),
  }), // 47
  ZSummonGroupSpawner.extend({
    $type: z.literal("SummonGroupSpawner"),
  }), // 48
  ...URootMotionMoveBase, // 60~62
]);

export type SkillEntityType = z.infer<typeof SkillEntitySchema>;
