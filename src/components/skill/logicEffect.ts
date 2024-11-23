import type {
  BulletType,
  EndCondition,
  FontType,
  KnockbackDirection,
  LogicEffectCategory,
  StageTopography,
  StatType,
  TacticEntityType,
} from "@/assets/game/types/flatDataExcel";
import type { PartialDeep } from "type-fest";
//import { default as logic } from "~game/db/LogicEffectDataDBSchema/LogicEffectDataDBSchema.json";
const logic: any[] = [];

type IntString = `${number}`;
type BoolString = "TRUE" | "FALSE";

enum ExtraStatType {
  None,
  InvokerCurrentHP,
  TargetCurrentHP,
  InvokerMaxHP,
  TargetMaxHP,
  InvokerLostHP,
  TargetLostHP,
  InvokerMaxHPCapGaugeValue,
  TargetMaxHPCapGaugeValue,
}
enum HeroStatus {
  None,
  Dead = 0x44c,
  Dying = 0x456,
  Exiled = 0x47e,
  Suppressed = 0x4b0,
  Stasis = 0x514,
  Knockback = 0x582,
  Pulling = 0x58c,
  Airborn = 0x596,
  Stoned = 0x5dc,
  Stunned = 0x640,
  Paralysis,
  Emp,
  Purify,
  Groggy,
  Hit,
  Frozen,
  Panic = 0x64a,
  Charmed = 0x6ae,
  Fear = 0x6b8,
  Polymorph = 0x708,
  ForcedIdle = 0x76c,
  Taunted = 0x834,
  ConcentratedTarget = 0x83e,
  Confusion = 0x848,
  MindControlled = 0x898,
  Silence = 0x8fc,
  Blind = 0x960,
  Entangle = 0x9c4,
  Slow,
  Immortal = 0xa8c,
  Indestructible,
  DisableNormalAttack = 0xa28,
  DisableExSkill,
  DisablePassiveSkill,
  DisablePublicSkill,
  ImmuneDamageAttack = 0xc4e,
  ImmuneDamageAll,
  ImmuneDamageBySkillType,
  ImmuneDead = 0xc8a,
  ImmuneStoned = 0xc94,
  ImmuneKnockback = 0xc9e,
  ImmunePulling = 0xca8,
  ImmuneAirborn = 0xcb2,
  ImmuneStunned = 0xcbc,
  ImmuneCharmed = 0xcc6,
  ImmuneFear = 0xcd0,
  ImmunePolymorph = 0xcda,
  ImmuneForcedIdle = 0xce4,
  ImmuneMindControl = 0xcee,
  ImmuneSilence = 0xcf8,
  ImmuneBlind = 0xd02,
  ImmuneParalysis = 0xd0c,
  ImmuneEmp = 0xd16,
  ImmunePurify = 0xd20,
  ImmuneGroggy = 0xd2a,
  ImmuneConcentratedTarget,
  ImmuneConfusion,
  ImmuneCrowdControl = 0xdb6,
  ImmuneGroggyGaugeAdd = 0xdc0,
  Rage = 0x1004,
  Untargetable = 0x1068,
  Metamorph = 0x1130,
  Thorns = 0x1388,
  All = 0x7fffffff,
}
enum LogicEffectEndCondition {
  None,
  Duration,
  ReloadCount,
  AmmoCount,
  AmmoHit,
  UseExSkillCount,
}

