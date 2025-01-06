import { ArmorType, EntityMaterialType } from "@/assets/game/excelType";
import { zFlag } from "@/utils/types";
import { z } from "zod";
import { AbilityWithOrder, SkillAbilitySchema } from "../ability/schema";
import { BarrierShape, MovingAreaOptions } from "../enum";
import { bool, float, int, long } from "../misc";
import { AreaSpawner } from "./45AreaSpawner";
import { SkillEntitySpawner } from "./46SkillEntitySpawner";
import { ZSkillEntity } from "./_base";

export const SummonEntity = ZSkillEntity.extend({
  UniqueName: z.string().optional(),
  AngleOffset: z.number(),
  Duration: z.number(),
  DestroyAlreadyExist: z.boolean(),
  InitialAreaSpawnerEntity: AreaSpawner.optional(),
  InitialEntitySpawner: SkillEntitySpawner.optional(),
  SpawnSameGridLayerAsInvoker: z.boolean(),
  SummonAsEnemy: z.boolean(),
  MovingAreaOption: zFlag(MovingAreaOptions),
});

export const CharacterEntity = SummonEntity.extend({
  CostumeId: z.number(),
  InitialAbilities: SkillAbilitySchema.array(),
  SuccessionFromCasterEquip: z.boolean(),
  SuccessionFromCasterCharacterWeapon: z.boolean(),
  SuccessionFromCasterCharacterGear: z.boolean(),
});

const BattleItemEntity = SummonEntity.extend({
  RecognitionRadius: long(),
  EffectRadius: long(),
  TargetCount: int(),
  ActiveDelayInFrame: int(),
  LogicEffectGroupIds: z.string().array().optional(),
  Abilities: SkillAbilitySchema.array().optional(),
  AbilitiesInOrderOfInteraction: AbilityWithOrder.array().optional(),
  InEffectRadiusAreaSpawnerEntity: AreaSpawner.optional(),
  InEffectRadiusSkillEntitySpawnerEntity: SkillEntitySpawner.optional(),
});

const ObstacleEntity = SummonEntity.extend({
  InitialAbilities: SkillAbilitySchema.array(),
  InitialSkillEntitySpawnerData: SkillEntitySpawner.optional(),
});

const BarrierObstacleEntity = SummonEntity.extend({
  InitialAbilities: SkillAbilitySchema.array(),
  InitialSkillEntitySpawnerData: SkillEntitySpawner.optional(),
  BarrierShape: z.nativeEnum(BarrierShape),
  ShapeParameters: float().array(),
  ArmorType: z.nativeEnum(ArmorType),
  MaterialType: z.nativeEnum(EntityMaterialType),
  ApplyLogicEffectToTarget: SkillAbilitySchema.array(),
  FixDirection: bool(),
});
const SupporterEntity = SummonEntity.extend({
  CostumeId: long(),
  InitialAbilities: SkillAbilitySchema.array(),
  SuccessionFromCasterEquip: bool(),
  SuccessionFromCasterCharacterWeapon: bool(),
  SuccessionFromCasterCharacterGear: bool(),
});

// 37
export const SummonEntityList = [
  SummonEntity.extend({
    $type: z.literal("SummonEntity"),
  }), // x // 37
  BattleItemEntity.extend({
    $type: z.literal("BattleItemEntity"),
  }), // 1 // 38
  CharacterEntity.extend({
    $type: z.literal("CharacterEntity"),
  }), // 2 // 40
  ObstacleEntity.extend({
    $type: z.literal("ObstacleEntity"),
  }), // 3 // 41
  SupporterEntity.extend({
    $type: z.literal("SupporterEntity"),
  }), // 4 // 42
  BarrierObstacleEntity.extend({
    $type: z.literal("BarrierObstacleEntity"),
  }), // 5 // 49
  // AttachedBattleItemEntity, // 6 // 51
  // BlockedAreaBattleItemEntity, // 7 // 39
] as const;
export const SummonEntitySchema = z.discriminatedUnion("$type", [
  ...SummonEntityList,
]);
