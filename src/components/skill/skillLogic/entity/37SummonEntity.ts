import { ArmorType, EntityMaterialType } from "@/assets/game/excelType";
import { zFlag } from "@/utils/types";
import { z } from "zod";
import { bool, float, int, long } from "../../misc";
import { BarrierShape, MovingAreaOptions } from "../../misc/enum";
import { ZTargetSortRule } from "../../misc/rule";
import { AbilityWithOrder, SkillAbilitySchema } from "../ability/schema";
import { ZAreaSpawner } from "./45AreaSpawner";
import { ZSkillEntitySpawner } from "./46SkillEntitySpawner";
import { ZSkillEntity } from "./_base";

export const SummonEntity = ZSkillEntity.extend({
  UniqueName: z.string().optional(),
  AngleOffset: z.number(),
  Duration: z.number(),
  DestroyAlreadyExist: z.boolean(),
  InitialAreaSpawnerEntity: ZAreaSpawner.optional(),
  InitialEntitySpawner: ZSkillEntitySpawner.optional(),
  SpawnSameGridLayerAsInvoker: z.boolean(),
  SummonAsEnemy: z.boolean(),
  MovingAreaOption: zFlag(MovingAreaOptions),
});

export const CharacterEntity = SummonEntity.extend({
  CostumeId: z.number(),
  InitialAbilities: SkillAbilitySchema.nullable().array().optional(),
  SuccessionFromCasterEquip: z.boolean(),
  SuccessionFromCasterCharacterWeapon: z.boolean(),
  SuccessionFromCasterCharacterGear: z.boolean(),
});
enum OverLimitBehavior {
  None,
  Kill,
  Retreat,
  OverLimitAbility,
  ApplyAbilityAndRemoveFromGroup,
}
const LimitPopulationCharacterEntity = CharacterEntity.extend({
  LimitPopulation: int(),
  PopulationGroupId: z.string(),
  OverLimitRule: z.nativeEnum(OverLimitBehavior),
  OverLimitAbility: SkillAbilitySchema.array(),
  OverLimitTarget: ZTargetSortRule,
});

const BattleItemEntity = SummonEntity.extend({
  RecognitionRadius: long(),
  EffectRadius: long(),
  TargetCount: int(),
  ActiveDelayInFrame: int(),
  LogicEffectGroupIds: z.string().array().optional(),
  Abilities: SkillAbilitySchema.array().optional(),
  AbilitiesInOrderOfInteraction: AbilityWithOrder.array().optional(),
  InEffectRadiusAreaSpawnerEntity: ZAreaSpawner.optional(),
  InEffectRadiusSkillEntitySpawnerEntity: ZSkillEntitySpawner.optional(),
});

const ObstacleEntity = SummonEntity.extend({
  InitialAbilities: SkillAbilitySchema.nullable().array().optional(),
  InitialSkillEntitySpawnerData: ZSkillEntitySpawner.optional(),
});

const BarrierObstacleEntity = SummonEntity.extend({
  InitialAbilities: SkillAbilitySchema.nullable().array().optional(),
  InitialSkillEntitySpawnerData: ZSkillEntitySpawner.optional(),
  BarrierShape: z.nativeEnum(BarrierShape),
  ShapeParameters: float().array(),
  ArmorType: z.nativeEnum(ArmorType),
  MaterialType: z.nativeEnum(EntityMaterialType),
  ApplyLogicEffectToTarget: SkillAbilitySchema.array(),
  FixDirection: bool(),
});

const AttachedBattleItemEntity = BattleItemEntity.extend({});
const BlockedAreaBattleItemEntity = BattleItemEntity.extend({});

const SupporterEntity = SummonEntity.extend({
  CostumeId: long(),
  InitialAbilities: SkillAbilitySchema.nullable().array().optional(),
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
  AttachedBattleItemEntity.extend({
    $type: z.literal("AttachedBattleItemEntity"),
  }), // 6 // 51
  BlockedAreaBattleItemEntity.extend({
    $type: z.literal("BlockedAreaBattleItemEntity"),
  }), // 7 // 39
  LimitPopulationCharacterEntity.extend({
    $type: z.literal("LimitPopulationCharacterEntity"),
  }), // 63 from 1
] as const;
export const SummonEntitySchema = z.discriminatedUnion("$type", [
  ...SummonEntityList,
]);

const ZSummonGroup = z.object({
  GroupName: z.string(),
  Rate: long(),
  SummonEntities: SummonEntitySchema.array(),
});

export const ZSummonGroupSpawner = ZSkillEntity.extend({
  SummonGroups: ZSummonGroup.array(),
});
