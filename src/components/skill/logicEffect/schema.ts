import { zFlag } from "@/utils/types";
import { z } from "zod";
import {
  BulletType,
  EndCondition,
  FontType,
  KnockbackDirection,
  LogicEffectCategory,
  StageTopography,
  StatType,
  TacticEntityType,
} from "~game/excelType";
import { TargetSideId } from "../skillLogic/enum";
import { ZDamageEffect } from "./17DamageEffect/DamageEffect";
import { ZLogicEffect } from "./_base";
import * as DamageByHitEffectData from "./DamageByHitEffectData";
import * as DamageOverTimeEffectData from "./DamageOverTimeEffectData";
import {
  DamageCriticalType,
  ExtraStatType,
  HeroStatus,
  LogicEffectEndCondition,
} from "./enum";
import * as ExSkillCardRedrawGaugeEffectData from "./ExSkillCardRedrawGaugeEffectData";
import * as HealByHitEffectData from "./HealByHitEffectData";

const LogicEffect = ZLogicEffect;

// 7
const BulletTypeChangeEffect = LogicEffect.extend({
  $type: z.literal("BulletTypeChangeEffect"),
  EndCondition: z.nativeEnum(LogicEffectEndCondition),
  EndConditionArgument: z.number(),
  ChangeBulletType: z.nativeEnum(BulletType),
  IsChangeNormal: z.boolean(),
  IsChangeEx: z.boolean(),
  IsChangePublic: z.boolean(),
  IsChangeLeader: z.boolean(),
  IsChangePassive: z.boolean(),
  IsChangeExtraPassive: z.boolean(),
  Dispellable: z.boolean(),
});

// 14
const DamageByHitEffect = LogicEffect.extend({
  $type: z.literal("DamageByHitEffect"),
  Amount: z.number(),
  BonusSourceFirst: z.nativeEnum(StatType),
  BonusRateFirst: z.number(),
  Duration: z.number(),
  TriggerType: z.nativeEnum(DamageByHitEffectData.DamageByHitTriggerType),
  IsDispellable: z.boolean(),
  ApplyBulletType: z.boolean(),
  ApplyDefense: z.boolean(),
  ApplyDamageRatio: z.boolean(),
  ApplyDamageRatio2: z.boolean(),
  RemoveCondition: z.nativeEnum(
    DamageByHitEffectData.DamageByHitRemoveCondition,
  ),
  RemoveConditionArgument: z.number(),
  AddSource: z.nativeEnum(ExtraStatType),
  AddRate: z.number(),
  MaxDamageRate: z.number(),
  DefensePenetrationRate: z.number(),
  TriggerArgument: z.string(),
  AddTriggerValueRate: z.number(),
  IgnoreShield: z.boolean(),
  ApplyStability: z.boolean(),
  ApplyTerrainAdaptationDamage: z.boolean(),
  ApplyExDamagedRatio: z.boolean(),
  ForceFloaterHide: z.boolean(),
});

// 15
const DamagedLimitEffect = LogicEffect.extend({
  $type: z.literal("DamagedLimitEffect"),
  LimitAmount: z.number(),
  LimitHPRate: z.number(),
  ExtraStatType: z.nativeEnum(ExtraStatType),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgumentFirst: z.string(),
  EndConditionArgumentSecond: z.string(),
  Dispellable: z.boolean(),
});

// 16
const DamagedMultiplierbyDamageOverTimeEffect = LogicEffect.extend({
  $type: z.literal("DamagedMultiplierbyDamageOverTimeEffect"),
  AddRate: z.number(),
  ApplyLogicEffectTemplateId: z.string(),
  RemoveCondition: z.nativeEnum(EndCondition),
  RemoveConditionArgument: z.string(),
  IsDispellable: z.boolean(),
});

