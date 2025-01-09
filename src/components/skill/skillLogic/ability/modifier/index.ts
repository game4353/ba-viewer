import { ArmorType } from "@/assets/game/excelType";
import { int, long } from "@/components/skill/misc";
import {
  CoverState,
  DiffOperatorType,
  IncludeType,
  ModifierCheckTarget,
} from "@/components/skill/misc/enum";
import { z } from "zod";

const base = z.object({
  CheckTarget: z.nativeEnum(ModifierCheckTarget),
});

// 0
const ZArmorConditionModifier = base.extend({
  ArmorType: z.nativeEnum(ArmorType),
  IncludeType: z.nativeEnum(IncludeType),
});

// 11
const ZCountLogicEffectTemplateModifier = base.extend({
  TemplateId: z.string(),
  CountMin: int(),
  CountMax: int(),
  IncludeType: z.nativeEnum(IncludeType),
});

// 12
const ZCountTagConditionalModifier = base.extend({
  IncludeType: z.nativeEnum(IncludeType),
  TagConstraintsInt: int().array().optional(),
  Count: int(),
  DiffOperator: z.nativeEnum(DiffOperatorType),
});

// 13
const ZCoverStateConditionalModifier = base.extend({
  CoverState: z.nativeEnum(CoverState),
});

// 16
const ZHpRateDamageModifier = base.extend({
  MinHpRate: long(),
  MaxHpRate: long(),
  MinDamageMultiplier: long(),
  MaxDamageMultiplier: long(),
});

// 19
const ZLogicEffectTemplateModifier = base.extend({
  TemplateId: z.string(),
  IncludeType: z.nativeEnum(IncludeType),
});

// 27
const ZTagConditionalModifier = base.extend({
  IncludeType: z.nativeEnum(IncludeType),
  TagConstraintsInt: int().array().optional(),
});

export const ZSkillAbilityModifier = z.discriminatedUnion("$type", [
  ZArmorConditionModifier.extend({
    $type: z.literal("ArmorConditionModifier"),
  }), // 0
  base.extend({ $type: z.literal("BulletTypeConditionModifier") }), // 1
  base.extend({ $type: z.literal("CharacterIdConditionalModifier") }), // 2
  base.extend({ $type: z.literal("CountListModifier") }), // 3
  base.extend({ $type: z.literal("CountEntityListCombinedModifier") }), // 4
  base.extend({ $type: z.literal("CountListEntityInCircleModifier") }), // 5
  base.extend({ $type: z.literal("CountListLogicEffectCategoryModifier") }), // 6
  base.extend({ $type: z.literal("CountListLogicEffectGroupIdModifier") }), // 7
  base.extend({ $type: z.literal("CountListLogicEffectTemplateModifier") }), // 8
  base.extend({ $type: z.literal("CountListTacticRangeModifier") }), // 9
  base.extend({ $type: z.literal("CountListTacticRoleModifier") }), // 10
  ZCountLogicEffectTemplateModifier.extend({
    $type: z.literal("CountLogicEffectTemplateModifier"),
  }), // 11
  ZCountTagConditionalModifier.extend({
    $type: z.literal("CountTagConditionalModifier"),
  }), // 12
  ZCoverStateConditionalModifier.extend({
    $type: z.literal("CoverStateConditionalModifier"),
  }), // 13
  base.extend({ $type: z.literal("CoverStateDamageModifier") }), // 14
  base.extend({ $type: z.literal("FavorLevelStatModifier") }), // 15
  ZHpRateDamageModifier.extend({ $type: z.literal("HpRateDamageModifier") }), // 16
  base.extend({ $type: z.literal("HpRateModifier") }), // 17
  base.extend({ $type: z.literal("LogicEffectCategoryModifier") }), // 18
  ZLogicEffectTemplateModifier.extend({
    $type: z.literal("LogicEffectTemplateModifier"),
  }), // 19
  base.extend({ $type: z.literal("MaxHpCapGaugeModifier") }), // 20
  base.extend({ $type: z.literal("PersonalityIdConditionalModifier") }), // 21
  base.extend({ $type: z.literal("SchoolConditionalModifier") }), // 22
  base.extend({ $type: z.literal("SkillLevelModifier") }), // 23
  base.extend({ $type: z.literal("StatusConditionalModifier") }), // 24
  base.extend({ $type: z.literal("TacticEntityConditionalModifier") }), // 25
  base.extend({ $type: z.literal("TacticEntityDamageModifier") }), // 26
  ZTagConditionalModifier.extend({
    $type: z.literal("TagConditionalModifier"),
  }), // 27
  base.extend({ $type: z.literal("TargetDistanceDamageModifier") }), // 28
  base.extend({ $type: z.literal("WeaponConditionalModifier") }), // 29
  base.extend({ $type: z.literal("TargetSideConditionalModifier") }), // 30
  base.extend({ $type: z.literal("FormIndexCheckModifier") }), // 31
]);

export type TZSkillAbilityModifier = z.infer<typeof ZSkillAbilityModifier>;
