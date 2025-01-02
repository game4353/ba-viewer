import { zFlag } from "@/utils/types";
import { z } from "zod";
import { SkillAbilitySchema } from "../ability/schema";
import { MovingAreaOptions } from "../enum";
import { AreaSpawner } from "./45AreaSpawner";
import { SkillEntitySpawner } from "./46SkillEntitySpawner";
import { SkillEntity } from "./_base";

export const SummonEntity = SkillEntity.extend({
  $type: z.literal("SummonEntity"),
  UniqueName: z.string(),
  AngleOffset: z.number(),
  Duration: z.number(),
  DestroyAlreadyExist: z.boolean(),
  InitialAreaSpawnerEntity: AreaSpawner.optional(),
  InitialEntitySpawner: SkillEntitySpawner.optional(),
  SpawnSameGridLayerAsInvoker: z.boolean(),
  SummonAsEnemy: z.boolean(),
  MovingAreaOption: zFlag(MovingAreaOptions),
});

const CharacterEntity = SummonEntity.extend({
  $type: z.literal("CharacterEntity"),
  CostumeId: z.number(),
  InitialAbilities: SkillAbilitySchema.array(),
  SuccessionFromCasterEquip: z.boolean(),
  SuccessionFromCasterCharacterWeapon: z.boolean(),
  SuccessionFromCasterCharacterGear: z.boolean(),
});

// 37
export const SummonEntityList = [
  // BattleItemEntity, // 1 // 38
  CharacterEntity, // 2 // 40
  // ObstacleEntity, // 3 // 41
  // SupporterEntity, // 4 // 42
  // BarrierObstacleEntity, // 5 // 49
  // AttachedBattleItemEntity, // 6 // 51
  // BlockedAreaBattleItemEntity, // 7 // 39
] as const;
export const SummonEntitySchema = z.discriminatedUnion("$type", [
  ...SummonEntityList,
]);
