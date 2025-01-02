import { z } from "zod";
import { ModifierCheckTarget } from "../enum";

export const SkillAbilityModifier = z.object({
  CheckTarget: z.nativeEnum(ModifierCheckTarget),
  // TODO
});

const SkillAbility = z.object({
  name: z.string(),
  StartDelay: z.number(),
  LogicEffectGroupIds: z.string().array(),
  Modifiers: SkillAbilityModifier.array().optional(),
});

const LevelDotAbility = SkillAbility.extend({
  $type: z.literal("LevelDotAbility"),
  TotalCount: z.number(),
  Interval: z.number(),
});

const LevelOneTimeAbility = SkillAbility.extend({
  $type: z.literal("LevelOneTimeAbility"),
});

export const SkillAbilitySchema = z.discriminatedUnion("$type", [
  LevelDotAbility,
  LevelOneTimeAbility,
]);