interface StatChangeEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.StatChangeEffectData, BlueArchive";
  StatType: keyof typeof StatType;
  EndCondition: keyof typeof EndCondition;
  EndConditionArgumentFirst: string;
  EndConditionArgumentSecond: string;
  RemoveCondition: keyof typeof EndCondition;
  RemoveConditionArgumentFirst: string;
  RemoveConditionArgumentSecond: string;
  BaseAmount: IntString;
  CasterCoefficientAmount: IntString;
  CasterStatType: keyof typeof StatType;
  TargetCoefficientAmount: IntString;
  Dispellable: BoolString;
  StackSameEffectApplied: BoolString;
  StackSameEffectCount: IntString;
  ExpireOldIfStackCountOver: BoolString;
  ChangeRateByCost: string;
}
interface StatChangeByFavorRankEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.StatChangeByFavorRankEffectData, BlueArchive";
  StatType: keyof typeof StatType;
  EndCondition: keyof typeof EndCondition;
  EndConditionArgumentFirst: string;
  EndConditionArgumentSecond: string;
  RemoveCondition: keyof typeof EndCondition;
  RemoveConditionArgumentFirst: string;
  RemoveConditionArgumentSecond: string;
  BaseAmount: IntString;
  CasterCoefficientAmount: IntString;
  CasterStatType: keyof typeof StatType;
  TargetCoefficientAmount: IntString;
  Dispellable: BoolString;
  StackSameEffectApplied: BoolString;
  StackSameEffectCount: IntString;
  ExpireOldIfStackCountOver: BoolString;
  RatePerFavorRank: IntString;
}
interface StatusAddEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.StatusAddEffectData, BlueArchive";
  TargetStatus: keyof typeof HeroStatus;
  Duration: IntString;
  Dispellable: BoolString;
}
interface StatusAddWithParameterEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.StatusAddWithParameterEffectData, BlueArchive";
  TargetStatus: keyof typeof HeroStatus;
  Duration: IntString;
  Dispellable: BoolString;
  Parameter: IntString;
}
interface StatusAddWithStringParameterEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.StatusAddWithStringParameterEffectData, BlueArchive";
  TargetStatus: keyof typeof HeroStatus;
  Duration: IntString;
  Dispellable: BoolString;
  Parameter: string;
  ParameterSecond: string;
}
interface StatusRemoveEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.StatusRemoveEffectData, BlueArchive";
  TargetStatus: keyof typeof HeroStatus;
}
interface StackDamageEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.StackDamageEffectData, BlueArchive";
  StackCountGroupId: string;
  ActuateStackCount: IntString;
  ActuateGroupId: string;
  ApplyLogicEffectGroupId01: string;
  MinApplyStackCount01: IntString;
  DefaultDistributeRate01: IntString;
  AddDistributeRatePerStackCount01: IntString;
  ApplyLogicEffectGroupId02: string;
  MinApplyStackCount02: IntString;
  DefaultDistributeRate02: IntString;
  AddDistributeRatePerStackCount02: IntString;
  ApplyLogicEffectGroupId03: string;
  MinApplyStackCount03: IntString;
  DefaultDistributeRate03: IntString;
  AddDistributeRatePerStackCount03: IntString;
  Duration: IntString;
  Dispellable: BoolString;
}
interface ShieldEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.ShieldEffectData, BlueArchive";
  BaseAmount: IntString;
  TargetStatType: keyof typeof StatType;
  TargetCoefficientAmount: IntString;
  CasterStatType: keyof typeof StatType;
  CasterCoefficientAmount: IntString;
  Duration: IntString;
  IsDispellable: BoolString;
  ChangeRateByCost: string;
}
interface SkillCostChangeEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.SkillCostChangeEffectData, BlueArchive";
  BaseAmount: IntString;
  Coefficient: IntString;
  EndCondition: keyof typeof EndCondition;
  EndConditionArgument: IntString;
  Dispellable: BoolString;
}
interface TransferredDamageEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.TransferredDamageEffectData, BlueArchive";
  IgnoreShield: BoolString;
  TransferHitResultType: BoolString;
  ForceFloaterHide: BoolString;
  DoNotKillTarget: BoolString;
}
interface ReloadAmmoEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.ReloadAmmoEffectData, BlueArchive";
}
interface OverrideStageTopographyEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.OverrideStageTopographyEffectData, BlueArchive";
  EndCondition: keyof typeof EndCondition;
  EndConditionArgumentFirst: string;
  EndConditionArgumentSecond: string;
  StageTopography: keyof typeof StageTopography;
}
interface NotMoveEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.NotMoveEffectData, BlueArchive";
  EndCondition: keyof typeof EndCondition;
  EndConditionArgument: IntString;
  Dispellable: BoolString;
}
interface MaxHPCapGaugeEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.MaxHPCapGaugeEffectData, BlueArchive";
  EndCondition: keyof typeof EndCondition;
  EndConditionArgument: IntString;
  Dispellable: BoolString;
  MaxValue: IntString;
  ReduceValuePerHealPoint: IntString;
  CapOverDeadlyAttackGroupId: string;
}
interface MaxHPCapGaugeValueEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.MaxHPCapGaugeValueEffectData, BlueArchive";
  MaxHPCapGaugeValue: IntString;
}
interface KnockbackEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.KnockbackEffectData, BlueArchive";
  MoveDuration: IntString;
  MoveDistance: IntString;
  KnockbackDirection: keyof typeof KnockbackDirection;
}
interface ImmediateKillEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.ImmediateKillEffectData, BlueArchive";
  IgnoreImmortal: BoolString;
  IgnoreAppliedCheat: BoolString;
}
interface ImmuneEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.ImmuneEffectData, BlueArchive";
  TargetLogicEffectTemplateId00: string;
  TargetLogicEffectTemplateId01: string;
  TargetLogicEffectTemplateId02: string;
  TargetLogicEffectTemplateId03: string;
  TargetLogicEffectTemplateId04: string;
  TargetLogicEffectTemplateId05: string;
  TargetLogicEffectTemplateId06: string;
  TargetLogicEffectTemplateId07: string;
  TargetLogicEffectTemplateId08: string;
  TargetLogicEffectTemplateId09: string;
  TargetLogicEffectTemplateId10: string;
  TargetLogicEffectTemplateId11: string;
  TargetLogicEffectTemplateId12: string;
  FloaterType: keyof typeof FontType;
}
interface ImmuneGeneralEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.ImmuneGeneralEffectData, BlueArchive";
  ImmuneSkillType: string;
  ImmuneCategory: string;
  FloaterType: keyof typeof FontType;
  ExceptLogicTemplateId00: string;
  ExceptLogicTemplateId01: string;
  ExceptLogicTemplateId02: string;
  ExceptLogicTemplateId03: string;
  ExceptLogicTemplateId04: string;
  ExceptLogicTemplateId05: string;
  ExceptLogicGroupId00: string;
  ExceptLogicGroupId01: string;
  ExceptLogicGroupId02: string;
  ExceptLogicGroupId03: string;
  ExceptLogicGroupId04: string;
  ExceptLogicGroupId05: string;
}
interface ImmuneInvokerLogicEffectIdCondtionEffectData extends LogicEffectData {
  $type: string;
  ImmuneSkillType: string;
  ImmuneCategory: string;
  CheckLogicEffectGroupId: string;
  FloaterType: keyof typeof FontType;
  Dispellable: BoolString;
}
interface ImmuneInvokerWithLogicEffectIdEffectData
  extends ImmuneInvokerLogicEffectIdCondtionEffectData {
  $type: "MX.Logic.Data.ImmuneInvokerWithLogicEffectIdEffectData, BlueArchive";
}
interface ImmuneInvokerWithoutLogicEffectIdEffectData
  extends ImmuneInvokerLogicEffectIdCondtionEffectData {
  $type: "MX.Logic.Data.ImmuneInvokerWithoutLogicEffectIdEffectData, BlueArchive";
}
interface HideCharacterEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.HideCharacterEffectData, BlueArchive";
  EndCondition: keyof typeof EndCondition;
  EndConditionArgument: IntString;
  IsDispellable: BoolString;
}
interface HealByHitEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.HealByHitEffectData, BlueArchive";
  Amount: IntString;
  BonusSource: keyof typeof StatType;
  BonusRate: IntString;
  Duration: IntString;
  TriggerType: keyof typeof HealByHitEffectData.HealByHitTriggerType;
  ExtraStatSource: keyof typeof ExtraStatType;
  ExtraStatRate: IntString;
  IsDispellable: BoolString;
  RemoveCondition: keyof typeof HealByHitEffectData.HealByHitRemoveCondition;
  RemoveConditionArgument: IntString;
  TriggerArgument: string;
  AddTriggerValueRate: IntString;
  ForceFloaterHide: BoolString;
}
namespace HealByHitEffectData {
  export enum HealByHitRemoveCondition {
    None,
    HpRateOver,
    HpRateUnder,
    TriggerCountOver,
  }

