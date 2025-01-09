import { z } from "zod";
import { int, long, Vector2 } from "../../misc";
import {
  AbilityActivateTag,
  EntitySpawnCondition,
  EntitySpawnConditionCheckTarget,
  SpawnDirectionTypes,
} from "../../misc/enum";
import { SkillEntitySchema, SkillEntityType } from "../entity/schema";
import type { TZAreaTimeline } from "./AreaTimeline";

type TZSkillEntityTimeline = {
  Frame: number;
  DamageDistributeRate: number;
  Entity?: SkillEntityType;
};
export const ZSkillEntityTimeline: z.ZodType<TZSkillEntityTimeline> = z.object({
  Frame: int(),
  DamageDistributeRate: long(),
  Entity: z.lazy(() => SkillEntitySchema).optional(),
});
export type TZExSkillEntityTimeline = TZSkillEntityTimeline & {
  Tag: AbilityActivateTag;
  InvokerDirectionOverride: SpawnDirectionTypes;
  InvokerDirectionOverrideWorldPosition: z.infer<typeof Vector2>;
};
export const ZExSkillEntityTimeline: z.ZodType<TZExSkillEntityTimeline> =
  z.object({
    Frame: int(),
    DamageDistributeRate: long(),
    Entity: z.lazy(() => SkillEntitySchema).optional(),
    Tag: z.nativeEnum(AbilityActivateTag),
    InvokerDirectionOverride: z.nativeEnum(SpawnDirectionTypes),
    InvokerDirectionOverrideWorldPosition: Vector2,
  });
export type TZSkillEntitySpawnerTimeline = TZSkillEntityTimeline & {
  SpawnCondition: EntitySpawnCondition;
  SpawnConditionParameter?: string;
  SpawnConditionParameterForTag?: string;
  SpawnConditionCheckTarget: EntitySpawnConditionCheckTarget;
};
export const ZSkillEntitySpawnerTimeline: z.ZodType<TZSkillEntitySpawnerTimeline> =
  z.object({
    Frame: int(),
    DamageDistributeRate: long(),
    Entity: z.lazy(() => SkillEntitySchema).optional(),
    SpawnCondition: z.nativeEnum(EntitySpawnCondition),
    SpawnConditionParameter: z.string().optional(),
    SpawnConditionParameterForTag: z.string().optional(),
    SpawnConditionCheckTarget: z.nativeEnum(EntitySpawnConditionCheckTarget),
  });

export type TimelineTypes =
  | TZSkillEntityTimeline
  | TZExSkillEntityTimeline
  | TZSkillEntitySpawnerTimeline
  | TZAreaTimeline;
