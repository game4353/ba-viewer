import { zFlag } from "@/utils/types";
import { z } from "zod";
import { SkillAbilitySchema } from "../ability/schema";
import { TargetEntityType } from "../enum";
import { int } from "../misc";
import { AreaEntityList } from "./0AreaEntity";
import { AuraEntityList } from "./10AuraEntity";
import {
  ProjectileEntityList,
  ProjectileEntitySchema,
} from "./19ProjectileEntity";
import { FixedFrameProjectileEntityList } from "./21FixedFrameProjectileEntity";
import { SummonEntityList } from "./37SummonEntity";
import { AreaSpawner } from "./45AreaSpawner";
import { SkillEntitySpawner } from "./46SkillEntitySpawner";
import { SkillEntity } from "./_base";

// 31
const TargetAttachedEntity = SkillEntity.extend({
  $type: z.literal("TargetAttachedEntity"),
  Abilities: SkillAbilitySchema.nullable().array().optional(),
});
// 34
const TargetSkillEntity = SkillEntity.extend({
  $type: z.literal("TargetSkillEntity"),
  Abilities: SkillAbilitySchema.array(),
});
// 33
const NormalAttackBulletEntity = TargetSkillEntity.extend({
  $type: z.literal("NormalAttackBulletEntity"),
  Speed: z.number(),
});

const RandomProjectileEntity = z.object({
  SpawnProb: int(),
  ProjectileData: ProjectileEntitySchema,
});
// 47
const RandomProjectileEntitySpawner = SkillEntity.extend({
  EntityList: RandomProjectileEntity.array(),
});

// 62
const RootMotionMove = SkillEntity.extend({
  $type: z.literal("RootMotionMove"),
  CheckCollisionType: zFlag(TargetEntityType),
  IgnoreMovableCheckInMove: z.boolean(),
});

export const SkillEntitySchema = z.discriminatedUnion("$type", [
  ...AreaEntityList, // 0
  ...AuraEntityList, // 10
  ...ProjectileEntityList, // 19, 20, 23, 27~29, 50
  ...FixedFrameProjectileEntityList, // 21, 22, 24~26, 30
  TargetAttachedEntity, // 31
  NormalAttackBulletEntity, // 33
  TargetSkillEntity, // 34
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