  export enum HealByHitTriggerType {
    None,
    Damaged,
    Healed,
  }
}
interface HealConvertDamageEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.HealConvertDamageEffectData, BlueArchive";
  TransferRatio: IntString;
  Duration: IntString;
  Dispellable: BoolString;
  DamageCheckGroupID: string;
  TransferredHealDamageGroupID: string;
  ApplyDamageRatio: BoolString;
  ApplyDamageRatio2: BoolString;
}
interface HealedLimitEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.HealedLimitEffectData, BlueArchive";
  LimitAmount: IntString;
  LimitHPRate: IntString;
  ExtraStatType: keyof typeof ExtraStatType;
  EndCondition: keyof typeof EndCondition;
  EndConditionArgumentFirst: string;
  EndConditionArgumentSecond: string;
  Dispellable: BoolString;
}
interface HealEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.HealEffectData, BlueArchive";
  Amount: IntString;
  BonusSource: keyof typeof StatType;
  BonusRate: IntString;
  ExtraStatSource: keyof typeof ExtraStatType;
  ExtraStatRate: IntString;
  ChangeRateByCost: string;
  ForceFloaterHide: BoolString;
}
interface HealOverTimeEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.HealOverTimeEffectData, BlueArchive";
  Amount: IntString;
  BonusSource: keyof typeof StatType;
  BonusRate: IntString;
  ExtraStatSource: keyof typeof ExtraStatType;
  ExtraStatRate: IntString;
  Duration: IntString;
  Period: IntString;
  IsDispellable: BoolString;
  ChangeRateByCost: string;
  ApplyPeriodRate: IntString;
  PeriodMaxHealRate: IntString;
  PeriodMinHealRate: IntString;
  ForceFloaterHide: BoolString;
}
interface GroggyGaugeEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.GroggyGaugeEffectData, BlueArchive";
  Amount: IntString;
  TargetCoefficientAmount: IntString;
  CasterCoefficientAmount: IntString;
}
interface ForceApplyStatChangeToAllyEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.ForceApplyStatChangeToAllyEffectData, BlueArchive";
  Range: IntString;
  CategoryCondition: keyof typeof LogicEffectCategory;
  EndCondition: keyof typeof EndCondition;
  EndConditionArgumentFirst: string;
  EndConditionArgumentSecond: string;
  Dispellable: BoolString;
}
interface FormConversionEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.FormConversionEffectData, BlueArchive";
  FormConversionEndCondition: keyof typeof LogicEffectEndCondition;
  EndConditionArgument: IntString;
  FormIndex: IntString;
  NormalAttackIndex: IntString;
  PublicSkillIndex: IntString;
  Dispellable: BoolString;
  ReleaseFormConversionRequired: BoolString;
  ReleaseFormConversionDuration: IntString;
  DisableUseSkill: BoolString;
  ExSkillCardRedrawInHand: BoolString;
}
enum TargetSideId {
  None = 0,
  Self = 2,
  Ally_Except_Self = 4,
  Enemy = 8,
  Neutral = 0x10,
  Ally = 6,
  Self_or_Enemy = 0xa,
  Self_or_Neutral = 0x12,
  Ally_or_Enemy = 0xe,
  Ally_or_Neutral = 0x16,
  Enemy_or_Neutral = 0x18,
  All_Except_Self = 0xc,
  ALL = 0x7fffffff,
}
enum GaugeChargeConditionType {
  None,
  Period,
  UseSkill,
}
interface ExSkillCardRedrawGaugeEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.ExSkillCardRedrawGaugeEffectData, BlueArchive";
  TargetSide: keyof typeof TargetSideId;
  GaugeChargeCondition: keyof typeof GaugeChargeConditionType;
  ConditionParameter: string;
  TryCount: IntString;
  ChargeValue: IntString;
  InitialGaugeValue: IntString;
  MaxGaugeValue: IntString;
  InitialRedrawStackCount: IntString;
  MaxRedrawStackCount: IntString;
  MaxRedrawTriggerCount: IntString;
  IsShowUI: BoolString;
  ApplyLogicEffectGroupIdGetStack: string;
  IsNPC: BoolString;
  TacticEntityType: (keyof typeof TacticEntityType)[];
}
enum DamageCriticalType {
  None,
  Never,
  Check,
  Always,
}
interface ExtraStatDamageEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.ExtraStatDamageEffectData, BlueArchive";
  CriticalCheck: keyof typeof DamageCriticalType;
  CanEvade: BoolString;
  Amount: IntString;
  BonusSourceFirst: keyof typeof StatType;
  BonusRateFirst: IntString;
  MultiplySource: keyof typeof ExtraStatType;
  MultiplierConstant: IntString;
  AddSource: keyof typeof ExtraStatType;
  AddRate: IntString;
  MaxDamageRate: IntString;
  ApplyBulletType: BoolString;
  ApplyDefense: BoolString;
  ApplyDamageRatio: BoolString;
  ApplyDamageRatio2: BoolString;
  DefensePenetrationRate: IntString;
  ChangeRateByCost: string;
  IgnoreShield: BoolString;
  ApplyStability: BoolString;
  ApplyTerrainAdaptationDamage: BoolString;
  ApplyExDamagedRatio: BoolString;
  ForceFloaterHide: BoolString;
}
namespace DamageByHitEffectData {
  export enum DamageByHitRemoveCondition {
    None,
    HpRateOver,
    HpRateUnder,
    TriggerCountOver,
  }

