import { z } from "zod";
import { EntitySpawnRule, SkillToTargetDistributeType } from "../enum";
import { SkillEntitySpawnerTimeline } from "../timeline/schema";
import { ZSkillEntity } from "./_base";

export const SkillEntitySpawner = ZSkillEntity.extend({
  Duration: z.number(),
  SpawnRule: z.nativeEnum(EntitySpawnRule),
  RemoveEntityIfSkillCancel: z.boolean(),
  OverrideSkillStartTimingWithSpawnerSpawn: z.boolean(),
  DistributeType: z.nativeEnum(SkillToTargetDistributeType),
  FireToNextTargetWhenEachToEach: z.boolean(),
  EntityTimeline: SkillEntitySpawnerTimeline.array(),
});
