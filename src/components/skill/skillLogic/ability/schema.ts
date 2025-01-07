import { z } from "zod";
import { int } from "../../misc";
import { AutoUseConditionType, ModifierCheckTarget } from "../../misc/enum";
import { ZSkillAbilityModifier } from "./modifier";

const ZSkillAbility = z.object({
  name: z.string(),
  StartDelay: z.number(),
  LogicEffectGroupIds: z.string().array(),
  Modifiers: ZSkillAbilityModifier.array().optional(),
});

const ZLevelDotAbility = ZSkillAbility.extend({
  TotalCount: z.number(),
  Interval: z.number(),
});

export const ZLevelOneTimeAbility = ZSkillAbility.extend({});

export const SkillAbilitySchema = z.discriminatedUnion("$type", [
  ZLevelDotAbility.extend({
    $type: z.literal("LevelDotAbility"),
  }),
  ZLevelOneTimeAbility.extend({
    $type: z.literal("LevelOneTimeAbility"),
  }),
]);

export type SkillAbilityType = z.infer<typeof SkillAbilitySchema>;

export const AbilityWithOrder = z.object({
  OrderNumber: int(),
  Ability: SkillAbilitySchema,
});

export const ZAutoUseRule = z.object({
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
export type TZAutoUseRule = z.infer<typeof ZAutoUseRule>;