  export enum DamageByHitTriggerType {
    None,
    Damaged,
    Healed,
  }
}
interface DamageByHitEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DamageByHitEffectData, BlueArchive";
  Amount: IntString;
  BonusSourceFirst: keyof typeof StatType;
  BonusRateFirst: IntString;
  Duration: IntString;
  TriggerType: keyof typeof DamageByHitEffectData.DamageByHitTriggerType;
  IsDispellable: BoolString;
  ApplyBulletType: BoolString;
  ApplyDefense: BoolString;
  ApplyDamageRatio: BoolString;
  ApplyDamageRatio2: BoolString;
  RemoveCondition: keyof typeof DamageByHitEffectData.DamageByHitRemoveCondition;
  RemoveConditionArgument: IntString;
  AddSource: keyof typeof ExtraStatType;
  AddRate: IntString;
  MaxDamageRate: IntString;
  DefensePenetrationRate: IntString;
  TriggerArgument: string;
  AddTriggerValueRate: IntString;
  IgnoreShield: BoolString;
  ApplyStability: BoolString;
  ApplyTerrainAdaptationDamage: BoolString;
  ApplyExDamagedRatio: BoolString;
  ForceFloaterHide: BoolString;
}
interface DamagedLimitEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DamagedLimitEffectData, BlueArchive";
  LimitAmount: IntString;
  LimitHPRate: IntString;
  ExtraStatType: keyof typeof ExtraStatType;
  EndCondition: keyof typeof EndCondition;
  EndConditionArgumentFirst: string;
  EndConditionArgumentSecond: string;
  Dispellable: BoolString;
}
interface DamagedMultiplierbyChangeDamageOverTimeEffectData
  extends LogicEffectData {
  $type: "MX.Logic.Data.DamagedMultiplierbyChangeDamageOverTimeEffectData, BlueArchive";
  AddRate: IntString;
  ApplyLogicEffectTemplateId: string;
  RemoveCondition: keyof typeof EndCondition;
  RemoveConditionArgument: string;
  IsDispellable: BoolString;
}
interface DamagedMultiplierbyDamageOverTimeEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DamagedMultiplierbyDamageOverTimeEffectData, BlueArchive";
  AddRate: IntString;
  ApplyLogicEffectTemplateId: string;
  RemoveCondition: keyof typeof EndCondition;
  RemoveConditionArgument: string;
  IsDispellable: BoolString;
}
interface DamageEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DamageEffectData, BlueArchive";
  CriticalCheck: keyof typeof DamageCriticalType;
  CanEvade: BoolString;
  Amount: IntString;
  BonusSourceFirst: keyof typeof StatType;
  BonusRateFirst: IntString;
  LifeRecover: IntString;
  ApplyBulletType: BoolString;
  ApplyDefense: BoolString;
  ApplyDamageRatio: BoolString;
  ApplyDamageRatio2: BoolString;
  DefensePenetrationRate: IntString;
  ChangeRateByCost: string;
  IgnoreShield: BoolString;
  ApplyStability: BoolString;
  ApplyTerrainAdaptationDamage: BoolString;
  ApplyExDamagedRatio: BoolString;
  ForceFloaterHide: BoolString;
}
interface DamageOverTimeEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DamageOverTimeEffectData, BlueArchive";
  Amount: IntString;
  BonusSourceFirst: keyof typeof StatType;
  BonusRateFirst: IntString;
  Duration: IntString;
  Period: IntString;
  IsDispellable: BoolString;
  ApplyBulletType: BoolString;
  ApplyDefense: BoolString;
  ApplyDamageRatio: BoolString;
  ApplyDamageRatio2: BoolString;
  RemoveCondition: keyof typeof DamageOverTimeEffectData.DamageOverTimeRemoveCondition;
  RemoveConditionArgument: IntString;
  AddSource: keyof typeof ExtraStatType;
  AddRate: IntString;
  MaxDamageRate: IntString;
  DefensePenetrationRate: IntString;
  ChangeRateByCost: string;
  IgnoreShield: BoolString;
  ApplyStability: BoolString;
  ApplyTerrainAdaptationDamage: BoolString;
  ApplyExDamagedRatio: BoolString;
  ForceFloaterHide: BoolString;
}
namespace DamageOverTimeEffectData {
  export enum DamageOverTimeRemoveCondition {
    None,
    HpRateOver,
    HpRateUnder,
  }
}
interface DamageTransferEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DamageTransferEffectData, BlueArchive";
  Duration: IntString;
  TransferRatio: IntString;
  IsDispellable: BoolString;
  TransferredDamageEffectGroupId: string;
  TransferredDamageEffectLevel: IntString;
}
interface DeadlyAttackEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DeadlyAttackEffectData, BlueArchive";
  Amount: IntString;
  ForceFloaterHide: BoolString;
}
interface DispelEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DispelEffectData, BlueArchive";
  DispelTarget: keyof typeof LogicEffectCategory;
  DispelCount: IntString;
}
interface DispelLogicEffectGroupIdEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DispelLogicEffectGroupIdEffectData, BlueArchive";
  LogicEffectGroupIdToDispel: string;
  DispelCount: IntString;
}
interface DispelLogicEffectTemplateEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DispelLogicEffectTemplateEffectData, BlueArchive";
  LogicEffectTemplateToDispel: string;
  DispelCount: IntString;
}
interface DummyEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.DummyEffectData, BlueArchive";
  EndCondition: keyof typeof EndCondition;
  EndConditionArgument: IntString;
  StackSameEffectApplied: BoolString;
  StackSameEffectCount: IntString;
  ExpireOldIfStackCountOver: BoolString;
  IsDispellable: BoolString;
}
interface BulletTypeChangeEffectData extends LogicEffectData {
  $type: "MX.Logic.Data.BulletTypeChangeEffectData, BlueArchive";
  EndCondition: keyof typeof LogicEffectEndCondition;
  EndConditionArgument: IntString;
  ChangeBulletType: keyof typeof BulletType;
  IsChangeNormal: BoolString;
  IsChangeEx: BoolString;
  IsChangePublic: BoolString;
  IsChangeLeader: BoolString;
  IsChangePassive: BoolString;
  IsChangeExtraPassive: BoolString;
  Dispellable: BoolString;
}

