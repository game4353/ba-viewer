import { z } from "zod";
import { Vector2 } from "../../misc";
import { SkillEntitySchema, SkillEntityType } from "../entity/schema";
import {
  AbilityActivateTag,
  EntitySpawnCondition,
  EntitySpawnConditionCheckTarget,
  SpawnDirectionTypes,
} from "../enum";

type SkillEntityTimelineType = {
  Frame: number;
  DamageDistributeRate: number;
  Entity?: SkillEntityType;
};
export const ZSkillEntityTimeline: z.ZodType<SkillEntityTimelineType> =
  z.object({
    Frame: z.number(),
    DamageDistributeRate: z.number(),
    Entity: z.lazy(() => SkillEntitySchema).optional(),
  });
export type ExSkillEntityTimelineType = SkillEntityTimelineType & {
  Tag: AbilityActivateTag;
  InvokerDirectionOverride: SpawnDirectionTypes;
  InvokerDirectionOverrideWorldPosition: z.infer<typeof Vector2>;
};
export const ExSkillEntityTimeline: z.ZodType<ExSkillEntityTimelineType> =
  z.object({
    Frame: z.number(),
    DamageDistributeRate: z.number(),
    Entity: z.lazy(() => SkillEntitySchema).optional(),
    Tag: z.nativeEnum(AbilityActivateTag),
    InvokerDirectionOverride: z.nativeEnum(SpawnDirectionTypes),
    InvokerDirectionOverrideWorldPosition: Vector2,
  });
type SkillEntitySpawnerTimelineType = SkillEntityTimelineType & {
  SpawnCondition: EntitySpawnCondition;
  SpawnConditionParameter?: string;
  SpawnConditionParameterForTag?: string;
  SpawnConditionCheckTarget: EntitySpawnConditionCheckTarget;
};
export const SkillEntitySpawnerTimeline: z.ZodType<SkillEntitySpawnerTimelineType> =
  z.object({
    Frame: z.number(),
    DamageDistributeRate: z.number(),
    Entity: z.lazy(() => SkillEntitySchema).optional(),
    SpawnCondition: z.nativeEnum(EntitySpawnCondition),
    SpawnConditionParameter: z.string().optional(),
    SpawnConditionParameterForTag: z.string().optional(),
    SpawnConditionCheckTarget: z.nativeEnum(EntitySpawnConditionCheckTarget),
  });

export type TimelineType =
  | SkillEntityTimelineType
  | ExSkillEntityTimelineType
  | SkillEntitySpawnerTimelineType;
