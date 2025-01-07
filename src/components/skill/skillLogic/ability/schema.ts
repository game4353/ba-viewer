import { z } from "zod";
import { int } from "../../misc";
import { AutoUseConditionType, ModifierCheckTarget } from "../enum";
import { ZSkillAbilityModifier } from "./modifier";

const SkillAbility = z.object({
  name: z.string(),
  StartDelay: z.number(),
  LogicEffectGroupIds: z.string().array(),
  Modifiers: ZSkillAbilityModifier.array().optional(),
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

export type SkillAbilityType = z.infer<typeof SkillAbilitySchema>;

export const AbilityWithOrder = z.object({
  OrderNumber: int(),
  Ability: SkillAbilitySchema,
});

export const AutoUseRule = z.object({
  ConditionType: z.nativeEnum(AutoUseConditionType),
  ConditionArgument: z.string().optional(),
  ConditionCheckTarget: z.nativeEnum(ModifierCheckTarget),
  CoolTimeNotTrigger: z.number(),
  TryCount: z.number(),
  ResetTryCountUseSkill: z.boolean(),
  TriggerRate: z.number(),
  MaxTriggerCount: z.number(),
  CheckMountStatus: z.boolean(),
  TryToUseSkillModifiers: ZSkillAbilityModifier.array().optional(),
});
