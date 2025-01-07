export enum TargetSortCriteria {
  None,
  CurrentHP,
  MaxHP,
  HPRate,
  Distance,
  AttackPower,
  DefensePower,
  BuffCount,
  DebuffCount,
  CrowdControlCount,
  LogicEffectTemplateCount,
  Stat,
  SummonedTime,
  All,
}
/** flags */
export enum AliveState {
  None = 0,
  Alive = 1,
  Dying = 2,
  Dead = 4,
  AliveOrDying = 3,
  AliveOrDead = 5,
  DeadOrDying = 6,
  All = -1,
}
export enum BarrierShape {
  Circle,
  Square,
}
export enum CoverState {
  None,
  NotCovered,
  Covered,
}
export enum TransformDecideTiming {
  SkillStart,
  EntitySpawn,
}
export enum HighlightOption {
  None,
  Highlight,
  HighlightAndFactor,
}
export enum SpawnPositionTypes {
  None,
  Invoker,
  InputPosition,
  InputBattleEntity,
  AliveAllyCenter,
  AliveEnemyCenter,
  GroundCenter,
  BattleEntity,
  WorldPosition,
  SkillCommandSelectedTarget,
  SkillCommandSelectedPosition,
}
export enum SpawnDirectionTypes {
  None,
  Invoker,
  Input,
  ToTarget,
  AllyToEnemy,
  EnemyToAlly,
  AliveAllyCenter,
  AliveEnemyCenter,
  WorldPosition,
  CasterToTarget,
  TargetToCaster,
}
export enum SkillApplyType {
  None,
  UNKNOWN = 1, // TODO used in ShimikoPassive01 and CH0153Passive01, unknown type
  Direct = 2,
  Hitscan = 4,
  AlwaysBlocked,
}
export enum AbilityActivateTag {
  None,
  ActionStart,
  ActionRelease,
  ActionEnd = 4,
}
export enum TargetSortOrder {
  None,
  Highest,
  Lowest,
  Random,
}
export enum PassiveTriggerEvent {
  None,
  BattleEntity_NormalAttack = 2,
  BattleEntity_UseSkillStart,
  BattleEntity_Attack,
  BattleEntity_Damaged,
  BattleEntity_Polling,
  BattleEntity_Heal,
  BattleEntity_Healed,
  BattleEntity_Dying,
  BattleEntity_Attacked = 0xb,
  BattleEntity_Dodged,
  BattleEntity_AttackCritical,
  BattleEntity_Died,
  BattleEntity_KillEnemy,
  BattleEntity_Reload,
  BattleEntity_UseSkillEnd,
  BattleEntity_AddLogicEffectTemplate,
  BattleEntity_CoverStart,
  BattleEntity_CoverEnd,
  BattleEntity_DamageHit,
  BattleEntity_RemoveLogicEffectTemplate,
  BattleEntity_AddLogicEffectCategory,
  BattleEntity_AddLogicEffectGroupId,
  BattleEntity_RemoveLogicEffectGroupId,
  BattleEntity_KillAlly,
  BattleEntity_CountLogicEffectCategory,
  BattleEntity_UseExSkillCost,
  BattleEntity_AppliedLogicEffectCategory,
  BattleEntity_AppliedLogicEffectGroupId,
  BattleEntity_AppliedLogicEffectTemplate,
  Immediate = 1,
  Battle_Periodic = 0x69,
  Battle_Polling = 0x65,
  BattleEntityState_OnOff = 0x12d,
  BattleEntityState_NotMoving,
  BattleEntityState_Reloading,
}
export enum PassiveSkillTargetType {
  None,
  UseTriggerSource,
  UseTriggerTarget,
  UseSkillEntityTargetingRule,
  UseTriggerTargetExceptSelf,
}
export enum SkillToTargetDistributeType {
  None,
  EachToEachTarget,
  AllToOneTarget,
  OneToAllTarget,
}
/** flags */
export enum TargetSideId {
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
export enum TargetingType {
  None,
  Target,
  Position,
}
/** flags */
export enum TargetEntityType {
  None = 0,
  Character = 5,
  Character_Except_TSS = 1,
  TSS = 4,
  Supporter = 8,
  Obstacle = 2,
}
export enum ModifierCheckTarget {
  Caster,
  Target,
  CasterAlly,
  CasterEnemy,
  All,
  CasterAllyExceptCaster,
}
export enum ManualSkillTypes {
  None,
  GroupBuff,
  StrategyBuff,
  EventBuff,
}
export enum NormalAttackCondition {
  None,
  IsWeaponMounted,
  MoveEndRequired,
  TargetNotAvailable,
  ForceMoveCommandExists,
  BulletEmpty,
  BurstRoundOver,
  PublicSkillEnabled,
  FormConversionRequired,
  IsOrderByRandom,
}
export enum NormalAttackPhaseName {
  AttackEnter,
  Reload,
  AttackStart = 3,
  AttackIng,
  AttackBurstDelay,
  AttackFinish,
  MountWeapon,
  UnmountWeapon,
  SearchNewTarget = 0x7ffffffe,
  ExitNormalAttack,
}
export enum AutoUseConditionType {
  None,
  Interval,
  HpUnder,
  HasLogicEffectCategory,
  AmmoCountUnder,
  OnAttackIng,
  KillTarget,
  GainBattleItem,
  HitLogicEffectCategory,
  HpOver,
  CriticalAttack,
  CriticalAttacked,
  Healed,
  Dodged,
  Blocked,
  CoverTime,
  UseSkill,
  HitLogicEffectGroupId,
  HitLogicEffectTemplateId,
  Attacked,
  RemoveLogicEffectTemplateId,
}
export enum AreaTransformTypes {
  None,
  RadiusIncrement,
  RadiusDecrement,
  ObbCenterIncrement,
  ObbCenterDecrement,
  FanClockWise,
  FanCounterClockWise,
  FanClockwiseRound,
  FanCounterClockwiseRound,
}

export enum ProjectileTypes {
  None,
  TargetCharacter,
  TargetPosition,
  Nontarget,
  Max,
}
export enum EntitySpawnRule {
  SpawnAll,
  SpawnOnlyOne,
  SpawnOnlyOnePerFrame,
}
export enum EntitySpawnCondition {
  None,
  HPRateUnder,
  HPRateOver,
  IncludeLogicEffectTemplateId,
  ExcludeLogicEffectTemplateId,
  Rate,
  IncludeArmorType,
  ExcludeArmorType,
  SkillLevel,
  IncludeTag,
  ExcludeTag,
}
export enum EntitySpawnConditionCheckTarget {
  Caster,
  Target,
}
export enum ShapeType {
  None,
  Circle = 3,
  Donut,
  Fan,
  LineSegment,
  OBB,
}
/** flags */
export enum MovingAreaOptions {
  None = 0,
  FixedAim = 1,
  CheckSpawnPositionOutOfMovingArea = 2,
}
export enum IncludeType {
  None,
  Include,
  Exclude,
}