// 18
const DamageOverTimeEffect = LogicEffect.extend({
  $type: z.literal("DamageOverTimeEffect"),
  Amount: z.number(),
  BonusSourceFirst: z.nativeEnum(StatType),
  BonusRateFirst: z.number(),
  Duration: z.number(),
  Period: z.number(),
  IsDispellable: z.boolean(),
  ApplyBulletType: z.boolean(),
  ApplyDefense: z.boolean(),
  ApplyDamageRatio: z.boolean(),
  ApplyDamageRatio2: z.boolean(),
  RemoveCondition: z.nativeEnum(
    DamageOverTimeEffectData.DamageOverTimeRemoveCondition,
  ),
  RemoveConditionArgument: z.number(),
  AddSource: z.nativeEnum(ExtraStatType),
  AddRate: z.number(),
  MaxDamageRate: z.number(),
  DefensePenetrationRate: z.number(),
  ChangeRateByCost: z.string(),
  IgnoreShield: z.boolean(),
  ApplyStability: z.boolean(),
  ApplyTerrainAdaptationDamage: z.boolean(),
  ApplyExDamagedRatio: z.boolean(),
  ForceFloaterHide: z.boolean(),
});

// 19
const DamageTransferEffect = LogicEffect.extend({
  $type: z.literal("DamageTransferEffect"),
  Duration: z.number(),
  TransferRatio: z.number(),
  IsDispellable: z.boolean(),
  TransferredDamageEffectGroupId: z.string(),
  TransferredDamageEffectLevel: z.number(),
});

// 20
const DeadlyAttackEffect = LogicEffect.extend({
  $type: z.literal("DeadlyAttackEffect"),
  Amount: z.number(),
  ForceFloaterHide: z.boolean(),
});

// 21
const DispelEffect = LogicEffect.extend({
  $type: z.literal("DispelEffect"),
  DispelTarget: z.nativeEnum(LogicEffectCategory),
  DispelCount: z.number(),
});

// 22
const DispelLogicEffectTemplateEffect = LogicEffect.extend({
  $type: z.literal("DispelLogicEffectTemplateEffect"),
  LogicEffectTemplateToDispel: z.string(),
  DispelCount: z.number(),
});

// 23
const DummyEffect = LogicEffect.extend({
  $type: z.literal("DummyEffect"),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgument: z.number(),
  StackSameEffectApplied: z.boolean(),
  StackSameEffectCount: z.number(),
  ExpireOldIfStackCountOver: z.boolean(),
  IsDispellable: z.boolean(),
});

// 25
const ExSkillCardRedrawGaugeEffect = LogicEffect.extend({
  $type: z.literal("ExSkillCardRedrawGaugeEffect"),
  TargetSide: zFlag(TargetSideId),
  GaugeChargeCondition: z.nativeEnum(
    ExSkillCardRedrawGaugeEffectData.GaugeChargeConditionType,
  ),
  ConditionParameter: z.string(),
  TryCount: z.number(),
  ChargeValue: z.number(),
  InitialGaugeValue: z.number(),
  MaxGaugeValue: z.number(),
  InitialRedrawStackCount: z.number(),
  MaxRedrawStackCount: z.number(),
  MaxRedrawTriggerCount: z.number(),
  IsShowUI: z.boolean(),
  ApplyLogicEffectGroupIdGetStack: z.string(),
  IsNPC: z.boolean(),
  TacticEntityType: z.nativeEnum(TacticEntityType).array(),
});

// 26
const ExtraStatDamageEffect = LogicEffect.extend({
  $type: z.literal("ExtraStatDamageEffect"),
  CriticalCheck: z.nativeEnum(DamageCriticalType),
  CanEvade: z.boolean(),
  Amount: z.number(),
  BonusSourceFirst: z.nativeEnum(StatType),
  BonusRateFirst: z.number(),
  MultiplySource: z.nativeEnum(ExtraStatType),
  MultiplierConstant: z.number(),
  AddSource: z.nativeEnum(ExtraStatType),
  AddRate: z.number(),
  MaxDamageRate: z.number(),
  ApplyBulletType: z.boolean(),
  ApplyDefense: z.boolean(),
  ApplyDamageRatio: z.boolean(),
  ApplyDamageRatio2: z.boolean(),
  DefensePenetrationRate: z.number(),
  ChangeRateByCost: z.string(),
  IgnoreShield: z.boolean(),
  ApplyStability: z.boolean(),
  ApplyTerrainAdaptationDamage: z.boolean(),
  ApplyExDamagedRatio: z.boolean(),
  ForceFloaterHide: z.boolean(),
});

