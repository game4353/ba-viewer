import { z } from "zod";
import { EntitySpawnRule, SkillToTargetDistributeType } from "../enum";
import { SkillEntitySpawnerTimeline } from "../timeline/schema";
import { SkillEntity } from "./_base";

export const SkillEntitySpawner = SkillEntity.extend({
  Duration: z.number(),
  SpawnRule: z.nativeEnum(EntitySpawnRule),
  RemoveEntityIfSkillCancel: z.boolean(),
  OverrideSkillStartTimingWithSpawnerSpawn: z.boolean(),
  DistributeType: z.nativeEnum(SkillToTargetDistributeType),
  FireToNextTargetWhenEachToEach: z.boolean(),
  EntityTimeline: SkillEntitySpawnerTimeline.array(),
});
