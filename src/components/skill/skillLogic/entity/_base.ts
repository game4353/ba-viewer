import { z } from "zod";
import { Vector2 } from "../../misc";
import {
  HighlightOption,
  SkillApplyType,
  SpawnDirectionTypes,
  SpawnPositionTypes,
  TransformDecideTiming,
} from "../../misc/enum";
import {
  ZEssentialCandidateRule,
  ZOptionalCandidateRule,
  ZTargetSortRule,
} from "../../misc/rule";

export const ZSkillEntity = z.object({
  EntityName: z.string().optional(),
  SpawnRate: z.number(),
  SpawnDelay: z.number(),
  ApplyType: z.nativeEnum(SkillApplyType),
  DecideTiming: z.nativeEnum(TransformDecideTiming),
  EntitySpawnIncludeOutOfRangeInputTarget: z.boolean(),
  SpawnPositionType: z.nativeEnum(SpawnPositionTypes),
  SpawnWorldPosition: Vector2,
  PositionOffset: Vector2,
  PositionRandomOffsetRange: z.number(),
  OffsetDirectionType: z.nativeEnum(SpawnDirectionTypes),
  SpawnDirectionType: z.nativeEnum(SpawnDirectionTypes),
  OverrideTargetingRule: z.boolean(),
  TargetSortRule: ZTargetSortRule,
  EssentialCandidateRule: ZEssentialCandidateRule,
  OptionalCandidateRule: ZOptionalCandidateRule,
  HighlightOption: z.nativeEnum(HighlightOption),
  CheckSpawnPositionMovable: z.boolean(),
});

export type TZSkillEntity = z.infer<typeof ZSkillEntity>;