// 27
const ForceApplyStatChangeToAllyEffect = LogicEffect.extend({
  $type: z.literal("ForceApplyStatChangeToAllyEffect"),
  Range: z.number(),
  CategoryCondition: z.nativeEnum(LogicEffectCategory),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgumentFirst: z.string(),
  EndConditionArgumentSecond: z.string(),
  Dispellable: z.boolean(),
});

// 29
const FormConversionEffect = LogicEffect.extend({
  $type: z.literal("FormConversionEffect"),
  FormConversionEndCondition: z.nativeEnum(LogicEffectEndCondition),
  EndConditionArgument: z.number(),
  FormIndex: z.number(),
  NormalAttackIndex: z.number(),
  PublicSkillIndex: z.number(),
  Dispellable: z.boolean(),
  ReleaseFormConversionRequired: z.boolean(),
  ReleaseFormConversionDuration: z.number(),
  DisableUseSkill: z.boolean(),
  ExSkillCardRedrawInHand: z.boolean(),
});

// 31
const GroggyGaugeEffect = LogicEffect.extend({
  $type: z.literal("GroggyGaugeEffect"),
  Amount: z.number(),
  TargetCoefficientAmount: z.number(),
  CasterCoefficientAmount: z.number(),
});

// 32
const HealByHitEffect = LogicEffect.extend({
  $type: z.literal("HealByHitEffect"),
  Amount: z.number(),
  BonusSource: z.nativeEnum(StatType),
  BonusRate: z.number(),
  Duration: z.number(),
  TriggerType: z.nativeEnum(HealByHitEffectData.HealByHitTriggerType),
  ExtraStatSource: z.nativeEnum(ExtraStatType),
  ExtraStatRate: z.number(),
  IsDispellable: z.boolean(),
  RemoveCondition: z.nativeEnum(HealByHitEffectData.HealByHitRemoveCondition),
  RemoveConditionArgument: z.number(),
  TriggerArgument: z.string(),
  AddTriggerValueRate: z.number(),
  ForceFloaterHide: z.boolean(),
});

// 33
const HealConvertDamageEffect = LogicEffect.extend({
  $type: z.literal("HealConvertDamageEffect"),
  TransferRatio: z.number(),
  Duration: z.number(),
  Dispellable: z.boolean(),
  DamageCheckGroupID: z.string(),
  TransferredHealDamageGroupID: z.string(),
  ApplyDamageRatio: z.boolean(),
  ApplyDamageRatio2: z.boolean(),
});

// 34
const HealedLimitEffect = LogicEffect.extend({
  $type: z.literal("HealedLimitEffect"),
  LimitAmount: z.number(),
  LimitHPRate: z.number(),
  ExtraStatType: z.nativeEnum(ExtraStatType),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgumentFirst: z.string(),
  EndConditionArgumentSecond: z.string(),
  Dispellable: z.boolean(),
});

// 35
const HealEffect = LogicEffect.extend({
  $type: z.literal("HealEffect"),
  Amount: z.number(),
  BonusSource: z.nativeEnum(StatType),
  BonusRate: z.number(),
  ExtraStatSource: z.nativeEnum(ExtraStatType),
  ExtraStatRate: z.number(),
  ChangeRateByCost: z.string(),
  ForceFloaterHide: z.boolean(),
});

// 36
const HealOverTimeEffect = LogicEffect.extend({
  $type: z.literal("HealOverTimeEffect"),
  Amount: z.number(),
  BonusSource: z.nativeEnum(StatType),
  BonusRate: z.number(),
  ExtraStatSource: z.nativeEnum(ExtraStatType),
  ExtraStatRate: z.number(),
  Duration: z.number(),
  Period: z.number(),
  IsDispellable: z.boolean(),
  ChangeRateByCost: z.string(),
  ApplyPeriodRate: z.number(),
  PeriodMaxHealRate: z.number(),
  PeriodMinHealRate: z.number(),
  ForceFloaterHide: z.boolean(),
});

