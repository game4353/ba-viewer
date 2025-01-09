import { bool, int } from "@/components/skill/misc";
import {
  EntitySpawnRule,
  SkillToTargetDistributeType,
} from "@/components/skill/misc/enum";
import { z } from "zod";
import { ZSkillEntitySpawnerTimeline } from "../../timeline/schema";
import { ZSkillEntity } from "../_base";

export const ZSkillEntitySpawner = ZSkillEntity.extend({
  Duration: int(),
  SpawnRule: z.nativeEnum(EntitySpawnRule),
  RemoveEntityIfSkillCancel: bool(),
  OverrideSkillStartTimingWithSpawnerSpawn: bool(),
  DistributeType: z.nativeEnum(SkillToTargetDistributeType),
  FireToNextTargetWhenEachToEach: bool(),
  EntityTimeline: ZSkillEntitySpawnerTimeline.array(),
});