type EffectData =
  | ExSkillCardRedrawGaugeEffectData
  | ExtraStatDamageEffectData
  | DamageByHitEffectData
  | StatChangeEffectData
  | DamagedLimitEffectData
  | StatChangeByFavorRankEffectData
  | BulletTypeChangeEffectData
  | StatusAddEffectData
  | DispelEffectData
  | StatusAddWithParameterEffectData
  | StatusAddWithStringParameterEffectData
  | StatusRemoveEffectData
  | DamagedLimitEffectData
  | DamagedMultiplierbyChangeDamageOverTimeEffectData
  | StackDamageEffectData
  | DeadlyAttackEffectData
  | ShieldEffectData
  | DamageEffectData
  | SkillCostChangeEffectData
  | DamagedMultiplierbyDamageOverTimeEffectData
  | TransferredDamageEffectData
  | ReloadAmmoEffectData
  | DispelLogicEffectTemplateEffectData
  | OverrideStageTopographyEffectData
  | DummyEffectData
  | NotMoveEffectData
  | DispelLogicEffectGroupIdEffectData
  | MaxHPCapGaugeEffectData
  | DamageOverTimeEffectData
  | MaxHPCapGaugeValueEffectData
  | KnockbackEffectData
  | DamageTransferEffectData
  | ImmediateKillEffectData
  | ImmuneEffectData
  | ImmuneGeneralEffectData
  | ImmuneInvokerWithLogicEffectIdEffectData
  | ImmuneInvokerWithoutLogicEffectIdEffectData
  | HideCharacterEffectData
  | HealByHitEffectData
  | HealConvertDamageEffectData
  | HealedLimitEffectData
  | HealEffectData
  | HealOverTimeEffectData
  | GroggyGaugeEffectData
  | ForceApplyStatChangeToAllyEffectData
  | FormConversionEffectData;