// 37
const HideCharacterEffect = LogicEffect.extend({
  $type: z.literal("HideCharacterEffect"),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgument: z.number(),
  IsDispellable: z.boolean(),
});

// 38
const ImmediateKillEffect = LogicEffect.extend({
  $type: z.literal("ImmediateKillEffect"),
  IgnoreImmortal: z.boolean(),
  IgnoreAppliedCheat: z.boolean(),
});

// 39
const ImmuneEffect = LogicEffect.extend({
  $type: z.literal("ImmuneEffect"),
  TargetLogicEffectTemplateId00: z.string(),
  TargetLogicEffectTemplateId01: z.string(),
  TargetLogicEffectTemplateId02: z.string(),
  TargetLogicEffectTemplateId03: z.string(),
  TargetLogicEffectTemplateId04: z.string(),
  TargetLogicEffectTemplateId05: z.string(),
  TargetLogicEffectTemplateId06: z.string(),
  TargetLogicEffectTemplateId07: z.string(),
  TargetLogicEffectTemplateId08: z.string(),
  TargetLogicEffectTemplateId09: z.string(),
  TargetLogicEffectTemplateId10: z.string(),
  TargetLogicEffectTemplateId11: z.string(),
  TargetLogicEffectTemplateId12: z.string(),
  FloaterType: z.nativeEnum(FontType),
});

// 41
const ImmuneGeneralEffect = LogicEffect.extend({
  $type: z.literal("ImmuneGeneralEffect"),
  ImmuneSkillType: z.string(),
  ImmuneCategory: z.string(),
  FloaterType: z.nativeEnum(FontType),
  ExceptLogicTemplateId00: z.string(),
  ExceptLogicTemplateId01: z.string(),
  ExceptLogicTemplateId02: z.string(),
  ExceptLogicTemplateId03: z.string(),
  ExceptLogicTemplateId04: z.string(),
  ExceptLogicTemplateId05: z.string(),
  ExceptLogicGroupId00: z.string(),
  ExceptLogicGroupId01: z.string(),
  ExceptLogicGroupId02: z.string(),
  ExceptLogicGroupId03: z.string(),
  ExceptLogicGroupId04: z.string(),
  ExceptLogicGroupId05: z.string(),
});

// 42-43
const ImmuneInvokerLogicEffectIdCondtionEffect = LogicEffect.extend({
  ImmuneSkillType: z.string(),
  ImmuneCategory: z.string(),
  CheckLogicEffectGroupId: z.string(),
  FloaterType: z.nativeEnum(FontType),
  Dispellable: z.boolean(),
});

// 42
const ImmuneInvokerWithLogicEffectIdEffect =
  ImmuneInvokerLogicEffectIdCondtionEffect.extend({
    $type: z.literal("ImmuneInvokerWithLogicEffectIdEffect"),
  });

// 43
const ImmuneInvokerWithoutLogicEffectIdEffect =
  ImmuneInvokerLogicEffectIdCondtionEffect.extend({
    $type: z.literal("ImmuneInvokerWithoutLogicEffectIdEffect"),
  });

// 44
const KnockbackEffect = LogicEffect.extend({
  $type: z.literal("KnockbackEffect"),
  MoveDuration: z.number(),
  MoveDistance: z.number(),
  KnockbackDirection: z.nativeEnum(KnockbackDirection),
});

// 45
const MaxHPCapGaugeEffect = LogicEffect.extend({
  $type: z.literal("MaxHPCapGaugeEffect"),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgument: z.number(),
  Dispellable: z.boolean(),
  MaxValue: z.number(),
  ReduceValuePerHealPoint: z.number(),
  CapOverDeadlyAttackGroupId: z.string(),
});

// 46
const MaxHPCapGaugeValueEffect = LogicEffect.extend({
  $type: z.literal("MaxHPCapGaugeValueEffect"),
  MaxHPCapGaugeValue: z.number(),
});

// 48
const NotMoveEffect = LogicEffect.extend({
  $type: z.literal("NotMoveEffect"),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgument: z.number(),
  Dispellable: z.boolean(),
});

