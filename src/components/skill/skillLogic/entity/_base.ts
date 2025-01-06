import { z } from "zod";
import {
  HighlightOption,
  SkillApplyType,
  SpawnDirectionTypes,
  SpawnPositionTypes,
  TransformDecideTiming,
} from "../enum";
import {
  EssentialCandidateRule,
  OptionalCandidateRule,
  TargetSortRule,
  Vector2,
} from "../misc";

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
  TargetSortRule: TargetSortRule,
  EssentialCandidateRule: EssentialCandidateRule,
  OptionalCandidateRule: OptionalCandidateRule,
  HighlightOption: z.nativeEnum(HighlightOption),
  CheckSpawnPositionMovable: z.boolean(),
});