interface LogicEffectData {
  Category: keyof typeof LogicEffectCategory;
  Channel: IntString;
  CommonVisualId: string;
  CommonVisualHash: IntString;
  PriorityWhenSameFrame: IntString;
}

interface LogicEffectDataDB {
  StringId: string;
  GroupId: string;
  TemplateId: string;
  Level: IntString;
  ApplyRate: IntString;
  EffectData: EffectData;
}

const logicDict = Object.fromEntries(
  (logic as any[]).map((v): [string, LogicEffectDataDB] => [
    [v.GroupId, v.Level].join(","),
    v.Bytes,
  ]),
);

export function getLogicEffect(
  id: string,
  level = 1,
): PartialDeep<LogicEffectDataDB> | undefined {
  const v: PartialDeep<LogicEffectDataDB> = logicDict[`${id},${level}`];
  if (v == null) return v;
  delete v.GroupId;
  delete v.TemplateId;
  delete v.Level;
  if (v.ApplyRate === "10000") delete v.ApplyRate;
  const e = v.EffectData;
  delete e?.$type;
  delete e?.CommonVisualId;
  delete e?.CommonVisualHash;

  function omitDefault(key: string, val: any) {
    // @ts-ignore
    if (e[key] === val) delete e[key];
  }
  omitDefault("PriorityWhenSameFrame", "1");
  omitDefault("CriticalCheck", "Check");
  omitDefault("CanEvade", "TRUE");
  omitDefault("Amount", "0");
  omitDefault("LifeRecover", "0");
  omitDefault("ApplyBulletType", "TRUE");
  omitDefault("ApplyDefense", "TRUE");
  omitDefault("ApplyDamageRatio", "TRUE");
  omitDefault("ApplyDamageRatio2", "TRUE");
  omitDefault("DefensePenetrationRate", "10000");
  omitDefault("IgnoreShield", "FALSE");
  omitDefault("ApplyStability", "TRUE");
  omitDefault("ApplyTerrainAdaptationDamage", "TRUE");
  omitDefault("ChangeRateByCost", "0");
  omitDefault("ApplyExDamagedRatio", "TRUE");
  omitDefault("ForceFloaterHide", "FALSE");
  omitDefault("DoNotKillTarget", "FALSE");
  return v;
}