// 49
const OverrideStageTopographyEffect = LogicEffect.extend({
  $type: z.literal("OverrideStageTopographyEffect"),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgumentFirst: z.string(),
  EndConditionArgumentSecond: z.string(),
  StageTopography: z.nativeEnum(StageTopography),
});

// 50
const ReloadAmmoEffect = LogicEffect.extend({
  $type: z.literal("ReloadAmmoEffect"),
});

// 53
const ShieldEffect = LogicEffect.extend({
  $type: z.literal("ShieldEffect"),
  BaseAmount: z.number(),
  TargetStatType: z.nativeEnum(StatType),
  TargetCoefficientAmount: z.number(),
  CasterStatType: z.nativeEnum(StatType),
  CasterCoefficientAmount: z.number(),
  Duration: z.number(),
  IsDispellable: z.boolean(),
  ChangeRateByCost: z.string(),
});

// 56
const SkillCostChangeEffect = LogicEffect.extend({
  $type: z.literal("SkillCostChangeEffect"),
  BaseAmount: z.number(),
  Coefficient: z.number(),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgument: z.number(),
  Dispellable: z.boolean(),
});

// 57
const StackDamageEffect = LogicEffect.extend({
  $type: z.literal("StackDamageEffect"),
  StackCountGroupId: z.string(),
  ActuateStackCount: z.number(),
  ActuateGroupId: z.string(),
  ApplyLogicEffectGroupId01: z.string(),
  MinApplyStackCount01: z.number(),
  DefaultDistributeRate01: z.number(),
  AddDistributeRatePerStackCount01: z.number(),
  ApplyLogicEffectGroupId02: z.string(),
  MinApplyStackCount02: z.number(),
  DefaultDistributeRate02: z.number(),
  AddDistributeRatePerStackCount02: z.number(),
  ApplyLogicEffectGroupId03: z.string(),
  MinApplyStackCount03: z.number(),
  DefaultDistributeRate03: z.number(),
  AddDistributeRatePerStackCount03: z.number(),
  Duration: z.number(),
  Dispellable: z.boolean(),
});

// 58
const StatChangeByFavorRankEffect = LogicEffect.extend({
  $type: z.literal("StatChangeByFavorRankEffect"),
  StatType: z.nativeEnum(StatType),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgumentFirst: z.string(),
  EndConditionArgumentSecond: z.string(),
  RemoveCondition: z.nativeEnum(EndCondition),
  RemoveConditionArgumentFirst: z.string(),
  RemoveConditionArgumentSecond: z.string(),
  BaseAmount: z.number(),
  CasterCoefficientAmount: z.number(),
  CasterStatType: z.nativeEnum(StatType),
  TargetCoefficientAmount: z.number(),
  Dispellable: z.boolean(),
  StackSameEffectApplied: z.boolean(),
  StackSameEffectCount: z.number(),
  ExpireOldIfStackCountOver: z.boolean(),
  RatePerFavorRank: z.number(),
});

// 59
const StatChangeEffect = LogicEffect.extend({
  $type: z.literal("StatChangeEffect"),
  StatType: z.nativeEnum(StatType),
  EndCondition: z.nativeEnum(EndCondition),
  EndConditionArgumentFirst: z.string(),
  EndConditionArgumentSecond: z.string(),
  RemoveCondition: z.nativeEnum(EndCondition),
  RemoveConditionArgumentFirst: z.string(),
  RemoveConditionArgumentSecond: z.string(),
  BaseAmount: z.number(),
  CasterCoefficientAmount: z.number(),
  CasterStatType: z.nativeEnum(StatType),
  TargetCoefficientAmount: z.number(),
  Dispellable: z.boolean(),
  StackSameEffectApplied: z.boolean(),
  StackSameEffectCount: z.number(),
  ExpireOldIfStackCountOver: z.boolean(),
  ChangeRateByCost: z.string(),
});

// 60
const StatusAddEffect = LogicEffect.extend({
  $type: z.literal("StatusAddEffect"),
  TargetStatus: z.nativeEnum(HeroStatus),
  Duration: z.number(),
  Dispellable: z.boolean(),
});

// 61
const StatusRemoveEffect = LogicEffect.extend({
  $type: z.literal("StatusRemoveEffect"),
  TargetStatus: z.nativeEnum(HeroStatus),
});

// 62
const StatusAddWithParameterEffect = LogicEffect.extend({
  $type: z.literal("StatusAddWithParameterEffect"),
  TargetStatus: z.nativeEnum(HeroStatus),
  Duration: z.number(),
  Dispellable: z.boolean(),
  Parameter: z.number(),
});

// 63
const StatusAddWithStringParameterEffect = LogicEffect.extend({
  $type: z.literal("StatusAddWithStringParameterEffect"),
  TargetStatus: z.nativeEnum(HeroStatus),
  Duration: z.number(),
  Dispellable: z.boolean(),
  Parameter: z.string(),
  ParameterSecond: z.string(),
});

// 64
const TransferredDamageEffect = LogicEffect.extend({
  $type: z.literal("TransferredDamageEffect"),
  IgnoreShield: z.boolean(),
  TransferHitResultType: z.boolean(),
  ForceFloaterHide: z.boolean(),
  DoNotKillTarget: z.boolean(),
});

// 65
const DamagedMultiplierbyChangeDamageOverTimeEffect = LogicEffect.extend({
  $type: z.literal("DamagedMultiplierbyChangeDamageOverTimeEffect"),
  AddRate: z.number(),
  ApplyLogicEffectTemplateId: z.string(),
  RemoveCondition: z.nativeEnum(EndCondition),
  RemoveConditionArgument: z.string(),
  IsDispellable: z.boolean(),
});

// 70
const DispelLogicEffectGroupIdEffect = LogicEffect.extend({
  $type: z.literal("DispelLogicEffectGroupIdEffect"),
  LogicEffectGroupIdToDispel: z.string(),
  DispelCount: z.number(),
});

export const LogicEffectSchema = z.discriminatedUnion("$type", [
  BulletTypeChangeEffect, // 7
  DamageByHitEffect, // 14
  DamagedLimitEffect, // 15
  DamagedMultiplierbyDamageOverTimeEffect, // 16
  ZDamageEffect.extend({
    $type: z.literal("DamageEffect"),
  }), // 17
  DamageOverTimeEffect, // 18
  DamageTransferEffect, // 19
  DeadlyAttackEffect, // 20
  DispelEffect, // 21
  DispelLogicEffectTemplateEffect, // 22
  DummyEffect, // 23
  ExSkillCardRedrawGaugeEffect, // 25
  ExtraStatDamageEffect, // 26
  ForceApplyStatChangeToAllyEffect, // 27
  FormConversionEffect, // 29
  GroggyGaugeEffect, // 31
  HealByHitEffect, // 32
  HealConvertDamageEffect, // 33
  HealedLimitEffect, // 34
  HealEffect, // 35
  HealOverTimeEffect, // 36
  HideCharacterEffect, // 37
  ImmediateKillEffect, // 38
  ImmuneEffect, // 39
  ImmuneGeneralEffect, // 41
  ImmuneInvokerWithLogicEffectIdEffect, // 42
  ImmuneInvokerWithoutLogicEffectIdEffect, // 43
  KnockbackEffect, // 44
  MaxHPCapGaugeEffect, // 45
  MaxHPCapGaugeValueEffect, // 46
  NotMoveEffect, // 48
  OverrideStageTopographyEffect, // 49
  ReloadAmmoEffect, // 50
  ShieldEffect, // 53
  SkillCostChangeEffect, // 56
  StackDamageEffect, // 57
  StatChangeByFavorRankEffect, // 58
  StatChangeEffect, // 59
  StatusAddEffect, // 60
  StatusRemoveEffect, // 61
  StatusAddWithParameterEffect, // 62
  StatusAddWithStringParameterEffect, // 63
  TransferredDamageEffect, // 64
  DamagedMultiplierbyChangeDamageOverTimeEffect, // 65
  DispelLogicEffectGroupIdEffect, // 70
]);

export type LogicEffectType = z.infer<typeof LogicEffectSchema>;
